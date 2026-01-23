const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Claude Lorrain
  await prisma.artist.update({
    where: { slug: 'claude-lorrain' },
    data: {
      bioFull: `<p><strong>Claude Lorrain</strong> (c. 1600–1682) transformed landscape painting from mere background into the main subject of art. Born Claude Gellée in the village of Chamagne in the independent Duchy of Lorraine, he was orphaned around age twelve and eventually traveled to Rome. According to his first biographer, Claude trained as a pastrycook before studying painting under Agostino Tassi, a landscapist who specialized in illusionistic architecture. He spent about two years in Naples with Goffredo Wals, then briefly returned to his homeland before settling permanently in Rome by 1627, where he became part of the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> movement's Roman circle.</p>

<p>Claude's golden, light-filled <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> idealized the Roman countryside, framing classical ruins and small figures within harbors, groves, and valleys bathed in atmospheric sunlight. He was among the first painters to depict the sun itself shining directly into the picture. By 1633 he had joined the Accademia di San Luca, and to protect against forgeries he began recording his compositions in the <em>Liber Veritatis</em> (Book of Truth), a visual catalogue of nearly every painting he made.</p>

<p>Though now considered French, Claude spent his entire career in Italy and was regarded during his lifetime as part of the Roman School. John Constable called him "the most perfect landscape painter the world ever saw." The <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London holds major works including <a href="/apps/masterpieces/art/landscape-isaac-rebecca"><strong>Landscape with the Marriage of Isaac and Rebecca</strong></a>. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris and <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid also preserve significant collections.</p>`,
      faqs: [
        {
          question: "What style is Claude Lorrain known for?",
          answer: "Claude pioneered the <strong>ideal landscape</strong> within the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> tradition, painting golden harbors and Roman countryside bathed in atmospheric sunlight. He was among the first to depict the sun shining directly into the picture."
        },
        {
          question: "Where can I see Claude Lorrain's paintings?",
          answer: "Major collections include the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid."
        },
        {
          question: "What is the Liber Veritatis?",
          answer: "The <em>Liber Veritatis</em> (Book of Truth) is a visual catalogue Claude created to protect against <strong>forgeries</strong>. He recorded nearly every painting he made. The original drawings are now in the British Museum."
        },
        {
          question: "Was Claude Lorrain French or Italian?",
          answer: "Born in <strong>Lorraine</strong> (then independent), Claude settled in Rome by 1627 and never left Italy. He was considered part of the Roman School during his lifetime, though now classified as French."
        },
        {
          question: "Who influenced Claude Lorrain?",
          answer: "Claude studied with Agostino Tassi in Rome and Goffredo Wals in Naples. His <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> later influenced English painters including Constable and Turner."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: claude-lorrain');

  // 2. Jean-Baptiste-Siméon Chardin
  await prisma.artist.update({
    where: { slug: 'jean-baptiste-simeon-chardin' },
    data: {
      bioFull: `<p><strong>Jean-Baptiste-Siméon Chardin</strong> (1699–1779) became the greatest still life painter of the eighteenth century and a master of the <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> period. Born in Paris, the son of a cabinetmaker, he rarely left the city his entire life. He apprenticed with the history painter Pierre-Jacques Cazes, then studied seventeenth-century Dutch and Flemish paintings, especially the vanitas still lifes of Pieter Claesz. In 1728, at age twenty-eight, he was received into the Académie Royale as "a painter skilled in animals and fruits."</p>

<p>Chardin's <a href="https://luxurywallart.com/collections/minimalist-art" target="_blank" rel="noopener"><strong>simple scenes</strong></a> of copper pots, bread loaves, glasses of water, and kitchen utensils glow with quiet dignity. His technique was unique: a granular impasto that catches light in ways that give objects an inner radiance. Where his contemporaries favored grand history paintings, Chardin found the profound in the ordinary. By the 1730s he had expanded into genre scenes of domestic life, painting governesses, children blowing bubbles, and women sealing letters.</p>

<p>Chardin served the Académie for fifty years and by 1770 had become Premier peintre du roi with the Academy's highest pension. In 1757 Louis XV granted him a studio in the Louvre itself. When his eyesight failed in the 1770s, he turned to pastels. Édouard Manet and Paul Cézanne studied his work closely, and Henri Matisse copied four of his paintings as a student. Major works are held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, and the <a href="/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid.</p>`,
      faqs: [
        {
          question: "What movement was Chardin part of?",
          answer: "Chardin worked during the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> period but rejected its ornate style. His humble still lifes and domestic scenes offered a quiet counterpoint to the era's decorative excess."
        },
        {
          question: "Where can I see Chardin's paintings?",
          answer: "The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> holds the finest collection, including The Ray and The Buffet. The <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza</strong></a> and <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> also have major works."
        },
        {
          question: "What subjects did Chardin paint?",
          answer: "Chardin specialized in <strong>still lifes</strong> of kitchen objects, food, and domestic scenes. His paintings of copper pots, bread, fruit, and children at play capture everyday French life with remarkable dignity."
        },
        {
          question: "Who influenced Chardin?",
          answer: "Chardin studied Dutch and Flemish <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Golden Age</strong></a> still life painters, especially Pieter Claesz. His work later influenced Impressionists including Manet and Cézanne."
        },
        {
          question: "What made Chardin's technique unique?",
          answer: "Chardin used a granular <strong>impasto technique</strong> that catches light and gives objects an inner radiance. His <a href=\"https://luxurywallart.com/collections/minimalist-art\" target=\"_blank\" rel=\"noopener\"><strong>simple compositions</strong></a> achieve remarkable luminosity through subtle color and texture."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jean-baptiste-simeon-chardin');

  // 3. Joachim Patinir
  await prisma.artist.update({
    where: { slug: 'joachim-patinir' },
    data: {
      bioFull: `<p><strong>Joachim Patinir</strong> (c. 1480–1524) invented a new kind of painting: the "world landscape." Born in Dinant or Bouvignes in what is now Wallonia, Belgium, he registered with Antwerp's Guild of Saint Luke in 1515 and remained there for the rest of his short life. A key figure of the <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>, Patinir pioneered aerial perspective in Flemish painting. Albrecht Dürer attended his wedding in 1521 and called him "der gute Landschaftsmaler" (the good landscape painter), coining a German word for this new specialty.</p>

<p>Patinir's vast panoramic <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> sweep from detailed foregrounds through layered planes of color to distant blue horizons. He used warm brown-ochre tones in the foreground that transition to greens in the middle ground and cool blues in the background. His rocky outcrops, inspired by the dramatic formations near his native Dinant, became a trademark copied by later painters. The small religious figures that populate his scenes often feel secondary to the vast natural world surrounding them.</p>

<p>Patinir collaborated with other artists, including Quentin Metsys, who added figures to his landscapes. His <em>Landscape with Charon Crossing the Styx</em> shows the mythological ferryman navigating between paradise and hell. Only five signed paintings survive, but many others are attributed to him or his workshop. The <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid holds the finest collection, while the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna preserves several major works including <a href="/apps/masterpieces/art/joachim-patinir-the-baptism-of-christ"><strong>The Baptism of Christ</strong></a>.</p>`,
      faqs: [
        {
          question: "What did Patinir invent?",
          answer: "Patinir invented the <strong>\"world landscape\"</strong> genre, making vast panoramic scenery the primary subject rather than religious figures. He pioneered aerial perspective in <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting."
        },
        {
          question: "Where can I see Patinir's paintings?",
          answer: "The <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid holds the finest collection. The <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna has several major works including The Baptism of Christ."
        },
        {
          question: "What is aerial perspective?",
          answer: "Aerial perspective uses <strong>color to show depth</strong>: warm browns in the foreground transition to greens, then cool blues at the horizon. Patinir mastered this technique in his <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>panoramic landscapes</strong></a>."
        },
        {
          question: "Who called Patinir a landscape painter?",
          answer: "<strong>Albrecht Dürer</strong> attended Patinir's wedding in 1521 and called him \"der gute Landschaftsmaler\" (the good landscape painter), coining a German term for this new specialty."
        },
        {
          question: "How many Patinir paintings survive?",
          answer: "Only <strong>five signed paintings</strong> survive, but many others are attributed to Patinir or his workshop. He collaborated with Quentin Metsys and other artists who added figures to his landscapes."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: joachim-patinir');

  // 4. Juan de Juanes
  await prisma.artist.update({
    where: { slug: 'juan-de-juanes' },
    data: {
      bioFull: `<p><strong>Juan de Juanes</strong> (c. 1510–1579), born Vicente Juan Macip, became the most celebrated Spanish painter of the sixteenth century before El Greco. Working in Valencia, he developed a distinctive style that combined Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> influence with deep Spanish religious devotion. His father, also a painter, had introduced Italian techniques to Valencia after studying in Rome. Juan de Juanes refined these further, creating images of such intense spirituality that contemporaries called him the "Spanish Raphael."</p>

<p>His depiction of <strong>Christ holding the Eucharist</strong> became the official iconographic standard for Catholic churches across Spain and its vast empire. The Counter-Reformation church embraced his clear, devotional imagery as a tool against Protestant ideas. His <a href="/apps/masterpieces/art/last-supper-juanes"><strong>Last Supper</strong></a> (1560) and series depicting the life of Saint Stephen demonstrate his mastery of religious narrative. The figures possess an otherworldly serenity, with idealized features and soft, glowing colors that suggest divine presence.</p>

<p>Juan de Juanes spent most of his career in Valencia, rarely traveling despite his fame. He declined invitations to work at the Spanish court, preferring to serve local churches and monasteries. His workshop trained generations of Valencian painters. Nearly all his surviving works are at the <a href="/apps/masterpieces/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, which holds the world's largest collection of his paintings including his celebrated <a href="/apps/masterpieces/art/juan-de-juanes-ecce-homo"><strong>Ecce Homo</strong></a> and <a href="/apps/masterpieces/art/juan-de-juanes-el-buen-pastor"><strong>El Buen Pastor</strong></a>.</p>`,
      faqs: [
        {
          question: "What movement was Juan de Juanes part of?",
          answer: "Juan de Juanes worked in the Spanish <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> tradition, combining Italian techniques learned from his father with intense Spanish religious devotion. Contemporaries called him the \"Spanish Raphael.\""
        },
        {
          question: "Where can I see Juan de Juanes paintings?",
          answer: "Nearly all his surviving works are at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid, including his celebrated <a href=\"/apps/masterpieces/art/last-supper-juanes\"><strong>Last Supper</strong></a> and Ecce Homo."
        },
        {
          question: "Why was Juan de Juanes important to the Catholic Church?",
          answer: "His depiction of <strong>Christ holding the Eucharist</strong> became the official iconographic standard across Spain and its empire. The Counter-Reformation church embraced his clear, devotional imagery."
        },
        {
          question: "What subjects did Juan de Juanes paint?",
          answer: "He painted almost exclusively <strong>religious subjects</strong>: Christ, the Virgin, and saints. His series on the life of Saint Stephen and his Eucharistic images were particularly influential."
        },
        {
          question: "Where did Juan de Juanes work?",
          answer: "He spent most of his career in <strong>Valencia</strong>, declining invitations to the Spanish court. His workshop trained generations of Valencian painters who spread his devotional style."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: juan-de-juanes');

  // 5. Lucas Cranach the Elder
  await prisma.artist.update({
    where: { slug: 'lucas-cranach-elder' },
    data: {
      bioFull: `<p><strong>Lucas Cranach the Elder</strong> (1472–1553) was a leading painter of the <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> and a close friend of Martin Luther. Born in Kronach, Bavaria (from which he took his name), he worked in Vienna before becoming court painter to the Electors of Saxony in Wittenberg in 1505. He held this position for nearly fifty years, running one of the most productive workshops in Germany and serving three successive electors.</p>

<p>Cranach developed a distinctive style featuring elongated, sinuous figures with pale skin and knowing expressions. His female nudes, often depicting Venus, Lucretia, or Judith, became famous throughout Europe. Unlike his Italian contemporaries, he gave these figures a cool, Northern sensuality. He also excelled at <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a>, capturing Luther, Melanchthon, and other Reformation leaders with unflinching realism.</p>

<p>His friendship with Luther shaped the visual identity of Protestantism. Cranach created woodcuts illustrating Luther's Bible translations and designed imagery that spread Reformation ideas across German-speaking lands. His workshop's efficiency allowed him to produce thousands of paintings, many of which survive today. Major collections include the <a href="/apps/masterpieces/museum/gem228ldegalerie-berlin-germany"><strong>Gemäldegalerie</strong></a> in Berlin and the <a href="/apps/masterpieces/museum/kunsthistorisches-museum"><strong>Kunsthistorisches Museum</strong></a> in Vienna, while his <a href="/apps/masterpieces/art/lucas-cranach-elder-the-holy-family"><strong>Holy Family</strong></a> hangs at the <a href="/apps/masterpieces/museum/st228del-frankfurt-am-main-germany"><strong>Städel</strong></a> in Frankfurt.</p>`,
      faqs: [
        {
          question: "What movement was Cranach part of?",
          answer: "Cranach was a leading painter of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>. His distinctive style combined German traditions with Italian influences, featuring elongated figures and cool Northern sensuality."
        },
        {
          question: "How was Cranach connected to Martin Luther?",
          answer: "Cranach was a <strong>close friend of Luther</strong> and shaped Protestantism's visual identity. He created woodcuts for Luther's Bible, painted his portrait multiple times, and served as godfather to Luther's first child."
        },
        {
          question: "Where can I see Cranach paintings?",
          answer: "Major collections include the <a href=\"/apps/masterpieces/museum/gem228ldegalerie-berlin-germany\"><strong>Gemäldegalerie</strong></a> in Berlin and the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. His workshop's productivity means works survive across Europe."
        },
        {
          question: "What subjects did Cranach paint?",
          answer: "Cranach painted mythological nudes (Venus, Lucretia, Judith), religious scenes, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of Reformation leaders. His female figures with pale skin and knowing expressions became famous."
        },
        {
          question: "How productive was Cranach's workshop?",
          answer: "Cranach ran one of Germany's most productive workshops for nearly <strong>fifty years</strong> in Wittenberg. He served three successive Saxon electors and produced thousands of paintings with his assistants."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: lucas-cranach-elder');

  // 6. Henri Fantin-Latour
  await prisma.artist.update({
    where: { slug: 'henri-fantin-latour' },
    data: {
      bioFull: `<p><strong>Henri Fantin-Latour</strong> (1836–1904) occupied a unique position between Realism and <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, befriending the avant-garde while maintaining a classical technique. Born in Grenoble, he trained primarily by copying old masters at the Louvre, especially Titian, Veronese, and Delacroix. Though he exhibited with the Impressionists and painted group portraits featuring Manet, Monet, and Renoir, he never adopted their broken brushwork or plein-air methods.</p>

<p>Fantin-Latour is best remembered for two very different kinds of work. His <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flower paintings</strong></a>, rendered with meticulous attention to light and texture, found eager buyers in England through the dealer Edwin Edwards. Roses, chrysanthemums, and peonies emerge from dark backgrounds with almost photographic precision yet retain a soft, romantic quality. His group portraits document the artistic circles of Paris, most famously <a href="/apps/masterpieces/art/studio-batignolles"><strong>A Studio at Les Batignolles</strong></a> (1870), showing Manet at his easel surrounded by Renoir, Monet, and Zola.</p>

<p>He also created dreamy lithographs inspired by Wagner's operas and Berlioz's symphonies, blending figures and music into misty allegories. These imaginative works influenced <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> artists. Major paintings are held at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, where A Studio at Les Batignolles hangs, and the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg.</p>`,
      faqs: [
        {
          question: "Was Fantin-Latour an Impressionist?",
          answer: "Though friends with Manet, Monet, and Renoir, Fantin-Latour maintained a classical technique rather than adopting <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> methods. He bridged Realism and the avant-garde while remaining independent."
        },
        {
          question: "What is Fantin-Latour famous for?",
          answer: "He's famous for <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flower paintings</strong></a> and group portraits of Parisian artistic circles. <a href=\"/apps/masterpieces/art/studio-batignolles\"><strong>A Studio at Les Batignolles</strong></a> (1870) shows Manet surrounded by Impressionist friends."
        },
        {
          question: "Where can I see Fantin-Latour paintings?",
          answer: "The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> holds A Studio at Les Batignolles. The <a href=\"/apps/masterpieces/museum/hermitage\"><strong>Hermitage</strong></a> in St. Petersburg has his flower paintings and portraits."
        },
        {
          question: "What subjects did Fantin-Latour paint?",
          answer: "He specialized in <strong>still life flowers</strong>, group portraits documenting artistic Paris, and imaginative lithographs inspired by Wagner and Berlioz. His musical works influenced <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> artists."
        },
        {
          question: "How did Fantin-Latour learn to paint?",
          answer: "He trained primarily by <strong>copying old masters</strong> at the Louvre, especially Titian, Veronese, and Delacroix. This classical training shaped his precise, luminous technique."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: henri-fantin-latour');

  // 7. Alphonse Mucha
  await prisma.artist.update({
    where: { slug: 'alphonse-mucha' },
    data: {
      bioFull: `<p><strong>Alphonse Mucha</strong> (1860–1939) created the visual vocabulary of Art Nouveau and became the most influential poster artist of the Belle Époque. Born in Ivančice, Moravia (now Czech Republic), he struggled as a young artist in Vienna and Munich before moving to Paris in 1887. His breakthrough came on Christmas Eve 1894 when he designed a poster for Sarah Bernhardt's play <em>Gismonda</em>. The actress was so impressed she signed him to a six-year exclusive contract.</p>

<p>Mucha's distinctive style features beautiful women with flowing hair, surrounded by intricate <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>floral</strong></a> borders and elaborate decorative patterns. His figures inhabit a dreamlike space filled with Byzantine-influenced ornamentation and soft, muted colors. The <a href="/apps/masterpieces/art/the-seasons-spring-mucha"><strong>Seasons</strong></a> series (1896) and <a href="/apps/masterpieces/art/job-cigarettes"><strong>Job Cigarettes</strong></a> poster became icons of the era. His work influenced <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolist</strong></a> artists and anticipated Art Deco.</p>

<p>After 1910, Mucha devoted himself to the <em>Slav Epic</em>, a monumental cycle of twenty canvases celebrating Slavic history. He returned to Czechoslovakia in 1928 and donated the Epic to Prague. The Nazis arrested him in 1939 during their occupation; he died shortly after. The <a href="/apps/masterpieces/museum/mucha-museum-prague-czech-republic"><strong>Mucha Museum</strong></a> in Prague preserves his legacy, while his posters remain beloved worldwide for their elegant fusion of fine art and commercial design.</p>`,
      faqs: [
        {
          question: "What style is Mucha known for?",
          answer: "Mucha created the visual language of <strong>Art Nouveau</strong>, featuring beautiful women with flowing hair amid intricate <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>floral</strong></a> borders. His work also influenced <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> artists."
        },
        {
          question: "How did Mucha become famous?",
          answer: "His breakthrough came in 1894 when he designed a poster for <strong>Sarah Bernhardt's</strong> play Gismonda. She signed him to a six-year contract, making him the most sought-after poster artist in Paris."
        },
        {
          question: "Where can I see Mucha's work?",
          answer: "The <a href=\"/apps/masterpieces/museum/mucha-museum-prague-czech-republic\"><strong>Mucha Museum</strong></a> in Prague holds the largest collection. His posters survive in collections worldwide, and the Slav Epic is displayed at Prague's National Gallery."
        },
        {
          question: "What is the Slav Epic?",
          answer: "The <strong>Slav Epic</strong> is a monumental cycle of twenty large canvases Mucha painted after 1910, celebrating Slavic history and mythology. He donated it to Prague in 1928."
        },
        {
          question: "What subjects did Mucha depict?",
          answer: "Mucha depicted <strong>idealized women</strong> surrounded by decorative patterns, often representing seasons, times of day, or artistic concepts. His commercial work included posters for theaters, cigarettes, and champagne."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: alphonse-mucha');

  // 8. John Singer Sargent
  await prisma.artist.update({
    where: { slug: 'john-singer-sargent' },
    data: {
      bioFull: `<p><strong>John Singer Sargent</strong> (1856–1925) became the leading <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> painter of the Gilded Age, capturing aristocrats, industrialists, and artists on both sides of the Atlantic. Born in Florence to American expatriate parents, he never lived in the United States until adulthood. He trained in Paris under Carolus-Duran, who emphasized direct painting from life rather than academic formulas. His virtuoso brushwork and ability to capture personality made him the most sought-after portraitist of his era.</p>

<p>Sargent's career nearly ended in 1884 when <a href="/apps/masterpieces/art/madame-x"><strong>Madame X</strong></a> scandalized the Paris Salon. The portrait of Amélie Gautreau, with its daringly low neckline and pale lavender skin, caused such outrage that Sargent relocated to London. There his reputation recovered, and he eventually painted three American presidents, countless aristocrats, and fellow artists including Monet and Rodin. Though admired for society portraits, he preferred landscapes and scenes of daily life, often painted during travels with friends.</p>

<p>His loose, confident brushwork influenced generations of painters and connected traditional portraiture to <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> innovations. The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> holds Madame X, while <a href="/apps/masterpieces/art/daughters-boit"><strong>The Daughters of Edward Darley Boit</strong></a> hangs at the <a href="/apps/masterpieces/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>, along with other major works.</p>`,
      faqs: [
        {
          question: "What was the Madame X scandal?",
          answer: "<a href=\"/apps/masterpieces/art/madame-x\"><strong>Madame X</strong></a> (1884) scandalized Paris with its daring neckline and pale skin. The controversy forced Sargent to relocate to London. The painting now hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a>."
        },
        {
          question: "Was Sargent an Impressionist?",
          answer: "Though not an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a>, Sargent's loose brushwork connected traditional portraiture to modern innovations. He befriended Monet and painted landscapes alongside formal <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>."
        },
        {
          question: "Where can I see Sargent's paintings?",
          answer: "The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a> holds Madame X. <a href=\"/apps/masterpieces/art/daughters-boit\"><strong>The Daughters of Edward Darley Boit</strong></a> and other major works are at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>."
        },
        {
          question: "What was Sargent's background?",
          answer: "Born in <strong>Florence</strong> to American expatriate parents, Sargent trained in Paris under Carolus-Duran. He never lived in America until adulthood but became the leading portraitist of the American Gilded Age."
        },
        {
          question: "Who did Sargent paint?",
          answer: "Sargent painted <strong>three American presidents</strong>, countless aristocrats, and fellow artists including Monet and Rodin. He preferred landscapes and informal scenes but was most famous for society portraits."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: john-singer-sargent');

  // 9. Isaac Levitan
  await prisma.artist.update({
    where: { slug: 'isaac-levitan' },
    data: {
      bioFull: `<p><strong>Isaac Levitan</strong> (1860–1900) became the greatest Russian landscape painter, transforming simple scenes of birch forests, rivers, and villages into profound meditations on nature and the Russian soul. Born to a poor Jewish family in what is now Lithuania, he entered the Moscow School of Painting at age thirteen. Despite facing discrimination and poverty, his talent earned recognition from teachers including Vasily Perov and Alexei Savrasov, who pioneered the Russian <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> landscape tradition.</p>

<p>Levitan's <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a> capture the melancholy beauty of the Russian countryside with unprecedented emotional depth. <a href="/apps/masterpieces/art/golden-autumn"><strong>Golden Autumn</strong></a> (1895) shows birch trees blazing yellow against a blue autumn sky, while <a href="/apps/masterpieces/art/above-eternal-peace"><strong>Above Eternal Peace</strong></a> (1894) depicts a small church on a promontory overlooking vast, cloud-swept waters. Anton Chekhov, his close friend, wrote that Levitan's paintings made viewers feel "the most melancholy, lyrical mood of the Russian landscape."</p>

<p>He died from heart disease at just forty, having produced roughly a thousand works. Nearly all his major paintings are at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in St. Petersburg and the Tretyakov Gallery in Moscow, including <a href="/apps/masterpieces/art/isaac-levitan-autumn-road-in-a-village"><strong>Autumn Road in a Village</strong></a>. His influence shaped Russian landscape painting well into the Soviet era, and he remains beloved for capturing the spiritual essence of the Russian land.</p>`,
      faqs: [
        {
          question: "What movement was Levitan part of?",
          answer: "Levitan worked within the Russian <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> tradition, pioneered by his teacher Alexei Savrasov. His <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> combine observation with profound emotional depth."
        },
        {
          question: "Where can I see Levitan's paintings?",
          answer: "Nearly all major works are at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg and the Tretyakov Gallery in Moscow, including <a href=\"/apps/masterpieces/art/golden-autumn\"><strong>Golden Autumn</strong></a> and <a href=\"/apps/masterpieces/art/above-eternal-peace\"><strong>Above Eternal Peace</strong></a>."
        },
        {
          question: "What subjects did Levitan paint?",
          answer: "Levitan painted <strong>Russian landscapes</strong>: birch forests, rivers, autumn roads, village churches, and twilight skies. His scenes capture melancholy beauty and the spiritual essence of the Russian countryside."
        },
        {
          question: "Was Levitan connected to Chekhov?",
          answer: "<strong>Anton Chekhov</strong> was Levitan's close friend. Chekhov wrote that Levitan's paintings evoked \"the most melancholy, lyrical mood of the Russian landscape.\" Both artists explored similar themes of provincial life."
        },
        {
          question: "How long did Levitan live?",
          answer: "Levitan died from heart disease at just <strong>forty years old</strong> in 1900, having produced roughly a thousand works. Despite his short life, he became Russia's greatest landscape painter."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: isaac-levitan');

  console.log('All 9 artists updated');
}

main().catch(console.error).finally(() => prisma.$disconnect());
