const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  // ============ THE CIRCUS (SEURAT) ============
  'the-circus-seurat': [
    { question: "Where can I see The Circus?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/georges-seurat'><strong>Georges Seurat</strong></a> left it unfinished when he died suddenly in March 1891 at age 31. It was his last major work." },
    { question: "What does the painting show?", answer: "A <strong>circus performance</strong> at the Cirque Fernando (later Cirque Medrano) in Montmartre. An equestrienne balances on a white horse in the ring. A clown in the foreground watches, and the audience fills tiered seats in the background. The composition spirals with energy and upward movement." },
    { question: "Is this a Pointillist painting?", answer: "Yes. Seurat used his characteristic <strong>dot technique</strong>, applying tiny points of pure color across the canvas. But the painting is unfinished: some areas show bare canvas where Seurat hadn't yet applied his dots. This gives a rare glimpse into his working process." },
    { question: "How big is The Circus?", answer: "It measures <strong>185.5 cm × 152.5 cm</strong> (73 × 60 inches). Seurat used <strong>warm colors</strong> (reds, yellows, oranges) to convey excitement and upward motion. He applied Charles Henry's theories about the emotional properties of lines: upward curves express happiness." },
    { question: "What art movement does this represent?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Neo-Impressionist</strong></a>. Seurat developed Pointillism as a scientific approach to color, arguing that placing complementary dots side by side would create more vibrant optical mixtures than physically mixing pigments on a palette." }
  ],

  // ============ THE DEATH OF MARAT ============
  'the-death-of-marat': [
    { question: "Where can I see The Death of Marat?", answer: "It's at the <strong>Royal Museums of Fine Arts of Belgium</strong> in Brussels. <a href='/apps/masterpieces/artist/jacques-louis-david'><strong>Jacques-Louis David</strong></a> painted it in 1793, just months after the assassination. David was a friend of Marat and a fellow revolutionary." },
    { question: "What happened to Marat?", answer: "<strong>Jean-Paul Marat</strong>, a radical journalist during the French Revolution, was stabbed to death in his bathtub by <strong>Charlotte Corday</strong> on July 13, 1793. He bathed frequently due to a painful skin condition. Corday gained entry by claiming to have names of counter-revolutionaries to report." },
    { question: "Why is this considered propaganda?", answer: "David was the official painter of the Revolution and a close ally of Marat. He depicted Marat as a <strong>secular martyr</strong>: calm, dignified, Christ-like in his suffering. The empty upper half of the canvas creates an austere, almost religious atmosphere. Corday and the violence are absent. Only Marat's noble sacrifice remains." },
    { question: "How big is the painting?", answer: "It measures <strong>165 cm × 128 cm</strong> (65 × 50.4 inches). David painted it in the <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassical</strong></a> style: clean lines, restrained emotion, classical composition. The wooden box serving as Marat's desk bears the inscription 'À MARAT, David' like a gravestone dedication." },
    { question: "What makes this painting important?", answer: "It transformed a political assassination into a <strong>timeless image of sacrifice</strong>. The composition references Renaissance depictions of Christ's deposition. David stripped away all distracting detail, leaving only the essential: a murdered man, a letter, a knife, a pen. It's political art at its most powerful." }
  ],

  // ============ THE DOG (GOYA) ============
  'the-dog-goya': [
    { question: "Where can I see The Dog?", answer: "It's at the <a href='/apps/masterpieces/museum/museo-del-prado-madrid-spain'><strong>Museo del Prado</strong></a> in Madrid. <a href='/apps/masterpieces/artist/francisco-goya'><strong>Goya</strong></a> painted it between 1819 and 1823 directly on the walls of his home. It's one of his 14 'Black Paintings,' the most mysterious of the group." },
    { question: "What does the painting show?", answer: "A <strong>small dog's head</strong> peers up from the bottom of an otherwise nearly empty canvas. The rest is a vast, yellowish-brown void. Whether the dog is sinking in sand, looking over a hill, or drowning is unclear. Goya left no explanation. The radical emptiness is what makes it so haunting." },
    { question: "Why is The Dog considered ahead of its time?", answer: "It's been called the <strong>first truly modern painting</strong> by some critics. The nearly abstract composition, with a tiny figure against a vast empty space, anticipates Rothko's color field paintings by 130 years. No narrative, no detail, just existential isolation expressed through negative space." },
    { question: "How big is the painting?", answer: "It measures <strong>131.5 cm × 79.3 cm</strong> (51.8 × 31.2 inches). Originally a <strong>wall mural</strong> in Goya's dining room, it was transferred to canvas in the 1870s. The transfer process may have altered or removed details, and some scholars debate how much of the current image reflects Goya's original." },
    { question: "What was Goya's state of mind?", answer: "When he painted this, Goya was in his mid-70s, <strong>deaf, and politically disillusioned</strong>. He'd survived two serious illnesses, witnessed the Napoleonic wars, and lived through Spain's political upheavals. The Black Paintings were never meant to be seen publicly. They were painted for himself alone." }
  ],

  // ============ THE FIGHTING TEMERAIRE ============
  'the-fighting-temeraire': [
    { question: "Where can I see The Fighting Temeraire?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/jmw-turner'><strong>J.M.W. Turner</strong></a> painted it in 1839. In 2005, a public poll voted it <strong>Britain's greatest painting</strong>." },
    { question: "What does the painting show?", answer: "The old warship HMS Temeraire being <strong>towed to a breakers' yard</strong> by a steam tugboat to be broken up for scrap. The Temeraire had fought heroically at the Battle of Trafalgar in 1805. Turner shows the ghostly white sailing ship dwarfed by the dark, modern tug, symbolizing the end of an era." },
    { question: "What do the colors mean?", answer: "The <strong>sunset</strong> bleeds warm orange and gold across the sky, while the right side darkens. The old ship glows pale against the dying light. The fiery sky represents the passing of the age of sail. The dark tugboat, belching smoke, represents the industrial future. It's a painting about <strong>progress and loss</strong>." },
    { question: "How big is the painting?", answer: "It measures <strong>91 cm × 122 cm</strong> (35.8 × 48 inches). Turner, who was 64 when he painted it, called it 'my darling' and refused to sell it during his lifetime. He bequeathed it to the nation. The painting's <a href='https://luxurywallart.com/collections/sunset-paintings' target='_blank' rel='noopener'><strong>sunset</strong></a> is one of the most celebrated in art history." },
    { question: "What art movement is this?", answer: "It's <a href='/apps/masterpieces/movement/romanticism'><strong>Romantic</strong></a> landscape painting. Turner pushed light and atmosphere to near-abstract extremes. His late works, where forms dissolve into colored mist, influenced the Impressionists (Monet studied Turner in London) and anticipated 20th-century abstraction." }
  ],

  // ============ THE GLEANERS ============
  'the-gleaners': [
    { question: "Where can I see The Gleaners?", answer: "It's at the <a href='/apps/masterpieces/museum/musee-dorsay'><strong>Musée d'Orsay</strong></a> in Paris. <a href='/apps/masterpieces/artist/jean-francois-millet'><strong>Jean-François Millet</strong></a> painted it in 1857. It was controversial at the Salon because it gave monumental dignity to the rural poor." },
    { question: "What are gleaners?", answer: "Gleaners are <strong>the poorest members of rural society</strong> who collected leftover grain after a harvest. French law permitted them to gather what remained in the fields. Millet shows three women bent over, picking up stray stalks. In the background, a prosperous harvest is being gathered by workers, underscoring the class divide." },
    { question: "Why was this painting controversial?", answer: "Upper-class viewers in 1857 saw it as <strong>dangerously sympathetic to the poor</strong>. Giving three anonymous peasant women the scale and dignity of a history painting was provocative, especially just nine years after the 1848 revolution. Critics accused Millet of socialist propaganda." },
    { question: "How big is The Gleaners?", answer: "It measures <strong>83.8 cm × 111.8 cm</strong> (33 × 44 inches). The <a href='https://luxurywallart.com/collections/earth-tones' target='_blank' rel='noopener'><strong>earth tones</strong></a> and warm light connect the women to the land they work. Millet's heavy brushwork gives their bodies a sculptural, almost monumental quality despite their low social position." },
    { question: "What art movement is this?", answer: "Millet was part of the <strong>Barbizon School</strong> and is considered a Realist painter. His empathetic depictions of rural labor directly influenced <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a>, who copied several Millet compositions. The painting bridges Romantic idealism and Social Realism." }
  ],

  // ============ THE HAY WAIN ============
  'the-hay-wain': [
    { question: "Where can I see The Hay Wain?", answer: "It's at the <a href='/apps/masterpieces/museum/national-gallery'><strong>National Gallery</strong></a> in London. <a href='/apps/masterpieces/artist/john-constable'><strong>John Constable</strong></a> painted it in 1821. Along with Turner, Constable defined the golden age of British landscape painting." },
    { question: "What does the painting show?", answer: "A <strong>horse-drawn cart (wain)</strong> crossing a shallow ford on the River Stour at Flatford Mill in Suffolk, England. A cottage sits on the left bank, a dog watches from the water's edge, and fields stretch to the horizon under a cloud-filled sky. It depicts an ordinary rural moment with quiet grandeur." },
    { question: "Why is this painting historically important?", answer: "When shown at the 1824 Paris Salon, it caused a sensation. French painters, including <strong>Delacroix</strong>, were amazed by Constable's fresh, direct observation of nature and his broken brushwork. Delacroix reportedly repainted parts of his own Massacre at Chios after seeing The Hay Wain. It directly influenced French <a href='/apps/masterpieces/movement/romanticism'><strong>Romantic</strong></a> painting." },
    { question: "How big is the painting?", answer: "It measures <strong>130.2 cm × 185.4 cm</strong> (51.3 × 73 inches). Constable painted it in his London studio from sketches and oil studies made outdoors at Flatford. The <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> landscape and changeable English sky showcase his ability to capture natural light and weather." },
    { question: "Does the location still exist?", answer: "Yes. <strong>Flatford Mill and Willy Lott's Cottage</strong> (the building on the left) still stand in Suffolk and look much the same. The area is now known as 'Constable Country' and is a popular destination for visitors. The National Trust maintains the site." }
  ],

  // ============ THE LACEMAKER ============
  'the-lacemaker': [
    { question: "Where can I see The Lacemaker?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <a href='/apps/masterpieces/artist/johannes-vermeer'><strong>Vermeer</strong></a> painted it around 1669-1670. It's the smallest Vermeer painting and one of the Louvre's most prized Dutch works." },
    { question: "What makes this painting special?", answer: "The extreme close-up composition is unusual for the period. Vermeer places the viewer <strong>inches from the lacemaker's hands</strong>. The foreground threads blur as if seen through a lens (a 'circle of confusion'), suggesting Vermeer used a <strong>camera obscura</strong> as an optical aid." },
    { question: "How big is The Lacemaker?", answer: "It's tiny: <strong>24.5 cm × 21 cm</strong> (9.6 × 8.3 inches). Despite this, the painting feels monumental because of its intense focus. The young woman's concentration is almost palpable. Vermeer rendered the bobbin lace, the sewing cushion, and the threads with extraordinary precision." },
    { question: "What art movement does this represent?", answer: "It's a masterwork of <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> genre painting. Lacemaking was a symbol of domestic virtue in 17th-century Dutch culture. Vermeer elevated this humble activity to high art through his treatment of light, color, and composition." },
    { question: "Who admired this painting?", answer: "Renoir called it 'the most beautiful painting in the world' alongside the View of Delft. <strong>Van Gogh</strong> made a painted copy of it in 1887, translating Vermeer's subtle tones into his own bold palette. The painting's influence extends from Impressionism through modern photography." }
  ],

  // ============ THE LAUGHING CAVALIER ============
  'the-laughing-cavalier': [
    { question: "Where can I see The Laughing Cavalier?", answer: "It's at the <a href='/apps/masterpieces/museum/wallace-collection'><strong>Wallace Collection</strong></a> in London. <a href='/apps/masterpieces/artist/frans-hals'><strong>Frans Hals</strong></a> painted it in 1624. The Wallace Collection is free to visit. The painting is the museum's most famous work." },
    { question: "Is the cavalier actually laughing?", answer: "No. He's not laughing at all. The title is a <strong>19th-century invention</strong>. The man has an upturned mustache and a slight smirk, but his expression is more confident and self-assured than amused. Hals never titled the portrait, and the sitter's identity remains unknown." },
    { question: "What makes the painting technically impressive?", answer: "Hals's <strong>virtuosic brushwork</strong> on the embroidered sleeve is legendary. Up close, the fabric dissolves into bold, seemingly random strokes. From a distance, they resolve into convincing silk embroidery with bees, arrows, and flaming cornucopias, symbols possibly related to love and courtship." },
    { question: "How big is the painting?", answer: "It measures <strong>83 cm × 67.3 cm</strong> (32.7 × 26.5 inches). The man wears fashionable <a href='/apps/masterpieces/movement/dutch-golden-age'><strong>Dutch Golden Age</strong></a> clothing: a wide-brimmed hat, lace collar, and that spectacular embroidered sleeve. The bold, direct gaze engages the viewer with unusual confidence." },
    { question: "How did Hals influence later artists?", answer: "His loose, spontaneous brushwork was revolutionary. Where other <a href='/apps/masterpieces/movement/baroque'><strong>Baroque</strong></a> painters blended carefully, Hals left visible strokes that captured life and movement. Manet, Sargent, and the Impressionists all studied his technique. Manet specifically traveled to Haarlem to see Hals's work." }
  ],

  // ============ THE NIGHT CAFÉ ============
  'the-night-cafe': [
    { question: "Where can I see The Night Café?", answer: "It's at the <a href='/apps/masterpieces/museum/yale-art-gallery'><strong>Yale University Art Gallery</strong></a> in New Haven, Connecticut. <a href='/apps/masterpieces/artist/van-gogh'><strong>Van Gogh</strong></a> painted it in September 1888 in Arles. It depicts the Café de la Gare, where he rented a room." },
    { question: "What was Van Gogh trying to express?", answer: "He wrote to his brother Theo that he wanted to express '<strong>the terrible passions of humanity</strong>' using red and green. He said the café was 'a place where one can ruin oneself, go mad, or commit a crime.' The clashing colors and distorted perspective create a feeling of anxiety and disorientation." },
    { question: "Why are the colors so intense?", answer: "Van Gogh deliberately used <strong>clashing complementary colors</strong>: blood-red walls against <a href='https://luxurywallart.com/collections/green-wall-art' target='_blank' rel='noopener'><strong>green</strong></a> ceiling, yellow gaslight halos against dark shadows. He wanted the colors themselves to convey emotion. The garish palette makes the scene feel feverish and oppressive." },
    { question: "How big is The Night Café?", answer: "It measures <strong>72.4 cm × 92.1 cm</strong> (28.5 × 36.3 inches). Van Gogh painted it over three nights, working at the café from evening until dawn. The exaggerated perspective pulls the viewer's eye sharply toward the back room, creating a disorienting, tunnel-like effect." },
    { question: "What style is this?", answer: "It's <a href='/apps/masterpieces/movement/post-impressionism'><strong>Post-Impressionist</strong></a>, pushing toward Expressionism. Van Gogh used color and distorted space to express psychological states rather than describe physical reality. This emotional use of color directly influenced Fauvism and German Expressionism." }
  ],

  // ============ THE RAFT OF THE MEDUSA ============
  'the-raft-of-the-medusa': [
    { question: "Where can I see The Raft of the Medusa?", answer: "It's at the <a href='/apps/masterpieces/museum/louvre-paris-france'><strong>Louvre</strong></a> in Paris. <a href='/apps/masterpieces/artist/theodore-gericault'><strong>Théodore Géricault</strong></a> painted it in 1818-1819, when he was just 27. It caused a sensation at the 1819 Salon." },
    { question: "What event does this depict?", answer: "The wreck of the French naval frigate <strong>Méduse</strong> in 1816 off the coast of Senegal. When the ship ran aground due to an incompetent captain, 147 people were set adrift on a makeshift raft. After 13 days, only 15 survived. They resorted to <strong>cannibalism and murder</strong>. The scandal embarrassed the French government." },
    { question: "Why was this painting political?", answer: "The incompetent captain had received his post through <strong>political connections</strong>, not merit. The disaster symbolized government corruption. Géricault researched obsessively: he interviewed survivors, studied corpses at the morgue, and built a scale model of the raft. The painting was an indictment of the Bourbon Restoration." },
    { question: "How big is The Raft of the Medusa?", answer: "It's massive: <strong>491 cm × 716 cm</strong> (16 feet 1 inch × 23 feet 6 inches). The scale forces viewers to confront the horror at life size. Géricault used a <strong>pyramidal composition</strong> building from corpses at the bottom to desperate figures waving at a distant ship on the horizon." },
    { question: "What art movement is this?", answer: "It's a landmark of <a href='/apps/masterpieces/movement/romanticism'><strong>Romanticism</strong></a>. Géricault broke from <a href='/apps/masterpieces/movement/neoclassicism'><strong>Neoclassical</strong></a> idealism by depicting suffering, decay, and desperation with unflinching realism. The emotional intensity, dramatic lighting, and contemporary subject matter defined Romantic history painting." }
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
