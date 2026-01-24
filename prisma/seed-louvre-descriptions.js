const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Louvre Expansion Descriptions ===\n');

  const updates = [
    // === LEONARDO ===
    {
      slug: 'virgin-of-rocks-louvre',
      description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted this earlier version of his famous composition between 1483 and 1486. The Virgin Mary sits in a rocky grotto with the infant Christ, John the Baptist, and an angel. Commissioned by the Confraternity of the Immaculate Conception in Milan, this painting sparked a lengthy payment dispute that resulted in Leonardo creating a second version now in London.</p>
<p>The <strong>sfumato technique</strong> creates soft, hazy transitions between light and shadow, giving the figures an almost dreamlike quality. Leonardo used oil on panel (later transferred to canvas), allowing him to build up translucent layers of color. The mysterious <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>rocky landscape</strong></a> behind the figures was unprecedented, transforming a religious scene into something more mystical.</p>
<p>The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> acquired this painting during the French Revolution. Art historians have debated for centuries why Leonardo painted two versions and which one came first. X-ray analysis reveals significant underdrawing changes, suggesting Leonardo refined his composition as he worked.</p>`,
      faqs: [
        { question: "Where can I see Virgin of the Rocks?", answer: "The earlier version hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. A second version, painted around 1495-1508, is displayed at London's National Gallery." },
        { question: "Why are there two versions of this painting?", answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> painted a second version following a payment dispute with the commissioning confraternity. The exact reasons remain debated among art historians." },
        { question: "What is sfumato technique?", answer: "<strong>Sfumato</strong> means 'smoky' in Italian. Leonardo pioneered this technique of blending colors and tones without visible brushstrokes, creating soft atmospheric effects." },
        { question: "How big is Virgin of the Rocks?", answer: "The Louvre version measures <strong>199 cm × 122 cm</strong> (78.3 × 48 inches). It was originally painted on panel but later transferred to canvas for preservation." }
      ]
    },
    {
      slug: 'belle-ferronniere-leonardo',
      description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted this portrait around 1490-1497 during his time at the Milanese court of Ludovico Sforza. The identity of the woman remains uncertain. Some scholars believe she's Lucrezia Crivelli, one of the duke's mistresses, while others suggest Cecilia Gallerani or even a member of the Ferron family.</p>
<p>The name "La Belle Ferronnière" actually comes from a case of mistaken identity. A French courtesan called "the beautiful wife of an ironmonger" was confused with this portrait in the 18th century. The <strong>ferronière</strong>, a thin band worn across the forehead with a jewel at the center, became fashionable partly because of this painting.</p>
<p>Leonardo positioned his subject at a three-quarter angle, her gaze directed just past the viewer. This creates an intriguing psychological distance. The painting hangs in the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> alongside the Mona Lisa, though it receives far less attention from the crowds.</p>`,
      faqs: [
        { question: "Who is depicted in La Belle Ferronnière?", answer: "Her identity is <strong>unknown</strong>. Leading candidates include Lucrezia Crivelli or Cecilia Gallerani, both connected to the court of <strong>Ludovico Sforza</strong> in Milan." },
        { question: "What is a ferronière?", answer: "A <strong>ferronière</strong> is a thin headband with a jewel centered on the forehead. This style became fashionable in <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> Italy and France." },
        { question: "Where is La Belle Ferronnière displayed?", answer: "The portrait hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>, in the same gallery as <a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo's</strong></a> other masterworks." }
      ]
    },
    {
      slug: 'saint-john-baptist-leonardo',
      description: `<p><a href="/apps/masterpieces/artist/leonardo-da-vinci"><strong>Leonardo da Vinci</strong></a> painted Saint John the Baptist between 1513 and 1516, making it one of his final works. The Baptist emerges from absolute darkness, his enigmatic smile echoing the Mona Lisa. He points upward toward heaven with his right hand while clutching a thin reed cross.</p>
<p>The painting's <strong>extreme chiaroscuro</strong>, with the figure lit against a completely black background, was radical for its time. Leonardo achieved this effect through dozens of thin oil glazes, building up flesh tones that seem to glow from within. Some viewers find the saint's feminine features and knowing expression unsettling.</p>
<p>Leonardo kept this painting with him until his death in France in 1519. It passed to the French royal collection and eventually to the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>. The ambiguous expression has generated centuries of interpretation, with some seeing spiritual ecstasy and others something more worldly.</p>`,
      faqs: [
        { question: "When did Leonardo paint Saint John the Baptist?", answer: "<a href=\"/apps/masterpieces/artist/leonardo-da-vinci\"><strong>Leonardo</strong></a> painted this between 1513 and 1516, during the final years of his life. He was living in Rome, then France under the patronage of King Francis I." },
        { question: "Why is the background completely black?", answer: "Leonardo used <strong>extreme chiaroscuro</strong> to make the figure emerge dramatically from darkness. This technique influenced later artists, particularly <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a>." },
        { question: "Where can I see this painting?", answer: "Saint John the Baptist hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. It's displayed near the Mona Lisa and Virgin of the Rocks." }
      ]
    },

    // === VERMEER ===
    {
      slug: 'lacemaker-vermeer',
      description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted The Lacemaker around 1669-1670. It's his smallest painting at just 24 by 21 centimeters, yet captures extraordinary concentration in the face of a young woman bent over her work. Red and white threads spill from a blue sewing cushion in the foreground.</p>
<p>Vermeer used an unusual technique here, deliberately blurring the foreground threads while keeping the woman's hands sharp. This mimics how the human eye actually sees when focused on a single point. The <strong>soft diffusion of light</strong> and the woman's total absorption in her craft create an almost meditative atmosphere.</p>
<p>The painting entered the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in 1870. Salvador Dali called it "the greatest painting in the world" and referenced it in several of his own works. For such a tiny canvas, it commands remarkable attention.</p>`,
      faqs: [
        { question: "How small is The Lacemaker?", answer: "It measures just <strong>24.5 × 21 cm</strong> (9.6 × 8.3 inches), making it <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer's</strong></a> smallest known painting." },
        { question: "Why did Vermeer blur the foreground?", answer: "Vermeer deliberately <strong>softened the foreground threads</strong> to mimic how the human eye focuses. This optical effect predates photography by two centuries." },
        { question: "Where is The Lacemaker displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. Despite its small size, it remains one of the museum's most admired works." }
      ]
    },
    {
      slug: 'astronomer-vermeer',
      description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted The Astronomer in 1668, depicting a scholar reaching toward a celestial globe in his study. Light streams through a window on the left, illuminating the room in Vermeer's characteristic manner. A Turkish carpet covers the table, and an astrolabe sits nearby.</p>
<p>The <strong>celestial globe</strong> shown is a real object made by Jodocus Hondius in 1600. Vermeer reproduced it with such accuracy that scholars can identify specific constellations. The painting on the wall behind the scholar depicts Moses in the bulrushes, possibly symbolizing the search for knowledge or divine guidance.</p>
<p>Some art historians believe the model was <strong>Antonie van Leeuwenhoek</strong>, the pioneering microbiologist who was born in Delft the same year as Vermeer. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> acquired the painting in 1983. It forms a pair with The Geographer, now in Frankfurt.</p>`,
      faqs: [
        { question: "Who is the astronomer in the painting?", answer: "Possibly <strong>Antonie van Leeuwenhoek</strong>, the famous scientist. He was born the same year as <a href=\"/apps/masterpieces/artist/johannes-vermeer\"><strong>Vermeer</strong></a> in Delft and later handled the artist's estate." },
        { question: "Is the celestial globe real?", answer: "Yes, it's a <strong>Jodocus Hondius globe from 1600</strong>. Vermeer painted it so accurately that astronomers can identify the constellations depicted." },
        { question: "Where can I see The Astronomer?", answer: "The painting is displayed at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. It was acquired by the museum in 1983." }
      ]
    },

    // === FRENCH MASTERS ===
    {
      slug: 'liberty-leading-people-delacroix',
      description: `<p><a href="/apps/masterpieces/artist/eugene-delacroix"><strong>Eugène Delacroix</strong></a> painted Liberty Leading the People in 1830, just months after the July Revolution that overthrew King Charles X. The allegorical figure of Liberty, bare-breasted and holding the tricolor flag, strides over fallen bodies while leading armed citizens forward. The towers of Notre-Dame rise through the gunsmoke behind her.</p>
<p>This isn't purely allegorical. Delacroix painted actual Parisians fighting alongside Liberty: a bourgeois in a top hat, a street urchin with pistols, workers and students. The artist himself may appear as the figure in the top hat. The <strong>raw energy</strong> and violence shocked contemporary viewers accustomed to idealized history paintings.</p>
<p>The French government purchased the painting but quickly hid it away, considering it too inflammatory for public display. It hung in the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> from 1874 onward, becoming a symbol of French republicanism. The image has influenced everything from postage stamps to Coldplay album covers.</p>`,
      faqs: [
        { question: "What revolution does the painting depict?", answer: "The <strong>July Revolution of 1830</strong>, which overthrew King Charles X and installed Louis-Philippe. <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Delacroix</strong></a> witnessed the fighting in Paris." },
        { question: "Who is the woman in the painting?", answer: "She's <strong>Marianne</strong>, the allegorical figure of Liberty and the French Republic. Delacroix combined classical idealism with contemporary realism in her depiction." },
        { question: "How big is Liberty Leading the People?", answer: "The painting measures <strong>260 × 325 cm</strong> (102 × 128 inches). It dominates the gallery at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> where it hangs." },
        { question: "Is Delacroix in the painting?", answer: "Possibly. Many scholars believe the <strong>bourgeois gentleman</strong> with the top hat and rifle is a self-portrait of the artist." }
      ]
    },
    {
      slug: 'coronation-napoleon-david',
      description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> documented Napoleon's coronation at Notre-Dame Cathedral on December 2, 1804. The massive canvas, over 10 meters wide, took nearly three years to complete. Rather than showing Napoleon receiving the crown from Pope Pius VII, David chose the moment when Napoleon crowns his wife Joséphine as Empress.</p>
<p>David made several diplomatic alterations to reality. Napoleon's mother, who actually boycotted the ceremony, appears prominently in the gallery. The Pope's gesture was changed from passive resignation to seeming blessing. Even Napoleon's height was subtly increased. Over 150 figures populate the scene, each portrait painted from life.</p>
<p>The painting hung in the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> until 1889, when it moved to Versailles. It returned to the Louvre in 1889. A full-size replica that David painted for Napoleon hangs at <strong>Versailles</strong>.</p>`,
      faqs: [
        { question: "How big is The Coronation of Napoleon?", answer: "It measures <strong>621 × 979 cm</strong> (20.4 × 32.1 feet), making it one of the largest paintings at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
        { question: "Why isn't the Pope crowning Napoleon?", answer: "<a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> chose to show Napoleon crowning Joséphine instead. Napoleon had actually placed the crown on his own head, asserting his independence from papal authority." },
        { question: "Did Napoleon's mother attend the coronation?", answer: "No, she <strong>boycotted the ceremony</strong> due to family conflicts. David included her anyway on Napoleon's orders, seating her prominently in the gallery." }
      ]
    },
    {
      slug: 'raft-of-medusa-gericault',
      description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> created this monumental painting in 1819, depicting the aftermath of a real maritime disaster. In 1816, the French frigate Méduse ran aground off Mauritania. The captain and officers took the lifeboats, leaving 147 soldiers and passengers on a makeshift raft. Only 15 survived after 13 days of starvation, dehydration, and cannibalism.</p>
<p>Géricault researched obsessively. He interviewed survivors, studied corpses in morgues, and built a scale model of the raft in his studio. The painting captures the moment survivors spot a distant ship, their <strong>desperate hope</strong> rendered in a diagonal composition rising toward a tiny figure waving a cloth. The <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>browns and grays</strong></a> of death dominate the canvas.</p>
<p>The scandal was political: the incompetent captain had received his position through aristocratic connections after the Bourbon restoration. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> acquired the painting after Géricault's death in 1824. He was just 32.</p>`,
      faqs: [
        { question: "Was the Medusa a real ship?", answer: "Yes. The French frigate <strong>Méduse</strong> ran aground on July 2, 1816. The disaster killed at least 132 of the 147 people abandoned on a raft." },
        { question: "How big is the painting?", answer: "It measures <strong>491 × 716 cm</strong> (16.1 × 23.5 feet). <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault</strong></a> worked on such a scale that he needed a specially built studio." },
        { question: "Where can I see The Raft of the Medusa?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>, in the same wing as other large-scale French paintings." },
        { question: "Did Géricault witness the event?", answer: "No, but he <strong>researched extensively</strong>: interviewing survivors, studying cadavers, and having a carpenter build a replica of the raft." }
      ]
    },
    {
      slug: 'grande-odalisque-ingres',
      description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted this reclining nude in 1814 for Napoleon's sister, Queen Caroline of Naples. The odalisque (a female slave or concubine in a harem) reclines on silks and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue drapery</strong></a>, looking back over her shoulder at the viewer. She holds a peacock-feather fan and an opium pipe rests nearby.</p>
<p>Critics immediately noticed anatomical impossibilities. Her <strong>spine appears to have three extra vertebrae</strong>, elongating her back beyond human limits. Her left arm is too long, her pelvis twisted at an impossible angle. Ingres knew anatomy perfectly well. These distortions were deliberate, creating an ideal of beauty that transcends reality.</p>
<p>The painting initially received harsh criticism for its "boneless" figure. Public opinion shifted over decades, and the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> acquired it in 1899. It influenced artists from Manet to Picasso.</p>`,
      faqs: [
        { question: "Why does her back look so long?", answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> deliberately added <strong>three extra vertebrae</strong> to elongate her spine. Critics mocked this, but the distortion creates an idealized sensuality." },
        { question: "What is an odalisque?", answer: "An <strong>odalisque</strong> was a female slave or concubine in an Ottoman harem. European artists used the theme to paint exotic nudes for wealthy patrons." },
        { question: "Where is La Grande Odalisque displayed?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. It measures 91 × 162 cm (35.8 × 63.8 inches)." }
      ]
    },
    {
      slug: 'turkish-bath-ingres',
      description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> completed The Turkish Bath in 1862, when he was 82 years old. The circular canvas overflows with nude women bathing, lounging, and making music in a harem bathhouse. He based the scene partly on letters from Lady Mary Wortley Montagu describing Turkish baths she visited in 1717.</p>
<p>Ingres reworked this painting several times over years. He recycled figures from earlier works, including the central figure playing a stringed instrument, based on his <strong>Bather of Valpinçon</strong> from 50 years earlier. The <a href="https://luxurywallart.com/collections/neutral-art" target="_blank" rel="noopener"><strong>flesh tones</strong></a> range from cool marble to warm pink, creating visual variety among the intertwined bodies.</p>
<p>Napoleon's cousin, Prince Napoleon, originally purchased the painting but his wife found it too scandalous. It passed through several collections before the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> acquired it in 1911. The circular format, unusual for such a large work, creates a voyeuristic keyhole effect.</p>`,
      faqs: [
        { question: "How old was Ingres when he painted this?", answer: "<a href=\"/apps/masterpieces/artist/jean-auguste-dominique-ingres\"><strong>Ingres</strong></a> was <strong>82 years old</strong> when he completed The Turkish Bath in 1862. He continued refining it even after initial completion." },
        { question: "Why is it circular?", answer: "The <strong>tondo format</strong> creates a keyhole or peephole effect, enhancing the voyeuristic nature of the harem scene. It measures 108 cm (42.5 inches) in diameter." },
        { question: "Did Ingres ever visit Turkey?", answer: "No. He based the scene on written accounts, particularly letters from <strong>Lady Mary Wortley Montagu</strong> who visited Turkish baths in 1717." }
      ]
    },

    // === ITALIAN MASTERS ===
    {
      slug: 'wedding-at-cana-veronese',
      description: `<p><a href="/apps/masterpieces/artist/paolo-veronese"><strong>Paolo Veronese</strong></a> painted The Wedding at Cana between 1562 and 1563 for the refectory of San Giorgio Maggiore monastery in Venice. The enormous canvas depicts Christ's first miracle: turning water into wine at a wedding feast. Over 130 figures populate the scene, dressed in contemporary Venetian fashion rather than biblical costume.</p>
<p>Veronese included portraits of European monarchs and even fellow artists. The musicians in the foreground reputedly include <strong>Titian, Tintoretto, Bassano, and Veronese himself</strong> playing instruments. The <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>brilliant colors</strong></a> showcase Venetian textile wealth: silks, brocades, and velvets in every shade.</p>
<p>Napoleon's troops seized the painting in 1797, cutting it from its frame and rolling it for transport to Paris. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> has displayed it since then. At nearly 70 square meters, it's the largest painting in the museum.</p>`,
      faqs: [
        { question: "How big is The Wedding at Cana?", answer: "It measures <strong>677 × 994 cm</strong> (22.2 × 32.6 feet), making it the largest painting in the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
        { question: "Are the musicians real artists?", answer: "According to tradition, <a href=\"/apps/masterpieces/artist/paolo-veronese\"><strong>Veronese</strong></a> painted himself and fellow Venetian masters <strong>Titian, Tintoretto, and Bassano</strong> as the musicians." },
        { question: "How did the painting reach Paris?", answer: "<strong>Napoleon's troops</strong> removed it from Venice in 1797. They cut it from its frame and rolled it for transport. It never returned to Italy." }
      ]
    },
    {
      slug: 'death-of-virgin-caravaggio',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted The Death of the Virgin around 1604-1606 for the Carmelite church of Santa Maria della Scala in Rome. The painting was rejected as scandalous. The Virgin Mary lies dead, her body bloated, feet bare and dirty, surrounded by grieving apostles. A <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>vast red curtain</strong></a> sweeps across the upper canvas.</p>
<p>Rumors spread that Caravaggio used a drowned prostitute from the Tiber as his model for the Virgin. True or not, the <strong>unflinching realism</strong> violated every convention of religious art. The barefoot apostles, the corpse-like pallor, the complete absence of heavenly glory: all offended the commissioning monks.</p>
<p>The Duke of Mantua purchased the rejected painting on Peter Paul Rubens' advice. It passed through English and French royal collections before reaching the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>. What the monks found sacrilegious, later generations recognized as revolutionary.</p>`,
      faqs: [
        { question: "Why was this painting rejected?", answer: "The Carmelite monks found it <strong>too realistic and undignified</strong>. Rumors claimed <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a> used a drowned prostitute as his model for the Virgin Mary." },
        { question: "Who bought the rejected painting?", answer: "The <strong>Duke of Mantua</strong> purchased it on the recommendation of Peter Paul Rubens, who recognized its artistic importance." },
        { question: "How big is The Death of the Virgin?", answer: "The painting measures <strong>369 × 245 cm</strong> (145.3 × 96.5 inches). It hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." }
      ]
    },
    {
      slug: 'bathsheba-bath-rembrandt',
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted Bathsheba at Her Bath in 1654, depicting the biblical story of King David spying on Bathsheba bathing. Rather than showing the seduction directly, Rembrandt captures the moment Bathsheba reads David's summons, her expression thoughtful and melancholy. She knows what will follow: adultery, pregnancy, and the murder of her husband.</p>
<p>The model was almost certainly <strong>Hendrickje Stoffels</strong>, Rembrandt's common-law wife and mother of his daughter. She posed pregnant, adding poignancy to the biblical narrative. The <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>golden flesh tones</strong></a> glow against the dark background, Rembrandt's characteristic warmth suffusing even this morally complex scene.</p>
<p>The painting entered French royal collections in 1784 and moved to the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> after the Revolution. Modern X-rays reveal that Rembrandt originally painted an old servant behind Bathsheba but later removed her.</p>`,
      faqs: [
        { question: "Who was Rembrandt's model?", answer: "<strong>Hendrickje Stoffels</strong>, <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> common-law wife, posed for Bathsheba. She appears pregnant in the painting." },
        { question: "What is Bathsheba holding?", answer: "She holds <strong>King David's letter</strong> summoning her to the palace. The biblical story ends with David having her husband killed in battle." },
        { question: "Where is this painting displayed?", answer: "Bathsheba at Her Bath hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. It measures 142 × 142 cm (55.9 inches square)." }
      ]
    },
    {
      slug: 'portrait-castiglione-raphael',
      description: `<p><a href="/apps/masterpieces/artist/raphael"><strong>Raphael</strong></a> painted this portrait of Baldassare Castiglione around 1514-1515. Castiglione was a diplomat, soldier, and author of "The Book of the Courtier," a defining text of <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> culture that described the ideal gentleman. The portrait reflects those ideals: calm intelligence, understated elegance, effortless dignity.</p>
<p>Castiglione wears somber <strong>black and gray clothing</strong> with a blue turban-like cap, fashionable among Italian intellectuals. The palette is deliberately muted, drawing attention to his thoughtful gaze and gentle expression. Rembrandt so admired this painting that he made a sketch of it and incorporated its composition into his self-portraits.</p>
<p>The painting remained in Castiglione's family until 1630, when it was sold to Cardinal Mazarin. Louis XIV acquired it for France, and it entered the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> after the Revolution.</p>`,
      faqs: [
        { question: "Who was Baldassare Castiglione?", answer: "A <strong>Renaissance diplomat and writer</strong> whose book 'The Book of the Courtier' defined ideals of gentlemanly behavior for generations. <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> was his close friend." },
        { question: "Why is the color palette so muted?", answer: "The <strong>blacks, grays, and blues</strong> reflect Castiglione's philosophy of elegant understatement. True nobility didn't need flashy display." },
        { question: "Where can I see this portrait?", answer: "The painting hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. It influenced later artists including Rembrandt and Titian." }
      ]
    },
    {
      slug: 'man-with-glove-titian',
      description: `<p><a href="/apps/masterpieces/artist/titian"><strong>Titian</strong></a> painted this portrait around 1520-1523. The young man's identity remains unknown, though scholars have proposed various Venetian nobles. He wears elegant <a href="https://luxurywallart.com/collections/black-and-white-artwork" target="_blank" rel="noopener"><strong>black and white</strong></a> clothing and holds a glove loosely in one hand while wearing another. His expression is serious, slightly melancholy, intensely present.</p>
<p>This portrait established a new standard for aristocratic portraiture. The <strong>psychological depth</strong>, the restrained color scheme, the three-quarter pose with hands prominently displayed: all these conventions would dominate European portrait painting for centuries. The hands, particularly the gloved one, receive as much attention as the face.</p>
<p>The painting entered the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> collections in 1671 as part of the purchase of the banker Jabach's art. It influenced Rembrandt, Van Dyck, and countless later portraitists who studied its balance of formality and intimacy.</p>`,
      faqs: [
        { question: "Who is the man in the portrait?", answer: "His identity is <strong>unknown</strong>. Various Venetian nobles have been proposed, but <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a> left no documentation identifying the sitter." },
        { question: "Why are the gloves important?", answer: "<strong>Gloves symbolized aristocratic status</strong> in Renaissance portraiture. The way the man holds them, casually yet deliberately, communicates refinement and self-possession." },
        { question: "Where is this portrait displayed?", answer: "Man with a Glove hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. It measures 100 × 89 cm (39.4 × 35 inches)." }
      ]
    },

    // === FLEMISH ===
    {
      slug: 'madonna-chancellor-rolin-van-eyck',
      description: `<p><a href="/apps/masterpieces/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> painted The Madonna of Chancellor Rolin around 1435 for Nicolas Rolin, chancellor to the Duke of Burgundy. Rolin kneels before the Virgin and Child in a luxurious loggia with columns opening onto an extraordinarily detailed landscape. A <strong>tiny river town</strong> visible through the arches is so precisely rendered that historians have tried to identify specific buildings.</p>
<p>The chancellor commissioned himself depicted at the same scale as the Virgin, without any saint interceding on his behalf. This unprecedented presumption may reflect his immense political power. Van Eyck lavished attention on every surface: the <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold brocade</strong></a> of Rolin's robe, the crown jewels of the Christ child, the distant mountains fading into atmospheric haze.</p>
<p>The painting originally hung in the cathedral of Autun, Rolin's birthplace. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> acquired it during the Revolution. Modern magnification reveals microscopic details invisible to the naked eye.</p>`,
      faqs: [
        { question: "Who was Chancellor Rolin?", answer: "<strong>Nicolas Rolin</strong> served as chancellor to Philip the Good, Duke of Burgundy, for 40 years. He was one of the most powerful men in Europe." },
        { question: "What city appears in the background?", answer: "Scholars debate the identity. Candidates include <strong>Lyon, Maastricht, Autun, and Liège</strong>. <a href=\"/apps/masterpieces/artist/jan-van-eyck\"><strong>Van Eyck</strong></a> may have combined elements from multiple cities." },
        { question: "Where can I see this painting?", answer: "The Madonna of Chancellor Rolin hangs at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>. It measures 66 × 62 cm (26 × 24.4 inches)." }
      ]
    },

    // === ANCIENT ART ===
    {
      slug: 'winged-victory-samothrace',
      description: `<p>The Winged Victory of Samothrace, also called Nike of Samothrace, dates to approximately 190 BCE. This <a href="/apps/masterpieces/movement/classical-greek-roman-sculpture"><strong>Hellenistic Greek sculpture</strong></a> depicts Nike, the goddess of victory, alighting on the prow of a warship. Her wings spread wide, her drapery whipped by sea wind, she celebrates a naval triumph.</p>
<p>French archaeologists discovered the statue in 1863 on the island of Samothrace in the Aegean Sea. It arrived at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in 118 fragments and was painstakingly reconstructed. The head and arms were never found, though a single hand appeared decades later. The statue originally stood on a hilltop sanctuary overlooking the sea.</p>
<p>The sculptor mastered the illusion of <strong>wet fabric clinging to the body</strong>, revealing the form beneath while suggesting powerful forward motion. Standing at the top of the Daru staircase, the Nike remains one of the Louvre's most photographed works.</p>`,
      faqs: [
        { question: "How tall is the Winged Victory?", answer: "The statue stands <strong>328 cm (10.8 feet) tall</strong>, including its base shaped like a ship's prow. With the staircase mounting, it towers over viewers at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
        { question: "Why is the head missing?", answer: "The <strong>head and arms were never recovered</strong> from the excavation site on Samothrace. A single hand was found decades later and is now displayed nearby." },
        { question: "Who made this sculpture?", answer: "The sculptor is <strong>unknown</strong>. The style suggests a Rhodian workshop around 190 BCE, possibly commemorating a <a href=\"/apps/masterpieces/movement/classical-greek-roman-sculpture\"><strong>Hellenistic</strong></a> naval victory." }
      ]
    },
    {
      slug: 'venus-de-milo',
      description: `<p>The Venus de Milo, discovered in 1820 on the Greek island of Milos, represents either <strong>Aphrodite</strong>, goddess of love, or the sea goddess Amphitrite. Carved from Parian marble around 130-100 BCE, the statue combines an idealized upper body with a more naturalistic treatment of drapery pooling at the hips.</p>
<p>A Greek peasant found the statue in two main pieces on his land. French naval officers quickly negotiated its purchase and sent it to Paris as a gift for King Louis XVIII. The arms were already missing at discovery, sparking endless speculation about her original pose. Was she holding a mirror? An apple? The arms of a male companion?</p>
<p>The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> prominently displayed the Venus as a replacement for the Medici Venus, which Napoleon had been forced to return to Italy. She became a symbol of <a href="/apps/masterpieces/movement/classical-greek-roman-sculpture"><strong>Classical Greek</strong></a> beauty, though the proportions are actually Hellenistic.</p>`,
      faqs: [
        { question: "Where was the Venus de Milo found?", answer: "A farmer discovered the statue in <strong>1820 on Milos</strong> (Melos), a Greek island in the Aegean Sea. French officials quickly acquired it for the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
        { question: "What was she originally holding?", answer: "Nobody knows. Theories include a <strong>mirror, apple, shield, or the arms of a male figure</strong>. The arms were already missing when the statue was discovered." },
        { question: "How tall is the Venus de Milo?", answer: "She stands <strong>204 cm (6.7 feet) tall</strong>, carved from Parian marble, prized in antiquity for its pure white color and fine grain." }
      ]
    },
    {
      slug: 'great-sphinx-tanis',
      description: `<p>The Great Sphinx of Tanis is one of the largest sphinxes outside Egypt, carved from pink granite around 2600 BCE during the Old Kingdom. The <strong>lion's body with a royal head</strong> represents pharaonic power, though the features were recarved multiple times by later rulers who added their own names to claim the monument.</p>
<p>French archaeologists excavated this sphinx at Tanis in the Nile Delta in 1825. Tanis served as Egypt's capital during the 21st and 22nd Dynasties, and earlier monuments were moved there from across Egypt. The inscriptions on this sphinx name several pharaohs spanning over a thousand years.</p>
<p>The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> displays this sphinx in its Egyptian antiquities galleries. Despite later alterations, the powerful shoulders and majestic scale convey the authority the original sculptors intended.</p>`,
      faqs: [
        { question: "How big is the Sphinx of Tanis?", answer: "It measures <strong>183 cm high × 480 cm long</strong> (6 × 15.7 feet). Carved from pink granite, it weighs several tons and required special transport to the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>." },
        { question: "Why does it have multiple pharaohs' names?", answer: "Later rulers <strong>recarved the face and added their cartouches</strong> to claim ownership. This was common practice in ancient Egypt, especially with impressive earlier monuments." },
        { question: "Where was it originally made?", answer: "The sphinx was carved around <strong>2600 BCE during Egypt's Old Kingdom</strong>, then moved to Tanis centuries later when that city became the capital." }
      ]
    },
    {
      slug: 'seated-scribe-louvre',
      description: `<p>The Seated Scribe dates to approximately 2500 BCE, carved during Egypt's 4th or 5th Dynasty. This painted limestone figure depicts a <strong>scribe at work</strong>, cross-legged with a papyrus scroll across his lap, his eyes alert and hands ready to write. The rock crystal eyes, rimmed with copper, create an uncanny lifelike gaze.</p>
<p>Unlike idealized royal statues, this scribe shows realistic details: slight paunch, sagging chest muscles, attentive posture. Scribes held high status in Egyptian society, one of the few paths to advancement for non-royals. The figure's intelligence and readiness radiate across millennia.</p>
<p>French Egyptologist Auguste Mariette discovered the statue at Saqqara in 1850. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> displays it as one of the finest examples of Old Kingdom sculpture, the painted surface remarkably preserved after 4,500 years.</p>`,
      faqs: [
        { question: "What are the eyes made of?", answer: "The eyes are <strong>rock crystal with copper rims</strong> and white magnesite. The pupils are drilled and filled with dark material, creating an incredibly lifelike appearance." },
        { question: "Who was this scribe?", answer: "His identity is <strong>unknown</strong>. His pose and setting suggest high status, possibly a royal official during Egypt's Old Kingdom around 2500 BCE." },
        { question: "Where can I see the Seated Scribe?", answer: "The statue is displayed in the Egyptian antiquities galleries at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre in Paris</strong></a>." }
      ]
    },
    {
      slug: 'code-of-hammurabi',
      description: `<p>The Code of Hammurabi, carved around 1754 BCE, preserves one of the earliest known written legal codes. This diorite stele stands over two meters tall, its upper section showing King Hammurabi receiving authority from Shamash, the sun god of justice. Below, 282 laws are inscribed in Akkadian cuneiform covering family, property, trade, and labor.</p>
<p>The laws follow the famous principle of <strong>lex talionis</strong>: "an eye for an eye." Punishments varied by social class, with harsher penalties for crimes against nobles than commoners. The code reveals much about <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>Babylonian society</strong></a>: arranged marriages, divorce rights, medical malpractice, even wages for various professions.</p>
<p>French archaeologists discovered the stele at Susa, Iran, in 1901-1902. An Elamite king had carried it off as war booty around 1150 BCE. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> now displays it as a monument to ancient jurisprudence.</p>`,
      faqs: [
        { question: "What is the Code of Hammurabi?", answer: "One of the <strong>oldest known written legal codes</strong>, containing 282 laws covering family, property, trade, and criminal matters in ancient Babylon." },
        { question: "What does 'an eye for an eye' mean here?", answer: "The principle of <strong>lex talionis</strong>: punishments should match the crime. Though penalties actually varied by social class in Hammurabi's Babylon." },
        { question: "Where was the stele found?", answer: "French archaeologists found it at <strong>Susa in Iran</strong>, not Babylon. An Elamite king had taken it as war booty around 1150 BCE." },
        { question: "How big is the Code of Hammurabi?", answer: "The stele stands <strong>225 cm (7.4 feet) tall</strong>. It's carved from diorite, one of the hardest stones used in ancient sculpture." }
      ]
    },
    {
      slug: 'winged-bulls-khorsabad-louvre',
      description: `<p>These massive winged human-headed bulls, called <strong>lamassu</strong>, once guarded the palace of Assyrian king Sargon II at Khorsabad. Carved around 713-706 BCE from single blocks of gypsum alabaster, each figure stands over four meters tall and weighs approximately 30 tons. Five legs allowed the lamassu to appear stationary from the front and striding from the side.</p>
<p>The elaborate detailing includes curled beards, feathered wings, and muscular bodies covered in inscribed cuneiform texts. These guardian spirits combined human intelligence (the bearded face), leonine power (the body), and divine reach (the wings) to protect the palace from evil spirits and human enemies alike.</p>
<p>French archaeologist Paul-Émile Botta excavated Khorsabad beginning in 1843, the first major Assyrian site explored by Europeans. Transporting these colossal sculptures to the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> required engineering innovation and considerable expense.</p>`,
      faqs: [
        { question: "What is a lamassu?", answer: "A <strong>protective spirit</strong> in Mesopotamian mythology, combining human head, bull or lion body, and eagle wings. They guarded palace entrances against evil." },
        { question: "Why do they have five legs?", answer: "The <strong>fifth leg</strong> creates an optical illusion: viewed from the front, the lamassu appears still; from the side, it appears to stride forward." },
        { question: "How big are these sculptures?", answer: "Each stands approximately <strong>440 cm (14.4 feet) tall</strong> and weighs around 30 tons. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> has several from Khorsabad." },
        { question: "Where was Khorsabad?", answer: "<strong>Khorsabad</strong> (ancient Dur-Sharrukin) was the capital built by Assyrian king Sargon II in present-day northern Iraq, near Mosul." }
      ]
    }
  ];

  let updated = 0;
  let notFound = 0;

  for (const item of updates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: item.slug }
    });

    if (!artwork) {
      console.log(`NOT FOUND: ${item.slug}`);
      notFound++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        description: item.description,
        faqs: item.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${item.slug}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
