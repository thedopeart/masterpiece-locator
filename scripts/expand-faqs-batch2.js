const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 2: Remaining 12 artists with expanded FAQs (35-60 words, 3-4 links spread across FAQs)
const artistUpdates = {
  "carl-spitzweg": {
    faqs: [
      { question: "What art movement was Carl Spitzweg part of?", answer: `Spitzweg is associated with the Biedermeier period and German <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>, though his gentle satire sets him apart from both. While Romantics pursued sublime nature and Biedermeier celebrated bourgeois domesticity, Spitzweg affectionately mocked eccentric loners and absent-minded intellectuals with warmth and humor.` },
      { question: "Where can I see Carl Spitzweg's paintings?", answer: `The Poor Poet and The Bookworm hang at the Neue Pinakothek in Munich, Germany's premier collection of 19th-century art. The Museum Georg Schäfer in Schweinfurt holds another major collection. His works also appear at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> and throughout German regional museums.` },
      { question: "What subjects did Carl Spitzweg paint?", answer: `Spitzweg created affectionate portraits of society's eccentrics and loners: bookworms buried in volumes, hermits in mountain caves, amateur scientists, struggling poets, and lovestruck clerks. These solitary <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>figures</strong></a> are absorbed in their own quirky worlds, oblivious to the viewer's amused gaze.` },
      { question: "What is The Poor Poet about?", answer: `The Poor Poet (1839) shows a writer huddled in a cramped garret, sheltering under an open umbrella while burning manuscripts for warmth. A measuring meter on the wall hints at failed pretensions to classical verse. It's Spitzweg's most famous painting, both sympathetic and gently satirical of romantic artistic suffering.` },
      { question: "Was Carl Spitzweg formally trained?", answer: `No, Spitzweg trained as a pharmacist at the University of Munich, receiving his degree in 1832. He was entirely self-taught as a painter, learning by copying Flemish and Dutch masters and studying collections during extensive European travels. An inheritance freed him to paint full-time from the 1830s.` },
      { question: "How many works did Carl Spitzweg create?", answer: `Spitzweg produced over 1,500 paintings and drawings during his lifetime, selling approximately 400. His financial independence, inherited from his father, meant he never needed to work on commission and could paint solely for his own pleasure, developing his distinctive humorous vision without commercial pressure.` }
    ]
  },

  "edgar-degas": {
    faqs: [
      { question: "What art movement was Degas part of?", answer: `Degas was a founding member of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, organizing and exhibiting in seven of the eight Impressionist exhibitions between 1874 and 1886. Yet he always rejected the label, preferring "Realist" or "Independent," and never embraced plein-air landscape painting that defined most Impressionist work.` },
      { question: "Why did Degas paint so many ballet dancers?", answer: `Degas was fascinated by movement, light, and the intersection of art and labor in modern Paris. His friend Ludovic Halévy's connections to the Paris Opera gave him backstage access to rehearsals, allowing unprecedented observation of dancers at work. Ballet appeared in over 1,500 of his works across all media.` },
      { question: "Where can I see Degas's sculptures?", answer: `The <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington holds the original wax Little Fourteen-Year-Old Dancer, his only sculpture exhibited during his lifetime. After his death, 150 wax figures were discovered and cast in bronze, now distributed among major museums including the Met and Musée d'Orsay.` },
      { question: "Did Degas go blind?", answer: `Degas suffered progressive retinal disease from approximately age nineteen, possibly hereditary macular degeneration. By his forties he had lost most central vision; by seventy he was nearly blind. This deterioration forced him to shift from detailed oil paintings to pastel work and finally to sculpture, which he could create by touch.` },
      { question: "What are Degas's most famous works?", answer: `The Dance Class (1874), showing ballerinas rehearsing under master Jules Perrot, exemplifies his compositional innovation. Little Fourteen-Year-Old Dancer (1881) scandalized viewers with its hyper-realistic wax and fabric construction. The Absinthe Drinker (1876) captures modern alienation in a <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>Parisian café</strong></a>.` },
      { question: "Where can I see Degas's paintings?", answer: `The <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris holds the definitive collection, including The Dance Class and The Absinthe Drinker. The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum</strong></a> in New York and National Gallery in London also display major works spanning his entire career.` }
    ]
  },

  "georges-seurat": {
    faqs: [
      { question: "What art movement did Seurat pioneer?", answer: `Seurat pioneered Neo-Impressionism and invented Pointillism (also called Divisionism), a revolutionary technique of applying tiny dots of pure, unmixed color that blend optically when viewed from a distance. This scientific approach to color theory transformed painting and directly influenced Fauvism, <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>, and abstract art.` },
      { question: "Where is A Sunday on La Grande Jatte?", answer: `A Sunday Afternoon on the Island of La Grande Jatte (1884-1886) is the crown jewel of the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, where it has hung since 1924. The museum built an entire gallery around this masterpiece, which Stephen Sondheim's musical Sunday in the Park with George brought to Broadway.` },
      { question: "How long did La Grande Jatte take to paint?", answer: `Seurat worked on La Grande Jatte for nearly two years, from 1884 to 1886, completing approximately sixty preliminary oil sketches and drawings. The final canvas measures an enormous 207 by 308 centimeters (about 7 by 10 feet), every inch covered with meticulously placed dots of <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>pure color</strong></a>.` },
      { question: "How old was Seurat when he died?", answer: `Seurat died on March 29, 1891, at just thirty-one years old, probably of meningitis though the exact cause remains debated. His brief career of barely a decade nonetheless transformed modern art. He completed only seven large-scale paintings, each representing months or years of obsessive preparation.` },
      { question: "Where can I see Seurat's paintings?", answer: `Beyond La Grande Jatte at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, his Bathers at Asnières (1884) hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. The Barnes Foundation in Philadelphia and Musée d'Orsay in Paris hold significant works from his revolutionary but tragically abbreviated career.` }
    ]
  },

  "edmund-blair-leighton": {
    faqs: [
      { question: "What subjects did Edmund Blair Leighton paint?", answer: `Leighton specialized in romanticized medieval and Regency scenes depicting moments of chivalry, courtship, and ceremony. His paintings feature knights receiving accolades, ladies bestowing favors, and tender exchanges between noble <a href="https://luxurywallart.com/collections/kings-and-queens" target="_blank" rel="noopener"><strong>lovers</strong></a>. This nostalgic vision of the past made his work enormously popular with Victorian and Edwardian audiences.` },
      { question: "What are Edmund Blair Leighton's most famous paintings?", answer: `The Accolade (1901), showing a queen knighting a kneeling warrior, and Godspeed (1900), depicting a lady tying her favor to a departing knight's lance, remain his most recognized works. Both capture idealized moments of medieval ritual with Pre-Raphaelite attention to historical costume and architectural detail.` },
      { question: "What art movement was Edmund Blair Leighton associated with?", answer: `Leighton worked within the <a href="/apps/masterpieces/movement/academic-art"><strong>Academic Art</strong></a> tradition with strong connections to the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite</strong></a> movement's romantic medievalism. His meticulous historical research and narrative clarity aligned with Academic standards, while his subject matter and sentiment echoed Pre-Raphaelite tastes.` },
      { question: "Was Edmund Blair Leighton a Royal Academy member?", answer: `Despite exhibiting at the Royal Academy annually from 1878 until his death in 1922, Leighton was never elected an associate member, let alone full academician. This persistent snub may reflect changing tastes; the Academy was moving toward Impressionist influences while Leighton remained devoted to narrative historical painting.` },
      { question: "Did Edmund Blair Leighton come from an artistic family?", answer: `Yes, his father Charles Blair Leighton was a portrait and genre painter who died when Edmund was only three years old, in 1855. Edmund's son Eric also became a painter, creating three generations of Leighton artists. Young Edmund grew up surrounded by his late father's paintings and artistic connections.` }
    ]
  },

  "jacques-louis-david": {
    faqs: [
      { question: "What art movement was David part of?", answer: `David was the leading painter of <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassicism</strong></a>, almost single-handedly shifting French painting from the frivolous Rococo toward classical austerity and moral seriousness. His stark compositions, sculptural figures, and subjects drawn from Roman history became the visual language of the French Revolution and Napoleonic Empire.` },
      { question: "What role did David play in the French Revolution?", answer: `David was far more than a sympathizer—he was a Revolutionary leader, elected to the National Convention and serving on the Committee of General Security. As friend of Robespierre and effective "dictator of the arts," he organized Revolutionary festivals, designed propaganda, and voted for Louis XVI's execution in January 1793.` },
      { question: "Where can I see David's paintings?", answer: `The <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> holds his greatest works: The Oath of the Horatii (1784), The Death of Marat (1793), and The Coronation of Napoleon (1807), which spans an enormous 32 by 20 feet. The Musées Royaux in Brussels, his city of exile, also holds major works.` },
      { question: "Who were David's famous students?", answer: `David trained the next generation of French painting, including Jean-Auguste-Dominique Ingres, who carried Neoclassical precision into the nineteenth century, and Antoine-Jean Gros, whose Romantic battlefield scenes anticipated Delacroix. His studio methods and emphasis on drawing from antique sculpture shaped French art education for generations.` },
      { question: "What are David's most famous paintings?", answer: `The Oath of the Horatii (1784) launched <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassicism</strong></a> with its austere geometry and Roman virtue. The Death of Marat (1793) transformed a murdered Revolutionary into a secular martyr. The Coronation of Napoleon (1807) documented imperial spectacle on a monumental scale unmatched in French painting.` },
      { question: "What happened to David after Napoleon?", answer: `After Waterloo and the Bourbon restoration, David faced exile as a regicide who had voted for Louis XVI's death. He refused to request amnesty, instead settling in Brussels in 1816, where he painted portraits and mythological subjects until his death in 1825. He is buried in Brussels.` }
    ]
  },

  "winslow-homer": {
    faqs: [
      { question: "What art movement was Winslow Homer part of?", answer: `Homer is classified as an <a href="/apps/masterpieces/movement/american-realism"><strong>American Realist</strong></a>, though his late seascapes transcend easy categorization. His career evolved from documentary illustration through Impressionist-influenced plein-air painting to powerful late works focused on nature's raw elemental forces, anticipating modernist abstraction.` },
      { question: "Where can I see Winslow Homer's paintings?", answer: `The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum</strong></a> holds The Gulf Stream, while the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> displays Breezing Up. The <a href="/apps/masterpieces/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a> and Art Institute of Chicago own major works, and the Portland Museum of Art is near his studio.` },
      { question: "What subjects did Winslow Homer paint?", answer: `Homer's subjects evolved dramatically: Civil War camps, African American rural life, Adirondack hunting scenes, English fishing villages, Caribbean seascapes, and finally the Maine coast. His late <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>seascapes</strong></a> depict the elemental drama of waves crashing against rocks with unprecedented power.` },
      { question: "Did Winslow Homer serve in the Civil War?", answer: `Homer didn't serve as a soldier but was an artist-correspondent for Harper's Weekly, documenting Union Army camp life through drawings and engravings from 1861 to 1865. His unsentimental images of waiting, boredom, and camaraderie shaped how Northern civilians visualized the conflict more than any photographer except Brady.` },
      { question: "Where did Winslow Homer live and work?", answer: `After years in New York, Homer retreated in 1883 to Prouts Neck, a rocky Maine peninsula where he lived in near-isolation until his death in 1910. His studio overlooking the Atlantic became the crucible for his greatest seascapes, painted during storms while he stood exposed to wind and spray.` }
    ]
  },

  "thomas-gainsborough": {
    faqs: [
      { question: "What art movement was Thomas Gainsborough part of?", answer: `Gainsborough worked in the <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> style, bringing French elegance and painterly freedom to British portraiture. Yet he also pioneered the English landscape tradition, influencing Constable and the Romantics. His fluid brushwork and sensitivity to atmosphere set him apart from his more formal rival, Joshua Reynolds.` },
      { question: "Where can I see The Blue Boy?", answer: `The Blue Boy (c. 1770) hangs at the <a href="/apps/masterpieces/museum/huntington-library"><strong>Huntington Library</strong></a> in San Marino, California, which purchased it for $728,000 in 1921—then the highest price ever paid for a painting. When it left England, 90,000 people came to bid farewell at the National Gallery.` },
      { question: "Where can I see Gainsborough's paintings in Britain?", answer: `The <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London holds Mr and Mrs Andrews and The Morning Walk. Tate Britain displays major portraits. Gainsborough's House in Sudbury, Suffolk, his birthplace, is now a museum dedicated to his life and work with rotating exhibitions.` },
      { question: "What subjects did Gainsborough prefer?", answer: `Though celebrated for <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> that paid his bills, Gainsborough preferred painting <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscapes</strong></a>. He famously said "I'm sick of Portraits and wish very much to take up my Viol da Gamba and walk off to some sweet Village where I can paint Landskips."` },
      { question: "Who influenced Gainsborough?", answer: `Anthony van Dyck profoundly shaped his elegant portrait style; Gainsborough's dying word was reportedly "Van Dyck." French Rococo painter Hubert Gravelot, who taught drawing in London, influenced his early training. Dutch landscape painters inspired his country scenes, while Rubens's fluent brushwork informed his later technique.` }
    ]
  },

  "pieter-de-hooch": {
    faqs: [
      { question: "What did Pieter de Hooch paint?", answer: `De Hooch specialized in domestic interiors with characteristic spatial complexity: rooms opening through doorways into sunlit courtyards or further chambers beyond. His quiet scenes of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>household life</strong></a>—women sewing, servants sweeping, mothers with children—exemplify <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre painting at its most serene.` },
      { question: "Where can I see de Hooch's paintings?", answer: `The <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London holds The Courtyard of a House in Delft. The <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> displays A Woman Drinking with Two Men, while the National Gallery of Art in Washington owns masterful examples of his sunlit interiors.` },
      { question: "How does de Hooch compare to Vermeer?", answer: `De Hooch and Vermeer were contemporaries in Delft's painters' guild during the late 1650s, both specializing in domestic interiors with subtle light effects. De Hooch pioneered the "doorkijkje" (view through doorways) that Vermeer later refined. Scholars debate who influenced whom, but their artistic dialogue elevated Dutch genre painting.` },
      { question: "What is de Hooch's most famous painting?", answer: `The Courtyard of a House in Delft (1658) at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London demonstrates his mastery of architectural space and golden Dutch light. A woman and child stand in a brick-paved courtyard, framed by precisely rendered buildings, the mundane transformed into something timeless.` },
      { question: "When was de Hooch's best period?", answer: `De Hooch's finest work dates from his Delft period, roughly 1654 to 1661, when he lived near Vermeer and painted his most luminous interiors and courtyards. After moving to Amsterdam around 1661, his paintings became darker and more cluttered, generally considered less accomplished than his Delft masterpieces.` }
    ]
  },

  "simone-martini": {
    faqs: [
      { question: "What art movement was Simone Martini part of?", answer: `Martini worked in the Sienese Gothic tradition and helped develop the International Gothic style that would spread across Europe. His elegant linear approach, rich colors, and courtly refinement bridged Italian Trecento painting with French manuscript illumination, influencing artists from Avignon to Prague and anticipating certain aspects of the <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>.` },
      { question: "What are Simone Martini's most famous paintings?", answer: `The Annunciation (1333), painted with his brother-in-law Lippo Memmi and now at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi</strong></a>, is his supreme achievement, its gold ground and sinuous lines epitomizing Gothic elegance. The Maestà fresco (1315) in Siena's Palazzo Pubblico established his reputation with its unprecedented scale and sophistication.` },
      { question: "Where can I see Simone Martini's work?", answer: `The <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi</strong></a> in Florence displays his luminous Annunciation. Siena preserves his Maestà fresco in the Palazzo Pubblico's Sala del Mappamondo. The Basilica of San Francesco in Assisi contains his important frescoes of Saint Martin's life in the lower church.` },
      { question: "Was Simone Martini knighted?", answer: `Yes, Martini became the first painter in recorded history to receive knighthood when the Angevin court of Naples honored him on July 23, 1317. King Robert of Naples, a noted patron of arts and letters, recognized Martini's extraordinary talent and elevated him to noble status rarely accorded to artists.` },
      { question: "Did Martini know the poet Petrarch?", answer: `Martini and Petrarch became friends at the papal court in Avignon, where both served Pope Benedict XII in the 1340s. Martini painted a now-lost portrait of Laura de Noves, the woman celebrated in Petrarch's poetry. Petrarch wrote two sonnets praising Martini's ability to capture Laura's <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>beauty</strong></a>.` }
    ]
  },

  "benozzo-gozzoli": {
    faqs: [
      { question: "What is Benozzo Gozzoli's most famous work?", answer: `The Journey of the Magi frescoes (1459-1461) transform the tiny Magi Chapel of Palazzo Medici-Riccardi into a glittering procession through an idealized Tuscan landscape. The three kings and their retinue include recognizable portraits of the Medici family, Byzantine Emperor John VIII Palaiologos, and Florentine notables, making it an invaluable document of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> Florence.` },
      { question: "Where can I see Benozzo Gozzoli's art?", answer: `His masterpiece remains in situ at the Magi Chapel in Palazzo Medici-Riccardi, Florence. The <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> holds panel paintings. San Gimignano's Collegiate Church preserves his Saint Augustine fresco cycle, while fragments of his enormous Campo Santo frescoes survive in Pisa's Museo delle Sinopie.` },
      { question: "What art movement was Benozzo Gozzoli part of?", answer: `Gozzoli was an Early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> painter from Florence, bridging the generation between Masaccio's innovations and the High Renaissance masters. He combined Fra Angelico's luminous colors and spiritual serenity with detailed narrative complexity and courtly splendor that appealed to wealthy patrons.` },
      { question: "Who did Benozzo Gozzoli train with?", answer: `Gozzoli first assisted Lorenzo Ghiberti on the famous Gates of Paradise bronze doors for Florence's Baptistery (1444-1447), learning goldsmith precision. He then worked with Fra Angelico on frescoes in Florence's San Marco convent and accompanied the master to Rome and Orvieto, absorbing his radiant <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>color</strong></a> and devotional spirit.` },
      { question: "Did Benozzo Gozzoli include himself in his paintings?", answer: `Yes, Gozzoli painted his self-portrait into the Magi Chapel frescoes, identifiable by his distinctive red cap inscribed "Opus Benotii" (Work of Benozzo) in gold letters. This confident signature within such an important commission reflects his rising status and the growing social recognition of Renaissance artists.` }
    ]
  },

  "gabriel-metsu": {
    faqs: [
      { question: "What art movement was Gabriel Metsu part of?", answer: `Metsu was a leading painter of the <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>, creating genre scenes and portraits that rivaled Vermeer and Ter Borch in technical refinement and psychological subtlety. His versatility extended from early history paintings to the elegant domestic scenes of his mature Amsterdam period.` },
      { question: "Where can I see Gabriel Metsu's paintings?", answer: `The <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> holds The Sick Child, among his most moving works. Major paintings hang at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum</strong></a>, <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>, and National Gallery London, documenting his evolution from Leiden narrative scenes to refined Amsterdam interiors.` },
      { question: "What is The Sick Child?", answer: `The Sick Child (c. 1664-1666) depicts a mother tenderly caring for her pale, listless daughter, one of the most emotionally powerful images of the Dutch Golden Age. The subtle interplay of concern, illness, and maternal devotion captured with Metsu's characteristic delicacy has made it an enduring icon at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>.` },
      { question: "What techniques was Metsu known for?", answer: `Metsu excelled at rendering luxurious fabrics, especially silk and satin, with a tactile precision that rivaled Gerard ter Borch. His paintings capture how light plays across different textile surfaces—the sheen of silk, the depth of velvet, the crispness of white linen—with remarkable sensitivity to color and texture.` },
      { question: "Who influenced Gabriel Metsu?", answer: `Gerrit Dou's meticulous Leiden "fijnschilder" technique shaped his early precision, while Gerard ter Borch's elegant figures in satin and silk influenced his Amsterdam manner. Metsu in turn influenced Vermeer's treatment of domestic <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>scenes</strong></a>; scholars trace direct visual connections between their works.` }
    ]
  },

  "george-inness": {
    faqs: [
      { question: "What art movement was George Inness part of?", answer: `Inness evolved from the detailed <a href="/apps/masterpieces/movement/hudson-river-school"><strong>Hudson River School</strong></a> style toward the atmospheric, spiritually-infused <a href="/apps/masterpieces/movement/tonalism"><strong>Tonalism</strong></a> that dominated American landscape painting by the 1880s. His late works dissolve solid forms into veils of color and light, anticipating abstract expressionism's concern with mood over representation.` },
      { question: "Where can I see George Inness paintings?", answer: `The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> holds major works including The Lackawanna Valley. The Smithsonian American Art Museum and <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington display significant collections. The Montclair Art Museum in New Jersey, near where he worked, specializes in his paintings.` },
      { question: "What influenced Inness's later style?", answer: `The French Barbizon school, which Inness encountered on European trips, liberated his technique from Hudson River School detail. More profoundly, his conversion to Swedenborgianism in the 1860s shaped his belief that <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> painting should express spiritual states rather than merely record natural appearances.` },
      { question: "What is Inness's most famous painting?", answer: `The Lackawanna Valley (c. 1855), commissioned by the Delaware, Lackawanna & Western Railroad, shows a train cutting through pastoral landscape in unexpected harmony. This early masterpiece balances industrial progress with natural beauty. His late work The Home of the Heron (1893) exemplifies his mature atmospheric style.` },
      { question: "How many paintings did Inness create?", answer: `Inness produced over 1,150 paintings, watercolors, and sketches across his fifty-year career. This substantial body of work documents his remarkable artistic journey from detailed Hudson River School realism to the misty, spiritually-charged Tonalist landscapes that influenced American painting into the twentieth century.` }
    ]
  }
};

async function main() {
  console.log("Expanding FAQs for batch 2 (12 artists)...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artistUpdates)) {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    if (artist) {
      await prisma.artist.update({
        where: { slug },
        data: {
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Expanded FAQs: ${artist.name}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nExpanded FAQs for ${updated} artists in batch 2`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
