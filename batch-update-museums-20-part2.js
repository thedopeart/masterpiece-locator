const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'museum-of-russian-art-tereshchenko-museum-kyiv-ukr',
    faqs: [
      { question: "What is the Museum of Russian Art in Kyiv?", answer: "The Museum of Russian Art, also known as the <strong>Tereshchenko Museum</strong>, houses a collection of Russian painting and decorative arts assembled by the Tereshchenko family of Ukrainian industrialists and donated to Kyiv in 1925." },
      { question: "Where is the Museum of Russian Art located?", answer: "The museum is located on <strong>Tereshchenkivska Street</strong> in central Kyiv, Ukraine. The historic building previously housed the Tereshchenko family's private collection before becoming a public museum." },
      { question: "What artworks are in the collection?", answer: "The collection includes Russian <strong>Imperial-era paintings</strong>, icons, and decorative arts. It features works by prominent Russian artists from the 18th and 19th centuries documenting Russian artistic traditions." },
      { question: "Who were the Tereshchenkos?", answer: "The <strong>Tereshchenko family</strong> were Ukrainian sugar industrialists and art patrons who assembled one of the finest private collections of Russian art. They donated their collection to the city after the Russian Revolution." },
      { question: "Is the museum affected by current events?", answer: "Due to the ongoing conflict in Ukraine, visitors should check current operating status before planning a visit. Many Ukrainian museums have taken measures to protect collections and may have limited access." },
      { question: "What makes this collection important?", answer: "The collection documents <strong>Russian artistic development</strong> during the Imperial period, with examples of academic painting, portraiture, and decorative arts that defined Russian culture before the Soviet era." }
    ]
  },
  {
    slug: 'frans-hals-museum-haarlem-netherlands',
    description: `<p>The Frans Hals Museum occupies two historic buildings in Haarlem dedicated to the city's most famous artistic son. <a href="/apps/masterpieces/artist/frans-hals"><strong>Frans Hals</strong></a> spent his entire career in Haarlem, painting some of the Dutch Golden Age's most vivid portraits. The main museum, housed in the <strong>Oude Mannenhuis</strong> (Old Men's Home) where Hals spent his final years, displays his civic guard portraits and genre scenes. These massive group portraits, showing militia companies in animated poses, revolutionized a typically stiff format.</p>

<p>The collection provides context for Hals's innovations, with works by contemporaries and students surrounding his paintings. His loose, sketch-like brushwork influenced <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painters two centuries later. The museum's second location, Museum Hof, focuses on modern and contemporary art. Hals's late portraits, painted when he was elderly and poor, show a psychological depth that makes them feel remarkably modern. The museum owns the world's largest collection of his work.</p>`,
    faqs: [
      { question: "Where is the Frans Hals Museum located?", answer: "The main museum is in the <strong>Oude Mannenhuis</strong> on Groot Heiligland in central Haarlem, Netherlands. This building housed elderly men during Hals's time, and he spent his final years here receiving a small municipal pension." },
      { question: "What famous artworks are at the Frans Hals Museum?", answer: "The museum holds the world's largest <a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> collection, including his monumental civic guard portraits showing militia companies. His late works like Regents and Regentesses of the Old Men's Home demonstrate his revolutionary loose brushwork." },
      { question: "Why is Frans Hals important?", answer: "<a href=\"/apps/masterpieces/artist/frans-hals\"><strong>Frans Hals</strong></a> revolutionized portraiture with his energetic brushwork and ability to capture momentary expressions. His technique influenced <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> like Manet, who studied his work closely." },
      { question: "How much are tickets to the Frans Hals Museum?", answer: "Adult admission costs around <strong>€16</strong>, with discounts for students and children. The ticket includes both museum locations. Open Tuesday through Sunday, closed Mondays." },
      { question: "What is special about the museum building?", answer: "The <strong>Oude Mannenhuis</strong> dates to 1609 and features a peaceful courtyard surrounded by historic almshouse buildings. Hals painted the regents who ran this institution and lived here in poverty at the end of his life." },
      { question: "What other artists are represented?", answer: "Beyond Hals, the collection includes works by other Haarlem artists like Jacob van Ruisdael and Judith Leyster, providing context for the city's importance during the Dutch Golden Age as a major artistic center." }
    ]
  },
  {
    slug: 'musee-national-fernand-leger-biot-france',
    faqs: [
      { question: "What is the Musée National Fernand Léger?", answer: "The museum in Biot, France, is dedicated to <a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Fernand Léger</strong></a>, the French painter associated with <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>. It opened in 1960 and holds the largest collection of his paintings, ceramics, and monumental works." },
      { question: "Where is the museum located?", answer: "The museum is in <strong>Biot</strong>, a medieval hilltop village in the French Riviera between Nice and Antibes. Léger fell in love with this area and his widow established the museum here after his death." },
      { question: "What artworks are in the Léger Museum?", answer: "The collection includes over <strong>450 works</strong> spanning Léger's entire career, from early Cubist paintings to his bold, colorful late style. His ceramic murals and mosaics demonstrate his interest in making art accessible to working people." },
      { question: "Who was Fernand Léger?", answer: "<a href=\"/apps/masterpieces/artist/fernand-leger\"><strong>Fernand Léger</strong></a> (1881-1955) developed a personal form of <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a> featuring bold colors and mechanical forms. He believed art should celebrate modern industrial life and be accessible to everyone, not just elites." },
      { question: "When is the museum open?", answer: "The museum is open <strong>Wednesday through Monday</strong> from 10:00 AM to 5:00 PM (6:00 PM in summer), closed Tuesdays. Hours may vary seasonally, and it's closed some holidays." },
      { question: "How much are tickets?", answer: "Admission costs around <strong>€7 for adults</strong>, with free entry for visitors under 26 and on the first Sunday of each month. The price includes access to all galleries and the outdoor sculpture terrace." }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-d39orl233ans-orleans-france',
    faqs: [
      { question: "What is the Musée des Beaux-Arts d'Orléans?", answer: "The Orléans Museum of Fine Arts is one of France's important regional museums, founded in <strong>1797</strong> during the French Revolution. It holds significant collections of French painting from the 17th through 20th centuries." },
      { question: "Where is the museum located in Orléans?", answer: "The museum is in central <strong>Orléans</strong>, about 80 miles southwest of Paris. The city is famous for Joan of Arc, who lifted its siege in 1429, and the museum is near the historic cathedral." },
      { question: "What famous artworks are here?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a>, <a href=\"/apps/masterpieces/artist/philippe-de-champaigne\"><strong>Philippe de Champaigne</strong></a>, and important French 18th and 19th-century paintings. The <strong>pastels collection</strong> by Maurice-Quentin de La Tour is particularly notable." },
      { question: "Is the Musée des Beaux-Arts d'Orléans free?", answer: "Yes, entry to the permanent collection is <strong>free</strong>. Special exhibitions may require tickets. The museum is open Tuesday through Sunday, closed Mondays." },
      { question: "When was the museum renovated?", answer: "The museum underwent major renovation and expansion, reopening in <strong>1984</strong> with modernized galleries. The building combines historic architecture with contemporary museum facilities." },
      { question: "What makes the collection significant?", answer: "The museum holds one of France's finest <strong>regional collections</strong> outside Paris, with particular strength in 17th-century French painting and an exceptional group of pastels documenting this delicate medium's development." }
    ]
  },
  {
    slug: 'bavarian-state-painting-collections-munich-germany',
    faqs: [
      { question: "What are the Bavarian State Painting Collections?", answer: "The Bavarian State Painting Collections (<strong>Bayerische Staatsgemäldesammlungen</strong>) oversee multiple museums in Munich including the Alte Pinakothek, Neue Pinakothek, and Pinakothek der Moderne, forming one of Europe's great art institutions." },
      { question: "Where are the collections located?", answer: "The main museums cluster in Munich's <strong>Kunstareal</strong> (art district). The three Pinakotheks are within walking distance of each other, near the university district north of the city center." },
      { question: "What famous artworks are in the collection?", answer: "The collections span from medieval altarpieces to contemporary art. Highlights include <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer</strong></a>'s Four Apostles, <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a> masterpieces, and comprehensive <a href=\"/apps/masterpieces/movement/expressionism\"><strong>German Expressionist</strong></a> holdings." },
      { question: "How did Bavaria assemble these collections?", answer: "The Bavarian royal family, the <strong>Wittelsbachs</strong>, collected art for 700 years. The collections became state property in 1918 after the monarchy ended, preserving one of Europe's finest princely collections for the public." },
      { question: "Are the Pinakotheks separate museums?", answer: "Yes, the <strong>Alte Pinakothek</strong> shows Old Masters, the Neue Pinakothek covers 18th-19th centuries, and the Pinakothek der Moderne focuses on 20th-century and contemporary art. Combination tickets offer access to multiple museums." },
      { question: "How much are tickets?", answer: "Individual museum tickets cost around <strong>€7-10</strong>, with a day pass for all three Pinakotheks available. Free entry on Sundays. The museums are closed Mondays except Pinakothek der Moderne." }
    ]
  },
  {
    slug: 'guggenheim',
    description: `<p>The Solomon R. Guggenheim Museum transformed museum architecture when it opened in 1959, six months after Frank Lloyd Wright's death. Wright designed the building as a <strong>"temple of spirit"</strong> where visitors would take an elevator to the top and descend a continuous spiral ramp, viewing art along the way. The inverted ziggurat form shocked New York, and artists protested that the slanted walls would distort their paintings. Solomon Guggenheim, a copper mining magnate, began collecting abstract art in the 1920s under the guidance of artist Hilla von Rebay, who became the museum's first director.</p>

<p>The collection focuses on modern and contemporary art, particularly <a href="/apps/masterpieces/movement/abstract-art"><strong>abstract painting</strong></a>. Works by <a href="/apps/masterpieces/artist/wassily-kandinsky"><strong>Kandinsky</strong></a>, whom Guggenheim collected extensively, form the core holdings. The museum also owns important pieces by <a href="/apps/masterpieces/artist/paul-klee"><strong>Paul Klee</strong></a>, Mondrian, and later abstract expressionists. The building was designated a <strong>UNESCO World Heritage Site</strong> in 2019, recognizing Wright's architectural masterpiece. The museum expanded with a tower addition in 1992.</p>`,
    faqs: [
      { question: "Where is the Guggenheim Museum located?", answer: "The museum is at <strong>1071 Fifth Avenue</strong> at 89th Street on Manhattan's Upper East Side, facing Central Park. The closest subway station is 86th Street on the 4, 5, or 6 lines." },
      { question: "Who designed the Guggenheim building?", answer: "<strong>Frank Lloyd Wright</strong> designed the building over 16 years, completing it in 1959 just before his death. The inverted spiral form was revolutionary, and UNESCO designated it a World Heritage Site in 2019." },
      { question: "What famous artworks are at the Guggenheim?", answer: "The collection includes major works by <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky</strong></a>, <a href=\"/apps/masterpieces/artist/paul-klee\"><strong>Klee</strong></a>, Mondrian, and abstract expressionists. Guggenheim assembled the world's largest Kandinsky collection outside Russia." },
      { question: "How much are tickets to the Guggenheim?", answer: "Adult admission costs <strong>$25</strong>, with discounts for seniors ($18) and students ($18). Children under 12 enter free. The museum offers pay-what-you-wish entry Saturday evenings from 5:00-7:45 PM." },
      { question: "When is the Guggenheim open?", answer: "The museum is open <strong>Sunday through Wednesday and Friday</strong> from 11:00 AM to 6:00 PM, closed Thursdays. Saturday hours extend until 7:45 PM. Closed Thanksgiving and Christmas." },
      { question: "Why is the Guggenheim spiral controversial?", answer: "Artists initially protested that the <strong>slanted walls</strong> would distort paintings. The continuous ramp changes how visitors experience art compared to traditional galleries. Some find it liberating, others distracting from the artworks themselves." }
    ]
  },
  {
    slug: 'pinacoteca-nazionale-di-bologna-bologna-italy',
    faqs: [
      { question: "What is the Pinacoteca Nazionale di Bologna?", answer: "The National Art Gallery of Bologna houses one of Italy's important regional collections, particularly strong in <strong>Bolognese painting</strong> from the 14th through 18th centuries. It documents Bologna's role as a major artistic center." },
      { question: "Where is the Pinacoteca Nazionale located?", answer: "The museum occupies a former <strong>Jesuit college</strong> on Via delle Belle Arti in central Bologna, near the university district. The historic building dates to the 16th century." },
      { question: "What famous artworks are in Bologna?", answer: "The collection includes masterpieces by <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> (his Ecstasy of St. Cecilia), Guido Reni, the Carracci family, and other Bolognese masters who defined Italian <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painting." },
      { question: "Who were the Bolognese School artists?", answer: "The <strong>Bolognese School</strong> included the Carracci family (Annibale, Agostino, Ludovico) and Guido Reni, who established Bologna as a major artistic center rivaling Rome and Florence during the late 16th and 17th centuries." },
      { question: "When is the Pinacoteca open?", answer: "The museum is open <strong>Tuesday through Sunday</strong> from 9:00 AM to 7:00 PM, closed Mondays. Extended summer hours may apply during peak tourist season." },
      { question: "How much are tickets?", answer: "Admission costs around <strong>€6 for adults</strong>, with EU student and senior discounts available. Free entry on the first Sunday of each month and for visitors under 18." }
    ]
  },
  {
    slug: 'musee-de-lorangerie',
    description: `<p>The Musée de l'Orangerie presents <a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a>'s monumental Water Lilies in two oval rooms designed specifically for these paintings. Monet donated the eight panels to France the day after the 1918 armistice, intending them as a <strong>"monument to peace."</strong> The museum, originally built as a greenhouse for the Tuileries Garden's orange trees, was converted to display these works. The curved walls and natural light from above create an immersive environment where viewers stand surrounded by Monet's late vision of his Giverny water garden.</p>

<p>Beyond the Water Lilies rooms, the museum holds the <strong>Walter-Guillaume collection</strong> of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> and early modern painting. Works by <a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Renoir</strong></a>, Cézanne, Picasso, and Modigliani fill the lower galleries. The collection reflects dealer Paul Guillaume's taste and was donated by his widow. The intimate scale makes the Orangerie feel less overwhelming than larger Paris museums while holding masterworks of comparable quality.</p>`,
    faqs: [
      { question: "Where is the Musée de l'Orangerie located?", answer: "The museum is in the <strong>Tuileries Garden</strong> at the Place de la Concorde end, near the Louvre in central Paris. The closest metro stations are Concorde on multiple lines." },
      { question: "What are Monet's Water Lilies?", answer: "<a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Claude Monet</strong></a> donated eight massive panels depicting his water garden at Giverny to France in 1918 as a <strong>monument to peace</strong>. They're displayed in two oval rooms designed specifically for these paintings." },
      { question: "What is the Walter-Guillaume collection?", answer: "The collection includes <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and early modern works assembled by art dealer Paul Guillaume. His widow Domenica donated it, adding paintings by <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a>, Cézanne, Picasso, and Modigliani." },
      { question: "How much are tickets to the Orangerie?", answer: "Adult admission costs around <strong>€12.50</strong>, with combination tickets available including the Musée d'Orsay. Free for visitors under 18 and EU residents under 26. First Sunday of each month offers free entry." },
      { question: "When is the museum open?", answer: "The Orangerie is open <strong>Wednesday through Monday</strong> from 9:00 AM to 6:00 PM, closed Tuesdays. Last entry is 45 minutes before closing. Advance booking is strongly recommended." },
      { question: "Why is the building called the Orangerie?", answer: "The building was constructed in <strong>1852 as a greenhouse</strong> to shelter orange trees from the Tuileries Garden during winter. Napoleon III commissioned it, and it was converted to a museum after World War I." }
    ]
  },
  {
    slug: 'yale-art-gallery',
    faqs: [
      { question: "What is the Yale University Art Gallery?", answer: "Founded in <strong>1832</strong>, Yale's art museum is the oldest university art museum in the United States. It holds over 300,000 objects spanning ancient times to today, serving both students and the public." },
      { question: "Where is the Yale Art Gallery located?", answer: "The museum is at <strong>1111 Chapel Street</strong> in New Haven, Connecticut, on Yale's campus. The historic Louis Kahn-designed building connects to earlier structures creating an integrated museum complex." },
      { question: "What famous artworks are at Yale?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> (Night Café), Picasso, and comprehensive holdings of American art. The <strong>African art collection</strong> and ancient Mediterranean objects are particularly strong." },
      { question: "Is the Yale Art Gallery free?", answer: "Yes, admission is <strong>free</strong> for all visitors. The gallery is open Tuesday through Saturday 10:00 AM to 5:00 PM (until 8:00 PM Thursdays) and Sunday 1:00-6:00 PM. Closed Mondays and major holidays." },
      { question: "Who designed the Yale Art Gallery building?", answer: "<strong>Louis Kahn</strong> designed the 1953 addition, his first major commission. The building features his innovative concrete ceiling and open floor plan, influencing museum architecture for decades." },
      { question: "What is Yale's collection known for?", answer: "Yale holds exceptional <strong>American paintings and decorative arts</strong>, early Italian painting, African sculpture, and Asian art. The collection serves teaching purposes while offering museumgoers one of New England's finest art museums." }
    ]
  },
  {
    slug: 'ny-carlsberg-glyptotek',
    description: `<p>The Ny Carlsberg Glyptotek was founded by brewery magnate <strong>Carl Jacobsen</strong>, who donated his collection of ancient sculpture and French painting to Denmark in 1888. Jacobsen, whose family owned the Carlsberg brewery, believed art should be accessible to all citizens. The museum opened in 1897 with Jacobsen's original collection, later expanding to include his son Helge's donations. The name "glyptotek" comes from the Greek word for sculpture, reflecting the museum's original focus on ancient statuary.</p>

<p>The collection divides between ancient art (Egyptian, Greek, Roman, Etruscan) and 19th-century French painting and sculpture. The <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> holdings include works by <a href="/apps/masterpieces/artist/paul-gauguin"><strong>Gauguin</strong></a>, Degas, and Monet. The museum owns the world's largest collection of Gauguin's paintings outside France. The <strong>Winter Garden</strong>, a glass-roofed atrium with palms and a fountain, provides a peaceful space between galleries. The neoclassical building and 1996 modern extension create an architectural dialogue across centuries.</p>`,
    faqs: [
      { question: "Where is the Ny Carlsberg Glyptotek located?", answer: "The museum is on <strong>Dantes Plads</strong> near Copenhagen's Tivoli Gardens and Central Station. The neoclassical building and modern wing are easily reached from the city center." },
      { question: "Who founded the Ny Carlsberg Glyptotek?", answer: "<strong>Carl Jacobsen</strong>, the Carlsberg brewery magnate, donated his art collection to Denmark in 1888. He believed art should be free and accessible to everyone, establishing the museum with this democratic vision." },
      { question: "What famous artworks are at the Glyptotek?", answer: "The museum holds Denmark's finest collection of ancient sculpture and the world's largest <a href=\"/apps/masterpieces/artist/paul-gauguin\"><strong>Gauguin</strong></a> collection outside France. <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> works by Degas, Monet, and Renoir are also highlights." },
      { question: "Is the Ny Carlsberg Glyptotek free?", answer: "Admission costs around <strong>DKK 135 for adults</strong> (about €18), but entry is free on Tuesdays. Visitors under 27 always enter free. The museum is open Tuesday through Sunday." },
      { question: "What is the Winter Garden?", answer: "The <strong>Winter Garden</strong> is a glass-roofed atrium at the museum's heart, filled with palm trees and featuring a fountain. It provides a peaceful retreat and connects the ancient art and French painting wings." },
      { question: "What makes the collection unique?", answer: "The museum unusually combines <strong>ancient Mediterranean sculpture</strong> with 19th-century French art, reflecting Carl Jacobsen's eclectic collecting interests. This pairing creates unexpected connections between classical and modern art." }
    ]
  },
  {
    slug: 'staatsgalerie-stuttgart-stuttgart-germany',
    faqs: [
      { question: "What is the Staatsgalerie Stuttgart?", answer: "The State Gallery of Stuttgart is one of Germany's important art museums, founded by King Wilhelm I of Württemberg in <strong>1843</strong>. It holds significant collections of Old Masters and modern art, particularly strong in German painting." },
      { question: "Where is the Staatsgalerie located?", answer: "The museum is in central <strong>Stuttgart</strong>, capital of Baden-Württemberg. The original neoclassical building and James Stirling's distinctive postmodern 1984 addition create an architectural landmark." },
      { question: "What famous artworks are here?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, <a href=\"/apps/masterpieces/artist/peter-paul-rubens\"><strong>Rubens</strong></a>, and exceptional holdings of German <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> painting. The modern collection features important <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> and contemporary works." },
      { question: "What is the Stirling building?", answer: "British architect <strong>James Stirling</strong> designed the 1984 extension, a landmark of postmodern architecture with colorful handrails, curves, and bold shapes. It doubled the museum's space and became one of Europe's most influential museum buildings." },
      { question: "How much are tickets?", answer: "Adult admission costs around <strong>€7-12</strong> depending on exhibitions, with reduced rates for students and groups. The museum offers free entry on Wednesdays. Open Tuesday through Sunday, closed Mondays." },
      { question: "What makes Stuttgart's collection notable?", answer: "The museum holds one of Germany's finest collections of <strong>Swabian medieval art</strong> and comprehensive German painting from all periods. The modern holdings document German artistic responses to war, division, and reunification." }
    ]
  },
  {
    slug: 'calouste-gulbenkian-museum-lisbon-portugal',
    description: `<p>The Calouste Gulbenkian Museum houses the private collection of <strong>Calouste Gulbenkian</strong> (1869-1955), an Armenian oil magnate who made his fortune negotiating oil concessions in the Middle East. Gulbenkian assembled his collection over 40 years, buying only objects he considered absolutely first-rate. He settled in Lisbon during World War II and bequeathed his collection to Portugal. The purpose-built museum, opened in 1969, sits in a garden designed as part of the total artistic experience.</p>

<p>The collection spans 5,000 years, from ancient Egyptian artifacts through <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painting. Works by <a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt</strong></a>, Turner, and Renoir represent European painting at its finest. Gulbenkian's extraordinary <strong>Art Nouveau jewelry</strong> by René Lalique includes over 150 pieces made exclusively for him. The Islamic art collection reflects his Middle Eastern connections. The museum's setting and thoughtful display create an intimate viewing experience that honors Gulbenkian's refined taste.</p>`,
    faqs: [
      { question: "Who was Calouste Gulbenkian?", answer: "<strong>Calouste Gulbenkian</strong> (1869-1955) was an Armenian businessman who earned the nickname \"Mr. Five Percent\" for his stake in Middle Eastern oil companies. He spent 40 years assembling one of Europe's finest private art collections." },
      { question: "Where is the Gulbenkian Museum located?", answer: "The museum is in the <strong>Gulbenkian Garden</strong> near Praça de Espanha in Lisbon. The 1969 purpose-built facility integrates architecture, collection, and landscape into a unified artistic experience." },
      { question: "What famous artworks are at the Gulbenkian?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, Turner, Renoir, and Monet. The <strong>Lalique jewelry</strong> collection (over 150 Art Nouveau pieces) and Islamic art holdings are exceptional." },
      { question: "How much are tickets?", answer: "Adult admission costs around <strong>€10</strong>, with a combined ticket including the Modern Art Center available for €13. Free entry on Sundays after 2:00 PM. Open Wednesday through Monday, closed Tuesdays." },
      { question: "What makes Gulbenkian's collection unique?", answer: "Gulbenkian bought only objects he considered <strong>absolutely first-rate</strong>, creating a small but exceptionally high-quality collection. The range from ancient Egypt to Impressionism reflects his eclectic but discerning taste." },
      { question: "What is the Gulbenkian Foundation?", answer: "Gulbenkian's bequest created a charitable <strong>foundation</strong> that operates the museum, concert hall, library, and gardens. It funds arts, education, and social welfare projects throughout Portugal and beyond." }
    ]
  },
  {
    slug: 'sammlung-karsch-berlin-germany',
    faqs: [
      { question: "What is the Sammlung Karsch?", answer: "The Karsch Collection is a private art collection in Berlin focusing on German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> art, particularly Die Brücke artists. It includes important works by <a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Kirchner</strong></a> and other early 20th-century German modernists." },
      { question: "Where is the Sammlung Karsch located?", answer: "The collection is based in <strong>Berlin</strong>, though being private, public access is limited. Works from the collection appear in museum exhibitions and publications, documenting German Expressionism's development." },
      { question: "What artworks are in the Karsch Collection?", answer: "The collection specializes in <strong>Die Brücke</strong> paintings, prints, and drawings, including significant works by Kirchner, Heckel, Schmidt-Rottluff, and Mueller. These artists pioneered German Expressionism in Dresden before World War I." },
      { question: "Who assembled the Karsch Collection?", answer: "The collection was assembled by a private Berlin collector focusing specifically on <a href=\"/apps/masterpieces/movement/expressionism\"><strong>German Expressionism</strong></a>. The focused collecting strategy created a comprehensive survey of Die Brücke artists' work." },
      { question: "Can the public see the collection?", answer: "As a <strong>private collection</strong>, public access is limited. However, works are regularly loaned to museum exhibitions worldwide, and the collection has been published in scholarly catalogs." },
      { question: "Why is Die Brücke important?", answer: "<strong>Die Brücke</strong> (The Bridge), founded in Dresden in 1905, was Germany's first <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> group. These artists used bold colors and distorted forms to express emotional intensity, influencing 20th-century art." }
    ]
  },
  {
    slug: 'wallrafrichartz-museum-cologne-germany',
    faqs: [
      { question: "What is the Wallraf-Richartz Museum?", answer: "The Wallraf-Richartz Museum in Cologne holds one of Germany's great collections of medieval to early modern painting, founded when merchant Johann Heinrich Richartz funded a building in <strong>1861</strong> to house Ferdinand Franz Wallraf's art collection." },
      { question: "Where is the museum located?", answer: "The museum is in central <strong>Cologne</strong> near the historic old town. A modern building designed by Oswald Mathias Ungers houses the collection, opened in 2001 after the collection spent years in shared space." },
      { question: "What famous artworks are here?", answer: "The museum excels in <strong>medieval Cologne School painting</strong>, with altarpieces by Stefan Lochner. It also holds important works by <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>, Rubens, and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> paintings." },
      { question: "What is the Cologne School?", answer: "The <strong>Cologne School</strong> refers to painters active in Cologne during the 14th-16th centuries. These artists, including Stefan Lochner, created luminous altarpieces combining International Gothic elegance with Netherlandish realism." },
      { question: "How much are tickets?", answer: "Adult admission costs around <strong>€11</strong>, with reduced rates for students and groups. First Thursday of each month offers free entry. Open Tuesday through Sunday, closed Mondays." },
      { question: "Who were Wallraf and Richartz?", answer: "<strong>Ferdinand Franz Wallraf</strong> (1748-1824) assembled artworks rescued from secularized churches. Merchant Johann Heinrich Richartz funded the building to house them, creating Cologne's first public art museum in 1861." }
    ]
  },
  {
    slug: 'pinacoteca-vaticana-vatican',
    faqs: [
      { question: "What is the Pinacoteca Vaticana?", answer: "The Vatican Picture Gallery houses the Vatican Museums' painting collection in a purpose-built 1932 gallery. Pope Pius XI established it to display <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> and <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> masterpieces collected by the papacy over centuries." },
      { question: "Where is the Pinacoteca Vaticana located?", answer: "The gallery is part of the <strong>Vatican Museums</strong> complex in Vatican City. Visitors access it through the main museum entrance, and it's typically less crowded than the Sistine Chapel." },
      { question: "What famous artworks are in the Vatican Gallery?", answer: "Highlights include <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s Transfiguration, <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a>'s Deposition, and works by Leonardo, Giotto, and Fra Angelico. The collection documents Catholic art's evolution from medieval to Baroque periods." },
      { question: "How are paintings arranged?", answer: "The gallery displays paintings <strong>chronologically</strong> in 18 rooms, from medieval Byzantine icons through 19th-century works. This arrangement shows the development of Italian painting over 800 years." },
      { question: "How much does Vatican Museums admission cost?", answer: "Vatican Museums tickets cost around <strong>€20 for adults</strong>, providing access to the Pinacoteca, Sistine Chapel, Raphael Rooms, and other collections. Advance booking is essential to avoid long lines." },
      { question: "When is the Pinacoteca open?", answer: "The Vatican Museums are open <strong>Monday through Saturday</strong> from 9:00 AM to 6:00 PM (last entry 4:00 PM). Closed Sundays except the last Sunday of each month when entry is free but very crowded." }
    ]
  },
  {
    slug: 'residenzgalerie-salzburg-austria',
    faqs: [
      { question: "What is the Residenzgalerie Salzburg?", answer: "The Residenzgalerie occupies the former palace of Salzburg's prince-archbishops, displaying European painting from the <strong>16th through 19th centuries</strong>. The gallery opened in 1923, combining princely collection remnants with later acquisitions." },
      { question: "Where is the Residenzgalerie located?", answer: "The gallery is in the <strong>Salzburg Residenz</strong> on Residenzplatz in the old town center. The baroque palace dates to the 16th century and visitors can tour both the state rooms and art gallery." },
      { question: "What artworks are in the collection?", answer: "The collection includes <strong>Dutch and Flemish paintings</strong> from the 17th century, Italian works, and Austrian painting. <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> and Rubens are among the represented masters." },
      { question: "Who were Salzburg's prince-archbishops?", answer: "Salzburg's <strong>prince-archbishops</strong> were both religious leaders and temporal rulers of an independent state until 1803. They built the Residenz as their palace and assembled art collections reflecting their power and taste." },
      { question: "How much are tickets?", answer: "Admission costs around <strong>€13 for adults</strong>, with combination tickets available including the Residenz state rooms. Reduced rates for students and seniors. Open Tuesday through Sunday, closed Mondays." },
      { question: "Can visitors see Mozart connections?", answer: "While Mozart performed for the prince-archbishops in the Residenz's Carabinieri Hall, the gallery focuses on visual art rather than Mozart history. The nearby Mozart museums cover the composer's Salzburg connections." }
    ]
  },
  {
    slug: 'guimet-museum-paris-france',
    description: `<p>The Musée Guimet houses France's national collection of Asian art, founded by industrialist <strong>Émile Guimet</strong> who traveled extensively in Asia during the 1870s. Guimet established his museum in Lyon in 1879, but it moved to Paris in 1889, occupying a purpose-built structure designed by Jules Chatron. The museum originally focused on Asian religions, reflecting Guimet's fascination with Buddhism and Hinduism. Over time, the collection expanded to encompass Asian art broadly, from ancient sculpture to contemporary works.</p>

<p>The collection spans the entire Asian continent, with particularly strong holdings in <strong>Khmer sculpture from Cambodia</strong>, Chinese ceramics, and Japanese art. The museum owns one of the world's finest collections of Angkor-era sculpture outside Cambodia. Works range from intimate jade carvings to monumental Buddhist statuary. The <strong>Buddhist Pantheon</strong> rotunda displays religious sculptures from across Asia, showing how Buddhism adapted as it spread. A separate building houses the Japanese art collection. The museum's library contains over 100,000 volumes on Asian civilizations.</p>`,
    faqs: [
      { question: "Where is the Musée Guimet located?", answer: "The museum is at <strong>6 Place d'Iéna</strong> in Paris's 16th arrondissement, near the Trocadéro. The closest metro station is Iéna on line 9." },
      { question: "Who founded the Musée Guimet?", answer: "Industrialist <strong>Émile Guimet</strong> founded the museum in Lyon in 1879 after traveling through Asia. He moved it to Paris in 1889, creating France's national collection of Asian art." },
      { question: "What famous artworks are at Guimet?", answer: "The museum holds exceptional <strong>Khmer sculpture from Angkor</strong>, Chinese ceramics spanning 4,000 years, and comprehensive Japanese art. The collection includes Buddhist statuary from India, Central Asia, and East Asia." },
      { question: "What is the Buddhist Pantheon?", answer: "The <strong>rotunda</strong> displays Buddhist sculptures from across Asia, showing how the religion evolved as it spread from India through Central Asia to China, Korea, and Japan, adapting to local artistic traditions." },
      { question: "How much are tickets to Musée Guimet?", answer: "Adult admission costs around <strong>€12</strong>, with free entry for visitors under 26 who are EU residents. The museum is open Wednesday through Monday from 10:00 AM to 6:00 PM, closed Tuesdays." },
      { question: "Does the museum have contemporary Asian art?", answer: "While the Guimet focuses primarily on <strong>traditional and ancient art</strong>, it includes some modern works and hosts temporary exhibitions exploring contemporary Asian artists and themes." }
    ]
  },
  {
    slug: 'mus233e-des-beauxarts-de-nantes-nantes-france',
    faqs: [
      { question: "What is the Musée des Beaux-Arts de Nantes?", answer: "The Nantes Museum of Fine Arts is one of France's major provincial museums, founded in <strong>1801</strong> during the Napoleonic period. It holds comprehensive collections of European painting from the 13th century through contemporary art." },
      { question: "Where is the museum located?", answer: "The museum is in central <strong>Nantes</strong> in western France, near the historic château. The building, constructed specifically as an art museum, opened in 1900 and was extensively renovated in 2017." },
      { question: "What famous artworks are here?", answer: "The collection includes works by <a href=\"/apps/masterpieces/artist/georges-de-la-tour\"><strong>Georges de La Tour</strong></a>, <a href=\"/apps/masterpieces/artist/francisco-de-zurbaran\"><strong>Zurbarán</strong></a>, Delacroix, and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a>. The <strong>modern art collection</strong> features important abstract and contemporary works." },
      { question: "Is the museum free?", answer: "Yes, entry to the permanent collection is <strong>free</strong>. Special exhibitions may require tickets. The museum is open Wednesday through Monday from 10:00 AM to 6:00 PM (8:00 PM Thursdays), closed Tuesdays." },
      { question: "When was the museum renovated?", answer: "The museum completed a <strong>major renovation in 2017</strong>, expanding to 17,000 square meters and creating a contemporary extension connected to the historic 1900 building. The project modernized facilities while preserving architectural heritage." },
      { question: "What is Nantes's artistic heritage?", answer: "As a major Atlantic port, <strong>Nantes</strong> prospered through trade (including the slave trade, now acknowledged in city museums). This wealth funded art collecting, and the museum documents both European art and the city's complex history." }
    ]
  },
  {
    slug: 'museo-de-arte-de-sao-paulo-masp-sao-paulo-brazil',
    description: `<p>The Museu de Arte de São Paulo (MASP) stands as Latin America's most important art museum, founded in 1947 by media magnate <strong>Assis Chateaubriand</strong> with Italian art dealer Pietro Maria Bardi as director. The collection began with European Old Masters purchased from post-war Europe, establishing Brazil's first comprehensive survey of Western art. The museum moved to its current location in 1968, occupying Lina Bo Bardi's radical modernist building that has become São Paulo's architectural icon.</p>

<p>The building's <strong>crimson-red structure</strong> suspended 8 meters above ground creates a covered plaza beneath, democratically opening the space to all. Inside, Bo Bardi displayed paintings on clear glass and concrete easels, eliminating hierarchy and chronology. The collection includes works by <a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt</strong></a>, <a href="/apps/masterpieces/artist/diego-velazquez"><strong>Velázquez</strong></a>, and Renoir alongside Brazilian modernists. MASP challenged the notion that great art belonged only in European or North American museums, asserting Brazil's place in global culture.</p>`,
    faqs: [
      { question: "Where is MASP located?", answer: "MASP is on <strong>Avenida Paulista</strong>, São Paulo's main commercial avenue. The building's distinctive red structure suspended above ground makes it one of Brazil's most recognizable modern buildings." },
      { question: "Who designed the MASP building?", answer: "Architect <strong>Lina Bo Bardi</strong> designed the 1968 building with its radical free-span structure. The museum floats above a covered plaza, creating public space beneath that embodies democratic ideals." },
      { question: "What famous artworks are at MASP?", answer: "The collection includes <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a>'s portraits, <a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Velázquez</strong></a>, Renoir, and Van Gogh. It's the finest collection of European Old Masters and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionists</strong></a> in the Southern Hemisphere." },
      { question: "What are the glass easels?", answer: "Lina Bo Bardi displayed paintings on <strong>clear acrylic and concrete supports</strong>, making both sides visible and eliminating traditional chronological or hierarchical arrangements. This revolutionary display emphasized democratic viewing." },
      { question: "How much are tickets to MASP?", answer: "Adult admission costs around <strong>R$70</strong> (about $14 USD), with free entry on Tuesdays. Students and seniors receive discounts. Open Tuesday through Sunday from 10:00 AM to 6:00 PM (8:00 PM Thursdays)." },
      { question: "Why is MASP important to Brazil?", answer: "MASP demonstrated that <strong>world-class art</strong> could exist in Latin America, challenging European and North American cultural dominance. The collection and building became symbols of Brazilian modernization and cultural ambition." }
    ]
  },
  {
    slug: 'academy-of-fine-arts-vienna-vienna-austria',
    faqs: [
      { question: "What is the Academy of Fine Arts Vienna?", answer: "The Academy of Fine Arts is both an art school (founded <strong>1692</strong>) and museum holding an important collection of European painting. It's famous for rejecting Adolf Hitler's application twice, redirecting history." },
      { question: "Where is the Academy located?", answer: "The Academy is on <strong>Schillerplatz</strong> in Vienna's first district, near the Naschmarkt. The historic building designed by Theophil Hansen opened in 1877 in neoclassical style." },
      { question: "What famous artworks are in the collection?", answer: "The gallery holds <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Hieronymus Bosch</strong></a>'s Last Judgment triptych, one of his few surviving works. Other highlights include paintings by Rubens, Cranach, and 19th-century Austrian masters." },
      { question: "Can visitors tour the Academy Gallery?", answer: "Yes, the <strong>Gemäldegalerie</strong> (Picture Gallery) is open to the public Tuesday through Sunday. Admission costs around €14 for adults. The teaching studios are generally not accessible to tourists." },
      { question: "What is the Hitler connection?", answer: "The Academy famously <strong>rejected Adolf Hitler's application</strong> to study painting in 1907 and 1908, judging his sample drawings inadequate. This rejection influenced his later life, though the Academy bears no responsibility for his choices." },
      { question: "Why is Bosch's Last Judgment important?", answer: "<a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Hieronymus Bosch</strong></a> created fewer than 25 surviving paintings, making the Academy's triptych exceptionally rare. The <strong>Last Judgment</strong> shows his characteristic fantastic imagery depicting heaven, earth, and hell." }
    ]
  }
];

async function main() {
  console.log('Starting batch update of 20 museums with FAQs (Part 2)...');

  for (const update of updates) {
    try {
      const updateData = {
        faqs: update.faqs,
        updatedAt: new Date()
      };

      // Add description only if it exists in the update
      if (update.description) {
        updateData.description = update.description;
      }

      await prisma.museum.update({
        where: { slug: update.slug },
        data: updateData
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${update.slug}`, error.message);
    }
  }

  console.log('Batch update complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
