const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting artist updates (Batch 3: 10 artists)...\n');

  // 1. George Bellows
  await prisma.artist.update({
    where: { slug: 'george-bellows' },
    data: {
      bioFull: `<p>American painter <strong>George Bellows</strong> (1882-1925) captured the raw energy of early 20th-century New York with a boldness that made him the most acclaimed artist of his generation. Born in Columbus, Ohio, he attended Ohio State University, where his athletic talents nearly led him to professional baseball. He chose art instead, moving to New York in 1904 to study with <strong>Robert Henri</strong>. Bellows quickly became associated with the Ashcan School, a group of artists who painted contemporary American life in all its gritty reality. From crowded tenements to boxing clubs, nothing was off limits.</p>

<p>His fight paintings became his signature contribution to art history. "Stag at Sharkey's" (1909) depicts an illegal bout at Tom Sharkey's Athletic Club, located directly across Broadway from Bellows's studio. After New York banned public prizefighting in 1900, private clubs sold memberships to let audiences watch and gamble on matches. Bellows seized on these scenes of raw male aggression, inscribing their intensity in slashing brushwork. "Dempsey and Firpo" (1924) captures heavyweight champion Jack Dempsey being knocked through the ropes by Argentine challenger Luis Firpo at the Polo Grounds.</p>

<p>Beyond boxing, Bellows painted <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal scenes</strong></a>, <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, urban crowds, and wartime subjects. He helped organize the landmark Armory Show of 1913 and produced nearly 200 lithographs from 1916 onward. In 1911, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> acquired one of his Hudson River scenes, making him one of the youngest artists in their collection at 29. Bellows died unexpectedly in 1925 from a ruptured appendix at just 42. His work hangs at the <a href="/museum/whitney-museum"><strong>Whitney Museum</strong></a>, the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> (which owns "Stag at Sharkey's"), and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
      faqs: [
        { question: "What art movement was George Bellows part of?", answer: "Bellows was a key figure in the <strong>Ashcan School</strong>, a group of <a href=\"/movement/american-realism\"><strong>American Realist</strong></a> artists who painted contemporary urban life. They depicted working-class neighborhoods, boxing matches, and everyday struggles with unflinching honesty." },
        { question: "Where can I see George Bellows's paintings?", answer: "Major works hang at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/museum/whitney-museum\"><strong>Whitney Museum</strong></a>, and the <a href=\"/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>, which owns his famous \"Stag at Sharkey's.\"" },
        { question: "What is George Bellows most famous for?", answer: "His <strong>boxing paintings</strong> remain his most celebrated works. \"Stag at Sharkey's\" (1909) and \"Dempsey and Firpo\" (1924) capture the raw brutality and energy of early 20th-century prize fights with slashing brushwork." },
        { question: "Who taught George Bellows?", answer: "<strong>Robert Henri</strong>, one of America's most influential art teachers, taught Bellows in New York starting in 1904. Henri led the Ashcan School movement and shaped Bellows's commitment to painting real life." },
        { question: "Did George Bellows almost become a baseball player?", answer: "Yes. At Ohio State University, his athletic talents suggested he might play <strong>professional baseball</strong>. He chose art instead, though his physicality and love of sports infused his boxing paintings with visceral energy." },
        { question: "What subjects did George Bellows paint?", answer: "Beyond boxing, Bellows painted <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal scenes</strong></a>, urban crowds, wartime subjects, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>. He also produced nearly 200 lithographs during his career." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: george-bellows');

  // Connect George Bellows to American Realism movement
  await prisma.artist.update({
    where: { slug: 'george-bellows' },
    data: {
      Movement: {
        connect: { slug: 'american-realism' }
      }
    }
  });
  console.log('Connected george-bellows to american-realism');

  // 2. Winslow Homer
  await prisma.artist.update({
    where: { slug: 'winslow-homer' },
    data: {
      bioFull: `<p><a href="/movement/american-realism"><strong>American Realist</strong></a> painter <strong>Winslow Homer</strong> (1836-1910) is widely regarded as the greatest American painter of the 19th century. Born in Boston and raised in rural Cambridge, he began his career as a commercial printmaker in 1854, apprenticing with lithographer J.H. Bufford. He left after two years to work as a freelance illustrator. In 1859, Homer moved to New York and briefly studied at the National Academy of Design. His career as a painter truly began during the Civil War, when Harper's Weekly sent him to the front in Virginia as an artist-correspondent.</p>

<p>Unlike most war correspondents, Homer focused on everyday camp life rather than battle scenes. Works like "The Veteran in a New Field" and "Prisoners from the Front" (1866) captured the war's impact with profound understanding. The latter, showing Confederate prisoners facing a Union officer, became one of the first great paintings of the American Civil War and established Homer's reputation. He later turned to rural subjects, painting schoolchildren, hunting scenes, and the lives of recently emancipated African Americans with a passion for honest storytelling.</p>

<p>In 1883, Homer moved to Prouts Neck, Maine, a peninsula ten miles south of Portland, where he lived until his death. The sea became his primary subject. His late <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>marine paintings</strong></a> capture the beauty, force, and drama of the ocean with dynamic compositions and richly textured passages. "Breezing Up" (1876) shows the hope and optimism of American life, while "The Gulf Stream" (1898) depicts a man facing death on a battered vessel. His studio at Prouts Neck became a National Historic Landmark in 1965. Works hang at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, and the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>.</p>`,
      faqs: [
        { question: "What art movement was Winslow Homer part of?", answer: "Homer was a leading figure in <a href=\"/movement/american-realism\"><strong>American Realism</strong></a>. His uncompromising style charted a new course for American art, depicting rural life, Civil War scenes, and marine subjects with objective truth." },
        { question: "Where can I see Winslow Homer's paintings?", answer: "Major works hang at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a>, and the <a href=\"/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>. His Prouts Neck studio is a museum." },
        { question: "What are Winslow Homer's most famous paintings?", answer: "\"<strong>Breezing Up</strong>\" (1876), \"<strong>The Gulf Stream</strong>\" (1898), and \"<strong>Prisoners from the Front</strong>\" (1866) are among his most celebrated works. His late <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>marine paintings</strong></a> are especially renowned." },
        { question: "Did Winslow Homer paint the Civil War?", answer: "Yes. Homer worked as an artist-correspondent for <strong>Harper's Weekly</strong> during the Civil War. Unlike most correspondents, he focused on everyday camp life rather than battle scenes, capturing the war's human impact." },
        { question: "Why did Winslow Homer move to Maine?", answer: "In 1883, Homer moved to <strong>Prouts Neck, Maine</strong>, seeking privacy and silence. The rugged coast inspired his greatest marine paintings, capturing humanity's struggle against the timeless power of the sea." },
        { question: "What subjects did Winslow Homer paint?", answer: "Homer painted Civil War scenes, rural schoolchildren, hunting expeditions, and the lives of emancipated African Americans. His later career focused on <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>marine subjects</strong></a> and the Maine coast." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: winslow-homer');

  // Connect Winslow Homer to American Realism movement
  await prisma.artist.update({
    where: { slug: 'winslow-homer' },
    data: {
      Movement: {
        connect: { slug: 'american-realism' }
      }
    }
  });
  console.log('Connected winslow-homer to american-realism');

  // 3. Käthe Kollwitz
  await prisma.artist.update({
    where: { slug: 'kathe-kollwitz' },
    data: {
      bioFull: `<p>German artist <strong>Käthe Kollwitz</strong> (1867-1945) became the foremost artist of social protest in the 20th century and an eloquent advocate for victims of war, poverty, and injustice. Born in Königsberg, East Prussia (now Kaliningrad, Russia), she grew up in a liberal middle-class family and studied painting in Berlin and Munich. Impressed by the prints of Max Klinger, she devoted herself primarily to graphic art after 1890, producing etchings, lithographs, woodcuts, and drawings. In 1891 she married Karl Kollwitz, a doctor who opened a clinic in a working-class section of Berlin. There she witnessed firsthand the miserable conditions of the urban poor.</p>

<p>Her first important works were two print series: "Weavers' Revolt" (c. 1894-98) and "Peasants' War" (1902-08). Both depict the effects of poverty, hunger, and oppression on working people. The death of her youngest son Peter in battle in 1914 profoundly affected her art. She expressed her grief in cycles of prints treating themes of a mother protecting her children and a mother with a dead child. These <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>powerful black and white images</strong></a> remain some of the most moving anti-war art ever created.</p>

<p>Kollwitz was the first woman elected to the Prussian Academy of Arts and the first to receive honorary professor status. She also created sculpture, including a granite monument for her son (1924-32), now a memorial near Ypres, Belgium. An enlarged version of her sculpture "Mother with her Dead Son" was placed in 1993 at Berlin's Neue Wache as a monument to war victims. The Nazis expelled her from exhibiting but appropriated her imagery for propaganda. Her Berlin apartment was destroyed in World War II, with great loss of work. She died two weeks before Germany's surrender. Museums dedicated to her work exist in Berlin, Cologne, and Moritzburg. The <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> holds significant collections of her prints.</p>`,
      faqs: [
        { question: "What art movement was Käthe Kollwitz part of?", answer: "Kollwitz is associated with <a href=\"/movement/expressionism\"><strong>Expressionism</strong></a>, though she considered her style somewhere between naturalism and realism. Her compositions were dictated by emotional and activist needs rather than strict movement rules." },
        { question: "Where can I see Käthe Kollwitz's art?", answer: "Museums dedicated solely to her work exist in <strong>Berlin, Cologne, and Moritzburg</strong>. The <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a> and the Art Institute of Chicago also hold significant collections of her prints and drawings." },
        { question: "What media did Käthe Kollwitz work in?", answer: "Kollwitz worked primarily in <strong>printmaking</strong>, including etchings, lithographs, and woodcuts. She also created drawings and sculpture. Her <a href=\"https://luxurywallart.com/collections/black-and-white-artwork\" target=\"_blank\" rel=\"noopener\"><strong>black and white prints</strong></a> are her most celebrated works." },
        { question: "What subjects did Käthe Kollwitz depict?", answer: "She depicted <strong>poverty, hunger, war, and motherhood</strong>. Her print cycles \"Weavers' Revolt\" and \"Peasants' War\" show working-class struggles. After her son died in WWI, she created powerful images of grieving mothers." },
        { question: "Was Käthe Kollwitz persecuted by the Nazis?", answer: "Yes. The <strong>Nazis expelled her</strong> from exhibiting in 1933, though they ironically appropriated some of her images for propaganda. Her Berlin apartment was destroyed in WWII, and she died two weeks before Germany surrendered." },
        { question: "What is Kollwitz's most famous sculpture?", answer: "\"<strong>Mother with her Dead Son</strong>\" (Pietà) stands at Berlin's Neue Wache as a monument to war victims. She also created a granite memorial for her son Peter, who died in WWI, located near Ypres, Belgium." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: kathe-kollwitz');

  // Connect Käthe Kollwitz to Expressionism movement
  await prisma.artist.update({
    where: { slug: 'kathe-kollwitz' },
    data: {
      Movement: {
        connect: { slug: 'expressionism' }
      }
    }
  });
  console.log('Connected kathe-kollwitz to expressionism');

  // 4. Emanuel Leutze
  await prisma.artist.update({
    where: { slug: 'emanuel-leutze' },
    data: {
      bioFull: `<p>German-American history painter <strong>Emanuel Leutze</strong> (1816-1868) created one of the most recognizable images in American art: "Washington Crossing the Delaware." Born in Schwäbisch Gmünd, Kingdom of Württemberg, he came to America as a child in 1825. His family settled first in Fredericksburg, Virginia, then Philadelphia. His artistic talent emerged while caring for his sick father, and after his father died in 1831, 14-year-old Leutze began painting portraits for five dollars each to support himself. In 1840, one of his paintings attracted enough attention to send him to study at the Kunstakademie Düsseldorf in Germany.</p>

<p>A strong supporter of Europe's Revolutions of 1848, Leutze decided to paint an image encouraging liberal reformers with the example of the American Revolution. Using American tourists and art students as models, he finished a first version in 1850. That painting was damaged by fire, restored, and acquired by the Kunsthalle Bremen, where it was destroyed by Allied bombing in 1942. The second version, completed in 1850, was shipped to New York and exhibited in October 1851. Wealthy capitalist Marshall O. Roberts purchased it for the then-staggering price of $10,000.</p>

<p>The painting contains several inaccuracies: the flag is anachronistic, the boats are too small, the time of day is wrong, and Washington probably couldn't have stood as depicted. Leutze painted a river resembling the Rhine rather than the narrow Delaware. None of this diminished its impact. In 1860, Congress commissioned him to paint "Westward the Course of Empire Takes Its Way" for a Capitol Building stairway. The primary "Washington Crossing the Delaware" was donated to the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1897, where it remains one of their most popular works. A smaller third version sold at Christie's in 2022 for $45 million. Other works hang at the <a href="/museum/smithsonian-american-art"><strong>Smithsonian American Art Museum</strong></a> and the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>.</p>`,
      faqs: [
        { question: "What art movement was Emanuel Leutze part of?", answer: "Leutze was associated with the <strong>Düsseldorf school</strong> of painting and <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>. He specialized in grand history paintings that dramatized pivotal moments in American history with theatrical composition and lighting." },
        { question: "Where can I see Washington Crossing the Delaware?", answer: "The main version hangs at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, donated in 1897. A smaller third version sold for $45 million in 2022. The first version was destroyed in WWII bombing." },
        { question: "Why did Leutze paint Washington Crossing the Delaware?", answer: "Leutze supported <strong>Europe's 1848 Revolutions</strong> and wanted to encourage liberal reformers with the example of American independence. He used American tourists and art students in Germany as models for the composition." },
        { question: "Are there historical inaccuracies in the painting?", answer: "Yes, several. The <strong>flag is anachronistic</strong>, the boats are too small, Washington probably couldn't have stood that way, and the river resembles the Rhine rather than the narrow Delaware. The time of day is also wrong." },
        { question: "What other famous works did Leutze create?", answer: "In 1860, Congress commissioned \"<strong>Westward the Course of Empire Takes Its Way</strong>\" for a Capitol Building stairway in Washington, D.C. He also painted <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and other American history subjects." },
        { question: "How much did Washington Crossing the Delaware sell for?", answer: "The second version sold for <strong>$10,000 in 1851</strong>, a staggering sum then. A smaller third version sold at Christie's in May 2022 for <strong>$45 million</strong>, demonstrating its enduring cultural significance." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: emanuel-leutze');

  // Connect Emanuel Leutze to Romanticism movement
  await prisma.artist.update({
    where: { slug: 'emanuel-leutze' },
    data: {
      Movement: {
        connect: { slug: 'romanticism' }
      }
    }
  });
  console.log('Connected emanuel-leutze to romanticism');

  // 5. Ilya Repin
  await prisma.artist.update({
    where: { slug: 'ilya-repin' },
    data: {
      bioFull: `<p>Russian painter <strong>Ilya Repin</strong> (1844-1930) was the most renowned Russian artist of the 19th century, holding a position in the art world comparable to Leo Tolstoy's in literature. Born into a poor family of "military settlers" near Kharkov (now Kharkiv, Ukraine), he learned his trade from an icon painter named Bunakov. In 1864 he entered the Academy of Fine Arts at St. Petersburg, earning the title of academician in 1876. His 1873 painting "Barge Haulers on the Volga" made him the leader of a new movement of critical realism in Russian art.</p>

<p>In 1878, Repin joined the <strong>Peredvizhniki</strong> ("Wanderers" or "Itinerants"), a group of free-thinking artists who rejected academic conventions in favor of socially conscious art. They organized traveling exhibitions to bring art to the Russian people beyond Moscow and St. Petersburg. Repin's technical excellence gave legitimacy to this movement, proving that realism could achieve artistic greatness. His major works include "Religious Procession in Kursk Province" (1883), "Ivan the Terrible and His Son Ivan" (1885), and "Reply of the Zaporozhian Cossacks" (1880-91).</p>

<p>Repin spent over a decade researching the Cossacks painting, traveling to Zaporozhian regions, studying historical documents, and collecting authentic costumes and weapons. The composition includes more than a dozen distinctive characters, each with unique expressions. He developed friendships with Tolstoy and composer Modest Mussorgsky, painting powerful <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of both. In 1900, he purchased an estate called "Penates" in Kuokkala (now Repino), Finland, where he lived until his death. His works remain centerpieces at the <a href="/museum/tretyakov-gallery"><strong>State Tretyakov Gallery</strong></a> in Moscow and the <a href="/museum/russian-museum"><strong>Russian Museum</strong></a> in Saint Petersburg. In a 2017 poll, Repin ranked third as Russians' favorite artist.</p>`,
      faqs: [
        { question: "What art movement was Ilya Repin part of?", answer: "Repin was the leading figure of the <strong>Peredvizhniki</strong> (\"Wanderers\"), a group that rejected academic conventions for socially conscious realism. He represented Russian critical realism at its finest, proving the movement could achieve artistic greatness." },
        { question: "Where can I see Ilya Repin's paintings?", answer: "His masterpieces hang at the <a href=\"/museum/tretyakov-gallery\"><strong>State Tretyakov Gallery</strong></a> in Moscow and the <a href=\"/museum/russian-museum\"><strong>Russian Museum</strong></a> in Saint Petersburg. His former estate in Repino, Finland, serves as a house museum." },
        { question: "What are Ilya Repin's most famous paintings?", answer: "\"<strong>Barge Haulers on the Volga</strong>\" (1873), \"<strong>Ivan the Terrible and His Son Ivan</strong>\" (1885), and \"<strong>Reply of the Zaporozhian Cossacks</strong>\" (1880-91) are his most celebrated works." },
        { question: "Who were the Peredvizhniki?", answer: "The <strong>Peredvizhniki</strong> (\"Wanderers\") were Russian realist artists who rebelled against academic restrictions in 1870. They organized traveling exhibitions to bring socially conscious art beyond Moscow and St. Petersburg to ordinary Russians." },
        { question: "Did Repin know Leo Tolstoy?", answer: "Yes, Repin developed a significant friendship with writer <strong>Leo Tolstoy</strong> and painted several <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of him. He also painted composer Modest Mussorgsky and other cultural luminaries." },
        { question: "How popular is Repin in Russia today?", answer: "Extremely popular. In a <strong>2017 VTsIOM poll</strong>, Repin ranked third as Russians' favorite artist with 16% of votes, behind only Ivan Aivazovsky (27%) and Ivan Shishkin (26%)." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: ilya-repin');

  // 6. Carl Larsson
  await prisma.artist.update({
    where: { slug: 'carl-larsson' },
    data: {
      bioFull: `<p>Swedish painter <strong>Carl Larsson</strong> (1853-1919) became one of Sweden's most beloved artists through watercolors depicting idyllic family life that defined the Swedish home aesthetic. Born in poverty in Stockholm's Gamla stan neighborhood, he grew up in dismal circumstances while his mother worked long hours as a laundress. His artistic talent emerged early, and at 13 his teacher persuaded him to apply to Principskolan, the preparatory department of the Royal Swedish Academy of Arts. By 16 he had advanced to the "antique school." After years as an illustrator without success, he moved to Paris in 1877.</p>

<p>Everything changed in 1882 when Larsson settled at a Scandinavian artists' colony in Grez-sur-Loing outside Paris. There he met artist Karin Bergöö, who became his wife in 1883. His technique shifted from oils to the luminous <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>watercolors</strong></a> that made his reputation. In 1888, Karin's father gave the young family a small house named Lilla Hyttnäs at Sundborn in Dalarna. Carl and Karin decorated it according to their artistic taste, creating interiors that became world-famous through his paintings and books.</p>

<p>Larsson's family became his favorite models. His wife and eight children appear throughout his work, reflecting a serene domestic environment. Publisher Bonnier's books of his <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color reproductions</strong></a>, titled "A Home," made him hugely popular when color printing technology improved in the 1890s. Artist Otto Carlsund later called Lilla Hyttnäs "the quintessence of every Swedish home." Larsson considered his monumental works, like frescos in schools and museums, his most important achievements. His final major painting "Midvinterblot" (Midwinter Sacrifice), a 6-by-14-metre oil, was rejected by the National Museum committee but later purchased with private donations and now hangs in the <a href="/museum/national-museum-stockholm"><strong>National Museum</strong></a> in Stockholm. The Thiel Gallery also holds significant works. Visitors can still tour Carl Larsson-gården, his Sundborn home.</p>`,
      faqs: [
        { question: "What is Carl Larsson famous for?", answer: "Larsson is famous for <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>watercolors</strong></a> depicting idyllic Swedish family life. His paintings of his home and family defined the Swedish aesthetic and influenced Scandinavian interior design for generations." },
        { question: "Where can I see Carl Larsson's paintings?", answer: "The <a href=\"/museum/national-museum-stockholm\"><strong>National Museum</strong></a> in Stockholm holds major works including \"Midvinterblot.\" The Thiel Gallery displays his Sundborn watercolors. <strong>Carl Larsson-gården</strong>, his Sundborn home, is open to visitors." },
        { question: "What was Carl Larsson's home at Sundborn?", answer: "In 1888, Larsson received a small house called <strong>Lilla Hyttnäs</strong> at Sundborn in Dalarna. He and his wife Karin decorated it in their distinctive style, making it one of the most famous artist's homes in the world." },
        { question: "Who was Karin Larsson?", answer: "<strong>Karin Bergöö</strong> was an artist whom Carl met at a Scandinavian artists' colony in France. They married in 1883. She collaborated on their home's interiors and appears throughout his paintings with their eight children." },
        { question: "What subjects did Carl Larsson paint?", answer: "Larsson primarily painted <strong>domestic scenes</strong> featuring his wife, eight children, and their Sundborn home. He also created monumental frescos for schools and public buildings, which he considered his most important work." },
        { question: "What happened to Larsson's painting Midvinterblot?", answer: "The <strong>National Museum</strong> committee rejected \"Midvinterblot\" (1915), deeply disappointing Larsson. Public appreciation later changed expert opinion, and the museum purchased it with private donations in 1997, displaying it in its intended location." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: carl-larsson');

  // 7. Duccio di Buoninsegna
  await prisma.artist.update({
    where: { slug: 'duccio' },
    data: {
      bioFull: `<p>Sienese painter <strong>Duccio di Buoninsegna</strong> (c. 1255-1319) was one of the greatest Italian artists of the Middle Ages and the founder of the Sienese school. First mentioned in 1278 when Siena's treasurer commissioned him to decorate strongboxes, he soon established himself as the city's leading painter. In 1280, Duccio received a large fine for unrecorded misconduct, the first of many fines suggesting a restless and rebellious temperament. In his art, the formality of the Italo-Byzantine tradition fuses with the new spirituality of the Gothic style.</p>

<p>Duccio's great <strong>Maestà</strong>, commissioned for the high altar of Siena Cathedral, stands as his masterpiece and one of the defining works of the Proto-<a href="/movement/renaissance"><strong>Renaissance</strong></a>. Commissioned on October 9, 1308, for 3,000 gold florins (the highest sum paid to an artist until then), he completed it by June 1311. The Sienese carried it in procession around the city before installing it in the cathedral. Painted on both front and back, this massive altarpiece comprised some 80 separate scenes. The front shows an enthroned Madonna and Child with saints and angels; the reverse depicted 43 panels of the Life of the Virgin and Life of Christ.</p>

<p>The Maestà remained in place until 1771, when it was dismantled to distribute pieces between two altars. The 5-metre construction was sawn up, damaging paintings and losing pieces. Today the main panels hang in the <a href="/museum/museo-opera-duomo-siena"><strong>Museo dell'Opera del Duomo</strong></a> in Siena. Scattered fragments exist in other museums: his "Stoclet Madonna" (c. 1300) was purchased by the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 2004 for an estimated $45 million. His earlier "Rucellai Madonna" (1285) hangs at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>. Duccio influenced Simone Martini and the brothers Ambrogio and Pietro Lorenzetti, shaping Sienese painting for generations.</p>`,
      faqs: [
        { question: "What art movement was Duccio part of?", answer: "Duccio founded the <strong>Sienese school</strong> and is considered a Proto-<a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> master. His art fused the Italo-Byzantine tradition with Gothic spirituality, creating the distinctive Sienese style of decorative surfaces and elongated figures." },
        { question: "Where can I see Duccio's paintings?", answer: "The main panels of his Maestà hang at the <a href=\"/museum/museo-opera-duomo-siena\"><strong>Museo dell'Opera del Duomo</strong></a> in Siena. His \"Rucellai Madonna\" is at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a>, and his \"Stoclet Madonna\" is at the <a href=\"/museum/met\"><strong>Metropolitan Museum</strong></a>." },
        { question: "What is Duccio's most famous painting?", answer: "The <strong>Maestà</strong> (1308-1311), painted for Siena Cathedral's high altar, is his masterpiece. This massive double-sided altarpiece comprised about 80 separate scenes and cost 3,000 gold florins, the highest sum paid to any artist until then." },
        { question: "What happened to the Maestà altarpiece?", answer: "The <strong>Maestà remained intact until 1771</strong>, when it was dismantled and sawn up to distribute pieces between two altars. Some panels were damaged or lost. Surviving pieces are now scattered across several museums worldwide." },
        { question: "Who did Duccio influence?", answer: "Duccio influenced major Sienese painters including <strong>Simone Martini</strong> and the brothers <strong>Ambrogio and Pietro Lorenzetti</strong>. His founding of the Sienese style shaped Italian painting for generations after his death." },
        { question: "How much did the Metropolitan pay for a Duccio painting?", answer: "In 2004, the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> purchased Duccio's \"<strong>Stoclet Madonna</strong>\" (c. 1300) for an estimated <strong>$45 million</strong>, reflecting his enduring significance in art history." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: duccio');

  // Connect Duccio to Renaissance movement
  await prisma.artist.update({
    where: { slug: 'duccio' },
    data: {
      Movement: {
        connect: { slug: 'renaissance' }
      }
    }
  });
  console.log('Connected duccio to renaissance');

  // 8. Rosa Bonheur
  await prisma.artist.update({
    where: { slug: 'rosa-bonheur' },
    data: {
      bioFull: `<p>French artist <strong>Rosa Bonheur</strong> (1822-1899) was widely considered the most famous female painter of the 19th century, renowned for her powerful depictions of animals. Born Marie-Rosalie Bonheur in Bordeaux, she was the oldest child in a family of artists and learned the fundamentals of painting from her father Raymond Bonheur. To achieve anatomical accuracy, she studied at the abattoirs of Paris and dissected animals at the National Veterinary Institute, creating detailed studies she later used as references. She was one of the youngest people to study painting and sculpture at the Louvre.</p>

<p>Her most famous work, "The Horse Fair" (1853), depicts the Paris horse market on the tree-lined Boulevard de l'Hôpital. For a year and a half, Bonheur sketched there twice weekly, dressing as a man to discourage attention. The finished painting measures seven feet tall and fourteen feet wide. She called it her own "Parthenon frieze," drawing inspiration from George Stubbs, Théodore Géricault, and Eugène Delacroix. The painting caused a sensation and established her international reputation.</p>

<p>Bonheur was more popular in England than France. In 1865, Empress Eugénie decorated her with the French Legion of Honor, making her the first female artist to receive this award. She was promoted to Officer of the Order in 1894. Her 1849 painting "Ploughing in the Nivernais" hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>. "The Horse Fair" has been one of the most popular paintings at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> since Cornelius Vanderbilt purchased it for them in 1887. A smaller version exists at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London. In 1859, her success enabled her to move to the Château de By near Fontainebleau, where she lived until her death. The house is now a museum dedicated to her work.</p>`,
      faqs: [
        { question: "What is Rosa Bonheur famous for?", answer: "Bonheur was famous for her powerful <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>animal paintings</strong></a>, especially horses. Her masterpiece \"<strong>The Horse Fair</strong>\" (1853) established her as the most celebrated female painter of the 19th century." },
        { question: "Where can I see The Horse Fair?", answer: "The original \"Horse Fair\" hangs at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, donated by Cornelius Vanderbilt in 1887. A smaller version is at the <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
        { question: "Why did Rosa Bonheur dress as a man?", answer: "For a year and a half, Bonheur sketched at the Paris <strong>horse market twice weekly</strong>, dressing as a man to discourage unwanted attention. She needed police permission to wear trousers in public, which she renewed regularly." },
        { question: "What awards did Rosa Bonheur receive?", answer: "In 1865, Empress Eugénie made Bonheur the <strong>first female artist</strong> to receive the French Legion of Honor. She was promoted to Officer of the Order in 1894, further cementing her status as a pioneering woman artist." },
        { question: "Where did Rosa Bonheur live?", answer: "In 1859, her success enabled her to move to the <strong>Château de By</strong> near Fontainebleau, where she lived until her death in 1899. The house is now a museum dedicated to her work and legacy." },
        { question: "How did Bonheur achieve such anatomical accuracy?", answer: "Bonheur studied <strong>animal anatomy at Paris abattoirs</strong> and dissected animals at the National Veterinary Institute. She created detailed studies that she later used as references for her paintings and sculptures." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rosa-bonheur');

  // Connect Rosa Bonheur to Academic Art movement
  await prisma.artist.update({
    where: { slug: 'rosa-bonheur' },
    data: {
      Movement: {
        connect: { slug: 'academic-art' }
      }
    }
  });
  console.log('Connected rosa-bonheur to academic-art');

  // 9. Viktor Vasnetsov
  await prisma.artist.update({
    where: { slug: 'viktor-vasnetsov' },
    data: {
      bioFull: `<p>Russian painter <strong>Viktor Vasnetsov</strong> (1848-1926) was a co-founder of Russian folklorist and romantic nationalistic painting, creating images that continue to shape how people visualize heroes from Russian epics and fairy tales. Born in the remote village of Lopyal in Vyatka Governorate, he was the son of a priest who was also a scholar of natural sciences. His grandfather was an icon painter, and two of his father's six sons became remarkable painters. Viktor received his first drawing lessons at the Vyatsky Seminary, then moved to St. Petersburg in 1867 to study at the Drawing School under Ivan Kramskoy of the Peredvizhniki ("Wanderers") group.</p>

<p>In Paris, Vasnetsov became fascinated with fairy-tale subjects, beginning work on "Ivan Tsarevich Riding a Grey Wolf" and "The Firebird." His folklore paintings include "The Knight at the Crossroads" (1878), "The Flying Carpet" (1880), "Alyonushka" (1881), and his monumental "The Bogatyrs" (1881-1898). Dark forests, fiery sunrises, and stormy clouds made legendary episodes feel like actual events in Russian history. These works were enormously popular, cementing his position as the defining visual interpreter of Russian <a href="https://luxurywallart.com/collections/fantasy" target="_blank" rel="noopener"><strong>folklore and fantasy</strong></a>.</p>

<p>Beyond painting, Vasnetsov designed costumes and sets for Rimsky-Korsakov's opera "The Snow Maiden" (1886) and created a monumental panel, "Stone Age" (1883-85), for Moscow's State Historical Museum. In 1904, he designed the façade of the Tretyakov Gallery, his best-known "fairy-tale" building. Czar Nicholas II granted him a noble title in 1912. He donated a significant portion of his income to the State Historical Museum, funding much of its collection. Many of his paintings hang at the <a href="/museum/tretyakov-gallery"><strong>State Tretyakov Gallery</strong></a> and the Vasnetsov House Museum in Moscow, which the artist designed himself to resemble an ancient Russian terem.</p>`,
      faqs: [
        { question: "What art movement was Viktor Vasnetsov part of?", answer: "Vasnetsov was associated with <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a> and <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a>, co-founding Russian folklorist and romantic nationalistic painting. He studied under Ivan Kramskoy of the Peredvizhniki (\"Wanderers\") group." },
        { question: "Where can I see Viktor Vasnetsov's paintings?", answer: "Major works hang at the <a href=\"/museum/tretyakov-gallery\"><strong>State Tretyakov Gallery</strong></a> in Moscow and the <strong>Vasnetsov House Museum</strong>, which he designed himself. The Nizhny Novgorod State Art Museum also holds significant works." },
        { question: "What are Vasnetsov's most famous paintings?", answer: "\"<strong>The Bogatyrs</strong>\" (1881-1898), \"<strong>Alyonushka</strong>\" (1881), \"<strong>Ivan Tsarevich Riding the Grey Wolf</strong>\" (1889), and \"<strong>The Flying Carpet</strong>\" (1880) are his most celebrated <a href=\"https://luxurywallart.com/collections/fantasy\" target=\"_blank\" rel=\"noopener\"><strong>folklore</strong></a> paintings." },
        { question: "What subjects did Viktor Vasnetsov paint?", answer: "Vasnetsov painted Russian <strong>folklore, fairy tales, and epic bylinas</strong>. His images of legendary heroes like the three bogatyrs continue to define how Russians visualize characters from their national mythology." },
        { question: "Did Vasnetsov design buildings?", answer: "Yes. In 1904, Vasnetsov designed the <strong>façade of the Tretyakov Gallery</strong>, his best-known architectural work. He also designed his own house in Moscow to resemble an ancient Russian terem (tower chamber)." },
        { question: "What did Vasnetsov contribute to Russian opera?", answer: "Vasnetsov designed <strong>costumes and stage sets</strong> for Nikolay Rimsky-Korsakov's opera \"The Snow Maiden\" in 1886. His theatrical designs brought the same folkloric vision he achieved in his paintings." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: viktor-vasnetsov');

  // Connect Viktor Vasnetsov to Symbolism movement (already has Romanticism)
  await prisma.artist.update({
    where: { slug: 'viktor-vasnetsov' },
    data: {
      Movement: {
        connect: { slug: 'symbolism' }
      }
    }
  });
  console.log('Connected viktor-vasnetsov to symbolism');

  // 10. Eastman Johnson
  await prisma.artist.update({
    where: { slug: 'eastman-johnson' },
    data: {
      bioFull: `<p>American painter <strong>Eastman Johnson</strong> (1824-1906) was a co-founder of the Metropolitan Museum of Art and one of the leading genre painters of the 19th century. Born Jonathan Eastman Johnson in Lovell, Maine, his career began in 1840 when his father apprenticed him to a Boston lithographer. By 1859, he had established a studio in New York City and secured his reputation with "Negro Life at the South" (1859), popularly called "Old Kentucky Home," exhibited at the National Academy of Design. His later works show the influence of 17th-century Dutch masters, whom he studied in The Hague in the 1850s; contemporaries called him "The American Rembrandt."</p>

<p>Johnson's "A Ride for Liberty — The Fugitive Slaves" (c. 1862) stands as one of the most powerful images of the Civil War era. It depicts an enslaved family, presumably father, mother, and child, galloping on horseback toward Union lines at dawn. Johnson claimed to have witnessed this actual event near Manassas, Virginia, on March 2, 1862, just days before Confederate forces retreated. The absence of white figures makes it virtually unique among liberation subjects of the period. These African Americans act as agents of their own freedom, each family member looking in a different direction: the father ahead to the future, the mother back to the past, the child down at the present.</p>

<p>Johnson painted <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of prominent Americans including Abraham Lincoln, Nathaniel Hawthorne, Ralph Waldo Emerson, and Henry Wadsworth Longfellow. His Ojibwe paintings remained unsold during his lifetime and now belong to the Tweed Museum of Art in Minnesota. "A Ride for Liberty" hangs at the <a href="/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a>. Other works are held at the <a href="/museum/smithsonian-american-art"><strong>Smithsonian American Art Museum</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the Milwaukee Art Museum.</p>`,
      faqs: [
        { question: "What art movement was Eastman Johnson part of?", answer: "Johnson was a leading figure in <a href=\"/movement/american-realism\"><strong>American Realism</strong></a> and 19th-century genre painting. His time studying in The Hague influenced his style so strongly that contemporaries called him \"The American Rembrandt.\"" },
        { question: "Where can I see Eastman Johnson's paintings?", answer: "\"A Ride for Liberty\" hangs at the <a href=\"/museum/brooklyn-museum\"><strong>Brooklyn Museum</strong></a>. Other works are at the <a href=\"/museum/smithsonian-american-art\"><strong>Smithsonian American Art Museum</strong></a> and the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, which he co-founded." },
        { question: "What is A Ride for Liberty about?", answer: "The painting depicts an <strong>enslaved family</strong> galloping toward Union lines at dawn. Johnson claimed to witness this actual event near Manassas, Virginia, in 1862. The absence of white figures makes it unique among Civil War liberation imagery." },
        { question: "Who did Eastman Johnson paint portraits of?", answer: "Johnson painted <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of prominent Americans including <strong>Abraham Lincoln</strong>, Nathaniel Hawthorne, Ralph Waldo Emerson, and Henry Wadsworth Longfellow." },
        { question: "Why was Johnson called The American Rembrandt?", answer: "Johnson studied <strong>17th-century Dutch masters</strong> in The Hague during the 1850s. Their influence on his technique, particularly his handling of light and shadow, led contemporaries to call him \"The American Rembrandt.\"" },
        { question: "Did Eastman Johnson help found a museum?", answer: "Yes. Johnson was a <strong>co-founder of the Metropolitan Museum of Art</strong> in New York City. His name is inscribed at its entrance alongside other founding members." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: eastman-johnson');

  // Connect Eastman Johnson to American Realism movement
  await prisma.artist.update({
    where: { slug: 'eastman-johnson' },
    data: {
      Movement: {
        connect: { slug: 'american-realism' }
      }
    }
  });
  console.log('Connected eastman-johnson to american-realism');

  console.log('\nAll 10 artists updated successfully!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
