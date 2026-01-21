/**
 * Expand FAQs for 25 Artists - January 20, 2026
 * Expands FAQ answers to 35-60 words with 3-4 interlinks per artist
 */

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // 1. Grant Wood
  {
    slug: 'grant-wood',
    faqs: [
      { question: "What art movement was Grant Wood part of?", answer: "Wood led <a href=\"/apps/masterpieces/movement/american-realism\"><strong>American Regionalism</strong></a> during the 1930s, a movement that championed realistic depictions of rural Midwestern life as an alternative to European modernism and urban subjects. Along with Thomas Hart Benton and John Steuart Curry, he wanted American artists to find inspiration in their own country rather than looking abroad." },
      { question: "Where is American Gothic displayed?", answer: "Grant Wood's iconic <strong>American Gothic</strong> has been in the permanent collection of the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> since 1930, when it won a bronze medal and $300 prize at the museum's annual exhibition. The painting became an instant sensation and remains one of America's most recognized artworks." },
      { question: "Who are the people in American Gothic?", answer: "Wood's sister Nan Wood Graham posed as the daughter, while his dentist Byron McKeeby modeled as the stern farmer. They never posed together. Wood spotted the Carpenter Gothic house in Eldon, Iowa, and imagined what sort of people might live there, leading to the painting's creation." },
      { question: "What influenced Grant Wood's painting style?", answer: "A 1928 trip to Munich to supervise stained glass window production exposed Wood to Northern <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> masters like Jan van Eyck and Hans Memling. Their precise technique, detailed realism, and smooth surfaces inspired him to abandon Impressionism for the sharp-edged style of his mature work." },
      { question: "Where can I see Grant Wood paintings?", answer: "The Cedar Rapids Museum of Art in Iowa holds the world's largest Wood collection with over 300 works. Major paintings also hang at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a> and <a href=\"/apps/masterpieces/museum/smithsonian-american-art\"><strong>Smithsonian American Art Museum</strong></a>. His birthplace in Anamosa, Iowa, operates as a museum and educational center." }
    ]
  },

  // 2. Hans Makart
  {
    slug: 'hans-makart',
    faqs: [
      { question: "What art movement was Hans Makart part of?", answer: "Makart belonged to <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> and Viennese historicism, the dominant style during the Ringstrasse era of imperial Vienna. He became the acknowledged leader of Vienna's artistic scene in the 1870s, decorating public buildings and creating sumptuous large-scale historical paintings that defined the city's cultural identity." },
      { question: "Where can I see Hans Makart paintings?", answer: "Major works are at the <a href=\"/apps/masterpieces/museum/belvedere\"><strong>Belvedere Museum</strong></a> in Vienna, which holds several of his monumental canvases. The Museum Georg Schäfer in Schweinfurt displays The Plague in Florence. His decorative work can still be seen in Vienna's Kunsthistorisches Museum, where he painted ceiling panels." },
      { question: "What is the Makartstil?", answer: "The <strong>Makartstil</strong> was a decorative style named after Makart that dominated Viennese interiors from the 1870s to 1880s. It featured rich, saturated <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colors</strong></a>, exotic objects, peacock feathers, dried flowers, and theatrical abundance. The term characterized an entire era of Viennese aesthetic culture unlike anything seen before or since." },
      { question: "Who did Hans Makart influence?", answer: "Gustav Klimt idolized Makart and his early historicist paintings show direct influence from the older master. Makart's emphasis on color, sensuality, and decorative effects helped establish the foundation for the Vienna Secession movement. His prioritization of aesthetics over subject matter anticipated Art Nouveau principles." },
      { question: "What was Hans Makart's relationship with the Austrian court?", answer: "Emperor Franz Joseph I invited Makart to Vienna in 1869, where he became an artistic celebrity with almost cult-like status. He received commissions for the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> decorations and single-handedly designed the 1879 imperial silver wedding parade, creating costumes, scenic settings, and triumphal cars." }
    ]
  },

  // 3. Harriet Backer
  {
    slug: 'harriet-backer',
    faqs: [
      { question: "What art movement was Harriet Backer part of?", answer: "Backer blended Realism with <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, developing a highly personal style focused on how light transforms interior spaces. Though she absorbed French techniques during ten years in Paris, she adapted them to Norwegian subjects and sensibilities, creating luminous interiors that earned her recognition as Norway's most respected female painter of her era." },
      { question: "What subjects did Harriet Backer paint?", answer: "Backer specialized in atmospheric <strong>interior scenes</strong>, particularly domestic spaces with women engaged in quiet activities and Norwegian church interiors filled with natural light. Her sensitive handling of both artificial lamplight and daylight streaming through windows defined these works. She also painted some <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> and plein-air scenes." },
      { question: "Where can I see Harriet Backer paintings?", answer: "Major collections are held at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo, now part of the National Museum, and the Rasmus Meyer Collection in Bergen. The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> mounted a major retrospective titled 'The Music of Colors' in 2023-2024, introducing her work to international audiences." },
      { question: "Where did Harriet Backer study art?", answer: "Backer trained extensively abroad when Norwegian academies barred women. She studied in Munich from 1874 to 1878, then spent ten years in Paris from 1878 to 1888, attending Madame Trélat de Lavigne's academy under tutors including Léon Bonnat and Jean-Léon Gérôme. This rigorous training shaped her technical mastery." },
      { question: "What awards did Harriet Backer receive?", answer: "She won a silver medal at the 1889 Exposition Universelle in Paris, received the King's Medal of Merit in Gold in 1908, and became Knight 1st class of the Order of St. Olav in 1925. A torchlight procession honored her 85th birthday in 1930. She also ran an influential art school from 1889 to 1912." }
    ]
  },

  // 4. Jackson Pollock
  {
    slug: 'jackson-pollock',
    faqs: [
      { question: "What art movement was Jackson Pollock part of?", answer: "Pollock was the leading figure of <a href=\"/apps/masterpieces/movement/abstract-expressionism\"><strong>Abstract Expressionism</strong></a>, America's first internationally influential art movement that emerged in New York after World War II. Critics called his particular approach 'action painting' because the physical act of applying paint became as important as the finished work. He helped shift the art world's center from Paris to New York." },
      { question: "What is Jackson Pollock's drip technique?", answer: "Pollock laid large canvases on his studio floor and flung, poured, and dripped commercial house paint from sticks, trowels, and hardened brushes. Moving around and sometimes stepping onto the canvas, he used his whole body to create rhythmic, <strong>all-over compositions</strong> with no focal point, calling his process 'energy and motion made visible.'" },
      { question: "Where can I see Jackson Pollock paintings?", answer: "Major works hang at the <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York, which holds Number 1A and other key pieces, the <a href=\"/apps/masterpieces/museum/guggenheim\"><strong>Guggenheim</strong></a>, the <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a> in London, and the Met. The Pollock-Krasner House and Study Center in Springs, Long Island, preserves his studio with paint-splattered floors intact." },
      { question: "What are Jackson Pollock's most famous paintings?", answer: "His celebrated works include <strong>Lavender Mist</strong> (National Gallery of Art), <strong>Autumn Rhythm</strong> (Met), Number 1A (MoMA), and Full Fathom Five, all created during his breakthrough period from 1947 to 1950. These large-scale drip paintings established his international reputation and changed the course of modern <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract art</strong></a>." },
      { question: "How did Jackson Pollock die?", answer: "Pollock died on August 11, 1956, at age 44 in a single-car accident while driving drunk near his home in Springs, Long Island. He had struggled with alcoholism throughout his life. The crash also killed one passenger, Edith Metzger, and injured his mistress Ruth Kligman. His widow Lee Krasner managed his estate." },
      { question: "How much did a Jackson Pollock painting sell for?", answer: "In 2006, his painting <strong>Number 5, 1948</strong> reportedly sold privately for approximately $140 million, making it one of the most expensive paintings ever sold at that time. His works regularly command tens of millions at auction. The high prices reflect his foundational importance to postwar American art history." }
    ]
  },

  // 5. Frederick Arthur Bridgman
  {
    slug: 'frederick-arthur-bridgman',
    faqs: [
      { question: "What subjects did Frederick Arthur Bridgman paint?", answer: "Bridgman specialized in <a href=\"/apps/masterpieces/movement/orientalism\"><strong>Orientalist</strong></a> subjects depicting daily life in North Africa and Egypt. He painted mosque interiors, harem scenes, street vendors, and historical subjects set in ancient Egypt like Cleopatra on the Terraces of Philae. His richly detailed studio in Paris, packed with costumes and artifacts, became a famous attraction." },
      { question: "Where can I see Frederick Arthur Bridgman's paintings?", answer: "His work is at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>, the Smithsonian American Art Museum, and the Speed Art Museum in Louisville, which holds his major Funeral of a Mummy on the Nile. Liverpool's Walker Art Gallery and the Dahesh Museum of Art also display his paintings." },
      { question: "Why was Bridgman called 'the American Gérôme'?", answer: "He studied under the celebrated <strong>Jean-Léon Gérôme</strong> in Paris from 1867, absorbing his teacher's precise draftsmanship and Middle Eastern themes. Like Gérôme, Bridgman painted Orientalist subjects with documentary attention to detail. However, he later developed a more naturalistic aesthetic with brighter <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>colors</strong></a> and looser brushwork than his master." },
      { question: "Did Frederick Arthur Bridgman travel to the Middle East?", answer: "Yes, between 1872 and 1874 Bridgman traveled extensively through <strong>Morocco, Tunisia, Algeria, and Egypt</strong>, often accompanied by fellow artist Charles Sprague Pearce. He journeyed up the Nile to Abu Simbel, producing approximately 300 sketches of monuments, street life, and people that fueled decades of studio paintings." },
      { question: "What honors did Bridgman receive?", answer: "He received France's <strong>Legion of Honor</strong> in 1878 after exhibiting Funeral of a Mummy at the Paris Exposition, and was elevated to Officer in 1907. He was elected to the National Academy of Design in 1881. In 1890, he mounted a personal exhibition of over 400 pictures in New York's Fifth Avenue galleries." }
    ]
  },

  // 6. Jules Pascin
  {
    slug: 'jules-pascin',
    faqs: [
      { question: "What art movement was Jules Pascin associated with?", answer: "Pascin was a leading figure of the <strong>École de Paris</strong>, the loose grouping of international artists working in Montparnasse between the wars. His style combined elements of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> with delicate draftsmanship. Born Julius Mordecai Pincas in Bulgaria, he created an anagram of his surname when his father objected to the family name appearing in satirical magazines." },
      { question: "Why was Jules Pascin called 'Prince of Montparnasse'?", answer: "Pascin earned this title for his generous hospitality and central role in Montparnasse's bohemian circles during the 1920s. Always recognizable in his bowler hat, he threw legendary parties and was a witty presence at Le Dôme Café and other haunts. Ernest Hemingway described meeting him in A Moveable Feast's chapter 'With Pascin At the Dôme.'" },
      { question: "Where can I see Jules Pascin paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. The Whitney Museum of American Art also holds his work, as he became a naturalized American citizen in 1920." },
      { question: "What subjects did Jules Pascin paint?", answer: "Pascin primarily painted <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a>, often nudes or figures in stages of undress, rendered in delicate, pearlescent tones with fluid, gestural brushwork. His earliest drawings were made in a Bucharest brothel at age fifteen. He also created satirical illustrations for Munich's Simplicissimus magazine starting in 1905." },
      { question: "Was Jules Pascin an American citizen?", answer: "Yes, Pascin became a naturalized U.S. citizen in 1920 with support from photographer Alfred Stieglitz. He had fled to America in 1914 to avoid Bulgarian military service during World War I, traveling through London, Cuba, and the American South before settling in New York and later returning to Paris in 1920." }
    ]
  },

  // 7. Luca Giordano
  {
    slug: 'luca-giordano',
    faqs: [
      { question: "What art movement was Luca Giordano part of?", answer: "Giordano was a major <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter whose late works anticipated the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> style with their airy lightness and luminous color. Born in Naples, he synthesized influences from Ribera, Pietro da Cortona, and the Venetian masters. His final Triumph of Judith fresco (1704) shows the lighter, more open manner that would define 18th-century painting." },
      { question: "Why was Luca Giordano called 'Luca fa presto'?", answer: "The nickname means '<strong>Luke works quickly</strong>' in Italian, supposedly originating from his father's constant admonitions while training him. His legendary speed of execution and enormous output of well over 1,000 paintings earned him this reputation. Contemporaries said no painter before or since matched his productivity until Picasso centuries later." },
      { question: "Where can I see Luca Giordano paintings?", answer: "The <a href=\"/apps/masterpieces/museum/prado\"><strong>Museo del Prado</strong></a> holds nearly fifty paintings from his Spanish period alone. The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London displays several canvases. Italian churches throughout Naples preserve many works, and the Certosa di San Martino holds his final masterpiece in its Treasury Chapel dome." },
      { question: "Did Luca Giordano work in Spain?", answer: "Yes, King Charles II invited him to Spain in 1692 for a decade-long stay. He produced major fresco cycles in Madrid's Royal Palace, Toledo Cathedral, and the <strong>Escorial</strong>, works often considered his finest achievements. On seeing Velázquez's Las Meninas at the royal collection, Giordano famously called it 'the theology of painting.'" },
      { question: "What was Luca Giordano's second nickname?", answer: "He was called '<strong>Proteus</strong>' after the shape-shifting Greek god because of his remarkable ability to produce convincing pastiches in the style of almost any earlier master. He could imitate Dürer, Titian, Veronese, Rubens, and others so deceptively that experts sometimes struggled to distinguish his copies from originals." }
    ]
  },

  // 8. Ludwig Deutsch
  {
    slug: 'ludwig-deutsch',
    faqs: [
      { question: "What art movement was Ludwig Deutsch part of?", answer: "Deutsch was a leading <a href=\"/apps/masterpieces/movement/orientalism\"><strong>Orientalist</strong></a> painter of the Austrian school, depicting Middle Eastern subjects with documentary precision rather than the romantic exoticism of earlier artists. Though born in Vienna and trained at its Academy from 1872 to 1875, he settled permanently in Paris in 1878 and became associated with the French Orientalist circle." },
      { question: "Did Ludwig Deutsch travel to Egypt?", answer: "Yes, Deutsch made documented trips to <strong>Egypt</strong> in 1885, 1890, and 1898. He photographed Islamic architecture, sketched street scenes, and collected costumes, tiles, and decorative objects to achieve photographic accuracy in his studio paintings. His meticulous research distinguished him from artists who invented their Oriental scenes from imagination alone." },
      { question: "What subjects did Ludwig Deutsch paint?", answer: "Deutsch painted <strong>Egyptian interiors</strong> featuring palace guards in ornate uniforms, scribes, scholars at prayer, and vendors in bazaars, all set amid intricate tilework and carved wooden screens rendered with extraordinary precision. His scenes capture the <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>rich colors</strong></a> of Islamic decorative arts with almost photographic detail." },
      { question: "How much have Ludwig Deutsch paintings sold for?", answer: "His painting <strong>The Tribute</strong> sold for $5.3 million at Sotheby's London in 2019, setting a record for any of his works at auction. The previous record was $3.2 million for The Offering. His works regularly command prices in the hundreds of thousands, reflecting strong collector demand for quality Orientalist paintings." },
      { question: "Where can I see Ludwig Deutsch paintings?", answer: "Many significant works are in the Shafik Gabr Collection, one of the world's premier Orientalist art collections. His paintings regularly appear at major auction houses including Sotheby's, Christie's, and Bonhams. The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> and several European museums also hold examples of his work." }
    ]
  },

  // 9. Marc Chagall
  {
    slug: 'marc-chagall',
    faqs: [
      { question: "What art movements influenced Marc Chagall?", answer: "Chagall absorbed <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>, Fauvism, and <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a> while living in Paris from 1910 to 1914, but created his own unique visual language combining these influences with Jewish folklore, Russian village life, and dreamlike imagery. André Breton tried to claim him for Surrealism, but Chagall resisted labels and remained fiercely independent throughout his long career." },
      { question: "Where can I see Marc Chagall paintings?", answer: "The Musée National Marc Chagall in Nice, France, holds his Biblical Message series of seventeen large canvases. Major works also hang at the <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Met</strong></a>, and the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. The Tretyakov Gallery in Moscow preserves early works from his Russian period." },
      { question: "What other media did Marc Chagall work in?", answer: "Beyond painting, Chagall created <strong>stained glass windows</strong> for cathedrals and synagogues worldwide, theater sets and costumes for major ballet productions, tapestries, ceramics, mosaics, and the celebrated Paris Opera ceiling unveiled in 1964. His versatility across media made him one of the 20th century's most prolific artists." },
      { question: "Where are Marc Chagall's stained glass windows?", answer: "His windows illuminate the Hadassah Medical Center synagogue in Jerusalem (twelve windows representing Israel's tribes), Reims and Metz cathedrals in France, the <strong>Fraumünster in Zürich</strong> (Switzerland), Chichester Cathedral in England, and the United Nations headquarters in New York. He considered stained glass a perfect medium for his <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>luminous colors</strong></a>." },
      { question: "What was Chagall's connection to the Paris Opera?", answer: "In 1963, French Culture Minister André Malraux commissioned the 77-year-old Chagall to paint a new ceiling for the <strong>Paris Opera</strong> (Palais Garnier). The 2,400-square-foot work, unveiled in 1964, pays tribute to great composers including Mozart, Wagner, and Stravinsky through characteristically floating figures and vivid colors against contrasting panel backgrounds." }
    ]
  },

  // 10. Meindert Hobbema
  {
    slug: 'meindert-hobbema',
    faqs: [
      { question: "What art movement was Meindert Hobbema part of?", answer: "Hobbema was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> landscape painter, the only documented pupil of <a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Jacob van Ruisdael</strong></a>, Amsterdam's leading landscapist. While his early works closely followed his teacher's compositions, he developed a lighter, brighter style with crisp blue skies, specializing in peaceful woodland scenes animated by small figures and watermills." },
      { question: "What is Meindert Hobbema's most famous painting?", answer: "<strong>The Avenue at Middelharnis</strong> (1689) at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London shows a straight road lined with tall, lopped trees receding toward the village. This painting, surprisingly different from his usual woodland scenes, has long been one of the best-known Dutch <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, often called the swansong of Dutch Golden Age landscape painting." },
      { question: "Why did Meindert Hobbema stop painting regularly?", answer: "In 1668, Hobbema married and became a <strong>wine-gauger</strong> for Amsterdam customs, a well-paid municipal position involving weighing and measuring imported wines. This steady income reduced his artistic output considerably, though he never entirely stopped painting. His masterpiece The Avenue at Middelharnis dates from 1689, twenty years after he largely gave up professional art." },
      { question: "Where can I see Meindert Hobbema paintings?", answer: "The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London holds The Avenue at Middelharnis plus several woodland scenes. The <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam displays multiple works. Major paintings also hang at the Louvre, the National Gallery of Art in Washington, and the Frick Collection in New York." },
      { question: "Who influenced Meindert Hobbema?", answer: "Hobbema trained under <strong>Jacob van Ruisdael</strong>, maintaining a close friendship even after his apprenticeship ended. Ruisdael witnessed Hobbema's wedding in 1668. The two often sketched together and sometimes painted identical views. However, while Ruisdael favored dramatic, moody atmospheres, Hobbema preferred sunny, optimistic woodland scenes with dappled light." }
    ]
  },

  // 11. Adriaen Coorte
  {
    slug: 'adriaen-coorte',
    faqs: [
      { question: "What art movement was Adriaen Coorte part of?", answer: "Coorte was a still life painter of the late <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, though his minimalist style differed markedly from the elaborate, sumptuous compositions fashionable in his time. Working in Middelburg, he created small, intimate paintings focusing on single subjects rather than the overflowing abundance other painters celebrated. His approach anticipated modern minimalist aesthetics by centuries." },
      { question: "What subjects did Adriaen Coorte paint?", answer: "He specialized in small-scale still lifes with <strong>simple subjects</strong>: asparagus bundles tied with ribbon, wild strawberries in porcelain bowls, gooseberries, medlars, chestnuts, and shells, all arranged against dark backgrounds. While contemporaries painted elaborate banquets, Coorte found poetry in humble <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>natural</strong></a> objects bathed in clear, even light." },
      { question: "Where can I see Adriaen Coorte's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, the Mauritshuis in The Hague, and the Ashmolean Museum in Oxford. The National Gallery in London acquired a still life in 1970, helping spark renewed interest in his work." },
      { question: "Why was Coorte forgotten?", answer: "After his death, Coorte's modest, minimalist work fell out of favor when elaborate still lifes dominated collector taste. Dutch art historian <strong>Laurens J. Bol</strong> rediscovered him through archival research in the 1950s. A 1958 exhibition at the Dordrechts Museum became a sensation, inspiring Dutch poets and sparking academic interest." },
      { question: "How many paintings did Coorte create?", answer: "About <strong>80 signed works</strong> have been catalogued, mostly painted between 1683 and 1707 in Middelburg, Netherlands. His Three Medlars with a Butterfly (1705) has been called 'the Mona Lisa of late 17th-century Dutch still-life art.' In 2014, a Coorte painting sold at Sotheby's for over £3.4 million, confirming his rediscovered status." }
    ]
  },

  // 12. Philips Wouwerman
  {
    slug: 'philips-wouwerman',
    faqs: [
      { question: "What art movement was Philips Wouwerman part of?", answer: "Wouwerman worked during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>, becoming 'undoubtedly the most accomplished and successful 17th-century Dutch painter of <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horses</strong></a>,' according to art historian Frederik Duparc. Based in Haarlem, he developed an individual style treating a wide range of subjects from genre and landscape to military scenes, all featuring his signature equestrian mastery." },
      { question: "What subjects did Philips Wouwerman paint?", answer: "Wouwerman painted cavalry battles, elegant hunting and hawking parties, peasant festivals, travelers at inns, and landscapes with riders, all featuring his signature <strong>horses in motion</strong>. His white or gray horse, appearing in countless paintings, became his trademark. Military encampments and blacksmith forges were also favorite subjects throughout his thirty-year career." },
      { question: "Where can I see Philips Wouwerman paintings?", answer: "Major collections are at the <a href=\"/apps/masterpieces/museum/hermitage\"><strong>Hermitage</strong></a> in St. Petersburg (over 50 paintings), Dresden's Gemäldegalerie (over 60 works), the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>, and the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a>. European royal collections, especially those assembled by Catherine the Great and Augustus the Strong, accumulated extraordinary numbers of his works." },
      { question: "How many paintings did Philips Wouwerman create?", answer: "About <strong>570 authentic works</strong> are catalogued in Birgit Schumacher's 2006 catalogue raisonné, down from the 1,200 listed in earlier surveys. The dramatic reduction reflects scholarly efforts to separate Wouwerman's hand from numerous copies, studio works, and imitators who capitalized on his popularity during and after his lifetime." },
      { question: "Who trained Philips Wouwerman?", answer: "He trained first with his father Paulus, a mediocre Haarlem painter. According to some sources, he studied briefly with <strong>Frans Hals</strong>, though evidence remains inconclusive. He may have learned his extraordinary horse painting skills from Haarlem specialist Pieter Verbeeck. His brothers Pieter and Jan also became painters, though neither matched Philips's success." }
    ]
  },

  // 13. Mikhail Vrubel
  {
    slug: 'mikhail-vrubel',
    faqs: [
      { question: "What art movement was Mikhail Vrubel part of?", answer: "Vrubel was a pioneering figure in Russian <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, regarded as the greatest Russian Symbolist painter. Art historian Lydia Iovleva called him 'the first conscious, principled Symbolist among Russian painters.' His dense brushstrokes and faceted forms led enthusiastic commentators to cite him as an early forerunner of <a href=\"/apps/masterpieces/movement/cubism\"><strong>Cubism</strong></a>. Picasso called him a 'genius' after seeing Venice in Paris." },
      { question: "What is Vrubel's most famous painting?", answer: "'<strong>The Demon Seated</strong>' (1890) at the <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> remains his most iconic work. The painting depicts a melancholic supernatural figure with muscular body against a scarlet mountainous sunset, rendered in Vrubel's signature crystalline style. He described his demon as 'a spirit not so much evil as suffering and wounded, but withal a powerful and noble being.'" },
      { question: "Where can I see Mikhail Vrubel's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/tretyakov-gallery\"><strong>Tretyakov Gallery</strong></a> in Moscow and the <a href=\"/apps/masterpieces/museum/russian-museum\"><strong>Russian Museum</strong></a> in St. Petersburg hold his major works, including his Demon series. His Byzantine-inspired mosaics and frescoes survive in St. Cyril's Church in Kyiv. The Kiev Museum of Russian Art also preserves significant paintings from his Ukrainian period." },
      { question: "What was Vrubel's painting technique?", answer: "He developed a distinctive <strong>mosaic-like technique</strong> with faceted brushstrokes and colors resembling stained glass or Byzantine mosaics. Using a palette knife to create crystal-edged planes, he often mixed bronze powder with paint to achieve luminous effects. This approach drew from medieval art while anticipating Cubism's fragmentation of form by two decades." },
      { question: "What inspired Vrubel's demon paintings?", answer: "Mikhail Lermontov's 1839 poem 'The Demon' about a <strong>fallen angel's tragic love</strong> for a Georgian princess obsessed Vrubel from the 1880s until 1902. He created multiple versions exploring this <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>supernatural figure</strong></a>: The Demon Seated (1890), The Demon Flying (1899), and The Demon Downcast (1902), his final painting before mental illness ended his career." }
    ]
  },

  // 14. Salvador Dalí
  {
    slug: 'salvador-dali',
    faqs: [
      { question: "What art movement was Salvador Dalí part of?", answer: "Dalí was a leading figure of <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealism</strong></a>, joining the Paris group in 1929 and developing the 'paranoiac-critical method' to access subconscious imagery. He claimed to induce hallucinatory states to create his distinctive dreamscapes. Though André Breton expelled him from the official Surrealist movement in 1934, Dalí remained synonymous with Surrealism in public consciousness throughout his life." },
      { question: "Where is The Persistence of Memory displayed?", answer: "<strong>The Persistence of Memory</strong> (1931) with its iconic melting watches hangs in the permanent collection of the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York. This small painting (24 x 33 cm) has become one of the most recognizable images in art history, representing <a href=\"https://luxurywallart.com/collections/surrealism-art\" target=\"_blank\" rel=\"noopener\"><strong>Surrealism's</strong></a> exploration of dreams and the unconscious mind." },
      { question: "Where can I see Salvador Dalí paintings?", answer: "The Dalí Theatre-Museum in his hometown of Figueres, Spain, holds the world's largest collection, designed by the artist himself. Major works are at <a href=\"/apps/masterpieces/museum/reina-sofia\"><strong>Museo Reina Sofía</strong></a> in Madrid and the Salvador Dalí Museum in St. Petersburg, Florida, which houses over 2,400 objects including oil paintings, watercolors, and sculptures." },
      { question: "Who was Gala to Salvador Dalí?", answer: "<strong>Gala</strong> (Elena Ivanovna Diakonova), born in Russia in 1894, was Dalí's wife, muse, business manager, and constant model from 1929 until her death in 1982. She had been married to Surrealist poet Paul Éluard. Dalí credited her as essential to his artistic output and bought her a castle where she received visitors alone." },
      { question: "Did Salvador Dalí work in film?", answer: "Yes, Dalí collaborated with director Luis Buñuel on <strong>Un Chien Andalou</strong> (1929) and <strong>L'Age d'Or</strong> (1930), two landmark Surrealist films. He designed a dream sequence for Hitchcock's Spellbound (1945) and worked with Walt Disney on the animated short Destino, completed posthumously in 2003. He also created advertisements and designed jewelry." },
      { question: "Where is Salvador Dalí buried?", answer: "Dalí is buried in a crypt beneath the stage of the <strong>Dalí Theatre-Museum</strong> in Figueres, Spain, which he designed and personally oversaw. He chose this spot himself. In 2017, his body was exhumed for DNA testing in a paternity suit. The museum, built on the ruins of a bombed theater, displays his work in theatrical installations." }
    ]
  },

  // 15. Sodoma
  {
    slug: 'sodoma',
    faqs: [
      { question: "What art movement was Sodoma part of?", answer: "Sodoma worked during the transition from High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> to <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, developing a graceful style influenced by Leonardo da Vinci's soft modeling and Raphael's classical compositions. Born in Vercelli, Piedmont, in 1477, he trained under the 'archaic' Martino Spanzotti before moving to Siena, which became his artistic home for most of his career." },
      { question: "Where can I see Sodoma paintings?", answer: "Works hang at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, and the Pinacoteca Nazionale in Siena. The Villa Farnesina in Rome preserves his celebrated Marriage of Alexander and Roxana fresco. San Domenico church in Siena displays his Vision of St. Catherine." },
      { question: "What are Sodoma's most important frescoes?", answer: "His <strong>Life of Saint Benedict</strong> cycle at Monte Oliveto Maggiore monastery near Siena, begun in 1505 as a continuation of Luca Signorelli's earlier work, ranks among his finest achievements. His Marriage of Alexander and Roxana at the Villa Farnesina in Rome, painted alongside Peruzzi, is sometimes considered his masterpiece for its graceful <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>figures</strong></a>." },
      { question: "Did Sodoma work in Rome?", answer: "Yes, Pope Julius II employed him in the <strong>Vatican's Stanza della Segnatura</strong> in 1508, where he executed two compositions and ceiling decorations. Raphael soon replaced him on the project, though he preserved some of Sodoma's ceiling work. Sienese banker Agostino Chigi brought Sodoma to Rome to work at Villa Farnesina around the same time." },
      { question: "What is Sodoma's real name?", answer: "<strong>Giovanni Antonio Bazzi</strong> was his birth name. The nickname 'Il Sodoma' was given to him, apparently referring to his lifestyle, and he used it himself without apparent shame. Vasari reported he kept a menagerie of exotic animals and used the nickname openly. He died on February 14, 1549, in Siena." }
    ]
  },

  // 16. Willem Claesz. Heda
  {
    slug: 'willem-claesz-heda',
    faqs: [
      { question: "What art movement was Willem Claesz. Heda part of?", answer: "Heda was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> still life painter who helped establish the 'ontbijt' or breakfast piece genre in Haarlem during the 1620s and 1630s. Together with Pieter Claesz, he developed monochromatic compositions featuring tabletop arrangements of food and glassware that became Haarlem's signature contribution to still life painting." },
      { question: "What are 'breakfast pieces'?", answer: "<strong>Breakfast pieces</strong> (ontbijt) are still life paintings showing tabletop arrangements of modest Dutch foods: bread, cheese, herring, ham, and beer alongside glassware and pewter. Often depicting interrupted meals on rumpled tablecloths with tipped vessels and peeled lemons, they served as <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>spiritual</strong></a> reminders about gluttony while showcasing painters' technical virtuosity." },
      { question: "Where can I see Willem Claesz. Heda paintings?", answer: "Works hang at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>, and the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The Museo Thyssen-Bornemisza in Madrid also holds excellent examples of his breakfast pieces and pronkstilleven." },
      { question: "What is distinctive about Heda's palette?", answer: "Heda painted in distinctive <strong>cool gray tones</strong> rather than warm colors, creating atmospheric harmonies of silver, pewter, gray-green glass, and bleached linen tablecloths. His subtle lighting animates reflections on metal surfaces, bubbles in römer glasses, and textures of bread crusts and lemon peel. This tonal unity became Haarlem's trademark still life approach." },
      { question: "Did Willem Heda have artistic successors?", answer: "His son <strong>Gerrit Willemsz. Heda</strong> painted still lifes in his father's manner, and their similar techniques make distinguishing their hands difficult for scholars even today. Willem was dean of Haarlem's Guild of St. Luke on several occasions from 1637, training apprentices and influencing the next generation of Dutch still life painters." }
    ]
  },

  // 17. Willem van de Velde the Younger
  {
    slug: 'willem-van-de-velde-younger',
    faqs: [
      { question: "What art movement was Willem van de Velde the Younger part of?", answer: "He was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> marine painter who became the most influential maritime artist of the 17th century. After moving to England in 1672-73, he shaped English seascape painting for generations. J.M.W. Turner owned several of his drawings and studied his treatment of <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal</strong></a> light and atmosphere." },
      { question: "Where can I see Willem van de Velde paintings?", answer: "Major collections are at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> and National Maritime Museum in London (both at Greenwich), the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>. The Queen's House at Greenwich served as the family's studio under royal patronage." },
      { question: "Why did Willem van de Velde move to England?", answer: "The 1672 'Disaster Year' (Rampjaar), when France, England, and German bishops simultaneously declared war on the Dutch Republic, devastated the art market. Marine painting commissions collapsed. <strong>King Charles II</strong> offered the father-son team royal patronage, £100 annual retainer each, and studio space at the Queen's House in Greenwich." },
      { question: "How accurate are Van de Velde's ship paintings?", answer: "His ships are rendered with <strong>almost photographic accuracy</strong>, making his paintings invaluable historical documents for understanding 17th-century naval architecture, rigging, and battle formations. His father Willem the Elder was official artist to the Dutch fleet, sketching battles from small boats amid combat, providing meticulous source material." },
      { question: "What was the relationship between the Elder and Younger van de Velde?", answer: "Father and son worked as an extraordinarily effective team: the <strong>Elder</strong> (1611-1693) created precise ship drawings in pen and ink (called 'pen paintings'), while the <strong>Younger</strong> (1633-1707) excelled at translating these into atmospheric oil paintings with sophisticated rendering of light, water, and sky. This collaboration produced over a thousand works." }
    ]
  },

  // 18. Lawrence Alma-Tadema
  {
    slug: 'lawrence-alma-tadema',
    faqs: [
      { question: "What art movement was Alma-Tadema part of?", answer: "Alma-Tadema belonged to <strong>Victorian classicism</strong> and <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic art</strong></a>, creating archaeologically precise scenes of ancient Rome and Greece that made him one of the most financially successful painters of his era. Dutch-born but based in London from 1870, he gave Victorian audiences exactly what they wanted: elaborate paintings of beautiful <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>people</strong></a> in classical settings." },
      { question: "What did Alma-Tadema paint?", answer: "Alma-Tadema painted <strong>life in ancient Rome</strong>: marble interiors, Mediterranean terraces, languid figures in togas, flower-strewn festivals, and bath scenes. His obsession with rendering marble, granite, and bronze textures earned him the nickname 'the marbellous painter.' A trip to Pompeii in 1863 sparked his lifelong focus on Classical antiquity." },
      { question: "Where is The Roses of Heliogabalus?", answer: "<strong>The Roses of Heliogabalus</strong> (1888) belongs to the private Juan Antonio Pérez Simón Collection in Mexico. Depicting the Roman emperor smothering dinner guests with rose petals, it exemplifies Alma-Tadema's lavish approach. He had fresh roses shipped from the Riviera for four months while painting to capture their colors accurately." },
      { question: "Did Alma-Tadema influence Hollywood?", answer: "Alma-Tadema's Roman scenes profoundly influenced Hollywood's vision of antiquity. Directors used his paintings as direct references for films including <strong>Intolerance</strong> (1916), <strong>Ben-Hur</strong> (1959), Cleopatra (1963), and Gladiator (2000). Production designer Arthur Max acknowledged drawing heavily from Alma-Tadema for Gladiator's 'romantic vision of Rome.'" },
      { question: "How accurate were Alma-Tadema's paintings?", answer: "Alma-Tadema was <strong>meticulously accurate</strong>, researching every archaeological detail through museum visits and extensive photography of ancient sites. He built an archive of 5,300 photographs documenting Roman and Egyptian artifacts. Critics initially dismissed his academic precision as cold, but his research methods influenced how subsequent generations visualized the ancient world." }
    ]
  },

  // 19. John William Godward
  {
    slug: 'john-william-godward',
    faqs: [
      { question: "What art movement was Godward part of?", answer: "Godward belonged to the <strong>Victorian Neo-Classicist</strong> or 'Marble School,' following his mentor Sir <a href=\"/apps/masterpieces/artist/lawrence-alma-tadema\"><strong>Lawrence Alma-Tadema</strong></a> in depicting Classical antiquity with archaeological precision. Working at the tail end of this tradition, he painted ancient scenes even as modernism made his style increasingly unfashionable in London's galleries and exhibitions." },
      { question: "What subjects did Godward paint?", answer: "Godward specialized in <strong>beautiful women in Classical dress</strong> posed against marble terraces, Mediterranean skies, and ancient Roman architectural settings. He became known as the master 'classical tunic gown' painter for his ability to render flowing drapery and diaphanous fabric. His <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> often appear lost in reverie or reading." },
      { question: "Where can I see Godward's paintings?", answer: "Works are at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the Getty Museum, and in Andrew Lloyd Webber's private collection, one of the finest holdings of Victorian art. Australian and British regional galleries also hold examples. His paintings appear regularly at Christie's and Sotheby's auctions." },
      { question: "What happened to Godward's reputation?", answer: "Godward's Classical style fell sharply out of favor with <strong>modernism's rise</strong> in the 1910s. His suicide note in 1922 reportedly stated that 'the world is not big enough for myself and a Picasso,' capturing his despair at being made obsolete by Cubism and abstraction. Academic interest revived starting in the 1970s." },
      { question: "Why did Godward's family reject him?", answer: "His family disapproved of his becoming an artist, preferring he work in insurance like his father. When Godward moved to Italy with his model Marietta Avico in 1912, they <strong>cut all contact</strong> and removed his photographs from family albums. After his 1922 suicide, they burned his papers. Only one photograph of the artist survives today." }
    ]
  },

  // 20. George Romney
  {
    slug: 'george-romney',
    faqs: [
      { question: "What art style was George Romney known for?", answer: "Romney worked in the <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> portrait tradition, emphasizing elegant line over color and drawing on Roman classical sculpture for his smooth, idealized compositions. Generally ranked third among late 18th-century English portraitists after Reynolds and Gainsborough, he developed a lighter touch than his rivals, with flowing rhythms inspired by antique statuary." },
      { question: "Where can I see George Romney paintings?", answer: "Major Romney collections are held at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, and the Huntington Library in California. His hometown of Kendal, Westmorland, preserves works at Abbot Hall Art Gallery." },
      { question: "Who was George Romney's most famous subject?", answer: "Romney painted <strong>Emma Hamilton</strong> over sixty times between 1782 and 1786, portraying her as mythological heroines, classical figures, and saints including Circe, Medea, Cassandra, Joan of Arc, and Nature. He called her 'the divine lady... superior to all womankind.' These portraits of Admiral Nelson's future mistress made both artist and subject famous." },
      { question: "Why didn't George Romney exhibit at the Royal Academy?", answer: "Romney was introspective, preferring literary circles to artist associations. He deliberately avoided the Royal Academy throughout his career, which set him apart from rivals like Reynolds who actively promoted themselves there. This independence may have limited his official recognition, though it didn't prevent commercial success or aristocratic patronage." },
      { question: "When did George Romney live?", answer: "Romney was born December 26, 1734, in Dalton-in-Furness, Lancashire, and died November 15, 1802, in Kendal. He left his wife and children in 1762 to pursue his career in London, rarely seeing them for nearly forty years. He returned to his wife only in his final illness, declining from what may have been dementia." }
    ]
  },

  // 21. Georgia O'Keeffe
  {
    slug: 'georgia-okeeffe',
    faqs: [
      { question: "What art movement was Georgia O'Keeffe part of?", answer: "O'Keeffe helped establish <a href=\"/apps/masterpieces/movement/american-realism\"><strong>American Modernism</strong></a>, creating a distinctly American visual language that blended abstraction with natural forms while remaining independent of European movements. Her future husband Alfred Stieglitz first exhibited her charcoal abstractions at his 291 gallery in 1916, launching her career as a pioneer of American art." },
      { question: "What subjects did Georgia O'Keeffe paint?", answer: "O'Keeffe is famous for magnified <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flower paintings</strong></a> that fill entire canvases, sun-bleached animal skulls and bones found in the New Mexico desert, <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>southwestern landscapes</strong></a> around Ghost Ranch, and New York City skyscrapers from her early career. She wanted viewers to see flowers as she did, really look at them." },
      { question: "Where can I see Georgia O'Keeffe paintings?", answer: "The Georgia O'Keeffe Museum in Santa Fe holds the largest collection with over 3,000 works. Major paintings also hang at the <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a>, the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Met</strong></a>. Her homes at Ghost Ranch and Abiquiú, New Mexico, are open for tours." },
      { question: "Where did Georgia O'Keeffe live and work?", answer: "O'Keeffe lived in New York from 1918 to 1949, splitting time between Manhattan and Lake George. She spent summers in New Mexico from 1929 onward, captivated by its landscape. After her husband Stieglitz died in 1946, she moved permanently to Ghost Ranch and later Abiquiú, painting the desert until her nineties." },
      { question: "How long did Georgia O'Keeffe's career span?", answer: "O'Keeffe's career spanned seven decades, from her first charcoal abstractions in 1915 to her final works in the 1980s. Even after losing most of her eyesight in her nineties, she continued working with assistants. She died in 1986 at age 98, having become an American icon and feminist symbol." },
      { question: "What record did Georgia O'Keeffe's painting set?", answer: "In 2014, her 1932 painting <strong>Jimson Weed/White Flower No. 1</strong> sold at Sotheby's for $44.4 million, setting the record for highest price paid for any work by a female artist at auction. That record has since been broken, but her market remains strong with paintings regularly selling for millions." }
    ]
  },

  // 22. Louis Le Nain
  {
    slug: 'louis-le-nain',
    faqs: [
      { question: "What art movement were the Le Nain brothers part of?", answer: "The Le Nains worked during the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> period but stood apart from mainstream French art with their realistic, sympathetic portrayals of peasant subjects. While Paris favored mythological allegories and royal portraits, these three brothers from Laon devoted themselves to humble scenes showing rural families with quiet dignity and classical composure." },
      { question: "What subjects did Louis Le Nain paint?", answer: "Louis Le Nain is credited with dignified <strong>peasant scenes</strong> showing rural families gathered for meals or resting after work, depicted with quiet gravity rather than mockery or sentimentality. Their realistic approach to <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>common people</strong></a> influenced later Realist painters including Gustave Courbet and Jean-François Millet in the 19th century." },
      { question: "Where can I see Le Nain paintings?", answer: "The <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> holds the most comprehensive collection, including Peasant Family in an Interior and The Cart. Works also hang at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, and the Kimbell Art Museum in Fort Worth, which hosted a major exhibition in 2016." },
      { question: "Did Louis Le Nain work alone?", answer: "No, Louis worked with brothers <strong>Antoine and Mathieu</strong> in a shared Paris studio founded by Antoine. They often collaborated on paintings and signed works only with their surname, making individual attributions extremely difficult for scholars. Louis is generally considered the most talented, while Antoine may have specialized in smaller works." },
      { question: "When were the Le Nain brothers rediscovered?", answer: "French critic Champfleury championed their work in the 1840s during the rise of Realism, leading to their paintings entering the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in 1848 after nearly two centuries of relative obscurity. The brothers had died in 1648 (Louis and Antoine within days of each other), leaving Mathieu alone until 1677." }
    ]
  },

  // 23. Maximilien Luce
  {
    slug: 'maximilien-luce',
    faqs: [
      { question: "What art movement was Maximilien Luce part of?", answer: "Luce was a leading <strong>Neo-Impressionist</strong> painter who adopted the Pointillist technique developed by Georges Seurat around 1884 after being introduced to it by fellow artists Léo Gausson and Cavallo-Péduzzi. The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> considers him 'one of the best representatives of the neo-impressionist movement.' He later returned to a more <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionistic</strong></a> style." },
      { question: "Where can I see Maximilien Luce paintings?", answer: "The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris holds significant works and mounted a 2010 retrospective. Paintings also hang at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the Kröller-Müller Museum in the Netherlands, and the Indianapolis Museum of Art. His native Montparnasse neighborhood preserves his working-class subjects." },
      { question: "What subjects did Maximilien Luce paint?", answer: "Luce painted <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>, Paris scenes, and notably <strong>industrial workers</strong> including steelworkers, welders, pile drivers, and construction laborers. He brought working-class subjects into Neo-Impressionist contexts when most Pointillists painted leisurely bourgeois scenes. His socialist convictions shaped his choice of subjects throughout his career." },
      { question: "Was Maximilien Luce politically active?", answer: "Yes, Luce was an <strong>anarchist</strong> whose illustrations appeared in revolutionary periodicals including La Révolte, Le Père Peinard, and Les Temps Nouveaux. He was arrested in 1894 on suspicion of involvement in President Carnot's assassination and spent 42 days in Mazas Prison before acquittal. He resigned his Société des Artistes Indépendants presidency in 1940 protesting Vichy anti-Jewish laws." },
      { question: "How productive was Maximilien Luce?", answer: "Luce created over <strong>2,000 oil paintings</strong> plus comparable numbers of watercolors, gouaches, pastels, drawings, and over a hundred prints during his 60-year career spanning 1876 to 1941. He lived to age 83, remaining productive until the end despite the Nazi occupation of his beloved Paris in his final years." }
    ]
  },

  // 24. Richard Dadd
  {
    slug: 'richard-dadd',
    faqs: [
      { question: "What art movement was Richard Dadd associated with?", answer: "Dadd is linked to <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Victorian Romanticism</strong></a> and the fairy painting tradition popular in 19th-century Britain. His obsessively detailed work also anticipates Outsider Art, given that his most celebrated paintings were created during 42 years of confinement in psychiatric hospitals. He showed prodigious talent as a Royal Academy student before his breakdown." },
      { question: "Where can I see Richard Dadd paintings?", answer: "<a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> holds The Fairy Feller's Master-Stroke, his most famous work. The Bethlem Museum of the Mind at the former Bethlem Royal Hospital displays a substantial collection of his asylum work. The Ashmolean Museum in Oxford and the Fitzwilliam Museum in Cambridge also hold major paintings." },
      { question: "What is The Fairy Feller's Master-Stroke?", answer: "Dadd worked on this <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>fantastical</strong></a> <strong>fairy painting</strong> from 1855 to 1864 while confined in Bethlem hospital. Its obsessive, microscopic detail shows fairies, gnomes, and fantastical figures crowded in dense foliage, watching a woodsman prepare to split a hazelnut for Queen Mab's carriage. Freddie Mercury wrote a song about it after seeing it at the Tate." },
      { question: "Why was Richard Dadd in a psychiatric hospital?", answer: "In August 1843, Dadd <strong>killed his father</strong> with a knife, believing him to be the devil in disguise. He had developed paranoid delusions during an 1842-43 expedition through Egypt and the Middle East. He spent the remaining 42 years of his life in Bethlem and then Broadmoor hospitals, painting constantly throughout." },
      { question: "What caused Richard Dadd's mental illness?", answer: "Scholars believe Dadd suffered from <strong>paranoid schizophrenia</strong>, possibly triggered by sunstroke and exhaustion during an 1842-43 expedition through Egypt with his patron Sir Thomas Phillips. The condition may have been hereditary: two of his siblings also experienced mental illness. By the time he returned to London, delusions of Egyptian god Osiris controlling him had taken hold." }
    ]
  },

  // 25. Jean-Honoré Fragonard
  {
    slug: 'jean-honore-fragonard',
    faqs: [
      { question: "What art movement was Fragonard part of?", answer: "Fragonard was a leading master of the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> style, known for exuberant, sensual paintings with remarkable facility and hedonism. He created more than 550 paintings celebrating aristocratic pleasure and erotic intrigue in the decades before the French Revolution swept away the world he depicted and the patrons who commissioned his work." },
      { question: "Where can I see The Swing?", answer: "Fragonard's masterpiece <strong>The Swing</strong> (L'Escarpolette, 1767) hangs at the <a href=\"/apps/masterpieces/museum/wallace-collection\"><strong>Wallace Collection</strong></a> in London. This playfully erotic painting shows a young woman on a swing, her shoe flying off as a hidden lover gazes up from below. The painting's first known owner was guillotined in 1794, and it was seized by the revolutionary government." },
      { question: "What is the story behind The Swing?", answer: "A French courtier (identified as the Baron de Saint-Julien) commissioned a painting showing <strong>himself with his mistress</strong> on a swing, originally asking that a bishop push her. Fragonard substituted a layman for the clergyman but kept the <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>flirtatious scene</strong></a>, creating one of Rococo's most celebrated images of aristocratic frivolity." },
      { question: "How many paintings did Fragonard create?", answer: "Fragonard produced over <strong>550 paintings</strong>, not counting hundreds of drawings and etchings, executing them with extraordinary speed and facility. He could complete a portrait in an hour. His prodigious output included portraits, landscapes, mythological scenes, and the intimate bedroom subjects that defined his reputation for generations." },
      { question: "What happened to Fragonard during the French Revolution?", answer: "His close friend <strong>Jacques-Louis David</strong>, leader of the revolutionary Neoclassical movement, protected Fragonard by appointing him a museum curator in 1793. Though his Rococo style was thoroughly out of fashion by then, he survived the Terror that killed many of his former patrons. He died in 1806, largely forgotten, his nuanced art displaced by David's austere Neoclassicism." }
    ]
  }
];

async function main() {
  console.log('Starting FAQ expansion for 25 artists...');
  console.log('='.repeat(60));

  let successCount = 0;
  let failCount = 0;

  for (const artist of artistUpdates) {
    try {
      await prisma.artist.update({
        where: { slug: artist.slug },
        data: {
          faqs: artist.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.slug}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to update ${artist.slug}:`, error.message);
      failCount++;
    }
  }

  console.log('='.repeat(60));
  console.log(`Complete! ${successCount} succeeded, ${failCount} failed`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
