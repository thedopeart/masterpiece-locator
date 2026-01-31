const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// A4 Batch 1: Tier 2 sculpture FAQ enrichment (10 sculptures)
// Replaces existing Tier 3 FAQs with richer 4-5 FAQ format

const faqs = {
  // ============ THE THINKER ============
  'the-thinker-rodin': [
    { question: "Where can I see The Thinker?", answer: "The most famous cast is at the <a href='/apps/masterpieces/museum/musee-rodin'><strong>Musée Rodin</strong></a> in Paris, displayed in the garden. But there are <strong>over 25 full-size bronze casts</strong> worldwide, including at the Rodin Museum in Philadelphia, the Legion of Honor in San Francisco, and the National Museum of Western Art in Tokyo." },
    { question: "How big is The Thinker?", answer: "The monumental version stands <strong>181 cm (about 6 feet) tall</strong>. <a href='/apps/masterpieces/artist/auguste-rodin'><strong>Rodin</strong></a> originally sculpted it at a much smaller scale (70 cm) in 1880 as part of his Gates of Hell. The first large bronze cast was made in 1904." },
    { question: "Who is The Thinker supposed to be?", answer: "Originally, he was <strong>Dante Alighieri</strong> sitting atop The Gates of Hell, looking down at the damned souls below. Rodin later separated the figure and gave it a more universal meaning. The muscular nude doesn't look much like a medieval poet. He's become a symbol of <strong>philosophy and deep thought</strong> in general." },
    { question: "What style is The Thinker?", answer: "It's a key work of late 19th-century sculpture, bridging <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> and early modernism. Rodin's textured surfaces and expressive modeling broke with the smooth, idealized tradition of academic <strong>Neoclassical sculpture</strong>. His approach influenced virtually every sculptor who came after him." },
    { question: "Why does The Thinker use his right hand on the left side?", answer: "The figure rests his <strong>right elbow on his left knee</strong>, which creates a twisted, tense posture. Rodin deliberately chose this cross-body pose to convey physical strain, not relaxed contemplation. The entire body is thinking, not just the mind. Muscles are engaged, the back is curved, the toes grip the base." }
  ],

  // ============ VENUS DE MILO ============
  'venus-de-milo': [
    { question: "Where can I see the Venus de Milo?", answer: "She's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris, where she's been since 1821. She has her own gallery on the ground floor of the Sully Wing. Along with the Mona Lisa and the Winged Victory, she's one of the Louvre's three most visited works." },
    { question: "Why is the Venus de Milo missing her arms?", answer: "Nobody knows exactly how the arms were lost. The statue was discovered in <strong>1820</strong> on the Greek island of Milos by a farmer. Some fragments of arms and a hand holding an apple were found nearby, but they may not belong to the statue. Scholars have debated her original pose for over 200 years." },
    { question: "How old is the Venus de Milo?", answer: "She dates to approximately <strong>130-100 BCE</strong>, during the Hellenistic period of <a href='/apps/masterpieces/movement/ancient-greek-art'><strong>ancient Greek art</strong></a>. The sculptor may have been Alexandros of Antioch, based on an inscription found with the statue. She stands <strong>203 cm (6 feet 8 inches)</strong> tall and is carved from Parian marble." },
    { question: "Is the Venus de Milo really Venus?", answer: "Probably. The half-draped pose is typical of <strong>Aphrodite</strong> (Venus in Roman mythology). The apple fragment found at the discovery site supports this: Aphrodite won the golden apple in the Judgment of Paris. Some scholars have suggested she could be Amphitrite, a sea goddess worshipped on Milos, but the Aphrodite identification is widely accepted." }
  ],

  // ============ WINGED VICTORY OF SAMOTHRACE ============
  'winged-victory-samothrace': [
    { question: "Where can I see the Winged Victory?", answer: "She stands at the top of the <strong>Daru Staircase</strong> in the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. The dramatic placement, with the figure appearing to land on the prow of a ship, has been one of the museum's most photographed views since the statue was installed there in 1884." },
    { question: "How big is the Winged Victory?", answer: "The figure itself is <strong>3.28 meters (nearly 11 feet)</strong> tall. Including the ship's prow base, the total height reaches 5.57 meters (over 18 feet). She's carved from <strong>Parian marble</strong>, one of the finest grades in ancient Greece. The ship base is made from a different marble, Lartos marble from Rhodes." },
    { question: "Who does the Winged Victory represent?", answer: "She's <strong>Nike</strong>, the Greek goddess of victory. The sculpture was created around <strong>190 BCE</strong> to commemorate a naval victory. A French consul named Charles Champoiseau discovered her on the island of Samothrace in 1863. The sculptor's identity is unknown." },
    { question: "Why is the Winged Victory headless?", answer: "The head and both arms were never recovered. Only fragments of the right hand and a few fingers have been found. Despite the missing parts, the statue's dramatic sense of <strong>forward motion</strong>, the wind pressing fabric against her body, wings spread wide, makes it one of the most powerful sculptures from <a href='/apps/masterpieces/movement/ancient-greek-art'><strong>ancient Greece</strong></a>." }
  ],

  // ============ PIETA ============
  'pieta-michelangelo': [
    { question: "Where can I see Michelangelo's Pietà?", answer: "It's in <strong>St. Peter's Basilica</strong> in <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican City</strong></a>, Rome. Since 1972, it's been displayed behind bulletproof acrylic glass. You can visit it for free when entering the basilica, though security lines can be long. It sits in the first chapel on the right." },
    { question: "Why is there bulletproof glass around the Pietà?", answer: "On May 21, 1972, a mentally disturbed geologist named <strong>Laszlo Toth</strong> attacked the statue with a hammer, striking it 15 times. He broke Mary's nose, part of her eyelid, and her left arm. Restorers used original marble fragments from the damage to repair it. The glass barrier was installed shortly after." },
    { question: "How old was Michelangelo when he carved the Pietà?", answer: "<a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> carved it between <strong>1498 and 1499</strong>, when he was just 24 years old. He sculpted it from a single block of Carrara marble. The finished piece measures 174 cm x 195 cm (about 5 feet 9 inches x 6 feet 5 inches). It's the only work he ever signed: his name is carved across Mary's sash." },
    { question: "Why does Mary look so young in the Pietà?", answer: "She looks almost the same age as her son. Michelangelo reportedly said that <strong>chaste women maintain their youth</strong> longer. Art historians see it as a theological choice: Mary's youthful face represents her spiritual purity rather than physical age. The <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> often idealized religious figures this way." },
    { question: "What does 'Pietà' mean?", answer: "It's Italian for '<strong>pity</strong>' or 'compassion.' The Pietà is a specific scene in Christian art: the <strong>Virgin Mary cradling the dead body of Christ</strong> after the crucifixion. Many artists have depicted this subject, but Michelangelo's version is by far the most famous. The tenderness of Mary's expression and the limp realism of Christ's body set it apart." }
  ],

  // ============ BUST OF NEFERTITI ============
  'bust-of-nefertiti': [
    { question: "Where can I see the Bust of Nefertiti?", answer: "It's at the <a href='/apps/masterpieces/museum/neues-museum-berlin'><strong>Neues Museum</strong></a> in Berlin, Germany. The bust has its own dedicated room and is the museum's most visited object. Photography is <strong>not allowed</strong> in the Nefertiti room, though that rule is loosely enforced." },
    { question: "Why is one of Nefertiti's eyes missing?", answer: "The <strong>left eye</strong> has no inlay, while the right eye has a rock crystal pupil. Theories range from the eye falling out over 3,000 years to sculptor <strong>Thutmose</strong> deliberately leaving it blank (perhaps because the bust was a workshop model). CT scans confirmed there was never any adhesive in the left eye socket, suggesting it was intentionally unfinished." },
    { question: "How old is the Bust of Nefertiti?", answer: "It dates to approximately <strong>1345 BCE</strong>, during Egypt's 18th Dynasty. German archaeologist Ludwig Borchardt discovered it on December 6, 1912, in Thutmose's workshop at Amarna. The bust is made of <strong>limestone with a painted stucco layer</strong> and weighs about 20 kg (44 pounds). It stands 49 cm (19 inches) tall." },
    { question: "Does Egypt want the Nefertiti bust back?", answer: "Yes. Egypt has repeatedly requested its return since the 1920s. The dispute centers on how Germany acquired the bust. Critics say Borchardt's 1912 division of finds was <strong>deliberately misleading</strong>, downplaying the bust's quality to keep it. Germany maintains the division was legal. The Neues Museum considers it a centerpiece of their collection and has consistently refused repatriation." }
  ],

  // ============ THE KISS (RODIN) ============
  'the-kiss-rodin': [
    { question: "Where can I see Rodin's The Kiss?", answer: "The original marble is at the <a href='/apps/masterpieces/museum/musee-rodin'><strong>Musée Rodin</strong></a> in Paris. A second large marble version is at the <strong>Tate Modern</strong> in London. A third is at the Ny Carlsberg Glyptotek in Copenhagen. Multiple bronze casts also exist in museums worldwide." },
    { question: "How big is The Kiss?", answer: "The marble version stands <strong>181.5 cm (about 6 feet) tall</strong>. <a href='/apps/masterpieces/artist/auguste-rodin'><strong>Rodin</strong></a> originally sculpted the couple as part of his Gates of Hell in 1882, at a smaller scale. The French government commissioned the first large marble version in 1888, though it wasn't publicly shown until 1898." },
    { question: "Who are the people in The Kiss?", answer: "They're <strong>Paolo and Francesca</strong>, two lovers from Dante's Inferno. Francesca was married to Paolo's brother. They fell in love while reading a story about Lancelot together, and her husband killed them both. In Dante's poem, they're condemned to the second circle of Hell. Rodin shows the moment just before their first kiss, the book still in Paolo's hand." },
    { question: "What style is The Kiss?", answer: "It bridges <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> and early modernism. Compared to the smooth, static nudes of academic <strong>Neoclassical</strong> sculpture, Rodin's figures twist and lean into each other with visible emotion. The polished marble contrasts with rougher, unfinished areas at the base, a signature Rodin technique." }
  ],

  // ============ LITTLE MERMAID ============
  'little-mermaid-copenhagen': [
    { question: "How big is the Little Mermaid statue?", answer: "She's surprisingly small: just <strong>125 cm (4 feet 1 inch)</strong> tall and weighs 175 kg (385 pounds). Most visitors expect something much larger. She sits on a granite boulder at the <strong>Langelinie promenade</strong> in Copenhagen's harbor. The bronze figure was unveiled on August 23, 1913." },
    { question: "Who created the Little Mermaid?", answer: "Danish sculptor <strong>Edvard Eriksen</strong> created her. Carl Jacobsen (son of the Carlsberg brewery founder) commissioned the statue in 1909 after seeing a ballet based on Hans Christian Andersen's fairy tale. Ballerina Ellen Price modeled for the head, but refused to pose nude, so Eriksen used his own wife Eline as the body model." },
    { question: "Has the Little Mermaid been vandalized?", answer: "Many times. She's been <strong>beheaded twice</strong> (1964 and 1998), had her arm sawed off in 1984, been covered in paint multiple times, and was even blown off her rock with explosives in 2003. Each time, she's been restored. Since 1965, the statue on display is a <strong>replica</strong>. The original is kept in the Brussels City Museum." },
    { question: "What does the Little Mermaid statue represent?", answer: "She depicts a scene from <strong>Hans Christian Andersen's 1837 fairy tale</strong> in which a young mermaid gives up her life in the sea to gain a human soul and the love of a prince. The statue shows her mid-transformation, sitting on the rocks with legs instead of a tail, looking wistfully toward the shore. She's become Copenhagen's most recognized symbol." }
  ],

  // ============ MANNEKEN PIS ============
  'manneken-pis': [
    { question: "How big is Manneken Pis?", answer: "Just <strong>55.5 cm (about 22 inches)</strong> tall. It's one of the most famously underwhelming tourist sights in Europe. The tiny bronze statue of a boy urinating into a fountain basin sits at the corner of Rue de l'Étuve and Rue des Grands Carmes in Brussels, near the Grand Place." },
    { question: "How old is Manneken Pis?", answer: "The current bronze version was sculpted by <strong>Jérôme Duquesnoy the Elder</strong> in 1619. But records show a stone fountain with a similar figure existed at the same spot as early as <strong>1388</strong>. The statue on display today is actually a replica installed in 1965. The 1619 original is kept in the Brussels City Museum." },
    { question: "Why does Manneken Pis wear costumes?", answer: "He has a <strong>wardrobe of over 1,000 costumes</strong> donated by organizations and countries from around the world. The tradition started in the 17th century. He gets dressed up for holidays, national celebrations, and diplomatic occasions. His outfits are managed by a nonprofit and displayed in rotation at the Brussels City Museum." },
    { question: "Has Manneken Pis been stolen?", answer: "Multiple times. The statue was <strong>stolen by English soldiers in 1745</strong>, by French soldiers in 1747, and taken during various other incidents. Each time, a new copy was made. The 1619 original survived until 1965, when it was moved indoors permanently. A brand new cast replaced it on the street." }
  ],

  // ============ CLOUD GATE ============
  'cloud-gate-the-bean': [
    { question: "How big is Cloud Gate?", answer: "It measures <strong>10 x 20 x 13 meters (33 x 66 x 42 feet)</strong> and weighs 110 tons. The sculpture is made from 168 polished stainless steel plates welded together with <strong>no visible seams</strong>. Its mirror surface reflects Chicago's skyline and the clouds moving overhead. You can walk under a 12-foot arch at the center." },
    { question: "Who created Cloud Gate?", answer: "British-Indian artist <strong>Anish Kapoor</strong> designed it. The sculpture was installed in Millennium Park in Chicago between 2004 and 2006. It was formally dedicated on May 15, 2006. Kapoor said the design was inspired by <strong>liquid mercury</strong>." },
    { question: "Why is it called 'The Bean'?", answer: "Chicagoans started calling it 'The Bean' because of its legume-like shape. Kapoor <strong>initially disliked the nickname</strong>, preferring the official title Cloud Gate (a reference to the sculpture as a gate to Chicago reflected in its surface). He eventually warmed up to it. Most people now call it The Bean without thinking twice." },
    { question: "Can you touch Cloud Gate?", answer: "Yes. Unlike most public artworks, visitors are <strong>encouraged to touch it</strong>. The surface is wiped down twice a day to remove fingerprints. Walking underneath reveals a concave chamber called the 'omphalos' that creates warped, multiplied reflections of anyone standing inside. It's free to visit in Millennium Park, open daily." }
  ],

  // ============ TERRACOTTA ARMY ============
  'terracotta-army': [
    { question: "How many Terracotta Warriors are there?", answer: "Over <strong>8,000 soldiers</strong>, plus 130 chariots with 520 horses and 150 cavalry horses. They were buried around <strong>210 BCE</strong> with Emperor Qin Shi Huang, China's first emperor. The figures are spread across three main excavation pits. Many remain unexcavated to preserve them." },
    { question: "Are the warriors all different?", answer: "Yes. Each figure has a <strong>unique face</strong>, with different hairstyles, expressions, and features. They were assembled from separately made parts (heads, arms, legs, torsos) then customized with hand-sculpted details before firing. Height varies by military rank, with generals being the tallest. No two warriors are identical." },
    { question: "Where can I see the Terracotta Army?", answer: "At the <strong>Emperor Qinshihuang's Mausoleum Site Museum</strong>, about 35 km northeast of Xi'an in Shaanxi Province, China. The largest pit is enclosed by a massive roofed structure. The site was discovered in <strong>1974</strong> by local farmers digging a well. It became a UNESCO World Heritage Site in 1987." },
    { question: "Were the Terracotta Warriors originally painted?", answer: "Yes. The warriors were originally <strong>brightly painted</strong> in red, green, blue, yellow, and purple. Exposure to air after excavation caused most of the lacquer-based paint to dry out and flake off within minutes. Archaeologists now use special preservation techniques and leave many warriors <strong>unexcavated</strong> until better methods are developed." },
    { question: "How were the Terracotta Warriors made?", answer: "Craftsmen used <strong>local clay</strong>, shaping parts separately in molds, then assembling and customizing each figure by hand. After assembly, the warriors were fired in kilns at high temperatures, then painted. The entire project took an estimated <strong>700,000 laborers</strong> nearly 40 years to complete, beginning when Qin Shi Huang took the throne at age 13." }
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
