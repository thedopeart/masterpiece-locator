const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ MOULIN ROUGE: LA GOULUE ============
  'moulin-rouge-la-goulue': [
    { question: "Where can I see this poster?", answer: "The original is at the <a href='/apps/masterpieces/museum/musee-toulouse-lautrec'><strong>Musée Toulouse-Lautrec</strong></a> in Albi, France. <a href='/apps/masterpieces/artist/henri-toulouse-lautrec'><strong>Toulouse-Lautrec</strong></a> designed it in 1891 as an advertising poster for the Moulin Rouge cabaret. It made him famous overnight." },
    { question: "Who was La Goulue?", answer: "<strong>La Goulue</strong> ('The Glutton') was the stage name of Louise Weber, the Moulin Rouge's star can-can dancer. She's shown in the center in a white blouse, mid-kick. The shadowy figure in the foreground is <strong>Valentin le Désossé</strong> ('The Boneless'), her dance partner, known for his rubbery movements." },
    { question: "Why was this poster revolutionary?", answer: "Toulouse-Lautrec combined <strong>bold flat colors, dynamic composition, and Japanese-inspired design</strong> into a street poster. Before this, posters were text-heavy and dull. He proved a commercial advertisement could be fine art. The poster was so striking that Parisians ripped them off walls to keep as art." },
    { question: "How big is the poster?", answer: "The lithograph measures approximately <strong>195 cm × 122 cm</strong> (76.8 × 48 inches). It was printed in four colors using lithographic stones. About 3,000 copies were produced for display across Paris. Surviving original prints are now worth hundreds of thousands of dollars." },
    { question: "What style is this?", answer: "It blends <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionism</strong></a> with graphic design influenced by Japanese woodblock prints. The flat silhouettes, cropped composition, and bold outlines show the influence of <a href='/apps/masterpieces/movement/ukiyo-e'><strong>ukiyo-e</strong></a>. Toulouse-Lautrec bridged fine art and commercial art decades before Pop Art did the same." }
  ],

  // ============ MUSIC IN THE TUILERIES ============
  'music-tuileries': [
    { question: "Where can I see Music in the Tuileries?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/edouard-manet'><strong>Édouard Manet</strong></a> painted it in 1862. It's considered one of the earliest paintings of modern Parisian life." },
    { question: "What does the painting show?", answer: "An <strong>afternoon concert</strong> in the Tuileries Gardens in Paris. The crowd includes fashionably dressed Parisians mingling under the trees. Manet included portraits of real people: the poet Baudelaire, composer Offenbach, and the artist himself (on the far left, partially cut off)." },
    { question: "Why is this painting important?", answer: "It's one of the first paintings to treat <strong>contemporary urban life</strong> as a worthy subject for serious art. There's no mythological or historical pretext. It's just people in a park. This directness influenced the <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionists</strong></a>, who would make everyday life their primary subject." },
    { question: "How big is Music in the Tuileries?", answer: "It measures <strong>76.2 cm × 118.1 cm</strong> (30 × 46.5 inches). The loose brushwork and lack of clear focal point frustrated critics who expected polished compositions. The faces blur into a crowd, anticipating the Impressionist approach to capturing atmosphere over detail." },
    { question: "What style is this painting?", answer: "It's proto-<a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a>. Manet painted parts of it outdoors in the gardens, sketching directly from life. The flat, bright colors and cropped composition broke from academic tradition. Art historians often cite this as a turning point toward modern painting." }
  ],

  // ============ THE NUDE MAJA ============
  'nude-maja': [
    { question: "Where can I see The Nude Maja?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid, displayed next to The Clothed Maja. <a href='/apps/masterpieces/artist/francisco-goya'><strong>Goya</strong></a> painted it between approximately 1797 and 1800. It was likely commissioned by Prime Minister Manuel Godoy." },
    { question: "Why was The Nude Maja controversial?", answer: "It was the first major Western painting to show a <strong>real, identifiable woman nude</strong> without mythological justification. Unlike the idealized nudes of Titian or Velázquez, this woman stares directly at the viewer with an unapologetic expression. The <strong>Spanish Inquisition</strong> summoned Goya over it in 1815." },
    { question: "Who is the model?", answer: "Her identity remains debated. The most popular theory names the <strong>Duchess of Alba</strong>, but no evidence confirms this. Others suggest <strong>Pepita Tudó</strong>, Godoy's mistress. Goya never identified her. The model's direct gaze and relaxed pose suggest she was comfortable with the artist." },
    { question: "How big is the painting?", answer: "It measures <strong>97 cm × 190 cm</strong> (38.2 × 74.8 inches), identical to The Clothed Maja. Both are oil on canvas. Godoy kept The Nude Maja hidden in a private cabinet in his palace, viewable only by select guests." },
    { question: "What art movement does this represent?", answer: "It sits between <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassicism</strong></a> and <a href='/apps/masterpieces/movement/romanticism'><strong>Romanticism</strong></a>. The reclining pose references classical tradition, but Goya's naturalistic rendering and the subject's unidealized directness push toward modern <a href='https://luxurywallart.com/collections/women-art' target='_blank' rel='noopener'><strong>portraiture of women</strong></a>. Manet's Olympia drew directly from this painting." }
  ],

  // ============ OLYMPIA ============
  'olympia': [
    { question: "Where can I see Olympia?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/edouard-manet'><strong>Édouard Manet</strong></a> painted it in 1863 and exhibited it at the 1865 Salon, where it caused one of the biggest art scandals of the 19th century." },
    { question: "Why was Olympia so shocking?", answer: "The nude woman is clearly a <strong>contemporary Parisian courtesan</strong>, not a mythological goddess. She stares directly at the viewer. The name 'Olympia' was slang for a prostitute. The Black servant presenting flowers from a client makes the transactional nature explicit. Critics called it vulgar and immoral." },
    { question: "Who modeled for Olympia?", answer: "<strong>Victorine Meurent</strong>, Manet's favorite model, who also appeared in Le Déjeuner sur l'herbe. Victorine was herself a painter who exhibited at the Salon. The Black woman was modeled by a woman named <strong>Laure</strong>, about whom less is known historically." },
    { question: "What paintings influenced Olympia?", answer: "Manet directly referenced <strong>Titian's Venus of Urbino</strong> (1538) and Goya's Nude Maja. The reclining pose is nearly identical to Titian's, but Manet replaced Classical idealization with confrontational realism. Flat lighting, visible brushstrokes, and the subject's direct gaze made this an aggressively modern statement." },
    { question: "How big is the painting?", answer: "It measures <strong>130.5 cm × 190 cm</strong> (51.4 × 74.8 inches). Guards had to be stationed next to it at the 1865 Salon to prevent viewers from attacking it. Today it's recognized as a watershed moment in the history of <a href='/apps/masterpieces/movement/impressionism'><strong>modern art</strong></a>." }
  ],

  // ============ PALLAS AND THE CENTAUR ============
  'pallas-centaur': [
    { question: "Where can I see Pallas and the Centaur?", answer: "It's at the <a href='/apps/masterpieces/museum/uffizi-gallery-florence-italy'><strong>Uffizi Gallery</strong></a> in Florence. <a href='/apps/masterpieces/artist/sandro-botticelli'><strong>Botticelli</strong></a> painted it around 1482, likely for the Medici family. It was rediscovered in storage at the Palazzo Pitti in the 19th century." },
    { question: "What does the painting depict?", answer: "<strong>Pallas Athena</strong> (goddess of wisdom) grasps a centaur by the hair. The centaur, half-human and half-horse, symbolizes base instincts. Athena's calm dominance over him represents <strong>reason conquering passion</strong>. She wears a dress decorated with interlocking diamond rings, a Medici emblem." },
    { question: "What art movement is this?", answer: "It's <a href='/apps/masterpieces/movement/renaissance'><strong>Early Renaissance</strong></a>. Botticelli worked in the intellectual circle of Lorenzo de' Medici, where Neoplatonic philosophy shaped art. The painting's allegorical meaning reflects the Medici court's love of classical mythology reinterpreted through contemporary philosophy." },
    { question: "How big is Pallas and the Centaur?", answer: "It measures <strong>207 cm × 148 cm</strong> (81.5 × 58.3 inches). The tempera on canvas format and large scale suggest it was intended as a prominent decorative work, possibly for a Medici villa or palazzo." },
    { question: "Is there a political meaning?", answer: "Some historians read it as Medici propaganda: Athena represents <strong>Lorenzo de' Medici's wisdom</strong> prevailing over political enemies (the centaur). The Medici diamond rings on Athena's dress support this reading. Others see it purely as a philosophical allegory about intellect over instinct." }
  ],

  // ============ PORTRAIT OF DR. GACHET ============
  'portrait-dr-gachet': [
    { question: "Where can I see Portrait of Dr. Gachet?", answer: "The first version's location is <strong>uncertain</strong>. Japanese industrialist Ryoei Saito bought it for $82.5 million in 1990. After his death in 1996, the painting's whereabouts became unclear. A second version is at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris." },
    { question: "Who was Dr. Gachet?", answer: "<strong>Dr. Paul Gachet</strong> was the homeopathic physician who cared for <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> in Auvers-sur-Oise during the last months of his life. He was also an amateur artist and art collector who knew several Impressionist painters. Van Gogh painted him in June 1890, about six weeks before his own death." },
    { question: "Why does Dr. Gachet look so sad?", answer: "Van Gogh said the portrait expressed the '<strong>heartbroken expression of our time</strong>.' Gachet rests his head on his hand in a traditional pose of melancholy. The foxglove plant he holds was used in heart medicine. Van Gogh reportedly told his brother that the doctor seemed 'sicker than I am.'" },
    { question: "How much did this painting sell for?", answer: "In May 1990, it sold at Christie's for <strong>$82.5 million</strong>, setting a world record that stood for over a decade. Adjusted for inflation, it remains one of the most expensive paintings ever sold. The record-breaking price helped establish Van Gogh as a cultural icon of art market mania." },
    { question: "What style is the portrait?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>. Van Gogh used bold, swirling brushstrokes and intense <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>blue</strong></a> tones. The emotional intensity and expressive distortion of the face go well beyond Impressionism into territory that anticipates Expressionism." }
  ],

  // ============ PORTRAIT OF INNOCENT X ============
  'portrait-innocent-x': [
    { question: "Where can I see Portrait of Innocent X?", answer: "It's at the <a href='/apps/masterpieces/museum/galleria-doria-pamphilj'><strong>Galleria Doria Pamphilj</strong></a> in Rome, where it's been since it was painted. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> painted it in 1650 during his second visit to Italy. The gallery is still owned by the Doria Pamphilj family." },
    { question: "What did the Pope think of the portrait?", answer: "Pope Innocent X reportedly said '<strong>troppo vero</strong>' ('too truthful'). Velázquez captured the Pope's shrewd, suspicious expression with unflinching honesty. The portrait is both a display of papal authority (the crimson robes, the throne) and a psychological study of a powerful, watchful man." },
    { question: "Why did Francis Bacon paint variations of it?", answer: "<strong>Francis Bacon</strong> was obsessed with this portrait and created over 45 paintings based on it between 1949 and 1971. His 'Screaming Pope' variations distort Innocent X into howling, caged figures. Bacon never saw the original in person and worked only from reproductions." },
    { question: "How big is the portrait?", answer: "It measures <strong>141 cm × 119 cm</strong> (55.5 × 46.9 inches). The <a href='https://luxurywallart.com/collections/red-wall-art' target='_blank' rel='noopener'><strong>red</strong></a> and white color scheme is striking: crimson cape, white surplice, red chair. Velázquez rendered the different fabrics with a virtuosity that amazed his Italian contemporaries." },
    { question: "What art movement is this?", answer: "It's <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> portraiture at its finest. Velázquez combined formal grandeur with psychological depth. His loose, fluid brushwork (the cape is rendered with broad, confident strokes) influenced Impressionist painters two centuries later." }
  ],

  // ============ PORTRAIT OF ADELE BLOCH-BAUER I ============
  'portrait-of-adele-bloch-bauer-i': [
    { question: "Where can I see Portrait of Adele Bloch-Bauer I?", answer: "It's at the <strong>Neue Galerie</strong> in New York City. <a href='/apps/masterpieces/artist/gustav-klimt'><strong>Gustav Klimt</strong></a> completed it in 1907. Ronald Lauder purchased it in 2006 for <strong>$135 million</strong>, then the highest price ever paid for a painting." },
    { question: "Why is it called the 'Woman in Gold'?", answer: "The Nazis renamed it 'Woman in Gold' to erase the Jewish identity of its subject, <strong>Adele Bloch-Bauer</strong>. The painting was seized after Austria's annexation in 1938. In 2006, after a landmark legal battle portrayed in the film 'Woman in Gold,' it was returned to Adele's niece, Maria Altmann." },
    { question: "What technique did Klimt use?", answer: "Klimt applied <strong>gold leaf, silver leaf, and oil paint</strong> on canvas. The gold portions draw on Byzantine mosaic traditions he studied in Ravenna, Italy. Adele's realistic face and hands emerge from an abstract, geometric <a href='https://luxurywallart.com/collections/gold-art' target='_blank' rel='noopener'><strong>gold</strong></a> field decorated with eyes, spirals, and triangles." },
    { question: "How big is the painting?", answer: "It measures <strong>138 cm × 138 cm</strong> (54.3 × 54.3 inches), a perfect square. Klimt worked on it for approximately three years. It's the most famous work from his '<strong>Golden Phase</strong>' (roughly 1899-1910) and the painting most closely associated with his name." },
    { question: "What art movement does this represent?", answer: "It's associated with <a href='/apps/masterpieces/movement/symbolism'><strong>Symbolism</strong></a> and the Vienna Secession, which Klimt co-founded in 1897. The blend of realistic portraiture with abstract, decorative gold patterns creates a tension between the individual and the ornamental that defines Klimt's unique contribution to art history." }
  ],

  // ============ THE ROKEBY VENUS ============
  'rokeby-venus': [
    { question: "Where can I see the Rokeby Venus?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Velázquez</strong></a> painted it between 1647 and 1651. It's the only surviving female nude by Velázquez, and the name comes from Rokeby Park in Yorkshire, where it hung for many years." },
    { question: "Why was this painting attacked?", answer: "In March 1914, suffragette <strong>Mary Richardson</strong> slashed the canvas seven times with a meat cleaver to protest the arrest of Emmeline Pankhurst. She said she wanted to destroy 'the picture of the most beautiful woman in mythological history' as a protest against the government destroying Mrs. Pankhurst. The painting was restored." },
    { question: "What is depicted?", answer: "<strong>Venus</strong> reclines on a bed with her back to the viewer, gazing at her reflection in a mirror held by Cupid. The reflection is deliberately blurred and inaccurate (the angles don't work geometrically). Velázquez may have intended the ambiguity: Venus sees herself differently than we see her." },
    { question: "How big is the painting?", answer: "It measures <strong>122.5 cm × 177 cm</strong> (48.2 × 69.7 inches). Velázquez painted very few nudes because the <strong>Spanish Inquisition</strong> censored such subjects. This painting was likely made during his time in Italy, where attitudes were more relaxed. It was kept in private collections for centuries." },
    { question: "What art movement is this?", answer: "It's <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> painting at its most refined. Velázquez's naturalistic rendering of flesh, fabric, and reflection influenced painters from Goya to Manet. His ability to make complex compositions look effortless set the standard for European portraiture and figure painting." }
  ],

  // ============ SELF-PORTRAIT AT TWENTY-EIGHT ============
  'self-portrait-at-28': [
    { question: "Where can I see this self-portrait?", answer: "It's at the <strong>Alte Pinakothek</strong> in Munich, Germany. <a href='/apps/masterpieces/artist/albrecht-durer'><strong>Albrecht Dürer</strong></a> painted it in 1500, when he was exactly 28 years old. The painting has been in Munich since 1805." },
    { question: "Why does Dürer look like Christ?", answer: "The resemblance is intentional. Dürer posed himself <strong>facing directly forward</strong> with symmetrical features, flowing hair, and a raised hand, echoing traditional depictions of Christ. This wasn't blasphemy. In <a href='/apps/masterpieces/movement/northern-renaissance'><strong>Northern Renaissance</strong></a> theology, humanity was made in God's image, and artistic creativity was seen as reflecting divine creation." },
    { question: "Was this self-portrait unusual for its time?", answer: "Extremely. Full-face, symmetrical portraits were reserved for <strong>Christ and royalty</strong>. Artists didn't typically portray themselves with such dignity. Dürer was asserting that the artist was not merely a craftsman but an intellectual equal to scholars and nobles, a radical idea in 1500." },
    { question: "How big is the painting?", answer: "It measures <strong>67.1 cm × 48.9 cm</strong> (26.4 × 19.3 inches). The dark background and Dürer's fur-trimmed coat create a rich, almost icon-like image. An inscription reads: 'I, Albrecht Dürer of Nuremberg, painted myself with indelible colors at the age of 28 years.'" },
    { question: "What makes Dürer historically important?", answer: "He's considered the greatest artist of the Northern <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a>. Dürer bridged Northern European detail with Italian <strong>Renaissance ideals</strong> of proportion and perspective. He was also a master printmaker whose woodcuts and engravings circulated across Europe, making him one of the first truly international art celebrities." }
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
