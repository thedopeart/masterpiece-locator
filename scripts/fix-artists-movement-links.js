const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Fixing movement links in artist bios...\n');

  // 1. George Bellows - Add American Realism link
  await prisma.artist.update({
    where: { slug: 'george-bellows' },
    data: {
      bioFull: `<p><a href="/movement/american-realism"><strong>American Realist</strong></a> painter <strong>George Bellows</strong> (1882-1925) captured the raw energy of early 20th-century New York with a boldness that made him the most acclaimed artist of his generation. Born in Columbus, Ohio, he attended Ohio State University, where his athletic talents nearly led him to professional baseball. He chose art instead, moving to New York in 1904 to study with <strong>Robert Henri</strong>. Bellows quickly became associated with the Ashcan School, a group of artists who painted contemporary American life in all its gritty reality. From crowded tenements to boxing clubs, nothing was off limits.</p>

<p>His fight paintings became his signature contribution to art history. "Stag at Sharkey's" (1909) depicts an illegal bout at Tom Sharkey's Athletic Club, located directly across Broadway from Bellows's studio. After New York banned public prizefighting in 1900, private clubs sold memberships to let audiences watch and gamble on matches. Bellows seized on these scenes of raw male aggression, inscribing their intensity in slashing brushwork. "Dempsey and Firpo" (1924) captures heavyweight champion Jack Dempsey being knocked through the ropes by Argentine challenger Luis Firpo at the Polo Grounds.</p>

<p>Beyond boxing, Bellows painted <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal scenes</strong></a>, <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>, urban crowds, and wartime subjects. He helped organize the landmark Armory Show of 1913 and produced nearly 200 lithographs from 1916 onward. In 1911, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> acquired one of his Hudson River scenes, making him one of the youngest artists in their collection at 29. Bellows died unexpectedly in 1925 from a ruptured appendix at just 42. His work hangs at the <a href="/museum/whitney-museum"><strong>Whitney Museum</strong></a>, the <a href="/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> (which owns "Stag at Sharkey's"), and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: george-bellows');

  // 2. Käthe Kollwitz - Add Expressionism link
  await prisma.artist.update({
    where: { slug: 'kathe-kollwitz' },
    data: {
      bioFull: `<p><a href="/movement/expressionism"><strong>Expressionist</strong></a> artist <strong>Käthe Kollwitz</strong> (1867-1945) became the foremost artist of social protest in the 20th century and an eloquent advocate for victims of war, poverty, and injustice. Born in Königsberg, East Prussia (now Kaliningrad, Russia), she grew up in a liberal middle-class family and studied painting in Berlin and Munich. Impressed by the prints of Max Klinger, she devoted herself primarily to graphic art after 1890, producing etchings, lithographs, woodcuts, and drawings. In 1891 she married Karl Kollwitz, a doctor who opened a clinic in a working-class section of Berlin. There she witnessed firsthand the miserable conditions of the urban poor.</p>

<p>Her first important works were two print series: "Weavers' Revolt" (c. 1894-98) and "Peasants' War" (1902-08). Both depict the effects of poverty, hunger, and oppression on working people. The death of her youngest son Peter in battle in 1914 profoundly affected her art. She expressed her grief in cycles of prints treating themes of a mother protecting her children and a mother with a dead child. These <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>powerful black and white images</strong></a> remain some of the most moving anti-war art ever created.</p>

<p>Kollwitz was the first woman elected to the Prussian Academy of Arts and the first to receive honorary professor status. She also created sculpture, including a granite monument for her son (1924-32), now a memorial near Ypres, Belgium. An enlarged version of her sculpture "Mother with her Dead Son" was placed in 1993 at Berlin's Neue Wache as a monument to war victims. The Nazis expelled her from exhibiting but appropriated her imagery for propaganda. Her Berlin apartment was destroyed in World War II, with great loss of work. She died two weeks before Germany's surrender. Museums dedicated to her work exist in Berlin, Cologne, and Moritzburg. The <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> holds significant collections of her prints.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: kathe-kollwitz');

  // 3. Emanuel Leutze - Add Romanticism link
  await prisma.artist.update({
    where: { slug: 'emanuel-leutze' },
    data: {
      bioFull: `<p><a href="/movement/romanticism"><strong>Romantic</strong></a> history painter <strong>Emanuel Leutze</strong> (1816-1868) created one of the most recognizable images in American art: "Washington Crossing the Delaware." Born in Schwäbisch Gmünd, Kingdom of Württemberg, he came to America as a child in 1825. His family settled first in Fredericksburg, Virginia, then Philadelphia. His artistic talent emerged while caring for his sick father, and after his father died in 1831, 14-year-old Leutze began painting portraits for five dollars each to support himself. In 1840, one of his paintings attracted enough attention to send him to study at the Kunstakademie Düsseldorf in Germany.</p>

<p>A strong supporter of Europe's Revolutions of 1848, Leutze decided to paint an image encouraging liberal reformers with the example of the American Revolution. Using American tourists and art students as models, he finished a first version in 1850. That painting was damaged by fire, restored, and acquired by the Kunsthalle Bremen, where it was destroyed by Allied bombing in 1942. The second version, completed in 1850, was shipped to New York and exhibited in October 1851. Wealthy capitalist Marshall O. Roberts purchased it for the then-staggering price of $10,000.</p>

<p>The painting contains several inaccuracies: the flag is anachronistic, the boats are too small, the time of day is wrong, and Washington probably couldn't have stood as depicted. Leutze painted a river resembling the Rhine rather than the narrow Delaware. None of this diminished its impact. In 1860, Congress commissioned him to paint "Westward the Course of Empire Takes Its Way" for a Capitol Building stairway. The primary "Washington Crossing the Delaware" was donated to the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1897, where it remains one of their most popular works. A smaller third version sold at Christie's in 2022 for $45 million. Other works hang at the <a href="/museum/smithsonian-american-art"><strong>Smithsonian American Art Museum</strong></a> and the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: emanuel-leutze');

  // 4. Ilya Repin - Add movement description (Peredvizhniki/Realism)
  await prisma.artist.update({
    where: { slug: 'ilya-repin' },
    data: {
      bioFull: `<p><a href="/movement/american-realism"><strong>Realist</strong></a> painter <strong>Ilya Repin</strong> (1844-1930) was the most renowned Russian artist of the 19th century, holding a position in the art world comparable to Leo Tolstoy's in literature. Born into a poor family of "military settlers" near Kharkov (now Kharkiv, Ukraine), he learned his trade from an icon painter named Bunakov. In 1864 he entered the Academy of Fine Arts at St. Petersburg, earning the title of academician in 1876. His 1873 painting "Barge Haulers on the Volga" made him the leader of a new movement of critical realism in Russian art.</p>

<p>In 1878, Repin joined the <strong>Peredvizhniki</strong> ("Wanderers" or "Itinerants"), a group of free-thinking artists who rejected academic conventions in favor of socially conscious art. They organized traveling exhibitions to bring art to the Russian people beyond Moscow and St. Petersburg. Repin's technical excellence gave legitimacy to this movement, proving that realism could achieve artistic greatness. His major works include "Religious Procession in Kursk Province" (1883), "Ivan the Terrible and His Son Ivan" (1885), and "Reply of the Zaporozhian Cossacks" (1880-91).</p>

<p>Repin spent over a decade researching the Cossacks painting, traveling to Zaporozhian regions, studying historical documents, and collecting authentic costumes and weapons. The composition includes more than a dozen distinctive characters, each with unique expressions. He developed friendships with Tolstoy and composer Modest Mussorgsky, painting powerful <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of both. In 1900, he purchased an estate called "Penates" in Kuokkala (now Repino), Finland, where he lived until his death. His works remain centerpieces at the <a href="/museum/tretyakov-gallery"><strong>State Tretyakov Gallery</strong></a> in Moscow and the <a href="/museum/russian-museum"><strong>Russian Museum</strong></a> in Saint Petersburg. In a 2017 poll, Repin ranked third as Russians' favorite artist.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: ilya-repin');

  // 5. Carl Larsson - Add movement reference
  await prisma.artist.update({
    where: { slug: 'carl-larsson' },
    data: {
      bioFull: `<p>Swedish painter <strong>Carl Larsson</strong> (1853-1919), influenced by <a href="/movement/impressionism"><strong>Impressionism</strong></a> and the Arts and Crafts movement, became one of Sweden's most beloved artists through watercolors depicting idyllic family life that defined the Swedish home aesthetic. Born in poverty in Stockholm's Gamla stan neighborhood, he grew up in dismal circumstances while his mother worked long hours as a laundress. His artistic talent emerged early, and at 13 his teacher persuaded him to apply to Principskolan, the preparatory department of the Royal Swedish Academy of Arts. By 16 he had advanced to the "antique school." After years as an illustrator without success, he moved to Paris in 1877.</p>

<p>Everything changed in 1882 when Larsson settled at a Scandinavian artists' colony in Grez-sur-Loing outside Paris. There he met artist Karin Bergöö, who became his wife in 1883. His technique shifted from oils to the luminous <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>watercolors</strong></a> that made his reputation. In 1888, Karin's father gave the young family a small house named Lilla Hyttnäs at Sundborn in Dalarna. Carl and Karin decorated it according to their artistic taste, creating interiors that became world-famous through his paintings and books.</p>

<p>Larsson's family became his favorite models. His wife and eight children appear throughout his work, reflecting a serene domestic environment. Publisher Bonnier's books of his <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color reproductions</strong></a>, titled "A Home," made him hugely popular when color printing technology improved in the 1890s. Artist Otto Carlsund later called Lilla Hyttnäs "the quintessence of every Swedish home." Larsson considered his monumental works, like frescos in schools and museums, his most important achievements. His final major painting "Midvinterblot" (Midwinter Sacrifice), a 6-by-14-metre oil, was rejected by the National Museum committee but later purchased with private donations and now hangs in the <a href="/museum/national-museum-stockholm"><strong>National Museum</strong></a> in Stockholm. The Thiel Gallery also holds significant works. Visitors can still tour Carl Larsson-gården, his Sundborn home.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: carl-larsson');

  // 6. Rosa Bonheur - Add Academic Art link
  await prisma.artist.update({
    where: { slug: 'rosa-bonheur' },
    data: {
      bioFull: `<p><a href="/movement/academic-art"><strong>Academic</strong></a> painter <strong>Rosa Bonheur</strong> (1822-1899) was widely considered the most famous female painter of the 19th century, renowned for her powerful depictions of animals. Born Marie-Rosalie Bonheur in Bordeaux, she was the oldest child in a family of artists and learned the fundamentals of painting from her father Raymond Bonheur. To achieve anatomical accuracy, she studied at the abattoirs of Paris and dissected animals at the National Veterinary Institute, creating detailed studies she later used as references. She was one of the youngest people to study painting and sculpture at the Louvre.</p>

<p>Her most famous work, "The Horse Fair" (1853), depicts the Paris horse market on the tree-lined Boulevard de l'Hôpital. For a year and a half, Bonheur sketched there twice weekly, dressing as a man to discourage attention. The finished painting measures seven feet tall and fourteen feet wide. She called it her own "Parthenon frieze," drawing inspiration from George Stubbs, Théodore Géricault, and Eugène Delacroix. The painting caused a sensation and established her international reputation.</p>

<p>Bonheur was more popular in England than France. In 1865, Empress Eugénie decorated her with the French Legion of Honor, making her the first female artist to receive this award. She was promoted to Officer of the Order in 1894. Her 1849 painting "Ploughing in the Nivernais" hangs at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>. "The Horse Fair" has been one of the most popular paintings at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> since Cornelius Vanderbilt purchased it for them in 1887. A smaller version exists at the <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London. In 1859, her success enabled her to move to the Château de By near Fontainebleau, where she lived until her death. The house is now a museum dedicated to her work.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: rosa-bonheur');

  // 7. Viktor Vasnetsov - Add Romanticism link
  await prisma.artist.update({
    where: { slug: 'viktor-vasnetsov' },
    data: {
      bioFull: `<p><a href="/movement/romanticism"><strong>Romantic</strong></a> painter <strong>Viktor Vasnetsov</strong> (1848-1926) was a co-founder of Russian folklorist and romantic nationalistic painting, creating images that continue to shape how people visualize heroes from Russian epics and fairy tales. Born in the remote village of Lopyal in Vyatka Governorate, he was the son of a priest who was also a scholar of natural sciences. His grandfather was an icon painter, and two of his father's six sons became remarkable painters. Viktor received his first drawing lessons at the Vyatsky Seminary, then moved to St. Petersburg in 1867 to study at the Drawing School under Ivan Kramskoy of the Peredvizhniki ("Wanderers") group.</p>

<p>In Paris, Vasnetsov became fascinated with fairy-tale subjects, beginning work on "Ivan Tsarevich Riding a Grey Wolf" and "The Firebird." His folklore paintings include "The Knight at the Crossroads" (1878), "The Flying Carpet" (1880), "Alyonushka" (1881), and his monumental "The Bogatyrs" (1881-1898). Dark forests, fiery sunrises, and stormy clouds made legendary episodes feel like actual events in Russian history. These works were enormously popular, cementing his position as the defining visual interpreter of Russian <a href="https://luxurywallart.com/collections/fantasy" target="_blank" rel="noopener"><strong>folklore and fantasy</strong></a>.</p>

<p>Beyond painting, Vasnetsov designed costumes and sets for Rimsky-Korsakov's opera "The Snow Maiden" (1886) and created a monumental panel, "Stone Age" (1883-85), for Moscow's State Historical Museum. In 1904, he designed the façade of the Tretyakov Gallery, his best-known "fairy-tale" building. Czar Nicholas II granted him a noble title in 1912. He donated a significant portion of his income to the State Historical Museum, funding much of its collection. Many of his paintings hang at the <a href="/museum/tretyakov-gallery"><strong>State Tretyakov Gallery</strong></a> and the Vasnetsov House Museum in Moscow, which the artist designed himself to resemble an ancient Russian terem.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: viktor-vasnetsov');

  // 8. Eastman Johnson - Add American Realism link
  await prisma.artist.update({
    where: { slug: 'eastman-johnson' },
    data: {
      bioFull: `<p><a href="/movement/american-realism"><strong>American Realist</strong></a> painter <strong>Eastman Johnson</strong> (1824-1906) was a co-founder of the Metropolitan Museum of Art and one of the leading genre painters of the 19th century. Born Jonathan Eastman Johnson in Lovell, Maine, his career began in 1840 when his father apprenticed him to a Boston lithographer. By 1859, he had established a studio in New York City and secured his reputation with "Negro Life at the South" (1859), popularly called "Old Kentucky Home," exhibited at the National Academy of Design. His later works show the influence of 17th-century Dutch masters, whom he studied in The Hague in the 1850s; contemporaries called him "The American Rembrandt."</p>

<p>Johnson's "A Ride for Liberty — The Fugitive Slaves" (c. 1862) stands as one of the most powerful images of the Civil War era. It depicts an enslaved family, presumably father, mother, and child, galloping on horseback toward Union lines at dawn. Johnson claimed to have witnessed this actual event near Manassas, Virginia, on March 2, 1862, just days before Confederate forces retreated. The absence of white figures makes it virtually unique among liberation subjects of the period. These African Americans act as agents of their own freedom, each family member looking in a different direction: the father ahead to the future, the mother back to the past, the child down at the present.</p>

<p>Johnson painted <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> of prominent Americans including Abraham Lincoln, Nathaniel Hawthorne, Ralph Waldo Emerson, and Henry Wadsworth Longfellow. His Ojibwe paintings remained unsold during his lifetime and now belong to the Tweed Museum of Art in Minnesota. "A Ride for Liberty" hangs at the <a href="/museum/brooklyn-museum"><strong>Brooklyn Museum</strong></a>. Other works are held at the <a href="/museum/smithsonian-american-art"><strong>Smithsonian American Art Museum</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, and the Milwaukee Art Museum.</p>`,
      updatedAt: new Date()
    }
  });
  console.log('Fixed: eastman-johnson');

  console.log('\nAll 8 artists fixed with movement links!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
