const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Museum 1: Louvre, Paris
  await prisma.museum.update({
    where: { slug: 'louvre-paris-france' },
    data: {
      description: `<p>The <strong>Louvre</strong> opened as a public museum in 1793 during the French Revolution, housed in a palace that served French kings since the 12th century. Today it ranks as the world's largest art museum, displaying roughly 38,000 objects across 72,735 square meters of gallery space. The collection spans from ancient Mesopotamia to the mid-19th century, with particular strengths in Italian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painting, ancient Egyptian artifacts, and French decorative arts.</p>

<p>Beyond the iconic glass pyramid designed by I.M. Pei in 1989, visitors discover works by <a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a>, <a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a>, and <a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a>. The Mona Lisa draws roughly 7 million visitors annually, though the museum rewards those who explore further with Greek antiquities like the Venus de Milo and Winged Victory of Samothrace. French kings amassed much of the original collection, with Napoleon adding substantially through conquest. The museum welcomed 8.7 million visitors in 2024, with Americans making up the largest group of international tourists. Entry is free for EU visitors under 26 and for everyone on the first Saturday evening of each month.</p>`,
      faqs: [
        {
          question: "When was the Louvre founded?",
          answer: "The Louvre opened to the public in <strong>1793</strong> during the French Revolution. The building itself served as a royal palace since the 12th century, with French kings collecting art there for centuries before it became a museum."
        },
        {
          question: "What famous paintings can I see at the Louvre?",
          answer: "The Louvre holds the Mona Lisa by <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo da Vinci</strong></a>, works by <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a>, and <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> masterpieces by Fragonard. Greek sculptures like Venus de Milo also draw major crowds."
        },
        {
          question: "How big is the Louvre Museum?",
          answer: "The Louvre spans <strong>72,735 square meters</strong> of gallery space across three wings. The collection includes over 480,000 objects, though only about 38,000 are on display at any time. It welcomed 8.7 million visitors in 2024."
        },
        {
          question: "Is the Louvre free to visit?",
          answer: "Entry is free for visitors under 26 from EU countries and for everyone on the <strong>first Saturday evening</strong> of each month. About 28% of visitors enjoyed free admission in 2024. Regular admission costs around €17."
        },
        {
          question: "What style of art does the Louvre specialize in?",
          answer: "The Louvre excels in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> paintings, ancient Egyptian artifacts, Greek sculptures, and French decorative arts. The collection spans from ancient Mesopotamia to mid-19th century European art."
        },
        {
          question: "What is the glass pyramid at the Louvre?",
          answer: "Architect I.M. Pei designed the <strong>Grand Louvre Pyramid</strong> in 1989. The glass and steel structure serves as the museum's main entrance, contrasting dramatically with the ornate historical palace architecture surrounding it."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: louvre-paris-france');

  // Museum 2: Musée d'Orsay
  await prisma.museum.update({
    where: { slug: 'musee-dorsay' },
    data: {
      description: `<p>The <strong>Musée d'Orsay</strong> opened in December 1986 inside a former Beaux-Arts railway station built for the 1900 World's Fair. The Gare d'Orsay served trains traveling to southwestern France until 1939, when platforms became too short for modern carriages. After decades as a film set and mail sorting center, the building was saved from demolition in 1973 and converted into what became the world's foremost collection of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and Post-Impressionist art.</p>

<p>The museum houses French art from 1848 to 1914, covering pivotal movements from Realism through Art Nouveau. <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> dominates the collection with numerous works including his <a href="/apps/masterpieces/art/claude-monet-rouen-cathedral"><strong>Rouen Cathedral</strong></a> series and <a href="/apps/masterpieces/art/claude-monet-saintlazare-station"><strong>Saint-Lazare Station</strong></a> paintings. The grand train shed now displays sculptures by Rodin beneath the original ornate station clock. Works by Renoir, Degas, Cézanne, Gauguin, and Van Gogh fill the galleries. Painter Edouard Detaille wrote in 1900 that the station "looks like a Palais des beaux-arts," a prophecy fulfilled 86 years later. The museum attracted 3.2 million visitors in 2022, making it France's second most-visited art museum.</p>`,
      faqs: [
        {
          question: "When was the Musée d'Orsay founded?",
          answer: "The <strong>Musée d'Orsay</strong> opened in December 1986 under President François Mitterrand. The building itself was constructed in 1900 as the Gare d'Orsay railway station, designed by Victor Laloux for the World's Fair."
        },
        {
          question: "What is the Musée d'Orsay known for?",
          answer: "The museum houses the world's largest collection of <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and Post-Impressionist masterpieces. Artists represented include <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a>, Renoir, Degas, Cézanne, Gauguin, and Van Gogh."
        },
        {
          question: "Why is the Musée d'Orsay in a train station?",
          answer: "The Gare d'Orsay operated as a railway terminal from 1900 to 1939, when its <strong>short platforms</strong> couldn't accommodate longer trains. After serving as a film set and mail center, the Beaux-Arts building was converted into a museum."
        },
        {
          question: "What Monet paintings are at the Musée d'Orsay?",
          answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet's</strong></a> works include his famous <a href=\"/apps/masterpieces/art/claude-monet-rouen-cathedral\"><strong>Rouen Cathedral</strong></a> series and multiple <strong>Saint-Lazare Station</strong> paintings capturing steam and light in the Paris terminal."
        },
        {
          question: "What period does the Musée d'Orsay cover?",
          answer: "The collection spans French art from <strong>1848 to 1914</strong>, bridging the gap between the Louvre (older works) and the Centre Pompidou (modern art). This period covers Realism, Impressionism, Post-Impressionism, Symbolism, and Art Nouveau."
        },
        {
          question: "What are the iconic features of the building?",
          answer: "The museum preserves the original <strong>glass roof</strong>, massive ornate station clocks, and soaring train shed nave. Sculptures by Rodin now occupy the grand hall where trains once arrived from southwestern France."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: musee-dorsay');

  // Museum 3: Art Institute of Chicago
  await prisma.museum.update({
    where: { slug: 'art-institute-chicago' },
    data: {
      description: `<p>The <strong>Art Institute of Chicago</strong> traces its origins to 1866 when 35 artists founded the Chicago Academy of Design. The museum moved into its current home in 1893, occupying a grand Beaux-Arts building constructed for the World's Columbian Exposition. The 2009 addition of Renzo Piano's Modern Wing expanded the museum to nearly one million square feet, making it the second-largest art museum in the United States after the Metropolitan Museum of Art.</p>

<p>The collection is best known for its <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and Post-Impressionist holdings, widely considered the finest outside France. Early Chicago collectors like Bertha Palmer acquired works directly from artists in the 1890s, bequeathing masterpieces to the museum in the 1920s. Visitors can see over 30 paintings by <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a>, including his Haystacks series. <a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> features prominently with works like <a href="/apps/masterpieces/art/edgar-degas-the-millinery-shop"><strong>The Millinery Shop</strong></a>. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> and other <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> masters fill the European galleries. Georges Seurat's Sunday Afternoon on La Grande Jatte remains among the museum's most iconic works.</p>`,
      faqs: [
        {
          question: "When was the Art Institute of Chicago founded?",
          answer: "The museum traces back to <strong>1866</strong> when 35 artists founded the Chicago Academy of Design. It moved to its current building in 1893, which was originally constructed for the World's Columbian Exposition."
        },
        {
          question: "What is the Art Institute known for?",
          answer: "The museum holds one of the finest <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> collections outside France. Highlights include over 30 <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> paintings and Seurat's Sunday Afternoon on La Grande Jatte."
        },
        {
          question: "What Degas paintings are at the Art Institute?",
          answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> is well represented with works including <a href=\"/apps/masterpieces/art/edgar-degas-the-millinery-shop\"><strong>The Millinery Shop</strong></a>, ballet scenes, and jockey paintings. The collection showcases his distinctive approach to modern Parisian life."
        },
        {
          question: "How big is the Art Institute of Chicago?",
          answer: "The museum spans nearly <strong>one million square feet</strong> after Renzo Piano's Modern Wing opened in 2009. This makes it the second-largest art museum in the United States, after the Metropolitan Museum of Art."
        },
        {
          question: "Who built the Art Institute's Impressionist collection?",
          answer: "Chicago collectors like <strong>Bertha Palmer</strong> purchased Impressionist works directly from artists in the 1890s. The Palmers and other patrons bequeathed their collections in the 1920s and 1930s, building the museum's renowned holdings."
        },
        {
          question: "What Dutch masters can I see at the Art Institute?",
          answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> and other <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> masters are displayed in the European galleries. Works include etchings and paintings showcasing 17th-century Dutch artistic achievement."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: art-institute-chicago');

  // Museum 4: National Gallery, London
  await prisma.museum.update({
    where: { slug: 'national-gallery' },
    data: {
      description: `<p>The <strong>National Gallery</strong> was founded in 1824 with 38 paintings purchased from the collector John Julius Angerstein. Unlike continental European museums that nationalized royal collections, Britain's gallery was built from scratch through private donations. The collection moved to its current William Wilkins building on Trafalgar Square in 1838, chosen deliberately for accessibility. Rich visitors arriving by carriage from the west and working-class pedestrians from east London could all reach it easily.</p>

<p>Today the museum holds over 2,300 paintings spanning the mid-13th to 20th centuries, representing major developments in Western art from Giotto to Cézanne. Works by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> and other <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> masters fill multiple galleries. <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet's</strong></a> <a href="/apps/masterpieces/art/claude-monet-the-japanis-bridge-footbridge-over-the-waterlily-p"><strong>Japanese Bridge</strong></a> and water lily paintings represent <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. Van Gogh's Sunflowers and Turner's The Fighting Temeraire remain visitor favorites. Entry to the permanent collection is free, honoring the gallery's original mission to make art accessible to everyone. Special exhibitions may require tickets.</p>`,
      faqs: [
        {
          question: "When was the National Gallery founded?",
          answer: "The National Gallery was founded in <strong>1824</strong> with 38 paintings from collector John Julius Angerstein. The current building on Trafalgar Square opened in 1838, designed by architect William Wilkins."
        },
        {
          question: "Is the National Gallery free?",
          answer: "Entry to the <strong>permanent collection is free</strong>, honoring the gallery's original mission to make art accessible to all classes. This policy has remained since the museum's founding. Special exhibitions may require tickets."
        },
        {
          question: "What paintings are at the National Gallery?",
          answer: "The collection includes Van Gogh's Sunflowers, <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> masterpieces, and <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet's</strong></a> <a href=\"/apps/masterpieces/art/claude-monet-the-japanis-bridge-footbridge-over-the-waterlily-p\"><strong>Japanese Bridge</strong></a>. Over 2,300 works span from the 13th to 20th century."
        },
        {
          question: "Why is the National Gallery on Trafalgar Square?",
          answer: "The location was chosen for <strong>accessibility</strong>. Rich visitors could arrive by carriage from the west, while working-class Londoners could walk from the east. This democratic placement supported the mission of art for everyone."
        },
        {
          question: "What periods does the National Gallery cover?",
          answer: "The collection spans from the <strong>mid-13th century to 1900</strong>, covering major Western art movements from Giotto through Cézanne. <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> works feature prominently."
        },
        {
          question: "What are the opening hours?",
          answer: "The National Gallery opens daily from <strong>10am to 6pm</strong> Saturday through Thursday, with extended hours until 9pm on Fridays. The museum sits on the north side of Trafalgar Square in central London."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: national-gallery');

  // Museum 5: The Metropolitan Museum of Art
  await prisma.museum.update({
    where: { slug: 'met' },
    data: {
      description: `<p>The <strong>Metropolitan Museum of Art</strong> was founded in 1870 by a group of Americans including businessmen, artists, and philanthropists seeking to bring art education to the public. Theodore Roosevelt Sr., father of the future president, numbered among the founders. The museum opened in 1872 on Fifth Avenue before relocating to Central Park in 1880, where architect Calvert Vaux designed the original Gothic Revival building. Today the Met spans approximately two million square feet, making it the largest art museum in the Americas.</p>

<p>The collection encompasses over two million works from every period and culture, organized into departments covering Egyptian, European, Asian, American, and Islamic art. <a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer's</strong></a> <a href="/apps/masterpieces/art/johannes-vermeer-young-woman-with-a-water-pitcher"><strong>Young Woman with a Water Pitcher</strong></a> represents the <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>, while <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet's</strong></a> water lily and Japanese bridge paintings showcase <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> features prominently alongside <a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a>. The Met Cloisters in Fort Tryon Park houses medieval European art. With 5.7 million visitors in 2024, the Met remains the most-visited museum in the United States.</p>`,
      faqs: [
        {
          question: "When was the Metropolitan Museum of Art founded?",
          answer: "The Met was founded in <strong>1870</strong> and opened to the public in 1872. The museum moved to its current Central Park location in 1880, into a building designed by Park architect Calvert Vaux."
        },
        {
          question: "How big is the Met?",
          answer: "The Metropolitan Museum spans approximately <strong>two million square feet</strong>, making it the largest art museum in the Americas and fourth-largest in the world. The collection includes over two million works from every culture and period."
        },
        {
          question: "What Dutch Golden Age paintings are at the Met?",
          answer: "<a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Johannes Vermeer's</strong></a> <a href=\"/apps/masterpieces/art/johannes-vermeer-young-woman-with-a-water-pitcher\"><strong>Young Woman with a Water Pitcher</strong></a> and <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> masterpieces represent the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>. Multiple galleries showcase 17th-century Dutch painting."
        },
        {
          question: "What Impressionist works are at the Met?",
          answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet's</strong></a> water lily and Japanese bridge paintings fill the <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> galleries. <a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Edgar Degas</strong></a> dancer paintings and works by Renoir also feature prominently."
        },
        {
          question: "Where is the Met located?",
          answer: "The main building sits at <strong>1000 Fifth Avenue</strong> along Central Park's eastern edge in Manhattan. The Met Cloisters, dedicated to medieval art, occupies Fort Tryon Park in northern Manhattan."
        },
        {
          question: "How many visitors does the Met get?",
          answer: "The Met welcomed <strong>5.7 million visitors in 2024</strong>, making it the most-visited museum in the United States and fourth most-visited art museum globally. European and American art departments draw the largest crowds."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: met');

  console.log('Batch 1 complete (5 museums)');
}

main().catch(console.error).finally(() => prisma.$disconnect());
