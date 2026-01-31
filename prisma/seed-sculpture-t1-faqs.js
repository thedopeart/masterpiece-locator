const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// A3: Replace FAQs for Tier 1 sculptures with rich, research-backed content
// 5 FAQs each, 40-100 word answers, with interlinks

const faqs = {
  // ============ STATUE OF LIBERTY ============
  'statue-of-liberty': [
    { question: "How tall is the Statue of Liberty?", answer: "The statue itself stands <strong>151 feet (46 meters)</strong> tall. With the pedestal, the total height reaches 305 feet (93 meters). The copper skin is only 2.4 mm thick, about the width of two pennies stacked. <a href='/apps/masterpieces/artist/frederic-auguste-bartholdi'><strong>Frédéric Auguste Bartholdi</strong></a> designed the exterior while <strong>Gustave Eiffel</strong> (yes, the tower guy) engineered the internal iron framework that holds the whole thing together." },
    { question: "Why is the Statue of Liberty green?", answer: "She wasn't always green. When unveiled in <strong>1886</strong>, the statue was shiny reddish-brown, the natural color of copper. Over about 20 years, exposure to air and moisture created a layer of <strong>copper carbonate</strong> called patina. That's the green you see today. The patina actually protects the copper underneath from further corrosion, so nobody's planning to polish it off." },
    { question: "Can you go inside the Statue of Liberty?", answer: "You can. Visitors climb <strong>354 steps</strong> (22 stories) to reach the crown, which has 25 windows overlooking New York Harbor. Crown access tickets sell out weeks in advance, so book early. The torch has been closed to the public since 1916 after a German sabotage explosion at nearby Black Tom Island damaged the arm. Pedestal access is easier to get." },
    { question: "Who gave the Statue of Liberty to America?", answer: "France gave the statue to the United States as a <strong>gift of friendship</strong> in 1886. French political thinker Édouard de Laboulaye proposed the idea in 1865, and sculptor <a href='/apps/masterpieces/artist/frederic-auguste-bartholdi'><strong>Bartholdi</strong></a> spent nearly a decade designing and building it. France paid for the statue, America paid for the pedestal. Both countries had to raise funds through public donations. The statue was shipped across the Atlantic in 214 crates." },
    { question: "Where is the Statue of Liberty located?", answer: "She stands on <strong>Liberty Island</strong> in New York Harbor. Despite common belief, the island is technically in New Jersey waters, though it falls under New York's jurisdiction. You can only reach it by ferry from either Manhattan or Liberty State Park in New Jersey. The statue faces southeast, greeting ships entering the harbor, just as Bartholdi intended." }
  ],

  // ============ MOUNT RUSHMORE ============
  'mount-rushmore': [
    { question: "How big are the faces on Mount Rushmore?", answer: "Each face is about <strong>60 feet (18 meters) tall</strong>, roughly the height of a six-story building. The figures are scaled to a man 465 feet tall. <a href='/apps/masterpieces/artist/gutzon-borglum'><strong>Gutzon Borglum</strong></a> chose the location because the southeast-facing granite gets direct sunlight most of the day. Workers removed nearly <strong>500,000 tons of rock</strong> using dynamite, jackhammers, and pneumatic drills." },
    { question: "Which presidents are on Mount Rushmore?", answer: "Four presidents, chosen by Borglum to represent the nation's founding, growth, development, and preservation: <strong>George Washington</strong> (founding), <strong>Thomas Jefferson</strong> (expansion via the Louisiana Purchase), <strong>Theodore Roosevelt</strong> (industrial development and the Panama Canal), and <strong>Abraham Lincoln</strong> (preservation of the Union through the Civil War)." },
    { question: "How long did Mount Rushmore take to build?", answer: "Construction ran from <strong>1927 to 1941</strong>, about 14 years. The actual carving work totaled roughly six and a half years because weather, funding gaps, and design changes caused frequent shutdowns. Borglum died in March 1941, seven months before the project officially ended. His son Lincoln oversaw the final work. <strong>Lack of funding</strong>, not completion, forced the project to stop on October 31, 1941." },
    { question: "Is there a secret room inside Mount Rushmore?", answer: "Yes. Borglum originally planned a <strong>Hall of Records</strong> carved into the canyon behind the faces. He wanted it to hold copies of the Constitution and Declaration of Independence. Funding ran out before it was finished. In 1998, the National Park Service placed a time capsule of porcelain panels inside the partially carved chamber, but it's <strong>not open to visitors</strong>." },
    { question: "How do I visit Mount Rushmore?", answer: "The memorial is in the <strong>Black Hills of South Dakota</strong>, near Keystone. Admission is free, though parking costs $10 per vehicle. The <strong>Presidential Trail</strong> is a 0.6-mile loop from the Visitor Center that gets you close to the base. For a profile view of the carvings, stop along Highway 244 west of the main complex. The Sculptor's Studio on-site explains how the carving was done." }
  ],

  // ============ CHRIST THE REDEEMER ============
  'christ-the-redeemer': [
    { question: "How tall is Christ the Redeemer?", answer: "The statue stands <strong>30 meters (98 feet)</strong> tall, with an 8-meter (26-foot) pedestal beneath it. The outstretched arms span <strong>28 meters (92 feet)</strong> wide. It weighs about 635 metric tons. The head alone weighs 30 tonnes. The statue sits 710 meters above sea level on top of <strong>Corcovado mountain</strong> in Rio de Janeiro, making it visible from much of the city below." },
    { question: "What is Christ the Redeemer made of?", answer: "Reinforced concrete covered in a mosaic of <strong>soapstone tiles</strong>. Workers cut the soapstone into six million small triangular pieces, glued each one by hand onto a mesh backing, then applied the panels to the statue's surface. French-Polish sculptor <a href='/apps/masterpieces/artist/paul-landowski'><strong>Paul Landowski</strong></a> designed the overall form, Brazilian engineer Heitor da Silva Costa oversaw construction, and Romanian sculptor Gheorghe Leonida carved the face." },
    { question: "When was Christ the Redeemer built?", answer: "Construction ran from <strong>1922 to 1931</strong>. The statue was dedicated on October 12, 1931. The idea for a large religious monument on Corcovado had been floated since the 1850s, but it didn't gain real momentum until after World War I. The project was largely funded by the <strong>Catholic Church in Brazil</strong> and private donations. Protestant groups opposed it at the time." },
    { question: "Is Christ the Redeemer one of the Seven Wonders?", answer: "It's one of the <strong>New Seven Wonders of the World</strong>, chosen in a global poll in 2007. The original Seven Wonders were ancient sites (only the Great Pyramid still exists). The New Seven Wonders list also includes Machu Picchu, the Colosseum, the Taj Mahal, the <a href='/apps/masterpieces/art/great-wall-of-china'><strong>Great Wall of China</strong></a>, Petra, and Chichén Itzá." },
    { question: "How do you get to Christ the Redeemer?", answer: "Most visitors take the <strong>Corcovado Rack Railway</strong>, a 20-minute scenic train ride through the Tijuca National Park rainforest. You can also reach it by official van or authorized taxi. The train departs from Cosme Velho station. Buy tickets online in advance during peak season. At the top, escalators and elevators take you to the base of the statue. The views of Rio, Sugarloaf Mountain, and Guanabara Bay are worth the trip alone." }
  ],

  // ============ MICHELANGELO'S DAVID ============
  'michelangelo-david': [
    { question: "How tall is Michelangelo's David?", answer: "The statue stands <strong>5.17 meters (17 feet)</strong> tall and weighs 5,560 kilos. <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> carved it from a single block of white marble quarried in Carrara. Two other sculptors had already tried and abandoned the same block before Michelangelo took it on in 1501 at age 26. He finished in 1504, and the statue was originally placed outdoors in front of the Palazzo della Signoria in Florence." },
    { question: "Where can I see Michelangelo's David?", answer: "The original is at the <a href='/apps/masterpieces/museum/galleria-accademia-florence'><strong>Galleria dell'Accademia</strong></a> in Florence, Italy. It was moved indoors in <strong>1873</strong> to protect it from weather damage. A full-size replica stands in the original outdoor location at Piazza della Signoria. Book tickets in advance. The museum is relatively small, so you won't spend hours navigating it, but lines can be long." },
    { question: "Has David ever been damaged?", answer: "Yes. In <strong>1991</strong>, a man attacked the statue with a hammer, breaking off part of the second toe on the left foot. Fragments from the original marble were used in the restoration. Over the centuries, the statue also suffered damage from being outdoors for nearly 400 years: acid rain, pigeon droppings, and a lightning strike in the 16th century. Moving it indoors was the right call." },
    { question: "Why is David's head so large?", answer: "Michelangelo deliberately made the head and hands <strong>oversized</strong> because the statue was originally meant to be displayed on the roofline of Florence's cathedral, high above viewers. Seen from below, normal proportions would've looked wrong. The exaggerated features compensate for the viewing angle. When the city council saw the finished piece, they decided it was too good for the rooftop and placed it at ground level in the main square instead." },
    { question: "What moment does David depict?", answer: "David is shown <strong>before the fight</strong>, not after it. Unlike earlier Renaissance versions by <a href='/apps/masterpieces/art/david-donatello'><strong>Donatello</strong></a> and Verrocchio, which show David standing over Goliath's severed head, Michelangelo captured the tense moment of preparation. David's brow is furrowed, his muscles are taut, and his sling is over his left shoulder. The choice reflected Florence's political identity: a small republic ready to defend itself against larger powers." }
  ],

  // ============ LINCOLN MEMORIAL STATUE ============
  'lincoln-memorial-statue': [
    { question: "How big is the Lincoln Memorial statue?", answer: "The seated figure of Lincoln rises <strong>19 feet (5.8 meters)</strong> tall, on an 11-foot pedestal, for a total of 30 feet. The statue weighs 170 tons and is made from <strong>28 blocks of white Georgia marble</strong>. Sculptor <a href='/apps/masterpieces/artist/daniel-chester-french'><strong>Daniel Chester French</strong></a> designed it, and the Piccirilli Brothers carved the individual blocks in their Bronx studio, then assembled them on-site in Washington." },
    { question: "When was the Lincoln Memorial built?", answer: "The statue was completed in <strong>1919</strong>, and the memorial building was formally dedicated on <strong>May 30, 1922</strong>. Architect Henry Bacon designed the Greek temple-style structure with 36 Doric columns, one for each state in the Union at the time of Lincoln's death. French used Lincoln's actual life mask and hand casts as references, along with photographs by <strong>Matthew Brady</strong>, to get the likeness right." },
    { question: "Is the Lincoln statue using sign language?", answer: "This is a popular myth. Some claim Lincoln's left hand forms the letter 'A' and his right forms 'L' in American Sign Language, a nod to his signing of the charter for Gallaudet University (a school for the deaf). The National Park Service says it's <strong>not intentional</strong>. French sculpted one hand clenched (representing strength) and one open (representing compassion). But it's a fun story." },
    { question: "Where is the Lincoln Memorial?", answer: "It sits at the <strong>western end of the National Mall</strong> in Washington, D.C., directly across from the Washington Monument. Admission is free. The memorial is open <strong>24 hours a day</strong>, and visiting at night is especially worth it. The statue is dramatically lit and the crowds thin out. It's also where Martin Luther King Jr. delivered his 'I Have a Dream' speech in 1963." },
    { question: "What is written inside the Lincoln Memorial?", answer: "Two of Lincoln's most famous speeches are carved into the interior walls: the <strong>Gettysburg Address</strong> (on the south wall) and his <strong>Second Inaugural Address</strong> (on the north wall). Above the statue, an inscription reads: 'In this temple, as in the hearts of the people for whom he saved the Union, the memory of Abraham Lincoln is enshrined forever.' Jules Guerin painted the murals above each speech." }
  ],
};

async function seed() {
  let updated = 0;
  let failed = 0;

  for (const [slug, faqArray] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqArray, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${slug} (${faqArray.length} FAQs)`);
      updated++;
    } catch (err) {
      console.error(`✗ Failed: ${slug} - ${err.message}`);
      failed++;
    }
  }

  console.log(`\nDone: ${updated} updated, ${failed} failed`);
  await prisma.$disconnect();
}

seed();
