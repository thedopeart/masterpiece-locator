const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const updates = [
  {
    slug: 'david-hockney',
    bioFull: `<p><a href="/apps/masterpieces/artist/david-hockney"><strong>David Hockney</strong></a> (born 1937) is a British painter, draftsman, and photographer widely considered one of the most influential artists of the 20th and 21st centuries. Born in Bradford, England, he studied at the Royal College of Art in London before moving to Los Angeles in the 1960s, where the California light and swimming pool culture transformed his work.</p><p>Hockney's <strong>swimming pool paintings</strong>, including <em>A Bigger Splash</em> (1967) and <em>Portrait of an Artist (Pool with Two Figures)</em>, became icons of modern art. The latter sold for <strong>$90.3 million</strong> at auction in 2018. In his eighties, he turned to iPad painting, creating vibrant Yorkshire landscapes with the same restless curiosity that's defined his six-decade career. Our collection includes works displayed at major institutions worldwide.</p>`,
    faqs: [
      { question: "What is David Hockney best known for?", answer: "Hockney is best known for his <strong>California swimming pool paintings</strong> of the 1960s and 70s. Works like <em>A Bigger Splash</em> and his double portraits combine flat, sun-drenched color with a relaxed, almost photographic clarity." },
      { question: "Where can I see David Hockney's art?", answer: "Major collections are at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Britain</strong></a> in London, the <strong>Getty Museum</strong> in Los Angeles, and <strong>MoMA</strong> in New York. The Salt's Mill gallery in Saltaire, near Bradford, holds a large permanent collection." },
      { question: "What art movement is Hockney associated with?", answer: "Hockney is linked to <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>, though he resists the label. His early work drew from pop imagery and mass culture, but his career spans figurative painting, photo collage, stage design, and digital art." },
    ],
  },
  {
    slug: 'gerhard-richter',
    bioFull: `<p><a href="/apps/masterpieces/artist/gerhard-richter"><strong>Gerhard Richter</strong></a> (born 1932) is a German painter who's spent six decades moving between photorealism, abstraction, and everything in between. Born in Dresden, he fled East Germany in 1961 (just before the Berlin Wall went up) and studied at the Düsseldorf Art Academy alongside Sigmar Polke and Blinky Palermo.</p><p>Richter's <strong>photo-paintings</strong> blur photographs onto canvas, while his squeegee abstractions drag layers of color across huge surfaces. He treats painting as a kind of philosophical experiment, questioning what images mean and whether they can tell the truth. His work has sold for over <strong>$46 million</strong> at auction. Our collection features works held in leading European and American institutions.</p>`,
    faqs: [
      { question: "What style does Gerhard Richter work in?", answer: "Richter works across <strong>multiple styles simultaneously</strong>, from blurred photo-paintings to colorful squeegee abstractions to grey monochromes. He deliberately avoids committing to one approach, treating each as equally valid." },
      { question: "Where can I see Richter's paintings?", answer: "The <strong>Gerhard Richter Archiv</strong> at the Albertinum in Dresden holds a major collection. Works also hang at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, Tate Modern, and the Art Institute of Chicago." },
      { question: "Why does Richter blur his photo-paintings?", answer: "The blurring effect creates <strong>distance between the viewer and the image</strong>. Richter paints from photographs, then drags a dry brush across the wet surface. It makes familiar images feel uncertain and raises questions about photographic truth." },
    ],
  },
  {
    slug: 'henry-moore',
    bioFull: `<p><a href="/apps/masterpieces/artist/henry-moore"><strong>Henry Moore</strong></a> (1898-1986) was a British sculptor whose reclining figures and abstract bronzes became some of the most recognized public artworks of the 20th century. Born in Castleford, Yorkshire, he studied at the Leeds School of Art and the Royal College of Art in London before developing his signature style of organic, hollowed-out forms inspired by natural landscapes and the human body.</p><p>Moore's <strong>large-scale bronzes</strong> stand outside major buildings worldwide, from the UNESCO headquarters in Paris to Lincoln Center in New York. During World War II, he created his famous <strong>shelter drawings</strong> of Londoners sleeping in Underground stations during the Blitz. Our collection includes works at institutions like the <a href="/apps/masterpieces/museum/tate-modern-london-uk"><strong>Tate</strong></a> in London.</p>`,
    faqs: [
      { question: "What is Henry Moore known for?", answer: "Moore is known for <strong>monumental bronze and stone sculptures</strong> of reclining figures and abstract organic forms. His pieces, often displayed outdoors, explore the relationship between the human body and natural landscape." },
      { question: "Where can I see Henry Moore sculptures?", answer: "The <strong>Henry Moore Foundation</strong> at Perry Green in Hertfordshire has the largest collection. Major works stand at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Britain</strong></a>, the Art Gallery of Ontario, and in public spaces across dozens of cities." },
      { question: "What inspired Henry Moore's sculptures?", answer: "Moore drew inspiration from <strong>natural forms like bones, shells, and pebbles</strong>, as well as pre-Columbian and African sculpture. The rolling Yorkshire landscape of his childhood also shaped his feel for organic, undulating shapes." },
    ],
  },
  {
    slug: 'isamu-noguchi',
    bioFull: `<p><a href="/apps/masterpieces/artist/isamu-noguchi"><strong>Isamu Noguchi</strong></a> (1904-1988) was a Japanese-American sculptor and designer who blurred the line between art, architecture, and landscape design. Born in Los Angeles to a Japanese poet father and an American writer mother, he grew up in Japan before returning to the U.S. as a teenager. He apprenticed briefly with Constantin Brancusi in Paris, an experience that shaped his lifelong devotion to carving and pure form.</p><p>Noguchi designed everything from <strong>Akari paper lanterns</strong> to playgrounds, gardens, and public plazas. His sculptural gardens in UNESCO's Paris headquarters and the Noguchi Museum in Long Island City, Queens, remain among his finest achievements. He worked in stone, metal, wood, and clay with equal confidence. Our collection features works in leading American museums.</p>`,
    faqs: [
      { question: "What is Isamu Noguchi known for?", answer: "Noguchi is known for <strong>abstract stone and metal sculptures</strong>, landscape designs, and his iconic Akari paper light sculptures. He bridged Eastern and Western artistic traditions, treating gardens and public spaces as sculptural forms." },
      { question: "Where can I see Noguchi's work?", answer: "The <strong>Noguchi Museum</strong> in Long Island City, New York is the definitive collection. Major sculptures are also at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the Art Institute of Chicago, and in public spaces like Chase Manhattan Plaza." },
      { question: "Did Noguchi design furniture?", answer: "Yes. His <strong>Noguchi coffee table</strong> (1947), produced by Herman Miller, is one of the most iconic furniture designs of the 20th century. He also created the Akari series of paper and bamboo light sculptures, still manufactured today." },
    ],
  },
  {
    slug: 'cy-twombly',
    bioFull: `<p><a href="/apps/masterpieces/artist/cy-twombly"><strong>Cy Twombly</strong></a> (1928-2011) was an American painter, sculptor, and photographer whose scrawled, graffiti-like canvases became some of the most distinctive works in postwar art. Born Edwin Parker Twombly Jr. in Lexington, Virginia, he studied at Black Mountain College alongside Robert Rauschenberg and later settled in Rome, where he lived for most of his career.</p><p>Twombly's paintings mix loops of crayon, smeared paint, pencil marks, and scribbled words drawn from classical mythology and poetry. His <strong>large cycle paintings</strong>, referencing Homer, Virgil, and the Trojan War, hang in major museums worldwide. Our collection includes works at institutions like <a href="/apps/masterpieces/museum/moma"><strong>MoMA</strong></a>.</p>`,
    faqs: [
      { question: "What style is Cy Twombly known for?", answer: "Twombly's work features <strong>gestural loops, scrawls, and scribbled text</strong> on large white canvases. Often compared to graffiti, his paintings draw heavily on classical literature and Mediterranean culture." },
      { question: "Where can I see Cy Twombly's art?", answer: "The <strong>Cy Twombly Gallery</strong> at the Menil Collection in Houston is dedicated to his work. Major paintings also hang at <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, Tate Modern, and the Museum Brandhorst in Munich." },
      { question: "Why did Twombly live in Italy?", answer: "Twombly moved to <strong>Rome in 1957</strong> and spent most of his life there. The classical Mediterranean world, its mythology, poetry, and landscape deeply influenced his art. He found distance from the New York art scene creatively liberating." },
    ],
  },
  {
    slug: 'antony-gormley',
    bioFull: `<p><a href="/apps/masterpieces/artist/antony-gormley"><strong>Antony Gormley</strong></a> (born 1950) is a British sculptor known for large-scale installations and figures cast from his own body. Born in London, he studied at Cambridge, the Central School of Art, and Goldsmiths before spending three years traveling in India and Sri Lanka. His work explores the relationship between the human body and space.</p><p>Gormley's <strong>Angel of the North</strong> (1998), a 66-foot steel figure with airplane wings, stands beside the A1 motorway near Gateshead and has become one of Britain's most recognized public sculptures. His <em>Another Place</em> installation, with 100 iron figures spread along Crosby Beach near Liverpool, is equally striking. He won the <strong>Turner Prize</strong> in 1994. Our collection includes works at leading institutions.</p>`,
    faqs: [
      { question: "What is Antony Gormley's most famous sculpture?", answer: "The <strong>Angel of the North</strong> (1998) near Gateshead, England is his most famous work. Standing 66 feet tall with a 177-foot wingspan, it's one of the largest sculptures in Britain and a landmark visible from the A1 motorway." },
      { question: "How does Gormley make his sculptures?", answer: "Gormley typically <strong>casts his own body in plaster</strong>, then uses the mold to create figures in iron, steel, or lead. This process gives each figure his exact proportions while stripping away individual identity." },
      { question: "Where can I see Gormley's work?", answer: "Public installations are at <strong>Crosby Beach</strong> (Liverpool), Gateshead, and sites worldwide. Gallery works appear at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a>, the Royal Academy, and the White Cube gallery in London." },
    ],
  },
  {
    slug: 'claes-oldenburg',
    bioFull: `<p><a href="/apps/masterpieces/artist/claes-oldenburg"><strong>Claes Oldenburg</strong></a> (1929-2022) was a Swedish-born American sculptor who turned everyday objects into monumental public art. Born in Stockholm, he grew up in Chicago and studied at the Art Institute before moving to New York in 1956. He became a key figure of <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a>, creating soft vinyl sculptures of hamburgers, typewriters, and ice cream cones.</p><p>From the 1970s onward, Oldenburg (often collaborating with his wife <strong>Coosje van Bruggen</strong>) created colossal outdoor sculptures of clothespins, spoons, shuttlecocks, and other mundane items for cities worldwide. His playful, deadpan approach turned the ordinary into the monumental. Our collection includes works at major American museums.</p>`,
    faqs: [
      { question: "What is Claes Oldenburg known for?", answer: "Oldenburg is known for <strong>giant sculptures of everyday objects</strong>: a 45-foot clothespin in Philadelphia, a 51-foot shuttlecock in Kansas City, and a cherry on a spoon in Minneapolis. He also created soft fabric versions of hard objects like typewriters and toilets." },
      { question: "What art movement was Oldenburg part of?", answer: "Oldenburg was a leading figure of <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>. His early 1960s work, including The Store (a shop selling plaster replicas of food and consumer goods), helped define the movement's irreverent, anti-elitist spirit." },
      { question: "Who was Coosje van Bruggen?", answer: "Coosje van Bruggen (1942-2009) was a <strong>Dutch-American sculptor and art historian</strong> who collaborated with Oldenburg on most of his large-scale public sculptures from 1976 until her death. She co-designed iconic works like <em>Spoonbridge and Cherry</em>." },
    ],
  },
  {
    slug: 'claes-oldenburg-coosje-van-bruggen',
    bioFull: `<p><a href="/apps/masterpieces/artist/claes-oldenburg"><strong>Claes Oldenburg</strong></a> and <strong>Coosje van Bruggen</strong> collaborated on large-scale public sculptures from 1976 until van Bruggen's death in 2009. Oldenburg, a Swedish-born American <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a> pioneer, had been making oversized soft sculptures of everyday objects since the 1960s. Van Bruggen, a Dutch art historian and curator, brought conceptual rigor and research depth to their joint projects.</p><p>Together they created some of the most recognizable public sculptures in the world: <em>Spoonbridge and Cherry</em> in Minneapolis, <em>Shuttlecocks</em> at the Nelson-Atkins Museum, and <em>Saw, Sawing</em> in Tokyo. Their <strong>colossal everyday objects</strong>, placed in urban plazas and parks, injected humor and surprise into cityscapes across three continents.</p>`,
    faqs: [
      { question: "What sculptures did Oldenburg and van Bruggen create together?", answer: "Their best-known collaborations include <strong><em>Spoonbridge and Cherry</em></strong> in Minneapolis, <em>Shuttlecocks</em> in Kansas City, <em>Typewriter Eraser, Scale X</em>, and <em>Saw, Sawing</em> in Tokyo. All transform mundane objects into monumental public art." },
      { question: "Where can I see their public sculptures?", answer: "Their works stand in cities worldwide, including <strong>Minneapolis, Kansas City, Philadelphia, and Tokyo</strong>. The <a href=\"/apps/masterpieces/museum/national-gallery-of-art-washington-dc-us\"><strong>National Gallery of Art</strong></a> sculpture garden in Washington, D.C. has <em>Typewriter Eraser, Scale X</em>." },
    ],
  },
  {
    slug: 'polykleitos',
    bioFull: `<p><a href="/apps/masterpieces/artist/polykleitos"><strong>Polykleitos</strong></a> was an ancient Greek sculptor active in the 5th century BCE, considered one of the greatest artists of <a href="/apps/masterpieces/movement/ancient-greek-art"><strong>classical antiquity</strong></a>. He worked primarily in bronze at Argos in the Peloponnese. None of his original bronzes survive, but Roman marble copies preserve his most important compositions.</p><p>Polykleitos wrote a treatise called the <strong>Canon</strong>, laying out mathematical proportions for the ideal human figure. His <em>Doryphoros</em> (Spear Bearer) embodied these principles and became the single most copied statue in the ancient world. The <em>Diadumenos</em> (Youth Tying a Headband) is his other widely reproduced work. Both demonstrate the <strong>contrapposto</strong> stance that influenced Western sculpture for two millennia.</p>`,
    faqs: [
      { question: "What is Polykleitos famous for?", answer: "Polykleitos created the <strong><em>Doryphoros</em> (Spear Bearer)</strong>, the most copied statue in antiquity. He also wrote the Canon, a theoretical treatise establishing ideal mathematical proportions for depicting the human body." },
      { question: "What is contrapposto?", answer: "<strong>Contrapposto</strong> is a pose where the figure's weight rests on one leg, creating a natural S-curve through the body. Polykleitos perfected this technique, and it became fundamental to Western sculpture from the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> onward." },
      { question: "Do any original Polykleitos bronzes survive?", answer: "No. All of Polykleitos' <strong>original bronze sculptures have been lost</strong>, likely melted down in antiquity. We know his work through Roman marble copies, the most famous being the Doryphoros in the Naples Archaeological Museum." },
    ],
  },
  {
    slug: 'giovanni-da-bologna',
    bioFull: `<p><a href="/apps/masterpieces/artist/giovanni-da-bologna"><strong>Giovanni da Bologna</strong></a> (1529-1608), also known as Giambologna, was a Flemish-Italian sculptor who became the most important sculptor in Italy between <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> and <a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini</strong></a>. Born Jean Boulogne in Douai (now France), he traveled to Italy to study classical sculpture and never left, spending his career in Florence under Medici patronage.</p><p>His <em>Rape of the Sabine Women</em> (1583) in the Loggia dei Lanzi was the first large-scale sculpture designed to be viewed from all angles, a breakthrough in <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerist</strong></a> art. His <strong>bronze Mercury</strong>, balanced on one foot atop a puff of wind, became one of the most reproduced sculptures in Western art. Small bronzes from his workshop were collected across Europe.</p>`,
    faqs: [
      { question: "What is Giambologna's most famous sculpture?", answer: "The <strong><em>Rape of the Sabine Women</em></strong> (1583) in Florence's Loggia dei Lanzi is his most celebrated work. Carved from a single block of marble, its three spiraling figures were revolutionary for being designed to be viewed from every angle." },
      { question: "Where can I see Giambologna's work?", answer: "Florence holds most of his major works: the <strong>Loggia dei Lanzi</strong>, Bargello Museum, and Boboli Gardens. His bronze Mercury is at the <a href=\"/apps/masterpieces/museum/bargello-florence-italy\"><strong>Bargello</strong></a>. Small bronzes appear in museums across Europe." },
      { question: "What art period was Giambologna part of?", answer: "Giambologna worked during late <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, the style between the High Renaissance and the Baroque. His elongated figures, spiraling compositions (figura serpentinata), and technical brilliance defined the transition between these periods." },
    ],
  },
  {
    slug: 'alessandro-algardi',
    bioFull: `<p><a href="/apps/masterpieces/artist/alessandro-algardi"><strong>Alessandro Algardi</strong></a> (1598-1654) was an Italian sculptor who served as the leading rival to <a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Gian Lorenzo Bernini</strong></a> in <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> Rome. Born in Bologna, he trained under Ludovico Carracci before moving to Rome in 1625. While Bernini dominated papal commissions under Urban VIII, Algardi found his moment when Innocent X took the throne and favored a more restrained classical approach.</p><p>His monumental <strong>marble relief of Pope Leo and Attila</strong> in St. Peter's Basilica is one of the largest marble reliefs ever carved. Algardi's portrait busts are prized for their psychological depth and precise naturalism, offering a cooler, more intellectual alternative to Bernini's theatrical intensity.</p>`,
    faqs: [
      { question: "How did Algardi differ from Bernini?", answer: "Algardi favored a <strong>more restrained, classically inspired</strong> approach compared to <a href=\"/apps/masterpieces/artist/gian-lorenzo-bernini\"><strong>Bernini's</strong></a> dramatic theatricality. His figures are calmer and more dignified, with crisper surface detail and less dynamic movement." },
      { question: "What is Algardi's most famous work?", answer: "The <strong>monumental relief of Pope Leo Meeting Attila</strong> (1646-53) in St. Peter's Basilica, Rome. At over 23 feet tall, it's one of the largest marble reliefs ever created and a high point of Baroque sculptural narrative." },
    ],
  },
  {
    slug: 'gutzon-borglum',
    bioFull: `<p><a href="/apps/masterpieces/artist/gutzon-borglum"><strong>Gutzon Borglum</strong></a> (1867-1941) was an American sculptor best known for carving the four presidential faces on <strong>Mount Rushmore</strong> in South Dakota. Born John Gutzon de la Mothe Borglum in Idaho to Danish immigrants, he studied art in Paris at the Académie Julian and the École des Beaux-Arts before returning to the United States.</p><p>Borglum had already established himself through monumental works, including early (and controversial) involvement with the Stone Mountain Confederate memorial in Georgia. Mount Rushmore, begun in 1927, consumed the last 14 years of his life. He died seven months before the project was completed by his son Lincoln. The 60-foot-tall heads of Washington, Jefferson, Roosevelt, and Lincoln draw roughly <strong>3 million visitors annually</strong>.</p>`,
    faqs: [
      { question: "What did Gutzon Borglum sculpt?", answer: "Borglum carved the <strong>four presidential faces on Mount Rushmore</strong>: Washington, Jefferson, Theodore Roosevelt, and Lincoln. Each head stands about 60 feet tall, carved into the granite face of the Black Hills in South Dakota." },
      { question: "How long did Mount Rushmore take to carve?", answer: "Work on Mount Rushmore took <strong>14 years (1927-1941)</strong>. Around 400 workers used dynamite and jackhammers to remove 450,000 tons of rock. Borglum died before completion, and his son Lincoln finished the project." },
    ],
  },
  {
    slug: 'emma-stebbins',
    bioFull: `<p><a href="/apps/masterpieces/artist/emma-stebbins"><strong>Emma Stebbins</strong></a> (1815-1882) was an American sculptor who created one of New York City's most beloved public artworks: the <strong>Angel of the Waters</strong> fountain in Central Park's Bethesda Terrace. Born into a wealthy New York family, she moved to Rome in 1857 to study sculpture, joining a circle of expatriate women artists that included Harriet Hosmer and Edmonia Lewis.</p><p>The Bethesda Fountain commission, completed in 1873, made Stebbins the <strong>first woman to receive a major public art commission</strong> in New York City. The bronze angel commemorates the opening of the Croton Aqueduct, which brought clean water to Manhattan. Stebbins was also the partner of actress Charlotte Cushman, one of the most famous women in 19th-century America.</p>`,
    faqs: [
      { question: "What is Emma Stebbins' most famous work?", answer: "The <strong>Angel of the Waters</strong> (1873) atop the Bethesda Fountain in Central Park, New York. It commemorates the opening of the Croton Aqueduct and made Stebbins the first woman to receive a major public art commission in the city." },
      { question: "Where did Emma Stebbins work?", answer: "Stebbins spent most of her career in <strong>Rome, Italy</strong>, where she joined a community of expatriate women sculptors. She was part of what Henry James called the 'white marmorean flock,' alongside <a href=\"/apps/masterpieces/artist/harriet-hosmer\"><strong>Harriet Hosmer</strong></a> and Edmonia Lewis." },
    ],
  },
  {
    slug: 'malvina-hoffman',
    bioFull: `<p><a href="/apps/masterpieces/artist/malvina-hoffman"><strong>Malvina Hoffman</strong></a> (1887-1966) was an American sculptor who studied under <a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> in Paris and became known for her lifelike bronze figures. Born in New York City, she traveled extensively and won a major commission from the Field Museum of Natural History in Chicago to create the <strong>Races of Mankind</strong> series: 104 bronze sculptures representing peoples from around the world.</p><p>The project took five years and sent Hoffman across Asia, Africa, and the Pacific. While the ethnographic assumptions behind the series are now rightly questioned, the sculptures themselves demonstrate technical skill that few of her contemporaries matched. Her other notable works include dance figures inspired by Anna Pavlova.</p>`,
    faqs: [
      { question: "What is Malvina Hoffman known for?", answer: "Hoffman is best known for the <strong>Races of Mankind</strong> series (1930-33), 104 bronze sculptures commissioned by Chicago's Field Museum. She also created striking dance figures and studied under <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> in Paris." },
      { question: "Where can I see Hoffman's sculptures?", answer: "The <strong>Field Museum</strong> in Chicago still displays selections from the Races of Mankind series. Other works are at the <strong>Metropolitan Museum of Art</strong> in New York and various American collections." },
    ],
  },
  {
    slug: 'barbara-hepworth',
    bioFull: `<p><a href="/apps/masterpieces/artist/barbara-hepworth"><strong>Barbara Hepworth</strong></a> (1903-1975) was a British sculptor and one of the leading figures of the international modern art movement. Born in Wakefield, Yorkshire, she studied at the Leeds School of Art (alongside Henry Moore) and the Royal College of Art in London. By the 1930s she was producing pierced and hollowed abstract forms in stone and wood that placed her at the forefront of European sculpture.</p><p>Hepworth settled in St Ives, Cornwall in 1939, and the coastal landscape deeply influenced her work. Her smooth, biomorphic forms with carved-out voids and taut string interiors became her signature. The <strong>Barbara Hepworth Museum</strong> and sculpture garden in St Ives preserves her studio exactly as she left it. Our collection includes works at leading British institutions.</p>`,
    faqs: [
      { question: "What is Barbara Hepworth known for?", answer: "Hepworth is known for <strong>abstract sculptures with pierced and hollowed forms</strong> in stone, wood, and bronze. Her smooth, organic shapes with carved-out interiors (sometimes strung with wire) bridged the gap between figuration and pure abstraction." },
      { question: "Where can I see Hepworth's work?", answer: "The <strong>Barbara Hepworth Museum</strong> in St Ives, Cornwall preserves her studio and garden. Major works also appear at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate</strong></a> galleries in London and St Ives, and the Yorkshire Sculpture Park." },
      { question: "How did Hepworth and Henry Moore compare?", answer: "Both were from Yorkshire, studied together at Leeds, and championed <strong>direct carving in abstract forms</strong>. Hepworth's work tends toward smoother, more refined surfaces, while Moore favored rougher textures and more figurative references." },
    ],
  },
  {
    slug: 'joseph-beuys',
    bioFull: `<p><a href="/apps/masterpieces/artist/joseph-beuys"><strong>Joseph Beuys</strong></a> (1921-1986) was a German sculptor, performance artist, and art theorist who became one of the most influential (and controversial) figures in postwar European art. He served as a Luftwaffe pilot in World War II and later claimed he was rescued by Crimean Tatars who wrapped him in felt and fat, materials that became central to his art. The story's accuracy is debated.</p><p>Beuys used unconventional materials like <strong>felt, fat, honey, and copper</strong> to create sculptures, installations, and performances. His concept of <strong>Social Sculpture</strong> proposed that everyone is an artist and that creativity should reshape society itself. He taught at the Düsseldorf Academy until his controversial dismissal in 1972, and cofounded the German Green Party.</p>`,
    faqs: [
      { question: "What materials did Beuys use?", answer: "Beuys worked with <strong>felt, fat, honey, wax, copper, and found objects</strong> rather than traditional sculptural materials. These materials carried personal and symbolic meaning tied to energy, warmth, and transformation." },
      { question: "Where can I see Beuys' work?", answer: "The <strong>Hamburger Bahnhof</strong> in Berlin and Museum Schloss Moyland hold major collections. <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a> in London and Dia:Beacon in New York also display significant installations." },
      { question: "What is Social Sculpture?", answer: "<strong>Social Sculpture</strong> is Beuys' concept that art extends beyond objects into social and political action. He believed every person is an artist capable of shaping society, and that creativity is the fundamental force of human freedom." },
    ],
  },
  {
    slug: 'damien-hirst',
    bioFull: `<p><a href="/apps/masterpieces/artist/damien-hirst"><strong>Damien Hirst</strong></a> (born 1965) is a British artist and the most prominent member of the Young British Artists (YBAs) who dominated the 1990s art scene. Born in Bristol and raised in Leeds, he studied at Goldsmiths in London and organized the landmark <em>Freeze</em> exhibition in 1988 while still a student. Charles Saatchi became his early patron.</p><p>Hirst's work deals obsessively with death. His <strong>shark in formaldehyde</strong>, <em>The Physical Impossibility of Death in the Mind of Someone Living</em> (1991), became an icon of contemporary art. His <strong>spin paintings</strong>, spot paintings, and medicine cabinets have made him one of the wealthiest living artists. <em>For the Love of God</em> (2007), a platinum skull covered in 8,601 diamonds, reportedly cost £14 million to produce.</p>`,
    faqs: [
      { question: "What is Damien Hirst's most famous work?", answer: "The <strong>shark in formaldehyde</strong>, formally titled <em>The Physical Impossibility of Death in the Mind of Someone Living</em> (1991). A 14-foot tiger shark preserved in a glass tank, it became a defining symbol of 1990s British art." },
      { question: "What art movement is Hirst associated with?", answer: "Hirst is the most prominent of the <strong>Young British Artists (YBAs)</strong>, who emerged in London in the late 1980s and 90s. The group, backed by collector Charles Saatchi, included Tracey Emin, Sarah Lucas, and Chris Ofili." },
      { question: "Where can I see Hirst's work?", answer: "Major works are in private collections and at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a> in London. Hirst also runs his own exhibition space, <strong>Newport Street Gallery</strong> in Vauxhall, London." },
    ],
  },
  {
    slug: 'anish-kapoor',
    bioFull: `<p><a href="/apps/masterpieces/artist/anish-kapoor"><strong>Anish Kapoor</strong></a> (born 1954) is a British-Indian sculptor known for large-scale works that play with form, color, and reflection. Born in Mumbai, he moved to London in the early 1970s to study at the Hornsey College of Art and Chelsea School of Art. His early work used raw pigment powder to coat simple biomorphic forms in vivid blues, reds, and yellows.</p><p>Kapoor's <strong>Cloud Gate</strong> (2006), a 110-ton polished steel sculpture in Chicago's Millennium Park (nicknamed "The Bean"), became one of the most photographed public artworks in the world. He won the <strong>Turner Prize</strong> in 1991 and has created major installations at the Royal Academy, Versailles, and the 2012 London Olympics (the ArcelorMittal Orbit tower).</p>`,
    faqs: [
      { question: "What is Anish Kapoor's most famous work?", answer: "<strong>Cloud Gate</strong> (2006) in Chicago's Millennium Park is his best-known sculpture. The 110-ton polished stainless steel 'bean' reflects and distorts the city skyline, drawing millions of visitors each year." },
      { question: "Where can I see Kapoor's sculptures?", answer: "Cloud Gate is in <strong>Chicago's Millennium Park</strong>. The ArcelorMittal Orbit stands in London's Olympic Park. Gallery works appear at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a>, MoMA, and the Guggenheim Bilbao." },
      { question: "What is Vantablack and why is Kapoor associated with it?", answer: "Vantablack absorbs 99.965% of light, making surfaces appear <strong>completely flat black</strong>. In 2016, Kapoor obtained exclusive artistic rights to the material, sparking controversy among other artists who felt it shouldn't be monopolized." },
    ],
  },
  {
    slug: 'robert-indiana',
    bioFull: `<p><a href="/apps/masterpieces/artist/robert-indiana"><strong>Robert Indiana</strong></a> (1928-2018) was an American artist best known for his iconic <strong>LOVE</strong> sculpture, one of the most recognized images in modern art. Born Robert Clark in New Castle, Indiana, he took his home state's name as his surname. He studied at the Art Institute of Chicago, Skowhegan School, and Edinburgh College of Art before settling in New York in 1954.</p><p>Indiana's work combined bold, graphic text and numbers with <a href="/apps/masterpieces/movement/pop-art"><strong>Pop Art</strong></a> sensibility. The LOVE design first appeared as a painting in 1966 and as a U.S. postage stamp in 1973. His painted steel LOVE sculptures now stand in cities from New York to Tokyo. He later created a HOPE version for Barack Obama's 2008 presidential campaign.</p>`,
    faqs: [
      { question: "Where is Robert Indiana's LOVE sculpture?", answer: "The most famous <strong>LOVE sculpture</strong> stands at JFK Plaza (Love Park) in Philadelphia. Versions also exist in New York, Indianapolis, Singapore, Tokyo, and many other cities worldwide." },
      { question: "What art movement was Indiana part of?", answer: "Indiana is associated with <a href=\"/apps/masterpieces/movement/pop-art\"><strong>Pop Art</strong></a>, though his text-based, graphic approach also connects to hard-edge painting. His work bridges the gap between Pop's consumer imagery and the clean geometry of minimalism." },
    ],
  },
  {
    slug: 'andrea-del-verrocchio',
    bioFull: `<p><a href="/apps/masterpieces/artist/andrea-del-verrocchio"><strong>Andrea del Verrocchio</strong></a> (c. 1435-1488) was a Florentine sculptor, painter, and goldsmith who ran one of the most important workshops in <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> Italy. Born Andrea di Michele di Francesco de' Cioni, he took the name of his master, a goldsmith named Giuliano Verrocchi. His workshop trained Leonardo da Vinci, Perugino, Lorenzo di Credi, and possibly Botticelli.</p><p>Verrocchio's <strong>equestrian statue of Bartolomeo Colleoni</strong> in Venice is considered one of the greatest bronze monuments of the Renaissance, rivaling Donatello's Gattamelata. His bronze <em>David</em> (c. 1473-75) depicts a slender, confident youth thought to be modeled on the young Leonardo. He died in Venice while completing the Colleoni monument.</p>`,
    faqs: [
      { question: "Was Leonardo da Vinci Verrocchio's student?", answer: "Yes. <strong>Leonardo apprenticed in Verrocchio's Florence workshop</strong> around 1466-1476. Legend holds that when Leonardo painted an angel in Verrocchio's <em>Baptism of Christ</em> that surpassed the master's own figures, Verrocchio put down his brush forever." },
      { question: "What is Verrocchio's most famous sculpture?", answer: "The <strong>equestrian statue of Bartolomeo Colleoni</strong> (c. 1480-88) in Venice's Campo Santi Giovanni e Paolo. It's considered one of the finest <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> bronze monuments, rivaling Donatello's earlier Gattamelata in Padua." },
    ],
  },
  {
    slug: 'antonio-rossellino',
    bioFull: `<p><a href="/apps/masterpieces/artist/antonio-rossellino"><strong>Antonio Rossellino</strong></a> (1427-c. 1479) was a Florentine sculptor of the Early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, known for his refined marble portrait busts and funerary monuments. Born Antonio Gamberelli, he was the youngest of five brothers who were all stonecutters or architects. He trained in his brother Bernardo's workshop and quickly established his own reputation for delicate carving and naturalistic detail.</p><p>His <strong>tomb of the Cardinal of Portugal</strong> (1461-66) in San Miniato al Monte, Florence, is a masterwork of Renaissance funerary sculpture, combining architecture, relief, and freestanding figures. His marble busts of children and young women are prized for their gentle warmth and lifelike surfaces.</p>`,
    faqs: [
      { question: "What is Antonio Rossellino known for?", answer: "Rossellino is known for <strong>exquisitely carved marble busts and funerary monuments</strong>. His tomb of the Cardinal of Portugal in Florence's San Miniato al Monte is considered one of the finest <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> tomb complexes." },
      { question: "Where can I see Rossellino's work?", answer: "Key works are in <strong>Florence</strong>: the tomb in San Miniato al Monte, busts at the Bargello, and reliefs in Santa Croce. The <strong>Metropolitan Museum of Art</strong> and the Victoria and Albert Museum also hold important pieces." },
    ],
  },
  {
    slug: 'benvenuto-cellini',
    bioFull: `<p><a href="/apps/masterpieces/artist/benvenuto-cellini"><strong>Benvenuto Cellini</strong></a> (1500-1571) was a Florentine goldsmith, sculptor, and author whose swaggering autobiography is one of the great literary works of the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>. Born in Florence, he trained as a goldsmith and metalworker, eventually serving popes and kings. His <strong>Perseus with the Head of Medusa</strong> (1545-54), standing in Florence's Loggia dei Lanzi, is one of the most technically ambitious bronze sculptures ever cast.</p><p>Cellini's <strong>gold saltcellar</strong> (the Saliera), made for Francis I of France, is the only surviving piece of goldsmith's work attributable to him and is now at Vienna's Kunsthistorisches Museum. His autobiography, full of duels, murders, escapes, and self-promotion, reads like an adventure novel and offers a vivid portrait of Renaissance Italy.</p>`,
    faqs: [
      { question: "What is Cellini's most famous sculpture?", answer: "<strong><em>Perseus with the Head of Medusa</em></strong> (1545-54) in Florence's Loggia dei Lanzi. The bronze figure, standing over 18 feet with its base, was cast in a single pour that Cellini described dramatically in his autobiography." },
      { question: "What was Cellini's gold saltcellar?", answer: "The <strong>Saliera</strong> (1540-43) is an elaborate gold and enamel table sculpture made for King Francis I of France. It's now at <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria\"><strong>Kunsthistorisches Museum</strong></a> in Vienna and is considered the finest goldsmith work of the Renaissance." },
      { question: "Did Cellini write an autobiography?", answer: "Yes. Cellini's <strong><em>Vita</em></strong> (written 1558-66) is one of the most famous autobiographies ever written. It's packed with brawls, papal intrigues, miraculous escapes, and boastful self-promotion, offering a vivid window into Renaissance life." },
    ],
  },
  {
    slug: 'lorenzo-ghiberti',
    bioFull: `<p><a href="/apps/masterpieces/artist/lorenzo-ghiberti"><strong>Lorenzo Ghiberti</strong></a> (c. 1378-1455) was a Florentine goldsmith and sculptor whose bronze doors for the Florence Baptistery rank among the greatest achievements of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> art. In 1401, the 23-year-old Ghiberti won a famous competition for the commission, beating Filippo Brunelleschi and five other competitors. That contest is often cited as the starting point of the Renaissance.</p><p>Ghiberti spent 21 years on the first set of doors (the North Doors), then another 27 years on the second set. Michelangelo reportedly called the second doors the <strong>"Gates of Paradise"</strong>, a name that stuck. Their ten gilded bronze panels depict Old Testament scenes with pioneering use of linear perspective. The originals are now in the Museo dell'Opera del Duomo; the doors on the Baptistery are replicas.</p>`,
    faqs: [
      { question: "What are the Gates of Paradise?", answer: "The <strong>Gates of Paradise</strong> are Ghiberti's second set of bronze doors (1425-52) for the Florence Baptistery. Ten gilded panels depict Old Testament scenes with groundbreaking use of perspective. Michelangelo reportedly gave them the nickname." },
      { question: "Where can I see Ghiberti's doors?", answer: "The original <strong>Gates of Paradise panels</strong> are in the <strong>Museo dell'Opera del Duomo</strong> in Florence. Gilded replicas stand on the Baptistery itself. The competition relief panels are at the <a href=\"/apps/masterpieces/museum/bargello-florence-italy\"><strong>Bargello</strong></a>." },
    ],
  },
  {
    slug: 'jean-jacques-pradier',
    bioFull: `<p><a href="/apps/masterpieces/artist/jean-jacques-pradier"><strong>Jean-Jacques Pradier</strong></a> (1790-1852) was a Swiss-born French sculptor who became one of the most successful artists of the July Monarchy period. Born in Geneva, he won the Prix de Rome in 1813 and spent years studying classical antiquity in Italy. Back in Paris, he secured major public commissions and exhibited regularly at the Salon.</p><p>Pradier was known for <strong>sensuous marble figures</strong> that pushed classical subjects toward eroticism, sometimes scandalizing critics. His <em>Satyr and Bacchante</em> and <em>Psyche</em> were popular Salon attractions. He also created allegorical figures for the Madeleine church and the Fontaine Molière in Paris. Pradier maintained a prolific studio that produced both monumental public works and intimate bronzes for private collectors.</p>`,
    faqs: [
      { question: "What is Pradier known for?", answer: "Pradier is known for <strong>sensual neoclassical marble sculptures</strong> that blended classical idealism with naturalistic female bodies. His work was popular at the Paris Salon but sometimes drew criticism for being too erotic for its mythological subjects." },
      { question: "Where can I see Pradier's sculptures?", answer: "Major works are at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris and the Musée d'Art et d'Histoire in Geneva. His public sculptures include figures on the <strong>Madeleine church</strong> and the Fontaine Molière in Paris." },
    ],
  },
  {
    slug: 'paul-manship',
    bioFull: `<p><a href="/apps/masterpieces/artist/paul-manship"><strong>Paul Manship</strong></a> (1885-1966) was an American sculptor who bridged classical tradition and Art Deco modernism. Born in St. Paul, Minnesota, he won the American Academy's Prix de Rome in 1909 and spent three years in Italy studying archaic Greek and Indian sculpture. These influences gave his work a distinctive blend of ancient stylization and modern sleekness.</p><p>His gilded bronze <strong>Prometheus</strong> (1934) at Rockefeller Center in New York, reclining above the ice skating rink, is one of the most photographed sculptures in America. Manship also designed the Rainey Memorial Gates at the Bronx Zoo and numerous portrait medals. His clean, decorative style made him one of the most popular American sculptors of the 1920s and 30s.</p>`,
    faqs: [
      { question: "What is Paul Manship's most famous work?", answer: "The gilded bronze <strong><em>Prometheus</em></strong> (1934) at Rockefeller Center in New York. The reclining Titan, bringing fire to mankind, is set against a golden zodiac backdrop above the famous ice skating rink." },
      { question: "What style did Manship work in?", answer: "Manship combined <strong>archaic Greek stylization with Art Deco elegance</strong>. His figures have smooth, streamlined surfaces and decorative patterns that distinguish them from both academic realism and avant-garde abstraction." },
    ],
  },
];

async function main() {
  let success = 0, fail = 0;
  for (const u of updates) {
    try {
      await p.artist.update({ where: { slug: u.slug }, data: { bioFull: u.bioFull, faqs: u.faqs } });
      console.log('OK', u.slug);
      success++;
    } catch (e) {
      console.error('FAIL', u.slug, e.message.slice(0, 120));
      fail++;
    }
  }
  console.log(`\nDone: ${success} success, ${fail} fail`);
  await p.$disconnect();
}
main();
