const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Tier 5 Sculpture Descriptions ===\n');

  const updates = [
    {
      slug: 'reclining-figure-moore',
      description: `<p><a href="/apps/masterpieces/artist/henry-moore"><strong>Henry Moore</strong></a> created numerous <strong>Reclining Figure</strong> sculptures throughout his career, developing the theme from the 1920s until his death. This bronze version from 1951 shows his mature style: an abstracted human form with hollowed spaces that let light and landscape pass through the figure.</p>

<p>Moore drew inspiration from pre-Columbian Mexican sculpture, particularly the Chac Mool reclining figures. He transformed this ancient form into something distinctly modern, using holes and organic shapes to connect the figure with its environment. The reclining woman became his signature subject, representing both landscape and human presence.</p>

<p>Various versions of Reclining Figure exist in museums and public spaces worldwide. The <a href="/apps/masterpieces/museum/tate-modern"><strong>Tate</strong></a> collection holds several important examples. Moore believed sculpture should be displayed outdoors, where changing light and weather would become part of the viewing experience.</p>`,
      faqs: [
        {
          question: "Where can I see Henry Moore's Reclining Figure?",
          answer: "Multiple versions exist in museums and outdoor locations worldwide. The <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate</strong></a> in London holds several. Others are at the Hirshhorn Museum in Washington, the Art Gallery of Ontario, and various outdoor sculpture parks."
        },
        {
          question: "Why did Henry Moore make so many Reclining Figures?",
          answer: "<a href=\"/apps/masterpieces/artist/henry-moore\"><strong>Moore</strong></a> considered the <strong>reclining female form</strong> his primary subject for over 50 years. He explored it in hundreds of variations, from naturalistic to highly abstract, in materials ranging from stone to bronze."
        },
        {
          question: "Why do Moore's sculptures have holes?",
          answer: "Moore pioneered the use of <strong>pierced forms</strong> in sculpture, allowing space to become part of the work. He wanted viewers to see through and around the figure, connecting it with the landscape behind. The holes also create dramatic shadows."
        },
        {
          question: "What inspired Moore's Reclining Figures?",
          answer: "Moore was influenced by <strong>pre-Columbian Chac Mool</strong> sculptures from Mexico, which showed reclining figures with raised heads. He transformed this ancient form using modernist abstraction and his distinctive hollowed shapes."
        }
      ]
    },
    {
      slug: 'single-form-hepworth',
      description: `<p><a href="/apps/masterpieces/artist/barbara-hepworth"><strong>Barbara Hepworth</strong></a> created <strong>Single Form</strong> in 1964 as a memorial to her friend Dag Hammarskjöld, the UN Secretary-General who died in a 1961 plane crash. The monumental bronze stands 21 feet tall at the <strong>United Nations Headquarters</strong> in New York, its pierced circular form suggesting both presence and absence.</p>

<p>Hepworth had given a smaller version of the sculpture to Hammarskjöld, who kept it in his office. After his death, the UN commissioned this enlarged version for their plaza. The single standing form, with its characteristic Hepworth hole, has been read as a symbol of individual dignity facing the vastness of collective humanity.</p>

<p>Hepworth was a pioneer of direct carving and abstract sculpture in Britain, working alongside <a href="/apps/masterpieces/artist/henry-moore"><strong>Henry Moore</strong></a> in the 1930s. Her work often explored the relationship between solid form and void, interior and exterior. Single Form represents her most public commission and one of the most visible sculptures at the UN.</p>`,
      faqs: [
        {
          question: "Where is Single Form located?",
          answer: "The sculpture stands in the <strong>UN Headquarters plaza</strong> in New York City, facing the Secretariat building. Smaller versions exist at the Barbara Hepworth Museum in St Ives, Cornwall, and other collections."
        },
        {
          question: "Who was Single Form made for?",
          answer: "Hepworth created it as a memorial to <strong>Dag Hammarskjöld</strong>, UN Secretary-General, who died in 1961. He had owned a smaller version. The UN commissioned the enlarged bronze after his death."
        },
        {
          question: "How tall is Single Form?",
          answer: "The UN version stands <strong>640 centimeters tall</strong> (21 feet). <a href=\"/apps/masterpieces/artist/barbara-hepworth\"><strong>Hepworth</strong></a> worked with bronze foundries to scale up her original design for this monumental public commission."
        },
        {
          question: "What does the hole in Single Form mean?",
          answer: "Hepworth's <strong>pierced forms</strong> were her signature. The hole creates a dialogue between solid and void, presence and absence. For this memorial, it suggests both individual dignity and the loss of Hammarskjöld."
        }
      ]
    },
    {
      slug: 'flamingo-calder',
      description: `<p><a href="/apps/masterpieces/artist/alexander-calder"><strong>Alexander Calder</strong></a> created <strong>Flamingo</strong> in 1974, a 53-foot painted steel sculpture standing in Chicago's Federal Plaza. The vibrant <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>vermillion red</strong></a> stabile contrasts dramatically with the dark steel and glass of Mies van der Rohe's surrounding buildings. It has become one of Chicago's most beloved public artworks.</p>

<p>Calder invented the stabile (his term for stationary abstract sculptures) and the mobile (suspended moving sculptures). Flamingo represents his monumental stabile work, using curved steel plates bolted together to create an organic form. Despite its name, the sculpture doesn't literally depict a flamingo but suggests the bird's grace and curves.</p>

<p>The sculpture was dedicated in 1974 with a circus parade through downtown Chicago, honoring Calder's lifelong love of the circus. Mayor Richard J. Daley declared it "Calder Day" in Chicago. The work can be walked under and through, inviting interaction rather than mere observation.</p>`,
      faqs: [
        {
          question: "Where is Calder's Flamingo?",
          answer: "The sculpture stands in <strong>Federal Plaza</strong> in downtown Chicago, surrounded by Mies van der Rohe's modernist buildings. It's freely accessible to the public 24 hours a day."
        },
        {
          question: "How big is Flamingo?",
          answer: "The stabile stands <strong>16 meters tall</strong> (53 feet) and weighs 50 tons. <a href=\"/apps/masterpieces/artist/alexander-calder\"><strong>Calder</strong></a> designed it so visitors can walk underneath and through its arching forms."
        },
        {
          question: "Why is Flamingo red?",
          answer: "Calder often painted his outdoor sculptures <strong>vermillion red</strong> (he called it \"Calder red\"). The bright color creates dramatic contrast with the black steel buildings of Federal Plaza and ensures visibility from blocks away."
        },
        {
          question: "What is a stabile?",
          answer: "Calder coined the term <strong>\"stabile\"</strong> for his stationary abstract sculptures, in contrast to his famous mobiles which move. Flamingo is one of his largest stabiles, made from curved steel plates bolted together."
        }
      ]
    },
    {
      slug: 'the-kiss-brancusi',
      description: `<p><a href="/apps/masterpieces/artist/constantin-brancusi"><strong>Constantin Brâncuși</strong></a> carved <strong>The Kiss</strong> in 1907-1908, reducing two embracing lovers to essential geometric forms. The limestone block shows two figures merged into one, their features simplified to ovals and parallel lines. This radical simplification marked Brâncuși's break from academic sculpture and his move toward abstraction.</p>

<p>The sculpture represents a couple locked in embrace, their bodies forming a single cubic mass. Their eyes meet in profile, arms wrap around each other, and their lips press together at the center. Brâncuși carved directly into the stone, rejecting the academic tradition of making clay models first.</p>

<p>Multiple versions exist, the earliest at the Craiova Art Museum in Romania. A later version serves as a tombstone in Montparnasse Cemetery in Paris. The Philadelphia Museum of Art owns another important version. Brâncuși returned to the theme throughout his career, each version more simplified than the last. The work influenced generations of modern sculptors seeking essential forms.</p>`,
      faqs: [
        {
          question: "Where can I see Brâncuși's The Kiss?",
          answer: "Versions exist at the <strong>Philadelphia Museum of Art</strong>, the Craiova Art Museum in Romania, and as a tombstone in Montparnasse Cemetery in Paris. Each version varies slightly in its degree of abstraction."
        },
        {
          question: "How big is The Kiss?",
          answer: "The earliest version stands about <strong>58 centimeters tall</strong> (23 inches). <a href=\"/apps/masterpieces/artist/constantin-brancusi\"><strong>Brâncuși</strong></a> created multiple versions over the years, some serving as tombstones at larger scale."
        },
        {
          question: "How is Brâncuși's Kiss different from Rodin's?",
          answer: "While <a href=\"/apps/masterpieces/artwork/the-kiss-rodin\"><strong>Rodin's The Kiss</strong></a> is naturalistic and sensual, Brâncuși reduced the lovers to <strong>geometric essentials</strong>. His couple merges into a single block, their features simplified to basic shapes."
        },
        {
          question: "What technique did Brâncuși use?",
          answer: "Brâncuși practiced <strong>direct carving</strong>, working directly into the stone without preliminary clay models. This approach made the material and process visible in the finished work, breaking from academic tradition."
        }
      ]
    },
    {
      slug: 'endless-column-brancusi',
      description: `<p><a href="/apps/masterpieces/artist/constantin-brancusi"><strong>Constantin Brâncuși</strong></a> designed the <strong>Endless Column</strong> in 1938 as part of a memorial complex in Târgu Jiu, Romania, honoring soldiers who died defending the town in World War I. The column rises nearly 30 meters (98 feet) into the sky, its repeating rhomboid modules suggesting infinite upward extension.</p>

<p>Brâncuși developed the column motif over two decades, creating smaller versions before this monumental realization. The form derives from traditional Romanian wooden gate posts, transformed into a symbol of endless aspiration. Seventeen modules stack to form the column, though the design implies continuation beyond what we see.</p>

<p>The column anchors an axis of monuments through Târgu Jiu that includes the <strong>Gate of the Kiss</strong> and the <strong>Table of Silence</strong>. Together they form one of the most significant ensembles of modern public sculpture. The Romanian government restored the column in the 1990s after decades of neglect under communist rule.</p>`,
      faqs: [
        {
          question: "Where is the Endless Column?",
          answer: "The column stands in <strong>Târgu Jiu, Romania</strong>, as part of a memorial complex honoring World War I soldiers. The town is in southwestern Romania, about 250 km from Bucharest."
        },
        {
          question: "How tall is the Endless Column?",
          answer: "The column rises <strong>29.35 meters</strong> (96.3 feet), comprising 17 stacked rhomboid modules. <a href=\"/apps/masterpieces/artist/constantin-brancusi\"><strong>Brâncuși</strong></a> designed it to suggest infinite continuation upward."
        },
        {
          question: "What does the Endless Column symbolize?",
          answer: "The repeating form represents <strong>infinite sacrifice and transcendence</strong>. Brâncuși based it on traditional Romanian wooden posts, transforming folk art into a modern memorial to fallen soldiers."
        },
        {
          question: "What other Brâncuși works are in Târgu Jiu?",
          answer: "The Endless Column forms an axis with the <strong>Gate of the Kiss</strong> and the <strong>Table of Silence</strong>. Together they comprise Brâncuși's most ambitious public commission and one of modernism's greatest sculpture ensembles."
        }
      ]
    },
    {
      slug: 'man-pointing-giacometti',
      description: `<p><a href="/apps/masterpieces/artist/alberto-giacometti"><strong>Alberto Giacometti</strong></a> created <strong>Man Pointing</strong> in 1947, one night in a burst of activity that produced several of his most important post-war sculptures. The elongated bronze figure stretches forward, one arm extended in a pointing gesture, its surface rough and eroded. The work captures human vulnerability and isolation in existentialist terms.</p>

<p>Giacometti developed his characteristic thin figures after World War II, influenced by Surrealism and existentialist philosophy. The pointing gesture suggests communication or direction, yet the figure seems isolated, unable to bridge the distance to whatever it indicates. The rough surface records the artist's working process, each touch of clay preserved in bronze.</p>

<p>The sculpture resides at the <a href="/apps/masterpieces/museum/moma"><strong>Museum of Modern Art</strong></a> in New York. A cast sold at auction in 2015 for $141.3 million, then a world record for any sculpture. Giacometti's figures have become among the most recognized and valuable works of 20th-century art.</p>`,
      faqs: [
        {
          question: "Where is Man Pointing displayed?",
          answer: "The original is at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York. Multiple casts exist; one sold at Christie's in 2015 for $141.3 million, then a world record for any sculpture."
        },
        {
          question: "How tall is Man Pointing?",
          answer: "The figure stands <strong>178 centimeters tall</strong> (about 5 feet 10 inches), roughly life-sized. Despite the human height, <a href=\"/apps/masterpieces/artist/alberto-giacometti\"><strong>Giacometti's</strong></a> extreme thinness makes it appear stretched and insubstantial."
        },
        {
          question: "Why are Giacometti's figures so thin?",
          answer: "Giacometti said figures <strong>seemed to shrink</strong> when he tried to capture how he actually perceived them. Influenced by existentialism, his emaciated forms represent human vulnerability, isolation, and the difficulty of truly seeing another person."
        },
        {
          question: "When was Man Pointing made?",
          answer: "Giacometti created it in <strong>one night in 1947</strong>, during a productive period that produced several major sculptures. He worked rapidly in clay, and the rough texture records his urgent process."
        }
      ]
    },
    {
      slug: 'red-cube-noguchi',
      description: `<p><a href="/apps/masterpieces/artist/isamu-noguchi"><strong>Isamu Noguchi</strong></a> designed <strong>Red Cube</strong> in 1968, a 28-foot vermillion steel sculpture balanced on one corner in front of the Marine Midland Bank building (now 140 Broadway) in lower Manhattan. The cube appears to defy gravity, its precarious angle creating tension against the vertical grid of the surrounding buildings.</p>

<p>Noguchi was born in Los Angeles to an American mother and Japanese father, and his work often bridged Eastern and Western aesthetics. Red Cube combines the bold simplicity of American minimalism with a playful sensibility. The cylindrical hole through the cube adds mystery and visual interest, breaking the form's solidity.</p>

<p>The sculpture sits in a sunken plaza, making it visible from street level while creating an intimate space around it. Unlike many public sculptures that feel detached from their surroundings, Red Cube engages actively with the architecture and pedestrian traffic of the Financial District. It remains one of New York's most distinctive public artworks.</p>`,
      faqs: [
        {
          question: "Where is Red Cube located?",
          answer: "The sculpture stands in front of <strong>140 Broadway</strong> (formerly Marine Midland Bank) in lower Manhattan's Financial District. It's freely visible from the street and plaza level."
        },
        {
          question: "How big is Red Cube?",
          answer: "The sculpture stands approximately <strong>8.5 meters tall</strong> (28 feet). <a href=\"/apps/masterpieces/artist/isamu-noguchi\"><strong>Noguchi</strong></a> balanced the cube on one corner, creating dramatic tension with the surrounding vertical buildings."
        },
        {
          question: "Why does Red Cube have a hole through it?",
          answer: "The cylindrical hole <strong>pierces the solid form</strong>, adding visual interest and mystery. It allows viewers to see through the sculpture and breaks the mass's solidity while maintaining its geometric clarity."
        },
        {
          question: "What color is Red Cube?",
          answer: "The sculpture is painted <strong>vermillion red</strong>, similar to Calder's signature color. The bright hue creates dramatic contrast with the dark steel and glass of the surrounding Financial District buildings."
        }
      ]
    },
    {
      slug: 'spoonbridge-and-cherry',
      description: `<p><a href="/apps/masterpieces/artist/claes-oldenburg"><strong>Claes Oldenburg</strong></a> and Coosje van Bruggen created <strong>Spoonbridge and Cherry</strong> in 1988 for the Minneapolis Sculpture Garden. The 52-foot-long spoon arches across a small pond, a bright red cherry perched on its bowl. The sculpture transforms ordinary objects into monumental public art, Oldenburg's signature approach.</p>

<p>Oldenburg pioneered Pop Art sculpture in the 1960s, creating soft versions of everyday objects and proposals for colossal monuments. This late work, made with his wife and collaborator van Bruggen, brings whimsy to an urban sculpture park. Water sprays from the cherry's stem during warm months, adding playfulness to the already surreal image.</p>

<p>The sculpture has become Minneapolis's most recognizable landmark, appearing on countless postcards and tourism materials. It sits in the <strong>Minneapolis Sculpture Garden</strong>, one of the largest urban sculpture parks in the United States. The garden, operated by the Walker Art Center, provides free public access to major works by leading contemporary artists.</p>`,
      faqs: [
        {
          question: "Where is Spoonbridge and Cherry?",
          answer: "The sculpture sits in the <strong>Minneapolis Sculpture Garden</strong>, adjacent to the Walker Art Center. The garden is free and open daily. The sculpture spans a small pond within the park."
        },
        {
          question: "How big is Spoonbridge and Cherry?",
          answer: "The spoon measures <strong>15.7 meters long</strong> (52 feet), with the cherry adding another 3 meters of height. <a href=\"/apps/masterpieces/artist/claes-oldenburg\"><strong>Oldenburg</strong></a> and van Bruggen transformed tableware into a monumental statement."
        },
        {
          question: "Does water spray from the cherry?",
          answer: "Yes. During warm months, <strong>water mist sprays</strong> from the cherry's stem, adding a fountain element to the sculpture. The effect enhances the playful, surreal quality of the oversized utensil and fruit."
        },
        {
          question: "Who made Spoonbridge and Cherry?",
          answer: "<a href=\"/apps/masterpieces/artist/claes-oldenburg\"><strong>Claes Oldenburg</strong></a> created it with his wife and frequent collaborator <strong>Coosje van Bruggen</strong>. They worked together on large-scale public sculptures from 1976 until her death in 2009."
        }
      ]
    },
    {
      slug: 'angel-of-the-north',
      description: `<p><a href="/apps/masterpieces/artist/antony-gormley"><strong>Antony Gormley</strong></a> created the <strong>Angel of the North</strong> in 1998, a 66-foot steel figure with a 177-foot wingspan standing on a former coal mine near Gateshead, England. The sculpture marks the transition from Britain's industrial past to an uncertain future, a secular angel watching over the depressed northeast region.</p>

<p>Gormley based the figure on a cast of his own body, as he does with most of his sculptural work. The wings extend horizontally rather than vertically, angled slightly forward at 3.5 degrees to create "a sense of embrace." The rusty Cor-Ten steel weathers without deteriorating, its color echoing the earth and industry of the region.</p>

<p>Initially controversial, the Angel has become beloved, appearing on British stamps and serving as a symbol of northern England. Over 150,000 vehicles pass it daily on the A1 motorway. The sculpture sits on a hill with 360-degree access, inviting visitors to stand beneath its massive wingspan. It ranks among Britain's most visited artworks.</p>`,
      faqs: [
        {
          question: "Where is the Angel of the North?",
          answer: "The sculpture stands on a hill beside the <strong>A1 motorway near Gateshead</strong>, in northeast England. It's about 5 miles south of Newcastle upon Tyne. The site offers free access with parking nearby."
        },
        {
          question: "How big is the Angel of the North?",
          answer: "The figure stands <strong>20 meters tall</strong> (66 feet) with a wingspan of <strong>54 meters</strong> (177 feet), wider than a Boeing 767. It weighs 200 tons and is anchored by foundations 20 meters deep."
        },
        {
          question: "Why is the Angel rusted?",
          answer: "The sculpture is made from <strong>Cor-Ten steel</strong>, which develops a protective rust patina without deteriorating. <a href=\"/apps/masterpieces/artist/antony-gormley\"><strong>Gormley</strong></a> chose this material to connect with the region's industrial heritage."
        },
        {
          question: "What does the Angel of the North symbolize?",
          answer: "Gormley intended it to mark the <strong>transition from industrial to information age</strong>, a secular angel watching over a region shaped by coal mining. The wings suggest both protection and the aspiration to transcend difficult circumstances."
        }
      ]
    },
    {
      slug: 'sunflower-seeds-ai-weiwei',
      description: `<p><a href="/apps/masterpieces/artist/ai-weiwei"><strong>Ai Weiwei</strong></a> created <strong>Sunflower Seeds</strong> in 2010, filling the Turbine Hall at <a href="/apps/masterpieces/museum/tate-modern"><strong>Tate Modern</strong></a> with 100 million hand-painted porcelain seeds. Each seed was individually crafted and painted by 1,600 artisans in Jingdezhen, China's historic porcelain capital. The installation questions mass production, individuality, and the relationship between artist and labor.</p>

<p>Visitors initially walked on the seeds, but dust concerns led to roping off the carpet of porcelain. The sunflower seed carries political weight in China, associated with Chairman Mao, who was depicted as the sun while citizens were his sunflowers turning toward him. Ai's seeds democratize this symbolism, each one unique despite their seeming uniformity.</p>

<p>The work required over two years of production and employed traditional techniques passed down through generations. Ai highlighted how globalization obscures the hands that make objects, forcing viewers to consider the labor behind mass-produced goods. Portions of the installation have since been sold and exhibited worldwide.</p>`,
      faqs: [
        {
          question: "Where can I see Sunflower Seeds?",
          answer: "The original installation filled <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern's</strong></a> Turbine Hall in 2010. Portions have since been acquired by museums and collectors. The Tate and other institutions display selections from the 100 million seeds."
        },
        {
          question: "How many sunflower seeds did Ai Weiwei make?",
          answer: "The installation contained <strong>100 million porcelain seeds</strong>, each individually hand-crafted and painted by 1,600 artisans in Jingdezhen, China. Production took over two years."
        },
        {
          question: "Why did Ai Weiwei choose sunflower seeds?",
          answer: "Sunflowers carry <strong>political symbolism in China</strong>, associated with Chairman Mao depicted as the sun. Citizens were his sunflowers. <a href=\"/apps/masterpieces/artist/ai-weiwei\"><strong>Ai</strong></a> democratizes this by making each seed individual despite apparent uniformity."
        },
        {
          question: "Are the sunflower seeds real?",
          answer: "No. Each seed is made from <strong>hand-painted porcelain</strong>, crafted using traditional techniques in Jingdezhen, China's historic porcelain center. They are indistinguishable from real seeds at first glance."
        }
      ]
    },
    {
      slug: 'age-of-bronze-rodin',
      description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> created <strong>The Age of Bronze</strong> in 1877, a life-sized male nude that launched his career and immediately sparked controversy. Critics accused him of casting the figure directly from a living model, so realistic was the anatomy. Rodin spent years defending the work, eventually gaining recognition that established him as the leading sculptor of his generation.</p>

<p>The figure raises his left arm to his head in a gesture of awakening or anguish. Rodin originally titled it "The Vanquished" and gave him a spear, but removed the prop to create a more universal symbol. The title evokes human emergence from a primitive state, consciousness dawning in the nude male form.</p>

<p>Bronze casts exist in multiple museums, including the <strong>Musée Rodin</strong> in Paris and the Metropolitan Museum of Art in New York. The controversy over the work's realism ironically demonstrated Rodin's mastery. From this point forward, he was recognized as an artist who could rival the ancients in capturing the human body.</p>`,
      faqs: [
        {
          question: "Where can I see The Age of Bronze?",
          answer: "Bronze casts exist at the <strong>Musée Rodin</strong> in Paris, the Metropolitan Museum in New York, and many other major museums. <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> authorized multiple casts during his lifetime."
        },
        {
          question: "Why was The Age of Bronze controversial?",
          answer: "Critics accused Rodin of <strong>casting directly from a living model</strong> because the anatomy seemed impossibly realistic. He spent years defending himself, eventually proving he had sculpted it traditionally. The controversy established his reputation."
        },
        {
          question: "How big is The Age of Bronze?",
          answer: "The figure stands <strong>180 centimeters tall</strong> (about 5 feet 11 inches), life-sized. The realistic scale contributed to accusations that Rodin had used life casting rather than traditional sculpting techniques."
        },
        {
          question: "What does The Age of Bronze mean?",
          answer: "The title refers to <strong>human awakening</strong> from a primitive state, consciousness emerging in the nude figure. Rodin originally called it \"The Vanquished\" with a spear, but removed the prop for a more universal, ambiguous meaning."
        }
      ]
    }
  ];

  let updated = 0;

  for (const artwork of updates) {
    const result = await prisma.artwork.updateMany({
      where: { slug: artwork.slug },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date(),
      }
    });

    if (result.count > 0) {
      console.log(`Updated: ${artwork.slug}`);
      updated++;
    } else {
      console.log(`Not found: ${artwork.slug}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated} sculptures with descriptions and FAQs`);

  // Show stats
  const totalSculptures = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  const sculpturesWithDesc = await prisma.artwork.count({
    where: { artworkType: 'sculpture', description: { not: null } }
  });
  console.log(`\nTotal sculptures: ${totalSculptures}`);
  console.log(`With descriptions: ${sculpturesWithDesc}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
