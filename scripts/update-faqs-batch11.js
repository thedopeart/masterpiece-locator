const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'bedroom-in-arles',
    faqs: [
      { question: "Why did Van Gogh paint his bedroom?", answer: "Van Gogh wanted to convey <strong>tranquility and rest</strong> through simple objects. <a href=\"/artist/vincent-van-gogh\" style=\"color: #028161;\"><strong>Van Gogh</strong></a> created three versions of this intimate scene while living in the Yellow House." },
      { question: "What makes the colors in Bedroom in Arles unusual?", answer: "The <strong>bold, flat colors</strong> and skewed perspective reflect <a href=\"/movement/post-impressionism\" style=\"color: #028161;\"><strong>Post-Impressionist</strong></a> techniques. You'll find similar vibrant palettes in our <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>colorful artwork collection</strong></a>." },
      { question: "Where can I see Bedroom in Arles?", answer: "The most famous version hangs at the <a href=\"/museum/van-gogh-museum\" style=\"color: #C9A84C;\"><strong>Van Gogh Museum</strong></a> in Amsterdam. Other versions are at the Art Institute of Chicago and Musée d'Orsay." }
    ]
  },
  {
    slug: 'the-milkmaid',
    faqs: [
      { question: "What is The Milkmaid painting about?", answer: "<a href=\"/artist/johannes-vermeer\" style=\"color: #028161;\"><strong>Vermeer</strong></a> captured a kitchen maid pouring milk with extraordinary attention to <strong>light and texture</strong>. It's a quiet celebration of everyday domestic work." },
      { question: "Why is Vermeer's Milkmaid so famous?", answer: "The <strong>masterful light effects</strong> and intimate composition showcase <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Dutch Golden Age</strong></a> painting at its finest. Vermeer produced fewer than 40 paintings, making each one precious." },
      { question: "Where is The Milkmaid displayed?", answer: "This iconic work lives at the <a href=\"/museum/rijksmuseum\" style=\"color: #C9A84C;\"><strong>Rijksmuseum</strong></a> in Amsterdam. It's been there since 1908 and draws millions of visitors yearly." },
      { question: "What details should I notice in The Milkmaid?", answer: "Look at the <strong>bread texture</strong>, the nail holes in the wall, and how light falls on her blue apron. Browse <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>blue wall art</strong></a> inspired by Vermeer's palette." }
    ]
  },
  {
    slug: 'whistlejacket',
    faqs: [
      { question: "Why is Whistlejacket painted without a background?", answer: "<a href=\"/artist/george-stubbs\" style=\"color: #028161;\"><strong>George Stubbs</strong></a> stripped away all distractions to focus purely on the <strong>horse's power and beauty</strong>. The plain background was likely the patron's choice." },
      { question: "Was Whistlejacket a real horse?", answer: "Yes, Whistlejacket was a famous <strong>Arabian racehorse</strong> owned by the Marquess of Rockingham. Explore our <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>horse art collection</strong></a> for similar equestrian pieces." },
      { question: "Where can I see Whistlejacket?", answer: "This life-size masterpiece hangs at the <a href=\"/museum/national-gallery-london\" style=\"color: #C9A84C;\"><strong>National Gallery</strong></a> in London. At nearly 10 feet tall, it's impossible to miss." },
      { question: "Why did Stubbs paint horses so well?", answer: "Stubbs spent 18 months dissecting horses to understand their <strong>anatomy</strong>. His scientific approach made him the greatest <a href=\"https://luxurywallart.com/collections/animal-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>animal artist</strong></a> of his era." }
    ]
  },
  {
    slug: 'i-and-the-village',
    faqs: [
      { question: "What does I and the Village represent?", answer: "<a href=\"/artist/marc-chagall\" style=\"color: #028161;\"><strong>Marc Chagall</strong></a> blended memories of his <strong>Russian-Jewish childhood</strong> with dreamlike imagery. The overlapping faces suggest deep connection between humans and animals." },
      { question: "Why is I and the Village so dreamlike?", answer: "Chagall mixed <a href=\"/movement/expressionism\" style=\"color: #028161;\"><strong>Expressionism</strong></a> with folk art and early <a href=\"/movement/surrealism\" style=\"color: #028161;\"><strong>Surrealism</strong></a>. Objects float, sizes shift, and memories merge into one poetic vision." },
      { question: "Where is I and the Village located?", answer: "You'll find it at <a href=\"/museum/museum-of-modern-art\" style=\"color: #C9A84C;\"><strong>MoMA</strong></a> in New York. The vibrant greens and reds make it a gallery standout." },
      { question: "What style is I and the Village?", answer: "It combines <strong>Cubist fragmentation</strong> with fantastical imagery. Check out our <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>colorful artwork</strong></a> for similarly bold compositions." }
    ]
  },
  {
    slug: 'dance-1910',
    faqs: [
      { question: "What is the meaning of Matisse's Dance?", answer: "<a href=\"/artist/henri-matisse\" style=\"color: #028161;\"><strong>Matisse</strong></a> captured <strong>pure joy and movement</strong> through five dancing figures. The circular composition suggests endless, primal celebration." },
      { question: "Why did Matisse use such simple colors in Dance?", answer: "The bold red, blue, and green reflect <a href=\"/movement/fauvism\" style=\"color: #028161;\"><strong>Fauvist</strong></a> principles. Matisse believed <strong>color itself</strong> could express emotion without realistic detail." },
      { question: "Where can I see Matisse's Dance?", answer: "The 1910 version hangs at the <a href=\"/museum/state-hermitage-museum\" style=\"color: #C9A84C;\"><strong>State Hermitage Museum</strong></a> in St. Petersburg. An earlier version is at MoMA." },
      { question: "What makes Dance a masterpiece?", answer: "Its <strong>radical simplicity</strong> influenced generations of artists. Find similar energy in our <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>red wall art</strong></a> and <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>figure art</strong></a>." }
    ]
  },
  {
    slug: 'number-1a-1948',
    faqs: [
      { question: "How did Pollock create Number 1A?", answer: "<a href=\"/artist/jackson-pollock\" style=\"color: #028161;\"><strong>Jackson Pollock</strong></a> laid the canvas on the floor and dripped, poured, and flung paint using sticks and hardened brushes. This <strong>action painting</strong> technique was revolutionary." },
      { question: "What does Number 1A, 1948 mean?", answer: "Pollock used numbers to avoid suggesting subject matter. He wanted viewers to experience the <strong>pure energy</strong> of <a href=\"/movement/abstract-expressionism\" style=\"color: #028161;\"><strong>Abstract Expressionism</strong></a> without narrative." },
      { question: "Where is Number 1A, 1948 displayed?", answer: "This monumental drip painting lives at <a href=\"/museum/museum-of-modern-art\" style=\"color: #C9A84C;\"><strong>MoMA</strong></a> in New York. It's over 8 feet wide." },
      { question: "Why are Pollock's drip paintings important?", answer: "They broke every rule about <strong>how paintings should be made</strong>. Explore our <a href=\"https://luxurywallart.com/collections/abstract\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>abstract collection</strong></a> for works inspired by this freedom." }
    ]
  },
  {
    slug: 'the-two-fridas',
    faqs: [
      { question: "What does The Two Fridas represent?", answer: "<a href=\"/artist/frida-kahlo\" style=\"color: #028161;\"><strong>Frida Kahlo</strong></a> painted her <strong>dual identity</strong> after divorcing Diego Rivera. One Frida wears European dress, the other traditional Tehuana clothing." },
      { question: "Why are the hearts exposed in The Two Fridas?", answer: "The <strong>visible hearts</strong> connected by an artery show emotional pain made physical. This raw vulnerability defines <a href=\"/movement/surrealism\" style=\"color: #028161;\"><strong>Surrealist</strong></a> self-portraiture." },
      { question: "Where can I see The Two Fridas?", answer: "It's at the <a href=\"/museum/museo-de-arte-moderno\" style=\"color: #C9A84C;\"><strong>Museo de Arte Moderno</strong></a> in Mexico City. At 5.5 feet square, it's Kahlo's largest canvas." },
      { question: "What inspired Frida Kahlo's art?", answer: "Her <strong>chronic pain</strong>, Mexican heritage, and turbulent marriage fueled deeply personal work. See our <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>women in art collection</strong></a> for powerful female subjects." }
    ]
  },
  {
    slug: 'at-the-moulin-rouge',
    faqs: [
      { question: "What is At the Moulin Rouge about?", answer: "<a href=\"/artist/henri-de-toulouse-lautrec\" style=\"color: #028161;\"><strong>Toulouse-Lautrec</strong></a> documented <strong>Parisian nightlife</strong> with unflinching honesty. The famous cabaret's performers and patrons fill this electric scene." },
      { question: "Why is the woman's face green in At the Moulin Rouge?", answer: "The <strong>eerie green light</strong> from gas lamps creates an unsettling effect. This bold color choice reflects <a href=\"/movement/post-impressionism\" style=\"color: #028161;\"><strong>Post-Impressionist</strong></a> experimentation." },
      { question: "Where is At the Moulin Rouge displayed?", answer: "You'll find it at the <a href=\"/museum/art-institute-of-chicago\" style=\"color: #C9A84C;\"><strong>Art Institute of Chicago</strong></a>. The cropped composition feels strikingly modern." },
      { question: "Is Toulouse-Lautrec in this painting?", answer: "Yes, he included himself in the background. His <strong>intimate access</strong> to Montmartre's nightlife produced unforgettable <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portrait scenes</strong></a>." }
    ]
  },
  {
    slug: 'bacchus-and-ariadne',
    faqs: [
      { question: "What myth does Bacchus and Ariadne show?", answer: "<a href=\"/artist/titian\" style=\"color: #028161;\"><strong>Titian</strong></a> captured the moment <strong>Bacchus leaps</strong> from his chariot to rescue the abandoned Ariadne. He'll turn her crown into stars." },
      { question: "Why are the colors so vivid in Bacchus and Ariadne?", answer: "Titian used expensive <strong>ultramarine blue</strong> made from lapis lazuli. The <a href=\"/movement/renaissance\" style=\"color: #028161;\"><strong>Renaissance</strong></a> masters prized rich pigments for mythological scenes." },
      { question: "Where can I see Bacchus and Ariadne?", answer: "This masterpiece hangs at the <a href=\"/museum/national-gallery-london\" style=\"color: #C9A84C;\"><strong>National Gallery</strong></a> in London. The brilliant blue sky stops visitors in their tracks." },
      { question: "What makes Titian's painting technique special?", answer: "His <strong>loose brushwork</strong> and layered glazes created luminous flesh tones. Explore <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>blue wall art</strong></a> featuring similarly rich tones." }
    ]
  },
  {
    slug: 'tower-of-babel',
    faqs: [
      { question: "What is the Tower of Babel painting about?", answer: "<a href=\"/artist/pieter-bruegel-the-elder\" style=\"color: #028161;\"><strong>Pieter Bruegel the Elder</strong></a> illustrated the Biblical story of <strong>human ambition</strong> punished by God. The tower's flawed construction hints at inevitable failure." },
      { question: "How detailed is Bruegel's Tower of Babel?", answer: "Incredibly detailed. Tiny workers, cranes, and scaffolding cover every surface. This <a href=\"/movement/renaissance\" style=\"color: #028161;\"><strong>Northern Renaissance</strong></a> masterpiece rewards close examination." },
      { question: "Where is the Tower of Babel displayed?", answer: "The larger version is at the <a href=\"/museum/kunsthistorisches-museum\" style=\"color: #C9A84C;\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. A smaller version exists in Rotterdam." },
      { question: "What inspired Bruegel's Tower design?", answer: "He based it on the <strong>Roman Colosseum</strong>. Find architectural wonder in our <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>landscapes collection</strong></a> and <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>religious art</strong></a>." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 11)...');
  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: { faqs: update.faqs, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (e) {
      console.error(`✗ Failed: ${update.slug}`, e.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
