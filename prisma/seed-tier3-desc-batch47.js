const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'william-holman-hunt-the-scapegoat': [
    { question: "What does The Scapegoat depict?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a> painted a <strong>goat standing alone</strong> by the Dead Sea, symbolizing the biblical scapegoat that bore the sins of the people. Hunt traveled to the Holy Land to paint the landscape from life." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/lady-lever-art-gallery-port-sunlight-uk\"><strong>Lady Lever Art Gallery</strong></a> in Port Sunlight, UK. The gallery holds a strong collection of <strong>Pre-Raphaelite</strong> paintings." },
    { question: "Why is this painting significant?", answer: "Hunt's obsessive commitment to <strong>painting on location</strong> in Palestine defined Pre-Raphaelite naturalism. The desolate Dead Sea landscape carries heavy <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual symbolism</strong></a> about sacrifice and redemption." }
  ],
  'william-holman-hunt-the-dead-sea-from-siloam': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>Hunt</strong></a> painted the <strong>Dead Sea viewed from Siloam</strong> near Jerusalem. He made multiple trips to the Holy Land to paint biblical landscapes with absolute topographic accuracy." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a>. The museum holds one of the finest <strong>Pre-Raphaelite collections</strong> in the world." },
    { question: "What movement does this belong to?", answer: "It reflects <strong>Pre-Raphaelite</strong> principles of truth to nature. Hunt's Holy Land <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> were painted outdoors in harsh conditions to achieve <strong>authentic detail</strong>." }
  ],
  'william-holman-hunt-robert-braithwaite-martineau': [
    { question: "Who is depicted in this portrait?", answer: "<a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>Hunt</strong></a> painted <strong>Robert Braithwaite Martineau</strong>, a fellow artist and his student. Martineau was a dedicated Pre-Raphaelite follower who died young at 43." },
    { question: "Where can I see this painting?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/walker-art-gallery\"><strong>Walker Art Gallery</strong></a> in Liverpool. The gallery holds important <strong>Victorian and Pre-Raphaelite</strong> paintings." },
    { question: "What style is this portrait?", answer: "It's a <strong>Pre-Raphaelite</strong> portrait with Hunt's characteristic <strong>sharp detail and honest observation</strong>. The Brotherhood valued portraying people as they truly appeared, rejecting flattering idealization." }
  ],
  'william-merritt-chase-the-moorish-warrior': [
    { question: "What does The Moorish Warrior depict?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>William Merritt Chase</strong></a> painted a figure in <strong>Moorish costume and armor</strong>. The exotic subject reflects the Orientalist fascination common among 19th-century American and European painters." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a> in New York. The museum holds a significant collection of <strong>American art</strong>." },
    { question: "What style is this painting?", answer: "Chase was a leading American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> known for <strong>virtuoso brushwork</strong>. His early costume pieces show the influence of his Munich training under Karl von Piloty." }
  ],
  'william-merritt-chase-woman-with-a-basket': [
    { question: "What does Woman with a Basket depict?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>Chase</strong></a> painted a <strong>woman carrying a basket</strong> in a sunlit setting. The loose brushwork and bright palette reflect his mature Impressionist approach." },
    { question: "What style is this painting?", answer: "It's an American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work with Chase's signature <strong>confident, rapid brushwork</strong>. He was one of the most influential art teachers in American history." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Chase's <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figure paintings</strong></a> combine European technique with distinctly American subjects and light." }
  ],
  'william-merritt-chase-still-life-with-watermelon': [
    { question: "What does this still life show?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>Chase</strong></a> painted a <strong>cut watermelon</strong> alongside other foods in a bold, colorful arrangement. His still lifes demonstrate the virtuoso brushwork he was famous for." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/birmingham-museum-of-art-birmingham-al-us\"><strong>Birmingham Museum of Art</strong></a> in Alabama. The museum holds a respected collection of <strong>American art</strong>." },
    { question: "What style defines this work?", answer: "It's an American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> still life with <strong>rich color and energetic brushwork</strong>. Chase's ability to render textures with speed and accuracy made his still lifes widely admired." }
  ],
  'william-merritt-chase-still-life-with-vegetable': [
    { question: "What does Still Life with Vegetable show?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>Chase</strong></a> painted <strong>vegetables</strong> arranged in a casual tabletop composition. His still lifes treat humble kitchen subjects with the same bravura technique he applied to portraits." },
    { question: "What style is this painting?", answer: "It's an American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> work. Chase's <strong>loose, assured brushstrokes</strong> transform everyday objects into studies of color, light, and surface texture." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Chase painted still lifes throughout his career, using them to demonstrate <strong>painterly skill</strong> and teach his many students." }
  ],
  'william-merritt-chase-the-apprentice-boy-smoking': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>Chase</strong></a> painted an <strong>apprentice boy smoking</strong>, a casual genre subject rendered with dark, rich tones. The painting reflects his early Munich training with its emphasis on tonal values." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/wadsworth-atheneum\"><strong>Wadsworth Atheneum</strong></a> in Hartford, Connecticut. The museum was America's first public art museum." },
    { question: "What style is this work?", answer: "It shows Chase's early <strong>Munich-influenced realism</strong> before his shift toward <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. The dark palette and <strong>bold brushwork</strong> recall Old Masters like Velázquez and Hals." }
  ],
  'william-merritt-chase-portrait-of-a-gentleman': [
    { question: "What does this portrait show?", answer: "<a href=\"/apps/masterpieces/artist/william-merritt-chase\"><strong>Chase</strong></a> painted an <strong>unidentified gentleman</strong> with the polished technique that made him one of America's leading portraitists. His portraits combine European refinement with American directness." },
    { question: "What style is this portrait?", answer: "It blends <strong>Munich realism</strong> with <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> flair. Chase's <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait paintings</strong></a> earned him commissions from New York's social elite." },
    { question: "Where is this painting held?", answer: "It's in a <strong>private collection</strong>. Chase's portraits demonstrate the <strong>technical brilliance</strong> he passed on to students including Georgia O'Keeffe and Edward Hopper." }
  ],
  'winslow-homer-the-country-school': [
    { question: "What does The Country School depict?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Winslow Homer</strong></a> painted a <strong>one-room schoolhouse</strong> with children studying under a female teacher. The scene captures rural American life in the post-Civil War era." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/saint-louis-art-museum-st-louis-mo-us\"><strong>Saint Louis Art Museum</strong></a>. The museum holds important <strong>19th-century American</strong> paintings." },
    { question: "What style is this painting?", answer: "It's an American <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> genre scene. Homer's early career focused on <strong>everyday American life</strong> before he turned to the dramatic seascapes of his later years." }
  ],
  'winslow-homer-the-bridal-path-white-mountains': [
    { question: "What does The Bridal Path show?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> painted a <strong>woman on horseback</strong> traversing a mountain path in New Hampshire's White Mountains. The misty landscape creates a dreamy atmosphere around the solitary rider." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/clark-art-institute\"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts. The museum holds fine examples of <strong>American art</strong>." },
    { question: "What style defines this work?", answer: "It's an American <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> landscape. Homer's <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>mountain scenes</strong></a> capture the American wilderness with a naturalist's eye for light and weather." }
  ],
  'winslow-homer-the-veteran-in-a-new-field': [
    { question: "What does The Veteran in a New Field depict?", answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Homer</strong></a> painted a <strong>Union soldier harvesting wheat</strong> after returning from the Civil War. The scythe and golden field carry layered symbolism about death, renewal, and the nation's recovery." },
    { question: "Where can I see this painting?", answer: "It hangs at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It's one of the most recognized <strong>American paintings</strong> of the Civil War era." },
    { question: "Why is this painting significant?", answer: "Painted just after Lincoln's assassination, it symbolizes America's <strong>transition from war to peace</strong>. Homer's <a href=\"/apps/masterpieces/movement/realism\"><strong>Realist</strong></a> approach gave contemporary subjects profound emotional and political weight." }
  ],
  'old-hunting-grounds': [
    { question: "What does The Old Hunting Grounds depict?", answer: "<a href=\"/apps/masterpieces/artist/worthington-whittredge\"><strong>Worthington Whittredge</strong></a> painted a <strong>forest interior</strong> with soft light filtering through dense trees. The title suggests land once used by Native Americans, adding a layer of elegiac meaning." },
    { question: "Where can I see this painting?", answer: "It's at the <a href=\"/apps/masterpieces/museum/reynolda-house\"><strong>Reynolda House Museum of American Art</strong></a> in Winston-Salem, North Carolina. The museum focuses on <strong>American art</strong> in a historic estate setting." },
    { question: "What movement does this belong to?", answer: "Whittredge was part of the <strong>Hudson River School</strong>, America's first major art movement rooted in <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>. His quiet forest interiors contrast with the grander panoramas of Cole and Church." }
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
