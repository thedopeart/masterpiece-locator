const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'luncheon-boating-party-renoir',
    faqs: [
      { question: "Who are the people in The Luncheon of the Boating Party?", answer: "<a href=\"/artist/pierre-auguste-renoir\" style=\"color: #028161;\"><strong>Renoir</strong></a> painted his friends and future wife Aline Charigot at the Maison Fournaise restaurant. The group includes artists, actresses, and patrons enjoying a sunny afternoon on the Seine." },
      { question: "Where can I see The Luncheon of the Boating Party?", answer: "It's housed at <a href=\"/museum/phillips-collection\" style=\"color: #C9A84C;\"><strong>The Phillips Collection</strong></a> in Washington D.C. Duncan Phillips acquired it in 1923 for $125,000, a record price for an <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionist</strong></a> work at the time." },
      { question: "What makes this painting a masterpiece of Impressionism?", answer: "Renoir captured fleeting light on skin, glass, and fabric with loose brushwork typical of <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionism</strong></a>. Browse similar scenes at <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portrait artwork</strong></a>." },
      { question: "How long did Renoir work on this painting?", answer: "<a href=\"/artist/pierre-auguste-renoir\" style=\"color: #028161;\"><strong>Renoir</strong></a> spent months on this ambitious composition from 1880 to 1881. He balanced fourteen figures while maintaining the spontaneous feel that defines his best work." }
    ]
  },
  {
    slug: 'regatta-cowes',
    faqs: [
      { question: "What event does Regatta at Cowes depict?", answer: "Raoul Dufy captured the famous Cowes Week sailing regatta on England's Isle of Wight. His vibrant colors and quick brushstrokes convey the energy of <a href=\"https://luxurywallart.com/collections/boat-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>nautical scenes</strong></a>." },
      { question: "Where is Regatta at Cowes displayed?", answer: "You'll find it at the <a href=\"/museum/national-gallery-of-art\" style=\"color: #C9A84C;\"><strong>National Gallery of Art</strong></a> in Washington D.C. Dufy's coastal work pairs well with our <a href=\"https://luxurywallart.com/collections/coastal-ocean\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>coastal collection</strong></a>." },
      { question: "What style is Raoul Dufy known for?", answer: "Dufy developed a distinctive approach with bright colors and calligraphic outlines. He's associated with Fauvism early on, though this 1934 work shows his mature, decorative style celebrating leisure and the sea." }
    ]
  },
  {
    slug: 'the-dance-class',
    faqs: [
      { question: "Why did Degas paint so many ballet scenes?", answer: "<a href=\"/artist/edgar-degas\" style=\"color: #028161;\"><strong>Degas</strong></a> was fascinated by movement and spent years observing dancers at the Paris Opera. He painted over 1,500 ballet works, capturing rehearsals more often than performances." },
      { question: "Where is The Dance Class located?", answer: "This 1874 version hangs at the <a href=\"/museum/musee-dorsay\" style=\"color: #C9A84C;\"><strong>Musée d'Orsay</strong></a> in Paris. Degas created multiple dance class paintings, so check which version you're viewing." },
      { question: "Is The Dance Class considered Impressionist?", answer: "Yes, though <a href=\"/artist/edgar-degas\" style=\"color: #028161;\"><strong>Degas</strong></a> preferred being called a Realist. His work shares <a href=\"/movement/impressionism\" style=\"color: #028161;\"><strong>Impressionism's</strong></a> interest in modern life and candid moments, but his drawing remained more precise." },
      { question: "What's the figure in the center doing?", answer: "Ballet master Jules Perrot leads the class while young dancers practice and rest. <a href=\"/artist/edgar-degas\" style=\"color: #028161;\"><strong>Degas</strong></a> loved these informal moments, showing dancers stretching, adjusting shoes, or waiting their turn." }
    ]
  },
  {
    slug: 'proserpine',
    faqs: [
      { question: "Who was the model for Proserpine?", answer: "Jane Morris, wife of William Morris, posed for this painting. <a href=\"/artist/dante-gabriel-rossetti\" style=\"color: #028161;\"><strong>Rossetti</strong></a> was deeply infatuated with her and painted her repeatedly throughout the 1870s." },
      { question: "What myth does Proserpine reference?", answer: "The Roman goddess Proserpine was trapped in the underworld after eating pomegranate seeds. <a href=\"/artist/dante-gabriel-rossetti\" style=\"color: #028161;\"><strong>Rossetti</strong></a> saw parallels to Jane's unhappy marriage. The <a href=\"/movement/pre-raphaelite\" style=\"color: #028161;\"><strong>Pre-Raphaelites</strong></a> loved mythological themes." },
      { question: "Where can I see Proserpine?", answer: "It's displayed at <a href=\"/museum/tate-britain\" style=\"color: #C9A84C;\"><strong>Tate Britain</strong></a> in London. Explore similar dramatic portraits in our <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>women's art collection</strong></a>." },
      { question: "What makes this painting Pre-Raphaelite?", answer: "Rich colors, medieval symbolism, and literary subject matter define the <a href=\"/movement/pre-raphaelite\" style=\"color: #028161;\"><strong>Pre-Raphaelite</strong></a> style. <a href=\"/artist/dante-gabriel-rossetti\" style=\"color: #028161;\"><strong>Rossetti</strong></a> co-founded the movement in 1848 to reject academic conventions." }
    ]
  },
  {
    slug: 'daughters-boit',
    faqs: [
      { question: "Who were the Boit daughters?", answer: "<a href=\"/artist/john-singer-sargent\" style=\"color: #028161;\"><strong>Sargent</strong></a> painted Florence, Jane, Mary Louisa, and Julia Boit in their Paris apartment. Their wealthy American family lived abroad, typical of the Gilded Age expatriate community." },
      { question: "Why is this portrait composition so unusual?", answer: "<a href=\"/artist/john-singer-sargent\" style=\"color: #028161;\"><strong>Sargent</strong></a> scattered the girls across a vast, shadowy interior instead of grouping them traditionally. He was influenced by Velázquez's Las Meninas, which also plays with space and gaze." },
      { question: "Where is The Daughters of Edward Darley Boit displayed?", answer: "The <a href=\"/museum/mfa-boston\" style=\"color: #C9A84C;\"><strong>Museum of Fine Arts, Boston</strong></a> owns this masterpiece. See more portraits at <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>our portrait collection</strong></a>." },
      { question: "What are the large vases in the painting?", answer: "Those Japanese blue-and-white porcelain vases actually exist and sit beside the painting at the <a href=\"/museum/mfa-boston\" style=\"color: #C9A84C;\"><strong>MFA Boston</strong></a>. <a href=\"/artist/john-singer-sargent\" style=\"color: #028161;\"><strong>Sargent</strong></a> used them to dwarf the children and enhance the mysterious atmosphere." }
    ]
  },
  {
    slug: 'large-blue-horses',
    faqs: [
      { question: "Why did Franz Marc paint horses blue?", answer: "<a href=\"/artist/franz-marc\" style=\"color: #028161;\"><strong>Marc</strong></a> believed colors expressed spiritual qualities. Blue represented masculinity and spirituality. His vivid palette influenced German Expressionism and still inspires <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>blue artwork</strong></a> today." },
      { question: "Where can I see The Large Blue Horses?", answer: "It hangs at the <a href=\"/museum/minneapolis-institute-of-art\" style=\"color: #C9A84C;\"><strong>Minneapolis Institute of Art</strong></a>. The painting's bold colors and curved forms make it one of the museum's most beloved works." },
      { question: "What movement was Franz Marc part of?", answer: "<a href=\"/artist/franz-marc\" style=\"color: #028161;\"><strong>Marc</strong></a> co-founded Der Blaue Reiter (The Blue Rider) with Kandinsky in 1911. They sought spiritual truth through color and abstraction. Browse <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>horse art</strong></a> for similar subjects." },
      { question: "What happened to Franz Marc?", answer: "<a href=\"/artist/franz-marc\" style=\"color: #028161;\"><strong>Marc</strong></a> died at 36 during the Battle of Verdun in 1916. His early death cut short a brilliant career, making works like The Large Blue Horses even more treasured." }
    ]
  },
  {
    slug: 'self-portrait-anniversary',
    faqs: [
      { question: "What makes this self-portrait so groundbreaking?", answer: "<a href=\"/artist/paula-modersohn-becker\" style=\"color: #028161;\"><strong>Modersohn-Becker</strong></a> painted herself nude while pregnant, possibly the first female artist to do so. She depicted her body honestly, without idealization or shame." },
      { question: "Where is this self-portrait displayed?", answer: "You can see it at <a href=\"/museum/the-met\" style=\"color: #C9A84C;\"><strong>The Met</strong></a> in New York. Her bold self-portraits resonate with our <a href=\"https://luxurywallart.com/collections/people-portraits\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>portrait collection</strong></a>." },
      { question: "Why did she paint herself on her anniversary?", answer: "<a href=\"/artist/paula-modersohn-becker\" style=\"color: #028161;\"><strong>Modersohn-Becker</strong></a> had just left her husband Otto to pursue art in Paris. The anniversary title may be ironic. She returned to him and died shortly after childbirth at 31." },
      { question: "Was Paula Modersohn-Becker recognized in her lifetime?", answer: "Barely. <a href=\"/artist/paula-modersohn-becker\" style=\"color: #028161;\"><strong>Modersohn-Becker</strong></a> sold few paintings and died young. Recognition came decades later when her raw, modern approach to the figure finally found its audience." }
    ]
  },
  {
    slug: 'maesta-duccio',
    faqs: [
      { question: "What does Maestà mean?", answer: "Maestà means \"majesty\" in Italian, referring to the Virgin Mary enthroned in glory. <a href=\"/artist/duccio\" style=\"color: #028161;\"><strong>Duccio's</strong></a> altarpiece was a monumental work for Siena's cathedral, featuring dozens of narrative scenes." },
      { question: "Where can I see Duccio's Maestà today?", answer: "The main panel is at the <a href=\"/museum/museo-dellopera-del-duomo\" style=\"color: #C9A84C;\"><strong>Museo dell'Opera del Duomo</strong></a> in Siena. Some smaller panels are scattered in museums worldwide. Explore <a href=\"https://luxurywallart.com/collections/spiritual-religious\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>religious art</strong></a> for similar themes." },
      { question: "Why is the Maestà important in art history?", answer: "<a href=\"/artist/duccio\" style=\"color: #028161;\"><strong>Duccio</strong></a> bridged Byzantine tradition and early Renaissance naturalism. His figures show emotion and occupy believable space, influencing generations of Sienese painters." },
      { question: "How big is the Maestà altarpiece?", answer: "The original double-sided altarpiece stood about 14 feet tall. <a href=\"/artist/duccio\" style=\"color: #028161;\"><strong>Duccio</strong></a> and his workshop spent three years completing it. When finished in 1311, Siena held a citywide celebration." }
    ]
  },
  {
    slug: 'view-dordrecht',
    faqs: [
      { question: "What technique is Jan van Goyen known for?", answer: "<a href=\"/artist/jan-van-goyen\" style=\"color: #028161;\"><strong>Van Goyen</strong></a> pioneered tonal landscape painting using limited palettes of browns, greens, and grays. His atmospheric river scenes influenced Dutch Golden Age <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\" style=\"color: #C9A84C;\"><strong>landscape painting</strong></a>." },
      { question: "What city does this painting show?", answer: "Dordrecht was a prosperous Dutch trading city where rivers converged. <a href=\"/artist/jan-van-goyen\" style=\"color: #028161;\"><strong>Van Goyen</strong></a> painted it multiple times, capturing its distinctive church tower against expansive skies." },
      { question: "Why did Van Goyen paint so many river scenes?", answer: "Rivers meant commerce and prosperity in 17th-century Holland. <a href=\"/artist/jan-van-goyen\" style=\"color: #028161;\"><strong>Van Goyen</strong></a> produced over 1,200 paintings, many featuring waterways. His rapid technique kept prices low and output high." }
    ]
  },
  {
    slug: 'slave-market-gerome',
    faqs: [
      { question: "What does The Slave Market depict?", answer: "<a href=\"/artist/jean-leon-gerome\" style=\"color: #028161;\"><strong>Gérôme</strong></a> painted a Middle Eastern slave market with a buyer examining a woman's teeth. The scene reflects Orientalist fascination with the exotic, though it's historically problematic today." },
      { question: "Where is The Slave Market displayed?", answer: "It's at the <a href=\"/museum/clark-art-institute\" style=\"color: #C9A84C;\"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts. <a href=\"/artist/jean-leon-gerome\" style=\"color: #028161;\"><strong>Gérôme</strong></a> was hugely popular in his era for such theatrical scenes." },
      { question: "How is this painting viewed today?", answer: "Critics now see <a href=\"/artist/jean-leon-gerome\" style=\"color: #028161;\"><strong>Gérôme's</strong></a> Orientalist works as voyeuristic fantasies masquerading as documentation. The painting's technical skill is undeniable, but its colonial gaze remains troubling." },
      { question: "Was Gérôme influential in his time?", answer: "<a href=\"/artist/jean-leon-gerome\" style=\"color: #028161;\"><strong>Gérôme</strong></a> was one of France's most celebrated academic painters. He opposed Impressionism fiercely but ironically trained artists who'd embrace modern styles." }
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
