const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'joachim-patinir-landscape-with-st-jerome': [
    { question: "What does Landscape with St. Jerome show?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> set <strong>St. Jerome</strong> within a sweeping panoramic landscape. The saint is a small figure amid vast rocky terrain, rivers, and distant blue hills, typical of Patinir's \"world landscape\" approach." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The Prado holds several <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> works, thanks to early Spanish royal collecting." },
    { question: "Why did Patinir favor St. Jerome as a subject?", answer: "The hermit saint in a <strong>wilderness setting</strong> gave <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> the perfect excuse to paint elaborate landscapes. Religious figures provided narrative justification, but the real star was always the land itself." }
  ],
  'joachim-patinir-rocky-landscape-with-saint-jerome': [
    { question: "How does this differ from Patinir's other Jerome paintings?", answer: "Each version features a <strong>different rocky setting</strong> with varying compositions. <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> never repeated himself exactly, instead exploring different combinations of cliffs, water, and vegetation in each landscape." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museum-mayer-van-den-bergh-antwerp-belgium\"><strong>Museum Mayer van den Bergh</strong></a> in Antwerp, a small museum with a focused collection of Flemish Old Masters." },
    { question: "What technique did Patinir use for depth?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> used <strong>aerial perspective</strong>: warm browns in the foreground shift to greens in the middle ground and cool blues in the distance. This color-based depth system became standard in Northern landscape painting." }
  ],
  'joachim-patinir-the-baptism-of-christ': [
    { question: "What does The Baptism of Christ depict?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> placed the <strong>baptism of Christ</strong> by John the Baptist within a vast river landscape. As usual, the biblical event is almost swallowed by the panoramic setting surrounding it." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna, which holds a major collection of early Netherlandish and <a href=\"/apps/masterpieces/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> painting." },
    { question: "Did Patinir collaborate with other painters?", answer: "Yes. <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> sometimes had other artists paint the <strong>figures</strong> in his landscapes. This was common practice in Antwerp workshops, where specialists collaborated on different parts of a single painting." }
  ],
  'joachim-patinir-temptation-of-st-anthony': [
    { question: "What does Temptation of St. Anthony show?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> depicted <strong>St. Anthony</strong> beset by temptations in a fantastical landscape. The combination of religious narrative and imaginative terrain recalls Hieronymus Bosch, whose influence Patinir clearly absorbed." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> is well represented in the Prado's Flemish holdings." },
    { question: "How does Patinir relate to Bosch?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> lived a generation after <strong>Bosch</strong> and absorbed his fantastical elements. But where Bosch focused on bizarre creatures and moral symbolism, Patinir channeled that imagination into landscape, creating vast, dreamlike terrains." }
  ],
  'joachim-patinir-the-rest-of-the-flight-into-egypt': [
    { question: "What does this painting depict?", answer: "<a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> showed the <strong>Holy Family resting</strong> during their journey to Egypt, set within a sweeping landscape of hills, water, and distant towns. The sacred figures occupy only a small corner of the vast panorama." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/kunsthistorisches-museum\"><strong>Kunsthistorisches Museum</strong></a> in Vienna. The museum holds multiple <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> works in its Netherlandish collection." },
    { question: "Why did Patinir paint this subject multiple times?", answer: "The <strong>Flight into Egypt</strong> required a journey through varied terrain, giving <a href=\"/apps/masterpieces/artist/joachim-patinir\"><strong>Patinir</strong></a> the perfect narrative excuse to paint his panoramic landscapes. Each version let him experiment with different geological and atmospheric effects." }
  ],
  'joaquin-sorolla-waiting': [
    { question: "What does Waiting by Sorolla depict?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> captured a figure in a moment of <strong>quiet anticipation</strong>. His trademark luminous brushwork and sensitivity to natural light are present even in this more intimate subject." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla's</strong></a> smaller works remain popular with collectors drawn to his handling of light and color." },
    { question: "What is Sorolla known for?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> is celebrated as Spain's <strong>master of light</strong>. His beach scenes, garden views, and sun-drenched portraits capture Mediterranean brightness with loose, confident brushwork that influenced Spanish and American painting." }
  ],
  'joaquin-sorolla-the-painter39s-sister': [
    { question: "Who is depicted in this portrait?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted his <strong>sister</strong> in a personal portrait that shows his warmth toward family subjects. His portraits of relatives tend to be more relaxed and intimate than his commissioned works." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museu-de-belles-arts-de-val232ncia-valencia-spain\"><strong>Museu de Belles Arts de València</strong></a>, Sorolla's home city. The museum holds important early works by the artist." },
    { question: "How did Sorolla handle portraits?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> brought his <strong>plein-air sensibility</strong> to portraiture, often painting subjects in natural light rather than studio settings. This gave his portraits a freshness and immediacy unusual for the period." }
  ],
  'joaquin-sorolla-the-blessing-of-isaac': [
    { question: "What biblical scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> depicted <strong>Isaac blessing his son</strong>, a subject from Genesis. This early work shows his academic training before he developed the luminous outdoor style he's best known for." },
    { question: "Where is this painting held?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museu-de-belles-arts-de-val232ncia-valencia-spain\"><strong>Museu de Belles Arts de València</strong></a> in Spain. The museum preserves several of <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla's</strong></a> student-era paintings." },
    { question: "Did Sorolla paint many religious subjects?", answer: "Rarely. <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> produced <strong>biblical scenes early in his career</strong> as academic exercises. He soon moved toward the contemporary Spanish life and sun-filled landscapes that made him internationally famous." }
  ],
  'joaquin-sorolla-still-life': [
    { question: "What does this still life show?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted a <strong>still life arrangement</strong> with his characteristic feel for light and color. While not his primary genre, his still lifes show the same confident brushwork found in his figure paintings." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/museu-de-belles-arts-de-val232ncia-valencia-spain\"><strong>Museu de Belles Arts de València</strong></a> in Spain. The museum documents <a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla's</strong></a> full range as an artist." },
    { question: "Are Sorolla's still lifes common?", answer: "<a href=\"/apps/masterpieces/artist/joaquin-sorolla\"><strong>Sorolla</strong></a> painted relatively few <strong>still lifes</strong> compared to his beach scenes, portraits, and garden views. When he did, he brought the same luminous palette and rapid brushwork that characterize his outdoor work." }
  ],
  'john-constable-view-towards-dedham': [
    { question: "What does View towards Dedham show?", answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> painted a view toward <strong>Dedham</strong> in the Stour Valley, Suffolk, the countryside he called home. The rolling fields, church tower, and clouded sky capture the English landscape he returned to throughout his life." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> painted Dedham and the surrounding area many times, and versions appear in both museums and private hands." },
    { question: "Why did Constable paint Dedham so often?", answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> grew up in the <strong>Stour Valley</strong> and said its scenery made him a painter. He returned to the same views repeatedly, believing deep familiarity with a place produced the truest art." }
  ],
  'john-constable-view-at-epsom': [
    { question: "What does View at Epsom depict?", answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> painted the <strong>open downland near Epsom</strong> in Surrey with a dramatic sky of clouds and light. The landscape is secondary to the sky, which dominates the composition." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate</strong></a> in London. <a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable's</strong></a> landscapes are central to the Tate's collection of British art." },
    { question: "Why are skies so important in Constable's work?", answer: "<a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable</strong></a> called the sky the \"chief organ of sentiment\" in landscape. He made detailed <strong>cloud studies</strong> and believed that getting the sky right was essential to capturing a landscape's mood and truth." }
  ],
  'john-everett-millais-waiting': [
    { question: "What does Millais's Waiting depict?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted a figure in a state of <strong>quiet expectation</strong>, rendered with the precise detail and bright color characteristic of the <strong>Pre-Raphaelite Brotherhood</strong> he co-founded." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/birmingham-museum-and-art-gallery-birmingham-uk\"><strong>Birmingham Museum and Art Gallery</strong></a>, which holds one of the world's finest collections of Pre-Raphaelite art." },
    { question: "What is the Pre-Raphaelite Brotherhood?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>, Rossetti, and Hunt founded the <strong>Pre-Raphaelite Brotherhood</strong> in 1848. They rejected the dark, formulaic painting taught at the Royal Academy in favor of bright colors, sharp detail, and subjects drawn from literature and nature." }
  ],
  'john-everett-millais-james-wyatt-and-his-granddaughter-mary': [
    { question: "Who are the subjects of this portrait?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted <strong>James Wyatt</strong>, an Oxford art dealer, with his young granddaughter Mary. The double portrait shows Millais's skill at capturing both the elderly man's character and the child's innocence." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted this early in his career, demonstrating the technical precocity that made him the youngest student ever admitted to the Royal Academy Schools." },
    { question: "How old was Millais when he started his career?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> entered the <strong>Royal Academy Schools at age 11</strong>, the youngest student in its history. He was exhibiting professionally by his mid-teens, and his early portraits already show remarkable maturity." }
  ],
  'john-everett-millais-the-order-of-release': [
    { question: "What does The Order of Release depict?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted a <strong>Highland soldier being released from prison</strong> into his wife's arms. She holds the release document while clutching their child. The emotional intensity and historical setting made it one of Millais's most popular works." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate</strong></a> in London. When first exhibited in 1853, it was so popular that a guard had to be posted to manage the crowds." },
    { question: "Who modeled for the wife?", answer: "<strong>Effie Gray</strong>, then married to the critic John Ruskin, modeled for the wife. She later left Ruskin and married <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a>, one of the most famous personal scandals in Victorian art history." }
  ],
  'john-everett-millais-the-woodman39s-daughter': [
    { question: "What literary source inspired this painting?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> illustrated a poem by Coventry Patmore about a <strong>woodman's daughter</strong> who falls in love with a squire's son. The painting shows them meeting as children, before class difference separates them." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/guildhall-art-gallery-london-uk\"><strong>Guildhall Art Gallery</strong></a> in London. The gallery holds a notable collection of Victorian and Pre-Raphaelite art." },
    { question: "What Pre-Raphaelite qualities does this show?", answer: "The painting displays classic <strong>Pre-Raphaelite traits</strong>: precise botanical detail, bright outdoor color, literary subject matter, and a moralizing narrative about social inequality. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted every leaf and blade of grass from direct observation." }
  ],
  'john-everett-millais-the-return-of-the-dove-to-the-ark': [
    { question: "What biblical scene does this show?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted the moment <strong>Noah's dove returns to the ark</strong> with an olive branch, signaling the flood's end. Two young women cradle the bird with tender care, giving the biblical scene an intimate, domestic feel." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/ashmolean-museum-oxford-uk\"><strong>Ashmolean Museum</strong></a> in Oxford. The painting dates from <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais's</strong></a> early Pre-Raphaelite period." },
    { question: "What makes this painting distinctive?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> focused on <strong>emotional intimacy</strong> rather than the grand drama of the flood. The close-up view of the two figures cradling the dove strips the story down to a moment of relief and tenderness." }
  ],
  'john-everett-millais-mariana-in-the-moated-grange': [
    { question: "Who is Mariana?", answer: "<strong>Mariana</strong> comes from Shakespeare's Measure for Measure, a woman abandoned by her betrothed. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> also drew on Tennyson's poem, showing her stretching wearily at a window, trapped in isolation and longing." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. It's one of <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais's</strong></a> most celebrated Pre-Raphaelite paintings." },
    { question: "What Pre-Raphaelite details stand out here?", answer: "The <strong>stained glass window</strong>, embroidered fabric, autumn leaves, and every surface are painted with obsessive precision. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> used intense, jewel-like colors and meticulous detail to heighten the emotional atmosphere of loneliness." }
  ],
  'john-everett-millais-isabella': [
    { question: "What story does Isabella illustrate?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> depicted a scene from Keats's poem based on Boccaccio: <strong>Isabella and Lorenzo</strong> share a meal with her hostile brothers, who will later murder Lorenzo. Tension simmers beneath the surface of the formal dinner." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/walker-art-gallery\"><strong>Walker Art Gallery</strong></a> in Liverpool. It was <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais's</strong></a> first major Pre-Raphaelite painting, exhibited in 1849." },
    { question: "Why is Isabella significant?", answer: "It's one of the <strong>founding works</strong> of the Pre-Raphaelite Brotherhood. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> included the secret initials \"PRB\" on his signature, publicly declaring the group's existence for the first time." }
  ],
  'john-everett-millais-the-bridesmaid': [
    { question: "What does The Bridesmaid depict?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted a <strong>bridesmaid passing wedding cake through a ring</strong>, a Victorian superstition said to reveal her future husband in a vision. The intense gaze and rich auburn hair create a hypnotic effect." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid\"><strong>Fitzwilliam Museum</strong></a> in Cambridge. The museum holds a fine selection of Victorian painting." },
    { question: "What Victorian custom does this show?", answer: "The <strong>wedding cake superstition</strong> held that a bridesmaid who passed cake through a wedding ring nine times would dream of her future husband. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> captured this folk belief with Pre-Raphaelite intensity and vivid color." }
  ],
  'john-everett-millais-pizarro-seizing-the-inca-of-peru': [
    { question: "What historical event does this depict?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted <strong>Francisco Pizarro capturing Atahualpa</strong>, the last Inca emperor, in 1532. It's a dramatic early work showing Millais's ambition to tackle grand historical subjects." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> painted this when he was just a teenager, demonstrating the talent that made him a child prodigy of Victorian art." },
    { question: "How old was Millais when he painted this?", answer: "<a href=\"/apps/masterpieces/artist/john-everett-millais\"><strong>Millais</strong></a> was reportedly only <strong>13 years old</strong> when he completed this ambitious history painting. His precocious technical ability amazed his contemporaries and set him on the path to becoming one of Britain's most successful painters." }
  ],
  'john-frederick-kensett-trout-fisherman': [
    { question: "What does Trout Fisherman depict?", answer: "<a href=\"/apps/masterpieces/artist/john-frederick-kensett\"><strong>Kensett</strong></a> painted a <strong>fisherman in a tranquil landscape</strong>, combining his love of quiet natural settings with precise observation of light on water. The scene embodies the contemplative spirit of the Hudson River School." },
    { question: "Where is this painting displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/thyssenbornemisza-museum-madrid-spain\"><strong>Thyssen-Bornemisza Museum</strong></a> in Madrid, which holds a strong collection of American landscape painting." },
    { question: "What movement does Kensett belong to?", answer: "<a href=\"/apps/masterpieces/artist/john-frederick-kensett\"><strong>Kensett</strong></a> was part of the <strong>Hudson River School</strong> and later the Luminism movement. His paintings emphasize <strong>stillness, clear light, and smooth water</strong>, moving toward a quieter, more meditative approach than the dramatic landscapes of earlier Hudson River painters." }
  ],
  'john-frederick-kensett-lake-george': [
    { question: "What does Lake George show?", answer: "<a href=\"/apps/masterpieces/artist/john-frederick-kensett\"><strong>Kensett</strong></a> painted <strong>Lake George</strong> in New York's Adirondack region with crystalline clarity. The still water, distant mountains, and luminous sky exemplify the Luminist approach to American landscape." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. Lake George was a popular subject for American landscape painters throughout the 19th century." },
    { question: "What is Luminism?", answer: "<strong>Luminism</strong> was a style within American landscape painting that emphasized glowing, diffused light, mirror-like water, and an absence of visible brushwork. <a href=\"/apps/masterpieces/artist/john-frederick-kensett\"><strong>Kensett</strong></a> was one of its finest practitioners, creating scenes of almost photographic calm." }
  ],
  'john-james-audubon-washington-sea-eagle': [
    { question: "What does Washington Sea Eagle depict?", answer: "<a href=\"/apps/masterpieces/artist/john-james-audubon\"><strong>Audubon</strong></a> painted a <strong>large eagle</strong> he believed was a separate species, which he named after George Washington. Modern ornithologists consider it a juvenile bald eagle, but Audubon's rendering remains a powerful image." },
    { question: "Where is this work displayed?", answer: "It's at the <a href=\"/apps/masterpieces/museum/smithsonian-american-art\"><strong>Smithsonian American Art Museum</strong></a> in Washington, D.C. <a href=\"/apps/masterpieces/artist/john-james-audubon\"><strong>Audubon's</strong></a> bird paintings are among America's most treasured natural history artworks." },
    { question: "What is Audubon's legacy?", answer: "<a href=\"/apps/masterpieces/artist/john-james-audubon\"><strong>Audubon's</strong></a> <strong>Birds of America</strong> is one of the most valuable printed works in existence. His life-size, dramatic depictions of birds in their habitats combined scientific observation with artistic brilliance." }
  ],
  'last-valley-la-farge': [
    { question: "What does The Last Valley show?", answer: "<a href=\"/apps/masterpieces/artist/john-la-farge\"><strong>John La Farge</strong></a> painted a <strong>lush valley landscape</strong> with rich color and atmospheric depth. His landscapes combine direct observation with a decorative sensibility influenced by his work in stained glass." },
    { question: "Where is this painting kept?", answer: "It's in a <strong>private collection</strong>. <a href=\"/apps/masterpieces/artist/john-la-farge\"><strong>La Farge's</strong></a> easel paintings are less widely known than his murals and stained glass windows but are valued for their luminous color." },
    { question: "What is La Farge known for?", answer: "<a href=\"/apps/masterpieces/artist/john-la-farge\"><strong>La Farge</strong></a> was a versatile American artist who pioneered <strong>opalescent stained glass</strong> and created important murals. His paintings of landscapes and South Pacific subjects show a sensitivity to color and light that was ahead of his American contemporaries." }
  ],
  'great-day-his-wrath': [
    { question: "What does The Great Day of His Wrath depict?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>John Martin</strong></a> painted the <strong>apocalyptic destruction of the world</strong> from the Book of Revelation. Mountains collapse, cities crumble, and the earth splits apart in one of the most dramatic visions of doom in British art." },
    { question: "Where is this painting displayed?", answer: "It's at <a href=\"/apps/masterpieces/museum/tate-britain\"><strong>Tate Britain</strong></a> in London. It's part of Martin's monumental trilogy of Judgement paintings, completed near the end of his life." },
    { question: "Why is John Martin's work so dramatic?", answer: "<a href=\"/apps/masterpieces/artist/john-martin\"><strong>Martin</strong></a> specialized in <strong>apocalyptic and biblical spectacle</strong> on a colossal scale. His paintings of divine destruction were hugely popular with Victorian audiences and influenced early cinema's approach to depicting catastrophe." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
