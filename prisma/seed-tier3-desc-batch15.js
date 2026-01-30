const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'claude-lorrain-the-siege-of-la-rochelle-by-louis-xiii': [
    { question: "Where is this painting?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's one of Claude's rare historical subjects, combining his landscape mastery with a specific military event." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Louis XIII's siege of La Rochelle</strong> in 1627-28, a key event in the French Wars of Religion. Claude frames the military action within his characteristic golden landscape." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting. While he usually painted mythological or pastoral scenes, this <strong>historical subject</strong> shows he could adapt his luminous style to contemporary events." }
  ],
  'claude-lorrain-the-mill': [
    { question: "Where is The Mill displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. It's one of the finest Claude landscapes in an American collection." },
    { question: "What does The Mill depict?", answer: "The scene shows a <strong>mill in an idealized pastoral landscape</strong>, bathed in Claude's signature warm light. Small figures and animals create a mood of rural peace and timeless harmony." },
    { question: "Who was Claude Lorrain?", answer: "<a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a> (1600-1682) was the greatest <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> landscape painter. Born in France, he spent his career in Rome, painting <strong>idealized golden landscapes</strong> that defined the genre for two centuries." }
  ],
  'claude-lorrain-landscape-with-the-finding-of-moses': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds several important Claude landscapes." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Pharaoh's daughter finding the infant Moses</strong> in the bulrushes. Claude uses the biblical story as a reason to paint a magnificent river landscape bathed in golden light." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> ideal landscape. Claude's method was to subordinate narrative to setting: the <strong>landscape dominates</strong> while biblical figures serve as staffage, giving the scene its title and emotional register." }
  ],
  'claude-lorrain-the-village-festival': [
    { question: "Where is The Village Festival?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. The Louvre holds the largest collection of Claude's work." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>villagers celebrating in a sunlit landscape</strong>. Claude populated his pastoral scenes with dancing, feasting figures, evoking a classical golden age of rural harmony." },
    { question: "Who painted The Village Festival?", answer: "<a href=\"/apps/masterpieces/artist/claude-lorrain\"><strong>Claude Lorrain</strong></a> created this work. His influence was enormous: <strong>Turner, Constable, and the Hudson River School</strong> all drew directly on his luminous approach to <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a>." }
  ],
  'bread-eater-permeke': [
    { question: "Where is The Bread Eater displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/royal-museums-belgium\"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels. Permeke is one of Belgium's most important 20th-century artists." },
    { question: "What does The Bread Eater depict?", answer: "The painting shows a <strong>peasant eating bread</strong>, rendered with heavy, earthy forms. Permeke gave working people a monumental, almost sculptural presence that emphasizes their physical labor and dignity." },
    { question: "Who painted The Bread Eater?", answer: "<a href=\"/apps/masterpieces/artist/constant-permeke\"><strong>Constant Permeke</strong></a> created this in 1936. He was Belgium's leading <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a>, painting <strong>farmers, fishermen, and laborers</strong> with dark palette and massive, earthbound forms." }
  ],
  'correggio-madonna-and-child-with-the-young-saint-john': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds several Correggio paintings in its Italian collection." },
    { question: "Who painted this Madonna and Child?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> created this devotional work. He was one of the great painters of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a>, known for <strong>soft lighting, graceful figures, and tender emotion</strong>." },
    { question: "What makes Correggio's style distinctive?", answer: "Correggio pioneered a <strong>soft, luminous painting style</strong> with gentle sfumato and dynamic compositions. His work anticipated the Baroque: Rubens, Carracci, and 18th-century Rococo painters all studied him closely." }
  ],
  'correggio-madonna-and-child': [
    { question: "Where is this Madonna and Child?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> (c. 1489-1534) created this painting. Working in Parma, far from Florence and Rome, he independently developed a style of <strong>extraordinary tenderness and luminosity</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a> with proto-Baroque qualities. Correggio's <strong>soft modeling and emotional warmth</strong> distinguish his Madonnas from the more intellectual approach of Leonardo or the grandeur of Raphael." }
  ],
  'correggio-the-rest-on-the-flight-to-egypt-with-saint-francis': [
    { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Holy Family resting during their flight to Egypt</strong>, with Saint Francis present as an anachronistic devotional figure. Correggio bathes the scene in his characteristic soft, radiant light." },
    { question: "Who was Correggio?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> was a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> master based in Parma. His <strong>ceiling frescoes in Parma Cathedral</strong> pioneered the illusionistic techniques that Baroque painters would develop further." }
  ],
  'correggio-madonna-and-child-with-angels': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. The Uffizi holds multiple Correggio paintings." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Madonna and Child attended by angels</strong>. Correggio's angels have a playful, almost childlike quality that became hugely influential on later <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> and Rococo painting." },
    { question: "Who painted this Madonna?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> created this devotional painting. His <strong>gentle luminosity and emotional sweetness</strong> made him one of the most admired painters of the Renaissance, especially among 18th-century collectors." }
  ],
  'correggio-the-mystic-marriage-of-st-catherine-of-alexandria': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Mystic Marriage of St. Catherine</strong>, where the saint symbolically weds Christ. Correggio paints the moment with intimate tenderness and his signature soft, glowing light." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> devotional painting. The Mystic Marriage of St. Catherine was a popular subject, but Correggio's version stands out for its <strong>emotional warmth and luminous color</strong>." },
    { question: "What makes Correggio important?", answer: "Working in provincial Parma, Correggio independently developed techniques that <strong>anticipated the Baroque by a century</strong>. His illusionistic ceilings, soft lighting, and dynamic compositions directly influenced Carracci, Lanfranco, and later Tiepolo." }
  ],
  'correggio-portrait-of-a-gentlewoman': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. Correggio's portraits are rare and highly valued." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> created this work. He painted few portraits, focusing mainly on religious and mythological subjects. This makes surviving examples <strong>especially prized by collectors</strong>." },
    { question: "What style is this portrait?", answer: "It's <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a> portraiture. Correggio brings the same <strong>soft sfumato and warm tonality</strong> to this portrait that he used in his famous Madonnas and mythological scenes." }
  ],
  'correggio-three-graces': [
    { question: "Where is Three Graces?", answer: "This fresco is at the <a href=\"/apps/masterpieces/museum/convent-of-san-paolo-parma-italy\"><strong>Convent of San Paolo</strong></a> in Parma, Italy. Correggio decorated the abbess's private chamber with mythological scenes." },
    { question: "What does Three Graces depict?", answer: "The fresco shows the <strong>three classical Graces</strong> (Aglaea, Euphrosyne, Thalia), goddesses of beauty, charm, and creativity. Correggio painted them with a softness and grace that became a model for later artists." },
    { question: "Who painted Three Graces?", answer: "<a href=\"/apps/masterpieces/artist/correggio\"><strong>Correggio</strong></a> painted this around 1519. His Camera di San Paolo frescoes show his mastery of <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> <strong>mythological painting</strong> early in his career." }
  ],
  'dante-gabriel-rossetti-the-annunciation': [
    { question: "Where is this Annunciation displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. It's one of the defining works of the Pre-Raphaelite Brotherhood." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Angel Gabriel announcing to the Virgin Mary</strong> that she will bear Christ. Rossetti painted it in stark white and blue, with an unconventionally frightened Mary cowering on her bed." },
    { question: "Who painted this Annunciation?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> created this in 1850. He co-founded the <strong>Pre-Raphaelite Brotherhood</strong>, which rejected academic convention in favor of intense color, medieval subjects, and emotional truth." }
  ],
  'dante-gabriel-rossetti-selfportrait': [
    { question: "Where is this self-portrait?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/national-portrait-gallery-london-uk\"><strong>National Portrait Gallery</strong></a> in London." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> (1828-1882) drew himself. He was a poet and painter who co-founded the <strong>Pre-Raphaelite Brotherhood</strong> in 1848 with Millais and Holman Hunt." },
    { question: "What is the Pre-Raphaelite Brotherhood?", answer: "The PRB was a group of young British artists who rebelled against the Royal Academy's conventions. They advocated <strong>painting from nature, medieval subjects, and vivid color</strong>, looking to art before Raphael for inspiration." }
  ],
  'dante-gabriel-rossetti-the-virgin-mary-being-comforted': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Virgin Mary receiving comfort</strong>, likely after the Crucifixion. Rossetti painted religious subjects with an emotional rawness that shocked Victorian audiences used to idealized devotional art." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> created this painting. His early religious works are more austere than the <strong>sensuous female portraits</strong> that dominated his later career." },
    { question: "What style did Rossetti work in?", answer: "Rossetti was a founder of the <strong>Pre-Raphaelite Brotherhood</strong>. His style evolved from early medieval-inspired religious scenes to lush, <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>richly colored paintings of women</strong></a> that influenced Art Nouveau and Symbolism." }
  ],
  'dante-gabriel-rossetti-the-return-of-tibullus-to-delia-study-for-delia': [
    { question: "Where is this study displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a>, which holds one of the world's finest Pre-Raphaelite collections." },
    { question: "What does this study depict?", answer: "It's a study for <strong>Delia</strong>, from the story of the Roman poet Tibullus returning to his beloved. Rossetti often drew on <strong>classical and medieval literary sources</strong> for his subjects." },
    { question: "Who created this study?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> made this preparatory work. As both poet and painter, he was drawn to <strong>literary subjects</strong> and often illustrated scenes from Dante, Arthurian legend, and classical poetry." }
  ],
  'dante-gabriel-rossetti-mary-magdalene-at-the-door-of-simon-the-pharisee': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge, England." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Mary Magdalene arriving at the house of Simon the Pharisee</strong>, where she will wash Christ's feet. Rossetti dramatizes the moment of her turning away from her former life." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> created this biblical scene. His treatment of <strong>fallen or redeemed women</strong> was a recurring theme, reflecting both Pre-Raphaelite ideals and his own complex relationships." }
  ],
  'dante-gabriel-rossetti-the-childhood-of-mary-virgin': [
    { question: "Where is this painting?", answer: "This work is at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a> in London. It was the first painting to carry the secret initials \"PRB\" (Pre-Raphaelite Brotherhood)." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>young Virgin Mary being taught to embroider</strong> by her mother Saint Anne. Rossetti painted it in 1849 as a manifesto work for the newly formed Brotherhood." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> created this in 1849. It was the <strong>first Pre-Raphaelite painting exhibited publicly</strong>, marking the debut of a movement that would transform Victorian art." }
  ],
  'dante-gabriel-rossetti-the-first-anniversary-of-the-death-of-beatrice': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>Dante marking the first anniversary of Beatrice's death</strong>, drawing an angel in her memory. Rossetti, named after the poet, was deeply drawn to <strong>Dante Alighieri's love story</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> created this painting. His lifelong obsession with <strong>Dante's Vita Nuova and Beatrice</strong> produced some of his most personal and haunting works." }
  ],
  'dante-gabriel-rossetti-the-two-mothers': [
    { question: "Where is The Two Mothers?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/sudley-art-gallery-liverpool-uk\"><strong>Sudley Art Gallery</strong></a> in Liverpool. The gallery holds a Victorian art collection in a historic house." },
    { question: "What does this painting depict?", answer: "The painting explores the theme of <strong>motherhood through two contrasting figures</strong>. Rossetti's treatment of women as subjects ranged from idealized icons to psychologically complex portraits." },
    { question: "Who painted The Two Mothers?", answer: "<a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> created this work. As leader of the <strong>Pre-Raphaelite movement</strong>, his paintings of women shaped the aesthetic ideals of the late Victorian era." }
  ],
  'david-teniers-younger-the-picture-gallery-of-archduke-leopold-wilhelm': [
    { question: "Where is this painting displayed?", answer: "This work is at <a href=\"/apps/masterpieces/museum/schleissheim-palace-oberschleissheim-germany\"><strong>Schleissheim Palace</strong></a> near Munich. Teniers painted multiple versions of the Archduke's gallery for different patrons." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Archduke Leopold Wilhelm's picture gallery in Brussels</strong>, with paintings hung floor to ceiling. These \"gallery paintings\" document what major art collections looked like in the 17th century." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> served as the Archduke's <strong>court painter and gallery keeper</strong>. His gallery paintings are invaluable records of <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art collecting." }
  ],
  'david-teniers-younger-tavern-scene': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. The Hermitage holds a large collection of Teniers's genre scenes." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>peasants drinking and socializing in a tavern</strong>. Teniers painted hundreds of these genre scenes, combining his father-in-law Brueghel's tradition with a lighter, more refined touch." },
    { question: "Who painted this tavern scene?", answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> (1610-1690) created this work. He was one of the most prolific Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painters, producing over <strong>2,000 works</strong> during his career." }
  ],
  'david-teniers-younger-the-flautist': [
    { question: "Where is The Flautist displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. Catherine the Great acquired many Teniers paintings for her collection." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>flute player</strong>, likely in a tavern or domestic setting. Teniers painted musicians, smokers, and card players with a <strong>polished technique and gentle humor</strong>." },
    { question: "Who was David Teniers the Younger?", answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> was a Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter who married <strong>Brueghel's granddaughter</strong> and became court painter to Archduke Leopold Wilhelm in Brussels." }
  ],
  'david-teniers-younger-the-gallery-of-archduke-leopold-in-brussels': [
    { question: "Where is this gallery painting?", answer: "This version is at the <a href=\"/apps/masterpieces/museum/staatsgalerie-stuttgart-stuttgart-germany\"><strong>Staatsgalerie Stuttgart</strong></a> in Germany. Teniers painted at least 13 versions of the Archduke's gallery for various clients." },
    { question: "What does this painting show?", answer: "The painting depicts the <strong>Archduke Leopold Wilhelm's art collection in Brussels</strong>. It's a painting-within-a-painting, showing identifiable masterpieces by Titian, Veronese, and Giorgione hanging on the walls." },
    { question: "Why are gallery paintings important?", answer: "Teniers's gallery paintings are <strong>visual inventories of 17th-century collections</strong>. Art historians use them to trace the provenance of Old Master paintings, many of which ended up in the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna." }
  ],
  'david-teniers-younger-the-temptation-of-st-anthony': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/wallrafrichartz-museum-cologne-germany\"><strong>Wallraf-Richartz Museum</strong></a> in Cologne, Germany." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. Anthony tormented by demons</strong>, a favorite Flemish subject since Bosch. Teniers painted it many times, filling the scene with <strong>grotesque creatures and fantastic invention</strong>." },
    { question: "Who painted this Temptation?", answer: "<a href=\"/apps/masterpieces/artist/david-teniers-younger\"><strong>David Teniers the Younger</strong></a> created this work. His Temptation paintings carry on the Flemish tradition of <strong>Bosch and Brueghel</strong>, blending horror with dark humor in the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style." }
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
