const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ MONA LISA ============
  'mona-lisa': [
    { question: "Where can I see the Mona Lisa?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris, displayed in the Salle des États (Room 711) on the first floor of the Denon Wing. The painting sits behind bulletproof glass in a climate-controlled case. Expect crowds: it's the most visited artwork in the world." },
    { question: "How big is the Mona Lisa?", answer: "Smaller than most people expect. The painting measures just <strong>77 cm × 53 cm</strong> (about 30 × 21 inches). <a href='/apps/masterpieces/artist/leonardo-da-vinci'><strong>Leonardo da Vinci</strong></a> painted it on a thin white <strong>poplar wood panel</strong>, which was a common material in early 16th-century Florence." },
    { question: "Who is the woman in the Mona Lisa?", answer: "Most scholars agree she's <strong>Lisa Gherardini</strong>, wife of Florentine silk merchant Francesco del Giocondo. That's where the painting's Italian name, La Gioconda, comes from. Leonardo began the portrait around <strong>1503</strong> and likely kept working on it until close to his death in 1519." },
    { question: "Was the Mona Lisa ever stolen?", answer: "Yes. On August 21, 1911, a Louvre employee named <strong>Vincenzo Peruggia</strong> hid in a broom closet and walked out with the painting under his coat. It stayed missing for over two years. Peruggia believed the work belonged in Italy. He was caught in 1913 trying to sell it to a Florentine art dealer." },
    { question: "What painting technique is the Mona Lisa known for?", answer: "Leonardo pioneered a technique called <strong>sfumato</strong>, meaning 'to vanish like smoke.' He applied 20 to 40 ultra-thin layers of oil paint, some with his fingers, to blur edges and create that soft, hazy quality. It's a hallmark of the <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> and no sharp outlines exist anywhere in the painting." }
  ],

  // ============ THE STARRY NIGHT ============
  'the-starry-night': [
    { question: "Where can I see The Starry Night?", answer: "The painting is at the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York City. It's been part of their permanent collection since 1941, acquired through the Lillie P. Bliss Bequest. It's one of the most recognized works in the museum." },
    { question: "Where did Van Gogh paint The Starry Night?", answer: "<a href='/apps/masterpieces/artist/van-gogh'><strong>Vincent van Gogh</strong></a> painted it in <strong>June 1889</strong> from his room at the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence, France. He'd voluntarily admitted himself after his mental breakdown in Arles. The view is what he saw from his east-facing window, though he added the village from imagination." },
    { question: "What style is The Starry Night?", answer: "It's a <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a> painting, though Van Gogh's swirling, expressive brushwork pushed well beyond that label. The thick, visible brushstrokes (called <strong>impasto</strong>) create a sense of movement and energy that later influenced Expressionism and even Abstract art." },
    { question: "How big is The Starry Night?", answer: "The canvas measures <strong>73.7 cm × 92.1 cm</strong> (29 × 36.25 inches). It's an oil painting of moderate size, not huge. Van Gogh painted it on a standard French canvas format. He considered it a 'study' rather than a finished composition and told his brother Theo he wasn't entirely satisfied with it." },
    { question: "What is depicted in The Starry Night?", answer: "The painting shows a <strong>swirling night sky</strong> with bold, luminous stars and a crescent moon over a small village. A large <strong>dark cypress tree</strong> rises in the foreground like a flame. Rolling hills sit in the background. The scene blends real observation with Van Gogh's intense emotional vision." }
  ],

  // ============ GIRL WITH A PEARL EARRING ============
  'girl-with-a-pearl-earring': [
    { question: "Where can I see Girl with a Pearl Earring?", answer: "It's on permanent display at the <a href='/apps/masterpieces/museum/mauritshuis'><strong>Mauritshuis</strong></a> in The Hague, Netherlands. The museum is small enough that you won't miss it. The painting is the collection's most famous work, sometimes called the 'Mona Lisa of the North.'" },
    { question: "Who is the girl in the painting?", answer: "Nobody knows for certain. <a href='/apps/masterpieces/artist/johannes-vermeer'><strong>Vermeer</strong></a> painted this around <strong>1665</strong> as a <strong>tronie</strong>, a Dutch term for a character study rather than a portrait of a specific person. The girl's identity has sparked centuries of debate, a novel, and a feature film." },
    { question: "Is the pearl earring real?", answer: "Probably not a real pearl. Art historians believe the <strong>earring is too large</strong> to be a natural pearl and may depict polished tin or glass, or it could be entirely imagined. X-ray analysis shows Vermeer painted the pearl with just a few carefully placed highlights, no underlying sketch at all." },
    { question: "What art movement does this painting belong to?", answer: "It's a product of the <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a>, the 17th-century period when the Netherlands dominated European art and trade. Vermeer's use of light and his ability to render soft, luminous textures made him one of the era's finest painters, though he was largely forgotten until the 1800s." },
    { question: "How big is Girl with a Pearl Earring?", answer: "It measures <strong>44.5 cm × 39 cm</strong> (17.5 × 15.4 inches). Like many Vermeer paintings, it's surprisingly small. The intimate scale adds to its power: that direct gaze and parted lips feel very personal when you're standing just a few feet away." }
  ],

  // ============ THE SCREAM ============
  'the-scream': [
    { question: "Where can I see The Scream?", answer: "The most famous version (1893, tempera and crayon on cardboard) is at the <a href='/apps/masterpieces/museum/national-gallery-oslo'><strong>National Gallery of Norway</strong></a> in Oslo. A second painted version from 1910 is at the <a href='/apps/masterpieces/museum/munch-museum'><strong>Munch Museum</strong></a>, also in Oslo. Munch created four versions total across different media." },
    { question: "Was The Scream ever stolen?", answer: "Twice, actually. The National Gallery version was <strong>stolen in February 1994</strong> and recovered three months later. The Munch Museum version was taken at gunpoint in <strong>August 2004</strong> and wasn't recovered until 2006. Both thefts made worldwide headlines." },
    { question: "What inspired The Scream?", answer: "<a href='/apps/masterpieces/artist/edvard-munch'><strong>Edvard Munch</strong></a> described walking at sunset when the sky turned blood red and he felt 'an infinite scream passing through nature.' The location is believed to be Ekeberg Hill in Oslo. Some researchers have linked the red sky to atmospheric effects from the <strong>1883 Krakatoa eruption</strong>." },
    { question: "What art movement is The Scream part of?", answer: "It's one of the defining works of <a href='/apps/masterpieces/movement/expressionism'><strong>Expressionism</strong></a>, a movement focused on conveying raw emotion over realistic depiction. The distorted figure and swirling, anxious landscape broke sharply from naturalistic tradition. Munch's approach influenced generations of artists after him." },
    { question: "Is the figure in The Scream actually screaming?", answer: "No. The figure is <strong>reacting to a scream</strong>, not producing one. Munch's original German title was 'Der Schrei der Natur' (The Scream of Nature). The central figure presses its hands to its face, overwhelmed by the sound, while two figures walk calmly in the background." }
  ],

  // ============ GUERNICA ============
  'guernica': [
    { question: "Where can I see Guernica?", answer: "It's at the <a href='/apps/masterpieces/museum/reina-sofia'><strong>Museo Reina Sofía</strong></a> in Madrid, Spain. The painting was housed at MoMA in New York from 1939 until 1981, when it was transferred to Spain after the country's return to democracy, fulfilling <a href='/apps/masterpieces/artist/pablo-picasso'><strong>Picasso's</strong></a> wishes." },
    { question: "What event inspired Guernica?", answer: "The <strong>bombing of the Basque town of Guernica</strong> on April 26, 1937, during the Spanish Civil War. German and Italian warplanes attacked the town on a busy market day, killing civilians. Picasso, outraged, completed this massive painting in just over a month for the 1937 Paris International Exposition." },
    { question: "How big is Guernica?", answer: "It's enormous: <strong>349 cm × 776 cm</strong> (11 feet 5 inches × 25 feet 6 inches). The sheer scale is part of its impact. Picasso painted it entirely in <strong>black, white, and grey</strong>, which gives it the stark, documentary feel of newspaper photography and reinforces the horror of the subject." },
    { question: "What style is Guernica painted in?", answer: "Picasso used <a href='/apps/masterpieces/movement/cubism'><strong>Cubist</strong></a> fragmentation combined with Surrealist imagery. The fractured figures, a screaming horse, a dismembered soldier, a mother holding her dead child, aren't meant to depict the bombing literally. They convey chaos, suffering, and the brutality of war through distortion." },
    { question: "Can Guernica be photographed?", answer: "No. The <strong>Museo Reina Sofía prohibits photography</strong> in the room where Guernica hangs. The painting is also protected behind glass. Picasso himself stipulated that the work should not be displayed in Spain until democracy was restored, a condition met in 1981." }
  ],

  // ============ THE PERSISTENCE OF MEMORY ============
  'the-persistence-of-memory': [
    { question: "Where can I see The Persistence of Memory?", answer: "It's at the <a href='/apps/masterpieces/museum/moma'><strong>Museum of Modern Art (MoMA)</strong></a> in New York City, where it's been since 1934. It was given to MoMA by an anonymous donor. The painting is one of the museum's most popular works and a defining image of <a href='/apps/masterpieces/movement/surrealism'><strong>Surrealism</strong></a>." },
    { question: "What do the melting clocks mean?", answer: "<a href='/apps/masterpieces/artist/salvador-dali'><strong>Salvador Dalí</strong></a> said the <strong>soft watches</strong> were inspired by the sight of Camembert cheese melting in the sun. They're widely interpreted as a rejection of rigid, linear time. Dalí explored the idea that time is fluid and subjective, not the fixed mechanical thing clocks suggest." },
    { question: "How big is The Persistence of Memory?", answer: "Just <strong>24.1 cm × 33 cm</strong> (9.5 × 13 inches). It's tiny. Most people are surprised by how small it is when they see it in person. Despite its modest size, it's become one of the most reproduced and recognized paintings of the 20th century." },
    { question: "When did Dalí paint The Persistence of Memory?", answer: "Dalí completed it in <strong>1931</strong>, when he was 27 years old. He reportedly finished the painting in just a few hours after his wife Gala went to the cinema. The background landscape depicts <strong>Port Lligat</strong> in Catalonia, near Dalí's home." },
    { question: "What is the fleshy shape in the center?", answer: "The drooping form in the middle is a <strong>soft self-portrait</strong> of Dalí himself. It's a distorted profile with closed eyelashes, suggesting a dream state. Ants crawl on one of the watches nearby, which Dalí associated with <strong>decay and mortality</strong>." }
  ],

  // ============ THE BIRTH OF VENUS ============
  'the-birth-of-venus': [
    { question: "Where can I see The Birth of Venus?", answer: "It's at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence, Italy. The painting has been in Florence since it was created in the mid-1480s, originally for the Medici family's villa at Castello. It's one of the Uffizi's most visited works." },
    { question: "What does The Birth of Venus depict?", answer: "<a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> shows the goddess <strong>Venus arriving at shore</strong> after her birth from the sea foam. The wind gods Zephyr and Chloris blow her toward land on a giant scallop shell, while a figure (often identified as the Hora of Spring) waits to clothe her with a floral mantle." },
    { question: "How big is The Birth of Venus?", answer: "It's large: <strong>172.5 cm × 278.9 cm</strong> (about 5 feet 8 inches × 9 feet 2 inches). Botticelli painted it with <strong>tempera on canvas</strong>, which was unusual for the time. Most Italian painters of the <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> used wood panels for works this important." },
    { question: "Who modeled for Venus?", answer: "The traditional theory is <strong>Simonetta Vespucci</strong>, a Florentine noblewoman celebrated as the greatest beauty of her age. She died in 1476, years before the painting was made. Whether Botticelli worked from memory or idealized her features remains debated among historians." },
    { question: "Why was a nude Venus acceptable in the 1480s?", answer: "The Medici family commissioned the work, and classical mythology provided <strong>intellectual cover</strong> for depicting nudity. The painting draws on ancient texts and the Neoplatonic philosophy popular in Lorenzo de' Medici's circle, which viewed Venus as a symbol of divine beauty and spiritual love, not just physical attraction." }
  ],

  // ============ THE CREATION OF ADAM ============
  'the-creation-of-adam': [
    { question: "Where can I see The Creation of Adam?", answer: "It's on the ceiling of the <strong>Sistine Chapel</strong> inside the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a> in Vatican City, Rome. You'll need a ticket to the Vatican Museums to enter. Photography is officially prohibited inside the Chapel, though enforcement varies." },
    { question: "When did Michelangelo paint the Sistine Chapel ceiling?", answer: "<a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> painted the entire ceiling between <strong>1508 and 1512</strong>, commissioned by Pope Julius II. The Creation of Adam is one of nine scenes from the Book of Genesis. Michelangelo painted it in <strong>true fresco</strong>, applying pigment to wet plaster while working on scaffolding high above the floor." },
    { question: "What is the 'brain' theory about this painting?", answer: "In 1990, physician Frank Meshberger published a paper arguing that the shape of the <strong>cloak surrounding God resembles a human brain</strong>, including the frontal lobe, optic nerve, and brain stem. Some scholars believe Michelangelo, who studied human anatomy through dissection, embedded this detail intentionally as a symbol of divine intellect." },
    { question: "Why don't the fingers touch?", answer: "The <strong>small gap between Adam's and God's fingers</strong> is one of art's most famous details. It represents the moment just before God gives life to Adam. The tension of that near-touch conveys something words can't: the relationship between the human and the divine, separated by the tiniest distance." },
    { question: "How big is The Creation of Adam?", answer: "The scene spans approximately <strong>280 cm × 570 cm</strong> (9 feet 2 inches × 18 feet 8 inches) on the ceiling. The entire Sistine Chapel ceiling covers over 500 square meters and contains more than 300 figures from the <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> period." }
  ],

  // ============ THE NIGHT WATCH ============
  'the-night-watch': [
    { question: "Where can I see The Night Watch?", answer: "It has its own dedicated gallery at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam. The painting is the museum's centerpiece and was placed at the end of the main Gallery of Honour. Since 2019, the museum has conducted <strong>Operation Night Watch</strong>, a massive public restoration project." },
    { question: "Why is it called The Night Watch?", answer: "The name is actually a misnomer. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> painted a <strong>daytime scene</strong>, but centuries of accumulated varnish and soot darkened the canvas so much that by the 1800s, viewers assumed it depicted a night patrol. The painting's real title is 'Militia Company of District II under the Command of Captain Frans Banninck Cocq.'" },
    { question: "How big is The Night Watch?", answer: "It measures <strong>363 cm × 437 cm</strong> (11 feet 11 inches × 14 feet 4 inches), making it one of the largest <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> paintings. It was originally even bigger: the canvas was trimmed on all four sides in 1715 when it was moved to Amsterdam's Town Hall." },
    { question: "What is depicted in The Night Watch?", answer: "It shows <strong>Captain Frans Banninck Cocq</strong> and his lieutenant Willem van Ruytenburch leading their civic militia company. Unlike typical group portraits of the era, Rembrandt posed the figures in motion with dramatic lighting, making it feel like a living scene rather than a stiff lineup." },
    { question: "Has The Night Watch been attacked?", answer: "Multiple times. In <strong>1911</strong>, an unemployed cook slashed it with a knife. In <strong>1975</strong>, a man cut it repeatedly with a bread knife, causing severe damage. In <strong>1990</strong>, someone sprayed acid on it, though guards intervened quickly and the acid only affected the varnish layer." }
  ],

  // ============ THE LAST SUPPER ============
  'the-last-supper': [
    { question: "Where can I see The Last Supper?", answer: "It covers the north wall of the refectory (dining hall) at <a href='/apps/masterpieces/museum/santa-maria-delle-grazie'><strong>Santa Maria delle Grazie</strong></a>, a church in Milan, Italy. You must book <strong>timed tickets</strong> in advance. Only 25 visitors are allowed in for 15 minutes at a time to protect the fragile mural." },
    { question: "Why is The Last Supper deteriorating?", answer: "<a href='/apps/masterpieces/artist/leonardo-da-vinci'><strong>Leonardo</strong></a> didn't use traditional fresco technique. Instead, he applied <strong>tempera and oil on dry plaster</strong>, which let him work slowly and add fine detail but meant the paint never properly bonded with the wall. It started flaking within decades of completion." },
    { question: "When did Leonardo paint The Last Supper?", answer: "He worked on it from roughly <strong>1495 to 1498</strong>, commissioned by Ludovico Sforza, Duke of Milan. The painting depicts the moment Jesus tells his twelve apostles that one of them will betray him. Each apostle reacts differently, and Leonardo carefully studied facial expressions and gestures to capture their shock." },
    { question: "How big is The Last Supper?", answer: "The mural measures approximately <strong>460 cm × 880 cm</strong> (15 feet × 29 feet). It's painted directly on the wall, not on canvas, which is part of why it can never be moved. The painting uses <strong>one-point perspective</strong> that converges on Christ's head, drawing the viewer's eye to the center." },
    { question: "How many restorations has The Last Supper undergone?", answer: "Numerous, but the most significant was a <strong>21-year restoration</strong> completed in 1999. Restorers removed centuries of overpainting, grime, and failed repair attempts to reveal what remained of Leonardo's original work. Much of the <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a> detail was already lost, but the restoration brought back colors and expressions that hadn't been seen in centuries." }
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
