const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'marie-antoinette-rose',
    faqs: [
      { question: "Who painted Marie Antoinette with a Rose?", answer: "<a href=\"/artist/elisabeth-vigee-le-brun\" style=\"color: #028161;\"><strong>Élisabeth Vigée Le Brun</strong></a> painted this 1783 portrait. She was Marie Antoinette's favorite artist and created over 30 portraits of the queen during her time at the French court." },
      { question: "Where is Marie Antoinette with a Rose displayed?", answer: "You'll find it at the <a href=\"/museum/palace-of-versailles\" style=\"color: #C9A84C;\"><strong>Palace of Versailles</strong></a> in France. The painting was meant to soften the queen's public image during a time of growing criticism." },
      { question: "Why does Marie Antoinette hold a rose in this portrait?", answer: "The rose symbolizes both beauty and the queen's love of nature. <a href=\"/artist/elisabeth-vigee-le-brun\" style=\"color: #028161;\"><strong>Vigée Le Brun</strong></a> used it to present Marie Antoinette as approachable and feminine rather than extravagant." },
      { question: "Can I get wall art inspired by royal portraits?", answer: "Absolutely. Browse our <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>women's portrait collection</strong></a> for elegant artwork featuring similar classical portraiture styles and refined compositions." }
    ]
  },
  {
    slug: 'the-large-bathers',
    faqs: [
      { question: "What movement does The Large Bathers belong to?", answer: "It's a key work of <a href=\"/movement/post-impressionism\" style=\"color: #028161;\"><strong>Post-Impressionism</strong></a>. <a href=\"/artist/paul-cezanne\" style=\"color: #028161;\"><strong>Cézanne</strong></a> spent seven years on this painting, treating the human form with the same geometric structure he applied to landscapes." },
      { question: "Where can I see The Large Bathers?", answer: "It hangs at the <a href=\"/museum/philadelphia-museum-of-art\" style=\"color: #C9A84C;\"><strong>Philadelphia Museum of Art</strong></a>. At over 7 feet tall, it's the largest canvas Cézanne ever completed." },
      { question: "Why is The Large Bathers so important to art history?", answer: "<a href=\"/artist/paul-cezanne\" style=\"color: #028161;\"><strong>Cézanne's</strong></a> geometric approach to the figures directly influenced Cubism. Picasso and Matisse both studied this work closely when developing their own styles." },
      { question: "Where can I find colorful figure paintings for my home?", answer: "Check out our <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>people and portraits collection</strong></a> for bold figurative artwork with striking color palettes." }
    ]
  },
  {
    slug: 'et-in-arcadia-ego',
    faqs: [
      { question: "What does Et in Arcadia Ego mean?", answer: "It translates to \"Even in Arcadia, I exist,\" with \"I\" referring to death. <a href=\"/artist/nicolas-poussin\" style=\"color: #028161;\"><strong>Nicolas Poussin</strong></a> shows shepherds discovering a tomb in paradise, reminding viewers that death reaches everywhere." },
      { question: "Where is Et in Arcadia Ego located?", answer: "The painting lives at the <a href=\"/museum/louvre\" style=\"color: #C9A84C;\"><strong>Louvre Museum</strong></a> in Paris. It's one of the most famous examples of <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>French Baroque</strong></a> classical landscape painting." },
      { question: "What style is Et in Arcadia Ego?", answer: "<a href=\"/artist/nicolas-poussin\" style=\"color: #028161;\"><strong>Poussin</strong></a> pioneered French Classical <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque</strong></a>. His calm, ordered compositions influenced centuries of academic painting and stood apart from the dramatic Italian Baroque." },
      { question: "Can I find nature-inspired classical art for my walls?", answer: "Yes. Our <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>nature art collection</strong></a> features landscapes and pastoral scenes perfect for bringing classical elegance into your space." }
    ]
  },
  {
    slug: 'dance-at-le-moulin-de-la-galette',
    faqs: [
      { question: "Who painted Dance at Le Moulin de la Galette?", answer: "<a href=\"/artist/pierre-auguste-renoir\" style=\"color: #028161;\"><strong>Pierre-Auguste Renoir</strong></a> painted it in 1876. He worked on location at the outdoor dance hall in Montmartre, capturing the dappled sunlight filtering through the trees." },
      { question: "Where can I see Dance at Le Moulin de la Galette?", answer: "It's displayed at the <a href=\"/museum/musee-dorsay\" style=\"color: #C9A84C;\"><strong>Musée d'Orsay</strong></a> in Paris. The painting is one of the most celebrated works of the <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionist movement</strong></a>." },
      { question: "What makes this Renoir painting special?", answer: "<a href=\"/artist/pierre-auguste-renoir\" style=\"color: #028161;\"><strong>Renoir</strong></a> captured genuine Parisian life rather than posed studio scenes. The flickering light effects and joyful atmosphere made it a defining work of <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionism</strong></a>." },
      { question: "Where can I find colorful party scene artwork?", answer: "Browse our <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>colorful artwork collection</strong></a> for vibrant pieces that capture energy and celebration." }
    ]
  },
  {
    slug: 'venus-cupid-folly-and-time',
    faqs: [
      { question: "What is Venus, Cupid, Folly and Time about?", answer: "It's an allegory about the dangers of lust and deceit. <a href=\"/artist/bronzino\" style=\"color: #028161;\"><strong>Bronzino</strong></a> packed it with hidden symbols. The figure of Deceit holds a honeycomb in one hand and a scorpion's tail behind her back." },
      { question: "Where is Bronzino's Venus painting displayed?", answer: "You'll find it at the <a href=\"/museum/national-gallery-london\" style=\"color: #C9A84C;\"><strong>National Gallery</strong></a> in London. It was painted as a gift from Cosimo I de' Medici to King Francis I of France." },
      { question: "What style is Venus, Cupid, Folly and Time?", answer: "It's a prime example of <a href=\"/movement/mannerism\" style=\"color: #028161;\"><strong>Mannerism</strong></a>. <a href=\"/artist/bronzino\" style=\"color: #028161;\"><strong>Bronzino</strong></a> used elongated figures, cool colors, and complex poses that defined this post-Renaissance style." },
      { question: "Can I find sensual classical art for my home?", answer: "Our <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portraits collection</strong></a> includes classical figure studies with refined beauty and artistic sophistication." }
    ]
  },
  {
    slug: 'charles-i-at-the-hunt',
    faqs: [
      { question: "Who painted Charles I at the Hunt?", answer: "<a href=\"/artist/anthony-van-dyck\" style=\"color: #028161;\"><strong>Anthony van Dyck</strong></a> created this portrait in 1635. He served as the principal court painter to King Charles I and revolutionized English portrait painting." },
      { question: "Where is Charles I at the Hunt displayed?", answer: "It hangs in the <a href=\"/museum/louvre\" style=\"color: #C9A84C;\"><strong>Louvre Museum</strong></a> in Paris. The painting shows the king dismounted during a hunt, presenting him as both regal and approachable." },
      { question: "Why is Van Dyck's portrait of Charles I significant?", answer: "<a href=\"/artist/anthony-van-dyck\" style=\"color: #028161;\"><strong>Van Dyck</strong></a> created a new template for royal portraiture. His relaxed, elegant style influenced how monarchs were depicted for the next two centuries across Europe." },
      { question: "Where can I find elegant portrait artwork?", answer: "Explore our <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>people and portraits collection</strong></a> for distinguished portrait art that brings classical elegance to any room." }
    ]
  },
  {
    slug: 'judith-slaying-holofernes-artemisia',
    faqs: [
      { question: "Who painted Judith Slaying Holofernes?", answer: "<a href=\"/artist/artemisia-gentileschi\" style=\"color: #028161;\"><strong>Artemisia Gentileschi</strong></a> painted it around 1620. She's now recognized as one of the most accomplished <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque</strong></a> painters and a pioneer for women artists." },
      { question: "Where can I see Artemisia's Judith Slaying Holofernes?", answer: "It's at the <a href=\"/museum/uffizi-gallery\" style=\"color: #C9A84C;\"><strong>Uffizi Gallery</strong></a> in Florence. The visceral intensity of this version surpasses most other depictions of the biblical story." },
      { question: "What makes Artemisia Gentileschi's version unique?", answer: "<a href=\"/artist/artemisia-gentileschi\" style=\"color: #028161;\"><strong>Artemisia</strong></a> showed Judith as physically powerful and determined. Her maidservant actively helps with the killing rather than just watching, making both women active agents." },
      { question: "Can I find dramatic artwork for my home?", answer: "Yes. Our <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>macabre art collection</strong></a> features intense, dramatic pieces with powerful emotional impact." }
    ]
  },
  {
    slug: 'adam-eve-cranach',
    faqs: [
      { question: "Who painted Adam and Eve (1526)?", answer: "<a href=\"/artist/lucas-cranach-the-elder\" style=\"color: #028161;\"><strong>Lucas Cranach the Elder</strong></a> created this version. He painted the subject multiple times throughout his career, each with his distinctive Northern Renaissance style." },
      { question: "Where is Cranach's Adam and Eve displayed?", answer: "This version hangs at the <a href=\"/museum/museo-del-prado\" style=\"color: #C9A84C;\"><strong>Museo del Prado</strong></a> in Madrid. Cranach painted over 50 versions of Adam and Eve, making it one of his most repeated themes." },
      { question: "What's distinctive about Cranach's Adam and Eve?", answer: "<a href=\"/artist/lucas-cranach-the-elder\" style=\"color: #028161;\"><strong>Cranach</strong></a> gave his figures elongated proportions and placed them against a dark background. His Eve has an almost coy expression that differs from Italian Renaissance treatments." },
      { question: "Where can I find religious artwork for my space?", answer: "Browse our <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>spiritual and religious collection</strong></a> for classical biblical scenes and sacred imagery." }
    ]
  },
  {
    slug: 'carcass-beef',
    faqs: [
      { question: "Who painted Carcass of Beef?", answer: "<a href=\"/artist/chaim-soutine\" style=\"color: #028161;\"><strong>Chaim Soutine</strong></a> painted it in 1925. He kept actual beef carcasses in his studio, dousing them with blood to maintain their color while he worked." },
      { question: "Where is Carcass of Beef displayed?", answer: "It's at the <a href=\"/museum/albright-knox-art-gallery\" style=\"color: #C9A84C;\"><strong>Albright-Knox Art Gallery</strong></a> in Buffalo. Francis Bacon later cited this painting as a major influence on his own visceral work." },
      { question: "Why did Soutine paint a beef carcass?", answer: "<a href=\"/artist/chaim-soutine\" style=\"color: #028161;\"><strong>Soutine</strong></a> was drawn to the raw physicality and rich reds of butchered meat. The subject let him explore texture, mortality, and expressive brushwork in ways still life couldn't." },
      { question: "Can I find intense red artwork for my walls?", answer: "Absolutely. Check out our <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>red wall art collection</strong></a> for bold pieces with powerful color impact." }
    ]
  },
  {
    slug: 'les-demoiselles-davignon',
    faqs: [
      { question: "What movement is Les Demoiselles d'Avignon?", answer: "It launched <a href=\"/movement/cubism\" style=\"color: #028161;\"><strong>Cubism</strong></a>. <a href=\"/artist/pablo-picasso\" style=\"color: #028161;\"><strong>Picasso</strong></a> shattered traditional perspective and combined influences from African masks and Iberian sculpture to create something entirely new." },
      { question: "Where is Les Demoiselles d'Avignon displayed?", answer: "You'll find it at <a href=\"/museum/moma\" style=\"color: #C9A84C;\"><strong>MoMA</strong></a> in New York. The painting shocked even Picasso's closest friends when he first revealed it in 1907." },
      { question: "Why is Les Demoiselles d'Avignon so important?", answer: "<a href=\"/artist/pablo-picasso\" style=\"color: #028161;\"><strong>Picasso</strong></a> broke every rule of Western art in one canvas. The fractured forms and aggressive style directly led to <a href=\"/movement/cubism\" style=\"color: #028161;\"><strong>Cubism</strong></a> and changed art forever." },
      { question: "Where can I find abstract figure artwork?", answer: "Our <a href=\"https://luxurywallart.com/collections/abstract\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>abstract collection</strong></a> features bold figurative works that push boundaries and make strong visual statements." },
      { question: "What does the title Les Demoiselles d'Avignon mean?", answer: "It refers to women from Avignon Street, a red-light district in Barcelona. <a href=\"/artist/pablo-picasso\" style=\"color: #028161;\"><strong>Picasso</strong></a> originally planned a more narrative scene but stripped it down to raw confrontation between viewer and figures." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs (Batch 9)...');
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
