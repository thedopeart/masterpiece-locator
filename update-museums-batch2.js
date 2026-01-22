const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Museum 6: State Hermitage Museum
  await prisma.museum.update({
    where: { slug: 'hermitage' },
    data: {
      description: `<p>The <strong>State Hermitage Museum</strong> was founded in 1764 when Empress Catherine the Great acquired 225 paintings from Berlin merchant Johann Ernst Gotzkowsky. Catherine became an obsessive collector, purchasing over 4,000 paintings, 10,000 engravings, and 40,000 books during her reign. She named her private gallery a "hermitage" since, as she wrote to Voltaire, "only the mice and I can admire all this." The collection grew across several buildings adjacent to the <strong>Winter Palace</strong>, which Russian emperors inhabited until 1917.</p>

<p>Today the Hermitage ranks among the world's largest museums, housing over three million items across six buildings on Palace Embankment. Visitors viewing one exhibit per minute would need 11 years to see everything. The collection includes works by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, Leonardo da Vinci, Michelangelo, and Titian. <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet's</strong></a> <a href="/apps/masterpieces/art/claude-monet-waterloo-bridge"><strong>Waterloo Bridge</strong></a> series represents <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, while <a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> paintings showcase French modern art. The green-and-white Winter Palace, a <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> marvel completed in 1762, features 1,786 doors and 1,057 decorated halls open to the public.</p>`,
      faqs: [
        {
          question: "When was the Hermitage Museum founded?",
          answer: "Empress Catherine the Great founded the Hermitage in <strong>1764</strong> after acquiring 225 paintings from Berlin. She named it a \"hermitage\" for her private retreat. The museum opened to the public in 1852 under Tsar Nicholas I."
        },
        {
          question: "What is the Winter Palace?",
          answer: "The <strong>Winter Palace</strong> was the official residence of Russian emperors from 1762 to 1917. Built in <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style for Empress Elizabeth, it features 1,786 doors and 1,057 decorated halls now part of the Hermitage."
        },
        {
          question: "How big is the Hermitage collection?",
          answer: "The Hermitage holds over <strong>three million items</strong> across six historic buildings. Experts estimate viewing one exhibit per minute would take 11 years. Only a fraction of the collection is on permanent display."
        },
        {
          question: "What Impressionist works are at the Hermitage?",
          answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet's</strong></a> <a href=\"/apps/masterpieces/art/claude-monet-waterloo-bridge\"><strong>Waterloo Bridge</strong></a> series and <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> portraits represent <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>. Works by Renoir, Cézanne, and Van Gogh also feature prominently."
        },
        {
          question: "Which Old Masters are at the Hermitage?",
          answer: "The collection includes masterpieces by <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a>, Leonardo da Vinci, Michelangelo, Raphael, and Titian. Catherine the Great purchased many through agents across Europe during her reign."
        },
        {
          question: "Where is the Hermitage located?",
          answer: "The Hermitage occupies <strong>Palace Embankment</strong> along the Neva River in St. Petersburg, Russia. The main complex includes the Winter Palace and five connected buildings housing the art collections."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: hermitage');

  // Museum 7: Museo del Prado
  await prisma.museum.update({
    where: { slug: 'museo-del-prado-madrid-spain' },
    data: {
      description: `<p>The <strong>Museo del Prado</strong> opened in 1819 in a Neoclassical building originally designed by Juan de Villanueva in 1785 as a natural science museum. Construction halted during the Napoleonic Wars, and King Ferdinand VII later transformed it into the Royal Museum of Painting. The collection derives from Spanish monarchs who accumulated art over centuries, with Philip IV sending <a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> to Italy to purchase masterpieces. The museum holds the world's largest collections of works by Velázquez, <strong>Goya</strong>, and El Greco.</p>

<p>Spanish royal taste shaped the Prado into a museum of painters rather than paintings, with certain artists represented by over 100 works each. <a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> and <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> rank among the Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> and <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> masters on display. Hieronymus Bosch features prominently thanks to Philip II's fascination with the Dutch painter. Goya's Black Paintings, donated in 1881, remain among the museum's most haunting works. The Prado has helped rediscover Spanish Primitives and positioned Velázquez as Spain's greatest painter, drawing visitors seeking the rich tradition of Spanish art.</p>`,
      faqs: [
        {
          question: "When was the Prado Museum founded?",
          answer: "The Prado opened as the Royal Museum of Painting in <strong>1819</strong> under King Ferdinand VII. The Neoclassical building was originally designed in 1785 for a natural science museum before the Napoleonic Wars interrupted construction."
        },
        {
          question: "What Spanish artists are at the Prado?",
          answer: "The Prado holds the world's largest collections of <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Diego Velázquez</strong></a>, Goya, and El Greco. Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> masters like Zurbarán and Ribera are also extensively represented."
        },
        {
          question: "What Italian masters are at the Prado?",
          answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a>, and Raphael represent Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting. Velázquez personally purchased many Italian works during trips to Italy for King Philip IV."
        },
        {
          question: "What are Goya's Black Paintings?",
          answer: "Goya painted 14 <strong>Black Paintings</strong> directly on the walls of his house between 1819 and 1823. Baron Emile d'Erlanger donated them to the Prado in 1881 after having them transferred to canvas."
        },
        {
          question: "Why does the Prado have so many Bosch paintings?",
          answer: "King <strong>Philip II</strong> was fascinated by Hieronymus Bosch and collected his works obsessively. The Prado now holds the world's largest collection of Bosch, including The Garden of Earthly Delights."
        },
        {
          question: "Where is the Prado Museum?",
          answer: "The Prado sits on the <strong>Paseo del Prado</strong> boulevard in central Madrid, Spain. The museum forms part of the \"Golden Triangle of Art\" alongside the Thyssen-Bornemisza and Reina Sofía museums."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: museo-del-prado-madrid-spain');

  // Museum 8: Uffizi Gallery
  await prisma.museum.update({
    where: { slug: 'uffizi-gallery-florence-italy' },
    data: {
      description: `<p>The <strong>Uffizi Gallery</strong> occupies a building constructed between 1560 and 1580 for Cosimo I de' Medici as government offices (uffizi means "offices" in Italian). His son Francis I transformed the top floor into a repository for the Medici family's art treasures in the 1580s. The gallery opened to visitors by request in the 16th century and officially became a public museum in 1769. When the Medici line died out, Anna Maria Luisa negotiated the famous "family pact" ensuring the collection would remain in Florence forever.</p>

<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli's</strong></a> works form the heart of the collection, with <a href="/apps/masterpieces/art/sandro-botticelli-the-discovery-of-the-body-of-holofernes"><strong>The Discovery of the Body of Holofernes</strong></a> among the treasures. His Birth of Venus and Primavera define <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> art in the popular imagination. <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a>, <a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a>, and <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> are well represented. <a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> and other <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> painters demonstrate the evolution beyond High Renaissance ideals. The collection spans Late Gothic through Baroque, housed in one of Italy's most visited museums.</p>`,
      faqs: [
        {
          question: "When was the Uffizi Gallery founded?",
          answer: "The building was constructed from <strong>1560 to 1580</strong> as government offices. Francis I de' Medici began displaying art there in the 1580s. It officially opened as a public museum in 1769."
        },
        {
          question: "What Botticelli paintings are at the Uffizi?",
          answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Sandro Botticelli's</strong></a> Birth of Venus and Primavera are iconic <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masterpieces. His <a href=\"/apps/masterpieces/art/sandro-botticelli-the-discovery-of-the-body-of-holofernes\"><strong>Discovery of the Body of Holofernes</strong></a> and Madonna paintings also feature prominently."
        },
        {
          question: "Who were the Medici?",
          answer: "The <strong>Medici family</strong> ruled Florence and Tuscany for centuries. They collected art from the 15th century onward, and their holdings formed the Uffizi's core collection. The last heir ensured everything stayed in Florence."
        },
        {
          question: "What does Uffizi mean?",
          answer: "\"Uffizi\" means <strong>\"offices\"</strong> in Italian. Cosimo I de' Medici commissioned Giorgio Vasari to build the structure as administrative offices for government magistrates and guilds in 1560."
        },
        {
          question: "What periods does the Uffizi cover?",
          answer: "The collection spans Late Gothic through <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> periods. <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masters dominate, but <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> works by <a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> and Baroque paintings are well represented."
        },
        {
          question: "What Leonardo da Vinci works are at the Uffizi?",
          answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci's</strong></a> early works include the Annunciation and Adoration of the Magi. His <a href=\"/apps/masterpieces/art/leonardo-da-vinci-landscape-drawing-for-santa-maria-della-neve\"><strong>landscape drawings</strong></a> demonstrate his pioneering approach to nature."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: uffizi-gallery-florence-italy');

  // Museum 9: Cleveland Museum of Art
  await prisma.museum.update({
    where: { slug: 'cleveland-museum-of-art' },
    data: {
      description: `<p>The <strong>Cleveland Museum of Art</strong> was founded as a trust in 1913 through bequests from Cleveland industrialists Hinman Hurlbut, John Huntington, and Horace Kelley. Jeptha Wade II donated the Wade Park land with the stipulation that the museum serve "for the benefit of all the people forever." This vision has been honored since the Neoclassical Revival building opened on June 6, 1916. The permanent collection remains <strong>free</strong> to all visitors, supported by a $920 million endowment that makes it the fourth-wealthiest art museum in the United States.</p>

<p>The collection spans over 61,000 works from ancient Egypt through contemporary America. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> prints and paintings, including <a href="/apps/masterpieces/art/rembrandt-the-three-trees"><strong>The Three Trees</strong></a> and <a href="/apps/masterpieces/art/rembrandt-the-three-crosses"><strong>The Three Crosses</strong></a>, represent the <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>. <a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> features prominently with works like <a href="/apps/masterpieces/art/edgar-degas-dancers-in-pink"><strong>Dancers in Pink</strong></a>. Asian and Egyptian art holdings have earned international recognition. The museum draws approximately 770,000 visitors annually, attracted by both the collection and the commitment to public access that has defined the institution since its founding.</p>`,
      faqs: [
        {
          question: "When was the Cleveland Museum of Art founded?",
          answer: "The museum was founded as a trust in <strong>1913</strong> and opened to the public on June 6, 1916. Cleveland industrialists Hinman Hurlbut, John Huntington, and Horace Kelley funded its creation."
        },
        {
          question: "Is the Cleveland Museum of Art free?",
          answer: "The <strong>permanent collection is free</strong> to all visitors, honoring donor Jeptha Wade II's wish that the museum serve \"all the people forever.\" Special exhibitions may require paid tickets."
        },
        {
          question: "What Rembrandt works are at the Cleveland Museum?",
          answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> prints include <a href=\"/apps/masterpieces/art/rembrandt-the-three-trees\"><strong>The Three Trees</strong></a> and <a href=\"/apps/masterpieces/art/rembrandt-the-three-crosses\"><strong>The Three Crosses</strong></a>. The <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> collection features multiple paintings as well."
        },
        {
          question: "What is the Cleveland Museum known for?",
          answer: "The museum is internationally renowned for its <strong>Asian and Egyptian art</strong> collections. European Old Masters, <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> works by <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a>, and American art are also strengths."
        },
        {
          question: "How big is the Cleveland Museum collection?",
          answer: "The collection includes over <strong>61,000 works</strong> spanning from ancient Egypt through contemporary art. The museum's $920 million endowment makes it the fourth-wealthiest art museum in the United States."
        },
        {
          question: "Where is the Cleveland Museum of Art?",
          answer: "The museum sits in <strong>Wade Park</strong> within the University Circle neighborhood of Cleveland, Ohio. The Neoclassical Revival building, faced in white Georgia marble, opened in 1916."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: cleveland-museum-of-art');

  // Museum 10: Kunsthistorisches Museum
  await prisma.museum.update({
    where: { slug: 'kunsthistorisches-museum-vienna-austria' },
    data: {
      description: `<p>The <strong>Kunsthistorisches Museum</strong> opened in 1891 when Emperor Franz Joseph I created a home for the Habsburg art collection that had grown over five centuries. The twin museum buildings on Maria-Theresien-Platz were designed by Gottfried Semper and Karl von Hasenauer between 1871 and 1891. Habsburg rulers began collecting systematically in the 16th century, with Archduke Ferdinand II assembling treasures at Ambras Castle and Emperor Rudolf II turning Prague into an artistic center.</p>

<p>The Picture Gallery holds the <strong>world's largest collection</strong> of <a href="/apps/masterpieces/artist/pieter-bruegel-elder"><strong>Pieter Bruegel the Elder</strong></a> paintings, with 12 works including <a href="/apps/masterpieces/art/pieter-bruegel-elder-the-fight-between-carnival-and-lent"><strong>The Fight Between Carnival and Lent</strong></a>. No other museum owns more than three Bruegels. <a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a>, <a href="/apps/masterpieces/artist/tintoretto"><strong>Tintoretto</strong></a>, and <a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> represent the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. <a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> and <a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino's</strong></a> <a href="/apps/masterpieces/art/parmigianino-selfportrait-in-a-convex-mirror"><strong>Self-portrait in a Convex Mirror</strong></a> rank among the <a href="/apps/masterpieces/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> and <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> highlights. After the Habsburg empire collapsed in 1918, ownership transferred to the Austrian Republic.</p>`,
      faqs: [
        {
          question: "When was the Kunsthistorisches Museum founded?",
          answer: "Emperor Franz Joseph I opened the museum on <strong>October 17, 1891</strong>. Construction of the twin buildings on Maria-Theresien-Platz took from 1871 to 1891, designed by architects Gottfried Semper and Karl von Hasenauer."
        },
        {
          question: "Why does Vienna have so many Bruegel paintings?",
          answer: "The Kunsthistorisches holds <strong>12 paintings</strong> by <a href=\"/apps/masterpieces/artist/pieter-bruegel-elder\"><strong>Pieter Bruegel the Elder</strong></a>, the world's largest collection. Habsburg rulers collected his work starting in the 16th century. No other museum has more than three."
        },
        {
          question: "What is the Habsburg collection?",
          answer: "<strong>Habsburg rulers</strong> collected art from the 16th century onward. Archduke Ferdinand II, Emperor Rudolf II, and Archduke Leopold Wilhelm shaped the collection over generations before it was unified in Vienna."
        },
        {
          question: "What Renaissance artists are at the museum?",
          answer: "<a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, <a href=\"/apps/masterpieces/artist/giorgione\"><strong>Giorgione</strong></a>, and <a href=\"/apps/masterpieces/artist/tintoretto\"><strong>Tintoretto</strong></a> represent Italian <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painting. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Hieronymus Bosch</strong></a> and other Northern masters are well represented too."
        },
        {
          question: "What is Parmigianino's Self-portrait in a Convex Mirror?",
          answer: "<a href=\"/apps/masterpieces/artist/parmigianino\"><strong>Parmigianino</strong></a> painted <a href=\"/apps/masterpieces/art/parmigianino-selfportrait-in-a-convex-mirror\"><strong>Self-portrait in a Convex Mirror</strong></a> around 1524. The <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerist</strong></a> work shows distorted perspective as seen in a convex mirror."
        },
        {
          question: "Where is the Kunsthistorisches Museum?",
          answer: "The museum sits on <strong>Maria-Theresien-Platz</strong> in central Vienna, Austria. The Natural History Museum, with identical architecture, stands directly across the square."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: kunsthistorisches-museum-vienna-austria');

  console.log('Batch 2 complete (5 museums)');
}

main().catch(console.error).finally(() => prisma.$disconnect());
