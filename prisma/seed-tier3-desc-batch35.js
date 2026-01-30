const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'kathe-kollwitz-revolt-by-the-gates-of-a-park': [
    { question: "What does Revolt depict?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> depicted a <strong>peasant uprising</strong> at the gates of an aristocratic park. The image of desperate, angry figures forcing their way in captures the class conflict that drove much of her politically charged art." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. <a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz's</strong></a> prints and drawings are held in major collections worldwide." },
    { question: "What is Kollwitz known for?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Käthe Kollwitz</strong></a> was a German artist who focused on <strong>poverty, war, and social injustice</strong>. Working primarily in printmaking and drawing, she created some of the most powerful images of human suffering in 20th-century art." }
  ],
  'kathe-kollwitz-the-end': [
    { question: "What does The End depict?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> portrayed the <strong>aftermath of a failed revolt</strong>: dead and dying figures strewn across the ground. The print is part of her Peasants' War cycle, documenting the brutal suppression of the 16th-century German uprising." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. The museum holds an important collection of <a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz's</strong></a> graphic work." },
    { question: "What is the Peasants' War cycle?", answer: "It's a series of prints <a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> created between 1902 and 1908, depicting the <strong>German Peasants' War of 1524-25</strong>. She used the historical subject to comment on contemporary class struggle and the human cost of rebellion." }
  ],
  'kathe-kollwitz-whetting-the-scythe': [
    { question: "What does Whetting the Scythe show?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> depicted a <strong>woman sharpening a scythe</strong>, preparing for revolt. The figure's intensity and the weapon's double meaning (farm tool and instrument of violence) make it one of her most powerful images from the Peasants' War series." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/whitworth-art-gallery-university-of-manchester-man\"><strong>Whitworth Art Gallery</strong></a> in Manchester, part of the University of Manchester's art collection." },
    { question: "What medium did Kollwitz prefer?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> worked primarily in <strong>printmaking</strong> (etching, lithography, woodcut) and drawing. She chose these media deliberately: they could be reproduced and distributed widely, reaching ordinary people rather than just museum visitors." }
  ],
  'kathe-kollwitz-selfportrait-hand-at-the-forehead': [
    { question: "What does this self-portrait show?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> depicted herself with her <strong>hand pressed to her forehead</strong>, a gesture suggesting worry, exhaustion, or deep thought. Her self-portraits are unflinchingly honest, showing the toll of age and grief without vanity." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> (MoMA) in New York. MoMA holds important examples of <a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz's</strong></a> graphic art." },
    { question: "Why are Kollwitz's self-portraits significant?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> created over 100 <strong>self-portraits</strong> across her career. They document her aging honestly and express the emotional weight of living through two world wars, losing a son in WWI, and witnessing immense social suffering." }
  ],
  'kathe-kollwitz-the-prisoners': [
    { question: "What does The Prisoners depict?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> showed <strong>captured peasants</strong> bound together after their revolt's failure. The huddled, defeated figures convey despair and solidarity in suffering, a recurring theme in her Peasants' War series." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London, which holds multiple prints from <a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz's</strong></a> major cycles." },
    { question: "What makes Kollwitz's art politically important?", answer: "<a href=\"/apps/masterpieces/artist/kathe-kollwitz\"><strong>Kollwitz</strong></a> used art as a <strong>weapon against injustice</strong>. Her images of poverty, hunger, and war's aftermath were not abstract protests but visceral, human depictions that made suffering impossible to ignore." }
  ],
  'katsushika-hokusai-primer-book160of160treasury160loyal160vassals': [
    { question: "What is this work?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> created an illustrated <strong>primer book</strong> about the 47 loyal ronin, one of Japan's most famous stories of samurai honor and revenge. His book illustrations were as important as his prints." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/guimet-museum-paris-france\"><strong>Guimet Museum</strong></a> in Paris, which holds one of Europe's finest collections of Asian art." },
    { question: "Did Hokusai illustrate many books?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> was extraordinarily prolific, producing <strong>thousands of book illustrations</strong> alongside his famous prints. His illustrated books (ehon) covered everything from samurai tales to drawing manuals." }
  ],
  'katsushika-hokusai-the-sumo-wrestlers-takaneyama-yoichiemon-and-senda': [
    { question: "What does this print show?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> depicted two <strong>sumo wrestlers</strong> in action. Sumo was wildly popular in Edo-period Japan, and prints of famous wrestlers were collected like sports cards are today." },
    { question: "Where is this work displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The Met holds an extensive collection of Japanese woodblock prints." },
    { question: "When did Hokusai create this?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> produced sumo prints relatively <strong>early in his career</strong>. He went through many artistic phases and name changes over his 70-year career, constantly reinventing his style." }
  ],
  'katsushika-hokusai-woman160in-an-interior': [
    { question: "What does Woman in an Interior depict?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> portrayed a <strong>woman in a Japanese interior</strong>, likely a domestic or poetic scene. His figure work shows the same precision and expressiveness as his famous landscape prints." },
    { question: "Where is this work held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/guimet-museum-paris-france\"><strong>Guimet Museum</strong></a> in Paris. French collectors were among the first Europeans to appreciate Japanese art." },
    { question: "Did Hokusai paint figures as well as landscapes?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> excelled at <strong>everything</strong>: landscapes, figures, birds, flowers, ghosts, and erotica. His range was extraordinary, and he worked in woodblock prints, paintings, drawings, and book illustrations throughout his long life." }
  ],
  'katsushika-hokusai-teahouse160umeyashiki': [
    { question: "What does Teahouse Umeyashiki show?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> depicted the <strong>Umeyashiki teahouse</strong>, a social gathering place in Edo (Tokyo). Teahouses were important centers of culture and leisure in Japanese society." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/guimet-museum-paris-france\"><strong>Guimet Museum</strong></a> in Paris. The museum's Japanese collection includes important <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> works." },
    { question: "How did Hokusai influence Western art?", answer: "<a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai's</strong></a> prints reached Europe in the mid-19th century and profoundly influenced <strong>Impressionism and Post-Impressionism</strong>. Monet, Degas, and Van Gogh all collected Japanese prints and absorbed their flat color, bold outlines, and unusual compositions." }
  ],
  'konstantin-korovin-the-river-vorya-at-abramtsevo': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/konstantin-korovin\"><strong>Korovin</strong></a> painted the <strong>Vorya River</strong> at Abramtsevo, a country estate near Moscow that served as an artists' colony. The loose brushwork and attention to natural light reflect his role as Russia's leading Impressionist." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>State Russian Museum</strong></a> in St. Petersburg. <a href=\"/apps/masterpieces/artist/konstantin-korovin\"><strong>Korovin</strong></a> is well represented in Russian museum collections." },
    { question: "What is Korovin known for?", answer: "<a href=\"/apps/masterpieces/artist/konstantin-korovin\"><strong>Korovin</strong></a> was Russia's foremost <strong>Impressionist painter</strong>. He brought French plein-air techniques to Russian subjects, painting landscapes, cityscapes, and theater designs with vibrant color and fluid brushwork." }
  ],
  'lawrence-alma-tadema-the-death-of-hippolytus': [
    { question: "What mythological scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted the death of <strong>Hippolytus</strong>, a figure from Greek mythology destroyed after his stepmother Phaedra falsely accused him. The classical subject let Alma-Tadema display his trademark archaeological precision." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema's</strong></a> classical scenes have seen a strong market revival after decades of critical neglect." },
    { question: "What is Alma-Tadema known for?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> specialized in <strong>ancient world scenes</strong> painted with extraordinary detail. His marble textures, flower arrangements, and sun-drenched interiors recreate Roman and Greek life so convincingly that Hollywood used his paintings as reference for epic films." }
  ],
  'lawrence-alma-tadema-lesbia-weeping-over-a-sparrow': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> illustrated a scene from Catullus's poetry: <strong>Lesbia mourning her dead sparrow</strong>. The Roman poet's tender verses about a pet bird provided an intimate, emotional subject for Alma-Tadema's detailed classical world." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Literary scenes from antiquity were popular subjects for <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> and his Victorian audience." },
    { question: "How accurate is Alma-Tadema's classical detail?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> researched <strong>ancient interiors obsessively</strong>, consulting archaeological findings and visiting museums. His paintings are so detailed that scholars have used them to study Roman domestic life, even though they're artistic reconstructions." }
  ],
  'lawrence-alma-tadema-the-education-of-the-children-of-clovis': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> depicted the <strong>children of Clovis</strong>, the first king of the Franks, being trained in axe-throwing. The early medieval subject is unusual for an artist better known for Roman and Greek scenes." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted Merovingian and early medieval subjects before focusing primarily on classical antiquity." },
    { question: "Did Alma-Tadema only paint classical subjects?", answer: "No. Early in his career, <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted <strong>Merovingian and Egyptian</strong> subjects before settling on the Greco-Roman world that made him famous. His shift to classical subjects coincided with growing public fascination with Pompeii." }
  ],
  'lawrence-alma-tadema-the-passage-of-the-berezina-1812': [
    { question: "What historical event does this depict?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted Napoleon's army crossing the <strong>Berezina River</strong> during the catastrophic 1812 retreat from Moscow. It's a rare military history painting from an artist who usually depicted ancient domestic scenes." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/amsterdams-historisch-museum-amsterdam-netherlands\"><strong>Amsterdam Historical Museum</strong></a>. This early work shows <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> before he found his signature classical style." },
    { question: "How does this differ from his later work?", answer: "This <strong>Napoleonic battle scene</strong> is dramatically different from the sunny Roman interiors Alma-Tadema became famous for. It shows his early range before he specialized in the ancient world." }
  ],
  'lawrence-alma-tadema-the-roman-wine-tasters': [
    { question: "What does The Roman Wine Tasters show?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted <strong>Romans sampling wine</strong> in a luxurious setting, complete with his trademark marble surfaces and floral details. The scene captures the leisured, sensual side of Roman life he depicted so well." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema's</strong></a> intimate Roman genre scenes are particularly popular at auction." },
    { question: "How did Alma-Tadema paint marble so realistically?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> studied <strong>real marble samples</strong> and spent hours in museums examining ancient surfaces. He built up thin, translucent layers of paint to replicate marble's depth and veining. His marble is so convincing it almost looks photographic." }
  ],
  'lawrence-alma-tadema-selfportrait': [
    { question: "What does Alma-Tadema's Self-Portrait show?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> presented himself as a <strong>prosperous, confident artist</strong>. Born in the Netherlands, he became one of the most commercially successful painters in Victorian England, and this portrait reflects that status." },
    { question: "Where is this self-portrait displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/fries-museum-leeuwarden-netherlands\"><strong>Fries Museum</strong></a> in Leeuwarden, the Netherlands, near his birthplace in Friesland." },
    { question: "How successful was Alma-Tadema?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> was one of the <strong>highest-paid painters</strong> of the Victorian era. He was knighted, received the Order of Merit, and his paintings sold for enormous sums. His reputation crashed after his death but has recovered strongly." }
  ],
  'lawrence-alma-tadema-the-massacre-of-the-monks-of-tamond': [
    { question: "What historical event does this depict?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> painted the <strong>killing of monks</strong> during a medieval raid, an early work dealing with Dark Age violence. The dramatic subject is far removed from his later sunny classical scenes." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema's</strong></a> early medieval subjects are less well-known but show his lifelong interest in historical reconstruction." },
    { question: "When did Alma-Tadema paint this?", answer: "This is an <strong>early work</strong> from before <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> shifted to classical subjects. His early career explored Merovingian and early medieval history, applying the same archaeological eye he'd later bring to ancient Rome." }
  ],
  'lawrence-alma-tadema-leaving-church-in-the-fifteenth-century': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> depicted people <strong>leaving a 15th-century church</strong>, a medieval genre scene painted with his characteristic attention to period costume and architecture." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema's</strong></a> medieval subjects tend to be early works, before he specialized in classical antiquity." },
    { question: "What drew Alma-Tadema to historical subjects?", answer: "<a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a> was fascinated by <strong>recreating past worlds</strong> with archaeological accuracy. Whether medieval or classical, he treated history as a living reality to be reconstructed through meticulous research and observation." }
  ],
  'leon-bonnat-sapphira39s-death': [
    { question: "What biblical scene does this depict?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> painted the death of <strong>Sapphira</strong>, who according to the Book of Acts dropped dead after lying about money donated to the apostles. The dramatic subject suits Bonnat's bold, realistic style." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-bonnat\"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, France, a museum built around <a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat's</strong></a> personal art collection." },
    { question: "What is Bonnat known for?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Léon Bonnat</strong></a> was a leading <strong>French academic painter</strong> and portraitist. He painted powerful religious and historical scenes and was a celebrated teacher whose students included Toulouse-Lautrec and Braque." }
  ],
  'leon-bonnat-the-kneeling-girl-in-profile-study-for-the-paintin': [
    { question: "What is this study for?", answer: "It's a preparatory <strong>figure study</strong> by <a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> for his painting of pilgrims at St. Peter's in Rome. Academic painters routinely made detailed studies of individual figures before assembling them in the final composition." },
    { question: "Where is this study held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-bonnat\"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne, which holds the largest collection of <a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat's</strong></a> studies and finished works." },
    { question: "Why are preparatory studies valued?", answer: "<strong>Academic studies</strong> reveal how painters like <a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> built complex compositions from individual parts. They show the artist's process at its most direct, often with a freshness and energy that finished paintings lack." }
  ],
  'leon-bonnat-the-artist39s-little-sister': [
    { question: "Who is depicted in this portrait?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> painted his <strong>younger sister</strong> in a personal portrait that shows a gentler side than his dramatic religious canvases. Family portraits by academic painters often have an intimacy absent from their public commissions." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-bonnat\"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne. The museum preserves both his personal and professional work." },
    { question: "Was Bonnat a successful portraitist?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> became one of France's <strong>most sought-after portraitists</strong>, painting presidents, writers, and aristocrats. His portraits are direct and forceful, with strong modeling and dark backgrounds that focus attention on the sitter's face." }
  ],
  'leon-bonnat-the-pilgrims-at-the-foot-of-the-statue-of-saint-pe': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> painted <strong>pilgrims kneeling before the statue of St. Peter</strong> in St. Peter's Basilica, Rome. The scene captures religious devotion with the realistic observation of figures and setting that defined French academic painting." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-bonnat\"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne. This is the finished painting for which the kneeling girl study was prepared." },
    { question: "What made Bonnat important as a teacher?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> ran one of Paris's most influential <strong>teaching studios</strong>. He emphasized rigorous drawing from life and study of Old Masters. His students included Toulouse-Lautrec, Braque, Dufy, and Munch, many of whom later rebelled against his academic approach." }
  ],
  'leon-bonnat-italian-mother': [
    { question: "What does Italian Mother depict?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> painted an <strong>Italian woman with her child</strong>, a genre subject observed during his time in Italy. The warm palette and direct observation reflect his training in both the French academic tradition and Italian realism." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/musee-bonnat\"><strong>Musée Bonnat-Helleu</strong></a> in Bayonne. <a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> spent formative years in Spain and Italy, and these Mediterranean experiences shaped his art." },
    { question: "How did Italian art influence Bonnat?", answer: "<a href=\"/apps/masterpieces/artist/leon-bonnat\"><strong>Bonnat</strong></a> studied in Italy and absorbed the <strong>strong chiaroscuro</strong> of Caravaggio and Ribera. This influence gave his paintings a dramatic quality of light and shadow that set them apart from lighter French academic work." }
  ],
  'self-portrait-mirror-spilliaert': [
    { question: "What does Self-Portrait with Mirror show?", answer: "<a href=\"/apps/masterpieces/artist/leon-spilliaert\"><strong>Spilliaert</strong></a> painted himself reflected in a mirror, creating a <strong>haunting, hollow-eyed image</strong>. His self-portraits are among the most psychologically intense in modern art, revealing anxiety and isolation with stark honesty." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/musee-ostende\"><strong>Mu.ZEE</strong></a> in Ostend, Belgium, <a href=\"/apps/masterpieces/artist/leon-spilliaert\"><strong>Spilliaert's</strong></a> home city. The museum holds the most comprehensive collection of his work." },
    { question: "What is Spilliaert known for?", answer: "<a href=\"/apps/masterpieces/artist/leon-spilliaert\"><strong>Léon Spilliaert</strong></a> was a Belgian <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> artist known for <strong>eerie nocturnal scenes</strong>, unsettling self-portraits, and images of the Ostend seafront. His stark, minimal compositions feel surprisingly modern." }
  ],
  'lorenzo-lotto-st-jerome-meditating-in-the-desert': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lotto</strong></a> painted <strong>St. Jerome</strong> in the desert, meditating before a crucifix. The rocky landscape and the saint's emaciated body reflect the penitential tradition, rendered with Lotto's characteristic emotional intensity." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. <a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lotto</strong></a> is well represented in major European collections despite being less famous than his Venetian contemporaries." },
    { question: "What is Lotto known for?", answer: "<a href=\"/apps/masterpieces/artist/lorenzo-lotto\"><strong>Lorenzo Lotto</strong></a> was a Venetian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter known for <strong>psychologically penetrating portraits</strong> and emotionally charged religious works. He worked independently of the Venetian mainstream, developing a more personal, introspective style." }
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
