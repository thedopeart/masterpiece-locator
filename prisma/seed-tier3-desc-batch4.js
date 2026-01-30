const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'albert-joseph-moore-study-of-two-female-figures': [
    { question: "Where is this drawing displayed?", answer: "This study is held at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. The museum's prints and drawings collection includes over 50,000 British works on paper." },
    { question: "Who was Albert Joseph Moore?", answer: "<a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Albert Joseph Moore</strong></a> (1841-1893) was a British painter known for decorative compositions of <strong>draped female figures</strong>. His work shares the aesthetic sensibility of James McNeill Whistler." },
    { question: "What style did Moore work in?", answer: "Moore belonged to the <strong>Aesthetic Movement</strong>, which championed \"art for art's sake.\" His paintings focus on color harmony and classical drapery rather than narrative, prioritizing <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>beauty of form</strong></a> over storytelling." }
  ],
  'albert-joseph-moore-the-shulamite': [
    { question: "Where is The Shulamite displayed?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/walker-art-gallery\"><strong>Walker Art Gallery</strong></a> in Liverpool. The gallery holds one of the best collections of Victorian art outside London." },
    { question: "What does The Shulamite depict?", answer: "The title refers to the <strong>Shulamite woman from the Song of Solomon</strong>. Moore paints her in classical drapery, typical of his decorative approach that blends biblical subjects with Greek aesthetic ideals." },
    { question: "Who painted The Shulamite?", answer: "<a href=\"/apps/masterpieces/artist/albert-joseph-moore\"><strong>Albert Joseph Moore</strong></a> created this work. He was a key figure in the <strong>Aesthetic Movement</strong>, painting idealized female figures in arrangements designed purely for visual harmony." }
  ],
  'port-of-hamburg-marquet': [
    { question: "Where is The Port of Hamburg displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/hamburger-kunsthalle\"><strong>Hamburger Kunsthalle</strong></a> in Hamburg, Germany. It's fitting that this view of Hamburg's port resides in the city itself." },
    { question: "Who painted The Port of Hamburg?", answer: "<a href=\"/apps/masterpieces/artist/albert-marquet\"><strong>Albert Marquet</strong></a> painted this in 1909. He was a French painter and close friend of Matisse who started as a <strong>Fauvist</strong> but developed a quieter, more naturalistic style." },
    { question: "What style is this painting?", answer: "Marquet moved beyond <a href=\"/apps/masterpieces/movement/fauvism\"><strong>Fauvism</strong></a> toward a restrained style focused on <strong>harbor views and waterfront scenes</strong>. His simplified forms and subtle tonal shifts give his port paintings a calm, meditative quality." }
  ],
  'albrecht-durer-st-jerome': [
    { question: "Where is this St. Jerome drawing?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/kupferstichkabinett-berlin-berlin-germany\"><strong>Kupferstichkabinett</strong></a> in Berlin, one of the world's finest collections of prints and drawings." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> created this depiction of St. Jerome. He returned to the saint as a subject multiple times, including his famous 1514 engraving <strong>St. Jerome in His Study</strong>." },
    { question: "Why did Dürer depict St. Jerome?", answer: "St. Jerome was a popular subject in <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> art. As the scholar who translated the Bible into Latin, he represented the ideal of <strong>devoted intellectual life</strong> that humanist artists admired." }
  ],
  'albrecht-durer-selfportrait-at-13': [
    { question: "Where is Dürer's Self-Portrait at 13?", answer: "This drawing is at the <a href=\"/apps/masterpieces/museum/albertina-vienna-austria\"><strong>Albertina</strong></a> in Vienna. It's one of the museum's most treasured works on paper." },
    { question: "What makes this self-portrait special?", answer: "Drawn in <strong>1484 when Dürer was just 13</strong>, it's one of the earliest known self-portraits by any Western artist. The silverpoint technique required extraordinary confidence since marks couldn't be erased." },
    { question: "Who drew this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> drew himself as a boy of 13. He went on to become the greatest artist of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, pioneering the self-portrait as a serious art form." }
  ],
  'albrecht-durer-saint-johns-church': [
    { question: "Where is Saint John's Church displayed?", answer: "This work is at <a href=\"/apps/masterpieces/museum/kunsthalle-bremen\"><strong>Kunsthalle Bremen</strong></a> in Germany. The museum holds an important collection of works on paper, including several Dürer drawings." },
    { question: "What does this work depict?", answer: "The drawing shows <strong>Saint John's Church</strong>, likely in Nuremberg where Dürer lived and worked. His architectural studies demonstrate the same precision he brought to his famous nature studies and prints." },
    { question: "Who created this drawing?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> drew this church study. Beyond his renowned prints and paintings, he produced hundreds of <strong>watercolors and drawings</strong> documenting architecture, landscapes, and nature." }
  ],
  'albrecht-durer-madonna-and-child-with-musical-angels': [
    { question: "What does this painting depict?", answer: "The scene shows the <strong>Virgin Mary with the infant Jesus</strong> surrounded by angels playing music. It's a traditional devotional subject that Dürer treated with his characteristic attention to detail." },
    { question: "Who painted this Madonna and Child?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> created this work. He painted several <strong>Madonna compositions</strong> throughout his career, blending <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> precision with Italian compositional ideas." },
    { question: "What style is this painting?", answer: "It reflects the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> tradition. Dürer combined <strong>German detail and precision</strong> with Italian idealism, having studied in Venice. His religious paintings bridge the two traditions." }
  ],
  'albrecht-durer-soldiers': [
    { question: "Where is this drawing of soldiers?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/kupferstichkabinett-berlin-berlin-germany\"><strong>Kupferstichkabinett</strong></a> in Berlin. The museum's Dürer holdings are among the most important in the world." },
    { question: "Who drew this study of soldiers?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> created this drawing. Military figures appear throughout his work, most famously in the 1498 engraving <strong>Knight, Death and the Devil</strong>." },
    { question: "What medium did Dürer work in?", answer: "Dürer worked across <strong>engraving, woodcut, watercolor, oil painting, and drawing</strong>. He's considered the greatest printmaker of the <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, and his drawings are prized as finished works." }
  ],
  'albrecht-durer-society-on-horseback': [
    { question: "Where is Society on Horseback displayed?", answer: "This drawing is at <a href=\"/apps/masterpieces/museum/kunsthalle-bremen\"><strong>Kunsthalle Bremen</strong></a> in Germany. The museum preserves an important group of Dürer's works on paper." },
    { question: "What does this drawing show?", answer: "The scene depicts <strong>well-dressed figures on horseback</strong>. Dürer was a keen observer of social life and costume, and his drawings document fashion and customs of <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Renaissance</strong></a> Germany." },
    { question: "Who created this drawing?", answer: "<a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> drew this scene. His graphic works number in the hundreds, covering everything from <strong>religious subjects to everyday life</strong> in early 16th-century Nuremberg." }
  ],
  'alexandre-cabanel-self-portrait-aged-17': [
    { question: "Where is this self-portrait displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, France. Cabanel was born in Montpellier, and the museum holds the largest collection of his work." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Alexandre Cabanel</strong></a> painted himself at age 17. He went on to become one of the most successful <strong>French Academic painters</strong> of the 19th century, famous for his 1863 Birth of Venus." },
    { question: "What style did Cabanel work in?", answer: "Cabanel was a leading figure in <strong>French Academic painting</strong>, emphasizing polished technique, classical subjects, and idealized beauty. He was a rival of the Impressionists and a favorite of Napoleon III." }
  ],
  'alexandre-cabanel-self-portrait-as-a-child': [
    { question: "Where is this childhood self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, Cabanel's hometown. The museum preserves works spanning his entire career." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Alexandre Cabanel</strong></a> painted this as a child, showing <strong>early artistic talent</strong>. He entered the École des Beaux-Arts at 17 and won the Prix de Rome at 23." },
    { question: "What is Cabanel known for?", answer: "Cabanel is best known for <strong>The Birth of Venus</strong> (1863), which Napoleon III purchased. He was a powerful figure in the French art establishment, teaching at the École des Beaux-Arts and serving on Salon juries." }
  ],
  'alexandre-cabanel-the-evening-angel': [
    { question: "Where is The Evening Angel displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, France. The museum's Cabanel collection is the most comprehensive anywhere." },
    { question: "What does The Evening Angel depict?", answer: "The painting shows an <strong>angel figure in an evening setting</strong>. Cabanel frequently painted religious and mythological subjects with the polished technique and idealized forms prized by the French Academy." },
    { question: "Who painted The Evening Angel?", answer: "<a href=\"/apps/masterpieces/artist/alexandre-cabanel\"><strong>Alexandre Cabanel</strong></a> created this work. He was among the most honored French painters of his era, winning the <strong>Grand Medal of Honor</strong> at the 1865 Salon." }
  ],
  'alexej-von-jawlensky-schokko-with-red-hat': [
    { question: "Where is Schokko with Red Hat displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/columbus-museum-of-art-columbus-oh-us\"><strong>Columbus Museum of Art</strong></a> in Ohio. It's one of the museum's most recognized works." },
    { question: "What does Schokko with Red Hat depict?", answer: "The painting shows a <strong>woman wearing a vivid red hat</strong>. \"Schokko\" was Jawlensky's nickname for the model. The bold, flat colors and dark outlines reflect his move toward pure color expression." },
    { question: "Who painted Schokko with Red Hat?", answer: "<a href=\"/apps/masterpieces/artist/alexej-von-jawlensky\"><strong>Alexej von Jawlensky</strong></a> painted this around 1910. He was a Russian-German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> and member of the <strong>Blue Rider group</strong> alongside Kandinsky and Marc." }
  ],
  'time-and-tide-bricher': [
    { question: "Where is Time and Tide displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/dallas-museum-of-art\"><strong>Dallas Museum of Art</strong></a> in Texas. The museum's American art collection spans the colonial period through the present." },
    { question: "Who painted Time and Tide?", answer: "<a href=\"/apps/masterpieces/artist/alfred-thompson-bricher\"><strong>Alfred Thompson Bricher</strong></a> painted this in 1873. He specialized in <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal scenes</strong></a> and is associated with the second generation of the Hudson River School." },
    { question: "What does Time and Tide depict?", answer: "The painting captures a <strong>luminous coastal scene</strong> with waves, sky, and shore. Bricher was a master of light on water, painting the New England and Long Island coastlines with quiet, contemplative precision." }
  ],
  'alonso-cano-st-john-the-evangelist-and-the-poisoned-cup': [
    { question: "Where is this painting displayed?", answer: "This work hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's part of the museum's collection of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>St. John the Evangelist with a poisoned chalice</strong>. According to legend, John was challenged to drink poison but the venom left the cup as a serpent, proving his faith." },
    { question: "Who was Alonso Cano?", answer: "<a href=\"/apps/masterpieces/artist/alonso-cano\"><strong>Alonso Cano</strong></a> (1601-1667) was a Spanish painter, sculptor, and architect from Granada. He studied alongside <strong>Velázquez</strong> under Francisco Pacheco and worked across all three visual arts." }
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
