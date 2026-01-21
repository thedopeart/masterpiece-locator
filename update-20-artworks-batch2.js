const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'jean-francois-millet-oedipus-taken-down-from-the-tree',
    description: `<p><a href="/artist/jean-francois-millet"><strong>Jean-François Millet</strong></a> painted this mythological scene in 1847, one of his rare departures from peasant subjects. Shepherds rescue the infant Oedipus, who was hung in a tree and left to die because his father Laius feared the prophecy that his son would kill him. The dramatic rescue unfolds against a darkening sky.</p>

<p>This painting marked Millet's breakthrough at the Paris Salon after earlier rejections. Beneath the surface lies a hidden painting of Saint Jerome, rejected by the Salon the previous year. Millet reused the canvas, painting over the earlier work. The vertical composition creates urgency as figures strain to free the abandoned child. The <a href="/museum/national-gallery-of-canada-ottawa-canada"><strong>National Gallery of Canada</strong></a> in Ottawa acquired the work in 1914, where it remains one of the few mythological subjects in Millet's oeuvre.</p>`,
    faqs: [
      { question: "What story does the painting depict?", answer: "Shepherds rescue the infant <strong>Oedipus</strong>, hung in a tree by his father Laius. The king feared a prophecy that his son would kill him. <a href=\"/artist/jean-francois-millet\"><strong>Millet</strong></a> chose this rare mythological subject." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/national-gallery-of-canada-ottawa-canada\"><strong>National Gallery of Canada</strong></a> in Ottawa, which acquired it in 1914." },
      { question: "Why is there a hidden painting beneath?", answer: "Beneath the surface is a <strong>Saint Jerome</strong> rejected by the 1846 Salon. Millet reused the canvas, painting Oedipus over the earlier composition." },
      { question: "Why was this painting significant for Millet?", answer: "This was Millet's <strong>Salon breakthrough</strong> in 1847. Earlier submissions had been rejected. It's also rare among his work for depicting mythology rather than <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>peasant life</strong></a>." }
    ]
  },
  {
    slug: 'jean-honore-fragonard-the160cradle',
    description: `<p><a href="/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> painted this intimate domestic scene showing a mother tending to her infant in a cradle. The <a href="/movement/rococo"><strong>Rococo</strong></a> master, famous for flirtatious subjects, here turns to tender family life. Soft light illuminates the maternal moment as the mother gazes at her sleeping child.</p>

<p>Fragonard became an observant painter of family scenes alongside his more famous amorous subjects. The warm palette and loose brushwork create atmosphere rather than precise detail. Such domestic subjects gained popularity in 18th-century France, reflecting Enlightenment values about childhood and natural affection. The work demonstrates Fragonard's range beyond the playful eroticism of paintings like <em>The Swing</em>. It hangs at the <a href="/museum/mus233e-de-picardie-amiens-france"><strong>Musée de Picardie</strong></a> in Amiens, part of a strong regional collection of French painting.</p>`,
    faqs: [
      { question: "What does The Cradle depict?", answer: "A mother tenderly watches over her <strong>infant sleeping in a cradle</strong>. <a href=\"/artist/jean-honore-fragonard\"><strong>Fragonard</strong></a> captures a quiet domestic moment rather than his typical romantic subjects." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/mus233e-de-picardie-amiens-france\"><strong>Musée de Picardie</strong></a> in Amiens, France, home to an important regional collection." },
      { question: "What style is the painting?", answer: "Fragonard was a leading <a href=\"/movement/rococo\"><strong>Rococo</strong></a> painter. This work shows his softer side, using warm colors and loose brushwork to capture <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>maternal tenderness</strong></a>." },
      { question: "How is this different from Fragonard's famous works?", answer: "Unlike <em>The Swing</em> and other flirtatious subjects, this painting shows <strong>sincere family affection</strong>, reflecting Enlightenment values about childhood and natural emotion." }
    ]
  },
  {
    slug: 'paul-gauguin-pears-and-grapes',
    description: `<p><a href="/artist/paul-gauguin"><strong>Paul Gauguin</strong></a> painted this still life in 1875, early in his artistic development. Ripe pears and clusters of grapes rest on a surface, rendered in the <a href="/movement/impressionism"><strong>Impressionist</strong></a> manner he was then absorbing. The work predates by more than a decade the bold Post-Impressionist style for which he became famous.</p>

<p>In 1875, Gauguin was still a successful stockbroker who painted as a hobby. He had begun collecting Impressionist works and studying their techniques. This modest still life shows him working through the problems of color, light, and composition that would later lead to revolutionary solutions. The oil on panel belongs to a private collection. Such early works reveal Gauguin mastering conventional skills before abandoning them for Tahitian subjects and symbolic color.</p>`,
    faqs: [
      { question: "When did Gauguin paint this still life?", answer: "<a href=\"/artist/paul-gauguin\"><strong>Gauguin</strong></a> painted this in <strong>1875</strong>, when he was still a stockbroker painting as a hobby. It predates his famous Tahitian works by nearly two decades." },
      { question: "What style is Pears and Grapes?", answer: "The painting shows <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> influence, which Gauguin was studying at the time. He later developed his own Post-Impressionist style with bolder colors and symbolism." },
      { question: "Where can I see this painting?", answer: "The painting is in a <strong>private collection</strong>. Early Gauguin still lifes occasionally appear at auction as collectors seek works showing his artistic development." },
      { question: "What does this reveal about Gauguin's development?", answer: "It shows Gauguin mastering <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>conventional skills</strong></a> before abandoning them. He learned Impressionist techniques before developing his revolutionary Post-Impressionist approach." }
    ]
  },
  {
    slug: 'paul-signac-the-haystack',
    description: `<p><a href="/artist/paul-signac"><strong>Paul Signac</strong></a> painted this rural scene in 1882, before developing the Pointillist technique for which he became famous. A golden haystack dominates the foreground against a flat landscape receding to the horizon under a sweeping sky. The subdued background colors contrast with the warm tones of harvested grain.</p>

<p>This <a href="/movement/impressionism"><strong>Impressionist</strong></a> work captures a moment of rural tranquility, reflecting the transient qualities of light and atmosphere. Signac was just nineteen when he painted it. Four years later, he would meet Georges Seurat and help develop Pointillism, replacing such loose brushwork with systematic dots of pure color. The oil on panel measures 35.56 x 60.71 cm and belongs to a private collection. It documents an important transitional moment in Signac's career.</p>`,
    faqs: [
      { question: "When did Signac paint The Haystack?", answer: "<a href=\"/artist/paul-signac\"><strong>Signac</strong></a> painted this in <strong>1882</strong> at age nineteen, four years before meeting Seurat and developing Pointillism." },
      { question: "What style is this painting?", answer: "This is an <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> work, painted before Signac developed his systematic <strong>Pointillist</strong> technique with dots of pure color." },
      { question: "Where can I see The Haystack?", answer: "The painting is in a <strong>private collection</strong>. It measures 35.56 x 60.71 cm, oil on panel." },
      { question: "What makes this painting historically significant?", answer: "It documents Signac's early development before Pointillism. The loose brushwork would soon give way to the systematic dots of his later <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape paintings</strong></a>." }
    ]
  },
  {
    slug: 'paul-signac-paris-ponton-des-bains-bailet',
    description: `<p><a href="/artist/paul-signac"><strong>Paul Signac</strong></a> painted this view of a bathing pontoon along the Seine in 1885. The scene captures Parisian leisure along the river, with boats and bathers enjoying the water. Signac was absorbing <a href="/movement/impressionism"><strong>Impressionist</strong></a> influences while beginning to move toward Neo-Impressionism.</p>

<p>The following year, Signac would meet Georges Seurat and help develop Pointillism. This painting shows him at a transitional moment, interested in urban waterways and light effects but not yet applying the systematic color theory that would define his mature work. Paris offered many such bathing establishments along the Seine, temporary structures that allowed city dwellers to swim. The oil on canvas measures 59 x 91 cm and belongs to a private collection. The subject connects to Seurat's famous <em>Bathers at Asnières</em>.</p>`,
    faqs: [
      { question: "What does this painting show?", answer: "A <strong>bathing pontoon on the Seine</strong> in Paris, where city dwellers swam. <a href=\"/artist/paul-signac\"><strong>Signac</strong></a> captured Parisian leisure along the river in 1885." },
      { question: "What art movement is this from?", answer: "The painting shows <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> and early Neo-Impressionist influences. Signac would meet Seurat the following year and develop Pointillism." },
      { question: "How does this connect to other famous paintings?", answer: "The subject relates to Seurat's famous <em>Bathers at Asnières</em>. Both artists depicted <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>Seine bathers</strong></a> around the same period." },
      { question: "Where can I see this painting?", answer: "The painting is in a <strong>private collection</strong>. It measures 59 x 91 cm, oil on canvas, dated 1885." }
    ]
  },
  {
    slug: 'paula-modersohn-becker-marsh-channel-with-peat-barges',
    description: `<p><a href="/artist/paula-modersohn-becker"><strong>Paula Modersohn-Becker</strong></a> painted this <a href="/movement/expressionism"><strong>Expressionist</strong></a> landscape around 1900, depicting peat barges along a marsh channel near the artists' colony of Worpswede. The flat North German landscape stretches under a wide sky, with working boats adding human presence to the boggy terrain.</p>

<p>Modersohn-Becker discovered Worpswede in 1893 when artists from the colony exhibited in Bremen. She moved there, eventually marrying fellow painter Otto Modersohn. The marshy landscape provided endless subjects. Peat harvesting was essential local industry, and these flat-bottomed barges transported the fuel across waterways. The tempera on board measures 51 x 36 cm and belongs to a private collection. Modersohn-Becker died at just 31, but created over 700 paintings that anticipated Expressionism.</p>`,
    faqs: [
      { question: "What does the painting show?", answer: "<strong>Peat barges</strong> on a marsh channel near Worpswede in northern Germany. <a href=\"/artist/paula-modersohn-becker\"><strong>Modersohn-Becker</strong></a> depicted the working landscape where she lived among fellow artists." },
      { question: "What is Worpswede?", answer: "<strong>Worpswede</strong> was an artists' colony in northern Germany where Modersohn-Becker settled. The marshy <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> provided subjects for her and other painters." },
      { question: "What art movement is this?", answer: "The painting shows early <a href=\"/movement/expressionism\"><strong>Expressionist</strong></a> tendencies. Modersohn-Becker anticipated the movement despite dying young at just 31." },
      { question: "Where can I see this painting?", answer: "The tempera on board is in a <strong>private collection</strong>. It measures 51 x 36 cm, created around 1900." }
    ]
  },
  {
    slug: 'perugino-the-miracles-of-san-bernardino-the-healing-of-a-yo',
    description: `<p><a href="/artist/perugino"><strong>Perugino</strong></a> contributed to a series of eight panels depicting miracles of Saint Bernardino, painted in 1473 for the saint's oratory in Perugia. This <a href="/movement/renaissance"><strong>Early Renaissance</strong></a> panel shows the healing of a young person through the saint's intercession, demonstrating Perugino's skill with perspective and figure arrangement.</p>

<p>Bernardino of Siena had been canonized just 23 years earlier in 1450. The Franciscan friars of Perugia commissioned multiple artists for the series, including Perugino, Pinturicchio, and others influenced by Piero della Francesca. The paintings hung above a niche holding the saint's statue. Perugino reportedly included his own likeness in one panel, holding palette and brush. The tempera on wood measures approximately 76 x 57 cm and remains at the <a href="/museum/national-gallery-of-umbria-palazzo-dei-priori-peru"><strong>National Gallery of Umbria</strong></a> in Perugia.</p>`,
    faqs: [
      { question: "Who was Saint Bernardino?", answer: "<strong>Bernardino of Siena</strong> was a Franciscan preacher canonized in 1450. <a href=\"/artist/perugino\"><strong>Perugino</strong></a> and other artists painted his miracles for the Perugia oratory in 1473." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia, where the entire miracle series is displayed." },
      { question: "Who else contributed to this series?", answer: "Multiple artists worked on the eight panels, including <strong>Pinturicchio</strong> and others influenced by Piero della Francesca. The collaborative project showcased <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> Umbrian painting." },
      { question: "Did Perugino include himself in the paintings?", answer: "Reportedly yes. Perugino painted his <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>own likeness</strong></a> in one panel, holding a palette and brush, a common artist signature of the period." }
    ]
  },
  {
    slug: 'joaquin-sorolla-resting-bacchante',
    description: `<p><a href="/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted this <a href="/movement/impressionism"><strong>Impressionist</strong></a> nude in 1887, during his final years studying in Italy. A young woman, identified as a bacchante (follower of Bacchus), reclines on a couch, her face turned partially toward the viewer. The work shows Sorolla developing the light-filled style that would later bring him fame.</p>

<p>Sorolla had enrolled at Valencia's San Carlos Academy in 1878 and traveled to Madrid to study Velázquez. A scholarship brought him to Rome, where he painted this study. The following year he would return to Valencia, marry, and begin his rise to international recognition. The oil on canvas measures 67 x 29 cm. It hangs at the <a href="/museum/museu-de-belles-arts-de-val232ncia-valencia-spain"><strong>Museu de Belles Arts de València</strong></a>, preserving Sorolla's connection to his native city.</p>`,
    faqs: [
      { question: "What is a bacchante?", answer: "A <strong>bacchante</strong> is a female follower of Bacchus, the Roman god of wine. <a href=\"/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> depicted a reclining nude in this classical role." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/museu-de-belles-arts-de-val232ncia-valencia-spain\"><strong>Museu de Belles Arts de València</strong></a> in Spain, near where Sorolla was born and trained." },
      { question: "When did Sorolla paint this?", answer: "Sorolla painted this in <strong>1887</strong> during his final years studying in Italy. The following year he returned to Valencia and married." },
      { question: "What style is the painting?", answer: "The work shows <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> influence, particularly in its handling of light. Sorolla would later develop his famous <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>beach scenes</strong></a> with similar luminosity." }
    ]
  },
  {
    slug: 'petrus-christus-our-lady-of-the-dry-tree',
    description: `<p><a href="/artist/petrus-christus"><strong>Petrus Christus</strong></a> painted this small devotional panel around 1462-65, measuring just 15 x 12 cm. The Virgin and Child stand within a withered tree surrounded by golden letters spelling "Ave Maria." The dead branches form a crown of thorns around the glowing figures, while the dark background heightens their radiance.</p>

<p>The iconography derives from the Confraternity of Our Lady of the Dry Tree in Bruges, to which both Christus and his wife belonged. The dry tree symbolizes the Tree of Knowledge, withered after the Fall. Mary, as the New Eve, brings redemption. The tiny Christ holds an orb topped with a cross. Christus employed trompe-l'œil effects, making objects appear three-dimensional. The <a href="/museum/thyssenbornemisza-museum-madrid-spain"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid holds this jewel-like <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> masterpiece.</p>`,
    faqs: [
      { question: "What does the dry tree symbolize?", answer: "The <strong>withered tree</strong> represents the Tree of Knowledge, dead after the Fall. Mary as the New Eve brings <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>redemption</strong></a>, making new growth possible." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid. It measures just 15 x 12 cm." },
      { question: "What is the Confraternity of the Dry Tree?", answer: "A religious brotherhood in Bruges to which <a href=\"/artist/petrus-christus\"><strong>Christus</strong></a> and his wife belonged. The confraternity venerated a cult image of Mary suspended from a dead tree." },
      { question: "What do the golden letters represent?", answer: "The letters hanging from the branches spell <strong>Ave Maria</strong>, the Angelic Salutation. They add to the painting's jewel-like, devotional quality." }
    ]
  },
  {
    slug: 'piero-della-francesca-the-penance-of-st-jerome',
    description: `<p><a href="/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted this <a href="/movement/renaissance"><strong>Renaissance</strong></a> devotional panel around 1450. Saint Jerome kneels in the wilderness, beating his breast in penitence. A crucifix stands before him, and a lion (his traditional companion) appears nearby. The rocky landscape reflects Piero's characteristic precision and geometric clarity.</p>

<p>Jerome was popular among humanists for translating the Bible into Latin. Artists often depicted him either as a scholarly cardinal or as a penitent hermit. Piero chose the wilderness setting, showing Jerome's four years of ascetic life in the Syrian desert. Some scholars suggest the figure may be based on Piero himself, adding personal significance. The small panel measures 51 x 38 cm, oil on wood, and hangs at the <a href="/museum/gem228ldegalerie-berlin-germany"><strong>Gemäldegalerie</strong></a> in Berlin.</p>`,
    faqs: [
      { question: "Why is Saint Jerome shown with a lion?", answer: "Legend says Jerome removed a <strong>thorn from a lion's paw</strong>, and the grateful animal became his companion. The lion appears in most depictions of the saint." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin. It measures 51 x 38 cm, painted around 1450." },
      { question: "Why was Saint Jerome important to Renaissance artists?", answer: "Jerome translated the Bible into Latin, making him significant to <strong>humanist scholars</strong>. <a href=\"/artist/piero-della-francesca\"><strong>Piero</strong></a> and other artists frequently depicted his scholarly or penitent life." },
      { question: "What style is this painting?", answer: "The work shows <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> precision. Piero used geometric clarity and careful perspective to create a structured, contemplative <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>devotional image</strong></a>." }
    ]
  },
  {
    slug: 'fra-angelico-thebaid',
    description: `<p><a href="/artist/fra-angelico"><strong>Fra Angelico</strong></a> painted this panoramic scene of hermit monks around 1420. The Thebaid refers to the desert region around Thebes in Egypt where early Christian hermits lived in caves and rocky shelters. Across the sprawling landscape, monks pray, read, work, and encounter one another in an idealized vision of monastic life.</p>

<p>The title comes from writings about the Desert Fathers who retreated to Egypt's wilderness in the third and fourth centuries. Their lives inspired later monastic reform movements. Fra Angelico, himself a Dominican friar, celebrated these spiritual ancestors in loving detail. Attribution has been debated; some scholars proposed Lorenzo Monaco or Gherardo Starnina. Technical examination in 2003 supported Fra Angelico's authorship. The long, low panel may have decorated a communal room in a monastery. It hangs at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      { question: "What is a Thebaid painting?", answer: "A <strong>Thebaid</strong> depicts the desert region of Egypt where early Christian hermits lived. <a href=\"/artist/fra-angelico\"><strong>Fra Angelico</strong></a> showed monks at prayer, work, and contemplation across a rocky landscape." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. Its long, horizontal format suggests it originally decorated a monastery." },
      { question: "Who were the Desert Fathers?", answer: "Early Christian <strong>hermits</strong> who retreated to Egypt's wilderness in the 3rd-4th centuries. Their <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>ascetic lives</strong></a> inspired later monastic movements." },
      { question: "Why was attribution debated?", answer: "Scholars proposed Lorenzo Monaco or Gherardo Starnina as possible painters. <strong>Technical examination in 2003</strong> supported Fra Angelico's authorship of this early work." }
    ]
  },
  {
    slug: 'lawrence-alma-tadema-in-the-peristyle',
    description: `<p><a href="/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> painted this scene of Roman domestic life in 1866. A woman sits in a peristyle, the colonnaded courtyard at the heart of a Roman house. Marble columns, decorative flowers, and classical statues create an atmosphere of refined antiquity. The artist's meticulous attention to archaeological detail made such scenes convincing.</p>

<p>Alma-Tadema specialized in recreating the ancient world for Victorian audiences. He researched Roman and Greek architecture extensively, filling sketchbooks with details from archaeological sites and museum collections. Critics sometimes found his work cold, but collectors adored his polished surfaces and escapist subjects. His influence extended to Hollywood; early film designers studied his paintings for period accuracy. This oil on canvas belongs to a private collection, typical of works that circulated among wealthy Victorian patrons.</p>`,
    faqs: [
      { question: "What is a peristyle?", answer: "A <strong>peristyle</strong> is a colonnaded courtyard at the center of a Roman house. <a href=\"/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> depicted this architectural space with characteristic archaeological accuracy." },
      { question: "Where can I see this painting?", answer: "The painting is in a <strong>private collection</strong>. Alma-Tadema's works were popular with Victorian collectors and often remain privately held." },
      { question: "Why did Alma-Tadema paint Roman subjects?", answer: "Victorian audiences loved escapist views of the ancient world. Alma-Tadema researched extensively, making his <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>classical scenes</strong></a> archaeologically convincing." },
      { question: "Did Alma-Tadema influence later artists?", answer: "Yes. <strong>Hollywood film designers</strong> studied his paintings for period accuracy. His detailed recreations of ancient interiors set visual standards for historical films." }
    ]
  },
  {
    slug: 'luca-signorelli-the-crucifixion-with-st-mary-magdalen',
    description: `<p><a href="/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> painted this monumental <a href="/movement/renaissance"><strong>High Renaissance</strong></a> Crucifixion around 1502-05. Mary Magdalen kneels at the foot of the cross, dressed in blue beneath a red cloak, colors symbolizing heaven and purity beneath earthly sorrow. Christ's anatomically precise body demonstrates Signorelli's famous skill with the human figure.</p>

<p>Signorelli's mastery of foreshortening and anatomy influenced Michelangelo himself. In the background, Jerusalem sits atop distant cliffs. At Christ's feet, a skull with a serpent inside represents Satan and death. The painting came from the convent of San Vincenzo d'Annalena in Florence. Each figure feels alive and distinct through Signorelli's confident draftsmanship. The large canvas measures approximately 250 x 160 cm and hangs at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
    faqs: [
      { question: "Why is Mary Magdalen dressed in blue and red?", answer: "<strong>Blue symbolizes heaven</strong>, while red represents earthly passion. <a href=\"/artist/luca-signorelli\"><strong>Signorelli</strong></a> clothed Mary Magdalen in blue beneath red, suggesting spiritual hope under worldly grief." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. It came from the convent of San Vincenzo d'Annalena." },
      { question: "What do the skull and serpent symbolize?", answer: "At Christ's feet, a <strong>skull with a serpent</strong> represents Satan and death. Christ's sacrifice conquers both, offering <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>redemption</strong></a>." },
      { question: "Did Signorelli influence other artists?", answer: "Yes. <strong>Michelangelo</strong> himself was influenced by Signorelli's mastery of anatomy and foreshortening, visible in this <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> masterpiece." }
    ]
  },
  {
    slug: 'lucas-cranach-elder-portrait-of-duke-johann-der-bestandige-of-saxony',
    description: `<p><a href="/artist/lucas-cranach-elder"><strong>Lucas Cranach the Elder</strong></a> painted this portrait of Johann the Steadfast, Elector of Saxony, around 1509. Johann wears a sumptuous black hat and coat decorated with gold thread and seed pearls. The portrait forms half of a diptych; the matching panel shows his son Johann Friedrich the Magnanimous.</p>

<p>Cranach served as court painter to successive Saxon electors from 1505 until his death in 1553. This <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> portrait asserts dynastic legitimacy, showing father and son as rightful heirs to Saxon rule. Johann would reign from 1525 to 1532 and became an important supporter of Martin Luther. The complementary color schemes link father and son: green in Johann's background echoes his son's clothing. The original frame survives, with paint detected on its inner edges. The work hangs at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "Who was Johann the Steadfast?", answer: "<strong>Elector of Saxony</strong> from 1525 to 1532, Johann became an important supporter of Martin Luther and the Protestant Reformation." },
      { question: "Where can I see this portrait?", answer: "The portrait hangs at the <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London alongside its companion panel of Johann's son." },
      { question: "Why is this a diptych?", answer: "The painting pairs with a <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> of Johann's son. The diptych asserts <strong>dynastic legitimacy</strong> and hereditary right to rule." },
      { question: "What was Cranach's role at the Saxon court?", answer: "<a href=\"/artist/lucas-cranach-elder\"><strong>Cranach</strong></a> served as <strong>court painter</strong> from 1505 until his death in 1553, painting successive electors and their families." }
    ]
  },
  {
    slug: 'pierre-puvis-de-chavannes-hope',
    description: `<p><a href="/artist/pierre-puvis-de-chavannes"><strong>Pierre Puvis de Chavannes</strong></a> painted this <a href="/movement/symbolism"><strong>Symbolist</strong></a> allegory in 1872, responding to France's devastating defeat in the Franco-Prussian War. A young woman sits on a burial mound covered with white drapery, holding an oak branch. Behind her, a desolate landscape shows ruined buildings and makeshift grave crosses.</p>

<p>Yet flowers grow through stones, and light glimmers on the horizon. The painting spoke to a traumatized nation, offering hope without false optimism. Puvis exhibited it at the 1872 Salon. The simplified forms and muted palette influenced younger artists; Gauguin kept a reproduction in Tahiti and featured it in his painting <em>Still Life with Hope</em>. A smaller, nude version exists at the Musée d'Orsay. This clothed version measures 102.5 x 129.5 cm and hangs at the <a href="/museum/walters-art-museum-baltimore-md-us"><strong>Walters Art Museum</strong></a> in Baltimore.</p>`,
    faqs: [
      { question: "Why did Puvis paint Hope?", answer: "The <strong>Franco-Prussian War</strong> (1870-71) devastated France. <a href=\"/artist/pierre-puvis-de-chavannes\"><strong>Puvis</strong></a> painted Hope as allegory of national recovery, showing new growth amid ruins." },
      { question: "Where can I see Hope?", answer: "This version hangs at the <a href=\"/museum/walters-art-museum-baltimore-md-us\"><strong>Walters Art Museum</strong></a> in Baltimore. A smaller nude version is at the Musée d'Orsay." },
      { question: "What symbols appear in the painting?", answer: "The young woman holds an <strong>oak branch</strong> (strength and endurance). Flowers grow through stones, light glimmers at the horizon, suggesting <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>rebirth</strong></a>." },
      { question: "Who was influenced by this painting?", answer: "<strong>Gauguin</strong> kept a reproduction in Tahiti and painted it into his own <em>Still Life with Hope</em>. The work influenced <a href=\"/movement/symbolism\"><strong>Symbolist</strong></a> painters broadly." }
    ]
  },
  {
    slug: 'maurice-denis-landscape-with-green-trees-or-beech-trees-in-kerdu',
    description: `<p><a href="/artist/maurice-denis"><strong>Maurice Denis</strong></a> painted this <a href="/movement/post-impressionism"><strong>Post-Impressionist</strong></a> landscape in 1893, during a personally significant year when he married Marthe Meurier. The scene shows the forest of Kerduel, legendarily associated with King Arthur. A young woman approaches an angel across a low wall, an allegory of spiritual calling within a dreamlike forest.</p>

<p>Denis co-founded the Nabis group, artists who sought to convey spiritual truths through color and simplified forms. This painting summarizes his Symbolist vision, combining real landscape with mystical encounter. Denis valued it highly, depositing it with a gallery in 1917 only to reclaim it the following year, keeping it until his death. The oil on canvas hangs at the <a href="/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
    faqs: [
      { question: "What does the painting depict?", answer: "A young woman approaches an <strong>angel in the forest of Kerduel</strong>. <a href=\"/artist/maurice-denis\"><strong>Denis</strong></a> created an allegory of spiritual calling within a landscape associated with King Arthur legends." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/mus233e-d39orsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris. Denis kept it most of his life after briefly depositing it with a gallery." },
      { question: "What art movement does this represent?", answer: "Denis was a founding member of the <strong>Nabis</strong> group and a <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a>. The work shows his characteristic blend of landscape and <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual symbolism</strong></a>." },
      { question: "Why was 1893 significant for Denis?", answer: "Denis married <strong>Marthe Meurier</strong> that year. This painting represents his artistic ambitions fulfilled alongside personal happiness." }
    ]
  },
  {
    slug: 'michelangelo-madonna-and-child',
    description: `<p><a href="/artist/michelangelo"><strong>Michelangelo</strong></a> carved this marble <strong>Madonna and Child</strong> between 1503 and 1505. The 128 cm sculpture shows Mary seated with the Christ child standing between her knees, almost stepping away from her. Unlike traditional depictions of a smiling mother cradling an infant, this Virgin gazes downward in quiet contemplation while her son appears ready to leave.</p>

<p>This was the only Michelangelo sculpture to leave Italy during his lifetime. Bruges cloth merchants Giovanni and Alessandro Moscheroni purchased it for 100 ducats. The sculpture has twice been removed: by Napoleon's forces in 1794 (returned after Waterloo) and by retreating German soldiers in 1944 (discovered in an Austrian salt mine). It stands in the <a href="/museum/church-of-our-lady-bruges-belgium"><strong>Church of Our Lady</strong></a> in Bruges, a <a href="/movement/renaissance"><strong>High Renaissance</strong></a> masterpiece in a Gothic setting.</p>`,
    faqs: [
      { question: "What makes this Madonna unusual?", answer: "Unlike traditional smiling Madonnas, <strong>Mary gazes down pensively</strong> while the Christ child stands almost <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>stepping away</strong></a>. The mood is contemplative rather than tender." },
      { question: "Where can I see this sculpture?", answer: "The marble sculpture stands in the <a href=\"/museum/church-of-our-lady-bruges-belgium\"><strong>Church of Our Lady</strong></a> in Bruges, Belgium, where the Moscheroni brothers placed it in the early 1500s." },
      { question: "Was this sculpture ever stolen?", answer: "Twice. <strong>Napoleon's forces</strong> took it in 1794; it returned after Waterloo. German soldiers took it in 1944; it was found in an Austrian salt mine." },
      { question: "Why is this sculpture historically significant?", answer: "It was the only <a href=\"/artist/michelangelo\"><strong>Michelangelo</strong></a> sculpture to leave Italy during his lifetime. Bruges merchants purchased it for 100 ducats around 1504." }
    ]
  },
  {
    slug: 'pieter-bruegel-elder-parable-of-the-sower',
    description: `<p><a href="/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> painted this <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> landscape in 1557, one of his earliest signed works. A peasant scatters seeds in the foreground while Christ preaches to a crowd across the river. The biblical parable unfolds within an ambitious panoramic landscape stretching to distant mountains.</p>

<p>Bruegel had recently returned from Italy, where he sketched the Alps. That experience informed the dramatic vertical mountains and atmospheric perspective here. Every leaf in the foreground trees receives meticulous attention, yet the distant hills dissolve into soft haze. The painting belongs to just a handful of Bruegel works in North American museums. The Putnam Foundation acquired it in 1957 from a Belgian collection. The oil on wood panel measures 73.7 x 102.9 cm and hangs at the <a href="/museum/timken-museum-of-art-san-diego-ca-us"><strong>Timken Museum</strong></a> in San Diego.</p>`,
    faqs: [
      { question: "What biblical story does this depict?", answer: "The <strong>Parable of the Sower</strong> from Matthew, Mark, and Luke. A peasant scatters seeds in the foreground while Christ preaches across the river." },
      { question: "Where can I see this painting?", answer: "The painting hangs at the <a href=\"/museum/timken-museum-of-art-san-diego-ca-us\"><strong>Timken Museum</strong></a> in San Diego. It's one of few <a href=\"/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a> works in North America." },
      { question: "What makes this an early Bruegel masterpiece?", answer: "Dated 1557, it's among his <strong>earliest signed works</strong>. The ambitious <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> shows Italian influence from his recent travels." },
      { question: "How did Italian travel influence this painting?", answer: "Bruegel sketched the <strong>Alps</strong> during his Italian journey. The dramatic vertical mountains and atmospheric perspective reflect those studies." }
    ]
  },
  {
    slug: 'camille-corot-olevano-la-serpentara',
    description: `<p><a href="/artist/camille-corot"><strong>Camille Corot</strong></a> painted this <a href="/movement/romanticism"><strong>Romantic</strong></a> Italian landscape in 1827 during his first trip to Italy. La Serpentara is a rocky, wooded area near Olevano Romano in the Lazio region, a site that attracted many 19th-century landscape painters. Corot captured the rugged terrain under Italian light.</p>

<p>Corot's Italian studies transformed his art. Working outdoors, he learned to observe subtle gradations of light and atmosphere that would define his mature style. Such oil sketches, painted directly from nature, influenced the Impressionists decades later. The work measures 59 x 46 cm, oil on paper mounted on canvas. It belongs to the <a href="/museum/rudolph-staechelin-family-foundation-basel-switzer"><strong>Rudolf Staechelin Family Foundation</strong></a> in Basel, Switzerland, part of a distinguished collection of French painting.</p>`,
    faqs: [
      { question: "What is La Serpentara?", answer: "<strong>La Serpentara</strong> is a rocky, wooded area near Olevano Romano in Italy. The picturesque site attracted many 19th-century <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape painters</strong></a>." },
      { question: "Where can I see this painting?", answer: "The painting belongs to the <a href=\"/museum/rudolph-staechelin-family-foundation-basel-switzer\"><strong>Rudolf Staechelin Family Foundation</strong></a> in Basel, Switzerland." },
      { question: "Why was Corot's Italian trip important?", answer: "Working outdoors in Italy, <a href=\"/artist/camille-corot\"><strong>Corot</strong></a> learned to capture <strong>subtle gradations of light</strong>. These studies influenced the Impressionists decades later." },
      { question: "What style is this painting?", answer: "The work reflects <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> interest in nature observed directly. Corot painted outdoors, capturing Italian light and atmosphere." }
    ]
  },
  {
    slug: 'pieter-de-hooch-tric-trac-players',
    description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre scene around 1652-55. Figures gather around a table playing tric-trac, a form of backgammon popular in the 17th-century Netherlands. The interior setting shows de Hooch's characteristic attention to domestic spaces and light.</p>

<p>Tric-trac scenes were common in Dutch painting, depicting leisure and social interaction. De Hooch, along with Vermeer, specialized in quiet interior scenes. His careful rendering of space and light through doorways and windows influenced generations of painters. The oil on wood panel measures 46 x 33 cm. Versions exist in both the Art Institute of Chicago and the <a href="/museum/art-institute-of-chicago-chicago-il-us-national-ga"><strong>National Gallery of Ireland</strong></a> in Dublin, reflecting the subject's popularity.</p>`,
    faqs: [
      { question: "What is tric-trac?", answer: "<strong>Tric-trac</strong> was a popular form of backgammon in 17th-century Netherlands. <a href=\"/artist/pieter-de-hooch\"><strong>De Hooch</strong></a> and other Dutch painters often depicted this leisure activity." },
      { question: "Where can I see this painting?", answer: "Versions exist at both the Art Institute of Chicago and the <a href=\"/museum/art-institute-of-chicago-chicago-il-us-national-ga\"><strong>National Gallery of Ireland</strong></a> in Dublin." },
      { question: "What is de Hooch known for?", answer: "De Hooch specialized in <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>domestic interiors</strong></a> with careful attention to space and light. He worked alongside Vermeer in Delft." },
      { question: "What art movement is this?", answer: "The painting represents the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, when artists depicted prosperous middle-class life through genre scenes and domestic interiors." }
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
