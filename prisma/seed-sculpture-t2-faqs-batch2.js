const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// A4 Batch 2: Tier 2 sculpture FAQ enrichment (10 sculptures)

const faqs = {
  // ============ MOAI ============
  'moai-easter-island': [
    { question: "How big are the Moai statues?", answer: "The average Moai stands about <strong>4 meters (13 feet)</strong> tall and weighs 12.5 tonnes. But they range widely. The largest one successfully erected, called Paro, is 10 meters tall. An unfinished one in the quarry would have been over 21 meters (70 feet). Most were carved from compressed volcanic ash called <strong>tuff</strong> from the Rano Raraku quarry." },
    { question: "How many Moai are there?", answer: "About <strong>887 Moai</strong> have been documented. Nearly half remain at the Rano Raraku quarry in various stages of completion. The rest were transported to stone platforms called <strong>ahu</strong> around the island's perimeter. The <strong>Rapa Nui people</strong> carved them between roughly 1250 and 1500 CE." },
    { question: "What do the Moai represent?", answer: "They're the <strong>living faces of deified ancestors</strong>. The Rapa Nui called them 'aringa ora' (living faces). Each statue was placed on an ahu facing inland, watching over the clan's territory. The oversized heads, which make up about three-eighths of the body, emphasized the skull as the seat of sacred power." },
    { question: "How were the Moai moved?", answer: "The exact method is still debated, but experiments suggest the Rapa Nui may have <strong>'walked' them upright</strong> by rocking them side to side using ropes, similar to how you'd move a refrigerator. Other theories involve wooden sledges, log rollers, or combinations. When Europeans first arrived in 1722, the statues were still standing. By the late 1800s, all had toppled." }
  ],

  // ============ DISCOBOLUS ============
  'discobolus': [
    { question: "Where can I see the Discobolus?", answer: "The original bronze by <strong>Myron</strong> is lost. What survive are Roman marble copies in several museums: the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> (Townley Discobolus), the Palazzo Massimo alle Terme in Rome (Palombara Discobolus), and the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a>." },
    { question: "How old is the Discobolus?", answer: "The original was created around <strong>460-450 BCE</strong> by the Greek sculptor <strong>Myron</strong>, during the early Classical period of <a href='/apps/masterpieces/movement/ancient-greek-art'><strong>Greek art</strong></a>. It shows a nude athlete at the moment of maximum tension before releasing a discus. The pose captures motion in a way that was groundbreaking for its time." },
    { question: "Why is the Discobolus so famous?", answer: "It was one of the first sculptures to convincingly freeze <strong>dynamic human movement</strong> in stone. The twisted torso, coiled energy, and split-second timing were revolutionary in the 5th century BCE. It became a symbol of athletic idealism and was later adopted as an <strong>Olympic icon</strong>." },
    { question: "Is the pose anatomically accurate?", answer: "Not entirely. Modern athletes and biomechanics experts have noted that the Discobolus stance wouldn't actually produce a good throw. The feet are too close together and the torso rotation is exaggerated. Myron prioritized <strong>visual harmony and drama</strong> over functional accuracy, which was typical of Classical Greek sculpture." }
  ],

  // ============ APOLLO AND DAPHNE ============
  'apollo-and-daphne-bernini': [
    { question: "Where can I see Apollo and Daphne?", answer: "It's at the <a href='/apps/masterpieces/museum/galleria-borghese'><strong>Galleria Borghese</strong></a> in Rome. Cardinal Scipione Borghese commissioned it, and it's never left the villa. The sculpture sits in a room alongside several other early Bernini works. Book tickets well in advance: the Borghese limits visitors to two-hour timed slots." },
    { question: "How big is Apollo and Daphne?", answer: "It stands <strong>243 cm (about 8 feet)</strong> tall. <a href='/apps/masterpieces/artist/gian-lorenzo-bernini'><strong>Bernini</strong></a> carved it from Carrara marble between 1622 and 1625. He was paid 1,000 scudi for the work. The delicate bark, leaves, and roots sprouting from Daphne's fingers were actually finished by his assistant <strong>Giuliano Finelli</strong>." },
    { question: "What story does it depict?", answer: "It's from Ovid's <strong>Metamorphoses</strong>. Apollo, struck by Cupid's golden arrow, chases the nymph Daphne, who was struck by a lead arrow (making her repulsed by love). As Apollo catches her, she begs her father, the river god Peneus, for help. He transforms her into a <strong>laurel tree</strong>. Bernini captured the exact moment of transformation." },
    { question: "What makes this sculpture special?", answer: "Bernini made marble look like living flesh, windblown hair, and growing bark, all at once. The sculpture works from <strong>every angle</strong>. Walking around it reveals new details: Apollo's surprise, Daphne's terror, the bark creeping up her legs. It's one of the defining works of <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> sculpture." }
  ],

  // ============ ECSTASY OF SAINT TERESA ============
  'ecstasy-of-saint-teresa': [
    { question: "Where can I see the Ecstasy of Saint Teresa?", answer: "It's in the <strong>Cornaro Chapel</strong> inside the church of Santa Maria della Vittoria in Rome. The chapel is small and the sculpture is set into the wall above the altar, lit by a hidden window to the left. It's free to enter, though the lighting can be dim." },
    { question: "How big is it?", answer: "The main marble group is about <strong>3.5 meters (11.5 feet)</strong> tall. <a href='/apps/masterpieces/artist/gian-lorenzo-bernini'><strong>Bernini</strong></a> created it between 1647 and 1652. The commission cost 12,000 scudi. He designed the entire chapel as a theatrical setting: gilt bronze rays descend from above, and members of the Cornaro family observe from sculpted balconies on either side." },
    { question: "What's happening in the sculpture?", answer: "Saint Teresa of Ávila described a vision in which an angel repeatedly pierced her heart with a <strong>golden spear tipped with fire</strong>, causing both pain and spiritual ecstasy. Bernini shows her collapsed on a cloud with her eyes half-closed and mouth open. The smiling angel holds the spear. The combination of agony and pleasure has been interpreted as both deeply spiritual and overtly sensual." },
    { question: "What style is this?", answer: "It's the textbook example of <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> sculpture. Bernini combined marble, gilt bronze, stucco, paint, and architecture into one unified experience. The hidden light source, theatrical framing, and emotional intensity were designed to overwhelm the viewer. No other sculptor of the period came close to this level of ambition." }
  ],

  // ============ RAPE OF PROSERPINA ============
  'rape-of-proserpina-bernini': [
    { question: "Where can I see the Rape of Proserpina?", answer: "It's at the <a href='/apps/masterpieces/museum/galleria-borghese'><strong>Galleria Borghese</strong></a> in Rome. Cardinal Scipione Borghese originally commissioned it, then gave it to Cardinal Ludovico Ludovisi. The Italian government bought it back in 1908 and returned it to the Borghese." },
    { question: "How old was Bernini when he made this?", answer: "<a href='/apps/masterpieces/artist/gian-lorenzo-bernini'><strong>Bernini</strong></a> completed it at age <strong>23</strong>, between 1621 and 1622. The sculpture stands 255 cm (about 8 feet 4 inches) tall and is carved from Carrara marble. It's one of his earliest major commissions." },
    { question: "What's the most famous detail?", answer: "Pluto's fingers pressing into Proserpina's thigh. The marble <strong>dimples like real flesh</strong> under his grip. It's an almost impossible effect in hard stone, and it's become one of the most discussed technical achievements in sculpture history. Bernini carved cold marble to look like warm, yielding skin." },
    { question: "What myth does it depict?", answer: "The Roman myth of <strong>Pluto abducting Proserpina</strong> (Greek: Hades and Persephone). Pluto seizes her and drags her to the underworld. Her mother Ceres (Demeter) searches the earth for her, causing winter. Proserpina eventually splits her time between the underworld and the surface, explaining the <strong>cycle of seasons</strong>. The three-headed dog Cerberus guards the border at their feet." }
  ],

  // ============ PERSEUS WITH HEAD OF MEDUSA ============
  'perseus-with-head-of-medusa': [
    { question: "Where can I see Perseus with the Head of Medusa?", answer: "The original stands under the <strong>Loggia dei Lanzi</strong> in Florence's Piazza della Signoria, outdoors and free to view. It's been there since <strong>Benvenuto Cellini</strong> unveiled it on April 27, 1554. The original pedestal and four smaller statuettes are in the Museo Nazionale del Bargello nearby." },
    { question: "How big is it?", answer: "The bronze figure stands over <strong>3 meters (about 10 feet)</strong> tall on its elaborate marble pedestal. Cellini cast it between 1545 and 1554, commissioned by Duke Cosimo I de' Medici. Casting a sculpture this complex in a single bronze pour was extremely difficult and nearly failed. Cellini's autobiography describes the drama in vivid detail." },
    { question: "What myth does it show?", answer: "Perseus holds the severed head of <strong>Medusa</strong> aloft in his left hand while standing on her headless body. In Greek mythology, Medusa was a Gorgon whose gaze turned people to stone. Perseus used a mirrored shield to avoid eye contact, cut off her head with a sickle, and later used it as a weapon." },
    { question: "Why was this sculpture politically important?", answer: "Cosimo I placed it in the Loggia dei Lanzi alongside other powerful sculptures as a <strong>symbol of Medici authority</strong>. Perseus defeating Medusa represented the duke triumphing over his enemies. It faced Michelangelo's David (representing the Republic) and Donatello's Judith, creating a political dialogue in stone about power in Florence." }
  ],

  // ============ BALLOON DOG ============
  'balloon-dog-koons': [
    { question: "How big is a Balloon Dog?", answer: "Each one stands about <strong>307 cm (over 10 feet) tall</strong> and weighs several tons. They're made from mirror-polished stainless steel with a translucent color coating. <strong>Jeff Koons</strong> created five unique versions in different colors: blue, magenta, orange, red, and yellow. They're part of his Celebration series, made between 1994 and 2000." },
    { question: "How much is a Balloon Dog worth?", answer: "Balloon Dog (Orange) sold at Christie's in November 2013 for <strong>$58.4 million</strong>, setting a world auction record for a living artist at the time. The five large sculptures are each one-of-a-kind. Smaller porcelain editions of 2,300 pieces have also been produced." },
    { question: "Where can I see a Balloon Dog?", answer: "The five originals are in <strong>private collections</strong> and occasionally appear in major museum exhibitions. They've been displayed at venues ranging from the roof terrace of the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> to the Grand Canal in Venice. Check current exhibition listings, as Koons loans them periodically." },
    { question: "Is it really just a balloon dog?", answer: "It looks exactly like a twisted balloon animal, scaled up to monumental size and cast in flawless <strong>mirror-finish steel</strong>. Koons takes a cheap, throwaway party object and turns it into something permanent and precious. Critics are split: some see it as a brilliant comment on consumer culture and childhood nostalgia, others call it expensive kitsch." }
  ],

  // ============ LAOCOON AND HIS SONS ============
  'laocoon-and-his-sons': [
    { question: "Where can I see the Laocoön?", answer: "It's in the <strong>Museo Pio-Clementino</strong>, part of the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a> in Rome. The sculpture has been a centerpiece of the papal collection since Pope Julius II acquired it shortly after its discovery in 1506." },
    { question: "How big is the Laocoön?", answer: "The group stands <strong>2.08 meters (6 feet 10 inches)</strong> tall, 1.55 meters wide, and about 0.91 meters deep. It's carved from at least <strong>seven interlocking marble pieces</strong>, despite ancient writer Pliny the Elder claiming it was made from a single block. Three sculptors from Rhodes, Agesander, Polydorus, and Athenodorus, created it around 40-20 BCE." },
    { question: "What myth does it depict?", answer: "The Trojan priest <strong>Laocoön</strong> and his two sons being attacked by sea serpents. Laocoön had warned the Trojans not to accept the Greek wooden horse. The gods Athena and Poseidon sent the serpents to silence him. The sculpture captures the moment of struggle: Laocoön's muscles strain against the coils while his sons writhe beside him." },
    { question: "Why is it art historically important?", answer: "When it was unearthed on January 14, 1506, <strong>Michelangelo was among the first to see it</strong>. The discovery electrified Renaissance Rome and deeply influenced <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> and <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> sculpture. Its emotional intensity, anatomical detail, and complex multi-figure composition became a benchmark for depicting suffering in Western art." }
  ],

  // ============ APOLLO BELVEDERE ============
  'apollo-belvedere': [
    { question: "Where can I see the Apollo Belvedere?", answer: "It's in the <strong>Cortile del Belvedere</strong> at the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a> in Rome. It's been on semi-public display since 1511 and was one of the first sculptures in what became the Vatican's vast art collection." },
    { question: "How old is the Apollo Belvedere?", answer: "The marble statue dates to the <strong>mid-2nd century CE</strong>, but it's a Roman copy of a Greek bronze original from around <strong>330-320 BCE</strong>, attributed to the sculptor Leochares. It stands 224 cm (7 feet 4 inches) tall and is carved from Carrara marble." },
    { question: "What does the sculpture show?", answer: "Apollo is depicted having just <strong>shot an arrow</strong>, likely at the serpent Python. His left arm extends forward holding a now-missing bow, and his gaze follows the arrow's path. He wears sandals and a cloak draped over his outstretched arm. The pose conveys a calm, godlike confidence." },
    { question: "Why was it considered the ideal of beauty?", answer: "For centuries, the Apollo Belvedere was regarded as the <strong>pinnacle of classical sculpture</strong>. Art historian Johann Joachim Winckelmann called it the highest ideal of art among all ancient works. It defined Western beauty standards through the <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassical</strong></a> period. Its influence faded in the 19th century as tastes shifted toward the Elgin Marbles and less 'polished' classical works." }
  ],

  // ============ GREAT SPHINX OF GIZA ============
  'great-sphinx-giza': [
    { question: "How big is the Great Sphinx?", answer: "It's <strong>73 meters (240 feet) long</strong>, 20 meters (66 feet) high, and 19 meters wide at the haunches. It's one of the largest and oldest monumental sculptures in the world. The Sphinx was carved directly from a <strong>single limestone ridge</strong> on the Giza plateau, with the softer yellow body and harder gray head made of different geological layers." },
    { question: "How old is the Great Sphinx?", answer: "Most Egyptologists date it to the reign of Pharaoh <strong>Khafre</strong>, around 2575-2465 BCE, making it roughly <strong>4,500 years old</strong>. It was part of Khafre's funerary complex near his pyramid at Giza. Some fringe theories propose much older dates, but the archaeological consensus firmly ties it to the Old Kingdom." },
    { question: "Why is the nose missing?", answer: "Nobody knows for sure. The popular myth that Napoleon's soldiers shot it off is false: drawings from before Napoleon's time already show the nose missing. One theory blames a 14th-century Sufi Muslim named Muhammad Sa'im al-Dahr, who reportedly <strong>vandalized the face</strong> because local peasants were making offerings to the Sphinx. Erosion and weathering have also taken their toll." },
    { question: "Was the Sphinx originally painted?", answer: "Yes. Traces of <strong>red pigment</strong> have been found on the face, and the body may have been painted in other colors. The headdress (nemes) was likely striped blue and gold. Over 4,500 years of desert exposure stripped nearly all the paint away. Researchers estimate it took about <strong>three years and 100 workers</strong> using stone hammers and copper chisels to complete." }
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
