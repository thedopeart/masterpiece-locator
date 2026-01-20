const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const updates = [
    {
      slug: 'cheat-ace-clubs',
      faqs: [
        {
          question: "Where can I see The Cheat with the Ace of Clubs?",
          answer: "This painting is on display at the <a href=\"/museum/kimbell-art-museum\"><strong>Kimbell Art Museum</strong></a> in Fort Worth, Texas. The museum houses an impressive collection of European masterpieces."
        },
        {
          question: "Who painted The Cheat with the Ace of Clubs?",
          answer: "<a href=\"/artist/georges-de-la-tour\"><strong>Georges de La Tour</strong></a> created this work around 1635. The French Baroque painter was forgotten for centuries before his rediscovery in the 20th century."
        },
        {
          question: "What is depicted in The Cheat with the Ace of Clubs?",
          answer: "Four figures gather at a card table. A wealthy young man is being swindled by three conspirators. The cheat hides an ace behind his back while a courtesan and maid distract the victim."
        },
        {
          question: "Why is The Cheat with the Ace of Clubs famous?",
          answer: "The painting is a masterful morality tale about <strong>deception and naivety</strong>. La Tour captures the psychological tension between the conspirators through subtle glances and gestures."
        }
      ]
    },
    {
      slug: 'the-childs-bath',
      faqs: [
        {
          question: "Where is The Child's Bath displayed?",
          answer: "You can view this painting at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. It's one of the most beloved works in the museum's American art collection."
        },
        {
          question: "Who painted The Child's Bath?",
          answer: "<a href=\"/artist/mary-cassatt\"><strong>Mary Cassatt</strong></a> painted this work in 1893. She was the only American artist invited to exhibit with the French <a href=\"/movement/impressionism\"><strong>Impressionists</strong></a>."
        },
        {
          question: "What does The Child's Bath depict?",
          answer: "A mother washes her young child's feet in a basin. Cassatt captures an intimate domestic moment with the <strong>tenderness</strong> she brought to her many paintings of mothers and children."
        },
        {
          question: "What style is The Child's Bath?",
          answer: "The painting reflects <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> with influence from Japanese woodblock prints. The elevated viewpoint and bold patterns show Cassatt's modern approach to composition."
        }
      ]
    },
    {
      slug: 'the-city-leger',
      faqs: [
        {
          question: "Where can I see Fernand Léger's The City?",
          answer: "This painting is held at the <a href=\"/museum/philadelphia-museum-of-art\"><strong>Philadelphia Museum of Art</strong></a>. The museum's modern art collection provides excellent context for understanding Léger's vision."
        },
        {
          question: "Who created The City?",
          answer: "<a href=\"/artist/fernand-leger\"><strong>Fernand Léger</strong></a> painted this work in 1919. The French artist developed his distinctive <strong>tubular</strong> style influenced by Cubism and modern machinery."
        },
        {
          question: "What does The City represent?",
          answer: "Léger depicts the energy and fragmentation of modern <strong>urban life</strong>. Geometric forms, bold primary colors, and mechanical shapes capture the dynamism of post-war Paris."
        }
      ]
    },
    {
      slug: 'city-rises',
      faqs: [
        {
          question: "Where is The City Rises displayed?",
          answer: "This painting resides at the <a href=\"/museum/moma\"><strong>Museum of Modern Art (MoMA)</strong></a> in New York City. It's a key work in the museum's collection of early 20th-century art."
        },
        {
          question: "Who painted The City Rises?",
          answer: "<a href=\"/artist/umberto-boccioni\"><strong>Umberto Boccioni</strong></a> created this masterpiece in 1910. He was a leading figure in the <a href=\"/movement/futurism\"><strong>Futurist</strong></a> movement in Italy."
        },
        {
          question: "What does The City Rises depict?",
          answer: "A massive red horse charges across the canvas amid construction workers and scaffolding. Boccioni captures the <strong>energy and chaos</strong> of industrial modernization in early 20th-century Milan."
        },
        {
          question: "What style is The City Rises?",
          answer: "The painting exemplifies Italian <a href=\"/movement/futurism\"><strong>Futurism</strong></a>, which celebrated speed, technology, and dynamic movement. Swirling brushstrokes convey motion and power."
        }
      ]
    },
    {
      slug: 'course-empire-destruction',
      faqs: [
        {
          question: "Where can I see The Course of Empire: Destruction?",
          answer: "All five paintings in this series are at the <a href=\"/museum/new-york-historical-society\"><strong>New-York Historical Society</strong></a>. Viewing them together reveals the full narrative arc."
        },
        {
          question: "Who painted The Course of Empire series?",
          answer: "<a href=\"/artist/thomas-cole\"><strong>Thomas Cole</strong></a> created these five canvases between 1833-1836. He founded the <strong>Hudson River School</strong> of American landscape painting."
        },
        {
          question: "What does The Course of Empire: Destruction show?",
          answer: "An ancient city falls to violent invasion. Flames consume temples, soldiers swarm across broken bridges, and a <strong>colossal statue</strong> topples into churning waters below."
        },
        {
          question: "What is the meaning of The Course of Empire?",
          answer: "The five-painting cycle traces civilization from wilderness through empire to ruin. Cole warned against <strong>imperial overreach</strong> and the inevitable decline of great powers."
        }
      ]
    },
    {
      slug: 'the-cradle',
      faqs: [
        {
          question: "Where is The Cradle displayed?",
          answer: "This painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. The museum holds the world's finest collection of <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> paintings."
        },
        {
          question: "Who painted The Cradle?",
          answer: "<a href=\"/artist/berthe-morisot\"><strong>Berthe Morisot</strong></a> created this work in 1872. She was one of the founding members of the Impressionist movement and its only female leader."
        },
        {
          question: "What does The Cradle depict?",
          answer: "A mother watches over her sleeping infant through translucent netting. Morisot captures a quiet moment of <strong>maternal tenderness</strong> with delicate brushwork and soft light."
        },
        {
          question: "Who is shown in The Cradle?",
          answer: "Morisot painted her sister Edma Pontillon watching over her daughter Blanche. The painting shows the <strong>intimacy of family life</strong> that women artists could uniquely capture."
        }
      ]
    },
    {
      slug: 'damned-cast-hell',
      faqs: [
        {
          question: "Where can I see The Damned Cast into Hell?",
          answer: "This fresco is located in <a href=\"/museum/orvieto-cathedral\"><strong>Orvieto Cathedral</strong></a> in Italy. The San Brizio Chapel contains Signorelli's complete Last Judgment cycle."
        },
        {
          question: "Who painted The Damned Cast into Hell?",
          answer: "<a href=\"/artist/luca-signorelli\"><strong>Luca Signorelli</strong></a> painted this fresco around 1500-1504. His muscular figures and dramatic compositions influenced Michelangelo's Sistine Chapel ceiling."
        },
        {
          question: "What does The Damned Cast into Hell show?",
          answer: "Demons drag sinners down to eternal punishment while others fall through flames. Signorelli's <strong>anatomical precision</strong> and violent imagery create a terrifying vision of damnation."
        }
      ]
    },
    {
      slug: 'the-dance-derain',
      faqs: [
        {
          question: "Where is André Derain's The Dance located?",
          answer: "This painting is housed at the <a href=\"/museum/hermitage-museum\"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia. The museum holds one of the world's great collections of French modern art."
        },
        {
          question: "Who created The Dance?",
          answer: "<a href=\"/artist/andre-derain\"><strong>André Derain</strong></a> painted this work in 1906 during his Fauvist period. He worked alongside Matisse to develop the bold, <strong>expressive color</strong> of Fauvism."
        },
        {
          question: "What style is The Dance by Derain?",
          answer: "The painting represents <strong>Fauvism</strong>, known for wild brushwork and non-naturalistic colors. Derain simplified forms and used pure color straight from the tube."
        }
      ]
    },
    {
      slug: 'the-dance-class',
      faqs: [
        {
          question: "Where can I see The Dance Class by Degas?",
          answer: "This painting hangs at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. Degas created many versions of ballet rehearsal scenes throughout his career."
        },
        {
          question: "Who painted The Dance Class?",
          answer: "<a href=\"/artist/edgar-degas\"><strong>Edgar Degas</strong></a> created this work in 1874. Though associated with <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>, he preferred to call himself a Realist."
        },
        {
          question: "What does The Dance Class depict?",
          answer: "Young ballerinas practice under the instruction of ballet master Jules Perrot. Degas captures a <strong>candid moment</strong> with dancers stretching, adjusting costumes, and waiting their turn."
        },
        {
          question: "Why did Degas paint so many ballet scenes?",
          answer: "Degas was fascinated by movement and modern Parisian life. The Paris Opéra provided <strong>behind-the-scenes access</strong> to observe dancers in rehearsal, not just performance."
        }
      ]
    },
    {
      slug: 'daughters-boit',
      faqs: [
        {
          question: "Where is The Daughters of Edward Darley Boit displayed?",
          answer: "This painting is at the <a href=\"/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. The museum also displays the actual Japanese vases seen in the painting."
        },
        {
          question: "Who painted The Daughters of Edward Darley Boit?",
          answer: "<a href=\"/artist/john-singer-sargent\"><strong>John Singer Sargent</strong></a> created this work in 1882. The American expatriate was the leading portrait painter of his era."
        },
        {
          question: "What does The Daughters of Edward Darley Boit show?",
          answer: "Four sisters occupy a shadowy Parisian apartment interior. The unusual composition scatters them across the space, with two older girls retreating into <strong>mysterious darkness</strong>."
        },
        {
          question: "Why is this Sargent portrait unusual?",
          answer: "Unlike conventional group portraits, Sargent placed the figures asymmetrically in a vast, dim interior. The <strong>psychological tension</strong> and ambiguous space influenced later artists."
        }
      ]
    }
  ];

  for (const update of updates) {
    await prisma.artwork.update({
      where: { slug: update.slug },
      data: {
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });
    console.log(`Updated: ${update.slug}`);
  }

  console.log('\nDone! Updated 10 artworks with FAQs.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
