const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ NIGHTHAWKS ============
  'nighthawks': [
    { question: "Where can I see Nighthawks?", answer: "It's at the <a href='/apps/masterpieces/museum/art-institute-of-chicago'><strong>Art Institute of Chicago</strong></a>, where it's been since shortly after <a href='/apps/masterpieces/artist/edward-hopper'><strong>Edward Hopper</strong></a> finished it. The museum purchased it in 1942 for $3,000. It's one of the most recognized American paintings ever made." },
    { question: "Is the diner in Nighthawks a real place?", answer: "Hopper said it was inspired by a <strong>restaurant on Greenwich Avenue</strong> in Manhattan, but no specific diner has been definitively identified. The building doesn't have a visible entrance, which adds to the painting's sense of <strong>isolation and enclosure</strong>. Some researchers have suggested it was a composite of several locations." },
    { question: "What time of night is depicted?", answer: "Hopper never specified, but the empty streets and fluorescent lighting suggest <strong>very late at night or early morning</strong>. Only four people are visible: three customers and a server. The harsh interior light contrasts sharply with the dark, empty street outside, creating a mood of urban loneliness." },
    { question: "How big is Nighthawks?", answer: "The painting measures <strong>84.1 cm × 152.4 cm</strong> (33.1 × 60 inches). It's an oil on canvas. Hopper's wife, Jo, modeled for the red-haired woman. She kept meticulous records of his work and noted that the painting was completed on <strong>January 21, 1942</strong>, just weeks after Pearl Harbor." },
    { question: "What style is Nighthawks?", answer: "It's classified as <strong>American Realism</strong>, though Hopper's work transcends simple labels. His use of dramatic light, simplified forms, and psychological tension gives the painting a cinematic quality. Film noir directors and photographers have cited Nighthawks as a direct influence on their work." }
  ],

  // ============ AMERICAN GOTHIC ============
  'american-gothic': [
    { question: "Where can I see American Gothic?", answer: "It's at the <a href='/apps/masterpieces/museum/art-institute-of-chicago'><strong>Art Institute of Chicago</strong></a>. <a href='/apps/masterpieces/artist/grant-wood'><strong>Grant Wood</strong></a> submitted it to a competition there in 1930, and the museum purchased it for $300. It became famous almost overnight and has stayed in Chicago ever since." },
    { question: "Who are the people in American Gothic?", answer: "They're not a married couple. Wood used his <strong>sister Nan Wood Graham</strong> and his <strong>dentist Byron McKeeby</strong> as models. Most viewers assume they're husband and wife, but Wood intended them as father and daughter. The stern expressions reflect Midwestern stoicism." },
    { question: "Is the house real?", answer: "Yes. The <strong>Dibble House</strong> in Eldon, Iowa still stands. Wood spotted its distinctive Carpenter Gothic window during a drive and was inspired to paint the type of people he imagined living there. The house is now listed on the <strong>National Register of Historic Places</strong> and is open to visitors." },
    { question: "Was American Gothic meant as satire?", answer: "Wood gave mixed signals. Some Iowans initially took offense, seeing it as a <strong>mockery of rural life</strong>. Wood insisted it was a tribute. Art historians generally read it as affectionate but gently ironic, capturing both the dignity and rigidity of small-town Midwestern values." },
    { question: "What does the pitchfork symbolize?", answer: "The three-pronged <strong>pitchfork</strong> is both a literal farm tool and a visual motif. Wood echoed its shape in the man's overalls stitching and the Gothic window tracery above. It connects the figures to the land and reinforces the painting's theme of <strong>hard work and plain living</strong>." }
  ],

  // ============ THE GREAT WAVE OFF KANAGAWA ============
  'great-wave-off-kanagawa': [
    { question: "Where can I see The Great Wave off Kanagawa?", answer: "Multiple impressions exist in museums worldwide. High-quality prints are held at the <strong>Metropolitan Museum of Art</strong> in New York, the <strong>British Museum</strong> in London, and several Japanese institutions. Because it's a woodblock print, <a href='/apps/masterpieces/artist/katsushika-hokusai'><strong>Hokusai</strong></a> produced many copies, though surviving impressions vary in condition." },
    { question: "Is The Great Wave a painting?", answer: "No. It's a <strong>woodblock print</strong> (woodcut), created using the <a href='/apps/masterpieces/movement/ukiyo-e'><strong>ukiyo-e</strong></a> technique. Hokusai designed it around <strong>1831</strong> as part of his series 'Thirty-six Views of Mount Fuji.' The print involved carving separate wood blocks for each color and pressing them onto paper." },
    { question: "What is depicted in The Great Wave?", answer: "A massive <strong>rogue wave</strong> towers over three fishing boats near Kanagawa (modern-day Yokohama). <strong>Mount Fuji</strong> appears small and calm in the background, dwarfed by the wave. The contrast between the violent sea and the serene mountain is the central tension of the composition." },
    { question: "How big is The Great Wave?", answer: "Each impression measures approximately <strong>25.7 cm × 37.9 cm</strong> (10.1 × 14.9 inches). It's quite small. The <strong>Prussian blue pigment</strong> (imported from Europe) gives the wave its distinctive deep color. This was one of the first Japanese prints to use this synthetic pigment extensively." },
    { question: "How did The Great Wave influence Western art?", answer: "When Japan opened to trade in the 1850s, Hokusai's prints flooded into Europe and sparked '<strong>Japonisme</strong>,' a craze for Japanese aesthetics. Artists like Monet, Van Gogh, and Whistler collected Japanese prints. The wave's flat composition and bold outlines directly influenced <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionism</strong></a> and Art Nouveau." }
  ],

  // ============ SUNFLOWERS ============
  'sunflowers': [
    { question: "Where can I see Van Gogh's Sunflowers?", answer: "There are multiple versions. The most famous (August 1888) is at the <strong>National Gallery</strong> in London. Other versions are at the <strong>Van Gogh Museum</strong> in Amsterdam, the <strong>Neue Pinakothek</strong> in Munich, and the <strong>Philadelphia Museum of Art</strong>. <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> painted the series to decorate his Yellow House in Arles." },
    { question: "How many Sunflowers paintings did Van Gogh make?", answer: "Van Gogh created <strong>two separate series</strong> of sunflower paintings. The first (Paris, 1887) shows cut sunflowers lying flat. The more famous second series (Arles, 1888-1889) features sunflowers in a vase. He made <strong>four original vase compositions</strong> and several repetitions, totaling about seven vase paintings." },
    { question: "Why did Van Gogh paint sunflowers?", answer: "He was decorating the guest bedroom for <strong>Paul Gauguin</strong>, who was coming to live and paint with him in Arles. Van Gogh saw sunflowers as a symbol of gratitude and friendship. He wanted the <a href='https://luxurywallart.com/collections/yellow-paintings' target='_blank' rel='noopener'><strong>yellow paintings</strong></a> to create a warm, welcoming atmosphere." },
    { question: "What style is the Sunflowers series?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>. Van Gogh used thick, textured <strong>impasto brushwork</strong> with bold yellows and ochres applied in visible strokes. The flowers range from full bloom to wilted, which some scholars read as a meditation on the cycle of life and decay." },
    { question: "How much is a Sunflowers painting worth?", answer: "In 1987, a Japanese insurance company bought one version for <strong>$39.9 million</strong>, nearly four times the previous auction record for any painting at the time. The sale helped launch the modern era of record-breaking art prices. The London and Amsterdam versions are considered priceless and will never be sold." }
  ],

  // ============ THE KISS (KLIMT) ============
  'the-kiss-klimt': [
    { question: "Where can I see The Kiss by Klimt?", answer: "It's at the <a href='/apps/masterpieces/museum/belvedere'><strong>Belvedere Museum</strong></a> in Vienna, Austria. The Austrian government purchased it in 1908, the same year it was exhibited. It's been in Vienna ever since and is the Belvedere's most famous work." },
    { question: "What technique did Klimt use for The Kiss?", answer: "<a href='/apps/masterpieces/artist/gustav-klimt'><strong>Gustav Klimt</strong></a> applied <strong>gold leaf</strong> over oil paint on canvas, a technique inspired by Byzantine mosaics he saw during a trip to Ravenna, Italy. The gold creates a flat, decorative surface that contrasts with the realistic faces and hands of the two figures." },
    { question: "How big is The Kiss?", answer: "The painting measures <strong>180 cm × 180 cm</strong> (about 6 × 6 feet). It's a perfect square. Klimt worked on it during his '<strong>Golden Phase</strong>' (roughly 1899-1910), when he incorporated gold and silver leaf into many of his most celebrated works." },
    { question: "Who are the figures in The Kiss?", answer: "Klimt never identified them. Some art historians believe the man is a <strong>self-portrait of Klimt</strong> and the woman is his longtime companion <strong>Emilie Flöge</strong>. Others see the figures as universal, representing love itself. The woman kneels at the edge of a cliff, adding a subtle element of danger to the embrace." },
    { question: "What art movement does The Kiss represent?", answer: "It's associated with <strong>Vienna Secession</strong> and <a href='/apps/masterpieces/movement/symbolism'><strong>Symbolism</strong></a>. Klimt co-founded the Vienna Secession in 1897 as a break from conservative academic art. The Kiss blends Symbolist themes of love and desire with decorative, almost abstract patterning influenced by Japanese and Byzantine art." }
  ],

  // ============ SATURN DEVOURING HIS SON ============
  'saturn-devouring-his-son': [
    { question: "Where can I see Saturn Devouring His Son?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid, Spain. The painting was transferred from the walls of <a href='/apps/masterpieces/artist/francisco-goya'><strong>Goya's</strong></a> house (the Quinta del Sordo) to canvas in 1874 and donated to the Spanish state." },
    { question: "What are the Black Paintings?", answer: "Saturn Devouring His Son is one of Goya's <strong>14 'Black Paintings'</strong>, created directly on the walls of his home between <strong>1819 and 1823</strong>. Goya was deaf, aging, and politically disillusioned when he painted them. They were never meant for public display. The dark themes reflect his mental state during Spain's turbulent post-war period." },
    { question: "What myth does this painting depict?", answer: "The Greek myth of <strong>Cronus (Saturn in Roman mythology)</strong>, who devoured his children at birth because a prophecy said one of them would overthrow him. Goya's version is brutally visceral, stripping away any classical elegance. The wild-eyed figure grips a bloody, mangled body in the darkness." },
    { question: "How big is Saturn Devouring His Son?", answer: "The painting measures <strong>143.5 cm × 81.4 cm</strong> (56.5 × 32 inches). Originally it was a <strong>mural painted directly on plaster</strong>. The transfer to canvas in the 1870s inevitably altered some details, and scholars debate how much of the current surface reflects Goya's original brushwork." },
    { question: "Did Goya title this painting?", answer: "No. Goya never titled or publicly discussed any of the Black Paintings. The name 'Saturn Devouring His Son' was assigned <strong>after his death</strong> by art historians who identified the mythological subject. Some scholars have questioned whether Goya even intended the figure to represent Saturn at all." }
  ],

  // ============ THE GARDEN OF EARTHLY DELIGHTS ============
  'garden-of-earthly-delights': [
    { question: "Where can I see The Garden of Earthly Delights?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid, Spain. The triptych has been in Spain since at least 1593, when it was recorded in the collection of King Philip II. It's one of the Prado's most visited works." },
    { question: "What do the three panels depict?", answer: "<a href='/apps/masterpieces/artist/hieronymus-bosch'><strong>Hieronymus Bosch</strong></a> painted a <strong>triptych</strong> that reads left to right. The left panel shows the Garden of Eden with Adam and Eve. The center panel depicts a fantastical world of <strong>nude figures, giant fruits, and strange creatures</strong>. The right panel shows a nightmarish Hell full of torment and bizarre punishment." },
    { question: "When was The Garden of Earthly Delights painted?", answer: "Most scholars date it to between <strong>1490 and 1510</strong>. The exact date is uncertain because Bosch rarely dated his works. The painting was created during the <a href='/apps/masterpieces/movement/northern-renaissance'><strong>Northern Renaissance</strong></a> in the Low Countries, a period of religious anxiety and fascination with sin and salvation." },
    { question: "How big is the triptych?", answer: "When fully open, it spans approximately <strong>220 cm × 389 cm</strong> (7 feet 3 inches × 12 feet 9 inches). Each wing panel is about half the width of the center. When closed, the exterior panels reveal a <strong>grisaille painting</strong> of Earth during Creation, shown as a flat disc inside a transparent sphere." },
    { question: "What does the center panel mean?", answer: "Nobody knows for sure. Scholars have debated this for <strong>over 500 years</strong>. Some read it as a warning against earthly pleasures leading to damnation. Others see it as an imagined paradise before the Fall. Some modern interpretations suggest Bosch was depicting a <strong>utopian vision</strong> of humanity living in harmony with nature." }
  ],

  // ============ THE SCHOOL OF ATHENS ============
  'the-school-of-athens': [
    { question: "Where can I see The School of Athens?", answer: "It's in the <strong>Stanza della Segnatura</strong> (Room of the Signatura) inside the <a href='/apps/masterpieces/museum/vatican-museums'><strong>Vatican Museums</strong></a>, Vatican City. The room was originally Pope Julius II's private library. <a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a> painted it as one of four wall frescoes representing branches of knowledge." },
    { question: "Who are the central figures?", answer: "The two men at the center are <strong>Plato and Aristotle</strong>. Plato (left) points upward toward the realm of ideal Forms, while Aristotle (right) gestures outward toward the physical world. Raphael gave Plato the face of <a href='/apps/masterpieces/artist/leonardo-da-vinci'><strong>Leonardo da Vinci</strong></a>, a tribute to the older master." },
    { question: "When did Raphael paint The School of Athens?", answer: "Between <strong>1509 and 1511</strong>, during the High <a href='/apps/masterpieces/movement/renaissance'><strong>Renaissance</strong></a>. Raphael was only about 26 years old when he started. He was working in the Vatican at the same time <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> was painting the Sistine Chapel ceiling just down the corridor." },
    { question: "Are real people depicted as philosophers?", answer: "Yes. Raphael painted several contemporaries as ancient thinkers. <strong>Plato is Leonardo da Vinci</strong>, the brooding figure of Heraclitus is likely <strong>Michelangelo</strong>, and <strong>Euclid resembles Bramante</strong>, the architect of St. Peter's. Raphael even included himself, looking out at the viewer from the far right." },
    { question: "How big is The School of Athens?", answer: "The fresco is approximately <strong>500 cm × 770 cm</strong> (16 feet 5 inches × 25 feet 3 inches) at its base. The arched top makes it even taller. Raphael's use of <strong>one-point perspective</strong> creates a deep architectural space that seems to extend the actual room backward." }
  ],

  // ============ LIBERTY LEADING THE PEOPLE ============
  'liberty-leading-people-delacroix': [
    { question: "Where can I see Liberty Leading the People?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <a href='/apps/masterpieces/artist/eugene-delacroix'><strong>Eugène Delacroix</strong></a> painted it in 1830, and the French government purchased it in 1831. It's been in and out of public display over the years depending on France's political climate." },
    { question: "What event does this painting depict?", answer: "The <strong>July Revolution of 1830</strong>, when Parisians overthrew King Charles X over three days of street fighting. Delacroix witnessed the uprising firsthand. The painting shows revolutionaries from different social classes charging over a barricade amid smoke and fallen bodies." },
    { question: "Who is the woman with the flag?", answer: "She's <strong>Marianne</strong>, a personification of the French Republic and the concept of Liberty. She's not a real person. Delacroix combined a classical allegorical figure (barefoot, wearing a Phrygian cap) with the gritty realism of the battle scene around her. She carries the <strong>French tricolour</strong> and a bayonet." },
    { question: "What art movement is this painting part of?", answer: "It's one of the defining works of <a href='/apps/masterpieces/movement/romanticism'><strong>Romanticism</strong></a>. Delacroix prioritized emotion, movement, and dramatic color over the calm, ordered compositions of Neoclassicism. The painting's raw energy and political subject matter broke new ground for history painting." },
    { question: "How big is Liberty Leading the People?", answer: "It measures <strong>260 cm × 325 cm</strong> (8 feet 6 inches × 10 feet 8 inches). It's a large-scale <strong>oil on canvas</strong>. The boy with pistols on the right side is sometimes identified as an inspiration for the character of <strong>Gavroche</strong> in Victor Hugo's Les Misérables, published just two years later." }
  ],

  // ============ STARRY NIGHT OVER THE RHÔNE ============
  'starry-night-over-rhone': [
    { question: "Where can I see Starry Night Over the Rhône?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> painted it in September 1888 in Arles, about nine months before his more famous The Starry Night. Don't confuse the two: they're different paintings in different museums." },
    { question: "What is depicted in this painting?", answer: "Van Gogh painted the <strong>night sky reflected on the Rhône river</strong> at Arles, with gas lamps along the quay casting golden light on the water. Two figures walk along the riverbank in the foreground. The <strong>Big Dipper constellation</strong> (Ursa Major) is visible in the sky above." },
    { question: "How does this differ from The Starry Night?", answer: "This one is painted from <strong>direct observation</strong>, not memory or imagination. Van Gogh set up his easel along the river at night with candles on his hat for light. The style is more naturalistic than The Starry Night's swirling, expressionistic sky. It's a real scene of a real place at a specific moment." },
    { question: "What style is this painting?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>. Van Gogh was fascinated by painting <strong>night scenes</strong> and the challenge of capturing color in darkness. He wrote to his brother Theo that the night was 'much more alive and richly colored than the day,' and this painting proves his point." },
    { question: "How big is Starry Night Over the Rhône?", answer: "The canvas measures <strong>72.5 cm × 92 cm</strong> (28.5 × 36.2 inches). Van Gogh painted it during his most productive period in Arles, where he completed over <strong>200 paintings</strong> in about 15 months. The <a href='https://luxurywallart.com/collections/blue-wall-art' target='_blank' rel='noopener'><strong>deep blues</strong></a> and golden yellows show his mastery of complementary color contrasts." }
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
