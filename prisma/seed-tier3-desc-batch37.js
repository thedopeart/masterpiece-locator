const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'masaccio-the-madonna-and-child-with-stanna': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio</strong></a> painted the <strong>Madonna and Child with St. Anne</strong>, combining three generations of the Holy Family. The solid, three-dimensional figures broke with the flat Gothic style that preceded him." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. <a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio's</strong></a> surviving works are among the Uffizi's most historically important holdings." },
    { question: "Did Masaccio work with other artists on this?", answer: "Scholars believe <strong>Masolino da Panicale</strong> collaborated on this panel. The two painters worked together on several projects, and art historians debate which parts each painted. <a href=\"/apps/masterpieces/artist/masaccio\"><strong>Masaccio's</strong></a> contribution is generally identified by its greater solidity and naturalism." }
  ],
  'matthias-grunewald-the-mocking-of-christ': [
    { question: "What does The Mocking of Christ show?", answer: "<a href=\"/apps/masterpieces/artist/matthias-grunewald\"><strong>Grünewald</strong></a> depicted <strong>Christ being mocked and beaten</strong> before his crucifixion. The distorted, anguished figures and harsh lighting make it one of the most emotionally intense treatments of this subject in Northern art." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich. <a href=\"/apps/masterpieces/artist/matthias-grunewald\"><strong>Grünewald's</strong></a> surviving works are rare and concentrated in German collections." },
    { question: "What is Grünewald known for?", answer: "<a href=\"/apps/masterpieces/artist/matthias-grunewald\"><strong>Grünewald</strong></a> created some of the most <strong>emotionally extreme</strong> religious paintings of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>. His Isenheim Altarpiece, with its agonized Crucifixion, is considered one of the greatest paintings in Western art. Expressionist artists later claimed him as a forerunner." }
  ],
  'maurice-denis-sleeping-woman': [
    { question: "What does Sleeping Woman depict?", answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis</strong></a> painted a <strong>woman asleep</strong> in his characteristic decorative style: flat color areas, simplified forms, and a gentle, dreamlike atmosphere influenced by <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-bonnat\"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, France." },
    { question: "What is Maurice Denis known for?", answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis</strong></a> was a leading member of the <strong>Nabis</strong>, a group of Post-Impressionist painters who emphasized flat pattern and decorative color. His famous statement that a painting is \"essentially a flat surface covered with colors\" became a touchstone of modern art theory." }
  ],
  'maurice-denis-trinity-evening': [
    { question: "What does Trinity Evening depict?", answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis</strong></a> painted a <strong>religious scene</strong> with his signature blend of devotional subject matter and modern decorative style. His Catholic faith deeply informed his art throughout his career." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis</strong></a> produced many religious works for churches and private patrons." },
    { question: "How did faith shape Denis's art?", answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis</strong></a> was a devout Catholic who saw art as <strong>spiritual expression</strong>. He created murals, altarpieces, and devotional paintings that combined modern Post-Impressionist aesthetics with traditional religious subjects." }
  ],
  'maurice-denis-the-offertory-at-calvary': [
    { question: "What does The Offertory at Calvary show?", answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis</strong></a> depicted a <strong>liturgical offering</strong> at the site of Christ's crucifixion. The painting merges religious ritual with his decorative Nabi style: flat planes of color, simplified figures, and a contemplative mood." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis's</strong></a> religious paintings are scattered across churches, museums, and private hands." },
    { question: "What are the Nabis?", answer: "The <strong>Nabis</strong> (from the Hebrew word for \"prophets\") were a group of French artists active in the 1890s. <a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Denis</strong></a>, Bonnard, and Vuillard were key members. They emphasized subjective color, flat pattern, and the painting's surface over illusionistic depth." }
  ],
  'maurice-quentin-de-la-tour-selfportrait-with-the-bull39seye': [
    { question: "What does this self-portrait show?", answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> portrayed himself with a <strong>confident, lively expression</strong>, demonstrating the vivacity that made his pastel portraits famous. The \"bull's-eye\" likely refers to a circular window or mirror in the composition." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-d39art-et-d39histoire-geneva-switzerland\"><strong>Musée d'Art et d'Histoire</strong></a> in Geneva, Switzerland." },
    { question: "What is La Tour known for?", answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> was the leading <strong>pastel portraitist</strong> of 18th-century France. He captured the personalities of Enlightenment figures including Voltaire, Rousseau, and Louis XV with extraordinary liveliness and psychological insight." }
  ],
  'maurice-quentin-de-la-tour-selfportrait-with-frill': [
    { question: "What does this self-portrait show?", answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> depicted himself wearing a <strong>decorative frill</strong> at his collar, presenting the image of a fashionable, successful artist. His sparkling eyes and slight smile show the charm that made him popular at court." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mus233e-de-picardie-amiens-france\"><strong>Musée de Picardie</strong></a> in Amiens, France." },
    { question: "Why did La Tour work in pastel?", answer: "<a href=\"/apps/masterpieces/artist/maurice-quentin-de-la-tour\"><strong>La Tour</strong></a> chose <strong>pastel</strong> for its ability to capture flesh tones and subtle expressions with immediacy. The medium's softness and luminosity suited his goal of bringing portraits to life, making sitters appear to breathe on the paper." }
  ],
  'max-liebermann-the-farmer': [
    { question: "What does The Farmer depict?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> painted a <strong>working farmer</strong>, reflecting his early commitment to Realist subjects. His naturalistic style drew from French and Dutch traditions of depicting rural labor with dignity." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann's</strong></a> early Realist works are valued alongside his later Impressionist garden paintings." },
    { question: "What is Liebermann known for?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Max Liebermann</strong></a> was the leading figure of German <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. He moved from dark Realist scenes of workers to bright, light-filled paintings of gardens and leisure, becoming president of the Berlin Secession." }
  ],
  'max-liebermann-women-plucking-geese': [
    { question: "What does Women Plucking Geese show?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> painted <strong>women preparing geese</strong> in a workspace, a Realist subject that caused controversy when first exhibited. Critics found the unglamorous labor too raw for fine art." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/alte-nationalgalerie-berlin-germany\"><strong>Alte Nationalgalerie</strong></a> in Berlin. This early masterpiece established <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann's</strong></a> reputation." },
    { question: "Why was this painting controversial?", answer: "Exhibited in 1872, critics attacked it as <strong>ugly and unpoetic</strong>. <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> was showing working-class labor without romanticizing it, following Courbet's Realist example. The painting's boldness now marks it as a turning point in German art." }
  ],
  'max-liebermann-spinner': [
    { question: "What does Spinner depict?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> painted a <strong>woman spinning thread</strong>, a domestic labor subject he observed during his stays in the Netherlands. The muted palette and careful attention to light reflect his admiration for Dutch Old Masters." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann's</strong></a> Dutch-period works show the transition from his early dark Realism toward lighter Impressionist techniques." },
    { question: "How did the Netherlands influence Liebermann?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> made frequent trips to the <strong>Netherlands</strong>, studying Rembrandt, Hals, and contemporary Dutch painters. The Dutch light and landscape transformed his palette and helped him develop the lighter touch that characterized his mature work." }
  ],
  'max-liebermann-stevenstift-in-leiden': [
    { question: "What does Stevenstift in Leiden show?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> painted the <strong>Stevenstift</strong>, an almshouse in Leiden, Netherlands. The quiet courtyard with elderly residents reflects his interest in institutional care and communal living arrangements." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> painted several Dutch almshouses and orphanages during his visits to the Netherlands." },
    { question: "Why did Liebermann paint almshouses?", answer: "Dutch <strong>almshouses</strong> (hofjes) offered <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> subjects that combined architectural interest, soft natural light, and human pathos. They connected him to the Dutch tradition of institutional portraiture going back to Hals and Rembrandt." }
  ],
  'max-liebermann-spinning-workshop-in-laren': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> depicted a <strong>workshop in Laren</strong>, a Dutch village, where women spin thread. The interior light filtering through windows creates the atmospheric effects he was increasingly drawn to." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> found rich subject matter in Dutch village workshops during the 1880s and 1890s." },
    { question: "What drew Liebermann to workshop interiors?", answer: "<a href=\"/apps/masterpieces/artist/max-liebermann\"><strong>Liebermann</strong></a> was interested in <strong>labor and light</strong> together. Workshop interiors let him paint both: workers absorbed in their tasks under natural light, connecting social realism with the luminous effects he admired in Impressionism." }
  ],
  'mikhail-vrubel-sitter-in-the-renaissance-setting': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/mikhail-vrubel\"><strong>Vrubel</strong></a> painted a <strong>figure in a Renaissance-inspired setting</strong>, blending historical imagination with his distinctively fractured, jewel-like style. His paintings shimmer with an almost mosaic-like texture." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museum-of-russian-art-tereshchenko-museum-kyiv-ukr\"><strong>Museum of Russian Art</strong></a> (Tereshchenko Museum) in Kyiv, Ukraine." },
    { question: "What is Vrubel known for?", answer: "<a href=\"/apps/masterpieces/artist/mikhail-vrubel\"><strong>Vrubel</strong></a> was Russia's most original <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painter. His <strong>crystalline brushwork</strong>, dark romantic themes, and paintings of demons and angels stand apart from both Russian Realism and Western Art Nouveau." }
  ],
  'nicolas-poussin-mars-and-venus': [
    { question: "What mythological scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> painted the love affair between <strong>Mars, god of war, and Venus, goddess of love</strong>. The scene exemplifies his classical approach: balanced composition, idealized figures, and a subject drawn from ancient mythology." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin's</strong></a> mythological paintings are held in major collections worldwide." },
    { question: "What is Poussin's importance?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> was the greatest French <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> classicist. Working in Rome, he developed a <strong>rational, intellectual approach</strong> to painting that influenced French art for two centuries, from the Academy to Cézanne." }
  ],
  'nicolas-poussin-sleeping-venus-surprised-by-satyr': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> painted a <strong>sleeping Venus</strong> discovered by a satyr, a mythological subject combining beauty and threat. The contrast between the serene goddess and the wild satyr creates dramatic tension within a classically composed landscape." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthaus-zurich\"><strong>Kunsthaus Zürich</strong></a> in Switzerland." },
    { question: "How did Poussin handle mythological subjects?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> treated mythology with <strong>intellectual seriousness</strong>. His mythological paintings aren't just decorative: they explore ideas about love, mortality, and the relationship between civilization and nature through carefully researched ancient sources." }
  ],
  'nicolas-poussin-venus-weeping-over-adonis': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> depicted <strong>Venus mourning over the dead Adonis</strong>, killed by a wild boar while hunting. The myth of beautiful youth cut short resonated with Poussin's meditations on mortality." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-des-beauxarts-de-caen-caen-france\"><strong>Musée des Beaux-Arts de Caen</strong></a> in Normandy, France." },
    { question: "What themes did Poussin explore?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> returned often to themes of <strong>death, loss, and the passage of time</strong>. Even his mythological scenes carry philosophical weight, reflecting his Stoic outlook and deep engagement with classical literature." }
  ],
  'nicolas-poussin-the-death-of-germanicus': [
    { question: "What historical event does this depict?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> painted the <strong>deathbed of Germanicus</strong>, the popular Roman general believed to have been poisoned. Soldiers and family gather around the dying hero, swearing vengeance. It's one of Poussin's most celebrated history paintings." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/minneapolis-institute-of-art\"><strong>Minneapolis Institute of Art</strong></a>. This early masterpiece established <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin's</strong></a> reputation in Rome." },
    { question: "Why is this painting historically important?", answer: "Painted around 1627, it became a <strong>model for history painting</strong> for the next two centuries. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin's</strong></a> arrangement of expressive figures around a central action set the template that David, Ingres, and other Academic painters followed." }
  ],
  'nicolas-poussin-victory-of-joshua-over-amorites': [
    { question: "What biblical scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> depicted <strong>Joshua's victory over the Amorites</strong>, when God stopped the sun to extend the battle. The swirling composition of soldiers and falling bodies shows Poussin handling large-scale military action." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/pushkin-museum\"><strong>Pushkin Museum</strong></a> in Moscow. Russian collectors acquired important <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> works during the 18th and 19th centuries." },
    { question: "Did Poussin paint many battle scenes?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> painted some <strong>battle scenes</strong> early in his career, but he increasingly preferred quieter, more contemplative subjects. His temperament favored intellectual composition over the chaos of combat." }
  ],
  'nicolas-poussin-st-cecilia': [
    { question: "Who is St. Cecilia?", answer: "<strong>St. Cecilia</strong> is the patron saint of music. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> depicted her with musical instruments, following the traditional iconography. The serene composition reflects his classical restraint." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. Spanish royal collectors acquired several major <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> works." },
    { question: "How did Poussin approach religious subjects?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> treated religious subjects with the same <strong>classical dignity</strong> as his mythological paintings. His saints are calm, noble figures in carefully balanced compositions, reflecting reason and order rather than the emotional intensity of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> contemporaries." }
  ],
  'nicolas-poussin-venus-and-adonis': [
    { question: "What does Venus and Adonis depict?", answer: "<a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> painted <strong>Venus and her mortal lover Adonis</strong>, likely showing their parting before the fatal hunt. The contrast between divine immortality and human fragility was a theme Poussin explored repeatedly." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin's</strong></a> mythological paintings are among the most valued works of French classical painting." },
    { question: "How does Poussin compare to Rubens?", answer: "Both were great <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painters but opposites in temperament. <strong>Rubens</strong> was sensual and dynamic; <a href=\"/apps/masterpieces/artist/nicolas-poussin\"><strong>Poussin</strong></a> was intellectual and restrained. Their contrasting approaches defined a debate in French art that lasted centuries." }
  ],
  'nikolai-ge-young-italian-woman-in-a-folk-costume-study': [
    { question: "What does this study show?", answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Nikolai Ge</strong></a> painted a <strong>young Italian woman</strong> in traditional costume, a study made during his years living in Italy. Russian artists frequently traveled to Italy for artistic inspiration." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/belarusian-national-museum-of-fine-arts-minsk-bela\"><strong>Belarusian National Museum of Fine Arts</strong></a> in Minsk." },
    { question: "What is Nikolai Ge known for?", answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge</strong></a> was a Russian painter known for <strong>dramatic historical and religious paintings</strong>. He was close to Leo Tolstoy and shared his moral philosophy, producing intensely emotional works about Christ's passion and Russian history." }
  ],
  'peter-interrogates-alexei': [
    { question: "What historical scene does this depict?", answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge</strong></a> painted <strong>Tsar Peter the Great interrogating his son Alexei</strong>, who had conspired against him. The scene captures a devastating moment: a father confronting his treasonous son, knowing the outcome will be death." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg. It's one of <a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge's</strong></a> most famous paintings." },
    { question: "Why is this painting significant in Russian art?", answer: "The painting's <strong>psychological intensity</strong> was groundbreaking. <a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge</strong></a> stripped away theatrical grandeur to focus on the human cost of political power. Peter's cold determination and Alexei's fear create a tension that still grips viewers." }
  ],
  'what-is-truth-ge': [
    { question: "What does What is Truth? depict?", answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge</strong></a> painted <strong>Christ standing before Pontius Pilate</strong>, who has just asked \"What is truth?\" The painting strips the scene to its essentials: two figures, harsh light, and the question that echoes through history." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg. The painting caused a scandal when first exhibited in 1890." },
    { question: "Why was this painting controversial?", answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge</strong></a> depicted Christ as an <strong>ordinary, exhausted prisoner</strong> rather than a divine figure. Tsar Alexander III had it removed from exhibition. Tolstoy, however, praised it as the most truthful depiction of Christ in art." }
  ],
  'nikolai-ge-vineyard-at-vico': [
    { question: "What does Vineyard at Vico show?", answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge</strong></a> painted an <strong>Italian vineyard</strong> near Vico, capturing Mediterranean light and vegetation during his years abroad. The sun-drenched landscape contrasts with the dark emotional intensity of his history paintings." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg, which holds the most comprehensive collection of <a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge's</strong></a> work." },
    { question: "Did Ge paint many landscapes?", answer: "<a href=\"/apps/masterpieces/artist/nikolai-ge\"><strong>Ge</strong></a> produced <strong>landscapes</strong> alongside his famous history and religious paintings. His Italian landscapes show a brighter, more relaxed side than the dramatic canvases he's best known for." }
  ],
  'odilon-redon-peyrelebade-landscape': [
    { question: "What does Peyrelebade Landscape show?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon</strong></a> painted the <strong>landscape around Peyrelebade</strong>, his family's estate in southwestern France. The scene shows his ability to render naturalistic scenery alongside the fantastical, dreamlike imagery he's best known for." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. <a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Redon's</strong></a> work spans from dark charcoal \"noirs\" to vibrant color paintings." },
    { question: "What is Redon known for?", answer: "<a href=\"/apps/masterpieces/artist/odilon-redon\"><strong>Odilon Redon</strong></a> was a French <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> artist famous for <strong>dreamlike, fantastical imagery</strong>: floating eyes, strange flowers, and mythological visions. His later color work influenced the Nabis and Matisse." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
