const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'madame-x',
    faqs: [
      { question: "Why was Madame X so controversial when first exhibited?", answer: "The original version showed a <strong>fallen dress strap</strong>, which scandalized Paris. <a href=\"/artist/john-singer-sargent\" style=\"color: #028161;\"><strong>John Singer Sargent</strong></a> later repainted it, but the damage to his reputation forced him to leave France." },
      { question: "Who is the woman in Madame X?", answer: "She's <strong>Virginie Amélie Avegno Gautreau</strong>, an American-born Parisian socialite famous for her beauty. <a href=\"/artist/john-singer-sargent\" style=\"color: #028161;\"><strong>Sargent</strong></a> spent over a year convincing her to pose for this ambitious portrait." },
      { question: "Where can I see Madame X today?", answer: "It hangs at <a href=\"/museum/the-met\" style=\"color: #C9A84C;\"><strong>The Metropolitan Museum of Art</strong></a> in New York. Sargent sold it to the museum in 1916, calling it the best thing he'd ever painted." },
      { question: "What makes the pose in Madame X so striking?", answer: "The <strong>twisted torso</strong> and profile view create dramatic tension. For elegant <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portrait art</strong></a> with similar sophistication, we've got options that capture that same presence." }
    ]
  },
  {
    slug: 'wild-turkey',
    faqs: [
      { question: "Why did Audubon paint birds life-size?", answer: "<a href=\"/artist/john-james-audubon\" style=\"color: #028161;\"><strong>John James Audubon</strong></a> insisted on <strong>life-size accuracy</strong> for scientific purposes. His Wild Turkey measures over three feet tall, requiring special paper called \"double elephant\" folio." },
      { question: "How did Audubon create such realistic bird poses?", answer: "He used freshly killed specimens wired into lifelike positions. <a href=\"/artist/john-james-audubon\" style=\"color: #028161;\"><strong>Audubon</strong></a> worked fast to capture accurate colors before the feathers faded, often painting for 14 hours straight." },
      { question: "What's special about the Wild Turkey in Audubon's work?", answer: "It was <strong>Plate 1</strong> of his Birds of America series. <a href=\"/artist/john-james-audubon\" style=\"color: #028161;\"><strong>Audubon</strong></a> chose the turkey deliberately as a symbol of American wilderness and national pride." },
      { question: "Where can I find bird artwork for my home?", answer: "If you love Audubon's detailed naturalism, check out <a href=\"https://luxurywallart.com/collections/bird-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>bird art</strong></a> or browse our wider <a href=\"https://luxurywallart.com/collections/animal-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>animal artwork</strong></a> collection." }
    ]
  },
  {
    slug: 'lamentation-giotto',
    faqs: [
      { question: "Why is Giotto's Lamentation considered revolutionary?", answer: "<a href=\"/artist/giotto\" style=\"color: #028161;\"><strong>Giotto</strong></a> broke from flat Byzantine style by showing <strong>real human grief</strong>. The figures have weight, occupy actual space, and express genuine emotion. It basically invented Western painting as we know it." },
      { question: "Where is the Lamentation fresco located?", answer: "It's at the <a href=\"/museum/scrovegni-chapel\" style=\"color: #C9A84C;\"><strong>Scrovegni Chapel</strong></a> in Padua, Italy. The entire chapel is covered with <a href=\"/artist/giotto\" style=\"color: #028161;\"><strong>Giotto's</strong></a> frescos telling the story of Christ and the Virgin Mary." },
      { question: "What's happening in the Lamentation scene?", answer: "It depicts <strong>Christ's body being mourned</strong> after the Crucifixion. Angels weep overhead while Mary cradles her son. For <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>spiritual and religious artwork</strong></a>, this remains the emotional benchmark." },
      { question: "How did Giotto influence later artists?", answer: "His naturalism paved the way for the entire Renaissance. <a href=\"/artist/giotto\" style=\"color: #028161;\"><strong>Giotto</strong></a> taught artists that paintings could show <strong>three-dimensional space</strong> and real human feelings, not just symbolic figures." }
    ]
  },
  {
    slug: 'composition-viii',
    faqs: [
      { question: "What do the shapes in Composition VIII represent?", answer: "<a href=\"/artist/wassily-kandinsky\" style=\"color: #028161;\"><strong>Kandinsky</strong></a> believed geometric forms had <strong>spiritual meanings</strong>. Circles represented the soul, triangles suggested aggression, and the interplay of shapes created visual music on canvas." },
      { question: "Where can I see Composition VIII?", answer: "It's in the permanent collection at <a href=\"/museum/moma\" style=\"color: #C9A84C;\"><strong>MoMA</strong></a> in New York. This piece marks Kandinsky's shift toward the geometric style he developed while teaching at the Bauhaus." },
      { question: "How does Composition VIII relate to Expressionism?", answer: "It's part of <a href=\"/movement/expressionism\" style=\"color: #028161;\"><strong>Expressionism's</strong></a> push to convey inner experience. <a href=\"/artist/wassily-kandinsky\" style=\"color: #028161;\"><strong>Kandinsky</strong></a> wanted viewers to <strong>feel</strong> the painting like music, not just see it." },
      { question: "What wall art captures this geometric energy?", answer: "For that same dynamic interplay of shapes and colors, explore our <a href=\"https://luxurywallart.com/collections/abstract\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>abstract collection</strong></a> or <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>colorful artwork</strong></a>." }
    ]
  },
  {
    slug: 'damned-cast-hell',
    faqs: [
      { question: "What makes Signorelli's vision of Hell so intense?", answer: "<a href=\"/artist/luca-signorelli\" style=\"color: #028161;\"><strong>Luca Signorelli</strong></a> painted <strong>muscular demons</strong> physically tormenting nude sinners with disturbing realism. His anatomical precision influenced Michelangelo's later Last Judgment in the Sistine Chapel." },
      { question: "Where is The Damned Cast into Hell located?", answer: "It's part of the Last Judgment cycle at <a href=\"/museum/orvieto-cathedral\" style=\"color: #C9A84C;\"><strong>Orvieto Cathedral</strong></a> in Italy. The frescos cover the San Brizio Chapel and took <a href=\"/artist/luca-signorelli\" style=\"color: #028161;\"><strong>Signorelli</strong></a> four years to complete." },
      { question: "Why are the figures so anatomically detailed?", answer: "<a href=\"/artist/luca-signorelli\" style=\"color: #028161;\"><strong>Signorelli</strong></a> studied human anatomy obsessively. The <strong>twisted, struggling bodies</strong> demonstrate mastery that Renaissance artists would study for generations." },
      { question: "What art captures similar dark themes?", answer: "For artwork with that same intense energy, browse our <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>macabre art</strong></a> or <a href=\"https://luxurywallart.com/collections/skeleton-skull-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>skeleton and skull art</strong></a>." }
    ]
  },
  {
    slug: 'self-portrait-rembrandt-1659',
    faqs: [
      { question: "What makes Rembrandt's 1659 Self-Portrait significant?", answer: "<a href=\"/artist/rembrandt\" style=\"color: #028161;\"><strong>Rembrandt</strong></a> painted this during <strong>financial ruin</strong> after bankruptcy. Despite personal hardship, it's considered one of his most psychologically profound works, showing unflinching self-examination." },
      { question: "Where is this Rembrandt self-portrait displayed?", answer: "It hangs at the <a href=\"/museum/national-gallery-london\" style=\"color: #C9A84C;\"><strong>National Gallery</strong></a> in London. <a href=\"/artist/rembrandt\" style=\"color: #028161;\"><strong>Rembrandt</strong></a> painted nearly 100 self-portraits throughout his life, but this one cuts deepest." },
      { question: "How does this relate to Baroque painting?", answer: "It exemplifies <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque</strong></a> drama through <strong>chiaroscuro lighting</strong>. The dark background focuses all attention on Rembrandt's weathered face, revealing both age and wisdom." },
      { question: "What portrait art works for a sophisticated space?", answer: "For that same commanding presence, explore our <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portrait collection</strong></a>. We've got pieces with similar emotional depth and classical technique." }
    ]
  },
  {
    slug: 'the-anatomy-lesson-of-dr-nicolaes-tulp',
    faqs: [
      { question: "What's happening in The Anatomy Lesson?", answer: "<a href=\"/artist/rembrandt\" style=\"color: #028161;\"><strong>Rembrandt</strong></a> depicts Dr. Tulp demonstrating <strong>arm muscle dissection</strong> to Amsterdam's surgeon guild. The cadaver was a recently executed criminal, which was standard practice for anatomy lessons." },
      { question: "Where can I see The Anatomy Lesson of Dr. Nicolaes Tulp?", answer: "It's at the <a href=\"/museum/mauritshuis\" style=\"color: #C9A84C;\"><strong>Mauritshuis</strong></a> in The Hague, Netherlands. This painting launched 26-year-old <a href=\"/artist/rembrandt\" style=\"color: #028161;\"><strong>Rembrandt's</strong></a> career and made him Amsterdam's most sought-after portraitist." },
      { question: "How does this painting show Baroque style?", answer: "The <a href=\"/movement/baroque\" style=\"color: #028161;\"><strong>Baroque</strong></a> love of drama shows in the <strong>theatrical lighting</strong> and arranged composition. Each surgeon paid to be included, yet Rembrandt made it feel like a genuine moment." },
      { question: "What made this group portrait revolutionary?", answer: "Unlike stiff guild portraits of the era, <a href=\"/artist/rembrandt\" style=\"color: #028161;\"><strong>Rembrandt</strong></a> captured <strong>individual reactions</strong>. Some surgeons lean in with curiosity while others look directly at us, creating natural tension." }
    ]
  },
  {
    slug: 'labsinthe',
    faqs: [
      { question: "Why is L'Absinthe considered controversial?", answer: "When exhibited in London, critics attacked its <strong>depiction of alcoholism</strong> as ugly and immoral. <a href=\"/artist/edgar-degas\" style=\"color: #028161;\"><strong>Degas</strong></a> wasn't moralizing though. He painted modern Parisian life as he saw it, without judgment." },
      { question: "Where is L'Absinthe displayed today?", answer: "It hangs at the <a href=\"/museum/musee-dorsay\" style=\"color: #C9A84C;\"><strong>Musée d'Orsay</strong></a> in Paris. The café depicted is the Nouvelle Athènes in Montmartre, a regular hangout for <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionist</strong></a> artists." },
      { question: "Who are the people in L'Absinthe?", answer: "They're <strong>actress Ellen Andrée</strong> and engraver Marcellin Desboutin, both friends of <a href=\"/artist/edgar-degas\" style=\"color: #028161;\"><strong>Degas</strong></a>. They're acting as models, not actually drunk, despite what the painting suggests." },
      { question: "How does L'Absinthe reflect Impressionism?", answer: "The <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionist</strong></a> interest in everyday modern life drives this piece. <a href=\"/artist/edgar-degas\" style=\"color: #028161;\"><strong>Degas</strong></a> captures a <strong>fleeting café moment</strong> with unconventional cropping borrowed from photography." }
    ]
  },
  {
    slug: 'breezing-up',
    faqs: [
      { question: "What's the scene in Breezing Up about?", answer: "<a href=\"/artist/winslow-homer\" style=\"color: #028161;\"><strong>Winslow Homer</strong></a> shows a father and three boys sailing a catboat in <strong>strong wind</strong>. It captures the optimism of post-Civil War America, with youth literally steering toward a bright horizon." },
      { question: "Where can I see Breezing Up?", answer: "It's at the <a href=\"/museum/national-gallery-of-art-washington\" style=\"color: #C9A84C;\"><strong>National Gallery of Art</strong></a> in Washington D.C. <a href=\"/artist/winslow-homer\" style=\"color: #028161;\"><strong>Homer</strong></a> worked on this painting for three years, refining it from earlier watercolor sketches." },
      { question: "Why is Breezing Up considered a masterpiece of American art?", answer: "It perfectly captures <strong>American optimism</strong> and the relationship between people and the sea. <a href=\"/artist/winslow-homer\" style=\"color: #028161;\"><strong>Homer's</strong></a> mastery of light on water and natural movement makes it timelessly fresh." },
      { question: "What nautical artwork fits a coastal home?", answer: "For that same breezy, maritime feeling, explore our <a href=\"https://luxurywallart.com/collections/coastal-ocean\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>coastal and ocean art</strong></a> or <a href=\"https://luxurywallart.com/collections/boat-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>boat artwork</strong></a> collections." }
    ]
  },
  {
    slug: 'composition-with-red-blue-and-yellow',
    faqs: [
      { question: "Why did Mondrian only use primary colors?", answer: "<a href=\"/artist/piet-mondrian\" style=\"color: #028161;\"><strong>Mondrian</strong></a> believed <strong>red, blue, yellow, black, and white</strong> represented universal harmony. His De Stijl philosophy stripped art down to these essentials to express pure reality." },
      { question: "Where is Composition with Red, Blue, and Yellow?", answer: "It's at <a href=\"/museum/kunsthaus-zurich\" style=\"color: #C9A84C;\"><strong>Kunsthaus Zürich</strong></a> in Switzerland. <a href=\"/artist/piet-mondrian\" style=\"color: #028161;\"><strong>Mondrian</strong></a> spent years perfecting these seemingly simple compositions, adjusting line weights by millimeters." },
      { question: "What's the connection between Mondrian and De Stijl?", answer: "<a href=\"/artist/piet-mondrian\" style=\"color: #028161;\"><strong>Mondrian</strong></a> co-founded the <strong>De Stijl movement</strong> in 1917. They believed art should express universal truths through geometric abstraction, influencing everything from architecture to furniture design." },
      { question: "What abstract art captures this bold, graphic style?", answer: "For that same striking simplicity, check out our <a href=\"https://luxurywallart.com/collections/abstract\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>abstract collection</strong></a>. We've also got pieces in specific colors like <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>red</strong></a> or <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>blue wall art</strong></a>." }
    ]
  }
];

async function main() {
  console.log('Updating 10 artworks with FAQs...');
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
