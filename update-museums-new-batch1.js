const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Museum 1: State Russian Museum
  await prisma.museum.update({
    where: { slug: 'russian-museum' },
    data: {
      description: `<p>The <strong>State Russian Museum</strong> was founded by Tsar Nicholas II in 1895 to honor his father, Alexander III, who had amassed nearly 600 Russian paintings by the time of his death. Alexander believed St. Petersburg needed a museum to rival Moscow's Tretyakov Gallery and "turn a European capital into the capital of Russian art." The museum opened to the public in 1898, housed in the Mikhailovsky Palace. Initial holdings combined works from the Hermitage, the Imperial Academy of Arts, and the Winter Palace.</p>

<p>Today the museum holds over 400,000 works spanning Russian art from the 10th to 21st centuries, making it the world's largest collection of Russian fine art. <a href="/apps/masterpieces/artist/valentin-serov"><strong>Valentin Serov's</strong></a> portraits represent Russian <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, while <a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Wassily Kandinsky</strong></a> and Kazimir Malevich showcase the <a href="/apps/masterpieces/movement/abstract-expressionism"><strong>avant-garde</strong></a>. <a href="/apps/masterpieces/artist/ivan-aivazovsky"><strong>Ivan Aivazovsky's</strong></a> seascapes and <a href="/apps/masterpieces/artist/vasily-surikov"><strong>Vasily Surikov's</strong></a> historical paintings fill the galleries. The collection expanded massively after 1917 through state confiscations. In 2022, the museum attracted 2.6 million visitors, ranking among the world's most-visited art museums.</p>`,
      faqs: [
        {
          question: "When was the State Russian Museum founded?",
          answer: "Tsar Nicholas II signed the decree founding the museum in <strong>1895</strong> to honor his father Alexander III. It opened to the public in 1898 in the Mikhailovsky Palace on Arts Square in St. Petersburg."
        },
        {
          question: "What makes this collection unique?",
          answer: "The State Russian Museum is the <strong>world's largest collection of Russian fine art</strong>, with over 400,000 works spanning 1,000 years. It focuses exclusively on Russian artists, from medieval icons to contemporary video art."
        },
        {
          question: "What Russian artists are represented?",
          answer: "<a href=\"/apps/masterpieces/artist/valentin-serov\"><strong>Valentin Serov</strong></a>, <a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Ivan Aivazovsky</strong></a>, <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Wassily Kandinsky</strong></a>, and <a href=\"/apps/masterpieces/artist/vasily-surikov\"><strong>Vasily Surikov</strong></a> represent the breadth of Russian painting from landscapes to avant-garde."
        },
        {
          question: "How is this different from the Hermitage?",
          answer: "The Hermitage holds <strong>international art</strong> collected by Russian rulers, while the State Russian Museum focuses exclusively on Russian artists. Both occupy former imperial buildings in St. Petersburg."
        },
        {
          question: "What movements are represented?",
          answer: "The collection spans Russian <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, and the revolutionary avant-garde. Soviet-era art and contemporary works complete the timeline."
        },
        {
          question: "Where is the Russian Museum located?",
          answer: "The main building occupies the <strong>Mikhailovsky Palace</strong> on Arts Square in central St. Petersburg. Additional branches include the Marble Palace, Engineers' Castle, and the House of Peter I."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: russian-museum');

  // Museum 2: Museum of Fine Arts, Boston
  await prisma.museum.update({
    where: { slug: 'mfa-boston' },
    data: {
      description: `<p>The <strong>Museum of Fine Arts, Boston</strong> was founded in 1870 with a commitment to "open its doors to all the world." The collection began at the Boston Athenæum before moving to Copley Square in 1876, then to its current Fenway location in 1909. Early Boston collectors embraced <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> when French critics still dismissed it. The MFA became the first American museum to acquire a <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> painting, purchasing Racehorses at Longchamp.</p>

<p>Today the museum holds over 450,000 works across more than 8,000 paintings, ranking among the most comprehensive collections in the Americas. <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet's</strong></a> Grainstack series dominates the Impressionist galleries, with multiple versions showing light at different times of day. The Edwards siblings donated 57 paintings by Monet, Renoir, and Degas. American art features works by Winslow Homer, John Singer Sargent, and John Singleton Copley. The Art of the Americas Wing traces painting from pre-Columbian times to the present. The Impressionist and Post-Impressionist collection ranks second in the United States only to Philadelphia's Barnes Foundation.</p>`,
      faqs: [
        {
          question: "When was the MFA Boston founded?",
          answer: "The museum was founded in <strong>1870</strong> and moved to its current Fenway location in 1909. Founding president Martin Brimmer envisioned an institution collecting art from across time and cultures."
        },
        {
          question: "What Impressionist works are at the MFA?",
          answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet's</strong></a> Grainstack series and works by <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> represent the world-class <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> collection. The MFA was first in America to buy a Degas painting."
        },
        {
          question: "What American artists are featured?",
          answer: "The collection includes paintings by <strong>Winslow Homer</strong>, <strong>John Singer Sargent</strong>, and John Singleton Copley. The Karolik family donated nearly 5,000 works of American art across multiple decades."
        },
        {
          question: "How big is the MFA collection?",
          answer: "The museum holds over <strong>450,000 works of art</strong>, including more than 8,161 paintings. This makes it one of the most comprehensive collections in the Americas and the 20th-largest art museum globally."
        },
        {
          question: "What is the Art of the Americas Wing?",
          answer: "The <strong>Art of the Americas Wing</strong> presents American art from pre-Columbian times through the present day. It features Colonial furniture, Hudson River School landscapes, and modern works across multiple floors."
        },
        {
          question: "Where is the MFA located?",
          answer: "The museum sits in the <strong>Fenway neighborhood</strong> of Boston, Massachusetts. The main entrance faces the Avenue of the Arts, with gardens connecting to the Back Bay Fens park system."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: mfa-boston');

  // Museum 3: Birmingham Museum and Art Gallery
  await prisma.museum.update({
    where: { slug: 'birmingham-museum-and-art-gallery-birmingham-uk' },
    data: {
      description: `<p>The <strong>Birmingham Museum and Art Gallery</strong> opened in 1884 to inspire local artisans with objects from around the world. Today it holds the <strong>largest collection of Pre-Raphaelite art</strong> anywhere, with over 2,000 pieces including oil paintings, tapestries, stained glass, and ceramics. The <a href="/apps/masterpieces/movement/pre-raphaelite-brotherhood"><strong>Pre-Raphaelite Brotherhood</strong></a> was Britain's first modern art movement, and Birmingham became its spiritual home.</p>

<p><a href="/apps/masterpieces/artist/edward-burne-jones"><strong>Edward Burne-Jones</strong></a> dominates the collection with more works than any other museum in the world. <a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown's</strong></a> <a href="/apps/masterpieces/art/ford-madox-brown-the-last-of-england"><strong>The Last of England</strong></a> ranks among the gallery's treasures. <a href="/apps/masterpieces/artist/john-everett-millais"><strong>John Everett Millais</strong></a>, <a href="/apps/masterpieces/artist/dante-gabriel-rossetti"><strong>Dante Gabriel Rossetti</strong></a>, and <a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> complete the Brotherhood's representation. Birmingham's School of Art produced generations of artists who studied Pre-Raphaelite techniques at the museum. Burne-Jones himself visited in 1887 to encourage students. The collection toured American museums in 2018. Admission is free.</p>`,
      faqs: [
        {
          question: "What is the Pre-Raphaelite Brotherhood?",
          answer: "The <a href=\"/apps/masterpieces/movement/pre-raphaelite-brotherhood\"><strong>Pre-Raphaelite Brotherhood</strong></a> was Britain's first modern art movement, founded in 1848. Artists rejected academic conventions, returning to bright colors and medieval realism for a modern age."
        },
        {
          question: "Why is Birmingham important for Pre-Raphaelite art?",
          answer: "Birmingham holds the <strong>world's largest Pre-Raphaelite collection</strong> with over 2,000 works. The city's School of Art trained generations of artists inspired by <a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a> and Rossetti."
        },
        {
          question: "What Edward Burne-Jones works are here?",
          answer: "<a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Edward Burne-Jones</strong></a> has more works here than anywhere else, including <a href=\"/apps/masterpieces/art/edward-burne-jones-the-merciful-knight\"><strong>The Merciful Knight</strong></a>. He visited the School of Art in 1887 to encourage students."
        },
        {
          question: "What other Pre-Raphaelite artists are featured?",
          answer: "<a href=\"/apps/masterpieces/artist/ford-madox-brown\"><strong>Ford Madox Brown</strong></a>, <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>John Everett Millais</strong></a>, <a href=\"/apps/masterpieces/artist/william-holman-hunt\"><strong>William Holman Hunt</strong></a>, and <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Dante Gabriel Rossetti</strong></a> are all well represented."
        },
        {
          question: "Is the museum free?",
          answer: "<strong>General admission is free</strong>. The museum is open Monday through Sunday, 10am to 5pm. The Pre-Raphaelite galleries reopened in late 2025 after essential maintenance work."
        },
        {
          question: "Where is Birmingham Museum and Art Gallery?",
          answer: "The museum occupies <strong>Chamberlain Square</strong> in central Birmingham, England. The Victorian building sits next to the Council House and Town Hall in the city center."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: birmingham-museum-and-art-gallery-birmingham-uk');

  // Museum 4: Saint Louis Art Museum
  await prisma.museum.update({
    where: { slug: 'saint-louis-art-museum-st-louis-mo-us' },
    data: {
      description: `<p>The <strong>Saint Louis Art Museum</strong> traces its origins to 1879 when the Saint Louis School and Museum of Fine Arts was founded as part of Washington University. The museum gained its permanent home through the 1904 World's Fair. The Palace of Fine Arts, built atop Forest Park's highest hill, was the only fireproof structure among the fair's temporary exhibition halls. All other palaces were demolished; this one became the museum.</p>

<p>Today the collection spans over 34,000 objects from antiquity to the present. Strengths include Oceanic art, pre-Columbian pieces, and 20th-century German painting. <a href="/apps/masterpieces/artist/jean-baptiste-simeon-chardin"><strong>Jean-Baptiste-Siméon Chardin</strong></a> and <a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> represent <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> elegance. <a href="/apps/masterpieces/artist/winslow-homer"><strong>Winslow Homer</strong></a> and <a href="/apps/masterpieces/artist/george-caleb-bingham"><strong>George Caleb Bingham</strong></a> showcase <a href="/apps/masterpieces/movement/american-realism"><strong>American Realism</strong></a>. Works by Matisse, Picasso, Monet, and Van Gogh fill the modern galleries. Sir David Chipperfield's expansion opened in 2013. Admission is free through a cultural tax district for St. Louis City and County, drawing half a million visitors annually.</p>`,
      faqs: [
        {
          question: "When was the Saint Louis Art Museum founded?",
          answer: "The museum traces to <strong>1879</strong> as part of Washington University. It moved to its current building in 1904 after inheriting the Palace of Fine Arts from the World's Fair."
        },
        {
          question: "Why is it in Forest Park?",
          answer: "The building was constructed for the <strong>1904 World's Fair</strong> as the Palace of Fine Arts. It was the only permanent structure among the fair's exhibition halls and became the museum after the fair closed."
        },
        {
          question: "Is the museum free?",
          answer: "<strong>Admission is free</strong> through a cultural tax district that supports St. Louis City and County museums. This subsidy allows half a million visitors annually to enter without charge."
        },
        {
          question: "What American art is featured?",
          answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Winslow Homer</strong></a> and <a href=\"/apps/masterpieces/artist/george-caleb-bingham\"><strong>George Caleb Bingham</strong></a> represent <a href=\"/apps/masterpieces/movement/american-realism\"><strong>American Realism</strong></a>. The collection also includes Hudson River School landscapes and modern American painters."
        },
        {
          question: "What are the collection strengths?",
          answer: "The museum excels in <strong>Oceanic and pre-Columbian art</strong>, ancient Chinese bronzes, and 20th-century German painting. European and American art from the late 19th and 20th centuries are particularly strong."
        },
        {
          question: "Where is the Saint Louis Art Museum?",
          answer: "The museum sits atop Art Hill in <strong>Forest Park</strong> in St. Louis, Missouri. David Chipperfield's modern expansion opened in 2013, complementing the original Beaux-Arts building."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: saint-louis-art-museum-st-louis-mo-us');

  // Museum 5: Brooklyn Museum
  await prisma.museum.update({
    where: { slug: 'brooklyn-museum' },
    data: {
      description: `<p>The <strong>Brooklyn Museum</strong> was founded in 1823 as the Brooklyn Apprentices' Library, making it one of America's oldest cultural institutions. The current Beaux-Arts building opened in 1897 and has expanded several times since. The museum merged with the Brooklyn Institute of Arts and Sciences in 1843 and developed into an encyclopedic collection spanning 5,000 years of global culture. In 2023, the museum celebrated its 200th anniversary.</p>

<p>The Egyptian collection ranks among the finest in the United States, built from purchases and museum excavations since 1902. Charles Edwin Wilbour's heirs donated his collection and library, establishing the renowned Wilbour Library of Egyptology. American art spans from Colonial times through contemporary works, featuring <a href="/apps/masterpieces/artist/george-bellows"><strong>George Bellows</strong></a>, <a href="/apps/masterpieces/artist/william-blake"><strong>William Blake</strong></a>, and <a href="/apps/masterpieces/artist/thomas-eakins"><strong>Thomas Eakins</strong></a>. <a href="/apps/masterpieces/artist/frans-hals"><strong>Frans Hals</strong></a> and <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> masters represent European painting. Judy Chicago's The Dinner Party has been on permanent display since 2002. The museum also holds significant African, Oceanic, and Japanese collections.</p>`,
      faqs: [
        {
          question: "When was the Brooklyn Museum founded?",
          answer: "The museum traces to <strong>1823</strong> as the Brooklyn Apprentices' Library. The current building opened in 1897 and has expanded multiple times. It celebrated its 200th anniversary in 2023."
        },
        {
          question: "What Egyptian art is at the Brooklyn Museum?",
          answer: "The <strong>Egyptian collection</strong> is among the finest in America, spanning 3,000 years. It includes the famous Bird Lady terra cotta, papyrus documents, and nine mummified Egyptians."
        },
        {
          question: "What American artists are represented?",
          answer: "<a href=\"/apps/masterpieces/artist/george-bellows\"><strong>George Bellows</strong></a>, Winslow Homer, and <a href=\"/apps/masterpieces/artist/thomas-eakins\"><strong>Thomas Eakins</strong></a> represent American painting. <a href=\"/apps/masterpieces/movement/american-realism\"><strong>American Realism</strong></a> and Colonial-era works are particular strengths."
        },
        {
          question: "What is The Dinner Party?",
          answer: "Judy Chicago's <strong>The Dinner Party</strong> (1974-79) has been on permanent display since 2002. The feminist installation features a triangular table with place settings honoring 39 women throughout history."
        },
        {
          question: "What European masters are featured?",
          answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> paintings represent European art. <a href=\"/apps/masterpieces/artist/william-blake\"><strong>William Blake's</strong></a> visionary works include The Great Red Dragon series."
        },
        {
          question: "Where is the Brooklyn Museum?",
          answer: "The museum sits at <strong>200 Eastern Parkway</strong> in the Prospect Heights neighborhood of Brooklyn, New York. It neighbors the Brooklyn Botanic Garden and Prospect Park."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: brooklyn-museum');

  // Museum 6: National Gallery of Norway
  await prisma.museum.update({
    where: { slug: 'national-gallery-oslo' },
    data: {
      description: `<p>The <strong>National Gallery of Norway</strong> was established in 1836 following a parliamentary decision and opened its own building in 1882. The gallery became the first public institution to purchase a painting by <a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a>, acquiring Night in Nice in 1891. In 2022, the National Gallery merged with other institutions into the new National Museum, one of Europe's largest museums, housed in a $650 million building on Oslo's waterfront.</p>

<p>The collection holds one of the world's most important groups of Munch paintings. <a href="/apps/masterpieces/art/the-scream"><strong>The Scream</strong></a> (1893) remains the museum's most famous work, gifted in 1910 and briefly stolen in 1994 before being recovered. <a href="/apps/masterpieces/art/sick-child"><strong>The Sick Child</strong></a> and other <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> masterpieces trace Munch's artistic development. Norwegian painters Johan Christian Dahl, Erik Werenskiold, and Christian Krohg join international artists in representing 19th and 20th-century painting. <a href="/apps/masterpieces/artist/harriet-backer"><strong>Harriet Backer's</strong></a> <a href="/apps/masterpieces/art/blue-interior-backer"><strong>Blue Interior</strong></a> showcases Norwegian <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>.</p>`,
      faqs: [
        {
          question: "When was the National Gallery founded?",
          answer: "Parliament established the gallery in <strong>1836</strong>, and it opened its own building in 1882. In 2022, it merged into the new National Museum, one of Europe's largest museum complexes."
        },
        {
          question: "Where is The Scream displayed?",
          answer: "Munch's <a href=\"/apps/masterpieces/art/the-scream\"><strong>The Scream</strong></a> (1893) is displayed at the <strong>National Museum</strong> in Oslo. The painting was stolen in 1994 but recovered three months later thanks to British detectives."
        },
        {
          question: "What Munch paintings are at the museum?",
          answer: "<a href=\"/apps/masterpieces/artist/edvard-munch\"><strong>Edvard Munch's</strong></a> <a href=\"/apps/masterpieces/art/the-scream\"><strong>The Scream</strong></a>, <a href=\"/apps/masterpieces/art/sick-child\"><strong>The Sick Child</strong></a>, and Madonna are among the <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> masterpieces. The museum first purchased Munch in 1891."
        },
        {
          question: "What other Norwegian artists are featured?",
          answer: "Johan Christian Dahl, <a href=\"/apps/masterpieces/artist/harriet-backer\"><strong>Harriet Backer</strong></a>, and Christian Krohg represent Norwegian painting. Backer's <a href=\"/apps/masterpieces/art/blue-interior-backer\"><strong>Blue Interior</strong></a> shows <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> influence."
        },
        {
          question: "What is the National Museum?",
          answer: "The <strong>National Museum</strong> opened in 2022, combining the National Gallery with architecture, design, and contemporary art collections. The $650 million building sits on Oslo's fjord waterfront."
        },
        {
          question: "How big is the collection?",
          answer: "The National Museum holds <strong>400,000 works</strong> total, with roughly 6,500 items displayed across 87 galleries on two floors. The collection spans from antiquity to contemporary art."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: national-gallery-oslo');

  console.log('Batch 1 complete (6 museums)');
}

main().catch(console.error).finally(() => prisma.$disconnect());
