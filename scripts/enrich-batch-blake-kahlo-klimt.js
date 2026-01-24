const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'william-blake-isaac-newton',
    description: `<p><a href="/apps/masterpieces/artist/william-blake"><strong>William Blake</strong></a> created this color print between 1795 and 1805, depicting Isaac Newton hunched naked on a rock, absorbed in geometric calculations with a pair of dividers. The work combines printing with hand-applied watercolor and ink, giving it a textured, almost spectral quality that sets it apart from conventional printmaking of the period.</p>

<p>Blake intended the image as a critique, not a celebration. For him, Newton represented the dangers of <strong>scientific rationalism</strong>, a mind so fixated on measurement and mathematics that it remained blind to imagination, spirituality, and the natural world. The great physicist sits with his back to the colorful rock behind him, oblivious to everything beyond his diagrams. Blake grouped this work with companion prints depicting Nebuchadnezzar and other figures he saw as spiritually limited.</p>

<p>The image has since become one of the most recognized symbols of the tension between science and Romanticism. Eduardo Paolozzi's massive bronze sculpture outside the British Library in London draws directly from this composition. The original print now belongs to the <a href="/apps/masterpieces/museum/tate-britain"><strong>Tate Britain</strong></a> collection, where it continues to provoke debate about the relationship between <strong>reason and imagination</strong>.</p>`,
    faqs: [
      {
        question: "Where can I see William Blake's Newton?",
        answer: `This color print is held at <a href="/apps/masterpieces/museum/tate-britain"><strong>Tate Britain</strong></a> in London. The museum houses an extensive collection of Blake's visionary works, including his illuminated books and prophetic paintings.`
      },
      {
        question: "Why did Blake depict Newton negatively?",
        answer: `<a href="/apps/masterpieces/artist/william-blake"><strong>William Blake</strong></a> saw Newton as the embodiment of cold rationalism that ignored spiritual and imaginative truth. Blake believed excessive focus on measurement and science blinded humanity to deeper realities. The hunched figure, blind to the colorful rock behind him, illustrates this critique.`
      },
      {
        question: "What technique did Blake use for this print?",
        answer: `Blake created this as a <strong>color print</strong> with additional watercolor and ink applied by hand. He printed the basic image from a millboard, then worked over each impression individually. This hybrid technique gives the work its distinctive textured, painterly quality.`
      },
      {
        question: "What inspired the Paolozzi sculpture at the British Library?",
        answer: `Eduardo Paolozzi's bronze sculpture outside the British Library directly recreates Blake's composition, showing Newton with his dividers. Installed in 1995, the twelve-foot statue transforms Blake's critique into a <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>monumental figure</strong></a> that greets millions of library visitors annually.`
      }
    ]
  },
  {
    slug: 'frida-kahlo-selfportrait-along-the-border-line-between-mexico-',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this self-portrait in 1932 while living in Detroit with her husband Diego Rivera, who was working on murals for the Detroit Institute of Arts. She stands at the center of the canvas in a pink dress, literally straddling the border between two worlds: Mexico on her left, the United States on her right.</p>

<p>The contrast couldn't be sharper. The Mexican side bursts with ancient pyramids, pre-Columbian sculptures, native plants, and a sun and moon together in the sky. The American side features factory smokestacks, the Ford Motor Company logo, and industrial machinery churning out smoke. Kahlo holds a small <strong>Mexican flag</strong> in one hand and a cigarette in the other, making her cultural allegiance clear even as she acknowledges her physical presence in industrial America.</p>

<p>The painting expresses the profound displacement Kahlo felt during her time in the United States. She missed Mexico intensely and struggled with the cold, mechanized culture she encountered. The work also reflects her complicated relationship with <strong>modernity and progress</strong>, themes she would explore throughout her career. The painting remains in a private collection, owned by Maria Rodriguez de Reyero, and rarely appears in public exhibitions of Kahlo's <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait work</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Self-Portrait on the Borderline?",
        answer: `This painting belongs to a <strong>private collection</strong> owned by Maria Rodriguez de Reyero. Unlike many of Kahlo's works housed in Mexican museums, this piece rarely appears in public exhibitions, making it one of her less accessible major paintings.`
      },
      {
        question: "Why did Frida Kahlo paint this work?",
        answer: `<a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> created this painting during her unhappy stay in Detroit in 1932. She felt alienated from American industrial culture and longed for Mexico. The work expresses her cultural identity conflict and her preference for Mexican traditions over American machinery.`
      },
      {
        question: "What symbols appear in the painting?",
        answer: `The Mexican side features <strong>Aztec pyramids</strong>, pre-Columbian fertility sculptures, native flowers, and cosmic imagery. The American side shows Ford factory smokestacks, electrical equipment, and industrial pollution. Kahlo holds a Mexican flag, declaring her allegiance despite standing between both worlds.`
      },
      {
        question: "What was Kahlo doing in Detroit?",
        answer: `Kahlo accompanied her husband Diego Rivera while he painted murals at the Detroit Institute of Arts. She found the industrial city cold and alienating, suffering a miscarriage during her stay. These difficult experiences directly influenced this painting and several other works from the period.`
      }
    ]
  },
  {
    slug: 'frida-kahlo-the-bus',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted The Bus in 1929, one of her earliest works completed before she developed the intensely personal style that would later define her career. The oil painting shows six figures seated on a wooden bench inside a Mexican bus: a housewife with her market basket, a worker in blue overalls, an indigenous woman nursing a baby wrapped in a yellow rebozo, a young boy looking out the window, a bourgeois man in a suit clutching a money bag, and a barefoot girl who resembles Kahlo herself.</p>

<p>The composition presents a quiet <strong>cross-section of Mexican society</strong>, bringing together different classes and types in a single shared space. The style remains relatively naive compared to Kahlo's mature work, with flat colors and simple perspective. Yet the subject carries dark undertones for anyone familiar with her biography. Four years earlier, in 1925, Kahlo had been riding a bus when it collided with a streetcar, leaving her with severe injuries that would affect her entire life.</p>

<p>The painting never directly depicts that accident, but knowing about it makes the ordinary bus scene feel charged with quiet menace. Today the work belongs to the <strong>Dolores Olmedo Collection</strong> in Mexico City, which holds the largest private collection of Kahlo's paintings. It offers a rare glimpse of her artistic beginnings before tragedy and pain became her central subjects for <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>art about women</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Frida Kahlo's The Bus?",
        answer: `This early painting belongs to the <strong>Dolores Olmedo Collection</strong> in Mexico City, housed in a sixteenth-century hacienda in Xochimilco. The museum contains the world's largest private collection of Kahlo's work, along with major pieces by Diego Rivera.`
      },
      {
        question: "What is the connection to Kahlo's bus accident?",
        answer: `In 1925, four years before painting this work, <a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> suffered a devastating bus accident that left her with lifelong injuries. Though The Bus doesn't depict the crash, the subject carries autobiographical weight and foreshadows the pain that would dominate her later art.`
      },
      {
        question: "Who are the people depicted in the painting?",
        answer: `The six figures represent a <strong>cross-section of Mexican society</strong>: a housewife, a blue-collar worker, an indigenous mother with baby, a young boy, a wealthy man with money bag, and a barefoot young woman who may be a self-portrait. Together they illustrate class diversity within shared public space.`
      },
      {
        question: "How does this differ from Kahlo's later work?",
        answer: `The Bus shows Kahlo's early, more conventional style with flat colors and simple composition. She hadn't yet developed the surreal, deeply personal imagery of her mature <strong>self-portraits</strong>. The painting focuses outward on society rather than inward on her own suffering.`
      }
    ]
  },
  {
    slug: 'frida-kahlo-portrait-of-virginia-little-girl',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this portrait of a young Mexican girl named Virginia in 1929, the same year she completed The Bus and married Diego Rivera. The work shows a child in traditional dress standing against a simple background, holding a small doll in her hands. It belongs to the early phase of Kahlo's career when she painted commissioned portraits to earn money.</p>

<p>The portrait demonstrates Kahlo's solid technical skills in capturing likeness before she turned almost exclusively to <strong>self-portraiture</strong>. Virginia's dark eyes look directly at the viewer with a seriousness common in formal portraits of children from this period. The composition remains straightforward, without the symbolic complexity that would later distinguish Kahlo's mature paintings. The plain background and centered figure follow traditional portrait conventions.</p>

<p>Few details about the subject Virginia have survived. What the painting reveals is Kahlo's capability as a traditional <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait painter</strong></a>, a skill she largely abandoned as her art became more autobiographical and surreal. The work now resides in the <strong>Dolores Olmedo Collection</strong> in Mexico City, where it hangs alongside The Bus and many of the intensely personal works that would come later in her career.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of Virginia?",
        answer: `This early portrait belongs to the <strong>Dolores Olmedo Collection</strong> in Mexico City. The museum, located in a historic hacienda in Xochimilco, houses the largest private collection of Frida Kahlo's paintings in the world.`
      },
      {
        question: "Who was Virginia in Kahlo's portrait?",
        answer: `Little is known about the child Virginia beyond this 1929 portrait. She was likely the daughter of a family who <strong>commissioned the work</strong> from <a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> during her early career when she painted portraits for income before focusing on self-portraits.`
      },
      {
        question: "Why is this painting significant?",
        answer: `Portrait of Virginia shows Kahlo's abilities as a traditional portrait painter before she developed her distinctive surreal style. The work demonstrates her early technical skills and her capacity for capturing <strong>childhood subjects</strong> with dignity and directness.`
      },
      {
        question: "What year did Kahlo paint this portrait?",
        answer: `Kahlo completed this portrait in 1929, a significant year when she also painted The Bus and married Diego Rivera. The work represents her artistic output just before her style evolved toward the deeply personal and symbolic paintings she's now famous for.`
      }
    ]
  },
  {
    slug: 'gustav-klimt-portrait-of-a-lady',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted Portrait of a Lady between 1916 and 1917, during the final years of his life. The work shows a woman against a colorful, patterned background typical of Klimt's decorative style. What makes this painting extraordinary isn't just its artistic merit but its dramatic history of theft, disappearance, and miraculous rediscovery.</p>

<p>In February 1997, the painting was stolen from the <strong>Ricci Oddi Modern Art Gallery</strong> in Piacenza, Italy. Thieves apparently removed it from its frame and escaped through a skylight. For over two decades, the work vanished completely. Then in December 2019, a gardener clearing ivy from the gallery's exterior wall discovered a metal panel. Behind it sat the stolen Klimt, hidden in a garbage bag inside a cavity in the wall. The painting had been concealed just feet from where it originally hung, worth an estimated sixty million euros.</p>

<p>X-ray analysis later revealed another surprise: beneath the visible portrait lies an earlier painting of a different woman. Klimt had painted over his own work, a practice not uncommon among artists reusing canvases. The hidden portrait had been considered lost since 1912. Today the recovered painting remains at the <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Ricci Oddi Gallery</strong></a>, now protected by significantly improved security. It stands as one of the most remarkable art recovery stories of the twenty-first century.</p>`,
    faqs: [
      {
        question: "Where can I see Klimt's Portrait of a Lady?",
        answer: `This painting is displayed at the <strong>Ricci Oddi Modern Art Gallery</strong> in Piacenza, Italy. After its dramatic 2019 recovery following twenty-two years missing, the gallery implemented enhanced security measures to protect this now-famous work valued at sixty million euros.`
      },
      {
        question: "How was the stolen Klimt painting found?",
        answer: `In December 2019, a gardener clearing ivy from the gallery's exterior wall discovered a hidden metal panel. Behind it, wrapped in a garbage bag inside a wall cavity, sat the missing <a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painting. It had been concealed just feet from its original location for over two decades.`
      },
      {
        question: "What is hidden beneath the Portrait of a Lady?",
        answer: `X-ray analysis revealed that Klimt painted this work over an <strong>earlier portrait</strong> of a different woman. The hidden painting beneath had been considered lost since 1912. Klimt apparently reused the canvas, creating a new composition over his previous work.`
      },
      {
        question: "When was this Klimt painting created?",
        answer: `Klimt worked on Portrait of a Lady between 1916 and 1917, making it one of his <strong>late works</strong>. He died in February 1918, leaving this painting as an example of his final artistic period before his death from a stroke in Vienna.`
      }
    ]
  }
];

async function main() {
  console.log('Starting enrichment of 5 artworks...\n');

  for (const artwork of artworks) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
