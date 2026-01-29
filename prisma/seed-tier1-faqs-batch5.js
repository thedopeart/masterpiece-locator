const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ IMPRESSION, SUNRISE ============
  'impression-sunrise': [
    { question: "Where can I see Impression, Sunrise?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée Marmottan Monet</strong></a> in Paris. <a href='/apps/masterpieces/artist/claude-monet'><strong>Claude Monet</strong></a> painted it in 1872, depicting the port of Le Havre at dawn. The museum holds the world's largest collection of Monet's work." },
    { question: "Why is this painting historically important?", answer: "Its title gave the <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a> movement its name. When shown at the first independent group exhibition in 1874, critic Louis Leroy mocked it, writing that wallpaper was 'more finished.' He used 'Impressionism' as an insult. The artists adopted the label and it stuck." },
    { question: "What does the painting show?", answer: "The harbor of <strong>Le Havre</strong> at sunrise, with industrial cranes and ships emerging from morning mist. A small rowboat sits in the foreground. The <strong>bright orange sun</strong> and its reflection on the water are the painting's focal point, painted with quick, visible brushstrokes." },
    { question: "How big is it?", answer: "It measures <strong>48 cm × 63 cm</strong> (18.9 × 24.8 inches). It's small. Monet painted it rapidly, likely in a single session, capturing the fleeting light of dawn. The loose, sketchy technique was precisely what outraged critics who expected polished, detailed finish." },
    { question: "Was the painting ever stolen?", answer: "Yes. It was <strong>stolen in 1985</strong> from the Musée Marmottan during a robbery that also took eight other Impressionist works. It was recovered in 1990 in Corsica. The theft increased security at the museum and drew global attention to the painting." }
  ],

  // ============ IRISES ============
  'irises': [
    { question: "Where can I see Irises?", answer: "It's at the <strong>J. Paul Getty Museum</strong> in Los Angeles. <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> painted it in May 1889, shortly after entering the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence. He called it 'the lightning conductor for my illness,' a way to stay focused." },
    { question: "What does the painting show?", answer: "A dense bed of <strong>purple-blue irises</strong> with one white iris standing out among them. The flowers grow in a garden at the asylum. Van Gogh used a Japanese-inspired composition with bold outlines and flat areas of color. The <a href='https://luxurywallart.com/collections/purple-paintings' target='_blank' rel='noopener'><strong>purple</strong></a> blooms press against the frame in every direction." },
    { question: "How much has this painting sold for?", answer: "In 1987, it sold at Sotheby's for <strong>$53.9 million</strong>, a world record at the time. Australian businessman Alan Bond bought it but couldn't pay in full. The Getty Museum eventually acquired it in 1990. The price helped ignite the late 1980s art market boom." },
    { question: "What style is Irises?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a> with strong Japanese influence. Van Gogh admired <a href='/apps/masterpieces/movement/ukiyo-e'><strong>ukiyo-e</strong></a> prints and their bold colors and flattened perspective. The thick outlines and saturated color in Irises reflect that influence directly." },
    { question: "How big is Irises?", answer: "The canvas measures <strong>71 cm × 93 cm</strong> (28 × 36.6 inches). The original purple pigment was a <strong>red lake</strong> that has faded over time. The irises would have appeared more violet-red when Van Gogh painted them. What we see today is bluer than he intended." }
  ],

  // ============ JANE AVRIL ============
  'jane-avril': [
    { question: "Where can I see Jane Avril?", answer: "Toulouse-Lautrec's posters and paintings of Jane Avril are in several museums. The most famous poster (1893) is at the <a href='/apps/masterpieces/museum/musee-toulouse-lautrec'><strong>Musée Toulouse-Lautrec</strong></a> in Albi, France. <a href='/apps/masterpieces/artist/henri-toulouse-lautrec'><strong>Toulouse-Lautrec</strong></a> depicted her many times across different media." },
    { question: "Who was Jane Avril?", answer: "<strong>Jane Avril</strong> (1868-1943) was a can-can dancer at the Moulin Rouge in Paris. Born Jeanne Beaudon, she had a traumatic childhood and was treated at the Salpêtrière hospital. Dancing became her escape. She was considered more refined and melancholic than other Moulin Rouge performers." },
    { question: "What style is this work?", answer: "Toulouse-Lautrec's posters blend <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionism</strong></a> with commercial graphic art. His flat areas of color, bold outlines, and dynamic compositions were influenced by Japanese prints. He essentially invented the modern <strong>advertising poster</strong> as an art form." },
    { question: "Why did Toulouse-Lautrec paint her?", answer: "They were close friends. Unlike his more commercial commissions, his depictions of Avril show genuine <strong>affection and respect</strong>. She was intelligent and bookish, unlike the stereotype of Montmartre entertainers. Toulouse-Lautrec captured her distinctive style: elegant, slightly reserved, with a characteristic high-kicking dance." },
    { question: "How big are the posters?", answer: "The famous 1893 lithograph poster measures approximately <strong>124 cm × 91.5 cm</strong> (48.8 × 36 inches). Toulouse-Lautrec's posters were printed in editions of about 3,000 and plastered across Paris streets. Today, original prints are highly collectible and worth hundreds of thousands of dollars." }
  ],

  // ============ THE JAPANESE FOOTBRIDGE ============
  'japanese-footbridge': [
    { question: "Where can I see The Japanese Footbridge?", answer: "Monet painted many versions. A key one is at the <a href='/apps/masterpieces/museum/national-gallery-of-art'><strong>National Gallery of Art</strong></a> in Washington, D.C. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> began painting the bridge in 1899 and returned to it repeatedly over two decades." },
    { question: "Is this the same bridge as in the water lilies?", answer: "Yes. It's the <strong>arched wooden bridge</strong> over the water lily pond in Monet's garden at Giverny. He had it built in the Japanese style after seeing similar bridges in ukiyo-e prints. The bridge connected two parts of his property across the water garden he'd created by diverting a local stream." },
    { question: "How do the early and late versions differ?", answer: "The early versions (1899-1900) show the bridge clearly, with recognizable <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> foliage and water. The later versions (1918-1924), painted when Monet had <strong>cataracts</strong>, dissolve into thick, almost abstract layers of color. You can barely identify the bridge in some of them." },
    { question: "What style is this?", answer: "It's <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a>, though the later versions push toward abstraction. Monet's goal was always to capture light and atmosphere, not objects. As his eyesight deteriorated, his paintings became freer and bolder. Some art historians see the late bridge paintings as proto-abstract art." },
    { question: "How big is the National Gallery version?", answer: "It measures <strong>89.9 cm × 101 cm</strong> (35.4 × 39.8 inches). Monet's Giverny garden was his greatest artistic creation outside of painting itself. He employed six gardeners and designed every planting. The property is now one of France's most visited sites." }
  ],

  // ============ THE JEWISH BRIDE ============
  'jewish-bride': [
    { question: "Where can I see The Jewish Bride?", answer: "It's at the <a href='/apps/masterpieces/museum/rijksmuseum'><strong>Rijksmuseum</strong></a> in Amsterdam. <a href='/apps/masterpieces/artist/rembrandt'><strong>Rembrandt</strong></a> painted it around 1665-1669, during his final years. Van Gogh reportedly said he'd give ten years of his life to sit before this painting for two weeks." },
    { question: "Why is it called The Jewish Bride?", answer: "The title is a <strong>19th-century invention</strong>, not Rembrandt's. An art collector assumed the couple was Jewish based on their clothing. The actual subject is debated: it may depict the biblical couple <strong>Isaac and Rebecca</strong>, or it could be a real couple in historical costume. Rembrandt left no title." },
    { question: "What makes this painting special?", answer: "The <strong>tenderness between the two figures</strong> is extraordinary. The man gently places his hand on the woman's chest, and she lays her hand over his. The gesture is intimate without being erotic. Rembrandt's late style, with thick impasto and warm golden light, gives the painting a physical, almost sculptural texture." },
    { question: "How big is the painting?", answer: "It measures <strong>121.5 cm × 166.5 cm</strong> (47.8 × 65.6 inches). The couple's <a href='https://luxurywallart.com/collections/gold-art' target='_blank' rel='noopener'><strong>gold</strong></a> and red garments are built up with thick layers of paint, applied with palette knife and even fingers. Rembrandt's late <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> technique prioritized emotion over detail." },
    { question: "What art movement is this?", answer: "It belongs to the <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> and <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> painting. Rembrandt's late works like this one influenced artists for centuries. The emotional directness and bold, expressive paint handling were rediscovered by Impressionists and Expressionists who found them startlingly modern." }
  ],

  // ============ LA GRENOUILLÈRE ============
  'la-grenouillere-monet': [
    { question: "Where can I see La Grenouillère by Monet?", answer: "It's at the <a href='/apps/masterpieces/museum/met'><strong>Metropolitan Museum of Art</strong></a> in New York. <a href='/apps/masterpieces/artist/claude-monet'><strong>Monet</strong></a> painted it in 1869. Renoir painted the same scene from a nearby spot on the same day, and both paintings survive." },
    { question: "What is La Grenouillère?", answer: "It was a popular <strong>bathing and boating spot</strong> on the Seine near Bougival, west of Paris. The name means 'The Frog Pond.' It attracted Parisian day-trippers of all social classes. The small island in the center (called 'Camembert' or 'the flowerpot') is visible in both Monet's and Renoir's versions." },
    { question: "Why is this painting historically important?", answer: "Many art historians consider it a <strong>birthplace of Impressionism</strong>. Monet used quick, broken brushstrokes to capture sunlight on rippling water, a technique that would define the movement. He and <a href='/apps/masterpieces/artist/pierre-auguste-renoir'><strong>Renoir</strong></a> worked side by side, pushing each other toward a new way of painting outdoors." },
    { question: "How big is the painting?", answer: "It measures <strong>74.6 cm × 99.7 cm</strong> (29.4 × 39.3 inches). Monet considered it only a sketch for a larger, more finished painting that was never completed (or was lost). The 'sketch' turned out to be more important than any finished work could have been." },
    { question: "What style is La Grenouillère?", answer: "It's proto-<a href='/apps/masterpieces/movement/impressionism'><strong>Impressionist</strong></a>. The broken brushwork on the water, the emphasis on natural light, and the everyday leisure subject all point toward what Impressionism would become five years later. The official first Impressionist exhibition wouldn't happen until 1874." }
  ],

  // ============ LAS MENINAS ============
  'las-meninas': [
    { question: "Where can I see Las Meninas?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid, where it has its own room. <a href='/apps/masterpieces/artist/diego-velazquez'><strong>Diego Velázquez</strong></a> painted it in 1656. It's widely considered the museum's greatest treasure and one of the most analyzed paintings in Western art." },
    { question: "What is happening in the painting?", answer: "Velázquez painted <strong>himself at work</strong> in his studio in the Royal Alcázar of Madrid. The Infanta Margarita is attended by her ladies-in-waiting (meninas), a dwarf, and a dog. In the mirror on the back wall, you can see the reflections of <strong>King Philip IV and Queen Mariana</strong>, suggesting they're the real subjects being painted." },
    { question: "Why is Las Meninas considered groundbreaking?", answer: "It plays with <strong>perspective and reality</strong> in ways that still puzzle viewers. Who is the real subject? What is Velázquez painting? The viewer stands where the king and queen would be. Picasso was so obsessed with it that he painted 58 variations in 1957." },
    { question: "How big is Las Meninas?", answer: "It's large: <strong>318 cm × 276 cm</strong> (10 feet 5 inches × 9 feet 1 inch). The near life-size scale blurs the boundary between the painted space and the viewer's space. Velázquez used a wide, room-like composition that makes you feel like you're standing in the actual scene." },
    { question: "What art movement does this represent?", answer: "It's <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> painting at its most sophisticated. Velázquez's loose, fluid brushwork (paint that looks rough up close but perfect from a distance) anticipated <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> by two centuries. Manet called him 'the painter of painters.'" }
  ],

  // ============ LE DÉJEUNER SUR L'HERBE ============
  'le-dejeuner-sur-lherbe': [
    { question: "Where can I see Le Déjeuner sur l'herbe?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/edouard-manet'><strong>Édouard Manet</strong></a> painted it in 1863. It was rejected by the official Salon and shown instead at the Salon des Refusés, where it caused a scandal." },
    { question: "Why was this painting so controversial?", answer: "A <strong>nude woman sits casually with two fully clothed men</strong> in a modern park setting. Nudity in art was acceptable when depicting mythological figures, but Manet placed a recognizable Parisian woman (his model Victorine Meurent) in an everyday scene. That directness shocked the public." },
    { question: "What is the painting's art historical importance?", answer: "It's often called the <strong>first truly modern painting</strong>. Manet challenged academic rules about subject matter, composition, and technique simultaneously. The flat lighting, visible brushwork, and contemporary subject matter influenced every avant-garde movement that followed, from <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism</strong></a> onward." },
    { question: "How big is the painting?", answer: "It measures <strong>208 cm × 264.5 cm</strong> (81.9 × 104.1 inches). The large scale was traditionally reserved for history painting, so applying it to a scandalous picnic scene was provocative. Manet drew his composition from Raimondi's engraving after <a href='/apps/masterpieces/artist/raphael'><strong>Raphael</strong></a>, giving it an old master lineage that critics noticed." },
    { question: "Who are the people in the painting?", answer: "The nude woman is model <strong>Victorine Meurent</strong>, who also posed for Olympia. The two men are Manet's brother Gustave and his future brother-in-law Ferdinand Leenhoff. The woman bathing in the background adds spatial depth. None of the figures interact convincingly, which was intentional: Manet wanted artifice, not illusion." }
  ],

  // ============ LUNCHEON OF THE BOATING PARTY ============
  'luncheon-of-the-boating-party': [
    { question: "Where can I see Luncheon of the Boating Party?", answer: "It's at the <a href='/apps/masterpieces/museum/phillips-collection'><strong>Phillips Collection</strong></a> in Washington, D.C. <a href='/apps/masterpieces/artist/pierre-auguste-renoir'><strong>Pierre-Auguste Renoir</strong></a> painted it in 1881. Duncan Phillips bought it in 1923 for $125,000, then a record for an Impressionist work." },
    { question: "Where is this scene set?", answer: "On the balcony of the <strong>Maison Fournaise</strong>, a restaurant on the Seine at Chatou, west of Paris. The establishment was popular with rowers and day-trippers. The building still exists and is now a museum. The striped awning, iron railing, and river backdrop are all identifiable from the actual location." },
    { question: "Are the people real?", answer: "Yes. Renoir included his friends and acquaintances. The woman holding the dog (lower left) is <strong>Aline Charigot</strong>, who became his wife. Other figures include actress Jeanne Samary, artist Gustave Caillebotte (in the straw hat), and journalist Charles Ephrussi." },
    { question: "How big is the painting?", answer: "It measures <strong>130 cm × 173 cm</strong> (51.2 × 68.1 inches). Renoir worked on it over several months in the summer of 1881, returning to the restaurant repeatedly. The <a href='https://luxurywallart.com/collections/colorful-artwork' target='_blank' rel='noopener'><strong>colorful</strong></a> interplay of light, shadow, and flesh tones makes it one of <a href='/apps/masterpieces/movement/impressionism'><strong>Impressionism's</strong></a> most technically accomplished works." },
    { question: "Why is this painting considered Renoir's masterpiece?", answer: "It combines a <strong>complex group composition</strong> with Impressionist spontaneity. Fourteen figures interact naturally across a table of food and wine, bathed in dappled sunlight. Renoir balanced formal composition (the figures create diagonal lines) with the casual warmth of friends enjoying a meal." }
  ],

  // ============ MADONNA (MUNCH) ============
  'madonna-munch': [
    { question: "Where can I see Madonna by Munch?", answer: "The primary painted version is at the <a href='/apps/masterpieces/museum/munch-museum'><strong>Munch Museum</strong></a> in Oslo. <a href='/apps/masterpieces/artist/edvard-munch'><strong>Edvard Munch</strong></a> painted several versions between 1894 and 1895. Another version is at the <a href='/apps/masterpieces/museum/national-gallery-oslo'><strong>National Gallery of Norway</strong></a>." },
    { question: "Why is this Madonna unconventional?", answer: "Munch depicts the Madonna as a <strong>sensual, nude woman</strong> with closed eyes and flowing dark hair, not the traditional robed Virgin Mary. She's shown in a moment of ecstasy rather than pious devotion. The combination of sexuality and religious titling was deliberately provocative." },
    { question: "What does the border imagery mean?", answer: "In the lithograph version, Munch surrounded the figure with a <strong>border of sperm cells</strong> and placed a fetus-like figure in the lower left corner. The imagery connects conception, sexuality, and birth, linking the Madonna to the cycle of life and creation in a visceral, non-religious way." },
    { question: "What style is this?", answer: "It's <a href='/apps/masterpieces/movement/expressionism'><strong>Expressionist</strong></a> and <a href='/apps/masterpieces/movement/symbolism'><strong>Symbolist</strong></a>. Munch used sinuous lines and dark, atmospheric color to convey intense emotion. The painting belongs to his 'Frieze of Life' series, which explored love, anxiety, and death across interconnected works." },
    { question: "Was the painting ever stolen?", answer: "Yes. The Munch Museum version was <strong>stolen in August 2004</strong> alongside The Scream in an armed daylight robbery. Both paintings were recovered in 2006, though the Madonna suffered some damage. The theft remains one of the most brazen art heists in history." }
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
