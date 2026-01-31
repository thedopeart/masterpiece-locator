const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// A4 Batch 3: Tier 2 sculpture FAQ enrichment (5 sculptures)

const faqs = {
  // ============ ELGIN MARBLES ============
  'elgin-marbles': [
    { question: "Where can I see the Elgin Marbles?", answer: "About half are at the <a href='/apps/masterpieces/museum/british-museum'><strong>British Museum</strong></a> in London, displayed in the purpose-built Duveen Gallery. The other half are at the <strong>Acropolis Museum</strong> in Athens, which was built partly to house them if they're ever returned. The British Museum's collection includes 15 metopes, 17 pedimental figures, and 75 meters (247 feet) of the original frieze." },
    { question: "How old are the Elgin Marbles?", answer: "They were carved between <strong>447 and 432 BCE</strong> under the direction of sculptor <strong>Phidias</strong>, during the golden age of <a href='/apps/masterpieces/movement/ancient-greek-art'><strong>ancient Greek art</strong></a>. They decorated the Parthenon, the temple to Athena on the Acropolis in Athens. The frieze depicts the Panathenaic procession, and the metopes show battles between Centaurs and Lapiths." },
    { question: "Why are the Elgin Marbles controversial?", answer: "Greece has demanded their return since the 1980s. The 7th Earl of Elgin removed them from the Parthenon between <strong>1801 and 1812</strong>, claiming permission from the Ottoman rulers who controlled Greece at the time. The British government bought them from Elgin in 1816 for £35,000. Greece argues the removal was <strong>essentially looting</strong>. Britain maintains it was legal and that the museum preserved them from further damage." },
    { question: "What do the Elgin Marbles depict?", answer: "Three types of architectural sculpture: the <strong>frieze</strong> shows a procession celebrating Athena's birthday. The <strong>metopes</strong> (square relief panels) depict mythological battles, primarily Centaurs fighting Lapiths at a wedding feast. The <strong>pediment figures</strong> are larger-than-life gods and heroes from the triangular gable ends of the temple. Together, they're among the finest surviving examples of Classical Greek carving." }
  ],

  // ============ DYING GAUL ============
  'dying-gaul': [
    { question: "Where can I see the Dying Gaul?", answer: "It's in the <strong>Palazzo Nuovo</strong> at the <a href='/apps/masterpieces/museum/capitoline-museums'><strong>Capitoline Museums</strong></a> in Rome, in the Gladiator Room. Pope Clement XII acquired it for the Capitoline collection in the 1730s." },
    { question: "How old is the Dying Gaul?", answer: "The marble statue in Rome is a <strong>Roman copy</strong> from the 1st or 2nd century CE. The original was a Greek bronze made around <strong>230-220 BCE</strong>, probably by the sculptor Epigonus. It was commissioned by King Attalus I of Pergamon to celebrate his victory over the invading Galatian Celts." },
    { question: "What details identify him as a Gaul?", answer: "Several clues mark him as a Celtic warrior: his <strong>thick, lime-washed hairstyle</strong> (a Celtic grooming practice), a distinctive moustache, and a <strong>torc</strong> (twisted metal neck ring) around his throat. He's shown naked, as ancient writers noted that Gauls sometimes fought without armor. A sword wound bleeds from his lower right chest." },
    { question: "Has the statue traveled?", answer: "Yes. <strong>Napoleon's forces took it to Paris in 1797</strong>, where it was displayed at the Louvre. It was returned to Rome in 1816. More recently, it traveled to the National Gallery of Art in Washington, D.C. for a special exhibition in 2013, one of the few times it's left Italy in the modern era." }
  ],

  // ============ DAVID (BERNINI) ============
  'david-bernini': [
    { question: "Where can I see Bernini's David?", answer: "It's at the <a href='/apps/masterpieces/museum/galleria-borghese'><strong>Galleria Borghese</strong></a> in Rome, where it's been since Cardinal Scipione Borghese commissioned it. The sculpture is displayed alongside Bernini's other early masterworks, including Apollo and Daphne and the Rape of Proserpina." },
    { question: "How is Bernini's David different from Michelangelo's?", answer: "Michelangelo shows David <strong>before</strong> the fight, calm and watchful. <a href='/apps/masterpieces/artist/gian-lorenzo-bernini'><strong>Bernini</strong></a> shows him <strong>during</strong> the fight, mid-throw. The body twists, the face grimaces with effort, and the energy extends outward into the viewer's space. It's the difference between Classical restraint and <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> drama." },
    { question: "Is the face a self-portrait?", answer: "Yes. Bernini used his own face as the model. According to his biographer Filippo Baldinucci, <strong>Cardinal Maffeo Barberini</strong> (the future Pope Urban VIII) personally held the mirror for Bernini while he sculpted the expression of concentrated aggression: furrowed brow, clenched jaw, biting his lower lip." },
    { question: "How old was Bernini when he carved it?", answer: "He completed it in <strong>1624</strong> at age 25, finishing in about seven months. The marble statue stands 170 cm (67 inches) tall. It was one of several commissions from Cardinal Borghese that established Bernini as the leading sculptor in Rome before he turned 30." }
  ],

  // ============ DAVID (DONATELLO) ============
  'david-donatello': [
    { question: "Where can I see Donatello's David?", answer: "It's at the <a href='/apps/masterpieces/museum/bargello-florence'><strong>Museo Nazionale del Bargello</strong></a> in Florence, where it's been since 1865. The Bargello is a former prison and barracks turned art museum, and Donatello's David is its most famous resident." },
    { question: "Why is Donatello's David historically important?", answer: "It's the <strong>first freestanding nude male sculpture since antiquity</strong>. <a href='/apps/masterpieces/artist/donatello'><strong>Donatello</strong></a> created it around the 1440s during the <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a>, reviving the classical tradition of the nude figure after over a thousand years. It originally stood in the courtyard of the Palazzo Medici." },
    { question: "How big is Donatello's David?", answer: "It stands <strong>158 cm (about 5 feet 2 inches)</strong> tall. The bronze figure is partly gilded. Unlike Michelangelo's muscular, heroic David, Donatello's version is a slender, almost adolescent boy. He stands on Goliath's severed head wearing boots and a laurel-wreathed hat, looking surprisingly relaxed for someone who just killed a giant." },
    { question: "Who commissioned it?", answer: "Almost certainly the <strong>Medici family</strong>, who used David as a symbol of Florence's independence. The bronze was displayed in the courtyard of the Palazzo Medici, visible to anyone entering. After the Medici were expelled in 1494, the statue was moved to the Palazzo della Signoria. It eventually ended up at the Bargello in the 19th century." }
  ],

  // ============ MAMAN (SPIDER) ============
  'maman-spider-bourgeois': [
    { question: "How big is Maman?", answer: "Over <strong>9 meters (30 feet) tall</strong> and 10 meters wide. It's among the world's largest sculptures. The spider is made of bronze, stainless steel, and marble. Its abdomen holds a sac containing <strong>32 marble eggs</strong>. <strong>Louise Bourgeois</strong> created the original in 1999 when she was 87 years old." },
    { question: "Where can I see Maman?", answer: "Six bronze casts exist in permanent locations worldwide: outside the <a href='/apps/masterpieces/museum/guggenheim-bilbao'><strong>Guggenheim Bilbao</strong></a>, the National Gallery of Canada in Ottawa, Mori Art Museum in Tokyo, Crystal Bridges Museum in Arkansas, Leeum Samsung Museum in Seoul, and Qatar Museums in Doha. The Tate Modern in London owns the only stainless steel version." },
    { question: "Why did Bourgeois make a giant spider?", answer: "The spider represents her <strong>mother</strong>. 'Maman' is French for 'Mommy.' Bourgeois' mother was a tapestry restorer who spun thread, wove fabric, and repaired damaged textiles. Bourgeois associated spiders with the same qualities: weaving, nurturing, protecting. Her mother died when she was 21, and the loss shaped her art for decades." },
    { question: "What are the eggs inside the spider?", answer: "The sac beneath the spider's body contains <strong>32 white marble eggs</strong>, visible through a mesh-like opening. They represent fertility and motherhood. Bourgeois often explored themes of <strong>maternity, vulnerability, and domestic life</strong> in her work. The spider is both protector (sheltering eggs, weaving a home) and predator (trapping prey), reflecting the complexity of the mother-child relationship." }
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
