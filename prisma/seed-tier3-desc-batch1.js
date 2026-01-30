const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'preaching-john-baptist-bloemaert': [
    { question: "Where can I see The Preaching of John the Baptist?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's one of several Bloemaert works in the museum's Dutch and Flemish collection." },
    { question: "Who painted The Preaching of John the Baptist?", answer: "<a href=\"/apps/masterpieces/artist/abraham-bloemaert\"><strong>Abraham Bloemaert</strong></a> painted this in 1600. He was a founder of the Utrecht school and one of the most influential Dutch painters working in the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>John the Baptist preaching</strong> to a crowd in a wooded landscape. Bloemaert fills the composition with dramatically posed figures and rich foliage, typical of his Mannerist-to-Baroque transition period." }
  ],
  'adolph-menzel-young-seated-worker': [
    { question: "Who painted Young Seated Worker?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> created this study. He was Germany's leading <strong>Realist painter</strong> in the 19th century, known for detailed depictions of industrial life and Prussian history." },
    { question: "What style is this painting?", answer: "Menzel worked in a <strong>Realist style</strong> focused on direct observation. His worker studies were groundbreaking for treating ordinary laborers as serious artistic subjects, anticipating the Social Realist movement." },
    { question: "Why is Adolph Menzel important?", answer: "Menzel was the most prominent German artist of his era, celebrated for works like <strong>The Iron Rolling Mill</strong>. He produced over 10,000 drawings and was one of the first painters to document <a href=\"/apps/masterpieces/movement/realism\"><strong>industrial labor</strong></a> in detail." }
  ],
  'adolph-menzel-study-of-a-hand': [
    { question: "Who drew this study of a hand?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> created this drawing. He was obsessive about anatomical accuracy and produced thousands of preparatory studies throughout his career." },
    { question: "Why did Menzel draw so many studies?", answer: "Menzel made over <strong>10,000 drawings</strong> during his lifetime. He believed in studying every detail from life, and his hand and figure studies helped him achieve the precise <a href=\"/apps/masterpieces/movement/realism\"><strong>Realism</strong></a> his finished paintings are known for." },
    { question: "What medium did Menzel use for his studies?", answer: "Menzel worked in <strong>graphite, chalk, and gouache</strong> for his studies. His drawings were so accomplished that they're exhibited as finished works in their own right at museums across Germany." }
  ],
  'adolph-menzel-voltaire-in-the-court-of-frederick-ii-of-prussia': [
    { question: "Where is Voltaire in the Court of Frederick II displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. It's part of one of the world's largest art collections." },
    { question: "What does this painting show?", answer: "The scene depicts <strong>Voltaire visiting Frederick the Great's court</strong> at Sanssouci Palace. Menzel recreated 18th-century Prussian life with painstaking historical accuracy, down to the furniture and costumes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a> painted this scene. He spent years researching <strong>Frederick the Great's era</strong>, producing a famous series of paintings depicting the Prussian king's court and military campaigns." }
  ],
  'iron-rolling-mill': [
    { question: "Where is The Iron Rolling Mill displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/alte-nationalgalerie\"><strong>Alte Nationalgalerie</strong></a> in Berlin. It's considered one of the most important works in the museum's 19th-century collection." },
    { question: "Why is The Iron Rolling Mill significant?", answer: "Painted in 1875, it was one of the first major paintings to depict <strong>industrial labor</strong> as its central subject. <a href=\"/apps/masterpieces/artist/adolph-menzel\"><strong>Menzel</strong></a> spent years visiting factories and making studies of workers before completing it." },
    { question: "How big is The Iron Rolling Mill?", answer: "The canvas measures approximately <strong>158 x 254 cm (62 x 100 inches)</strong>. Its large scale helps convey the overwhelming heat, noise, and physical effort of the factory floor." }
  ],
  'adriaen-brouwer-portrait-of-a-man': [
    { question: "Where is this Portrait of a Man displayed?", answer: "It's held at the <a href=\"/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland\"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam, Netherlands. The museum has a strong collection of Dutch and Flemish old masters." },
    { question: "Who was Adriaen Brouwer?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> was a Flemish genre painter who died at just 33. Despite his short life, he was admired by both <strong>Rubens and Rembrandt</strong>, who collected his work." },
    { question: "What is Brouwer known for painting?", answer: "Brouwer specialized in small <strong>genre scenes of peasant life</strong>: tavern brawls, smokers, drinkers, and card players. His loose brushwork and psychological observation influenced Dutch and Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting." }
  ],
  'adriaen-brouwer-the-back-operation': [
    { question: "What does The Back Operation depict?", answer: "The painting shows a <strong>barber-surgeon performing a procedure</strong> on a patient's back, likely lancing a boil. These crude medical scenes were a popular subject in Dutch and Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre painting." },
    { question: "Who painted The Back Operation?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> painted this scene. He often depicted the rougher side of daily life with dark humor and sharp observation, influenced by Pieter Bruegel the Elder." },
    { question: "Why did artists paint medical scenes?", answer: "Surgical scenes were a staple of <strong>Dutch and Flemish genre painting</strong>. They combined comedy, horror, and moral commentary. The quack doctor or barber-surgeon was a stock character meant to entertain viewers while warning against charlatans." }
  ],
  'adriaen-brouwer-the-brawl': [
    { question: "Where can I see The Brawl?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York City. It's part of the Met's European Paintings collection." },
    { question: "What does The Brawl depict?", answer: "The scene shows <strong>peasants fighting in a tavern</strong>, a signature subject for Brouwer. His tavern brawls capture genuine emotion and physical energy, moving beyond simple caricature." },
    { question: "Who painted The Brawl?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> painted this work. Both <strong>Rubens and Rembrandt</strong> collected his paintings. Rembrandt owned at least six Brouwers at the time of his bankruptcy in 1656." }
  ],
  'adriaen-brouwer-the-smoker': [
    { question: "Where is The Smoker displayed?", answer: "The painting is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It dates to 1636, near the end of Brouwer's short life." },
    { question: "What style is The Smoker?", answer: "Brouwer painted in the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre tradition, using <strong>loose, fluid brushwork</strong> and a muted palette. His handling of paint was remarkably free for the period, anticipating later developments in painterly technique." },
    { question: "Who was Adriaen Brouwer?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> (1605-1638) was a Flemish painter who worked in both Antwerp and Haarlem. He died at 33, possibly of plague, but left a lasting influence on <strong>Dutch genre painting</strong>." }
  ],
  'adriaen-brouwer-the-bitter-drunk': [
    { question: "Where is The Bitter Drunk displayed?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/st228del-frankfurt-am-main-germany\"><strong>Städel Museum</strong></a> in Frankfurt, Germany. The Städel holds one of Germany's most important collections of European old masters." },
    { question: "What does The Bitter Drunk depict?", answer: "The painting captures a man with a <strong>grimacing expression after tasting something bitter</strong>. Brouwer excelled at these character studies, painting exaggerated facial expressions that sit between comedy and genuine psychological observation." },
    { question: "What makes Brouwer's paintings valuable?", answer: "Despite dying at 33, <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> was collected by both <strong>Rubens and Rembrandt</strong>. His small panels are rare. At auction, they've sold for over $1 million, driven by his reputation and scarcity." }
  ],
  'still-life-asparagus-coorte': [
    { question: "Where is Still Life with Asparagus displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. Coorte was virtually forgotten until the 20th century, and the Rijksmuseum helped revive his reputation." },
    { question: "Who painted Still Life with Asparagus?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-coorte\"><strong>Adriaen Coorte</strong></a> painted this in 1697. He's now considered a master of the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> still life, though almost nothing is known about his life." },
    { question: "What makes Coorte's still lifes special?", answer: "Coorte painted <strong>tiny, intensely focused compositions</strong> on paper mounted to panel. He typically showed just one or two objects against a dark background, creating an intimate, almost meditative quality unlike the lavish Dutch banquet pieces of his era." }
  ],
  'adriaen-coorte-shells': [
    { question: "Who painted Shells?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-coorte\"><strong>Adriaen Coorte</strong></a> created this still life. He specialized in small paintings of <strong>shells, fruits, and asparagus</strong> against dark backgrounds, achieving a quiet intensity rare in <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painting." },
    { question: "Why did Coorte paint shells?", answer: "<strong>Shells were prized collectibles</strong> in the 17th-century Netherlands. Dutch traders brought exotic specimens from the East Indies, and wealthy collectors displayed them in curiosity cabinets. Painting them reflected this cultural fascination." },
    { question: "Why was Coorte forgotten?", answer: "Coorte worked in Middelburg, far from the major art centers. He produced small, modest works that didn't attract attention. He was <strong>rediscovered in the 1950s</strong> by art historian Laurens Bol, who identified about 70 surviving paintings." }
  ],
  'adriaen-coorte-pelican-and-ducks-in-a-mountain-landscape': [
    { question: "Who painted Pelican and Ducks in a Mountain Landscape?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-coorte\"><strong>Adriaen Coorte</strong></a> painted this work. It's unusual in his output since he's best known for <strong>small still lifes</strong>, not landscape or animal subjects." },
    { question: "What style is this painting?", answer: "The work belongs to the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> tradition. While Coorte typically painted intimate still lifes of fruits and shells, this <strong>landscape with birds</strong> shows a different side of his range." },
    { question: "How many Coorte paintings survive?", answer: "About <strong>70 paintings</strong> by Adriaen Coorte are known today. He was completely forgotten until art historian Laurens Bol rediscovered him in the 1950s. His works now sell for significant sums at auction." }
  ],
  'adriaen-van-ostade-landscape': [
    { question: "Where is this Landscape displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/museum-boijmans-van-beuningen-rotterdam-netherland\"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam, Netherlands. The museum holds a broad collection of <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> art." },
    { question: "Who was Adriaen van Ostade?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> (1610-1685) was a Dutch genre painter from Haarlem. He studied under <strong>Frans Hals</strong> alongside Adriaen Brouwer, and spent his entire career painting peasant life." },
    { question: "What is Van Ostade known for?", answer: "Van Ostade painted <strong>peasant interiors, tavern scenes, and village life</strong>. Early works show rowdy, Brouwer-influenced subjects. Later paintings became warmer and more sympathetic, reflecting a shift in Dutch taste toward gentler genre scenes." }
  ],
  'adriaen-van-ostade-smiling-smoker': [
    { question: "Who painted Smiling Smoker?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> painted this character study. He produced hundreds of small paintings and prints of <strong>Dutch peasant life</strong> during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>." },
    { question: "What does this painting depict?", answer: "The painting shows a <strong>peasant man smoking a pipe with a broad grin</strong>. Smoker portraits were a popular sub-genre in 17th-century Dutch and Flemish art, often carrying moral overtones about earthly pleasures and vanity." },
    { question: "Who influenced Van Ostade's style?", answer: "Van Ostade studied under <strong>Frans Hals</strong> in Haarlem and was heavily influenced by <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a>. His early work shares Brouwer's rough humor, though his later paintings became softer and more refined." }
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
