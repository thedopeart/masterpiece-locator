const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting artist updates (Batch 1: 10 artists)...\n');

  // 1. Carolus-Duran
  await prisma.artist.update({
    where: { slug: 'carolus-duran' },
    data: {
      bioFull: `<p><a href="/movement/academic-art"><strong>Academic</strong></a> painter <strong>Charles Auguste Emile Durand</strong>, known as Carolus-Duran (1837-1917), became one of the most sought-after portrait painters in late 19th-century Paris. Born in Lille, France, he adopted his professional name early in his career and developed a distinctive style influenced by Spanish masters, particularly Diego Velázquez. His portraits of fashionable Parisian society earned him the nickname "The Prince of Color" from Henri de Toulouse-Lautrec. Works like "Lady with the Glove" (1869) showcase his ability to capture both the elegance of his subjects and the rich textures of their clothing.</p>

<p>Carolus-Duran trained at the Académie de Lille before moving to Paris, where he studied at the Académie Suisse. A pivotal trip to Rome and Spain between 1862 and 1866 transformed his approach, as he absorbed the techniques of Velázquez and other Old Masters. In 1873, he opened his own teaching studio, which attracted students from across Europe and America. His most famous pupil was <strong>John Singer Sargent</strong>, who later credited Carolus-Duran's direct painting method for shaping his own career. The French government recognized his achievements by making him Commander of the Legion of Honor in 1889, and he served as Director of the French Academy in Rome from 1905 to 1913. His work can be viewed at the <a href="/museum/smithsonian-american-art-museum"><strong>Smithsonian American Art Museum</strong></a> and the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
      faqs: [
        { question: "What art movement was Carolus-Duran part of?", answer: "Carolus-Duran was a leading figure in <a href=\"/movement/academic-art\"><strong>Academic Art</strong></a>, the dominant style taught at official art academies in 19th-century France. He blended this with influences from Spanish Realism." },
        { question: "Where can I see Carolus-Duran's paintings?", answer: "His portraits hang at the <a href=\"/museum/smithsonian-american-art-museum\"><strong>Smithsonian American Art Museum</strong></a>, the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a>, and the Clark Art Institute." },
        { question: "Who were Carolus-Duran's famous students?", answer: "His most celebrated student was <strong>John Singer Sargent</strong>, who studied under him from 1874 to 1878. Other notable pupils included James Carroll Beckwith, Theodore Robinson, and Kenyon Cox." },
        { question: "What was Carolus-Duran known for?", answer: "He was famous for his stylish <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of Parisian high society. His rich coloring earned him the nickname 'The Prince of Color' from Toulouse-Lautrec." },
        { question: "What influenced Carolus-Duran's style?", answer: "A trip to Spain and Italy (1862-1866) proved transformative. He studied <strong>Diego Velázquez</strong> extensively, adopting the Spanish master's direct painting technique and rich color palette." },
        { question: "What honors did Carolus-Duran receive?", answer: "France made him Commander of the <strong>Legion of Honor</strong> in 1889. He also served as Director of the French Academy in Rome from 1905 until 1913." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: carolus-duran');

  // 2. Edmund Blair Leighton
  await prisma.artist.update({
    where: { slug: 'edmund-blair-leighton' },
    data: {
      bioFull: `<p><strong>Edmund Blair Leighton</strong> (1852-1922) specialized in romanticized scenes of medieval chivalry and Regency-era life that captivated Victorian audiences. The English painter brought historical moments to life with precise attention to costume details and emotionally charged compositions. Works like "The Accolade" (1901), showing a queen knighting a young warrior, and "Godspeed" (1900), depicting a lady sending her knight to battle, remain widely reproduced today. His paintings feature recurring themes of <a href="https://luxurywallart.com/collections/kings-and-queens" target="_blank" rel="noopener"><strong>royalty</strong></a>, courtly love, and noble sacrifice.</p>

<p>Born in London to artist Charles Blair Leighton, Edmund studied at evening classes in South Kensington before attending the Royal Academy Schools at age 21. He first exhibited at the Royal Academy in 1874 with "A Flaw in the Title," which sold for 200 pounds. Though he never achieved Royal Academy associate status, he was elected to the Royal Institute of Oil Painters in 1887. His <a href="/movement/academic-art"><strong>Academic</strong></a> style connected him to the broader <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> tradition, though his approach was more naturalistic than the Brotherhood's early work. Leighton served as president of the Langham Sketch Club in 1880 and married Katherine Nash in 1885. His son Eric also became a painter. While major museums hold relatively few of his original works, his images circulate globally through prints and posters, making him one of the most recognizable painters of medieval subjects.</p>`,
      faqs: [
        { question: "What subjects did Edmund Blair Leighton paint?", answer: "Leighton specialized in romanticized <strong>medieval and Regency scenes</strong>. His work features knights, ladies, and courtly ceremonies, often depicting moments of chivalry and <a href=\"https://luxurywallart.com/collections/kings-and-queens\" target=\"_blank\" rel=\"noopener\"><strong>royalty</strong></a>." },
        { question: "What are Edmund Blair Leighton's most famous paintings?", answer: "\"<strong>The Accolade</strong>\" (1901) and \"<strong>Godspeed</strong>\" (1900) remain his most recognized works. Both depict emotional moments between knights and noble ladies in medieval settings." },
        { question: "What art movement was Edmund Blair Leighton associated with?", answer: "Leighton worked in the <a href=\"/movement/academic-art\"><strong>Academic Art</strong></a> tradition with connections to the <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> movement, though his style was more naturalistic than early Pre-Raphaelite work." },
        { question: "Was Edmund Blair Leighton a Royal Academy member?", answer: "Despite exhibiting regularly at the <strong>Royal Academy</strong> from 1874, Leighton never became an associate member. He was elected to the Royal Institute of Oil Painters in 1887." },
        { question: "Did Edmund Blair Leighton come from an artistic family?", answer: "Yes, his father <strong>Charles Blair Leighton</strong> was also an artist who died when Edmund was three. His mother opened a school to support the family, and his son Eric became a painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: edmund-blair-leighton');

  // 3. El Lissitzky
  await prisma.artist.update({
    where: { slug: 'el-lissitzky' },
    data: {
      bioFull: `<p><a href="/movement/suprematism"><strong>Suprematist</strong></a> artist <strong>Lazar Markovich Lissitzky</strong>, known as El Lissitzky (1890-1941), helped shape the visual language of 20th-century modernism. Born in Pochinok, Russia, he studied architecture in Germany after being rejected from Russian art academies due to anti-Jewish quotas. His "Proun" series, beginning in 1919, broke new ground by treating geometric compositions as bridges between painting and architecture. These abstract works explored three-dimensional space on a flat surface, influencing everything from graphic design to exhibition architecture.</p>

<p>Lissitzky's career took a decisive turn in 1919 when Marc Chagall invited him to teach at the People's Art School in Vitebsk. There he met <strong>Kazimir Malevich</strong>, whose Suprematist ideas transformed his approach. His 1919 propaganda poster "Beat the Whites with the Red Wedge" became an icon of revolutionary graphic design. Through the 1920s, Lissitzky traveled between Russia and Western Europe, befriending Kurt Schwitters, László Moholy-Nagy, and Theo van Doesburg. He served as a crucial link between Russian Constructivism and movements like the <a href="/movement/de-stijl"><strong>De Stijl</strong></a> and Bauhaus. His innovative exhibition designs and typography continue to influence designers today. Major collections of his work are held at the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a> in New York, the <a href="/museum/tate"><strong>Tate</strong></a> in London, and the Museo Nacional Thyssen-Bornemisza.</p>`,
      faqs: [
        { question: "What art movement was El Lissitzky part of?", answer: "El Lissitzky was a key figure in <a href=\"/movement/suprematism\"><strong>Suprematism</strong></a> and Russian Constructivism. He served as a bridge between these movements and European avant-garde groups like <a href=\"/movement/de-stijl\"><strong>De Stijl</strong></a>." },
        { question: "What are El Lissitzky's Proun works?", answer: "The <strong>Proun series</strong> (from 1919) consisted of abstract geometric compositions that Lissitzky described as \"interchange stations between painting and architecture.\" They explored spatial relationships using floating forms." },
        { question: "Where can I see El Lissitzky's work?", answer: "Major collections exist at the <a href=\"/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York, the <a href=\"/museum/tate\"><strong>Tate</strong></a> in London, and the J. Paul Getty Museum in Los Angeles." },
        { question: "What influenced El Lissitzky's style?", answer: "<strong>Kazimir Malevich</strong> had the greatest impact on Lissitzky after they met at Vitebsk in 1919. Malevich's Suprematist ideas transformed Lissitzky's approach to geometric abstraction." },
        { question: "What is El Lissitzky's most famous propaganda poster?", answer: "\"<strong>Beat the Whites with the Red Wedge</strong>\" (1919) became an icon of revolutionary graphic design. The bold <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>red</strong></a> geometric forms communicate political ideas through pure abstraction." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: el-lissitzky');

  // 4. Ferdinand Georg Waldmüller
  await prisma.artist.update({
    where: { slug: 'ferdinand-georg-waldmuller' },
    data: {
      bioFull: `<p><a href="/movement/romanticism"><strong>Romantic</strong></a> painter <strong>Ferdinand Georg Waldmüller</strong> (1793-1865) became the most important Austrian artist of the Biedermeier period. Born in Vienna, he developed a naturalistic style characterized by brilliant lighting effects and precise detail. His landscapes of the Salzkammergut region capture Austrian countryside with remarkable clarity, while his genre scenes of rural life show peasants and children with warmth and dignity. Waldmüller's 1823 portrait of <strong>Ludwig van Beethoven</strong> remains one of the most authentic likenesses of the composer.</p>

<p>Waldmüller enrolled at the Academy of Fine Arts Vienna at age 14 and later spent nearly two decades making summer trips to Italy, where he studied light and color. In 1829, he became a professor at the Vienna Academy, but his outspoken advocacy for painting directly from nature clashed with academic idealism. His controversial views on art education led to forced retirement in 1857, though he was rehabilitated and knighted shortly before his death. The Vienna Secession later viewed him as a forerunner of their own rebellion against academic conventions. Today, the <a href="/museum/belvedere"><strong>Belvedere</strong></a> in Vienna holds the largest collection of his work, with additional paintings at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> and the Museo Nacional Thyssen-Bornemisza.</p>`,
      faqs: [
        { question: "What art movement was Ferdinand Georg Waldmüller part of?", answer: "Waldmüller was the leading painter of the Austrian <strong>Biedermeier period</strong> and worked within the broader <a href=\"/movement/romanticism\"><strong>Romantic</strong></a> movement. His naturalistic approach anticipated later realist tendencies." },
        { question: "Where can I see Waldmüller's paintings?", answer: "The <a href=\"/museum/belvedere\"><strong>Belvedere</strong></a> in Vienna holds the largest collection of his work. Additional paintings hang at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington." },
        { question: "What subjects did Waldmüller paint?", answer: "He painted <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> of the Austrian Salzkammergut region, genre scenes of rural life, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> including one of Beethoven." },
        { question: "Why was Waldmüller controversial?", answer: "As a professor at the Vienna Academy, he advocated for <strong>painting directly from nature</strong> rather than following academic ideals. This conflict led to his forced retirement in 1857." },
        { question: "What was Waldmüller's painting technique?", answer: "He developed a distinctive approach using <strong>naturalistic lighting</strong> and fine brushwork to capture atmospheric effects. His detailed representation of light influenced the later Vienna Secession." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: ferdinand-georg-waldmuller');

  // 5. Fernand Khnopff
  await prisma.artist.update({
    where: { slug: 'fernand-khnopff' },
    data: {
      bioFull: `<p><a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Fernand Khnopff</strong> (1858-1921) created dreamlike images that explore themes of desire, isolation, and mystery. The Belgian artist combined near-photographic precision with idealized forms, producing works that feel both intimate and unsettling. His paintings often feature sphinxes, masks, and androgynous figures, with his sister Marguerite serving as his primary model. "I Lock My Door Upon Myself" (1891) and "The Caress" (1896), showing a leopard-bodied sphinx embracing a young man, exemplify his strange, hypnotic style.</p>

<p>Born into an aristocratic family in Grembergen, Khnopff briefly studied law before enrolling at the Royal Academy of Fine Arts in Brussels. A visit to the 1878 Paris Exposition introduced him to the work of <strong>Gustave Moreau</strong> and <a href="/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> painter Edward Burne-Jones, both of whom deeply influenced his development. In 1883, he became a founding member of Les XX, the progressive Belgian artists' group. His friendship with Burne-Jones grew into mutual admiration, and his work influenced the Vienna Secession, including <strong>Gustav Klimt</strong>. Khnopff designed an elaborate home studio in Brussels that he called a "Temple of the Self," reflecting his reclusive nature. His soft, muted palette and recurring water imagery create an atmosphere of dreamlike silence that anticipates <a href="/movement/surrealism"><strong>Surrealism</strong></a>.</p>`,
      faqs: [
        { question: "What art movement was Fernand Khnopff part of?", answer: "Khnopff was a leading figure in <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a>, a movement that rejected realism in favor of dreamlike imagery expressing psychological and spiritual states." },
        { question: "What are Fernand Khnopff's most famous paintings?", answer: "\"<strong>I Lock My Door Upon Myself</strong>\" (1891) and \"<strong>The Caress</strong>\" (1896) are his most celebrated works. Both feature his characteristic mysterious atmosphere and symbolic imagery." },
        { question: "Who influenced Fernand Khnopff?", answer: "Gustave Moreau and <a href=\"/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> painter <strong>Edward Burne-Jones</strong> shaped his style after he encountered their work at the 1878 Paris Exposition." },
        { question: "Who was the model in Khnopff's paintings?", answer: "His sister <strong>Marguerite Khnopff</strong> served as his primary model. Her androgynous features appear throughout his work, often in mysterious or symbolic contexts." },
        { question: "What themes appear in Khnopff's art?", answer: "His work explores <strong>desire, isolation, and mystery</strong>. Recurring symbols include sphinxes, masks, mirrors, and water. His muted colors create a dreamlike, melancholic atmosphere." },
        { question: "Did Khnopff influence other artists?", answer: "Yes, his work influenced the <strong>Vienna Secession</strong>, particularly Gustav Klimt. His psychological imagery and symbolic approach also anticipated <a href=\"/movement/surrealism\"><strong>Surrealism</strong></a>." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: fernand-khnopff');

  console.log('\nFirst 5 artists complete. Continuing...');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
