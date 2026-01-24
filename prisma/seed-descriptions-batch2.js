const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'wasserschlangen-ii-klimt',
    description: `<p><a href="/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created Wasserschlangen II (Water Serpents II) between 1904 and 1907, one of the defining works of his celebrated <strong>Golden Phase</strong>. The painting depicts two sensuous female figures intertwined in a dreamlike underwater realm, their bodies merging with serpents amid flowing hair and ornate jewelry. Klimt combined oil paint with <strong>gold and silver leaf</strong> on canvas, creating a luminous surface that shimmers like precious metalwork.</p>
<p>The composition explores themes of transformation, sensuality, and the subconscious through mythological water-dwelling figures. Klimt's ability to address taboo subjects through allegorical treatment made him a central figure in the <a href="/movement/vienna-secession"><strong>Vienna Secession</strong></a>, the movement that broke from academic tradition to embrace decorative arts and symbolism.</p>
<p>The painting belonged to Jewish collector Jenny Steiner until the Nazis confiscated it when she fled Vienna in 1938. After decades in various collections, Russian billionaire Dmitry Rybolovlev acquired it in 2013 for <strong>$183.8 million</strong>, making it the most expensive Klimt ever sold. The work stands as a landmark of <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>Art Nouveau luxury</strong></a> and early modernist experimentation.</p>`,
    faqs: [
      {
        question: "What does Wasserschlangen II depict?",
        answer: "The painting shows <strong>two intertwined women</strong> in a mystical underwater setting, their bodies merging with serpents amid flowing hair and jewelry. The water serpent imagery symbolizes transformation, rebirth, and the depths of the subconscious."
      },
      {
        question: "What technique did Klimt use?",
        answer: "Klimt combined <strong>oil paint with gold and silver leaf</strong> on canvas, layering translucent glazes over metallic surfaces. This mixed-media approach created luminous, jewel-like effects characteristic of his <a href=\"/movement/vienna-secession\"><strong>Vienna Secession</strong></a> work."
      },
      {
        question: "Why is this painting so valuable?",
        answer: "At $183.8 million, it's the <strong>most expensive Klimt</strong> ever sold. Its value reflects the artist's pivotal role in Art Nouveau, the innovative gold-leaf technique, and its dramatic history as Nazi-looted art later recovered."
      }
    ]
  },
  {
    slug: 'pendant-portraits-rembrandt',
    description: `<p><a href="/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted these full-length wedding portraits in 1634 to commemorate the marriage of Maerten Soolmans and Oopjen Coppit, two members of Amsterdam's wealthy merchant class. Each canvas measures over two meters tall, presenting the couple in <strong>lavish black silk</strong> with intricate lace collars and cuffs befitting their status during the Dutch Golden Age.</p>
<p>These are Rembrandt's only known <strong>full-length pendant portraits</strong>, a format typically reserved for European royalty and Flemish nobility. The young couple's choice to commission such grand paintings reflects their ambitions during an era of unprecedented Dutch prosperity. Rembrandt was just 28 years old, already establishing himself as Amsterdam's most sought-after portrait painter.</p>
<p>The portraits remained together in family hands for over two centuries before entering the Rothschild collection in 1877. In 2015, France and the Netherlands made history with a <strong>joint acquisition for 160 million euros</strong>, each country contributing half. Today the paintings alternate between the <a href="/museum/louvre"><strong>Louvre</strong></a> and <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> under an agreement that they can never be separated.</p>`,
    faqs: [
      {
        question: "Why are these portraits so valuable?",
        answer: "At <strong>160 million euros</strong>, they set a record for Rembrandt works. They're his only full-length pendant portraits, a format he rarely attempted, and they represent the peak of Dutch Golden Age portraiture."
      },
      {
        question: "How do the Louvre and Rijksmuseum share them?",
        answer: "France and the Netherlands each <strong>own one painting</strong> but agreed they must always be exhibited together. The portraits alternate between museums on a rotating schedule, honoring both nations' cultural heritage."
      },
      {
        question: "Who were Maerten Soolmans and Oopjen Coppit?",
        answer: "They were <strong>wealthy Amsterdam merchants</strong> who married in 1633. Their choice of full-length portraits, typically reserved for royalty, signaled their ambitions among the Dutch elite during the Golden Age."
      }
    ]
  },
  {
    slug: 'les-femmes-dalger-version-o',
    description: `<p><a href="/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> completed Les Femmes d'Alger (Version O) in February 1955, the final and largest painting in a series of 15 works inspired by <a href="/artist/eugene-delacroix"><strong>Delacroix's</strong></a> 1834 masterpiece. The canvas explodes with <strong>fragmented female forms</strong> rendered in vivid reds, blues, and yellows, the figures' bodies deconstructed into geometric planes that fold and overlap throughout the composition.</p>
<p>Picasso created the series just weeks after Henri Matisse died in December 1954, later saying Matisse had left his odalisques to him as a legacy. The timing also coincided with the start of the <strong>Algerian War of Independence</strong>, lending political undertones to these reimagined harem scenes. At 44 by 57 inches, Version O stands as the culmination of Picasso's dialogue with art history through his <a href="/movement/cubism"><strong>Cubist</strong></a> lens.</p>
<p>In May 2015, the painting sold at Christie's New York for <strong>$179.4 million</strong>, setting the world auction record at that time. Hamad bin Jassim bin Jaber Al Thani, former Prime Minister of Qatar, acquired it. The sale demonstrated the enduring market dominance of Picasso's work and the series' significance in his late career.</p>`,
    faqs: [
      {
        question: "Why did Picasso paint this series?",
        answer: "Picasso created the 15-painting series as a <strong>tribute to Delacroix</strong> and Matisse, who died in 1954. He reinterpreted Delacroix's 1834 harem scene through <a href=\"/movement/cubism\"><strong>Cubist</strong></a> fragmentation while Matisse's odalisques influenced the sensual subject matter."
      },
      {
        question: "What makes Version O special?",
        answer: "Version O is the <strong>largest and final</strong> painting in the series of 15, representing Picasso's ultimate statement on the theme. Its vibrant colors and complex fragmentation summarize months of artistic exploration."
      },
      {
        question: "Why is it so valuable?",
        answer: "The <strong>$179.4 million</strong> price reflects Picasso's status as the 20th century's most collected artist, the painting's role as the series culmination, and its monumental size compared to the other 14 versions."
      }
    ]
  },
  {
    slug: 'nu-couche-modigliani-1917',
    description: `<p><a href="/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted Nu Couché (Reclining Nude) in 1917, depicting a woman stretched across a crimson couch with a blue cushion. Her body twists with the <strong>elongated proportions</strong> characteristic of Modigliani's style, influenced by African sculpture and Italian Renaissance Mannerism. The figure gazes directly at the viewer with the artist's signature almond-shaped blank eyes.</p>
<p>When Modigliani exhibited these nudes at Galerie Berthe Weill in Paris in December 1917, police <strong>shut down the show</strong> on opening day. The stated offense was the frank depiction of pubic hair, visible to passersby from the street. It was Modigliani's only solo exhibition during his lifetime, and the scandal cemented his reputation as a provocateur.</p>
<p>The painting sold at Christie's New York in November 2015 for <strong>$170.4 million</strong>, the second-highest auction price ever at that time. Chinese billionaire Liu Yiqian acquired it for the <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>Long Museum</strong></a> in Shanghai, reportedly inspired by a film about Modigliani's tragic life. The artist died of tubercular meningitis in 1920 at age 35.</p>`,
    faqs: [
      {
        question: "Why was the 1917 exhibition controversial?",
        answer: "Police <strong>closed the show on opening day</strong> because Modigliani's nudes were visible from the street and depicted pubic hair, considered obscene in 1917 Paris. It was his only solo exhibition during his lifetime."
      },
      {
        question: "What makes Modigliani's style distinctive?",
        answer: "His figures feature <strong>elongated necks and faces</strong>, almond-shaped blank eyes, and mask-like simplicity. Influenced by African sculpture and Italian Mannerism, his portraits are unmistakably his while remaining deeply individual."
      },
      {
        question: "Where can I see Nu Couché today?",
        answer: "The painting is housed at the <strong>Long Museum West Bund</strong> in Shanghai, China. Billionaire Liu Yiqian purchased it in 2015 for his private museum, one of China's largest art institutions."
      }
    ]
  },
  {
    slug: 'masterpiece-lichtenstein',
    description: `<p><a href="/artist/roy-lichtenstein"><strong>Roy Lichtenstein</strong></a> painted Masterpiece in 1962, the same year he had his first New York exhibition at Leo Castelli Gallery. The 54-inch square canvas depicts a blonde woman gazing at a painting held by a man named Brad, her speech bubble declaring: <strong>"Why, Brad darling, this painting is a masterpiece! My, soon you'll have all of New York clamoring for your work!"</strong></p>
<p>The irony was not lost on collectors. Lichtenstein's career exploded that year, and the painting became a self-fulfilling prophecy. He rendered the comic book scene with his signature <strong>Ben-Day dots</strong>, the mechanical printing technique he hand-painted to blur the line between commercial illustration and fine art. The flat colors and bold outlines transformed lowbrow source material into <a href="/movement/pop-art"><strong>Pop Art</strong></a> commentary.</p>
<p>Collector Agnes Gund kept the painting in her Upper East Side apartment for years before selling it in 2017 for <strong>$165 million</strong> to hedge fund manager Steven A. Cohen. Gund used the proceeds to establish the Art for Justice Fund, supporting criminal justice reform. The sale ranked among the fifteen highest prices ever paid for an artwork.</p>`,
    faqs: [
      {
        question: "What does the text in this painting say?",
        answer: "The speech bubble reads: <strong>\"Why, Brad darling, this painting is a masterpiece!\"</strong> followed by \"My, soon you'll have all of New York clamoring for your work!\" The tongue-in-cheek dialogue predicted Lichtenstein's own success."
      },
      {
        question: "What are Ben-Day dots?",
        answer: "Ben-Day dots are a <strong>commercial printing technique</strong> using colored dots to create shading and tones. Lichtenstein hand-painted these dots to mimic mass-produced comics, questioning boundaries between high art and popular culture."
      },
      {
        question: "Why is Masterpiece significant in Pop Art?",
        answer: "Created in 1962, the same year as Lichtenstein's breakthrough show, it perfectly demonstrates how <a href=\"/movement/pop-art\"><strong>Pop Art</strong></a> elevated commercial imagery to fine art while commenting on artistic fame and success."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Artwork Descriptions - Batch 2 ===\n');

  let updated = 0;
  let skipped = 0;

  for (const update of artworkUpdates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: update.slug }
    });

    if (!artwork) {
      console.log(`Skipped (not found): ${update.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        description: update.description,
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${artwork.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
