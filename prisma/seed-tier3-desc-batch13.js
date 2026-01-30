const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'carolus-duran-the-convalescent': [
    { question: "Where is The Convalescent displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The Orsay specializes in French art from 1848 to 1914." },
    { question: "Who painted The Convalescent?", answer: "<a href=\"/apps/masterpieces/artist/carolus-duran\"><strong>Carolus-Duran</strong></a> created this work. He was a leading French portraitist and the teacher of <strong>John Singer Sargent</strong>, who credited Carolus-Duran with shaping his bold, direct technique." },
    { question: "What style did Carolus-Duran work in?", answer: "He painted in a <strong>realist manner influenced by Velázquez and Manet</strong>. His approach of building form through broad color patches rather than careful drawing was considered modern for the 1870s French art establishment." }
  ],
  'carolus-duran-the-assassination': [
    { question: "Where is The Assassination displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a>, Carolus-Duran's hometown museum. Lille's gallery is one of France's largest outside Paris." },
    { question: "Who painted The Assassination?", answer: "<a href=\"/apps/masterpieces/artist/carolus-duran\"><strong>Carolus-Duran</strong></a> (1837-1917) created this dramatic work. Born in Lille as Charles Auguste Émile Durand, he adopted his professional name and became one of <strong>Paris's most fashionable portrait painters</strong>." },
    { question: "What is Carolus-Duran known for?", answer: "He's best remembered as the teacher of <strong>John Singer Sargent</strong> and for his own society portraits. His bold technique, learned from studying Velázquez in Spain, emphasized <strong>direct painting with loaded brushes</strong> over preliminary drawing." }
  ],
  'caspar-david-friedrich-sea-beach-with-fisherman-the-fisherman': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. Friedrich's works are relatively rare outside German collections." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>solitary fisherman on a vast, empty beach</strong>. Friedrich placed lone figures against overwhelming nature to evoke <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>the sublime</strong></a>, the feeling of human smallness before the infinite." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscape. He's Germany's greatest Romantic painter, known for <strong>misty landscapes, lone figures, and spiritual atmosphere</strong>." }
  ],
  'caspar-david-friedrich-landscape-in-the-riesengebirge': [
    { question: "Where is this painting displayed?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/oskar-reinhart-foundation-winterthur-switzerland\"><strong>Oskar Reinhart Foundation</strong></a> in Winterthur, Switzerland." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Riesengebirge mountains</strong> (now the Krkonoše, on the Czech-Polish border). Friedrich hiked these mountains and painted them repeatedly, transforming real topography into spiritual <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>mountain landscapes</strong></a>." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a> created this <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> work. He painted nature as a vehicle for <strong>spiritual contemplation</strong>, where mountains, mist, and light carry metaphysical meaning." }
  ],
  'caspar-david-friedrich-wolves-in-the-forest-in-front-of-a-cave': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>wolves gathered before a cave in a dark forest</strong>. Friedrich's later works grew darker and more brooding, reflecting his declining health and deepening melancholy." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Caspar David Friedrich</strong></a> created this late painting. His <strong>dark forest scenes</strong> evoke psychological states as much as physical places, making him a forerunner of <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>." },
    { question: "What style is this painting?", answer: "It's German <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>. Friedrich's forests are never mere scenery. They carry <strong>symbolic weight</strong>: darkness as the unknown, wolves as primal nature, caves as thresholds between worlds." }
  ],
  'chaim-soutine-the-cellist-serevitsch': [
    { question: "Where is The Cellist displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mcnay-art-museum-san-antonio-tx-us\"><strong>McNay Art Museum</strong></a> in San Antonio, Texas. The McNay holds a strong collection of modern European and American art." },
    { question: "What does The Cellist depict?", answer: "The painting shows a <strong>cellist named Serevitsch performing</strong>. Soutine's portraits of musicians and servants distort the figure with violent brushwork, capturing emotional intensity over physical accuracy." },
    { question: "Who painted The Cellist?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. He was a Lithuanian-born painter of the <strong>School of Paris</strong> whose <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> distortions influenced Willem de Kooning and Francis Bacon." }
  ],
  'chaim-soutine-still-life-with-lamp': [
    { question: "Where is Still Life with Lamp?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/yoshii-gallery-tokyo-japan\"><strong>Yoshii Gallery</strong></a> in Tokyo. Soutine's work is collected globally, with strong interest in Japan and the United States." },
    { question: "Who painted this still life?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. His still lifes of <strong>dead animals, carcasses, and everyday objects</strong> push paint to violent extremes, twisting familiar subjects into raw emotional expressions." },
    { question: "What style did Soutine work in?", answer: "Soutine's style is <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a>, characterized by <strong>thick impasto, writhing forms, and intense color</strong>. He admired Rembrandt's flayed ox and Courbet's realism, pushing both toward visceral extremes." }
  ],
  'chaim-soutine-self-portrait-with-beard': [
    { question: "What does this self-portrait show?", answer: "Soutine depicts himself with a <strong>beard and intense, searching expression</strong>. His self-portraits share the same restless, agitated brushwork he applied to all his subjects." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> (1893-1943) created this work. Born in a Lithuanian shtetl, he moved to Paris in 1913 and became one of the most original painters of the <strong>School of Paris</strong>." },
    { question: "Why is Soutine important?", answer: "Soutine's <strong>violent, gestural painting</strong> directly influenced Abstract Expressionism. De Kooning called him \"the greatest of all,\" and <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> painters continue to draw on his raw emotional intensity." }
  ],
  'chaim-soutine-woman-reclining-on-a-red-divan': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>woman reclining on a red divan</strong>. Soutine's figure paintings distort anatomy through thick, agitated brushwork, making the <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>red</strong></a> fabric and body merge into a single churning surface." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this painting. His portraits and figures treat the human body with the same <strong>turbulent brushwork</strong> he applied to carcasses and landscapes." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Soutine used <strong>thick impasto and writhing forms</strong> to convey inner turmoil. His work sits between Parisian modernism and the raw emotional power of Northern European Expressionism." }
  ],
  'chaim-soutine-still-life-with-herring': [
    { question: "What does this painting depict?", answer: "The painting shows <strong>herring arranged as a still life</strong>. Soutine painted dead fish, poultry, and beef carcasses obsessively, transforming food into raw, almost violent compositions of color and texture." },
    { question: "Who painted Still Life with Herring?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. His still lifes of <strong>dead animals</strong> reference Rembrandt and Chardin but push the subject toward <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> extremes of paint handling." },
    { question: "Why did Soutine paint dead animals?", answer: "Soutine was fascinated by <strong>Rembrandt's Slaughtered Ox</strong> at the Louvre. He painted hanging carcasses, plucked fowl, and fish to explore color, decay, and mortality through thick, physical paint application." }
  ],
  'chaim-soutine-still-life-with-soup-tureen': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>soup tureen</strong> rendered with Soutine's characteristic distortions. Even domestic objects twist and writhe under his brush, as if charged with nervous energy." },
    { question: "Who painted this still life?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. His still lifes transform ordinary kitchen objects into <strong>emotionally charged compositions</strong> through violent color and agitated brushwork." },
    { question: "What influenced Soutine's style?", answer: "He studied <strong>Rembrandt, El Greco, and Courbet</strong> at the Louvre. Their rich paint handling and emotional depth inspired his own <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> approach, though Soutine pushed far beyond their naturalism." }
  ],
  'chaim-soutine-red-houses': [
    { question: "What does Red Houses depict?", answer: "The painting shows <strong>houses in vivid red</strong>, their forms distorted by Soutine's turbulent brushwork. His landscapes twist buildings, trees, and roads into swirling, almost hallucinatory compositions." },
    { question: "Who painted Red Houses?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this landscape. He painted villages in <strong>Céret, Cagnes, and Chartres</strong>, each rendered with the same convulsive energy that defines all his work." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Soutine's landscapes don't describe places so much as <strong>emotional states projected onto scenery</strong>. The <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>red</strong></a> buildings seem to pulse with life." }
  ],
  'chaim-soutine-self-portrait': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/princeton-university-art-museum-puam-princeton-nj-\"><strong>Princeton University Art Museum</strong></a> in New Jersey." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> painted himself with the same <strong>restless, thick brushwork</strong> he applied to all subjects. His self-portraits reveal vulnerability beneath the aggressive paint surface." },
    { question: "Why is Soutine collected?", answer: "His work bridges <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> and Abstract Expressionism. Collectors prize his <strong>raw emotional power and physical paint handling</strong>. A single Soutine sold for over $28 million at Christie's in 2015." }
  ],
  'chaim-soutine-landscape-at-cagnes': [
    { question: "What does Landscape at Cagnes depict?", answer: "The painting shows the <strong>hillside town of Cagnes-sur-Mer</strong> in southern France. Soutine painted there in the 1920s, twisting the Provençal landscape into writhing, emotionally charged compositions." },
    { question: "Who painted this landscape?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> created this work. His <strong>Cagnes landscapes</strong> are among his most collected paintings, showing Mediterranean light filtered through his uniquely turbulent vision." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>. Soutine's landscapes of Cagnes <strong>distort perspective and churn with thick paint</strong>, making the sunny south of France feel as emotionally intense as his portraits and carcass paintings." }
  ],
  'chaim-soutine-self-portrait-by-curtain': [
    { question: "What does this self-portrait show?", answer: "Soutine depicts himself <strong>beside a curtain</strong>, his features built from thick, agitated brushstrokes. The curtain provides a rare stable backdrop against the turbulence of his self-representation." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/chaim-soutine\"><strong>Chaim Soutine</strong></a> (1893-1943) created this self-portrait. He died during the German occupation of Paris, having hidden from the Nazis due to his <strong>Jewish Lithuanian origins</strong>." },
    { question: "What movement does Soutine belong to?", answer: "Soutine is associated with <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> and the <strong>School of Paris</strong>. He shared Montparnasse with Modigliani (his close friend), Chagall, and other immigrant artists who transformed modern art." }
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
