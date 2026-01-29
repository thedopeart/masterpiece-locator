const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ THE SICK CHILD ============
  'sick-child': [
    { question: "Where can I see The Sick Child?", answer: "The first version (1885-86) is at the <a href='/apps/masterpieces/museum/national-gallery-oslo'><strong>National Gallery of Norway</strong></a> in Oslo. <a href='/apps/masterpieces/artist/edvard-munch'><strong>Edvard Munch</strong></a> created six versions of this subject between 1885 and 1927, reflecting how deeply it affected him throughout his life." },
    { question: "What is the painting about?", answer: "A <strong>young red-haired girl</strong> sits propped up in bed, pale and gaunt, looking toward a grieving woman (likely her mother) who bows her head beside her. The scene depicts illness and impending death. Munch painted it from memory of his sister <strong>Sophie</strong>, who died of tuberculosis in 1877 at age 15." },
    { question: "Why did Munch paint this subject repeatedly?", answer: "Sophie's death when Munch was 13 shaped his entire artistic life. He returned to the theme obsessively. Each version explores <strong>grief, loss, and the fragility of life</strong> in a slightly different way. His mother had also died of tuberculosis when he was five, doubling the trauma." },
    { question: "What style is The Sick Child?", answer: "The first version was radical for its time: <strong>scratched, scraped, and reworked</strong> surfaces that outraged critics who expected smooth finish. It anticipates <a href='/apps/masterpieces/movement/expressionism'><strong>Expressionism</strong></a> by decades. Munch deliberately destroyed conventional 'beauty' to express raw emotion." },
    { question: "How big is the first version?", answer: "It measures <strong>119.5 cm × 118.5 cm</strong> (47 × 46.7 inches). The greenish palette and rough texture create an atmosphere of sickness and despair. Norwegian critics savaged it when first shown in 1886, but Munch always considered it a breakthrough: his first truly personal painting." }
  ],

  // ============ SISTINE MADONNA ============
  'sistine-madonna': [
    { question: "Where can I see the Sistine Madonna?", answer: "It's at the <strong>Gemäldegalerie Alte Meister</strong> in Dresden, Germany. <a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> painted it around 1512-1513, commissioned by Pope Julius II for the monastery of San Sisto in Piacenza. Augustus III of Saxony purchased it in 1754." },
    { question: "What are the two cherubs at the bottom?", answer: "The two <strong>putti</strong> (winged child angels) leaning on the bottom edge are the painting's most reproduced detail. They've appeared on everything from postcards to coffee mugs. Their bored, dreamy expressions contrast humorously with the solemn vision above them. They were likely inspired by street children Raphael observed." },
    { question: "What does the painting depict?", answer: "The <strong>Virgin Mary holding the Christ Child</strong> appears on clouds flanked by Saint Sixtus and Saint Barbara. Green curtains are pulled aside as if revealing a heavenly vision. Mary seems to step forward from heaven toward the viewer, carrying Christ down to earth." },
    { question: "How big is the Sistine Madonna?", answer: "It measures <strong>265 cm × 196 cm</strong> (104.3 × 77.2 inches). It's one of Raphael's last works, completed shortly before his death in 1520 at age 37. The painting is oil on canvas, unusual for Raphael, who typically used wood panels for major <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> commissions." },
    { question: "Why is this painting culturally significant?", answer: "It's been called the <strong>most famous painting in Germany</strong>. Writers from Goethe to Dostoevsky praised it. Dostoevsky reportedly stood before it weeping. The image of the two cherubs became one of the most widely reproduced motifs in Western visual culture." }
  ],

  // ============ STILL LIFE WITH APPLES (CÉZANNE) ============
  'still-life-apples-cezanne': [
    { question: "Where can I see Still Life with Apples?", answer: "It's at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. <a href='/apps/masterpieces/artist/paul-cezanne'><strong>Paul Cézanne</strong></a> painted it around 1895-1898. He produced over 100 still life paintings during his career, and apples were his favorite subject." },
    { question: "Why did Cézanne paint so many apples?", answer: "He famously said, 'With an apple I want to <strong>astonish Paris</strong>.' Apples were patient subjects that held their shape while he worked slowly. More importantly, their rounded forms let him study how to build <strong>three-dimensional volume</strong> using patches of color instead of traditional shading." },
    { question: "What makes Cézanne's still lifes important?", answer: "His approach to seeing objects from <strong>multiple angles simultaneously</strong> laid the groundwork for <a href='/apps/masterpieces/movement/cubism'><strong>Cubism</strong></a>. Picasso and Braque both acknowledged Cézanne as their most important predecessor. His still lifes weren't about fruit. They were about how we perceive the physical world." },
    { question: "What style is this?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>. Cézanne built form through overlapping planes of color rather than linear drawing. His visible, constructive brushstrokes and slightly tilted perspectives give the objects a solidity that goes beyond surface appearance." },
    { question: "How big is this painting?", answer: "It measures approximately <strong>68.6 cm × 92.7 cm</strong> (27 × 36.5 inches). Cézanne worked in relative isolation in Aix-en-Provence, far from the Paris art world. His patient, analytical approach couldn't have been more different from the Impressionists' quick, spontaneous technique." }
  ],

  // ============ THE STORM ON THE SEA OF GALILEE ============
  'storm-sea-galilee': [
    { question: "Where can I see The Storm on the Sea of Galilee?", answer: "You can't. It was <strong>stolen</strong> from the <a href='/apps/masterpieces/museum/isabella-stewart-gardner'><strong>Isabella Stewart Gardner Museum</strong></a> in Boston on March 18, 1990, and has never been recovered. Empty frames still hang where the stolen works were displayed, per the museum's policy." },
    { question: "What happened during the theft?", answer: "Two men dressed as <strong>Boston police officers</strong> entered the museum at 1:24 AM, claiming to respond to a call. They handcuffed the guards and spent 81 minutes taking 13 works worth an estimated $500 million. It remains the largest unsolved art theft in history. The FBI has never identified the thieves." },
    { question: "What does the painting depict?", answer: "<a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> painted the biblical scene of Christ calming a storm on the Sea of Galilee. It's his <strong>only known seascape</strong>. The disciples struggle with the rigging while Christ remains calm. Rembrandt included himself among the passengers, gripping his hat and looking out at the viewer." },
    { question: "How big is the painting?", answer: "It measures <strong>160 cm × 128 cm</strong> (63 × 50.4 inches). Rembrandt painted it in 1633 during his early career in Amsterdam. The dramatic contrast between the storm-tossed boat and the calm Christ is a hallmark of <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> painting's theatrical lighting." },
    { question: "Is there a reward for finding it?", answer: "The Gardner Museum offers a <strong>$10 million reward</strong> for information leading to the recovery of all 13 stolen works. The FBI believes the theft was connected to organized crime in the Boston area. Despite decades of investigation, none of the artworks have been recovered." }
  ],

  // ============ THE SURRENDER OF BREDA ============
  'surrender-breda': [
    { question: "Where can I see The Surrender of Breda?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> painted it between 1634 and 1635 for the Hall of Realms in the Buen Retiro Palace." },
    { question: "What event does this depict?", answer: "The <strong>Dutch surrender of the city of Breda</strong> to Spanish forces in June 1625, during the Eighty Years' War. The Dutch commander Justin of Nassau hands the city key to the Spanish general Ambrosio Spinola. Spinola graciously places his hand on Nassau's shoulder, preventing him from kneeling." },
    { question: "Why is the painting called 'Las Lanzas'?", answer: "Its Spanish nickname, <strong>'Las Lanzas'</strong> (The Lances), comes from the forest of Spanish lances rising vertically on the right side. They contrast with the more scattered Dutch weapons on the left, visually representing Spanish military order and superiority." },
    { question: "How big is the painting?", answer: "It's massive: <strong>307 cm × 367 cm</strong> (10 feet 1 inch × 12 feet). Velázquez painted it for a series of battle paintings celebrating Spanish military victories. The composition balances <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> grandeur with a surprisingly human moment of chivalry between enemies." },
    { question: "Is the scene historically accurate?", answer: "Partly. The surrender happened, but Velázquez <strong>invented the specific moment</strong> of generosity. He'd never witnessed the event. He likely met Spinola during an Italian voyage and used him as a model. The painting served as propaganda, presenting Spanish conquest as noble and merciful." }
  ],

  // ============ THE AMBASSADORS ============
  'the-ambassadors': [
    { question: "Where can I see The Ambassadors?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/hans-holbein-younger'><strong>Hans Holbein the Younger</strong></a> painted it in 1533. It's one of the most complex and symbolic portraits of the <a href='/apps/masterpieces/movement/northern-renaissance'><strong>Northern Renaissance</strong></a>." },
    { question: "What is the strange shape at the bottom?", answer: "It's a <strong>skull</strong>, painted in anamorphic perspective. You can only see it properly by looking at the painting from a sharp angle (lower right side). It's a <strong>memento mori</strong>: a reminder of death amid all the wealth and knowledge displayed on the shelves. The distortion was a virtuosic demonstration of Holbein's skill." },
    { question: "Who are the two men?", answer: "The man on the left is <strong>Jean de Dinteville</strong>, French ambassador to England. On the right is <strong>Georges de Selve</strong>, Bishop of Lavaur. They were both about 29 years old. The objects between them (globe, lute, hymnal, sundials) represent their intellectual and diplomatic interests." },
    { question: "How big is this painting?", answer: "It measures <strong>207 cm × 209.5 cm</strong> (81.5 × 82.5 inches), nearly a perfect square. The two men are painted life-size, making the encounter feel strikingly real. Holbein rendered the objects on the shelves with such precision that musicologists can identify the specific lute strings that are broken." },
    { question: "What do the objects symbolize?", answer: "The upper shelf holds <strong>scientific instruments</strong> (celestial globe, sundials, quadrant), representing the heavens and learned knowledge. The lower shelf has <strong>earthly items</strong> (terrestrial globe, lute, hymnal). A broken lute string may symbolize discord in Christendom during the Reformation." }
  ],

  // ============ THE ANGELUS ============
  'the-angelus': [
    { question: "Where can I see The Angelus?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/jean-francois-millet'><strong>Jean-François Millet</strong></a> painted it between 1857 and 1859. It became one of the most widely reproduced images in 19th-century France." },
    { question: "What does The Angelus depict?", answer: "A <strong>peasant couple pausing from work</strong> in a potato field at dusk to pray the Angelus, a Catholic devotion said three times daily when church bells ring. The man holds his hat. The woman bows her head. A wheelbarrow and basket of potatoes sit beside them. A distant church steeple marks the horizon." },
    { question: "Why did Salvador Dalí become obsessed with it?", answer: "<a href='/apps/masterpieces/artist/salvador-dali'><strong>Dalí</strong></a> was fixated on The Angelus, calling it 'the most troubling painting in the world.' He wrote a book arguing the couple was <strong>praying over a dead child's coffin</strong>, not a basket. X-ray analysis later revealed Millet had originally painted a small coffin-like shape that he painted over." },
    { question: "How big is the painting?", answer: "It's surprisingly small: <strong>55.5 cm × 66 cm</strong> (21.9 × 26 inches). The intimate scale makes the quiet devotion feel personal. The warm <a href='https://luxurywallart.com/collections/earth-tones' target='_blank' rel='noopener'><strong>earth tones</strong></a> and low horizon line give the figures a monumental presence despite the painting's modest dimensions." },
    { question: "What art movement does this represent?", answer: "Millet was a founder of the <strong>Barbizon School</strong>, which emphasized painting rural life and landscapes from direct observation. His sympathetic depiction of peasant labor influenced Van Gogh deeply. Van Gogh made copies of The Angelus and considered Millet one of his greatest heroes." }
  ],

  // ============ THE BALCONY (MANET) ============
  'the-balcony-manet': [
    { question: "Where can I see The Balcony?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/edouard-manet'><strong>Édouard Manet</strong></a> painted it in 1868-69. It was shown at the 1869 Salon, where it received mixed reviews." },
    { question: "Who are the people on the balcony?", answer: "The seated woman is painter <strong>Berthe Morisot</strong>, who would become a leading Impressionist. Behind her stand violinist Fanny Claus and painter Antoine Guillemet. A shadowy fourth figure (possibly Manet's son Léon) lurks in the dark interior. Morisot's intense, enigmatic expression has fascinated viewers for over 150 years." },
    { question: "What inspired this painting?", answer: "Manet drew on <strong>Goya's Majas on a Balcony</strong> (c. 1810), translating the Spanish scene into a contemporary Parisian setting. The green shutters and iron railing are distinctly French. Manet often referenced old masters while making radically modern paintings." },
    { question: "How big is The Balcony?", answer: "It measures <strong>170 cm × 124.5 cm</strong> (66.9 × 49 inches). The stark contrast between the <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> balcony railing, white dresses, and dark interior is deliberately jarring. Manet avoided smooth tonal transitions, flattening the image in a way that puzzled academic critics." },
    { question: "What is Berthe Morisot's significance?", answer: "Morisot became one of the core <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> painters and exhibited in nearly all their group shows. She later married Manet's brother Eugène. Her relationship with Manet (artistic, possibly romantic) is one of art history's most discussed connections." }
  ],

  // ============ THE BLUE BOY ============
  'the-blue-boy': [
    { question: "Where can I see The Blue Boy?", answer: "It's at <a href='/apps/masterpieces/museum/huntington-library'><strong>The Huntington</strong></a> in San Marino, California. <a href='/apps/masterpieces/artist/thomas-gainsborough'><strong>Thomas Gainsborough</strong></a> painted it around 1770. Henry Huntington purchased it in 1921 for $728,000 from the Duke of Westminster's collection." },
    { question: "Who is The Blue Boy?", answer: "The traditional identification is <strong>Jonathan Buttall</strong>, the son of a prosperous ironmonger and a friend of Gainsborough. He wears a <strong>17th-century Van Dyck-style costume</strong> in shimmering blue satin, not contemporary 1770s clothing. The anachronistic dress was a tribute to Anthony van Dyck's portraits." },
    { question: "Why is the painting famous?", answer: "It became a <strong>cultural icon in Britain</strong> and its sale to an American collector in 1921 was treated as a national loss. 90,000 people lined up at the National Gallery to see it before it left England. It represents the pinnacle of 18th-century British portraiture." },
    { question: "How big is The Blue Boy?", answer: "It measures <strong>178 cm × 112 cm</strong> (70.1 × 44.1 inches). The <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> costume dominates the canvas. Legend says Gainsborough painted it to disprove rival Joshua Reynolds's claim that blue shouldn't dominate a composition. Whether or not that's true, the blue certainly works." },
    { question: "What art movement is this?", answer: "It belongs to the <strong>British portrait tradition</strong> of the 18th century, with influences from <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> masters like Van Dyck and Rubens. Gainsborough's loose, feathery brushwork and atmospheric landscape background distinguish him from the more formal Reynolds." }
  ],

  // ============ THE CARD PLAYERS ============
  'the-card-players': [
    { question: "Where can I see The Card Players?", answer: "Cézanne painted five versions. Two-player versions are at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris and reportedly in the collection of the Royal Family of Qatar (purchased for approximately <strong>$250 million</strong> in 2011). Larger versions are at the Barnes Foundation and Metropolitan Museum." },
    { question: "Why did Cézanne paint card players?", answer: "<a href='/apps/masterpieces/artist/paul-cezanne'><strong>Cézanne</strong></a> painted <strong>local workers from Aix-en-Provence</strong> playing cards in a café. The subject let him study concentrated human figures in a stable, geometric composition. Card players sit still, which suited his slow, analytical working method. He made the everyday scene monumental." },
    { question: "How much was the Qatar version sold for?", answer: "The Royal Family of Qatar reportedly purchased one version in 2011 for approximately <strong>$250 million</strong>, making it one of the most expensive paintings ever sold. The exact figure has never been officially confirmed. The price reflected both Cézanne's art historical importance and Middle Eastern collectors' growing presence." },
    { question: "What style is The Card Players?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>. Cézanne reduced the figures to simplified, almost <strong>architectural forms</strong>. The bodies have the solidity of cylinders and cones (his own stated goal). This structural approach to the human figure directly influenced <a href='/apps/masterpieces/movement/cubism'><strong>Cubism</strong></a>." },
    { question: "How big is the Orsay version?", answer: "The Musée d'Orsay version measures <strong>47.5 cm × 57 cm</strong> (18.7 × 22.4 inches). It's the smallest and most concentrated version, showing just two players facing each other across a table with a wine bottle between them. The symmetrical composition gives the simple scene a quiet, almost sacred gravity." }
  ],
};

async function seed() {
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${slug} (${faqData.length} FAQs)`);
    } catch (err) {
      console.error(`✗ Failed: ${slug} - ${err.message}`);
    }
  }
  await prisma.$disconnect();
}

seed();
