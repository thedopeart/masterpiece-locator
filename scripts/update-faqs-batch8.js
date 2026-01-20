const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'max-schmitt',
    faqs: [
      { question: "Who is the rower depicted in Max Schmitt in a Single Scull?", answer: "Max Schmitt was a champion rower and close friend of <a href=\"/artist/thomas-eakins\" style=\"color: #028161;\"><strong>Thomas Eakins</strong></a>. The artist actually painted himself rowing in the middle distance, making this both a portrait and a self-portrait." },
      { question: "Why is this painting considered a masterpiece of American Realism?", answer: "<a href=\"/artist/thomas-eakins\" style=\"color: #028161;\"><strong>Eakins</strong></a> combined scientific precision with artistic skill. He studied anatomy, perspective, and light reflections on water to create this technically flawless work that defines <a href=\"/movement/realism\" style=\"color: #028161;\"><strong>Realism</strong></a>." },
      { question: "Where can I see Max Schmitt in a Single Scull today?", answer: "It's housed at <a href=\"/museum/the-met\" style=\"color: #C9A84C;\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The painting's detailed depiction of the Schuylkill River captures Philadelphia's rowing culture in the 1870s." },
      { question: "How can I decorate with rowing or water-themed art?", answer: "Nautical scenes bring calm energy to any room. Browse <a href=\"https://luxurywallart.com/collections/coastal-ocean\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>coastal and ocean artwork</strong></a> or <a href=\"https://luxurywallart.com/collections/boat-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>boat art</strong></a> for similar serene water scenes." }
    ]
  },
  {
    slug: 'archduke-gallery',
    faqs: [
      { question: "What does Archduke Leopold Wilhelm in his Gallery show?", answer: "<a href=\"/artist/david-teniers-the-younger\" style=\"color: #028161;\"><strong>David Teniers the Younger</strong></a> painted the Archduke surrounded by his massive art collection. It's essentially a 17th-century Instagram flex, documenting over 50 recognizable paintings within one canvas." },
      { question: "Why were gallery paintings popular in Baroque art?", answer: "These \"gallery pictures\" served as visual inventories for wealthy collectors during the <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque period</strong></a>. They showed off taste, wealth, and cultural sophistication. <a href=\"/artist/david-teniers-the-younger\" style=\"color: #028161;\"><strong>Teniers</strong></a> painted several versions for the Archduke." },
      { question: "Where is Archduke Leopold Wilhelm in his Gallery displayed?", answer: "You'll find it at the <a href=\"/museum/kunsthistorisches-museum\" style=\"color: #C9A84C;\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. Fitting, since much of the Archduke's actual collection ended up forming the museum's core holdings." },
      { question: "What art style captures this classic European aesthetic?", answer: "Rich, layered compositions like this defined <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque</strong></a> grandeur. For similar warmth in your space, explore <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>gold-toned artwork</strong></a> that echoes old-world elegance." }
    ]
  },
  {
    slug: 'windmill-wijk',
    faqs: [
      { question: "Why is Windmill at Wijk bij Duurstede so famous?", answer: "<a href=\"/artist/jacob-van-ruisdael\" style=\"color: #028161;\"><strong>Jacob van Ruisdael</strong></a> created the definitive Dutch landscape. The dramatic sky takes up two-thirds of the canvas, and that windmill has become an icon of the Netherlands' Golden Age." },
      { question: "What makes the sky in this painting special?", answer: "<a href=\"/artist/jacob-van-ruisdael\" style=\"color: #028161;\"><strong>Ruisdael</strong></a> was obsessed with clouds. He painted them with as much care as the windmill itself. Those towering cumulus formations create drama and movement that influenced landscape painters for centuries." },
      { question: "Where can I view Windmill at Wijk bij Duurstede?", answer: "It's one of the treasures at the <a href=\"/museum/rijksmuseum\" style=\"color: #C9A84C;\"><strong>Rijksmuseum</strong></a> in Amsterdam. The painting represents Dutch landscape art at its absolute peak." },
      { question: "How do I bring Dutch landscape vibes into my home?", answer: "Dutch masters captured nature's quiet power beautifully. Check out <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>landscape wall art</strong></a> for pieces that bring that same peaceful, grounded energy to your walls." }
    ]
  },
  {
    slug: 'nocturne-black-gold-falling-rocket',
    faqs: [
      { question: "What is Nocturne in Black and Gold actually depicting?", answer: "<a href=\"/artist/james-mcneill-whistler\" style=\"color: #028161;\"><strong>Whistler</strong></a> painted fireworks exploding over London's Cremorne Gardens. The scattered gold sparks against the dark sky create an almost abstract composition that was radical for 1875." },
      { question: "Why did this painting cause a famous lawsuit?", answer: "Critic John Ruskin accused <a href=\"/artist/james-mcneill-whistler\" style=\"color: #028161;\"><strong>Whistler</strong></a> of \"flinging a pot of paint in the public's face.\" Whistler sued for libel and won, though he was awarded just one farthing. The trial became legendary in art history." },
      { question: "How does this relate to Impressionism?", answer: "While <a href=\"/artist/james-mcneill-whistler\" style=\"color: #028161;\"><strong>Whistler</strong></a> wasn't strictly an <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionist</strong></a>, his focus on atmosphere over detail aligned with the movement. He called his works \"nocturnes\" to emphasize mood rather than subject." },
      { question: "Where is The Falling Rocket displayed?", answer: "It hangs at the <a href=\"/museum/detroit-institute-of-arts\" style=\"color: #C9A84C;\"><strong>Detroit Institute of Arts</strong></a>. For similar dramatic contrast in your space, browse <a href=\"https://luxurywallart.com/collections/black-and-gold\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>black and gold artwork</strong></a>." }
    ]
  },
  {
    slug: 'mont-sainte-victoire',
    faqs: [
      { question: "Why did Cézanne paint Mont Sainte-Victoire so many times?", answer: "<a href=\"/artist/paul-cezanne\" style=\"color: #028161;\"><strong>Cézanne</strong></a> painted this mountain near his home in Provence over 80 times. He was obsessed with capturing how we actually perceive form, not just how things look at a glance." },
      { question: "How did this painting influence modern art?", answer: "<a href=\"/artist/paul-cezanne\" style=\"color: #028161;\"><strong>Cézanne's</strong></a> geometric approach to landscape directly inspired Cubism. Picasso called him \"the father of us all.\" This <a href=\"/movement/post-impressionism\" style=\"color: #028161;\"><strong>Post-Impressionist</strong></a> work bridges traditional and modern art." },
      { question: "Where can I see Mont Sainte-Victoire?", answer: "This 1904 version lives at <a href=\"/museum/the-met\" style=\"color: #C9A84C;\"><strong>The Met</strong></a> in New York, though <a href=\"/artist/paul-cezanne\" style=\"color: #028161;\"><strong>Cézanne's</strong></a> mountain paintings are scattered across museums worldwide." },
      { question: "What wall art captures Cézanne's style?", answer: "<a href=\"/movement/post-impressionism\" style=\"color: #028161;\"><strong>Post-Impressionism</strong></a> balanced color and structure beautifully. For that vibe, explore <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>mountain artwork</strong></a> or <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>landscape pieces</strong></a>." }
    ]
  },
  {
    slug: 'heart-of-andes',
    faqs: [
      { question: "Why was Heart of the Andes such a sensation in 1859?", answer: "<a href=\"/artist/frederic-edwin-church\" style=\"color: #028161;\"><strong>Frederic Church</strong></a> displayed it in a darkened room with dramatic lighting. People paid 25 cents to see it and lined up for blocks. It was basically the blockbuster movie premiere of its day." },
      { question: "How big is Heart of the Andes?", answer: "It's massive: nearly six feet tall and over ten feet wide. <a href=\"/artist/frederic-edwin-church\" style=\"color: #028161;\"><strong>Church</strong></a> wanted viewers to feel immersed in the South American landscape, and at this scale, they certainly did." },
      { question: "Where is Heart of the Andes located now?", answer: "It's at <a href=\"/museum/the-met\" style=\"color: #C9A84C;\"><strong>The Metropolitan Museum of Art</strong></a> in New York. The painting represents the peak of the Hudson River School's ambition to capture nature's grandeur." },
      { question: "How can I get tropical landscape art for my home?", answer: "<a href=\"/artist/frederic-edwin-church\" style=\"color: #028161;\"><strong>Church</strong></a> traveled to Ecuador twice to sketch this scene. For lush natural beauty, browse <a href=\"https://luxurywallart.com/collections/tropical-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>tropical artwork</strong></a> or <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>nature art</strong></a>." }
    ]
  },
  {
    slug: 'contrast-of-forms',
    faqs: [
      { question: "What is Contrast of Forms about?", answer: "<a href=\"/artist/fernand-leger\" style=\"color: #028161;\"><strong>Fernand Léger</strong></a> wasn't painting anything specific. He stripped art down to pure cylinders, cones, and bold colors. It's about the visual punch of geometric shapes interacting, nothing more." },
      { question: "How does this painting relate to Cubism?", answer: "<a href=\"/artist/fernand-leger\" style=\"color: #028161;\"><strong>Léger</strong></a> developed his own take called \"Tubism\" because of his love for cylindrical forms. While Picasso and Braque fragmented objects, Léger made them chunkier and more mechanical." },
      { question: "Where can I see Contrast of Forms?", answer: "It's part of <a href=\"/museum/moma\" style=\"color: #C9A84C;\"><strong>MoMA's</strong></a> collection in New York. The painting marked <a href=\"/artist/fernand-leger\" style=\"color: #028161;\"><strong>Léger's</strong></a> move toward pure abstraction before World War I interrupted his experiments." },
      { question: "What wall art has this bold geometric energy?", answer: "For that same visual impact, check out <a href=\"https://luxurywallart.com/collections/abstract\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>abstract art</strong></a> or <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>colorful artwork</strong></a>. Bold shapes and bright colors make a statement." }
    ]
  },
  {
    slug: 'sierra-nevada',
    faqs: [
      { question: "What makes Among the Sierra Nevada so impressive?", answer: "<a href=\"/artist/albert-bierstadt\" style=\"color: #028161;\"><strong>Albert Bierstadt</strong></a> created a romanticized vision of the American West. The painting combines elements from multiple locations into one impossibly perfect scene. It's six feet tall and nearly ten feet wide." },
      { question: "Did Bierstadt paint this from real life?", answer: "Sort of. <a href=\"/artist/albert-bierstadt\" style=\"color: #028161;\"><strong>Bierstadt</strong></a> sketched in the Sierra Nevada but composed the final painting in his New York studio. He amped up the drama, adding golden light and towering peaks for maximum impact." },
      { question: "Where is Among the Sierra Nevada displayed?", answer: "It's at the <a href=\"/museum/smithsonian-american-art-museum\" style=\"color: #C9A84C;\"><strong>Smithsonian American Art Museum</strong></a> in Washington D.C. The painting helped shape how Americans imagined the western frontier." },
      { question: "How can I get mountain landscape art for my walls?", answer: "<a href=\"/artist/albert-bierstadt\" style=\"color: #028161;\"><strong>Bierstadt's</strong></a> majestic scenes still inspire today. Browse <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>mountain art</strong></a> or <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>landscape pieces</strong></a> for similar grandeur." }
    ]
  },
  {
    slug: 'woman-dead-child',
    faqs: [
      { question: "What is Woman with Dead Child depicting?", answer: "<a href=\"/artist/kathe-kollwitz\" style=\"color: #028161;\"><strong>Käthe Kollwitz</strong></a> created this devastating etching of a mother clutching her dead child. She used her own body and her son as models. The raw grief is almost unbearable to witness." },
      { question: "Why did Kollwitz focus on such dark subjects?", answer: "<a href=\"/artist/kathe-kollwitz\" style=\"color: #028161;\"><strong>Kollwitz</strong></a> lost her son Peter in World War I. Even before that tragedy, she documented poverty, hunger, and death among Berlin's working class. Art was her form of protest and mourning." },
      { question: "Where can I see Woman with Dead Child?", answer: "This print is at the <a href=\"/museum/national-gallery-of-art\" style=\"color: #C9A84C;\"><strong>National Gallery of Art</strong></a> in Washington D.C. <a href=\"/artist/kathe-kollwitz\" style=\"color: #028161;\"><strong>Kollwitz's</strong></a> prints exist in multiple museum collections worldwide." },
      { question: "What art captures raw human emotion like this?", answer: "<a href=\"/artist/kathe-kollwitz\" style=\"color: #028161;\"><strong>Kollwitz</strong></a> mastered emotional intensity through stark contrast. For powerful figurative work, explore <a href=\"https://luxurywallart.com/collections/black-and-white-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>black and white artwork</strong></a> or <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portraits</strong></a>." }
    ]
  },
  {
    slug: 'circe-offering-cup',
    faqs: [
      { question: "Who is Circe in this Waterhouse painting?", answer: "Circe is the sorceress from Homer's Odyssey who turned men into pigs. <a href=\"/artist/john-william-waterhouse\" style=\"color: #028161;\"><strong>Waterhouse</strong></a> shows the moment she offers her enchanted cup to Ulysses, reflected in the mirror behind her." },
      { question: "What makes this a Pre-Raphaelite painting?", answer: "<a href=\"/artist/john-william-waterhouse\" style=\"color: #028161;\"><strong>Waterhouse</strong></a> was a later <a href=\"/movement/pre-raphaelite\" style=\"color: #028161;\"><strong>Pre-Raphaelite</strong></a>, focused on literary subjects and beautiful women. The rich colors, classical theme, and meticulous detail are hallmarks of the movement." },
      { question: "Where is Circe Offering the Cup displayed?", answer: "It's at <a href=\"/museum/tate-britain\" style=\"color: #C9A84C;\"><strong>Tate Britain</strong></a> in London. <a href=\"/artist/john-william-waterhouse\" style=\"color: #028161;\"><strong>Waterhouse</strong></a> painted Circe multiple times; she clearly fascinated him." },
      { question: "What wall art features powerful female figures?", answer: "<a href=\"/movement/pre-raphaelite\" style=\"color: #028161;\"><strong>Pre-Raphaelite</strong></a> artists loved depicting strong, mysterious women. For similar themes, browse <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>women art</strong></a> or <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portrait artwork</strong></a>." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 8 - Final)...');

  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (e) {
      console.error(`✗ Failed: ${update.slug}`, e.message);
    }
  }

  console.log('\nBatch 8 complete! All FAQ batches finished.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
