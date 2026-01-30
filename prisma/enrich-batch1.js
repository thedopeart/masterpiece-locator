const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichments = {
  // TIER 1
  'rosie-riveter-rockwell-crystal': {
    description: `<p><strong>Norman Rockwell</strong> painted this iconic image for the cover of <em>The Saturday Evening Post</em> on May 29, 1943. A muscular woman in denim and goggles rests her riveting gun across her lap while eating a sandwich, her penny loafers propped on a copy of Hitler's <em>Mein Kampf</em>. Rockwell modeled her pose after <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> prophet Isaiah from the Sistine Ceiling.</p><p>The painting became a symbol of <strong>women's wartime labor</strong>, though Rockwell's Rosie is distinct from the "We Can Do It!" poster often confused with her. His version shows real grit: paint-smudged arms, a worn lunch pail, and an American flag backdrop. The model was 19-year-old telephone operator Mary Doyle Keefe, whom Rockwell paid $10 for the sitting.</p><p>Rockwell later felt he'd made Rosie too masculine and apologized to Keefe. The painting sold privately for years before <a href="/apps/masterpieces/museum/crystal-bridges"><strong>Crystal Bridges Museum of American Art</strong></a> in Bentonville, Arkansas acquired it in 2002 for nearly $5 million.</p>`,
    faqs: [
      { question: "Where can I see Rosie the Riveter?", answer: "Rockwell's Rosie the Riveter hangs at <a href=\"/apps/masterpieces/museum/crystal-bridges\"><strong>Crystal Bridges Museum of American Art</strong></a> in Bentonville, Arkansas. The museum acquired it in 2002." },
      { question: "Who modeled for Rosie?", answer: "<strong>Mary Doyle Keefe</strong>, a 19-year-old telephone operator from Arlington, Vermont, posed for Rockwell. He paid her $10. She later said she was much slimmer than the muscular figure he painted." },
      { question: "Is this the same as the 'We Can Do It' poster?", answer: "No. Rockwell's painting and J. Howard Miller's <strong>\"We Can Do It!\"</strong> poster are different works. Miller's bandana-wearing woman was a factory morale poster, while Rockwell's appeared on the <em>Saturday Evening Post</em> cover." },
      { question: "What inspired the pose?", answer: "Rockwell borrowed the pose from <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo's</strong></a> prophet <strong>Isaiah</strong> on the Sistine Chapel ceiling. He often referenced Old Master compositions in his popular illustrations." }
    ]
  },

  // TIER 2
  'monet-water-lilies-kansas': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this Water Lilies canvas in 1906 as part of his decades-long obsession with his garden pond at Giverny. The surface fills the entire composition: no horizon, no sky, just <strong>floating lily pads and reflected clouds</strong> dissolving into shimmering color.</p><p>By this period, Monet had eliminated the Japanese bridge and shoreline from his compositions. The water itself became his entire subject. He worked on multiple canvases simultaneously, switching between them as the light changed throughout the day. This approach let him capture fleeting atmospheric effects with an almost scientific dedication to observation.</p><p>The painting hangs at the <a href="/apps/masterpieces/museum/nelson-atkins-museum-of-art"><strong>Nelson-Atkins Museum of Art</strong></a> in Kansas City, one of several Water Lilies held by American museums. Monet produced roughly <strong>250 water lily paintings</strong> over the last 30 years of his life, making it the longest sustained series by any <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painter.</p>`,
    faqs: [
      { question: "Where can I see this Water Lilies?", answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/nelson-atkins-museum-of-art\"><strong>Nelson-Atkins Museum of Art</strong></a> in Kansas City, Missouri. The museum holds several <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> works." },
      { question: "How many Water Lilies paintings exist?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted approximately <strong>250 water lily canvases</strong> between 1896 and his death in 1926. They're scattered across major museums worldwide." },
      { question: "What garden is depicted?", answer: "Monet painted his own <strong>water garden at Giverny</strong>, about 50 miles northwest of Paris. He designed the pond, planted the lilies, and hired a gardener to maintain them specifically for painting." }
    ]
  },
  'boulevard-des-capucines-monet-nelson': {
    description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted this bustling Parisian boulevard in 1873, looking down from photographer Nadar's studio on the second floor. Tiny figures crowd the tree-lined street below, rendered as <strong>quick dabs of dark paint</strong> against the pale winter pavement. The bare trees frame the scene like a stage set.</p><p>This is one of two versions Monet made from the same vantage point. He showed the other at the first <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> exhibition in 1874, where critic Louis Leroy mocked the group's loose brushwork. The painting captures the energy of Haussmann's modern Paris: wide boulevards, moving carriages, and anonymous crowds seen from above.</p><p>This version belongs to the <a href="/apps/masterpieces/museum/nelson-atkins-museum-of-art"><strong>Nelson-Atkins Museum of Art</strong></a> in Kansas City. The other hangs in Moscow's Pushkin Museum. Together they show how Monet could paint the same scene twice and produce two distinct impressions of a single moment.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/nelson-atkins-museum-of-art\"><strong>Nelson-Atkins Museum of Art</strong></a> in Kansas City. The other version is at the <a href=\"/apps/masterpieces/museum/pushkin-museum\"><strong>Pushkin Museum</strong></a> in Moscow." },
      { question: "Where was Monet standing when he painted this?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> painted from <strong>photographer Nadar's studio</strong> on the second floor of 35 Boulevard des Capucines. The elevated view gives the scene its distinctive bird's-eye perspective." },
      { question: "Why is this painting historically important?", answer: "The other version was shown at the <strong>first Impressionist exhibition in 1874</strong>. Critics attacked its sketchy brushwork, but it demonstrated <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism's</strong></a> radical approach to capturing modern city life." }
    ]
  },
  'hopper-early-sunday-morning-whitney': {
    description: `<p><strong>Edward Hopper</strong> painted this quiet New York streetscape in 1930, showing a row of storefronts on Seventh Avenue bathed in low morning sunlight. The sharp horizontal of the building facade stretches across the canvas. <strong>Every window blind is drawn.</strong> A barber pole and fire hydrant are the only vertical interruptions. Nobody is visible.</p><p>Hopper originally included a figure in an upper window but painted it out, deciding the emptiness was more powerful. The result captures something specific about American cities: that eerie stillness before a neighborhood wakes up. The long shadows and warm brick tones suggest summer. It's early. The street belongs to the light.</p><p>The painting hangs at the <a href="/apps/masterpieces/museum/whitney-museum"><strong>Whitney Museum of American Art</strong></a> in New York, where Hopper's work forms a cornerstone of the collection. His wife Jo donated over 3,000 of his works to the Whitney after his death in 1967.</p>`,
    faqs: [
      { question: "Where can I see Early Sunday Morning?", answer: "It hangs at the <a href=\"/apps/masterpieces/museum/whitney-museum\"><strong>Whitney Museum of American Art</strong></a> in Manhattan's Meatpacking District. The Whitney holds the world's largest collection of Hopper's work." },
      { question: "What street is depicted?", answer: "Hopper based the scene on <strong>Seventh Avenue near his Washington Square studio</strong> in Greenwich Village. He simplified the architecture and removed signage to create a more universal image of urban emptiness." },
      { question: "Why did Hopper remove the figure?", answer: "Hopper originally painted <strong>a figure in an upper window</strong> but removed it. He felt the complete absence of people made the stillness more powerful, a choice that defines the painting's lonely mood." }
    ]
  },
  'cezanne-mont-sainte-victoire-baltimore': {
    description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted Mont Sainte-Victoire dozens of times across three decades, studying how the Provençal mountain changed with light, season, and distance. This 1887 version shows the peak rising above the <strong>Arc River valley</strong>, framed by a distinctive pine tree arching across the upper left.</p><p>Cézanne built the landscape from patches of color laid side by side, letting brushstrokes remain visible as structural elements. He didn't blend them into smooth gradients the way academic painters did. Each stroke carries weight. The mountain, sky, and fields hold together through color relationships rather than drawn outlines.</p><p>This canvas belongs to the <a href="/apps/masterpieces/museum/baltimore-museum-of-art"><strong>Baltimore Museum of Art</strong></a>. The Cone Collection, assembled by Baltimore sisters Claribel and Etta Cone, brought this and other major works to the city. Cézanne's obsessive return to this single mountain helped lay the groundwork for <strong>Cubism</strong> and modern abstraction.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "This version is at the <a href=\"/apps/masterpieces/museum/baltimore-museum-of-art\"><strong>Baltimore Museum of Art</strong></a>, part of the Cone Collection. Other Mont Sainte-Victoire paintings are in the Courtauld, Met, and Philadelphia Museum." },
      { question: "How many times did Cézanne paint this mountain?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted <strong>Mont Sainte-Victoire over 80 times</strong> in oils and watercolors between the 1870s and his death in 1906. It became the defining subject of his late career." },
      { question: "Where is Mont Sainte-Victoire?", answer: "<strong>Mont Sainte-Victoire</strong> rises east of Aix-en-Provence in southern France. Cézanne could see it from his studio at Les Lauves, and he hiked its slopes regularly while painting." }
    ]
  },
  'cezanne-card-players-houston': {
    description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted five versions of The Card Players between 1890 and 1895, each progressively simpler. This version shows <strong>two men facing each other across a small table</strong>, absorbed in their game. A wine bottle sits between them like an axis. The composition is stripped to its essentials.</p><p>Cézanne used local farmworkers from his family's estate near Aix-en-Provence as models. He posed them in the studio, sometimes for over a hundred sessions per painting. The men's heavy coats and hats create blocky, almost sculptural forms. Their concentration is absolute. Nothing is decorative or anecdotal.</p><p>This version hangs at the <a href="/apps/masterpieces/museum/museum-of-fine-arts-houston"><strong>Museum of Fine Arts, Houston</strong></a>. Another version, sold privately to the Qatar royal family in 2011 for a reported <strong>$250 million</strong>, was at the time the most expensive painting ever sold.</p>`,
    faqs: [
      { question: "Where can I see this Card Players?", answer: "This version hangs at the <a href=\"/apps/masterpieces/museum/museum-of-fine-arts-houston\"><strong>Museum of Fine Arts, Houston</strong></a>. Other versions are in the Musée d'Orsay, Courtauld Gallery, Met, and a private collection." },
      { question: "How many versions exist?", answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> painted <strong>five versions</strong> of The Card Players between 1890 and 1895. They range from five figures down to two, becoming more concentrated with each version." },
      { question: "Who are the card players?", answer: "Cézanne used <strong>local farmworkers</strong> from the Jas de Bouffan, his family's estate near Aix-en-Provence. He posed them in his studio over many long sessions, treating them with the same gravity as a historical subject." }
    ]
  },
  'three-flags-johns-whitney': {
    description: `<p><strong>Jasper Johns</strong> created Three Flags in 1958 using his signature technique of <strong>encaustic (pigmented hot wax) over newspaper collage</strong> on canvas. Three American flags are stacked in decreasing size, the smallest projecting outward from the surface. The result is both flat and three-dimensional, a painting that's also a relief sculpture.</p><p>Johns chose the flag because it's already flat and two-dimensional: a ready-made design that let him focus on the act of painting itself rather than depicting something from life. By repeating and scaling it, he turned a patriotic symbol into a formal problem about surface, depth, and perception.</p><p>The painting hangs at the <a href="/apps/masterpieces/museum/whitney-museum"><strong>Whitney Museum of American Art</strong></a>. The Whitney purchased it in 1980 for $1 million, then a record for a living American artist. Johns's flags, targets, and numbers helped launch <strong>Pop Art</strong> and challenged Abstract Expressionism's dominance in the late 1950s.</p>`,
    faqs: [
      { question: "Where can I see Three Flags?", answer: "It's at the <a href=\"/apps/masterpieces/museum/whitney-museum\"><strong>Whitney Museum of American Art</strong></a> in New York. The Whitney paid $1 million in 1980, a record at the time for a living American artist." },
      { question: "What technique did Johns use?", answer: "Johns used <strong>encaustic</strong>, a technique mixing pigment with hot wax, over collaged newspaper. The wax dries almost instantly, preserving each brushstroke's texture and creating a rich, layered surface." },
      { question: "Why is this painting important?", answer: "Three Flags helped bridge <strong>Abstract Expressionism and Pop Art</strong>. By painting a familiar, flat symbol rather than expressing inner emotions, Johns challenged the art world's assumptions about what painting could be." }
    ]
  },
  'kindred-spirits-durand-crystal': {
    description: `<p><strong>Asher B. Durand</strong> painted Kindred Spirits in 1849 as a tribute to his friend <strong>Thomas Cole</strong>, founder of the Hudson River School, who had died the previous year. The painting shows Cole and poet William Cullen Bryant standing on a rocky ledge in the Catskill Mountains, surrounded by golden autumn foliage and a waterfall cascading below.</p><p>The title comes from a Keats sonnet and captures the Romantic idea that nature, poetry, and painting spring from the same source. Durand placed the two men in conversation within a landscape that feels both real and idealized: every leaf is observed, but the composition is arranged like a cathedral nave with trees forming the arches.</p><p>The painting hung in the New York Public Library for over a century before <a href="/apps/masterpieces/museum/crystal-bridges"><strong>Crystal Bridges Museum of American Art</strong></a> in Bentonville, Arkansas purchased it in 2005 for <strong>$35 million</strong>. It's one of the most important <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> landscapes in American art.</p>`,
    faqs: [
      { question: "Where can I see Kindred Spirits?", answer: "It hangs at <a href=\"/apps/masterpieces/museum/crystal-bridges\"><strong>Crystal Bridges Museum of American Art</strong></a> in Bentonville, Arkansas. Crystal Bridges purchased it in 2005 for $35 million from the New York Public Library." },
      { question: "Who are the two figures?", answer: "The figures are painter <strong>Thomas Cole</strong> and poet <strong>William Cullen Bryant</strong>, both champions of American wilderness. Durand painted it as a memorial after Cole's death in 1848." },
      { question: "What landscape is shown?", answer: "The scene depicts the <strong>Catskill Mountains</strong> in upstate New York, the spiritual home of the Hudson River School. Durand combined elements from multiple locations into one idealized <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> composition." }
    ]
  },

  // TIER 3 (2 notable ones)
  'nebamun-hunting-fowling': {
    description: `<p>This fragment from the <strong>Tomb of Nebamun</strong> (c. 1350 BC) shows an Egyptian official hunting birds in the papyrus marshes of the Nile. Nebamun stands on a small boat, holding three herons in one hand while his cat catches birds mid-flight. His wife and daughter accompany him, dressed in fine linen and heavy jewelry.</p><p>The scene bursts with life in ways unusual for Egyptian tomb painting. The <strong>cat's tabby markings</strong>, the fish in the water, the butterflies above the reeds: every detail is observed with care. The composition follows Egyptian conventions (figures shown in profile, important people larger) but the energy and color feel modern.</p><p>These paintings were hacked from the tomb wall around 1820 and sold to the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in London, where they remain among the most famous examples of ancient Egyptian art. The tomb's exact location in the Theban necropolis has been lost.</p>`,
    faqs: [
      { question: "Where can I see this painting?", answer: "The Nebamun tomb paintings are at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. They've been displayed there since the 1820s and are among the museum's most popular objects." },
      { question: "Who was Nebamun?", answer: "<strong>Nebamun</strong> was an Egyptian grain counter and scribe who served in the temple of Amun at Thebes around 1350 BC. His tomb paintings depict the pleasures he hoped to enjoy in the afterlife." },
      { question: "Why is the cat significant?", answer: "The <strong>hunting cat</strong> is one of the most famous animal depictions in ancient art. It likely represents both a real pet and a symbol of the sun god Ra defeating the serpent of chaos." }
    ]
  },
  'gayer-anderson-cat': {
    description: `<p>The <strong>Gayer-Anderson Cat</strong> is a bronze sculpture from ancient Egypt, dating to around 600 BC during the Late Period. The cat sits upright in a regal pose, wearing a <strong>gold nose ring and silver protective wedjat (Eye of Horus) pectoral</strong>. Gold earrings once decorated its pierced ears. The sleek, idealized form captures the elegance Egyptians saw in cats as sacred to the goddess Bastet.</p><p>The sculpture takes its name from Major Robert Grenville Gayer-Anderson, a British army officer who collected it in Egypt and donated it to the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in 1939. It's become one of the museum's most recognizable objects, reproduced on everything from postcards to jewelry.</p><p>Ancient Egyptians revered cats as protectors of the home and embodiments of <strong>Bastet, goddess of fertility and the hearth</strong>. Thousands of cat mummies have been found in Egyptian cemeteries, and harming a cat was a serious crime. This bronze represents the finest expression of that devotion.</p>`,
    faqs: [
      { question: "Where can I see the Gayer-Anderson Cat?", answer: "It's displayed at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London, Room 4 (Egyptian Sculpture Gallery). It's one of the museum's most iconic and photographed objects." },
      { question: "What goddess is the cat connected to?", answer: "The cat represents <strong>Bastet</strong>, the Egyptian goddess of home, fertility, and protection. By the Late Period, Bastet was specifically associated with domestic cats and widely worshipped across Egypt." },
      { question: "Who was Gayer-Anderson?", answer: "<strong>Major R.G. Gayer-Anderson</strong> was a British army officer and collector who acquired the bronze in Egypt. He donated it to the British Museum in 1939. His Cairo house is now also a museum." }
    ]
  }
};

async function seed() {
  for (const [slug, data] of Object.entries(enrichments)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ ${slug}: description + ${data.faqs.length} FAQs`);
    } catch (err) { console.error(`✗ Failed: ${slug} - ${err.message}`); }
  }
  await prisma.$disconnect();
}
seed();
