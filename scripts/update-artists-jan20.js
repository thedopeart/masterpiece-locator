/**
 * Update Artists January 20, 2026 (40 artists)
 * Adds bioFull and FAQs following OPTIMIZE-ARTISTS.md guidelines
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // 1. Tintoretto
  {
    slug: 'tintoretto',
    bioFull: `<p><a href="/movement/renaissance"><strong>Renaissance</strong></a> painter <strong>Tintoretto</strong> (1518-1594) was born Jacopo Robusti in Venice, the son of a cloth dyer. His nickname means "little dyer" in Italian. He developed a bold, dramatic style that combined Titian's rich color with Michelangelo's dynamic forms. Contemporaries called him "il Furioso" for the speed and energy of his brushwork. Working almost entirely in Venice, he created muscular figures, dramatic gestures, and striking use of perspective that defined late <a href="/movement/mannerism"><strong>Mannerist</strong></a> painting.</p>

<p>Tintoretto's greatest achievement was the decoration of the <a href="/museum/scuola-grande-di-san-rocco-venice"><strong>Scuola Grande di San Rocco</strong></a>, where he worked from 1564 until his death, creating over fifty paintings. His massive Paradise for the Doge's Palace became one of the largest canvas paintings ever made. He trained in an unidentified Venetian workshop during the 1530s and was largely self-taught, drawing inspiration from wax and clay models he arranged under dramatic lighting. His children Domenico and Marietta also became painters. Tintoretto's influence bridged the <strong>Renaissance and Baroque eras</strong>, directly inspiring El Greco during his stay in Venice. Today his works fill Venetian churches and the <a href="/museum/gallerie-dell-accademia-venice"><strong>Gallerie dell'Accademia</strong></a>, with major pieces also at the <a href="/museum/prado"><strong>Museo del Prado</strong></a> and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      { question: "What art movement was Tintoretto part of?", answer: "Tintoretto was a leading figure of the late <a href=\"/movement/renaissance\"><strong>Venetian Renaissance</strong></a> and <a href=\"/movement/mannerism\"><strong>Mannerism</strong></a>, known for dramatic compositions and bold brushwork that influenced the coming Baroque era." },
      { question: "Where can I see Tintoretto's paintings?", answer: "The largest collection is at the <a href=\"/museum/scuola-grande-di-san-rocco-venice\"><strong>Scuola Grande di San Rocco</strong></a> in Venice, where he spent 23 years decorating the building with over fifty paintings." },
      { question: "What is Tintoretto's most famous painting?", answer: "His <strong>Miracle of Saint Mark Rescuing a Slave</strong> (1548) at the <a href=\"/museum/gallerie-dell-accademia-venice\"><strong>Gallerie dell'Accademia</strong></a> established his reputation with its dramatic energy and innovative composition." },
      { question: "Why was Tintoretto called 'il Furioso'?", answer: "His contemporaries nicknamed him 'il Furioso' (the Furious) for his phenomenal painting speed and the unprecedented boldness of his <strong>energetic brushwork</strong>." },
      { question: "What techniques is Tintoretto known for?", answer: "Tintoretto used dramatic <strong>chiaroscuro</strong>, radical foreshortening, and made small wax models to study lighting effects before painting his large-scale compositions." },
      { question: "Did Tintoretto have famous students or children who painted?", answer: "His children <strong>Domenico and Marietta Tintoretto</strong> both became accomplished painters. Marietta was particularly gifted but died young at age thirty in 1590." }
    ]
  },

  // 2. Albert Bierstadt
  {
    slug: 'albert-bierstadt',
    bioFull: `<p><a href="/movement/hudson-river-school"><strong>Hudson River School</strong></a> painter <strong>Albert Bierstadt</strong> (1830-1902) created epic panoramas of the American West that captured the nation's imagination during westward expansion. Born in Prussia, he emigrated to Massachusetts as an infant. After training in Düsseldorf, Germany, he joined government survey expeditions west in 1859 and 1863, sketching the Rocky Mountains and Yosemite Valley. His vast canvases transformed these sketches into romantic visions with dramatic lighting and overwhelming scale.</p>

<p>Bierstadt's paintings helped shape American attitudes toward wilderness and contributed to early conservation efforts. His work <strong>The Rocky Mountains, Lander's Peak</strong> (1863) established him as America's leading <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> painter, rivaling Frederic Church. He applied color for romantic rather than naturalistic effect, creating glowing atmospheres that some critics called excessive. Though his reputation declined in later years as tastes changed toward Impressionism, he's now recognized as one of America's greatest landscape artists. Major collections exist at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, <a href="/museum/smithsonian-american-art"><strong>Smithsonian American Art Museum</strong></a>, and <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington.</p>`,
    faqs: [
      { question: "What art movement was Albert Bierstadt part of?", answer: "Bierstadt belonged to the second generation of the <a href=\"/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, American landscape painters known for romantic, luminous depictions of wilderness." },
      { question: "Where can I see Bierstadt's paintings?", answer: "Major collections are at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York and the <a href=\"/museum/smithsonian-american-art\"><strong>Smithsonian American Art Museum</strong></a> in Washington, D.C." },
      { question: "What subjects did Bierstadt paint?", answer: "Bierstadt specialized in dramatic <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>mountain landscapes</strong></a> of the American West, particularly the Rocky Mountains, Yosemite Valley, and Sierra Nevada." },
      { question: "How did Bierstadt create his large paintings?", answer: "He joined western expeditions to make sketches and photographs, then transformed these studies into <strong>epic panoramas</strong> in his New York studio." },
      { question: "Why is Bierstadt historically significant?", answer: "His romantic depictions of <strong>untamed American wilderness</strong> helped build support for conservation and the eventual establishment of national parks like Yellowstone." }
    ]
  },

  // 3. Annibale Carracci
  {
    slug: 'annibale-carracci',
    bioFull: `<p><a href="/movement/baroque"><strong>Baroque</strong></a> painter <strong>Annibale Carracci</strong> (1560-1609) was the most talented of three painters in his family and a vital force in creating the Baroque style. Born in Bologna to a tailor, he studied with his older cousin Lodovico and brother Agostino. Together they founded the Accademia degli Incamminati in 1582, considered the first major art school based on life drawing. This academy became the model for later European art schools and trained masters including Domenichino and Guido Reni.</p>

<p>Annibale's travels through northern Italy in the 1580s exposed him to Venetian color and Correggio's soft modeling, which he combined with Florentine draftsmanship. His greatest work was the ceiling frescoes of the <a href="/museum/palazzo-farnese"><strong>Palazzo Farnese</strong></a> in Rome (1597-1600), depicting loves of the classical gods. These frescoes rivaled Michelangelo's Sistine ceiling in influence. Annibale also pioneered the <strong>ideal landscape</strong> and developed caricature as an art form. He wished to be buried near Raphael in the Pantheon, and his wish was granted. Today his paintings hang in the <a href="/museum/louvre"><strong>Louvre</strong></a>, <a href="/museum/prado"><strong>Museo del Prado</strong></a>, and <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement did Annibale Carracci help create?", answer: "Annibale was one of the founders of the <a href=\"/movement/baroque\"><strong>Baroque</strong></a> style, combining Renaissance ideals with new dynamism and emotion in painting." },
      { question: "Where can I see Annibale Carracci's masterpiece?", answer: "His greatest work, the ceiling frescoes, remains at the <a href=\"/museum/palazzo-farnese\"><strong>Palazzo Farnese</strong></a> in Rome, now the French Embassy." },
      { question: "What was the Accademia degli Incamminati?", answer: "An influential art school founded by the <strong>Carracci family</strong> in Bologna in 1582, it emphasized life drawing and trained major Baroque painters like Guido Reni." },
      { question: "Who influenced Annibale Carracci?", answer: "He drew from <strong>Raphael's classical ideals</strong>, Venetian colorists like Titian, and Correggio's soft modeling, synthesizing these into the new Baroque style." },
      { question: "What innovations did Annibale Carracci introduce?", answer: "He pioneered the <strong>ideal landscape genre</strong> and is credited with inventing artistic caricature, creating humorous portrait drawings." }
    ]
  },

  // 4. Arnold Böcklin
  {
    slug: 'arnold-bocklin',
    bioFull: `<p><a href="/movement/symbolism"><strong>Symbolist</strong></a> painter <strong>Arnold Böcklin</strong> (1827-1901) created haunting, mythological works that explored death, dreams, and the supernatural. Born in Basel, Switzerland, he studied in Düsseldorf and traveled throughout Europe before settling in Italy. His paintings blend classical themes with a dark, fantastical imagination, depicting centaurs, nymphs, and ancient ruins in mysterious landscapes. The English Pre-Raphaelites and German Romanticism both influenced his visionary approach.</p>

<p>Böcklin's most famous work, <strong>Isle of the Dead</strong> (1880), depicts a small rocky island with cypress trees as a boat carries a shrouded figure toward it. He created five versions between 1880 and 1886, never explaining its meaning beyond calling it "a dream picture." The painting fascinated Adolf Hitler, inspired Rachmaninoff's orchestral work, and influenced Surrealists like Giorgio de Chirico, Salvador Dalí, and Max Ernst. Marcel Duchamp named Böcklin as a major influence. His works can be seen at the <a href="/museum/kunstmuseum-basel"><strong>Kunstmuseum Basel</strong></a>, <a href="/museum/alte-nationalgalerie"><strong>Alte Nationalgalerie</strong></a> in Berlin, and the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York.</p>`,
    faqs: [
      { question: "What art movement was Arnold Böcklin part of?", answer: "Böcklin was a leading figure of <a href=\"/movement/symbolism\"><strong>Symbolism</strong></a>, painting mythological and fantastical subjects that explored death, dreams, and the supernatural." },
      { question: "What is Arnold Böcklin's most famous painting?", answer: "<strong>Isle of the Dead</strong> (1880) is his best-known work, depicting a mysterious rocky island that he painted in five versions between 1880 and 1886." },
      { question: "Where can I see Böcklin's paintings?", answer: "Major collections are at the <a href=\"/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland and the <a href=\"/museum/alte-nationalgalerie\"><strong>Alte Nationalgalerie</strong></a> in Berlin." },
      { question: "Who did Arnold Böcklin influence?", answer: "He greatly influenced <a href=\"/movement/surrealism\"><strong>Surrealist</strong></a> artists including Giorgio de Chirico, Salvador Dalí, and Max Ernst with his dreamlike imagery." },
      { question: "What subjects did Böcklin paint?", answer: "He painted <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>mythological and macabre</strong></a> subjects including centaurs, nymphs, mermaids, and allegories of death." }
    ]
  },

  // 5. John Constable
  {
    slug: 'john-constable',
    bioFull: `<p><a href="/movement/romanticism"><strong>Romantic</strong></a> landscape painter <strong>John Constable</strong> (1776-1837) revolutionized the genre with his fresh, naturalistic depictions of the English countryside. Born in Suffolk to a prosperous mill owner, he devoted his career to painting the area around his childhood home, now known as "Constable Country." He entered the Royal Academy schools in 1799 but developed slowly, not achieving full membership until age 52. His approach emphasized direct observation of nature, including the changing effects of weather and light.</p>

<p>Constable's masterpiece <strong>The Hay Wain</strong> (1821) shows a rural scene on the River Stour with a farm wagon crossing shallow water. Though it failed to find a buyer in England, it won a gold medal at the 1824 Paris Salon and profoundly influenced French painters, particularly the Barbizon School. He pioneered broken brushwork and small dabs of white to capture sparkling light on foliage. Constable made full-size oil sketches for his major works, preserving spontaneity while refining compositions. The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> and <a href="/museum/tate-britain"><strong>Tate Britain</strong></a> in London hold his finest paintings, with The Hay Wain voted Britain's second most popular painting in 2005.</p>`,
    faqs: [
      { question: "What art movement was John Constable part of?", answer: "Constable was a key figure in English <a href=\"/movement/romanticism\"><strong>Romanticism</strong></a>, pioneering naturalistic landscape painting based on direct observation of nature." },
      { question: "Where can I see John Constable's paintings?", answer: "The <a href=\"/museum/national-gallery\"><strong>National Gallery</strong></a> holds The Hay Wain, while the <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a> has extensive collections of his work." },
      { question: "What is John Constable's most famous painting?", answer: "<strong>The Hay Wain</strong> (1821) is his most celebrated work, depicting a rural scene on the River Stour that won gold at the 1824 Paris Salon." },
      { question: "What techniques did Constable pioneer?", answer: "He developed <strong>broken brushwork</strong> and small white highlights to capture sparkling light, and made full-size oil sketches before final paintings." },
      { question: "Who did John Constable influence?", answer: "His work profoundly influenced French painters, particularly the <strong>Barbizon School</strong> and later Impressionists who admired his fresh handling of light." }
    ]
  },

  // 6. John Singer Sargent
  {
    slug: 'john-singer-sargent',
    bioFull: `<p>American expatriate artist <strong>John Singer Sargent</strong> (1856-1925) was called "the leading portrait painter of his generation" for his dazzling evocations of Belle Époque luxury. Born in Florence to American parents, he grew up traveling throughout Europe, speaking French, Italian, and German. He trained in Paris under Carolus-Duran and at the École des Beaux-Arts, studying Velázquez in Spain and Frans Hals in Holland. His virtuoso brushwork and ability to capture personality made him the preferred portraitist of aristocrats and industrialists.</p>

<p>Sargent's career nearly derailed in 1884 when his portrait <strong>Madame X</strong> caused a scandal at the Paris Salon. He considered it his masterpiece, but critics found it too erotic. He relocated to London and rebuilt his reputation, eventually becoming the most acclaimed international society portraitist of the Edwardian era. Rodin called him "the Van Dyck of our times." Around 1906, he largely abandoned portraiture for watercolors and ambitious mural projects at the <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a> and Boston Public Library. He created roughly 900 oil paintings and over 2,000 watercolors. Major collections exist at the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a> and <a href="/museum/tate-britain"><strong>Tate Britain</strong></a>.</p>`,
    faqs: [
      { question: "What is John Singer Sargent best known for?", answer: "Sargent was the leading <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait painter</strong></a> of his era, celebrated for his virtuoso brushwork and ability to capture personality and status." },
      { question: "Where can I see Sargent's paintings?", answer: "Major collections are at the <a href=\"/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, <a href=\"/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>, and <a href=\"/museum/tate-britain\"><strong>Tate Britain</strong></a>." },
      { question: "What was the Madame X scandal?", answer: "His 1884 portrait of <strong>Madame Gautreau</strong> caused controversy at the Paris Salon for its perceived eroticism, forcing Sargent to relocate to London." },
      { question: "Who influenced John Singer Sargent?", answer: "He studied <strong>Velázquez</strong> at the Prado and Frans Hals in Holland, adopting their fluid brushwork and psychological insight into his portrait style." },
      { question: "How many works did Sargent create?", answer: "He produced roughly <strong>900 oil paintings</strong> and over 2,000 watercolors during his prolific career spanning five decades." }
    ]
  },

  // 7. Konstantin Korovin
  {
    slug: 'konstantin-korovin',
    bioFull: `<p><a href="/movement/impressionism"><strong>Impressionist</strong></a> painter <strong>Konstantin Korovin</strong> (1861-1939) introduced French Impressionism to Russia while developing his own distinctive style. Born into a wealthy Moscow merchant family, he entered the Moscow School of Painting at age fourteen, studying under Vasily Perov and Alexei Savrasov. His 1885 trip to Paris proved transformative. "Impressionists... in them I found everything I was scolded for back home in Moscow," he later wrote. His Portrait of a Chorus Girl (1883) is considered the first Russian Impressionist painting.</p>

<p>Korovin became friends with fellow students Valentin Serov and Isaac Levitan, maintaining these relationships throughout his life. He joined Savva Mamontov's artistic circle at Abramtsevo and traveled extensively through northern Russia, the Caucasus, and Central Asia. His northern landscapes, painted after trips to Murmansk in 1894, captured stark Arctic light. In 1900, his design of the Russian pavilion at the Paris World Fair earned him the Legion of Honour. He also designed sets for the Bolshoi and Mariinsky theaters and La Scala. After 1923, he emigrated to Paris, where he died in poverty. His works fill the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> and <a href="/museum/russian-museum"><strong>Russian Museum</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Konstantin Korovin part of?", answer: "Korovin was the first Russian <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a>, introducing the French style to Russia while developing his own colorful approach." },
      { question: "Where can I see Korovin's paintings?", answer: "The largest collections are at the <a href=\"/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow and the <a href=\"/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg." },
      { question: "What subjects did Korovin paint?", answer: "He painted <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> of northern Russia, Paris boulevards, and theatrical designs for major opera houses." },
      { question: "What other work did Korovin do besides painting?", answer: "He was a renowned <strong>stage designer</strong> for the Bolshoi Theatre, Mariinsky Theatre, and La Scala, creating innovative theatrical decor." },
      { question: "Who were Korovin's artistic friends?", answer: "He maintained lifelong friendships with fellow Russian painters <strong>Valentin Serov</strong> and <strong>Isaac Levitan</strong> from their student days." }
    ]
  },

  // 8. Maurice Quentin de La Tour
  {
    slug: 'maurice-quentin-de-la-tour',
    bioFull: `<p><a href="/movement/rococo"><strong>Rococo</strong></a> portraitist <strong>Maurice Quentin de La Tour</strong> (1704-1788) elevated pastel from a preparatory medium to a respected fine art form. Born in Saint-Quentin, France, to a musician father who disapproved of his artistic ambitions, he went to Paris at fifteen and briefly visited England before establishing himself as a pastel portraitist in 1727. His technical brilliance with the delicate medium was unmatched. Critics feared he would provoke "a distaste for oil paint" with his large-scale, vividly lifelike pastel portraits.</p>

<p>La Tour became portraitist to King Louis XV in 1750 and exhibited at the Paris Salon for 36 years. He captured the inner spirit and intellect of Enlightenment luminaries including Voltaire, Jean-Jacques Rousseau, and Madame de Pompadour. His life-size portrait of Pompadour (1756) remains a masterpiece of the medium. Contemporary accounts describe him as lively and good-humored but increasingly eccentric. He generously supported artists and founded a drawing school in his hometown. Mental illness forced his retirement to Saint-Quentin, where his brother cared for him until his death at 83. The <a href="/museum/louvre"><strong>Louvre</strong></a> holds major works, while his hometown museum preserves his largest collection.</p>`,
    faqs: [
      { question: "What art movement was Maurice Quentin de La Tour part of?", answer: "La Tour was a master of <a href=\"/movement/rococo\"><strong>Rococo</strong></a> portraiture, elevating pastel to rival oil painting in prestige during 18th-century France." },
      { question: "Where can I see La Tour's pastels?", answer: "Major works are at the <a href=\"/museum/louvre\"><strong>Louvre</strong></a> in Paris, while his hometown Musée Antoine Lécuyer holds the largest collection." },
      { question: "Who did La Tour paint?", answer: "He portrayed Enlightenment luminaries including <strong>Voltaire, Rousseau, and Madame de Pompadour</strong>, as well as King Louis XV." },
      { question: "What medium did La Tour specialize in?", answer: "He worked exclusively in <strong>pastel</strong>, achieving a technical brilliance that elevated the medium from sketches to major finished works." },
      { question: "What was La Tour's personality like?", answer: "Contemporaries described him as <strong>lively and generous</strong> but increasingly eccentric. He founded a drawing school and supported struggling artists." }
    ]
  },

  // 9. Artemisia Gentileschi
  {
    slug: 'artemisia-gentileschi',
    bioFull: `<p><a href="/movement/baroque"><strong>Baroque</strong></a> painter <strong>Artemisia Gentileschi</strong> (1593-1656) was the first woman admitted to Florence's prestigious Accademia delle Arti del Disegno and one of the greatest female painters of any era. Born in Rome to Mannerist painter Orazio Gentileschi, she showed extraordinary talent from childhood. Her first known work, Susanna and the Elders (1610), demonstrates remarkable skill at just seventeen. Following Caravaggio's example, she developed a powerful style using dramatic chiaroscuro and emotionally intense subjects.</p>

<p>At eighteen, Artemisia was raped by her father's colleague Agostino Tassi. The subsequent public trial, during which she was tortured to verify her testimony, became infamous. Art historians see her two versions of <strong>Judith Slaying Holofernes</strong> (c. 1612-13 and c. 1620) as responses to this trauma, depicting biblical heroines with unprecedented violence and determination. She painted many powerful <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> from myths and scripture. After working in Florence, Rome, and Venice, she spent her final years in Naples and briefly joined her father in London to work for King Charles I. Her works hang in the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a>, <a href="/museum/prado"><strong>Museo del Prado</strong></a>, and <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Artemisia Gentileschi part of?", answer: "Gentileschi was a leading <a href=\"/movement/baroque\"><strong>Baroque</strong></a> painter who followed Caravaggio's dramatic use of light and shadow in her powerful compositions." },
      { question: "Where can I see Artemisia Gentileschi's paintings?", answer: "Her works are at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a>, and Naples' Museo di Capodimonte." },
      { question: "What is Gentileschi's most famous painting?", answer: "<strong>Judith Slaying Holofernes</strong> depicts the biblical heroine beheading an enemy general with visceral intensity and psychological depth." },
      { question: "Why is Artemisia Gentileschi historically significant?", answer: "She was the first <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>woman</strong></a> admitted to Florence's Accademia and achieved international success in a male-dominated field." },
      { question: "What subjects did Gentileschi paint?", answer: "She specialized in <strong>powerful women</strong> from myths, allegories, and the Bible, including Judith, Susanna, Cleopatra, and Lucretia." }
    ]
  },

  // 10. Cimabue
  {
    slug: 'cimabue',
    bioFull: `<p>Medieval Italian painter <strong>Cimabue</strong> (c. 1240-1302), born Cenni di Pepo in Florence, was the last great artist working in the Byzantine style and the first to break from its rigid conventions. His nickname translates roughly as "bull-head," suggesting his forceful personality. According to Vasari, he would destroy works that failed to meet his exacting standards. Dante placed Cimabue at the forefront of Italian painters in the Divine Comedy, acknowledging his importance before Giotto's rise eclipsed his fame.</p>

<p>Cimabue introduced more naturalistic proportions and sophisticated shading to suggest volume, departing subtly from the flat Byzantine tradition. His <strong>Crucifix</strong> in San Domenico, Arezzo (c. 1270) marks one of the earliest attributed works showing this new direction. He painted frescoes in the Upper Church of San Francesco in Assisi, though they've suffered severe damage over centuries. According to tradition, he discovered the young Giotto drawing sheep and took him as a student, though scholars debate this story. His Santa Trinità Madonna (c. 1290) at the <a href="/museum/uffizi"><strong>Uffizi Gallery</strong></a> shows his transition toward naturalism. Vasari began his Lives of the Artists with Cimabue, recognizing him as the founder of Italian painting's great tradition.</p>`,
    faqs: [
      { question: "Why is Cimabue historically important?", answer: "Cimabue bridged <strong>Byzantine and Renaissance</strong> art, introducing naturalistic elements that led to the Italian Renaissance. Vasari began his Lives with Cimabue's biography." },
      { question: "Where can I see Cimabue's paintings?", answer: "His Santa Trinità Madonna is at the <a href=\"/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence. Frescoes survive in Assisi's <strong>Basilica of San Francesco</strong>." },
      { question: "Was Cimabue Giotto's teacher?", answer: "According to Vasari's famous account, Cimabue discovered young <strong>Giotto</strong> drawing sheep and trained him, though modern scholars question this tradition." },
      { question: "What does Cimabue's name mean?", answer: "His nickname <strong>Cimabue</strong> translates as 'bull-head,' possibly referring to his forceful, demanding personality as described by contemporaries." },
      { question: "What style did Cimabue work in?", answer: "He worked in the <strong>Byzantine style</strong> but introduced more lifelike proportions and sophisticated shading that pointed toward Renaissance naturalism." }
    ]
  }
];

async function main() {
  console.log('Starting artist updates (part 1 of 4)...');

  for (const artist of artistUpdates) {
    try {
      await prisma.artist.update({
        where: { slug: artist.slug },
        data: {
          bioFull: artist.bioFull,
          faqs: artist.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.slug}`);
    } catch (error) {
      console.error(`✗ Failed to update ${artist.slug}:`, error.message);
    }
  }

  console.log('\nPart 1 complete (10 artists)!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
