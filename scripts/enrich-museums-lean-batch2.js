const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 2: Tier 1 + Tier 2 museums that need 5+ FAQs
// Most already have good descriptions - only updating FAQs (except Art Institute which needs new description)

const museumData = [
  {
    slug: 'hermitage',
    // Keep existing description (good quality with links)
    faqs: [
      {
        question: "What are the most famous paintings at the Hermitage?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Henri Matisse</strong></a>'s <a href=\"/apps/masterpieces/art/dance-1910\"><strong>Dance</strong></a> (1910) is one of the top pieces. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>, <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>, and Leonardo da Vinci are all represented across the collection's three million items."
      },
      {
        question: "When was the Hermitage founded?",
        answer: "Empress <strong>Catherine the Great</strong> started the collection in 1764 by buying 225 paintings from a Berlin merchant. She acquired thousands more over her reign and stored them in a private gallery next to the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> Winter Palace."
      },
      {
        question: "Which artists are best represented?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> has one of the largest groups, including <a href=\"/apps/masterpieces/art/jewish-bride\"><strong>portraits and biblical scenes</strong></a>. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, Matisse, and Picasso cover the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and modern wings."
      },
      {
        question: "How big is the Hermitage?",
        answer: "It spans <strong>six buildings</strong> on Palace Embankment, including the Winter Palace. Over three million objects total. If you spent one minute per item, you'd need roughly 11 years. Budget at least 3-4 hours for highlights. The <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries are on the top floor."
      },
      {
        question: "What art movements does the Hermitage cover?",
        answer: "From ancient Scythian gold through <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting, <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a>, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, and early 20th-century modern art. The <strong>French Impressionist collection</strong> was largely confiscated from private collectors after the 1917 revolution."
      }
    ]
  },
  {
    slug: 'museo-del-prado-madrid-spain',
    faqs: [
      {
        question: "What are the Prado's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a>'s <a href=\"/apps/masterpieces/art/las-meninas\"><strong>Las Meninas</strong></a> (1656) is the star. <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a>'s <a href=\"/apps/masterpieces/art/the-third-of-may-1808\"><strong>Third of May 1808</strong></a> and <a href=\"/apps/masterpieces/art/saturn-devouring-his-son\"><strong>Saturn Devouring His Son</strong></a> are equally essential. Bosch's Garden of Earthly Delights draws huge crowds."
      },
      {
        question: "Which artists dominate the Prado collection?",
        answer: "<a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a> and <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> are the pillars. Goya alone has over 140 works here. Titian, Rubens, and El Greco are also heavily represented. The <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> Spanish collection is unmatched anywhere."
      },
      {
        question: "What's the Prado best known for?",
        answer: "Spanish and European painting from the 12th to 19th centuries. It's the <strong>world's greatest collection of Spanish art</strong>. The Black Paintings by <a href=\"/apps/masterpieces/artist/francisco-goya\"><strong>Goya</strong></a>, Velázquez's royal portraits, and Bosch's fantastical panels are the biggest draws."
      },
      {
        question: "Is the Prado free?",
        answer: "Free entry during the <strong>last two hours</strong> each day (Monday-Saturday 6-8pm, Sundays 5-7pm). Otherwise around €15. The <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a> rooms on the first floor are the busiest, so try to go early."
      },
      {
        question: "What art movements does the Prado cover?",
        answer: "<a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> through <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, with the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> period as the core strength. Flemish painting (Rubens, Van Dyck) fills several galleries. Italian <strong>Renaissance</strong> works by Titian and Raphael round out the European coverage."
      }
    ]
  },
  {
    slug: 'art-institute-of-chicago',
    description: `<p>The Art Institute of Chicago opened in <strong>1879</strong> and ranks as one of the oldest and largest art museums in the United States. The Beaux-Arts building on Michigan Avenue, guarded by two bronze lions, holds nearly 300,000 works spanning 5,000 years. The 2009 <strong>Modern Wing</strong> designed by Renzo Piano added significant gallery space and a pedestrian bridge to Millennium Park.</p><p>The <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> galleries are among the best outside Paris. <a href="/apps/masterpieces/artist/georges-seurat"><strong>Georges Seurat</strong></a>'s <a href="/apps/masterpieces/art/a-sunday-on-la-grande-jatte"><strong>A Sunday on La Grande Jatte</strong></a> and <a href="/apps/masterpieces/artist/edward-hopper"><strong>Edward Hopper</strong></a>'s <a href="/apps/masterpieces/art/nighthawks"><strong>Nighthawks</strong></a> are two of the museum's most recognized works. <a href="/apps/masterpieces/artist/grant-wood"><strong>Grant Wood</strong></a>'s <a href="/apps/masterpieces/art/american-gothic"><strong>American Gothic</strong></a> hangs here too. The collection also covers ancient, Asian, and decorative arts, but the painting galleries from <a href="/apps/masterpieces/artist/paul-cezanne"><strong>Cézanne</strong></a> to <a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Caillebotte</strong></a> are what most visitors come for.</p>`,
    faqs: [
      {
        question: "What are the most famous paintings at the Art Institute?",
        answer: "<a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Edward Hopper</strong></a>'s <a href=\"/apps/masterpieces/art/nighthawks\"><strong>Nighthawks</strong></a>, <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Seurat</strong></a>'s <a href=\"/apps/masterpieces/art/a-sunday-on-la-grande-jatte\"><strong>A Sunday on La Grande Jatte</strong></a>, and <a href=\"/apps/masterpieces/artist/grant-wood\"><strong>Grant Wood</strong></a>'s <a href=\"/apps/masterpieces/art/american-gothic\"><strong>American Gothic</strong></a>. All three are icons of American art."
      },
      {
        question: "What Impressionist paintings are here?",
        answer: "One of the <strong>best Impressionist collections outside Paris</strong>. <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a>'s <a href=\"/apps/masterpieces/art/two-sisters-terrace\"><strong>Two Sisters</strong></a>, <a href=\"/apps/masterpieces/artist/gustave-caillebotte\"><strong>Caillebotte</strong></a>'s <a href=\"/apps/masterpieces/art/paris-street-rainy\"><strong>Paris Street; Rainy Day</strong></a>, and <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> works by <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> fill the second floor galleries."
      },
      {
        question: "When is the Art Institute free?",
        answer: "Illinois residents get <strong>free entry</strong> on certain weekday evenings (check the website for current schedule). Children under 14 are always free. Regular admission is around $25 for adults. <a href=\"/apps/masterpieces/artist/edward-hopper\"><strong>Hopper</strong></a>'s Nighthawks is in the American art galleries on the first floor."
      },
      {
        question: "What else is worth seeing besides paintings?",
        answer: "The <strong>Thorne Miniature Rooms</strong> (68 tiny furnished rooms) are a hidden gem. The Japanese print collection is world-class. <a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a>'s <a href=\"/apps/masterpieces/art/at-the-moulin-rouge\"><strong>At the Moulin Rouge</strong></a> is in the modern European galleries. The Modern Wing's rooftop terrace has great city views."
      },
      {
        question: "How long should I spend at the Art Institute?",
        answer: "At least <strong>3-4 hours</strong> for the highlights. The <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries alone could take an hour. The museum is massive, with nearly 300,000 objects across multiple buildings connected by the Modern Wing bridge."
      }
    ]
  },
  {
    slug: 'rijksmuseum',
    faqs: [
      {
        question: "What are the Rijksmuseum's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>'s <a href=\"/apps/masterpieces/art/the-night-watch\"><strong>The Night Watch</strong></a> (1642) dominates the Gallery of Honour. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s <a href=\"/apps/masterpieces/art/the-milkmaid\"><strong>The Milkmaid</strong></a> is the other star. Both are in the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> galleries."
      },
      {
        question: "Which artists are best represented?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> has the largest presence, with over 20 paintings and 60 drawings. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> has four works here, the most in any single museum. <a href=\"/apps/masterpieces/artist/jan-steen\"><strong>Jan Steen</strong></a>'s genre scenes are also highlights."
      },
      {
        question: "What is the Dutch Golden Age collection like?",
        answer: "The <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> galleries are the museum's core strength. Landscapes by <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a>, winter scenes by <a href=\"/apps/masterpieces/artist/hendrick-avercamp\"><strong>Hendrick Avercamp</strong></a>, and genre paintings by <strong>Jan Steen</strong> fill the rooms around The Night Watch."
      },
      {
        question: "When was the Rijksmuseum built?",
        answer: "The building opened in <strong>1885</strong>, designed by Pierre Cuypers in a mix of Gothic and Renaissance styles. A 10-year renovation (completed 2013) restored the original interiors and added modern facilities. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>'s Night Watch got its own dedicated room."
      },
      {
        question: "What else should I see beyond the paintings?",
        answer: "The <strong>Delftware pottery</strong>, dollhouses, and Asian art pavilion are all worth your time. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s <a href=\"/apps/masterpieces/art/woman-reading-letter\"><strong>Woman Reading a Letter</strong></a> is quieter than The Milkmaid. The free garden behind the museum has sculptures and a cafe."
      }
    ]
  },
  {
    slug: 'national-gallery-of-art',
    faqs: [
      {
        question: "What famous paintings are at the National Gallery of Art?",
        answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s <a href=\"/apps/masterpieces/art/woman-parasol\"><strong>Woman with a Parasol</strong></a> and <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s <a href=\"/apps/masterpieces/art/woman-holding-balance\"><strong>Woman Holding a Balance</strong></a> are highlights. <a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Winslow Homer</strong></a>'s <a href=\"/apps/masterpieces/art/breezing-up\"><strong>Breezing Up</strong></a> represents the American collection."
      },
      {
        question: "Is the National Gallery of Art free?",
        answer: "Yes, <strong>always free</strong>. It's one of the few major world museums with no admission charge at any time. Both the neoclassical West Building and the I.M. Pei East Building are free. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s Impressionist works are in the West Building's ground floor."
      },
      {
        question: "What American art can I see?",
        answer: "<a href=\"/apps/masterpieces/artist/winslow-homer\"><strong>Winslow Homer</strong></a>'s <a href=\"/apps/masterpieces/art/breezing-up\"><strong>Breezing Up</strong></a>, <a href=\"/apps/masterpieces/artist/gilbert-stuart\"><strong>Gilbert Stuart</strong></a>'s <a href=\"/apps/masterpieces/art/george-washington-lansdowne\"><strong>Lansdowne portrait of George Washington</strong></a>, and <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> landscapes. The American galleries cover colonial through 20th-century art."
      },
      {
        question: "What's the difference between the East and West Buildings?",
        answer: "The <strong>West Building</strong> covers European and American art from the 13th through 19th centuries. The <strong>East Building</strong> (designed by I.M. Pei, 1978) focuses on modern and contemporary art. They're connected by an underground walkway with a moving walkway and light installation."
      },
      {
        question: "What Impressionist paintings are in the collection?",
        answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s <a href=\"/apps/masterpieces/art/japanese-footbridge\"><strong>Japanese Footbridge</strong></a> and Woman with a Parasol lead the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries. Renoir, Degas, and Cassatt are also well represented. The collection was largely built from the Mellon, Widener, and Chester Dale donations."
      }
    ]
  },
  {
    slug: 'russian-museum',
    faqs: [
      {
        question: "What are the most famous paintings at the Russian Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Ivan Aivazovsky</strong></a>'s <a href=\"/apps/masterpieces/art/ninth-wave\"><strong>The Ninth Wave</strong></a> (1850) is one of Russia's most loved paintings. <a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Ilya Repin</strong></a>'s <a href=\"/apps/masterpieces/art/barge-haulers\"><strong>Barge Haulers on the Volga</strong></a> is equally iconic."
      },
      {
        question: "How is the Russian Museum different from the Hermitage?",
        answer: "The Russian Museum is <strong>exclusively Russian art</strong>, from medieval icons to the avant-garde. The Hermitage covers world art. <a href=\"/apps/masterpieces/artist/kazimir-malevich\"><strong>Kazimir Malevich</strong></a>'s <a href=\"/apps/masterpieces/art/black-square\"><strong>Black Square</strong></a> (1915) is here, not at the Hermitage."
      },
      {
        question: "What art movements are covered?",
        answer: "Everything from <strong>medieval icon painting</strong> through 19th-century <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a> and Realism to the Russian avant-garde. <a href=\"/apps/masterpieces/artist/kazimir-malevich\"><strong>Malevich</strong></a>'s <a href=\"/apps/masterpieces/movement/suprematism\"><strong>Suprematist</strong></a> works and Kandinsky's early experiments are in the modern galleries."
      },
      {
        question: "Which Russian artists are best represented?",
        answer: "<a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Ilya Repin</strong></a> has an entire room, including <a href=\"/apps/masterpieces/art/reply-cossacks\"><strong>Reply of the Zaporozhian Cossacks</strong></a>. <a href=\"/apps/masterpieces/artist/ivan-aivazovsky\"><strong>Aivazovsky</strong></a>'s seascapes and <a href=\"/apps/masterpieces/artist/ivan-shishkin\"><strong>Shishkin</strong></a>'s forest landscapes represent <strong>19th-century Russian painting</strong> at its peak."
      },
      {
        question: "Where is the Russian Museum located?",
        answer: "In the <strong>Mikhailovsky Palace</strong> on Arts Square in central St. Petersburg. Built in the 1820s for Grand Duke Mikhail Pavlovich. It's about 15 minutes' walk from the Hermitage. <a href=\"/apps/masterpieces/artist/ilya-repin\"><strong>Repin</strong></a>'s monumental canvases are in the main gallery on the ground floor."
      }
    ]
  },
  {
    slug: 'kunsthistorisches-museum',
    faqs: [
      {
        question: "What are the top paintings at the Kunsthistorisches Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Pieter Bruegel the Elder</strong></a>'s <a href=\"/apps/masterpieces/art/hunters-in-the-snow\"><strong>Hunters in the Snow</strong></a> (1565) is the jewel. The museum holds the <strong>world's largest Bruegel collection</strong>. Vermeer, <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, and Caravaggio are also here."
      },
      {
        question: "When was the Kunsthistorisches Museum built?",
        answer: "Emperor <strong>Franz Joseph I</strong> opened it in 1891 to house the Habsburg art collection. The building on Maria-Theresien-Platz is a Ringstrasse landmark. <a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a>'s Room X on the first floor is the most visited gallery."
      },
      {
        question: "What makes the Bruegel collection special?",
        answer: "<a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel the Elder</strong></a> left about 40 surviving paintings. The KHM owns 12 of them, including <a href=\"/apps/masterpieces/art/hunters-in-the-snow\"><strong>Hunters in the Snow</strong></a>, the Tower of Babel, and Peasant Wedding. No other museum comes close to this concentration."
      },
      {
        question: "What art movements are represented?",
        answer: "The painting gallery covers <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a>, Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art. <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> and the Venetian school are well represented. The Egyptian, Greek, and coin collections fill the ground floor."
      },
      {
        question: "What's the building like inside?",
        answer: "The <strong>main staircase</strong> with Canova's Theseus sculpture and ceiling paintings is worth seeing on its own. The café in the cupola hall sits under a 60-meter dome. <a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Bruegel</strong></a>'s gallery has been redesigned with special lighting to show the paintings at their best."
      }
    ]
  },
  {
    slug: 'moma',
    faqs: [
      {
        question: "What are MoMA's most famous artworks?",
        answer: "<a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a>'s <a href=\"/apps/masterpieces/art/the-starry-night\"><strong>The Starry Night</strong></a>, <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a>'s <a href=\"/apps/masterpieces/art/the-persistence-of-memory\"><strong>Persistence of Memory</strong></a>, and <a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Warhol</strong></a>'s <a href=\"/apps/masterpieces/art/campbells-soup-cans\"><strong>Campbell's Soup Cans</strong></a> top the list. Picasso's Les Demoiselles d'Avignon is equally essential."
      },
      {
        question: "What art movements does MoMA cover?",
        answer: "From <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a> through <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>, <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a>, <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>, <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>, and contemporary. It's the definitive collection of <strong>modern and contemporary art</strong>."
      },
      {
        question: "When is MoMA free?",
        answer: "<strong>Friday evenings 4-8pm</strong> are free (sponsored by Uniqlo). Otherwise around $25 for adults. Members of other museums sometimes get discounts. <a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a>'s Starry Night is on the fifth floor, usually the most crowded gallery."
      },
      {
        question: "How is MoMA organized?",
        answer: "The collection runs chronologically from the <strong>fifth floor (1880s-1940s)</strong> down to the second floor (contemporary). <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a>'s <a href=\"/apps/masterpieces/art/composition-viii\"><strong>Composition VIII</strong></a> and the <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealist</strong></a> galleries are on the fifth floor. Photography and media art fill the lower levels."
      },
      {
        question: "What's new at MoMA?",
        answer: "A <strong>2019 renovation</strong> by Diller Scofidio + Renfro expanded galleries by 30% and rethought how art is displayed. Works now rotate more frequently. <a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Warhol</strong></a>'s soup cans and <a href=\"/apps/masterpieces/artist/salvador-dali\"><strong>Dalí</strong></a>'s melting clocks are always on view."
      }
    ]
  },
  {
    slug: 'cleveland-museum-of-art',
    faqs: [
      {
        question: "What famous artworks are at the Cleveland Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/george-bellows\"><strong>George Bellows</strong></a>'s <a href=\"/apps/masterpieces/art/stag-sharkeys\"><strong>Stag at Sharkey's</strong></a> (1909) is one of the best American realist paintings anywhere. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> prints and drawings fill an entire study room."
      },
      {
        question: "Is the Cleveland Museum free?",
        answer: "Yes, <strong>always free</strong>. One of the few major American museums with no admission charge. The collection of 61,000+ objects spans 6,000 years. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>'s works are in the European galleries on the second floor."
      },
      {
        question: "What artists are best represented?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> has the strongest presence with multiple paintings, prints, and drawings. <a href=\"/apps/masterpieces/artist/frederic-edwin-church\"><strong>Frederic Edwin Church</strong></a> and other <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> painters represent the American landscape tradition."
      },
      {
        question: "What makes Cleveland's museum special?",
        answer: "It punches well above its weight for a mid-size city. <strong>Free admission since 1916</strong>, world-class Asian art, and a renovated 2013 building make it one of the best art museums in the Midwest. <a href=\"/apps/masterpieces/artist/george-bellows\"><strong>Bellows</strong></a>'s boxing paintings capture early 20th-century New York."
      },
      {
        question: "What art periods does the collection cover?",
        answer: "Everything from <strong>ancient Egyptian</strong> to contemporary. European painting is strong in <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> and <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> works. The Asian and medieval armor collections are also nationally recognized. The <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> gallery was recently rehung."
      }
    ]
  },
  {
    slug: 'british-museum',
    faqs: [
      {
        question: "What famous artworks are at the British Museum?",
        answer: "<a href=\"/apps/masterpieces/artist/william-blake\"><strong>William Blake</strong></a>'s <a href=\"/apps/masterpieces/art/ancient-of-days\"><strong>The Ancient of Days</strong></a> (1794) is the most famous print. The <a href=\"/apps/masterpieces/art/horse-selene-parthenon\"><strong>Parthenon Marbles</strong></a>, Rosetta Stone, and Assyrian lion hunt reliefs are the star ancient works."
      },
      {
        question: "Is the British Museum free?",
        answer: "Yes, <strong>always free</strong>. Some special exhibitions charge admission. It's on Great Russell Street in Bloomsbury, open daily. <a href=\"/apps/masterpieces/artist/william-blake\"><strong>Blake</strong></a>'s prints are in Room 90, the Prints and Drawings gallery (check opening schedule, as it rotates)."
      },
      {
        question: "What ancient civilizations are represented?",
        answer: "Egyptian, <strong>Greek, Roman, Assyrian, Persian</strong>, Chinese, Japanese, and more. The <a href=\"/apps/masterpieces/art/nebamun-hunting-fowling\"><strong>Nebamun wall paintings</strong></a> from 1350 BC and the <a href=\"/apps/masterpieces/art/gayer-anderson-cat\"><strong>Gayer-Anderson Cat</strong></a> are Egyptian highlights. It's one of the world's most complete archaeological collections."
      },
      {
        question: "What are the Parthenon Marbles?",
        answer: "Sculptures from the <strong>Parthenon temple in Athens</strong>, brought to Britain by Lord Elgin in the early 1800s. The <a href=\"/apps/masterpieces/art/horse-selene-parthenon\"><strong>Horse of Selene</strong></a> is one of the finest surviving pieces. Greece continues to request their return. They fill Gallery 18."
      },
      {
        question: "How big is the British Museum?",
        answer: "Over <strong>8 million objects</strong>, though only about 80,000 are on display at any time. The collection spans two million years of human history. Budget at least 3 hours for highlights. The <a href=\"/apps/masterpieces/art/dying-lion-assyrian\"><strong>Assyrian lion hunt reliefs</strong></a> in the ground floor galleries are often overlooked but extraordinary."
      }
    ]
  },
  {
    slug: 'mfa-boston',
    faqs: [
      {
        question: "What are the MFA's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Paul Gauguin</strong></a>'s <a href=\"/apps/masterpieces/art/where-do-we-come-from\"><strong>Where Do We Come From?</strong></a> (1897) is the star. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a>'s <a href=\"/apps/masterpieces/art/daughters-boit\"><strong>Daughters of Edward Darley Boit</strong></a> is another highlight. Both are in the permanent galleries."
      },
      {
        question: "What art movements are best represented?",
        answer: "<a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> is the museum's greatest strength. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s Grainstack series is well represented, with multiple canvases showing different light conditions. The <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> galleries (Gauguin, Van Gogh) follow."
      },
      {
        question: "What makes the MFA special?",
        answer: "The <strong>Japanese art collection</strong> is one of the finest outside Japan. The Egyptian collection is also world-class. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted murals directly in the museum's rotunda, which you can see for free in the public areas."
      },
      {
        question: "Is the MFA free?",
        answer: "Free for <strong>members and kids under 17</strong> (weekdays and weekends before noon). Otherwise around $27 for adults. Wednesday evenings after 4pm offer reduced pricing. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a>'s Where Do We Come From hangs in the European galleries on the second floor."
      },
      {
        question: "How large is the Museum of Fine Arts collection?",
        answer: "Over <strong>500,000 objects</strong> spanning 5,000 years. The Huntington Avenue building (1909) and the 2010 Art of the Americas Wing provide extensive gallery space. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, Renoir, and Degas fill the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries, among the richest in North America."
      }
    ]
  },
  {
    slug: 'tate-modern-london-uk',
    faqs: [
      {
        question: "What are Tate Modern's most famous artworks?",
        answer: "<a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Andy Warhol</strong></a>'s <a href=\"/apps/masterpieces/art/marilyn-diptych-warhol\"><strong>Marilyn Diptych</strong></a> (1962) and <a href=\"/apps/masterpieces/artist/damien-hirst\"><strong>Damien Hirst</strong></a>'s <a href=\"/apps/masterpieces/art/shark-formaldehyde-hirst\"><strong>shark in formaldehyde</strong></a> are icons of the collection. <a href=\"/apps/masterpieces/artist/gerhard-richter\"><strong>Gerhard Richter</strong></a>'s Cage paintings are also here."
      },
      {
        question: "Is Tate Modern free?",
        answer: "Yes, the <strong>permanent collection is free</strong>. Special exhibitions charge admission. The building is a converted power station on the South Bank, open daily. <a href=\"/apps/masterpieces/artist/andy-warhol\"><strong>Warhol</strong></a>'s Marilyn and the <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a> galleries are usually on Level 2."
      },
      {
        question: "What art periods does Tate Modern cover?",
        answer: "International modern and contemporary art from <strong>1900 to now</strong>. <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a>, <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>, <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>, and conceptual art all have dedicated displays. The collection rotates frequently, so repeat visits show different works."
      },
      {
        question: "What's the difference between Tate Modern and Tate Britain?",
        answer: "Tate Modern covers <strong>international modern art</strong> (1900+). Tate Britain focuses on <strong>British art from 1500 onwards</strong>, including the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelites</strong></a> and Turner. They're about 20 minutes apart by the Tate Boat along the Thames."
      },
      {
        question: "What's the building like?",
        answer: "The <strong>Bankside Power Station</strong> (1947) was converted by Herzog & de Meuron, opening in 2000. The Turbine Hall hosts massive commissions. The Switch House extension (2016) added 10 floors. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s <a href=\"/apps/masterpieces/art/water-lilies-tate-monet\"><strong>Water-Lilies</strong></a> provides a calmer contrast to the contemporary pieces."
      }
    ]
  },
  {
    slug: 'tate-britain',
    faqs: [
      {
        question: "What are Tate Britain's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>'s <a href=\"/apps/masterpieces/art/ophelia\"><strong>Ophelia</strong></a> (1852) is the star piece. <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a>'s <a href=\"/apps/masterpieces/art/hylas-nymphs\"><strong>Hylas and the Nymphs</strong></a> and <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a>'s <a href=\"/apps/masterpieces/art/proserpine\"><strong>Proserpine</strong></a> fill the <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> galleries."
      },
      {
        question: "What is the Pre-Raphaelite collection like?",
        answer: "One of the <strong>world's best</strong>. <a href=\"/apps/masterpieces/artist/edward-burne-jones\"><strong>Burne-Jones</strong></a>'s <a href=\"/apps/masterpieces/art/golden-stairs\"><strong>Golden Stairs</strong></a>, <a href=\"/apps/masterpieces/artist/john-william-waterhouse\"><strong>Waterhouse</strong></a>'s <a href=\"/apps/masterpieces/art/circe-offering-cup\"><strong>Circe Offering the Cup</strong></a>, and multiple <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti</strong></a> works. The <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> galleries alone are worth the trip."
      },
      {
        question: "Is Tate Britain free?",
        answer: "Yes, the <strong>permanent collection is free</strong>. Special exhibitions charge separately. On Millbank near the Thames in Westminster. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a>'s <a href=\"/apps/masterpieces/art/carnation-lily-rose\"><strong>Carnation, Lily, Lily, Rose</strong></a> is in the late Victorian galleries."
      },
      {
        question: "What other British artists are featured?",
        answer: "Turner has an entire wing (the Clore Gallery) with over 300 paintings. <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Alma-Tadema</strong></a>'s <a href=\"/apps/masterpieces/art/favorite-custom\"><strong>A Favorite Custom</strong></a>, <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a>, Constable, and Francis Bacon also feature prominently."
      },
      {
        question: "What art periods does Tate Britain cover?",
        answer: "<strong>British art from 1500 to the present</strong>. The chronological walk covers Tudor portraiture, 18th-century landscapes, <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> painting, <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> works, and contemporary British art. The annual Turner Prize exhibition happens here."
      }
    ]
  },
  {
    slug: 'gem228ldegalerie-berlin-germany',
    faqs: [
      {
        question: "What famous paintings are at the Gemäldegalerie?",
        answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s <a href=\"/apps/masterpieces/art/johannes-vermeer-the-glass-of-wine\"><strong>The Glass of Wine</strong></a>, <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s <a href=\"/apps/masterpieces/art/raphael-solly-madonna\"><strong>Solly Madonna</strong></a>, and <a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Rogier van der Weyden</strong></a>'s altarpieces are key works. One of the strongest Old Master collections in Europe."
      },
      {
        question: "What art periods does it specialize in?",
        answer: "European painting from the <strong>13th to 18th centuries</strong>. <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> and <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> works are particularly strong. Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting, including Raphael and Botticelli, fills the southern wing."
      },
      {
        question: "Where is the Gemäldegalerie?",
        answer: "At the <strong>Kulturforum</strong> near Potsdamer Platz in central Berlin. The modern building opened in 1998. <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a>'s works are in Room 18 (Dutch galleries). It's next to the Philharmonic concert hall and the Kunstgewerbemuseum."
      },
      {
        question: "How many paintings does it hold?",
        answer: "About <strong>1,500 paintings</strong> on display across 72 galleries, arranged by national school. <a href=\"/apps/masterpieces/artist/lucas-cranach-elder\"><strong>Lucas Cranach</strong></a>, <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a>, and Holbein represent the German collection. The Flemish and Dutch rooms are the richest sections."
      },
      {
        question: "What makes the Gemäldegalerie special?",
        answer: "The <strong>quality-to-crowds ratio</strong> is hard to beat. World-class paintings by <a href=\"/apps/masterpieces/artist/rogier-van-der-weyden\"><strong>Van der Weyden</strong></a>, <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>, and Caravaggio, but far fewer visitors than the Louvre or Uffizi. The gallery design gives paintings space to breathe."
      }
    ]
  },
  {
    slug: 'thyssenbornemisza-museum-madrid-spain',
    faqs: [
      {
        question: "What's in the Thyssen-Bornemisza collection?",
        answer: "It fills the gaps between the Prado and Reina Sofía, covering <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a>, and early 20th-century art. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a>'s Venice views and <a href=\"/apps/masterpieces/artist/palma-vecchio\"><strong>Palma Vecchio</strong></a>'s <strong>La Bella</strong> are standouts."
      },
      {
        question: "How does it fit with Madrid's other museums?",
        answer: "The three museums form the <strong>\"Golden Triangle of Art\"</strong> along the Paseo del Prado. The Thyssen covers what the Prado (Old Masters) and Reina Sofía (modern Spanish) don't. <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> landscapes and American painting are unique to the Thyssen."
      },
      {
        question: "What's the collection's history?",
        answer: "Baron <strong>Heinrich Thyssen-Bornemisza</strong> and his son Hans Heinrich built one of the 20th century's greatest private collections. Spain acquired it in 1993. <a href=\"/apps/masterpieces/artist/jean-baptiste-simeon-chardin\"><strong>Chardin</strong></a>'s still lifes and <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> landscapes were among their favorite purchases."
      },
      {
        question: "What art movements are covered?",
        answer: "From 13th-century Italian panels to <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>. The Thyssen excels at <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> (Kirchner, Schiele, Nolde) and has the only significant <strong>American painting collection</strong> in Madrid. <a href=\"/apps/masterpieces/artist/martin-johnson-heade\"><strong>Heade</strong></a>'s marsh landscapes represent the American wing."
      },
      {
        question: "Is the Thyssen-Bornemisza free?",
        answer: "<strong>Mondays are free</strong> (noon to 4pm). Otherwise about €13 for the permanent collection. The building on <strong>Paseo del Prado</strong> is a renovated 18th-century palace. <a href=\"/apps/masterpieces/artist/canaletto\"><strong>Canaletto</strong></a>'s Venice paintings are in the Italian galleries on the second floor."
      }
    ]
  },
  {
    slug: 'kunstmuseum-basel',
    faqs: [
      {
        question: "What are the most famous paintings at Kunstmuseum Basel?",
        answer: "<a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Arnold Böcklin</strong></a>'s <a href=\"/apps/masterpieces/art/isle-of-dead\"><strong>Isle of the Dead</strong></a> (1880) is iconic. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a>'s <a href=\"/apps/masterpieces/art/when-will-you-marry\"><strong>When Will You Marry?</strong></a> and <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Holbein</strong></a>'s portraits are also here. The collection spans from medieval panels to contemporary."
      },
      {
        question: "What makes the Kunstmuseum Basel historically important?",
        answer: "It's the <strong>world's first publicly accessible art collection</strong>, dating to 1661 when Basel purchased the Amerbach Cabinet. <a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Hans Holbein the Younger</strong></a> spent years in Basel, and the museum holds his most important early works."
      },
      {
        question: "What art movements are covered?",
        answer: "Strong in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting (Holbein, Cranach), 19th-century <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> (Böcklin), and 20th-century modernism. <a href=\"/apps/masterpieces/artist/robert-delaunay\"><strong>Delaunay</strong></a>'s <a href=\"/apps/masterpieces/art/eiffel-tower-delaunay\"><strong>Eiffel Tower</strong></a> and <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubist</strong></a> works fill the modern galleries."
      },
      {
        question: "Where is the museum?",
        answer: "On <strong>St. Alban-Graben</strong> in Basel's old town, near the Rhine. The main building dates from 1936. A new extension opened in 2016 across the street, connected underground. <a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Böcklin</strong></a>'s paintings are in the 19th-century galleries of the main building."
      },
      {
        question: "What's the Böcklin collection like?",
        answer: "<a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Arnold Böcklin</strong></a> lived in Basel and the museum holds multiple versions of his work. <a href=\"/apps/masterpieces/art/isle-of-dead\"><strong>Isle of the Dead</strong></a> (one of five versions he painted) is the most haunting. His <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> landscapes influenced <strong>Surrealism</strong> decades later."
      }
    ]
  },
  {
    slug: 'courtauld-gallery-london',
    faqs: [
      {
        question: "What are the Courtauld's most famous paintings?",
        answer: "<a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a>'s <a href=\"/apps/masterpieces/art/self-portrait-bandaged-ear\"><strong>Self-Portrait with Bandaged Ear</strong></a> (1889) is the top draw. Manet's Bar at the Folies-Bergère, and <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a>'s <a href=\"/apps/masterpieces/art/nevermore-gauguin\"><strong>Nevermore</strong></a> are also here."
      },
      {
        question: "What Impressionist works are in the collection?",
        answer: "One of the <strong>finest small Impressionist collections</strong> in the world. <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s Antibes paintings (multiple canvases) hang alongside Renoir, Degas, and Cézanne. The <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries on the top floor get the best natural light."
      },
      {
        question: "Where is the Courtauld Gallery?",
        answer: "Inside <strong>Somerset House</strong> on the Strand, a grand 18th-century building on the Thames. Reopened in 2021 after renovation. <a href=\"/apps/masterpieces/artist/van-gogh\"><strong>Van Gogh</strong></a>'s self-portrait is in the Great Room on the top floor. Somerset House itself hosts exhibitions and an ice rink in winter."
      },
      {
        question: "What makes the Courtauld unique?",
        answer: "It's small but the <strong>quality per painting is extraordinary</strong>. Samuel Courtauld, a textile magnate, bought these <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> masterpieces in the 1920s-30s when they were still affordable. <a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a>'s triptych is one of the oldest works."
      },
      {
        question: "How long should I spend at the Courtauld?",
        answer: "About <strong>1-2 hours</strong> covers everything. It's compact: only a few rooms compared to the National Gallery. That intimacy is the appeal. <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a>'s <a href=\"/apps/masterpieces/art/nevermore-gauguin\"><strong>Nevermore</strong></a> and the <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> paintings reward slow looking."
      }
    ]
  },
  {
    slug: 'basilica-of-saint-francis-of-assisi-assisi-italy',
    faqs: [
      {
        question: "What famous frescoes are in the Basilica of St. Francis?",
        answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a>'s <strong>Life of St. Francis</strong> cycle (28 scenes) in the Upper Church is the highlight. These frescoes from the 1290s revolutionized Italian painting. <a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a>'s Crucifixion is in the transept."
      },
      {
        question: "Who painted the frescoes?",
        answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto di Bondone</strong></a> painted the main cycle in the Upper Church. <a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a>, his teacher, painted the transept and apse. Simone Martini and Pietro Lorenzetti worked in the Lower Church. It's a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> prelude."
      },
      {
        question: "What's the structure of the basilica?",
        answer: "Two churches stacked: the <strong>Upper Church</strong> (Giotto's St. Francis cycle, bright and airy) and the <strong>Lower Church</strong> (darker, more intimate, with Lorenzetti frescoes). St. Francis's tomb is in the crypt below. <a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a>'s scenes read like a comic strip along the nave walls."
      },
      {
        question: "Is the basilica free to visit?",
        answer: "Yes, <strong>entry is free</strong>. It's an active Franciscan church. Modest dress required (covered shoulders and knees). Photography without flash is allowed in most areas. <a href=\"/apps/masterpieces/artist/cimabue\"><strong>Cimabue</strong></a>'s frescoes were damaged in the 1997 earthquake but restored."
      },
      {
        question: "Why are Giotto's frescoes important?",
        answer: "<a href=\"/apps/masterpieces/artist/giotto\"><strong>Giotto</strong></a> broke from the flat Byzantine style and introduced <strong>naturalistic space and emotion</strong>. His St. Francis scenes show real landscapes, solid human figures, and dramatic storytelling. Art historians consider this the starting point of Western <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting."
      }
    ]
  },
  {
    slug: 'philadelphia-museum-of-art',
    faqs: [
      {
        question: "What are the Philadelphia Museum's most famous works?",
        answer: "<a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a>'s <a href=\"/apps/masterpieces/art/the-large-bathers\"><strong>The Large Bathers</strong></a> (1906) is the masterpiece. <a href=\"/apps/masterpieces/artist/thomas-eakins\"><strong>Thomas Eakins</strong></a>'s <a href=\"/apps/masterpieces/art/gross-clinic\"><strong>The Gross Clinic</strong></a> and Duchamp's Bride Stripped Bare are also here."
      },
      {
        question: "What makes this museum unique?",
        answer: "The <strong>period rooms</strong> are extraordinary. Entire architectural interiors from a Japanese temple, Chinese palace, and medieval cloister were rebuilt inside the museum. <a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Fernand Léger</strong></a>'s <a href=\"/apps/masterpieces/art/the-city-leger\"><strong>The City</strong></a> represents the modern collection's ambition."
      },
      {
        question: "What art periods does it cover?",
        answer: "From ancient to contemporary. <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, American art, and <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> are particular strengths. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a> has one of the largest groups in any American museum. The Duchamp collection is the world's largest."
      },
      {
        question: "What's the building like?",
        answer: "The <strong>Greek Revival building</strong> on Fairmount (those are the \"Rocky Steps\") opened in 1928. The Perelman Building across the street handles photography, prints, and costume. <a href=\"/apps/masterpieces/artist/thomas-eakins\"><strong>Eakins</strong></a>, Philadelphia's greatest painter, has a dedicated gallery on the first floor."
      },
      {
        question: "Is the Philadelphia Museum free?",
        answer: "Free on the <strong>first Sunday of each month</strong> and for members. Otherwise about $25. Pay-what-you-wish on Friday evenings. <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a>'s <a href=\"/apps/masterpieces/art/the-large-bathers\"><strong>Large Bathers</strong></a> is in Gallery 165 on the second floor."
      }
    ]
  },
  {
    slug: 'st228del-frankfurt-am-main-germany',
    faqs: [
      {
        question: "What are the Städel's highlights?",
        answer: "<a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Robert Campin</strong></a>'s altarpiece panels and <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a> works lead the Old Masters. <a href=\"/apps/masterpieces/artist/arnold-bocklin\"><strong>Böcklin</strong></a>'s portraits and <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> genre scenes by <a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Gerard ter Borch</strong></a> round out the collection."
      },
      {
        question: "When was the Städel founded?",
        answer: "In <strong>1815</strong>, when Frankfurt banker Johann Friedrich Städel left his art collection and fortune to establish a public museum. It's one of Germany's oldest museum foundations. <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a>'s works were among the original core holdings."
      },
      {
        question: "What art movements are covered?",
        answer: "Seven centuries of European art. <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> (Dürer, Cranach, <a href=\"/apps/masterpieces/artist/petrus-christus\"><strong>Petrus Christus</strong></a>), <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> (Rembrandt, Vermeer), and an underground gallery for contemporary art opened in 2012."
      },
      {
        question: "Where is the Städel?",
        answer: "On the <strong>Schaumainkai</strong> (Museum Embankment) along the Main river in Frankfurt. The street has over a dozen museums within walking distance. <a href=\"/apps/masterpieces/artist/robert-campin\"><strong>Campin</strong></a>'s early Netherlandish panels are on the second floor. Frankfurt's Hauptbahnhof is a 20-minute walk."
      },
      {
        question: "What makes the Städel special?",
        answer: "The <strong>2012 underground extension</strong> for contemporary art is an architectural feat. A circular garden of 195 round skylights lights the galleries below. <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Adriaen Brouwer</strong></a>'s genre scenes and <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> paintings upstairs offer a quieter Old Master experience."
      }
    ]
  }
];

async function enrichMuseums() {
  console.log(`Enriching ${museumData.length} museums (lean batch 2)...\n`);
  let updated = 0;
  let errors = 0;
  for (const museum of museumData) {
    try {
      const updateData = {
        faqs: museum.faqs,
        updatedAt: new Date()
      };
      // Only update description if provided (Art Institute needs new one)
      if (museum.description) {
        updateData.description = museum.description;
      }
      const result = await prisma.museum.update({
        where: { slug: museum.slug },
        data: updateData
      });
      console.log(`Updated: ${result.name} (${museum.faqs.length} FAQs${museum.description ? ', new desc' : ''})`);
      updated++;
    } catch (error) {
      console.error(`Error: ${museum.slug}:`, error.message);
      errors++;
    }
  }
  console.log(`\nBatch complete! ${updated} updated, ${errors} errors.`);
}

enrichMuseums()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
