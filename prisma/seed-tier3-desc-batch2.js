const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'adriaen-brouwer-the-pancake-baker': [
    { question: "Where is The Pancake Baker displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. It's part of the museum's European art collection." },
    { question: "What does The Pancake Baker depict?", answer: "The scene shows a <strong>woman cooking pancakes</strong> while figures gather around. Brouwer turned ordinary domestic moments into lively compositions, capturing gestures and expressions with quick, confident brushwork." },
    { question: "Who painted The Pancake Baker?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> painted this genre scene. He specialized in small panels depicting <strong>everyday Flemish life</strong>, from tavern brawls to kitchen scenes like this one." }
  ],
  'adriaen-brouwer-village-barbershop': [
    { question: "Where is Village Barbershop displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich. The museum holds one of the strongest collections of Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting in the world." },
    { question: "What does Village Barbershop depict?", answer: "The scene shows a <strong>barber at work in a village shop</strong>. In the 17th century, barbers also performed surgery and dentistry. Brouwer painted these humble trades with humor and sharp observation." },
    { question: "Who was Adriaen Brouwer?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> (1605-1638) was a Flemish painter who died at 33. Despite his short life, both <strong>Rubens and Rembrandt</strong> collected his small genre panels." }
  ],
  'adriaen-brouwer-peasants-smoking-and-drinking': [
    { question: "Where can I see Peasants Smoking and Drinking?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/alte-pinakothek\"><strong>Alte Pinakothek</strong></a> in Munich, Germany. The museum has several Brouwer works in its Flemish collection." },
    { question: "What does this painting show?", answer: "The scene captures <strong>peasants sharing pipes and drinks</strong> in a dimly lit interior. Smoking was a new habit in 17th-century Europe, and Brouwer made it one of his signature subjects." },
    { question: "What style is this painting?", answer: "Brouwer worked in the Flemish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> genre tradition. His <strong>loose brushwork and earthy palette</strong> influenced later Dutch painters, including Adriaen van Ostade and David Teniers the Younger." }
  ],
  'adriaen-brouwer-tavern-scene': [
    { question: "Where is this Tavern Scene displayed?", answer: "The painting is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. It's a characteristic example of Brouwer's small-scale genre work." },
    { question: "What does Tavern Scene depict?", answer: "The painting shows <strong>figures gathered in a rustic tavern</strong>. Brouwer captured the rowdy atmosphere of Flemish drinking houses with raw energy, loose paint handling, and unflinching honesty." },
    { question: "Who painted this Tavern Scene?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> painted this work. He lived hard and died young at 33, but his <strong>tavern scenes</strong> set the standard for the genre across the Low Countries." }
  ],
  'adriaen-brouwer-jan-davidszoon-de-heem': [
    { question: "Where is this portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's one of Brouwer's rare portrait works." },
    { question: "Who is depicted in this painting?", answer: "The subject is <strong>Jan Davidsz. de Heem</strong>, a celebrated Dutch-Flemish still life painter known for lavish flower and fruit arrangements. Brouwer and de Heem were contemporaries in Antwerp." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a> painted this. While he's best known for <strong>tavern and peasant scenes</strong>, this portrait shows he could capture individual likeness with the same directness." }
  ],
  'adriaen-van-ostade-village-tavern-with-four-figures': [
    { question: "Where is Village Tavern with Four Figures?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/residenzgalerie-salzburg-austria\"><strong>Residenzgalerie</strong></a> in Salzburg, Austria. The gallery specializes in European paintings from the 16th to 19th centuries." },
    { question: "Who painted this tavern scene?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> painted this work. He spent his entire career in Haarlem, producing hundreds of <strong>peasant genre scenes</strong> during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>." },
    { question: "What does this painting show?", answer: "The scene depicts <strong>four figures in a village tavern</strong>, a subject Van Ostade returned to throughout his career. His warm lighting and gentle humor made these scenes popular with Dutch middle-class collectors." }
  ],
  'adriaen-van-ostade-smoker': [
    { question: "Where is Smoker by Van Ostade displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York City. The Met holds several works by Van Ostade in its Dutch paintings collection." },
    { question: "What does Smoker depict?", answer: "The painting shows a <strong>peasant smoking a clay pipe</strong>. Pipe smoking was new in the 17th-century Netherlands, and painters like Van Ostade and <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> made it a popular genre subject." },
    { question: "Who was Adriaen van Ostade?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> (1610-1685) was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painter from Haarlem. He studied under <strong>Frans Hals</strong> and became one of the leading painters of peasant life." }
  ],
  'adriaen-van-ostade-the-halt-at-the-inn': [
    { question: "What does The Halt at the Inn depict?", answer: "The painting shows <strong>travelers stopping at a roadside inn</strong>. These scenes of rest and refreshment were popular in Dutch art, reflecting the busy travel culture of the 17th-century Netherlands." },
    { question: "Who painted The Halt at the Inn?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> painted this genre scene. His later works, like this one, tend to be <strong>warmer and more refined</strong> than his early, rougher tavern paintings." },
    { question: "What style is this painting?", answer: "It belongs to the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre tradition. Van Ostade's soft golden lighting and careful attention to <strong>everyday life</strong> made him one of the period's most collected artists." }
  ],
  'adriaen-van-ostade-the-breakfast': [
    { question: "Where is The Breakfast displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It's part of the Met's extensive <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> collection." },
    { question: "What does The Breakfast depict?", answer: "The scene shows <strong>peasants sharing a morning meal</strong>. Van Ostade often painted domestic interiors with warm light filtering through windows, giving humble subjects a quiet dignity." },
    { question: "Who painted The Breakfast?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> created this work. He produced over <strong>800 paintings, drawings, and etchings</strong> during his 75-year life, nearly all depicting Dutch peasant life." }
  ],
  'adriaen-van-ostade-three-peasants-at-an-inn': [
    { question: "Where is Three Peasants at an Inn displayed?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/dulwich-picture-gallery\"><strong>Dulwich Picture Gallery</strong></a> in London. It's one of the oldest public art galleries in England, opened in 1811." },
    { question: "What does this painting show?", answer: "The scene captures <strong>three peasants gathered at an inn</strong>, drinking and socializing. Van Ostade painted these small-scale tavern scenes with a warmth that distinguishes them from Brouwer's rougher treatment of similar subjects." },
    { question: "Who painted Three Peasants at an Inn?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> painted this work during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>. He trained under <strong>Frans Hals</strong> alongside Adriaen Brouwer in Haarlem." }
  ],
  'adriaen-van-ostade-wandering-musician': [
    { question: "Where is Wandering Musician displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>State Hermitage Museum</strong></a> in St. Petersburg, Russia. The Hermitage has a strong collection of Dutch and Flemish genre painting." },
    { question: "What does Wandering Musician depict?", answer: "The painting shows an <strong>itinerant musician performing</strong>, a common sight in 17th-century Dutch villages. Traveling entertainers were a popular subject in genre painting, often carrying undertones of vagabond life." },
    { question: "Who painted Wandering Musician?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> created this scene. Music appears often in his work. He captured <strong>village entertainment</strong> with the same careful attention he gave to tavern interiors and domestic life." }
  ],
  'adriaen-van-ostade-the-peasant-settling-his-debt': [
    { question: "Where is The Peasant Settling His Debt?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York. The museum holds a diverse collection spanning Egyptian antiquities to contemporary art." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>peasant paying a debt</strong>, likely at a tavern or shop. Van Ostade often painted small financial exchanges, reflecting the cash-based commercial culture of the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> painted this genre scene. His work documented <strong>everyday economic life</strong> in Dutch villages with warmth and humor." }
  ],
  'adriaen-van-ostade-the-merry-peasant': [
    { question: "Where is The Merry Peasant displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York City. The Met holds multiple Van Ostade works." },
    { question: "What does The Merry Peasant depict?", answer: "The painting shows a <strong>jovial peasant</strong>, likely drinking or celebrating. Van Ostade's later work shifted from rough caricature toward <strong>sympathetic, warm portrayals</strong> of rural people enjoying simple pleasures." },
    { question: "Who was Adriaen van Ostade?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> (1610-1685) spent his entire career in Haarlem. He was one of the most prolific <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre painters, producing over <strong>800 works</strong>." }
  ],
  'adriaen-van-ostade-peasants-drinking-and-making-music-in-a-barn': [
    { question: "What does this painting depict?", answer: "The scene shows <strong>peasants drinking and playing music in a barn</strong>. Combining revelry with music was a favorite theme for Van Ostade, reflecting the social life of 17th-century Dutch villages." },
    { question: "Who painted this barn scene?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> created this work. He studied under <strong>Frans Hals</strong> and became the leading painter of Dutch rural entertainment during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Golden Age</strong></a>." },
    { question: "What style is this painting?", answer: "It's a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre painting. Van Ostade used <strong>warm golden light</strong> and a muted palette to give barn and tavern interiors an inviting, atmospheric quality." }
  ],
  'adriaen-van-ostade-the-merry-drinkers': [
    { question: "What does The Merry Drinkers depict?", answer: "The painting shows <strong>peasants enjoying drinks together</strong>, painted around 1628. It's an early work, showing the influence of <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a>'s rougher, more comic style." },
    { question: "Who painted The Merry Drinkers?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> painted this early genre scene. Dating to about 1628, it comes from the start of his career when he was still absorbing the influence of <strong>Brouwer and Hals</strong>." },
    { question: "What style is this painting?", answer: "It belongs to the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre tradition. Early Van Ostade works like this feature <strong>darker tones and cruder humor</strong> compared to his later, more polished paintings." }
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
