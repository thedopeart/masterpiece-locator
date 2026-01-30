const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'john-martin-kensington-gardens': [
    { question: "What does Kensington Gardens depict?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>John Martin</strong></a> painted <strong>Kensington Gardens</strong> in London, a surprisingly tranquil subject from an artist famous for apocalyptic scenes. The work shows he could handle peaceful English parkland alongside biblical catastrophe." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha\"><strong>Yale Centre for British Art</strong></a> in New Haven, Connecticut, which holds one of the largest collections of British art outside the UK." },
    { question: "Did Martin paint many quiet landscapes?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin</strong></a> is best known for <strong>dramatic, large-scale spectacles</strong>, but he also produced intimate landscapes and watercolors. These quieter works reveal a more observational side to an artist usually associated with destruction and grandeur." }
  ],
  'john-martin-sadak-in-search-of-the-waters-of-oblivion': [
    { question: "What story does this painting illustrate?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin</strong></a> depicted <strong>Sadak</strong>, a character from a Persian tale, climbing impossibly steep rocks to find the Waters of Oblivion. The tiny human figure dwarfed by vast, hostile terrain is classic Martin." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a> in Missouri. This was <a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin's</strong></a> first exhibited oil painting, shown at the Royal Academy in 1812." },
    { question: "Why is this painting significant?", answer: "It launched <a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin's</strong></a> career. The <strong>overwhelming scale</strong> of landscape versus the tiny human figure became his signature approach. The painting established the visual formula he'd use for decades of biblical and literary spectacle." }
  ],
  'john-martin-landscape-possibly-the-isle-of-wight-or-richmond-h': [
    { question: "What does this landscape show?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin</strong></a> painted what may be the <strong>Isle of Wight or Richmond Hill</strong>, a gentle English landscape far removed from his apocalyptic visions. The soft light and rolling terrain show his skill with naturalistic observation." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/yale-centre-for-british-art-yale-university-new-ha\"><strong>Yale Centre for British Art</strong></a> in New Haven. The museum holds multiple <a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin</strong></a> works spanning his full range." },
    { question: "How does this fit with Martin's other work?", answer: "It shows <a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin</strong></a> could paint <strong>quiet, observed nature</strong> as well as imagined catastrophe. These calmer landscapes are often overlooked but demonstrate genuine skill at rendering English countryside." }
  ],
  'john-singer-sargent-two-wine-glasses': [
    { question: "What does Two Wine Glasses depict?", answer: "<a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted <strong>two wine glasses</strong> with his characteristic bravura brushwork. Even in a small still life, his ability to capture reflected light and transparent glass with a few confident strokes is remarkable." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent's</strong></a> smaller studies and still lifes are highly sought after by collectors." },
    { question: "Did Sargent paint many still lifes?", answer: "<a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> is best known for <strong>portraits</strong>, but he also painted landscapes, watercolors, and occasional still lifes. These informal works often show his technique at its most relaxed and spontaneous." }
  ],
  'john-singer-sargent-young-man-in-reverie': [
    { question: "What does Young Man in Reverie show?", answer: "<a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted a <strong>young man lost in thought</strong>, rendered with the fluid brushwork and tonal sensitivity that made him the leading portrait painter of his era. The introspective mood sets it apart from his grander society portraits." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York. The museum holds a varied collection of American art including works by <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a>." },
    { question: "What makes Sargent's technique distinctive?", answer: "<a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> combined <strong>alla prima painting</strong> (wet-on-wet) with precise observation. He could capture a likeness and the fall of light on fabric in what appeared to be a single, effortless session, though his spontaneity was backed by rigorous training." }
  ],
  'john-william-godward-the-engagement-ring': [
    { question: "What does The Engagement Ring depict?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted a <strong>classical woman admiring a ring</strong>, set against marble architecture and Mediterranean light. His paintings recreate an idealized ancient world of beauty and leisure." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward's</strong></a> works are popular with collectors drawn to his meticulous rendering of marble, fabric, and skin." },
    { question: "What is Godward known for?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> specialized in <strong>Neo-Classical scenes</strong> of beautiful women in Greco-Roman settings. He painted marble textures and draped fabrics with near-photographic precision, continuing the classical tradition well into the 20th century." }
  ],
  'john-william-godward-liegende': [
    { question: "What does Liegende depict?", answer: "The title means \"reclining\" in German. <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted a <strong>woman reclining</strong> in a classical setting, draped in flowing fabric against a marble backdrop. It's a quintessential example of his idealized Greco-Roman aesthetic." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Many of <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward's</strong></a> paintings remain privately held, though his market has strengthened considerably in recent decades." },
    { question: "Why did Godward focus on classical subjects?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> was devoted to the <strong>classical ideal of beauty</strong> at a time when modernism was transforming art. He reportedly felt born too late, and his commitment to ancient aesthetics set him apart from contemporary trends." }
  ],
  'john-william-godward-waiting-for-an-answer': [
    { question: "What does Waiting for an Answer show?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted a <strong>classical woman in a moment of anticipation</strong>, perhaps awaiting a reply to a letter or proposal. The psychological pause adds narrative interest to his typically serene compositions." },
    { question: "Where is this work kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward's</strong></a> paintings regularly appear at auction, where their decorative beauty attracts strong interest." },
    { question: "How detailed is Godward's technique?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> rendered <strong>marble, silk, and flowers</strong> with painstaking accuracy. His surfaces are smooth and polished, with every fold of fabric and vein in marble carefully observed, creating an almost tactile quality." }
  ],
  'john-william-godward-the-flowers-of-venus': [
    { question: "What does The Flowers of Venus depict?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted a <strong>woman with flowers</strong> associated with Venus, the goddess of love. The combination of floral beauty and classical setting is typical of his romanticized vision of antiquity." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> produced a steady stream of similar classical subjects throughout his career." },
    { question: "What influenced Godward's style?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> followed in the tradition of <strong>Lawrence Alma-Tadema</strong> and Frederic Leighton, Victorian painters who recreated the ancient world with archaeological precision and sensual beauty." }
  ],
  'john-william-godward-yes-or-no': [
    { question: "What does Yes or No depict?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted a <strong>classical woman contemplating a decision</strong>, plucking flower petals in a \"loves me, loves me not\" gesture. The playful subject adds charm to his typically serene classical scenes." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hessisches-landesmuseum-darmstadt-darmstadt-german\"><strong>Hessisches Landesmuseum Darmstadt</strong></a> in Germany. It's one of the few <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> works in a public museum collection." },
    { question: "Was Godward popular in his lifetime?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> sold well during his career but was <strong>increasingly out of step</strong> with modernist trends. His reputation suffered after his death in 1922 but has been strongly revived since the late 20th century." }
  ],
  'john-william-godward-reverie-study': [
    { question: "What does Reverie (Study) show?", answer: "<a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a> painted a <strong>woman lost in thought</strong> in a classical setting. As a study, it may have been preparation for a larger work, but it stands on its own as a refined example of his dreamy classical style." },
    { question: "Where is this work kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward's</strong></a> studies and smaller works are prized for showing his technique in a more intimate format." },
    { question: "What does 'reverie' mean in Godward's context?", answer: "<strong>Reverie</strong>, or daydreaming, was a favorite subject for <a href=\"/apps/masterpieces/artist/john-william-godward\"><strong>Godward</strong></a>. It let him paint beautiful women in relaxed poses without needing a dramatic narrative, focusing purely on form, color, and classical atmosphere." }
  ],
  'john-william-waterhouse-undine': [
    { question: "Who is Undine?", answer: "<strong>Undine</strong> is a water spirit from Germanic mythology who gains a human soul through love. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted her as a mysterious figure connected to water, fitting his lifelong fascination with women and myth." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted many mythological and literary women, and his works are highly sought after." },
    { question: "What is Waterhouse's style?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> blended <strong>Pre-Raphaelite detail</strong> with Impressionist-influenced brushwork. His paintings of mythological women combine romantic beauty with atmospheric naturalism." }
  ],
  'john-william-waterhouse-the-slave': [
    { question: "What does The Slave depict?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted a <strong>female figure in captivity</strong>, likely in an ancient or classical setting. The subject reflects Victorian interest in ancient world narratives and the drama of human vulnerability." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> classical subjects remain among the most popular Victorian paintings on the art market." },
    { question: "What themes did Waterhouse favor?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> returned to themes of <strong>women, water, magic, and fate</strong> throughout his career. His heroines are often caught between beauty and danger, drawing from mythology, literature, and Arthurian legend." }
  ],
  'john-william-waterhouse-the-visit-of-a-sick-child-to-the-temple-of-aescula': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> depicted a <strong>sick child brought to the temple of Aesculapius</strong>, the Greek god of medicine. The classical setting and emotional subject show his ability to combine archaeological detail with genuine human feeling." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. This is one of <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> earlier works, painted when he was still working primarily in a classical realist style." },
    { question: "How does this compare to Waterhouse's later work?", answer: "This is more <strong>archaeologically detailed</strong> than his later paintings. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> gradually moved from precise classical reconstruction toward the looser, more atmospheric mythological scenes he's best known for." }
  ],
  'john-william-waterhouse-the-household-gods': [
    { question: "What are the Household Gods?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> depicted <strong>Roman lares and penates</strong>, the protective spirits that ancient Romans kept in household shrines. The painting shows a domestic Roman scene with his characteristic blend of classical accuracy and warm atmosphere." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> classical domestic scenes are less well-known than his mythological heroines but show his range as a painter." },
    { question: "Was Waterhouse influenced by Alma-Tadema?", answer: "Yes. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> early work shares <strong>Alma-Tadema's</strong> interest in recreating ancient domestic life. Over time, Waterhouse moved toward more romantic and mythological subjects, developing a style that was distinctly his own." }
  ],
  'john-william-waterhouse-the-unwelcome-companion-a-street-scene-in-cairo': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted a <strong>Cairo street scene</strong> with a woman accompanied by an unwanted follower. It reflects the Orientalist interest common among Victorian painters, based on Waterhouse's early years living in Italy and exposure to Mediterranean culture." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/towneley-hall-art-gallery-and-museum-burnley-uk\"><strong>Towneley Hall Art Gallery</strong></a> in Burnley, England. The museum holds this early <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> work from his Orientalist phase." },
    { question: "Did Waterhouse paint many Orientalist subjects?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> produced a few <strong>Orientalist works</strong> early in his career before shifting to the mythological and literary subjects he's best known for. These early paintings show his strong academic foundation." }
  ],
  'john-william-waterhouse-it39s-sweet-doing-nothing': [
    { question: "What does It's Sweet Doing Nothing depict?", answer: "The title comes from the Italian phrase <strong>dolce far niente</strong>. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted a woman in a state of relaxed idleness, enjoying the pleasure of doing absolutely nothing, a popular subject in Victorian art." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. The \"dolce far niente\" theme appears in works by multiple Victorian artists, but <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> gave it his characteristic warmth." },
    { question: "What does dolce far niente mean?", answer: "It's Italian for \"the sweetness of doing nothing.\" Victorian painters loved the concept, using it to paint <strong>beautiful women at leisure</strong> in warm, sun-filled settings. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted the subject at least twice." }
  ],
  'john-william-waterhouse-saint-eulalia': [
    { question: "Who was Saint Eulalia?", answer: "<strong>Saint Eulalia</strong> was a young Christian martyr killed during Roman persecution. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> depicted her body lying in the snow after execution, with doves gathering around her as a sign of divine grace." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. The painting was exhibited at the Royal Academy in 1885 and helped establish <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> reputation." },
    { question: "What makes this painting stand out?", answer: "The contrast between the <strong>young martyr's body</strong> and the gathering snow and doves creates a powerful emotional effect. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> handled a violent subject with restraint, focusing on beauty and pathos rather than graphic horror." }
  ],
  'john-william-waterhouse-the-favourites-of-emperor-honorius': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> depicted <strong>Emperor Honorius</strong> feeding his pet birds while Rome faced barbarian invasion. The irony of a ruler playing with pigeons while his empire crumbled was pointed commentary on decadence and decline." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/art-gallery-of-south-australia-agsa-adelaide-austr\"><strong>Art Gallery of South Australia</strong></a> in Adelaide. It's one of <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse's</strong></a> most historically specific paintings." },
    { question: "What is the historical context?", answer: "<strong>Honorius</strong> was a weak Roman emperor who reportedly cared more about his pet chickens than defending the empire. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> used this anecdote to paint a gorgeous scene with a sharp moral edge about the dangers of complacency." }
  ],
  'john-william-waterhouse-its-sweet-doing-nothing': [
    { question: "Is this the same subject as the other dolce far niente?", answer: "<a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> painted at least <strong>two versions</strong> of the \"sweet doing nothing\" theme. Each shows a woman at leisure in a warm setting, though the compositions and models differ between versions." },
    { question: "Where is this version displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/kirkcaldy-galleries-kirkcaldy-uk\"><strong>Kirkcaldy Galleries</strong></a> in Scotland. The gallery holds a notable collection of Scottish and British art." },
    { question: "Why did Waterhouse revisit this subject?", answer: "The <strong>dolce far niente</strong> theme let <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a> focus on painting a beautiful figure in warm light without needing a mythological narrative. It was a popular and commercially reliable subject that suited his strengths as a colorist." }
  ],
  'joshua-reynolds-selfportrait-shading-the-eyes': [
    { question: "What does this self-portrait show?", answer: "<a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds</strong></a> painted himself <strong>shading his eyes</strong>, a pose suggesting the artist studying his subject intently. It's a confident image of Britain's most influential 18th-century painter." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/national-portrait-gallery-london-uk\"><strong>National Portrait Gallery</strong></a> in London, which holds the nation's most important collection of portrait art." },
    { question: "Why is Reynolds important?", answer: "<a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds</strong></a> was the first president of the <strong>Royal Academy</strong> and championed the \"Grand Manner\" of portraiture. He elevated British painting's status by applying the lessons of Old Masters to contemporary portrait subjects." }
  ],
  'joshua-reynolds-james-fitzgerald-duke-of-leinster': [
    { question: "Who was James FitzGerald?", answer: "He was the <strong>Duke of Leinster</strong>, Ireland's premier peer. <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds</strong></a> portrayed him with the aristocratic dignity expected in 18th-century grand manner portraiture." },
    { question: "Where is this portrait kept?", answer: "It's in a <strong>private collection</strong>. Many of <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds's</strong></a> aristocratic portraits remain with the families who commissioned them or in private hands." },
    { question: "What is the Grand Manner?", answer: "The <strong>Grand Manner</strong> was <a href=\"/apps/masterpieces/artist/joshua-reynolds\"><strong>Reynolds's</strong></a> approach to portraiture: elevating sitters by placing them in poses borrowed from classical sculpture or Renaissance painting, with rich color, dignified posture, and symbolic accessories." }
  ],
  'juan-de-juanes-martirio-de-san-esteban': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> painted the <strong>martyrdom of St. Stephen</strong>, the first Christian martyr, shown being stoned to death. The scene follows Spanish <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> conventions with rich color and dramatic composition." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds the most important collection of <a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes's</strong></a> work." },
    { question: "Who was Juan de Juanes?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> was the leading painter of the <strong>Valencian Renaissance</strong>. Influenced by Italian masters, particularly Raphael, he combined Italian elegance with Spanish religious intensity." }
  ],
  'juan-de-juanes-saint-stephen-in-the-synagogue': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> depicted <strong>St. Stephen preaching in the synagogue</strong> before his martyrdom. The scene captures the moment of confrontation between the saint and his accusers." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. This is part of a series depicting scenes from <strong>St. Stephen's life</strong> that <a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> painted for a Valencian church." },
    { question: "How was Juan de Juanes influenced by Italian art?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> absorbed the style of <strong>Raphael</strong> and other Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masters, applying their balanced compositions and idealized figures to Spanish religious subjects. He became known as the \"Spanish Raphael.\"" }
  ],
  'juan-de-juanes-san-pedro': [
    { question: "What does San Pedro depict?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> painted <strong>St. Peter</strong>, one of Christ's apostles and the first pope. The portrait follows standard iconography: Peter typically holds keys, symbolizing his role as keeper of heaven's gates." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The museum holds multiple works by <a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> from various Valencian church commissions." },
    { question: "What was Juan de Juanes's role in Spanish art?", answer: "<a href=\"/apps/masterpieces/artist/juan-de-juanes\"><strong>Juan de Juanes</strong></a> was the dominant painter in <strong>16th-century Valencia</strong>. His polished, devotional style made him enormously popular for altarpieces and religious imagery, and his influence shaped Valencian painting for generations." }
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
