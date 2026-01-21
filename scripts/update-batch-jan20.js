const { PrismaClient } = require("../node_modules/@prisma/client");
const prisma = new PrismaClient();

async function main() {
  console.log("Updating 80 artworks...\n");

  // 1. van-gogh-au-charbonnage-caf233
  await prisma.artwork.update({
    where: { slug: 'van-gogh-au-charbonnage-caf233' },
    data: {
      description: `<p><a href="/artist/van-gogh"><strong>Vincent van Gogh</strong></a> sketched this view of a café called "Au Charbonnage" during his time in Belgium. The drawing captures a simple <strong>street scene</strong> with the establishment's façade and surrounding architecture.</p>
<p>Van Gogh created many such studies during his early years as an artist, documenting everyday life in the mining regions. This work is now preserved at the <a href="/museum/van-gogh-museum-amsterdam-netherlands"><strong>Van Gogh Museum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "Where can I see this Van Gogh drawing?", answer: "You can view this work at the <a href=\"/museum/van-gogh-museum-amsterdam-netherlands\"><strong>Van Gogh Museum</strong></a> in Amsterdam, which holds the world's largest collection of his art." },
        { question: "Who created Au Charbonnage Café?", answer: "<a href=\"/artist/van-gogh\"><strong>Vincent van Gogh</strong></a> made this drawing during his time in Belgium's coal mining region." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: van-gogh-au-charbonnage-caf233");

  // 2. ernest-meissonier-1814-campagne-de-france-napoleon-and-his-staff-ret
  await prisma.artwork.update({
    where: { slug: 'ernest-meissonier-1814-campagne-de-france-napoleon-and-his-staff-ret' },
    data: {
      description: `<p><a href="/artist/ernest-meissonier"><strong>Ernest Meissonier</strong></a> painted this scene depicting Napoleon and his staff returning from Soissons after the Battle of Laon in 1814. The composition shows the defeated emperor on horseback, surrounded by his <strong>weary officers</strong> trudging through a bleak winter landscape.</p>
<p>Meissonier was known for his precise <strong>military paintings</strong> and spent years researching period details. This work hangs at the <a href="/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is this Napoleon painting displayed?", answer: "This work is at the <a href=\"/museum/mus233e-d39orsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris, France." },
        { question: "Who painted 1814 Campagne de France?", answer: "<a href=\"/artist/ernest-meissonier\"><strong>Ernest Meissonier</strong></a> created this military scene, known for his detailed historical paintings." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: ernest-meissonier-1814-campagne-de-france-napoleon-and-his-staff-ret");

  // 3. raoul-dufy-4th-of-july
  await prisma.artwork.update({
    where: { slug: 'raoul-dufy-4th-of-july' },
    data: {
      description: `<p><a href="/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> captured the festive atmosphere of an American Independence Day celebration. The painting features his characteristic <strong>bright colors</strong> and loose brushwork, with flags and decorations creating a lively scene.</p>
<p>Dufy was drawn to celebrations and public events throughout his career. This work is currently in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted 4th of July?", answer: "<a href=\"/artist/raoul-dufy\"><strong>Raoul Dufy</strong></a>, the French Fauvist painter known for his colorful depictions of festive scenes." },
        { question: "Where is this painting located?", answer: "This work is held in a <strong>private collection</strong> and is not on public display." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: raoul-dufy-4th-of-july");

  // 4. mary-cassatt-a-baby-smiling-at-two-young-women
  await prisma.artwork.update({
    where: { slug: 'mary-cassatt-a-baby-smiling-at-two-young-women' },
    data: {
      description: `<p><a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this tender scene of a baby interacting with two young women. Her signature focus on <strong>maternal subjects</strong> and intimate domestic moments shines through in this composition.</p>
<p>Cassatt, an American artist working in France, became one of the few women associated with the Impressionist movement. This painting is currently in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted A Baby Smiling at Two Young Women?", answer: "<a href=\"/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> created this work, known for her depictions of mothers and children." },
        { question: "Where can I see this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly accessible." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: mary-cassatt-a-baby-smiling-at-two-young-women");

  // 5. gabriel-metsu-a-baker-blowing-his-horn
  await prisma.artwork.update({
    where: { slug: 'gabriel-metsu-a-baker-blowing-his-horn' },
    data: {
      description: `<p><a href="/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a> depicted a baker announcing his wares by blowing a horn, a common practice in 17th-century Netherlands. The painting showcases Metsu's skill at capturing <strong>everyday Dutch life</strong> with warmth and detail.</p>
<p>Metsu was a contemporary of Vermeer and specialized in genre scenes. This work is held in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted A Baker Blowing his Horn?", answer: "<a href=\"/artist/gabriel-metsu\"><strong>Gabriel Metsu</strong></a>, a Dutch Golden Age painter known for his genre scenes." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not on public display." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gabriel-metsu-a-baker-blowing-his-horn");

  // 6. frans-hals-a-banquet-of-the-officers-of-the-st-george-militia
  await prisma.artwork.update({
    where: { slug: 'frans-hals-a-banquet-of-the-officers-of-the-st-george-militia' },
    data: {
      description: `<p><a href="/artist/frans-hals"><strong>Frans Hals</strong></a> painted this group portrait of militia officers gathered for a banquet. His loose, energetic brushwork brings <strong>life and personality</strong> to each figure, capturing them mid-celebration with remarkable spontaneity.</p>
<p>Hals specialized in these civic guard portraits throughout his career in Haarlem. You can see this painting at the <a href="/museum/frans-hals-museum-haarlem-netherlands"><strong>Frans Hals Museum</strong></a> in his hometown.</p>`,
      faqs: [
        { question: "Where can I see this Frans Hals painting?", answer: "Visit the <a href=\"/museum/frans-hals-museum-haarlem-netherlands\"><strong>Frans Hals Museum</strong></a> in Haarlem, Netherlands, dedicated to the artist's work." },
        { question: "Who painted this militia banquet scene?", answer: "<a href=\"/artist/frans-hals\"><strong>Frans Hals</strong></a> created this group portrait, famous for his lively civic guard paintings." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: frans-hals-a-banquet-of-the-officers-of-the-st-george-militia");

  // 7. rembrandt-a-beggar-and-a-companion-piece-turned-to-the-left
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-beggar-and-a-companion-piece-turned-to-the-left' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching of a beggar and companion facing left, part of a series exploring the lives of the poor. His <strong>expressive linework</strong> conveys both the hardship and humanity of his subjects.</p>
<p>Rembrandt produced many such etchings from his Amsterdam studio. This work is now at the <a href="/museum/his-house-this-is-now-recreated-in-the-original-ro"><strong>Rembrandt House Museum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "Where is this Rembrandt etching?", answer: "You can see this at the <a href=\"/museum/his-house-this-is-now-recreated-in-the-original-ro\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
        { question: "Who created this beggar etching?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> made this as part of his studies of Amsterdam's poor." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-beggar-and-a-companion-piece-turned-to-the-left");

  // 8. rembrandt-a-beggar-and-a-companion-piece-turned-to-the-right
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-beggar-and-a-companion-piece-turned-to-the-right' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this companion piece showing a beggar facing right. Together with its pair, these works demonstrate his interest in depicting <strong>marginalized figures</strong> with dignity.</p>
<p>Rembrandt's beggar studies were created in his Amsterdam workshop. This etching is preserved at the <a href="/museum/his-house-this-is-now-recreated-in-the-original-ro"><strong>Rembrandt House Museum</strong></a>.</p>`,
      faqs: [
        { question: "Where can I view this etching?", answer: "This work is at the <a href=\"/museum/his-house-this-is-now-recreated-in-the-original-ro\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
        { question: "Who made this beggar etching?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this as part of a companion pair." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-beggar-and-a-companion-piece-turned-to-the-right");

  // 9. rembrandt-a-beggar-standing-and-leaning-on-a-stick
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-beggar-standing-and-leaning-on-a-stick' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrayed a standing beggar leaning on a walking stick in this etching. The figure's weary posture and tattered clothing are rendered with <strong>sympathetic detail</strong>.</p>
<p>Such studies of the poor were common in Rembrandt's early career. This work is held at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Rembrandt work?", answer: "This etching is at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a>." },
        { question: "Who created this beggar study?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> made this etching as part of his series on poverty." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-beggar-standing-and-leaning-on-a-stick");

  // 10. rembrandt-a-beggar-warming-his-hands-over-a-chafing-dish
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-beggar-warming-his-hands-over-a-chafing-dish' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> captured a moment of simple comfort as a beggar warms his hands over a chafing dish. The scene conveys both <strong>physical hardship</strong> and human resilience.</p>
<p>This etching exemplifies Rembrandt's compassionate approach to his subjects. It's now displayed at the <a href="/museum/his-house-this-is-now-recreated-in-the-original-ro"><strong>Rembrandt House Museum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "Where can I see this Rembrandt etching?", answer: "Visit the <a href=\"/museum/his-house-this-is-now-recreated-in-the-original-ro\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
        { question: "Who made this beggar scene?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this touching depiction of poverty." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-beggar-warming-his-hands-over-a-chafing-dish");

  // 11. rembrandt-a-beggar-with-a-wooden-leg
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-beggar-with-a-wooden-leg' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> etched this portrait of a beggar with a wooden leg, one of many studies of Amsterdam's street characters. His <strong>detailed linework</strong> captures the man's weathered features and makeshift prosthetic.</p>
<p>These beggar studies show Rembrandt's interest in all levels of society. The etching is preserved at the <a href="/museum/his-house-this-is-now-recreated-in-the-original-ro"><strong>Rembrandt House Museum</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Rembrandt etching displayed?", answer: "You can see this at the <a href=\"/museum/his-house-this-is-now-recreated-in-the-original-ro\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
        { question: "Who created this beggar portrait?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> made this as part of his beggar series." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-beggar-with-a-wooden-leg");

  // 12. fra-angelico-a-bishop-saint
  await prisma.artwork.update({
    where: { slug: 'fra-angelico-a-bishop-saint' },
    data: {
      description: `<p><a href="/artist/fra-angelico"><strong>Fra Angelico</strong></a> painted this image of a bishop saint, likely part of a larger altarpiece. The figure wears <strong>traditional episcopal vestments</strong> and holds symbols of his office, rendered in the artist's characteristic luminous colors.</p>
<p>Fra Angelico, a Dominican friar, created devotional works throughout his career. This painting is now at the <a href="/museum/metropolitan-museum-of-art-met-new-york-city-ny-us"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
      faqs: [
        { question: "Where can I see A Bishop Saint?", answer: "This work is at the <a href=\"/museum/metropolitan-museum-of-art-met-new-york-city-ny-us\"><strong>Metropolitan Museum of Art</strong></a> in New York City." },
        { question: "Who painted this bishop saint?", answer: "<a href=\"/artist/fra-angelico\"><strong>Fra Angelico</strong></a>, the Renaissance painter-friar known for his religious works." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: fra-angelico-a-bishop-saint");

  // 13. palma-vecchio-a-blonde-woman
  await prisma.artwork.update({
    where: { slug: 'palma-vecchio-a-blonde-woman' },
    data: {
      description: `<p><a href="/artist/palma-vecchio"><strong>Palma Vecchio</strong></a> painted this portrait of a blonde woman, showcasing the Venetian ideal of <strong>feminine beauty</strong>. Her golden hair and soft features reflect the Renaissance preference for fair coloring.</p>
<p>Palma Vecchio was known for his portraits of beautiful women. This painting hangs at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
      faqs: [
        { question: "Where is A Blonde Woman displayed?", answer: "This portrait is at the <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London." },
        { question: "Who painted this portrait?", answer: "<a href=\"/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a>, a Venetian Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: palma-vecchio-a-blonde-woman");

  // 14. adriaen-brouwer-a-boor-asleep
  await prisma.artwork.update({
    where: { slug: 'adriaen-brouwer-a-boor-asleep' },
    data: {
      description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> captured a peasant dozing in this small painting. The figure slumps in <strong>drunken sleep</strong>, a subject Brouwer returned to often in his tavern scenes.</p>
<p>Brouwer specialized in depicting peasant life with rough humor. This work is at the <a href="/museum/wallace-collection-london-uk"><strong>Wallace Collection</strong></a> in London.</p>`,
      faqs: [
        { question: "Where can I see A Boor Asleep?", answer: "This painting is at the <a href=\"/museum/wallace-collection-london-uk\"><strong>Wallace Collection</strong></a> in London." },
        { question: "Who painted this sleeping peasant?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a>, known for his tavern and peasant scenes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: adriaen-brouwer-a-boor-asleep");

  // 15. el-greco-a-boy-blowing-on-an-ember-to-light-a-candle
  await prisma.artwork.update({
    where: { slug: 'el-greco-a-boy-blowing-on-an-ember-to-light-a-candle' },
    data: {
      description: `<p><a href="/artist/el-greco"><strong>El Greco</strong></a> painted this scene of a boy blowing on an ember to light a candle. The dramatic contrast of light and shadow creates a <strong>glowing atmosphere</strong> as the ember illuminates the boy's face.</p>
<p>El Greco explored this candlelight subject in several versions. This painting is currently in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this candlelight scene?", answer: "<a href=\"/artist/el-greco\"><strong>El Greco</strong></a> created this work, known for his dramatic lighting effects." },
        { question: "Where is this El Greco painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: el-greco-a-boy-blowing-on-an-ember-to-light-a-candle");

  // 16. edouard-manet-a-boy-with-a-pitcher
  await prisma.artwork.update({
    where: { slug: 'edouard-manet-a-boy-with-a-pitcher' },
    data: {
      description: `<p><a href="/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted this portrait of a young boy holding a pitcher. His <strong>direct gaze</strong> and casual pose reflect Manet's modern approach to portraiture.</p>
<p>Manet often depicted everyday subjects with fresh immediacy. This work is held at the <a href="/museum/art-institute-of-chicago-chicago-il-us-national-ga"><strong>Art Institute of Chicago</strong></a>.</p>`,
      faqs: [
        { question: "Where can I see A Boy with a Pitcher?", answer: "This painting is at the <a href=\"/museum/art-institute-of-chicago-chicago-il-us-national-ga\"><strong>Art Institute of Chicago</strong></a>." },
        { question: "Who painted this boy portrait?", answer: "<a href=\"/artist/edouard-manet\"><strong>Édouard Manet</strong></a>, a founder of French Impressionism." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edouard-manet-a-boy-with-a-pitcher");

  // 17. burial-at-ornans
  await prisma.artwork.update({
    where: { slug: 'burial-at-ornans' },
    data: {
      description: `<p><a href="/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this monumental scene of a funeral in his hometown of Ornans in 1850. At over 3 meters tall and 6 meters wide, the work depicts <strong>ordinary townspeople</strong> mourning at a graveside with unflinching realism.</p>
<p>The painting caused a scandal by treating common people with the scale reserved for history paintings. It now hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is A Burial at Ornans?", answer: "This massive painting is at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris." },
        { question: "How big is A Burial at Ornans?", answer: "The painting measures <strong>315 × 668 cm</strong> (about 10 × 22 feet), an enormous scale for a genre scene." },
        { question: "Who painted A Burial at Ornans?", answer: "<a href=\"/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this landmark of <strong>Realist painting</strong> in 1850." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: burial-at-ornans");

  // 18. salvator-rosa-a-cavalry-battle
  await prisma.artwork.update({
    where: { slug: 'salvator-rosa-a-cavalry-battle' },
    data: {
      description: `<p><a href="/artist/salvator-rosa"><strong>Salvator Rosa</strong></a> painted this chaotic cavalry engagement with horses and soldiers clashing amid dust and smoke. The <strong>violent action</strong> unfolds against a dramatic landscape typical of his battle scenes.</p>
<p>Rosa was known for wild landscapes and battle paintings. This work is at the <a href="/museum/auckland-art-gallery-auckland-new-zealand"><strong>Auckland Art Gallery</strong></a> in New Zealand.</p>`,
      faqs: [
        { question: "Where can I see A Cavalry Battle?", answer: "This painting is at the <a href=\"/museum/auckland-art-gallery-auckland-new-zealand\"><strong>Auckland Art Gallery</strong></a> in Auckland, New Zealand." },
        { question: "Who painted this battle scene?", answer: "<a href=\"/artist/salvator-rosa\"><strong>Salvator Rosa</strong></a>, an Italian Baroque painter known for dramatic scenes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: salvator-rosa-a-cavalry-battle");

  // 19. rembrandt-a-cavalry-fight
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-cavalry-fight' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted a cavalry skirmish with horses and riders in violent combat. The swirling composition captures the <strong>chaos of battle</strong> with energetic brushwork.</p>
<p>Though best known for portraits, Rembrandt occasionally painted historical and military subjects. This work is at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Where is A Cavalry Fight displayed?", answer: "This painting is at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a>." },
        { question: "Who painted this cavalry battle?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this dramatic military scene." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-cavalry-fight");

  // 20. jean-baptiste-simeon-chardin-a-chemist-in-his-laboratory-a-philosopher-giving-a
  await prisma.artwork.update({
    where: { slug: 'jean-baptiste-simeon-chardin-a-chemist-in-his-laboratory-a-philosopher-giving-a' },
    data: {
      description: `<p><a href="/artist/jean-baptiste-simeon-chardin"><strong>Jean-Baptiste-Siméon Chardin</strong></a> painted this scene of a chemist, or natural philosopher, at work in his laboratory. The figure is surrounded by <strong>scientific instruments</strong> and books, absorbed in study.</p>
<p>Chardin was celebrated for his quiet domestic scenes and still lifes. This painting hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where can I see this Chardin painting?", answer: "This work is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
        { question: "Who painted A Chemist in his Laboratory?", answer: "<a href=\"/artist/jean-baptiste-simeon-chardin\"><strong>Jean-Baptiste-Siméon Chardin</strong></a>, the French master of still life and genre painting." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: jean-baptiste-simeon-chardin-a-chemist-in-his-laboratory-a-philosopher-giving-a");

  // 21. paul-delaroche-a-child-learning-to-read
  await prisma.artwork.update({
    where: { slug: 'paul-delaroche-a-child-learning-to-read' },
    data: {
      description: `<p><a href="/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> painted this intimate scene of a child learning to read. The young subject focuses intently on a book, capturing a moment of <strong>quiet concentration</strong> and early education.</p>
<p>Delaroche was primarily known for historical paintings but also created genre scenes. This work is at the <a href="/museum/wallace-collection-london-uk"><strong>Wallace Collection</strong></a> in London.</p>`,
      faqs: [
        { question: "Where is A Child Learning to Read?", answer: "This painting is at the <a href=\"/museum/wallace-collection-london-uk\"><strong>Wallace Collection</strong></a> in London." },
        { question: "Who painted this domestic scene?", answer: "<a href=\"/artist/paul-delaroche\"><strong>Paul Delaroche</strong></a>, a French academic painter of the 19th century." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: paul-delaroche-a-child-learning-to-read");

  // 22. john-constable-a-church-porch
  await prisma.artwork.update({
    where: { slug: 'john-constable-a-church-porch' },
    data: {
      description: `<p><a href="/artist/john-constable"><strong>John Constable</strong></a> sketched this view of a church porch, likely in his native Suffolk. The scene captures the <strong>rustic architecture</strong> with his characteristic attention to light and atmosphere.</p>
<p>Constable frequently painted English churches and rural buildings. This work is at <a href="/museum/tate-modern-london-uk"><strong>Tate Modern</strong></a> in London.</p>`,
      faqs: [
        { question: "Where can I see A Church Porch?", answer: "This work is at <a href=\"/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a> in London." },
        { question: "Who painted this church scene?", answer: "<a href=\"/artist/john-constable\"><strong>John Constable</strong></a>, the English landscape painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: john-constable-a-church-porch");

  // 23. john-william-godward-a-classical-beauty
  await prisma.artwork.update({
    where: { slug: 'john-william-godward-a-classical-beauty' },
    data: {
      description: `<p><a href="/artist/john-william-godward"><strong>John William Godward</strong></a> painted this portrait of a woman in classical dress. She poses against a <strong>marble backdrop</strong>, embodying the artist's idealized vision of ancient beauty.</p>
<p>Godward specialized in neoclassical subjects and <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women in Greco-Roman settings</strong></a>. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted A Classical Beauty?", answer: "<a href=\"/artist/john-william-godward\"><strong>John William Godward</strong></a>, a British painter of neoclassical subjects." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: john-william-godward-a-classical-beauty");

  // 24. william-holman-hunt-a-converted-british-family-sheltering-a-christian-
  await prisma.artwork.update({
    where: { slug: 'william-holman-hunt-a-converted-british-family-sheltering-a-christian-' },
    data: {
      description: `<p><a href="/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted this scene of early British Christians sheltering a priest from Druid persecution. The <strong>Pre-Raphaelite</strong> attention to detail shows in the carefully rendered costumes and setting.</p>
<p>Hunt was a founder of the Pre-Raphaelite Brotherhood. This painting is at the <a href="/museum/ashmolean-museum-oxford-uk"><strong>Ashmolean Museum</strong></a> in Oxford.</p>`,
      faqs: [
        { question: "Where is this Pre-Raphaelite painting?", answer: "This work is at the <a href=\"/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford, UK." },
        { question: "Who painted this early Christian scene?", answer: "<a href=\"/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a>, a founder of the Pre-Raphaelite Brotherhood." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: william-holman-hunt-a-converted-british-family-sheltering-a-christian-");

  // 25. claude-monet-a-corner-of-the-studio
  await prisma.artwork.update({
    where: { slug: 'claude-monet-a-corner-of-the-studio' },
    data: {
      description: `<p><a href="/artist/claude-monet"><strong>Claude Monet</strong></a> painted this view of his studio interior. The scene shows a glimpse of his <strong>working space</strong>, with canvases and painting materials visible in the soft light.</p>
<p>Though famous for landscapes, Monet occasionally painted interior subjects. This work is at the <a href="/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where can I see A Corner of the Studio?", answer: "This painting is at the <a href=\"/museum/mus233e-d39orsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris." },
        { question: "Who painted this studio scene?", answer: "<a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a>, the founder of French Impressionism." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: claude-monet-a-corner-of-the-studio");

  // 26. rembrandt-a-cottage-with-white-pales
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-cottage-with-white-pales' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> sketched this rural cottage with a white picket fence. The <strong>simple dwelling</strong> is rendered with quick, expressive lines typical of his landscape drawings.</p>
<p>Rembrandt made many such studies of the Dutch countryside. This work is at the <a href="/museum/his-house-this-is-now-recreated-in-the-original-ro"><strong>Rembrandt House Museum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "Where is this Rembrandt drawing?", answer: "This sketch is at the <a href=\"/museum/his-house-this-is-now-recreated-in-the-original-ro\"><strong>Rembrandt House Museum</strong></a> in Amsterdam." },
        { question: "Who created this cottage scene?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> made this rural study." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-cottage-with-white-pales");

  // 27. max-liebermann-a-country-brasserie-brannenburg-bavaria
  await prisma.artwork.update({
    where: { slug: 'max-liebermann-a-country-brasserie-brannenburg-bavaria' },
    data: {
      description: `<p><a href="/artist/max-liebermann"><strong>Max Liebermann</strong></a> painted this scene of a Bavarian countryside brasserie. Patrons gather under <strong>dappled sunlight</strong> filtering through trees, enjoying drinks in the open air.</p>
<p>Liebermann was a leading German Impressionist who often depicted leisure scenes. This painting is at the <a href="/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is this Liebermann painting?", answer: "This work is at the <a href=\"/museum/mus233e-d39orsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris." },
        { question: "Who painted A Country Brasserie?", answer: "<a href=\"/artist/max-liebermann\"><strong>Max Liebermann</strong></a>, a German Impressionist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: max-liebermann-a-country-brasserie-brannenburg-bavaria");

  // 28. camille-pissarro-a-creek-in-saint-thomas-antilles
  await prisma.artwork.update({
    where: { slug: 'camille-pissarro-a-creek-in-saint-thomas-antilles' },
    data: {
      description: `<p><a href="/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> painted this view of a creek in Saint Thomas in the Caribbean, where he was born. The <strong>tropical landscape</strong> features lush vegetation and warm light.</p>
<p>Pissarro's early works often depicted his homeland before he moved to France. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted A Creek in Saint Thomas?", answer: "<a href=\"/artist/camille-pissarro\"><strong>Camille Pissarro</strong></a> painted this view of his Caribbean birthplace." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: camille-pissarro-a-creek-in-saint-thomas-antilles");

  // 29. aelbert-cuyp-a-distant-view-of-dordrecht-with-a-milkmaid-and-fo
  await prisma.artwork.update({
    where: { slug: 'aelbert-cuyp-a-distant-view-of-dordrecht-with-a-milkmaid-and-fo' },
    data: {
      description: `<p><a href="/artist/aelbert-cuyp"><strong>Aelbert Cuyp</strong></a> painted this pastoral scene with a milkmaid and cattle in the foreground, the city of Dordrecht visible in the distance. His signature <strong>golden light</strong> bathes the landscape in warm tones.</p>
<p>Cuyp frequently painted views of his hometown. This work is at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
      faqs: [
        { question: "Where can I see this Cuyp painting?", answer: "This landscape is at the <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London." },
        { question: "Who painted this Dordrecht view?", answer: "<a href=\"/artist/aelbert-cuyp\"><strong>Aelbert Cuyp</strong></a>, the Dutch Golden Age landscape master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: aelbert-cuyp-a-distant-view-of-dordrecht-with-a-milkmaid-and-fo");

  // 30. pieter-de-hooch-a-dutch-courtyard
  await prisma.artwork.update({
    where: { slug: 'pieter-de-hooch-a-dutch-courtyard' },
    data: {
      description: `<p><a href="/artist/pieter-de-hooch"><strong>Pieter de Hooch</strong></a> painted this scene of a typical Dutch courtyard, with figures going about their daily activities. The play of <strong>sunlight on brick walls</strong> demonstrates his mastery of architectural interiors.</p>
<p>De Hooch specialized in domestic scenes with careful attention to light. This painting is at the <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington, DC.</p>`,
      faqs: [
        { question: "Where is A Dutch Courtyard?", answer: "This painting is at the <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
        { question: "Who painted this courtyard scene?", answer: "<a href=\"/artist/pieter-de-hooch\"><strong>Pieter de Hooch</strong></a>, known for his Dutch interior and courtyard scenes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: pieter-de-hooch-a-dutch-courtyard");

  // 31. adriaen-van-ostade-a-fight
  await prisma.artwork.update({
    where: { slug: 'adriaen-van-ostade-a-fight' },
    data: {
      description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> depicted a brawl among peasants in this lively scene. The <strong>chaotic composition</strong> captures bodies tangled in a tavern fight, a favorite subject of the artist.</p>
<p>Van Ostade specialized in peasant genre scenes with earthy humor. This painting is at the <a href="/museum/pushkin-museum-moscow-russia"><strong>Pushkin Museum</strong></a> in Moscow.</p>`,
      faqs: [
        { question: "Where can I see A Fight?", answer: "This painting is at the <a href=\"/museum/pushkin-museum-moscow-russia\"><strong>Pushkin Museum</strong></a> in Moscow, Russia." },
        { question: "Who painted this peasant brawl?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a>, a Dutch painter of peasant life." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: adriaen-van-ostade-a-fight");

  // 32. william-merritt-chase-a-fishmarket-in-venice-aka-venetian-fish-market-th
  await prisma.artwork.update({
    where: { slug: 'william-merritt-chase-a-fishmarket-in-venice-aka-venetian-fish-market-th' },
    data: {
      description: `<p><a href="/artist/william-merritt-chase"><strong>William Merritt Chase</strong></a> painted this vibrant view of a Venetian fish market. The scene captures <strong>merchants and customers</strong> amid gleaming fish and bustling activity.</p>
<p>Chase traveled to Venice and painted many scenes of the city. This work is at the <a href="/museum/detroit-institute-of-arts-detroit-mi-us"><strong>Detroit Institute of Arts</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Chase painting?", answer: "This work is at the <a href=\"/museum/detroit-institute-of-arts-detroit-mi-us\"><strong>Detroit Institute of Arts</strong></a> in Detroit, Michigan." },
        { question: "Who painted A Fishmarket in Venice?", answer: "<a href=\"/artist/william-merritt-chase\"><strong>William Merritt Chase</strong></a>, an American Impressionist." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: william-merritt-chase-a-fishmarket-in-venice-aka-venetian-fish-market-th");

  // 33. john-william-waterhouse-a-flower-stall
  await prisma.artwork.update({
    where: { slug: 'john-william-waterhouse-a-flower-stall' },
    data: {
      description: `<p><a href="/artist/john-william-waterhouse"><strong>John William Waterhouse</strong></a> painted this scene of a flower seller at her stall. The <strong>colorful blooms</strong> create a rich backdrop for the young vendor.</p>
<p>Waterhouse was known for romantic and classical subjects. This early work is at the <a href="/museum/laing-art-gallery-newcastle-upon-tyne-uk"><strong>Laing Art Gallery</strong></a> in Newcastle upon Tyne.</p>`,
      faqs: [
        { question: "Where is A Flower Stall?", answer: "This painting is at the <a href=\"/museum/laing-art-gallery-newcastle-upon-tyne-uk\"><strong>Laing Art Gallery</strong></a> in Newcastle upon Tyne, UK." },
        { question: "Who painted this flower seller scene?", answer: "<a href=\"/artist/john-william-waterhouse\"><strong>John William Waterhouse</strong></a>, the Pre-Raphaelite painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: john-william-waterhouse-a-flower-stall");

  // 34. adriaen-van-ostade-a-frozen-lake
  await prisma.artwork.update({
    where: { slug: 'adriaen-van-ostade-a-frozen-lake' },
    data: {
      description: `<p><a href="/artist/adriaen-van-ostade"><strong>Adriaen van Ostade</strong></a> painted this winter scene of figures on a frozen lake. Skaters and pedestrians enjoy the <strong>icy landscape</strong> under a cold Dutch sky.</p>
<p>Winter scenes were popular in Dutch Golden Age painting. This work is at the <a href="/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
      faqs: [
        { question: "Where can I see A Frozen Lake?", answer: "This painting is at the <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
        { question: "Who painted this winter scene?", answer: "<a href=\"/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a>, a Dutch Golden Age painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: adriaen-van-ostade-a-frozen-lake");

  // 35. albert-joseph-moore-a-garden
  await prisma.artwork.update({
    where: { slug: 'albert-joseph-moore-a-garden' },
    data: {
      description: `<p><a href="/artist/albert-joseph-moore"><strong>Albert Joseph Moore</strong></a> painted this scene of figures in a classical garden setting. Women in <strong>flowing drapery</strong> pose amid flowers and greenery in his characteristic aesthetic style.</p>
<p>Moore was associated with the Aesthetic Movement. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted A Garden?", answer: "<a href=\"/artist/albert-joseph-moore\"><strong>Albert Joseph Moore</strong></a>, a Victorian Aesthetic Movement painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: albert-joseph-moore-a-garden");

  // 36. eustache-le-sueur-a-gathering-of-friends
  await prisma.artwork.update({
    where: { slug: 'eustache-le-sueur-a-gathering-of-friends' },
    data: {
      description: `<p><a href="/artist/eustache-le-sueur"><strong>Eustache Le Sueur</strong></a> painted this scene of intellectuals gathered in conversation. The figures, dressed in <strong>classical attire</strong>, appear engaged in philosophical discussion.</p>
<p>Le Sueur was a leading French painter of the 17th century. This painting hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is A Gathering of Friends?", answer: "This painting is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
        { question: "Who painted this philosophical gathering?", answer: "<a href=\"/artist/eustache-le-sueur\"><strong>Eustache Le Sueur</strong></a>, a French Baroque painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: eustache-le-sueur-a-gathering-of-friends");

  // 37. giovanni-battista-moroni-a-gentleman-in-adoration-before-the-madonna
  await prisma.artwork.update({
    where: { slug: 'giovanni-battista-moroni-a-gentleman-in-adoration-before-the-madonna' },
    data: {
      description: `<p><a href="/artist/giovanni-battista-moroni"><strong>Giovanni Battista Moroni</strong></a> painted this devotional scene of a gentleman kneeling before the Madonna. The donor's <strong>reverent posture</strong> and fine clothing are rendered with Moroni's characteristic realism.</p>
<p>Moroni was known for both portraits and religious works. This painting is at the <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington, DC.</p>`,
      faqs: [
        { question: "Where is this Moroni painting?", answer: "This work is at the <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
        { question: "Who painted this devotional scene?", answer: "<a href=\"/artist/giovanni-battista-moroni\"><strong>Giovanni Battista Moroni</strong></a>, an Italian Renaissance portraitist." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: giovanni-battista-moroni-a-gentleman-in-adoration-before-the-madonna");

  // 38. frederic-leighton-a-girl-feeding-peacocks
  await prisma.artwork.update({
    where: { slug: 'frederic-leighton-a-girl-feeding-peacocks' },
    data: {
      description: `<p><a href="/artist/frederic-leighton"><strong>Frederic Leighton</strong></a> painted this graceful scene of a young woman feeding <a href="https://luxurywallart.com/collections/peacock-wall-art" target="_blank" rel="noopener"><strong>peacocks</strong></a>. Her flowing gown and the birds' iridescent feathers create a <strong>harmonious composition</strong>.</p>
<p>Leighton was president of the Royal Academy and a master of classical subjects. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted A Girl Feeding Peacocks?", answer: "<a href=\"/artist/frederic-leighton\"><strong>Frederic Leighton</strong></a>, the Victorian academic painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: frederic-leighton-a-girl-feeding-peacocks");

  // 39. gerard-ter-borch-a-guard-room-interior-with-a-soldier-blowing-smoke
  await prisma.artwork.update({
    where: { slug: 'gerard-ter-borch-a-guard-room-interior-with-a-soldier-blowing-smoke' },
    data: {
      description: `<p><a href="/artist/gerard-ter-borch"><strong>Gerard ter Borch</strong></a> painted this scene of soldiers in a guard room, one blowing smoke into a sleeping companion's face. The <strong>playful moment</strong> captures military leisure with typical Dutch humor.</p>
<p>Ter Borch was known for refined genre scenes. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this guard room scene?", answer: "<a href=\"/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a>, a Dutch Golden Age genre painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gerard-ter-borch-a-guard-room-interior-with-a-soldier-blowing-smoke");

  // 40. william-hogarth-a-harlot39s-progress-plate-2
  await prisma.artwork.update({
    where: { slug: 'william-hogarth-a-harlot39s-progress-plate-2' },
    data: {
      description: `<p><a href="/artist/william-hogarth"><strong>William Hogarth</strong></a> created this as the second plate in his satirical series "A Harlot's Progress." The scene shows Moll Hackabout now established as a <strong>kept woman</strong>, kicking over a table while her wealthy keeper looks on.</p>
<p>Hogarth's moral narratives were hugely influential. This print is at the <a href="/museum/british-museum-london-uk"><strong>British Museum</strong></a> in London.</p>`,
      faqs: [
        { question: "Where can I see A Harlot's Progress?", answer: "This print is at the <a href=\"/museum/british-museum-london-uk\"><strong>British Museum</strong></a> in London." },
        { question: "Who created this satirical series?", answer: "<a href=\"/artist/william-hogarth\"><strong>William Hogarth</strong></a>, the English painter and satirist." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: william-hogarth-a-harlot39s-progress-plate-2");

  // 41. van-gogh-a-house-magros
  await prisma.artwork.update({
    where: { slug: 'van-gogh-a-house-magros' },
    data: {
      description: `<p><a href="/artist/van-gogh"><strong>Vincent van Gogh</strong></a> depicted this view of a house in Magros. The building sits amid a <strong>rural landscape</strong> rendered in his characteristic expressive brushwork.</p>
<p>Van Gogh painted many views of houses and farms during his travels. This work is at the <a href="/museum/national-gallery-of-art-washington-dc-us"><strong>National Gallery of Art</strong></a> in Washington, DC.</p>`,
      faqs: [
        { question: "Where can I see this Van Gogh painting?", answer: "This work is at the <a href=\"/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> in Washington, DC." },
        { question: "Who painted A House Magros?", answer: "<a href=\"/artist/van-gogh\"><strong>Vincent van Gogh</strong></a> created this rural scene." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: van-gogh-a-house-magros");

  // 42. alonso-cano-a-king-of-spain
  await prisma.artwork.update({
    where: { slug: 'alonso-cano-a-king-of-spain' },
    data: {
      description: `<p><a href="/artist/alonso-cano"><strong>Alonso Cano</strong></a> painted this portrait of a Spanish king in formal <strong>royal attire</strong>. The monarch's regal bearing and rich costume reflect the splendor of the Spanish court.</p>
<p>Cano worked as both painter and sculptor in 17th-century Spain. This painting is at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
      faqs: [
        { question: "Where is this royal portrait?", answer: "This painting is at the <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
        { question: "Who painted A King of Spain?", answer: "<a href=\"/artist/alonso-cano\"><strong>Alonso Cano</strong></a>, a Spanish Baroque master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: alonso-cano-a-king-of-spain");

  // 43. johannes-vermeer-a-lady-standing-at-a-virginal
  await prisma.artwork.update({
    where: { slug: 'johannes-vermeer-a-lady-standing-at-a-virginal' },
    data: {
      description: `<p><a href="/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted this scene around 1670, showing a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>young woman</strong></a> standing at a virginal keyboard instrument. Soft light fills the room, illuminating paintings on the wall behind her.</p>
<p>Vermeer's interior scenes with women at music are among his most celebrated works. This painting hangs at the <a href="/museum/national-gallery-london"><strong>National Gallery</strong></a> in London.</p>`,
      faqs: [
        { question: "Where is A Lady Standing at a Virginal?", answer: "This Vermeer is at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London." },
        { question: "When was this Vermeer painted?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> created this work around <strong>1670</strong>, late in his career." },
        { question: "Who painted this musical scene?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Johannes Vermeer</strong></a>, the Dutch master of light and domestic interiors." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: johannes-vermeer-a-lady-standing-at-a-virginal");

  // 44. rembrandt-a-young-woman-with-a-basket
  await prisma.artwork.update({
    where: { slug: 'rembrandt-a-young-woman-with-a-basket' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this portrait of a young woman carrying a basket in <strong>oil on canvas</strong>. Her modest dress and simple pose suggest a working-class subject.</p>
<p>Rembrandt often depicted ordinary people with dignity and warmth. The current location of this work is at a museum in Paris.</p>`,
      faqs: [
        { question: "What medium did Rembrandt use?", answer: "This work is an <strong>oil painting</strong>, Rembrandt's primary medium throughout his career." },
        { question: "Who painted A Young Woman with a Basket?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this portrait study." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-a-young-woman-with-a-basket");

  // 45. van-gogh-a-zandmennik-house
  await prisma.artwork.update({
    where: { slug: 'van-gogh-a-zandmennik-house' },
    data: {
      description: `<p><a href="/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted this view of a sand digger's house, a humble dwelling in a <strong>barren landscape</strong>. The work reflects his interest in the lives of working people.</p>
<p>This painting was stolen from the Isabella Stewart Gardner Museum in 1990 and remains missing. Its <strong>whereabouts are unknown</strong>.</p>`,
      faqs: [
        { question: "Where is this Van Gogh painting?", answer: "This work was <strong>stolen in 1990</strong> from the Isabella Stewart Gardner Museum in Boston and remains missing." },
        { question: "Who painted A Zandmennik House?", answer: "<a href=\"/artist/van-gogh\"><strong>Vincent van Gogh</strong></a> created this work depicting a sand digger's dwelling." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: van-gogh-a-zandmennik-house");

  // 46. maurice-quentin-de-la-tour-abbe-jeanjacques-huber
  await prisma.artwork.update({
    where: { slug: 'maurice-quentin-de-la-tour-abbe-jeanjacques-huber' },
    data: {
      description: `<p><a href="/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this pastel portrait of Abbé Jean-Jacques Huber. The clergyman's <strong>intelligent expression</strong> is captured with the artist's characteristic liveliness.</p>
<p>La Tour was the leading pastel portraitist of 18th-century France. This work is at the <a href="/museum/mus233e-d39art-et-d39histoire-geneva-switzerland"><strong>Musée d'Art et d'Histoire</strong></a> in Geneva.</p>`,
      faqs: [
        { question: "Where is this pastel portrait?", answer: "This work is at the <a href=\"/museum/mus233e-d39art-et-d39histoire-geneva-switzerland\"><strong>Musée d'Art et d'Histoire</strong></a> in Geneva, Switzerland." },
        { question: "Who created this portrait?", answer: "<a href=\"/artist/maurice-quentin-de-la-tour\"><strong>Maurice Quentin de La Tour</strong></a>, the French pastel master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: maurice-quentin-de-la-tour-abbe-jeanjacques-huber");

  // 47. gustave-moreau-abduction-of-the-young-venetian-woman-by-cypriot-p
  await prisma.artwork.update({
    where: { slug: 'gustave-moreau-abduction-of-the-young-venetian-woman-by-cypriot-p' },
    data: {
      description: `<p><a href="/artist/gustave-moreau"><strong>Gustave Moreau</strong></a> painted this dramatic scene of pirates abducting a Venetian woman. The <strong>violent action</strong> unfolds with Moreau's characteristic rich colors and mythological atmosphere.</p>
<p>Moreau was a leading Symbolist painter known for elaborate historical subjects. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this abduction scene?", answer: "<a href=\"/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a>, the French Symbolist painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gustave-moreau-abduction-of-the-young-venetian-woman-by-cypriot-p");

  // 48. above-eternal-peace
  await prisma.artwork.update({
    where: { slug: 'above-eternal-peace' },
    data: {
      description: `<p><a href="/artist/isaac-levitan"><strong>Isaac Levitan</strong></a> painted this vast landscape in 1894, showing a church perched on a cliff above a wide river. The <strong>dramatic sky</strong> dominates the composition, dwarfing the small building below.</p>
<p>The painting's title reflects its contemplative mood. Measuring 150 × 206 cm, it hangs at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow.</p>`,
      faqs: [
        { question: "Where is Above Eternal Peace?", answer: "This <strong>oil on canvas</strong> is at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow." },
        { question: "How big is Above Eternal Peace?", answer: "The painting measures <strong>150 × 206 cm</strong> (about 5 × 7 feet)." },
        { question: "Who painted Above Eternal Peace?", answer: "<a href=\"/artist/isaac-levitan\"><strong>Isaac Levitan</strong></a> created this work in <strong>1894</strong>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: above-eternal-peace");

  // 49. rembrandt-abraham-franz
  await prisma.artwork.update({
    where: { slug: 'rembrandt-abraham-franz' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this portrait of Abraham Franz, capturing the sitter's <strong>distinctive features</strong> with his characteristic warmth and psychological insight.</p>
<p>Rembrandt was the most prolific portraitist of the Dutch Golden Age. This work is at a museum in Paris.</p>`,
      faqs: [
        { question: "Who painted Abraham Franz?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this portrait study." },
        { question: "What style is this portrait?", answer: "This is a <strong>Dutch Golden Age</strong> portrait with Rembrandt's signature use of light and shadow." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-abraham-franz");

  // 50. gustave-dore-abraham-journeying-into-the-land-of-canaan
  await prisma.artwork.update({
    where: { slug: 'gustave-dore-abraham-journeying-into-the-land-of-canaan' },
    data: {
      description: `<p><a href="/artist/gustave-dore"><strong>Gustave Doré</strong></a> depicted the biblical patriarch Abraham leading his family and livestock into the promised land. The <strong>dramatic composition</strong> shows the caravan moving through a vast landscape.</p>
<p>Doré was famous for his biblical illustrations. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who created this biblical scene?", answer: "<a href=\"/artist/gustave-dore\"><strong>Gustave Doré</strong></a>, known for his dramatic biblical illustrations." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gustave-dore-abraham-journeying-into-the-land-of-canaan");

  // 51. joaquin-sorolla-academic-study-from-life
  await prisma.artwork.update({
    where: { slug: 'joaquin-sorolla-academic-study-from-life' },
    data: {
      description: `<p><a href="/artist/joaquin-sorolla"><strong>Joaquín Sorolla</strong></a> painted this figure study from a live model, likely during his academic training. The work demonstrates his command of <strong>anatomy and light</strong>.</p>
<p>Sorolla became known for his sun-drenched beach scenes. This early study is at the <a href="/museum/museu-de-belles-arts-de-val232ncia-valencia-spain"><strong>Museu de Belles Arts</strong></a> in Valencia.</p>`,
      faqs: [
        { question: "Where is this Sorolla study?", answer: "This work is at the <a href=\"/museum/museu-de-belles-arts-de-val232ncia-valencia-spain\"><strong>Museu de Belles Arts</strong></a> in Valencia, Spain." },
        { question: "Who painted this academic study?", answer: "<a href=\"/artist/joaquin-sorolla\"><strong>Joaquín Sorolla</strong></a>, the Spanish master of light." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: joaquin-sorolla-academic-study-from-life");

  // 52. jan-steen-action-proves-the-man
  await prisma.artwork.update({
    where: { slug: 'jan-steen-action-proves-the-man' },
    data: {
      description: `<p><a href="/artist/jan-steen"><strong>Jan Steen</strong></a> painted this moralizing scene illustrating the proverb "Action Proves the Man." The composition likely shows figures whose <strong>behavior reveals character</strong>, typical of Steen's genre paintings.</p>
<p>Steen was known for humorous morality scenes. This work is at the <a href="/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
      faqs: [
        { question: "Where can I see this Jan Steen painting?", answer: "This work is at the <a href=\"/museum/national-gallery-london-uk\"><strong>National Gallery</strong></a> in London." },
        { question: "Who painted Action Proves the Man?", answer: "<a href=\"/artist/jan-steen\"><strong>Jan Steen</strong></a>, the Dutch master of comic genre scenes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: jan-steen-action-proves-the-man");

  // 53. rembrandt-adam-and-eva
  await prisma.artwork.update({
    where: { slug: 'rembrandt-adam-and-eva' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the biblical first couple, Adam and Eva, in this work. The figures show his characteristic treatment of the <strong>human form</strong> with naturalistic detail.</p>
<p>Rembrandt often painted biblical subjects throughout his career. This painting is at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Where is Rembrandt's Adam and Eva?", answer: "This painting is at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a>." },
        { question: "Who painted this biblical scene?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this depiction of the first couple." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-adam-and-eva");

  // 54. rembrandt-adam-and-eve
  await prisma.artwork.update({
    where: { slug: 'rembrandt-adam-and-eve' },
    data: {
      description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this version of Adam and Eve, showing the couple in a moment from the Genesis narrative. His <strong>realistic approach</strong> to the human body was considered radical for religious subjects.</p>
<p>Rembrandt treated biblical themes with psychological depth. This work is at the <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
      faqs: [
        { question: "Where can I see this Adam and Eve?", answer: "This work is at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>." },
        { question: "Who made this Adam and Eve?", answer: "<a href=\"/artist/rembrandt\"><strong>Rembrandt van Rijn</strong></a> created this biblical scene." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: rembrandt-adam-and-eve");

  // 55. george-frederick-watts-adam-and-eve
  await prisma.artwork.update({
    where: { slug: 'george-frederick-watts-adam-and-eve' },
    data: {
      description: `<p><a href="/artist/george-frederick-watts"><strong>George Frederick Watts</strong></a> painted this interpretation of Adam and Eve. The Victorian artist approached the biblical subject with <strong>symbolic weight</strong> and painterly grandeur.</p>
<p>Watts was known for allegorical and mythological works. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this Adam and Eve?", answer: "<a href=\"/artist/george-frederick-watts\"><strong>George Frederick Watts</strong></a>, the Victorian allegorical painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: george-frederick-watts-adam-and-eve");

  // 56. lucas-cranach-elder-adam-and-eve-in-paradise
  await prisma.artwork.update({
    where: { slug: 'lucas-cranach-elder-adam-and-eve-in-paradise' },
    data: {
      description: `<p><a href="/artist/lucas-cranach-elder"><strong>Lucas Cranach the Elder</strong></a> painted this scene of Adam and Eve in the Garden of Eden. The couple stands amid lush <strong>paradise vegetation</strong>, surrounded by animals in the artist's distinctive Northern Renaissance style.</p>
<p>Cranach painted many versions of this subject. This work is at the <a href="/museum/israel-museum-jerusalem-israel"><strong>Israel Museum</strong></a> in Jerusalem.</p>`,
      faqs: [
        { question: "Where is Adam and Eve in Paradise?", answer: "This painting is at the <a href=\"/museum/israel-museum-jerusalem-israel\"><strong>Israel Museum</strong></a> in Jerusalem." },
        { question: "Who painted this paradise scene?", answer: "<a href=\"/artist/lucas-cranach-elder\"><strong>Lucas Cranach the Elder</strong></a>, the German Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: lucas-cranach-elder-adam-and-eve-in-paradise");

  // 57. jan-van-eyck-adam-from-the-left-wing-of-the-ghent-altarpiece
  await prisma.artwork.update({
    where: { slug: 'jan-van-eyck-adam-from-the-left-wing-of-the-ghent-altarpiece' },
    data: {
      description: `<p><a href="/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted this figure of Adam for the left wing of the Ghent Altarpiece. The <strong>nude figure</strong> stands in a niche, rendered with astonishing realism down to every detail of skin and hair.</p>
<p>The Ghent Altarpiece is one of the most important works of early Netherlandish art. Adam remains in situ at <a href="/museum/st-bavo-cathedral-ghent-belgium"><strong>St. Bavo Cathedral</strong></a> in Ghent.</p>`,
      faqs: [
        { question: "Where is this Van Eyck Adam?", answer: "This panel is part of the Ghent Altarpiece at <a href=\"/museum/st-bavo-cathedral-ghent-belgium\"><strong>St. Bavo Cathedral</strong></a> in Ghent, Belgium." },
        { question: "Who painted this Adam figure?", answer: "<a href=\"/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a> created this revolutionary realistic nude." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: jan-van-eyck-adam-from-the-left-wing-of-the-ghent-altarpiece");

  // 58. fra-angelico-adoration-and-annunciation
  await prisma.artwork.update({
    where: { slug: 'fra-angelico-adoration-and-annunciation' },
    data: {
      description: `<p><a href="/artist/fra-angelico"><strong>Fra Angelico</strong></a> combined scenes of the Adoration and Annunciation in this devotional work. His characteristic <strong>luminous colors</strong> and gold leaf create a heavenly atmosphere.</p>
<p>The Dominican friar created many such works for religious settings. This painting is at the <a href="/museum/basilica-di-san-marco-florence-italy"><strong>Basilica di San Marco</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Where is this Fra Angelico work?", answer: "This painting is at the <a href=\"/museum/basilica-di-san-marco-florence-italy\"><strong>Basilica di San Marco</strong></a> in Florence." },
        { question: "Who painted Adoration and Annunciation?", answer: "<a href=\"/artist/fra-angelico\"><strong>Fra Angelico</strong></a>, the painter-friar of the early Renaissance." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: fra-angelico-adoration-and-annunciation");

  // 59. robert-campin-adoration-of-shepherds
  await prisma.artwork.update({
    where: { slug: 'robert-campin-adoration-of-shepherds' },
    data: {
      description: `<p><a href="/artist/robert-campin"><strong>Robert Campin</strong></a> painted this Nativity scene showing shepherds gathered to worship the Christ Child. The <strong>humble setting</strong> is rendered with the detailed realism typical of early Netherlandish painting.</p>
<p>Campin was a pioneer of the Northern Renaissance style. This work is at the <a href="/museum/mus233e-des-beauxarts-de-dijon-dijon-france"><strong>Musée des Beaux-Arts</strong></a> in Dijon.</p>`,
      faqs: [
        { question: "Where is this Campin Nativity?", answer: "This painting is at the <a href=\"/museum/mus233e-des-beauxarts-de-dijon-dijon-france\"><strong>Musée des Beaux-Arts</strong></a> in Dijon, France." },
        { question: "Who painted Adoration of Shepherds?", answer: "<a href=\"/artist/robert-campin\"><strong>Robert Campin</strong></a>, a founder of early Netherlandish painting." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: robert-campin-adoration-of-shepherds");

  // 60. correggio-adoration-of-the-christ-child
  await prisma.artwork.update({
    where: { slug: 'correggio-adoration-of-the-christ-child' },
    data: {
      description: `<p><a href="/artist/correggio"><strong>Correggio</strong></a> painted this tender scene of the Virgin adoring the Christ Child. The infant radiates <strong>divine light</strong>, illuminating Mary's face in the artist's characteristic soft style.</p>
<p>Correggio was known for his graceful religious paintings. This work is at the <a href="/museum/palazzo-brera-milan-italy"><strong>Palazzo Brera</strong></a> in Milan.</p>`,
      faqs: [
        { question: "Where is this Correggio Nativity?", answer: "This painting is at the <a href=\"/museum/palazzo-brera-milan-italy\"><strong>Palazzo Brera</strong></a> in Milan, Italy." },
        { question: "Who painted Adoration of the Christ Child?", answer: "<a href=\"/artist/correggio\"><strong>Correggio</strong></a>, the Italian Renaissance master of grace and light." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: correggio-adoration-of-the-christ-child");

  // 61. diego-velazquez-adoration-of-the-kings
  await prisma.artwork.update({
    where: { slug: 'diego-velazquez-adoration-of-the-kings' },
    data: {
      description: `<p><a href="/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted this scene of the three Magi presenting gifts to the infant Christ. The figures are rendered with the <strong>naturalistic lighting</strong> and dignified presence characteristic of Velázquez's early work.</p>
<p>The painting demonstrates his emerging mastery of portraiture. It hangs at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
      faqs: [
        { question: "Where is Velázquez's Adoration of the Kings?", answer: "This painting is at the <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
        { question: "Who painted this Magi scene?", answer: "<a href=\"/artist/diego-velazquez\"><strong>Diego Velázquez</strong></a>, Spain's greatest Baroque master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: diego-velazquez-adoration-of-the-kings");

  // 62. perugino-adoration-of-the-kings-epiphany
  await prisma.artwork.update({
    where: { slug: 'perugino-adoration-of-the-kings-epiphany' },
    data: {
      description: `<p><a href="/artist/perugino"><strong>Perugino</strong></a> painted this Epiphany scene showing the three kings worshipping the newborn Christ. The composition features his characteristic <strong>serene figures</strong> and harmonious spatial arrangement.</p>
<p>Perugino was Raphael's teacher and a master of Umbrian painting. This work is at the <a href="/museum/national-gallery-of-umbria-palazzo-dei-priori-peru"><strong>National Gallery of Umbria</strong></a> in Perugia.</p>`,
      faqs: [
        { question: "Where is this Perugino altarpiece?", answer: "This painting is at the <a href=\"/museum/national-gallery-of-umbria-palazzo-dei-priori-peru\"><strong>National Gallery of Umbria</strong></a> in Perugia, Italy." },
        { question: "Who painted this Epiphany scene?", answer: "<a href=\"/artist/perugino\"><strong>Perugino</strong></a>, the Umbrian Renaissance master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: perugino-adoration-of-the-kings-epiphany");

  // 63. bernardino-luini-adoration-of-the-magi
  await prisma.artwork.update({
    where: { slug: 'bernardino-luini-adoration-of-the-magi' },
    data: {
      description: `<p><a href="/artist/bernardino-luini"><strong>Bernardino Luini</strong></a> painted this Adoration of the Magi in Leonardo da Vinci's <strong>soft, sfumato style</strong>. The three kings present their gifts amid a gathering of attendants and animals.</p>
<p>Luini was one of Leonardo's most faithful followers. This painting hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is this Luini painting?", answer: "This work is at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris." },
        { question: "Who painted this Adoration of the Magi?", answer: "<a href=\"/artist/bernardino-luini\"><strong>Bernardino Luini</strong></a>, a follower of Leonardo da Vinci." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: bernardino-luini-adoration-of-the-magi");

  // 64. fra-angelico-adoration-of-the-magi
  await prisma.artwork.update({
    where: { slug: 'fra-angelico-adoration-of-the-magi' },
    data: {
      description: `<p><a href="/artist/fra-angelico"><strong>Fra Angelico</strong></a> painted this scene of the Magi presenting gifts to the Christ Child. His characteristic <strong>luminous colors</strong> and gold details create a devotional atmosphere.</p>
<p>The Dominican friar created numerous versions of this subject. This work is at the <a href="/museum/abeggstiftung-bern-switzerland"><strong>Abegg-Stiftung</strong></a> in Bern.</p>`,
      faqs: [
        { question: "Where is this Fra Angelico painting?", answer: "This work is at the <a href=\"/museum/abeggstiftung-bern-switzerland\"><strong>Abegg-Stiftung</strong></a> in Bern, Switzerland." },
        { question: "Who painted this Adoration?", answer: "<a href=\"/artist/fra-angelico\"><strong>Fra Angelico</strong></a>, the painter-friar of the early Renaissance." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: fra-angelico-adoration-of-the-magi");

  // 65. gentile-da-fabriano-adoration-of-the-magi-altarpiece
  await prisma.artwork.update({
    where: { slug: 'gentile-da-fabriano-adoration-of-the-magi-altarpiece' },
    data: {
      description: `<p><a href="/artist/gentile-da-fabriano"><strong>Gentile da Fabriano</strong></a> created this lavish altarpiece depicting the Adoration of the Magi. The <strong>opulent costumes</strong> and gold leaf showcase the International Gothic style at its finest.</p>
<p>This is one of the most celebrated altarpieces of the early 15th century. It's at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Where is this famous altarpiece?", answer: "This work is at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, Italy." },
        { question: "Who painted this Magi altarpiece?", answer: "<a href=\"/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a>, master of the International Gothic style." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gentile-da-fabriano-adoration-of-the-magi-altarpiece");

  // 66. gentile-da-fabriano-adoration-of-the-magi-altarpiece-left-hand-predell
  await prisma.artwork.update({
    where: { slug: 'gentile-da-fabriano-adoration-of-the-magi-altarpiece-left-hand-predell' },
    data: {
      description: `<p><a href="/artist/gentile-da-fabriano"><strong>Gentile da Fabriano</strong></a> painted this Nativity scene as part of the predella (base panels) of his Adoration altarpiece. The <strong>intimate scale</strong> shows the birth of Christ with tender detail.</p>
<p>The predella panels remain with the main altarpiece at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence.</p>`,
      faqs: [
        { question: "Where is this predella panel?", answer: "This is at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence with the main altarpiece." },
        { question: "Who painted this Nativity panel?", answer: "<a href=\"/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> created this as part of his Strozzi Altarpiece." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gentile-da-fabriano-adoration-of-the-magi-altarpiece-left-hand-predell");

  // 67. gentile-da-fabriano-adoration-of-the-magi-from-the-strozzi-chapel-in-s
  await prisma.artwork.update({
    where: { slug: 'gentile-da-fabriano-adoration-of-the-magi-from-the-strozzi-chapel-in-s' },
    data: {
      description: `<p><a href="/artist/gentile-da-fabriano"><strong>Gentile da Fabriano</strong></a> painted this work for the Strozzi Chapel in Santa Trinita, Florence. The scene shows the <strong>Magi's procession</strong> with extraordinary richness and detail in the International Gothic manner.</p>
<p>The altarpiece was commissioned by the wealthy Strozzi family. It's now at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Strozzi altarpiece?", answer: "This work is at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence." },
        { question: "Who commissioned this painting?", answer: "The <strong>Strozzi family</strong> commissioned <a href=\"/artist/gentile-da-fabriano\"><strong>Gentile da Fabriano</strong></a> for their chapel in Santa Trinita." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gentile-da-fabriano-adoration-of-the-magi-from-the-strozzi-chapel-in-s");

  // 68. hans-memling-adoration-of-the-magi-whole-triptych
  await prisma.artwork.update({
    where: { slug: 'hans-memling-adoration-of-the-magi-whole-triptych' },
    data: {
      description: `<p><a href="/artist/hans-memling"><strong>Hans Memling</strong></a> created this triptych with the Adoration of the Magi as its central scene. The three panels display his <strong>refined technique</strong> and the calm devotion typical of Bruges painting.</p>
<p>Memling was one of the leading Netherlandish painters of his era. This triptych is at the <a href="/museum/museo-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid.</p>`,
      faqs: [
        { question: "Where is this Memling triptych?", answer: "This work is at the <a href=\"/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
        { question: "Who painted this Magi triptych?", answer: "<a href=\"/artist/hans-memling\"><strong>Hans Memling</strong></a>, a leading painter of the Bruges school." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: hans-memling-adoration-of-the-magi-whole-triptych");

  // 69. el-greco-adoration-of-the-shepherds
  await prisma.artwork.update({
    where: { slug: 'el-greco-adoration-of-the-shepherds' },
    data: {
      description: `<p><a href="/artist/el-greco"><strong>El Greco</strong></a> painted this dynamic Nativity scene with shepherds gathered around the Christ Child. The <strong>elongated figures</strong> and dramatic lighting are hallmarks of his distinctive style.</p>
<p>El Greco painted several versions of this subject. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this Adoration of the Shepherds?", answer: "<a href=\"/artist/el-greco\"><strong>El Greco</strong></a>, the Spanish master known for his visionary religious paintings." },
        { question: "Where is this El Greco painting?", answer: "This version is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: el-greco-adoration-of-the-shepherds");

  // 70. bartolome-murillo-adoration-of-the-shepherds
  await prisma.artwork.update({
    where: { slug: 'bartolome-murillo-adoration-of-the-shepherds' },
    data: {
      description: `<p><a href="/artist/bartolome-murillo"><strong>Bartolomé Murillo</strong></a> painted this tender scene of shepherds worshipping the newborn Christ. His <strong>soft brushwork</strong> and warm colors create an atmosphere of gentle devotion.</p>
<p>Murillo was Seville's most celebrated painter of religious subjects. This work is at the <a href="/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
      faqs: [
        { question: "Where is this Murillo Nativity?", answer: "This painting is at the <a href=\"/museum/hermitage-museum-saint-petersburg-russia\"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia." },
        { question: "Who painted this Adoration?", answer: "<a href=\"/artist/bartolome-murillo\"><strong>Bartolomé Murillo</strong></a>, the Spanish Baroque master." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: bartolome-murillo-adoration-of-the-shepherds");

  // 71. umberto-boccioni-adriana-bisi-fabbri
  await prisma.artwork.update({
    where: { slug: 'umberto-boccioni-adriana-bisi-fabbri' },
    data: {
      description: `<p><a href="/artist/umberto-boccioni"><strong>Umberto Boccioni</strong></a> painted this portrait of Adriana Bisi Fabbri. The subject's <strong>modern appearance</strong> is captured with the energetic brushwork of the Italian Futurist movement.</p>
<p>Boccioni was a leading figure of Futurism. This portrait is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted Adriana Bisi Fabbri?", answer: "<a href=\"/artist/umberto-boccioni\"><strong>Umberto Boccioni</strong></a>, the Italian Futurist painter and sculptor." },
        { question: "Where is this painting?", answer: "This portrait is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: umberto-boccioni-adriana-bisi-fabbri");

  // 72. peter-paul-rubens-aeneas-and-his-family-departing-from-troy
  await prisma.artwork.update({
    where: { slug: 'peter-paul-rubens-aeneas-and-his-family-departing-from-troy' },
    data: {
      description: `<p><a href="/artist/peter-paul-rubens"><strong>Peter Paul Rubens</strong></a> painted this scene from Virgil's Aeneid, showing the hero fleeing burning Troy with his elderly father and young son. The <strong>dramatic action</strong> and muscular figures are quintessentially Baroque.</p>
<p>Rubens frequently painted mythological subjects. This work is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted this Aeneas scene?", answer: "<a href=\"/artist/peter-paul-rubens\"><strong>Peter Paul Rubens</strong></a>, the Flemish Baroque master." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: peter-paul-rubens-aeneas-and-his-family-departing-from-troy");

  // 73. gustave-courbet-after-dinner-at-ornans
  await prisma.artwork.update({
    where: { slug: 'gustave-courbet-after-dinner-at-ornans' },
    data: {
      description: `<p><a href="/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted this intimate scene of men relaxing after dinner in his hometown of Ornans. The <strong>unidealized figures</strong> engage in quiet conversation and music, captured with Realist honesty.</p>
<p>This early work helped establish Courbet's reputation. It hangs at the <a href="/museum/palais-des-beauxarts-de-lille-lille-france"><strong>Palais des Beaux-Arts</strong></a> in Lille.</p>`,
      faqs: [
        { question: "Where is After Dinner at Ornans?", answer: "This painting is at the <a href=\"/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts</strong></a> in Lille, France." },
        { question: "Who painted this dinner scene?", answer: "<a href=\"/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a>, the founder of French Realism." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: gustave-courbet-after-dinner-at-ornans");

  // 74. edouard-vuillard-after-the-ball
  await prisma.artwork.update({
    where: { slug: 'edouard-vuillard-after-the-ball' },
    data: {
      description: `<p><a href="/artist/edouard-vuillard"><strong>Édouard Vuillard</strong></a> captured a moment after a ball, likely showing a woman in her <strong>intimate domestic space</strong>. His characteristic patterned surfaces and muted colors create a dreamy atmosphere.</p>
<p>Vuillard was a leading member of the Nabis group. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted After the Ball?", answer: "<a href=\"/artist/edouard-vuillard\"><strong>Édouard Vuillard</strong></a>, the French Intimist painter." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edouard-vuillard-after-the-ball");

  // 75. edgar-degas-after-the-bath
  await prisma.artwork.update({
    where: { slug: 'edgar-degas-after-the-bath' },
    data: {
      description: `<p><a href="/artist/edgar-degas"><strong>Edgar Degas</strong></a> created this pastel study of a woman drying herself after bathing in 1890. The <strong>intimate viewpoint</strong> and natural pose are characteristic of his late bather series.</p>
<p>Degas's bathers were controversial for their unidealized realism. This work is at the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "Where is this Degas pastel?", answer: "This work is at the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>." },
        { question: "What medium is After the Bath?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> created this in <strong>pastel</strong>, his preferred medium in later years." },
        { question: "When was this made?", answer: "Degas created this work in <strong>1890</strong>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: edgar-degas-after-the-bath");

  // 76. mary-cassatt-after-the-bullfight
  await prisma.artwork.update({
    where: { slug: 'mary-cassatt-after-the-bullfight' },
    data: {
      description: `<p><a href="/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted this scene capturing the aftermath of a bullfight, likely from her travels in Spain. The work shows figures in <strong>Spanish costume</strong> in her early Realist manner.</p>
<p>Cassatt later became known for her mother-and-child subjects. This work is at the <a href="/museum/art-institute-of-chicago-chicago-il-us-national-ga"><strong>Art Institute of Chicago</strong></a>.</p>`,
      faqs: [
        { question: "Where is After the Bullfight?", answer: "This painting is at the <a href=\"/museum/art-institute-of-chicago-chicago-il-us-national-ga\"><strong>Art Institute of Chicago</strong></a>." },
        { question: "Who painted this Spanish scene?", answer: "<a href=\"/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a>, the American Impressionist." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: mary-cassatt-after-the-bullfight");

  // 77. john-william-waterhouse-after-the-dance
  await prisma.artwork.update({
    where: { slug: 'john-william-waterhouse-after-the-dance' },
    data: {
      description: `<p><a href="/artist/john-william-waterhouse"><strong>John William Waterhouse</strong></a> painted this scene of a woman resting after a dance. Her <strong>flushed appearance</strong> and relaxed pose suggest the exhaustion of exertion.</p>
<p>Waterhouse combined Pre-Raphaelite detail with classical subjects. This painting is in a <strong>private collection</strong>.</p>`,
      faqs: [
        { question: "Who painted After the Dance?", answer: "<a href=\"/artist/john-william-waterhouse\"><strong>John William Waterhouse</strong></a>, the British painter of romantic and classical subjects." },
        { question: "Where is this painting?", answer: "This work is in a <strong>private collection</strong> and not publicly displayed." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: john-william-waterhouse-after-the-dance");

  // 78. adolph-menzel-afternoon-in-the-tuileries-gardens
  await prisma.artwork.update({
    where: { slug: 'adolph-menzel-afternoon-in-the-tuileries-gardens' },
    data: {
      description: `<p><a href="/artist/adolph-menzel"><strong>Adolph Menzel</strong></a> painted this view of Parisians enjoying an afternoon in the Tuileries Gardens. The <strong>flickering sunlight</strong> through trees illuminates the leisurely scene.</p>
<p>Menzel was Germany's leading Realist painter. This work hangs at the <a href="/museum/louvre"><strong>Louvre Museum</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Where is Afternoon in the Tuileries Gardens?", answer: "This painting is at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris." },
        { question: "Who painted this garden scene?", answer: "<a href=\"/artist/adolph-menzel\"><strong>Adolph Menzel</strong></a>, the German Realist painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: adolph-menzel-afternoon-in-the-tuileries-gardens");

  // 79. akseli-gallen-kallela-aino-myth-triptych
  await prisma.artwork.update({
    where: { slug: 'akseli-gallen-kallela-aino-myth-triptych' },
    data: {
      description: `<p><a href="/artist/akseli-gallen-kallela"><strong>Akseli Gallen-Kallela</strong></a> painted this triptych depicting the Aino myth from Finland's national epic, the Kalevala. The three panels show the maiden's <strong>tragic story</strong> of flight and drowning to escape an unwanted suitor.</p>
<p>Gallen-Kallela was Finland's most important national romantic painter. This triptych is at the <a href="/museum/ateneum-helsinki-finland"><strong>Ateneum</strong></a> in Helsinki.</p>`,
      faqs: [
        { question: "Where is the Aino Myth Triptych?", answer: "This work is at the <a href=\"/museum/ateneum-helsinki-finland\"><strong>Ateneum</strong></a> in Helsinki, Finland." },
        { question: "Who painted this Finnish myth?", answer: "<a href=\"/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a>, Finland's leading national romantic artist." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: akseli-gallen-kallela-aino-myth-triptych");

  // 80. albrecht-durer-albrecht-durer-the-elder
  await prisma.artwork.update({
    where: { slug: 'albrecht-durer-albrecht-durer-the-elder' },
    data: {
      description: `<p><a href="/artist/albrecht-durer"><strong>Albrecht Dürer</strong></a> drew this portrait of his father, Albrecht Dürer the Elder, a goldsmith from Hungary. The <strong>detailed silverpoint</strong> technique captures the elder Dürer's weathered features with loving precision.</p>
<p>This intimate family portrait shows Dürer's draftsmanship at its finest. The drawing is at the <a href="/museum/albertina-vienna-austria"><strong>Albertina</strong></a> in Vienna.</p>`,
      faqs: [
        { question: "Where is this Dürer portrait?", answer: "This drawing is at the <a href=\"/museum/albertina-vienna-austria\"><strong>Albertina</strong></a> in Vienna, Austria." },
        { question: "Who drew this portrait?", answer: "<a href=\"/artist/albrecht-durer\"><strong>Albrecht Dürer</strong></a> drew his father, the goldsmith Albrecht Dürer the Elder." }
      ],
      updatedAt: new Date()
    }
  });
  console.log("Updated: albrecht-durer-albrecht-durer-the-elder");

  console.log("\n✓ All 80 artworks updated successfully!");
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
