import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Batch 5: 10 artists
const artistUpdates: Record<string, { bioFull: string; faqs: { question: string; answer: string }[] }> = {
  "jusepe-de-ribera": {
    bioFull: `<p><strong>Jusepe de Ribera</strong> (1591–1652) was a Spanish painter who became the dominant artistic force in Naples. Born near Valencia to a shoemaker's family, he reportedly trained under Francisco Ribalta before leaving for Italy as a young man. He lived in Rome from 1613 to 1616, associating with followers of Caravaggio like Gerrit van Honthorst. In 1616, he settled permanently in Naples (then a Spanish territory), marrying Caterina Azzolino, whose father's connections helped establish his career. Ribera signed his works "Jusepe de Ribera, español," never forgetting his roots.</p>

<p>His style fused <a href="/movement/baroque"><strong>Baroque</strong></a> drama with unflinching realism. Early works featured stark <strong>tenebrism</strong>, figures emerging from deep shadow in the manner of Caravaggio. By the 1630s, his palette lightened and his brushwork loosened. Nearly half his output consists of half-length saints, philosophers, and allegorical figures, often modeled after fishermen, dockworkers, and beggars from Naples' streets. He was the first Spanish painter to seriously explore mythological subjects, like <em>Apollo and Marsyas</em>. His religious works could be disturbingly violent; the <em>Martyrdom of Saint Bartholomew</em> shows its subject being flayed alive with clinical precision.</p>

<p>Ribera also excelled as a printmaker. His etchings rank among the finest of the Baroque period. Major works include <em>Saint Januarius Emerging from the Furnace</em> in Naples Cathedral and the <em>Adoration of the Shepherds</em> at the <a href="/museum/louvre"><strong>Louvre</strong></a>. The <a href="/museum/museo-del-prado"><strong>Prado</strong></a> holds 56 of his paintings, while the <a href="/museum/met"><strong>Metropolitan Museum of Art</strong></a>, <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, and <a href="/museum/hermitage"><strong>Hermitage</strong></a> also display his work.</p>`,
    faqs: [
      { question: "What art movement was Jusepe de Ribera part of?", answer: `Ribera was a leading <a href="/movement/baroque"><strong>Baroque</strong></a> painter and a prominent follower of Caravaggio, known for his dramatic use of tenebrism and stark chiaroscuro effects.` },
      { question: "Where can I see Jusepe de Ribera's paintings?", answer: `The <a href="/museum/museo-del-prado"><strong>Prado</strong></a> in Madrid holds 56 paintings. Works also hang at the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and Naples Cathedral.` },
      { question: "What subjects did Jusepe de Ribera paint?", answer: `Nearly half his work depicts <strong>saints, philosophers, and beggars</strong>. He also painted mythological scenes and was known for graphically realistic martyrdom scenes.` },
      { question: "Why did Ribera move to Naples?", answer: `He left Rome in 1616, reportedly to escape creditors. Naples was a <strong>Spanish territory</strong>, making it comfortable for a Spaniard abroad. He stayed the rest of his life.` },
      { question: "What technique is Ribera known for?", answer: `Ribera mastered <strong>tenebrism</strong>, a dramatic style using violent contrasts of light and dark, where figures seem to emerge from deep shadow.` },
      { question: "Was Jusepe de Ribera a printmaker?", answer: `Yes, his <strong>etchings rank among the finest of the Baroque era</strong>. He was one of few 17th-century Spanish artists to produce numerous drawings and prints.` }
    ]
  },

  "nikolai-ge": {
    bioFull: `<p><strong>Nikolai Ge</strong> (1831–1894) was Russia's most controversial religious painter. Born in Voronezh to a Ukrainian noble family of French origin, he studied physics and mathematics before switching to art in 1850 at the Imperial Academy in Saint Petersburg. His 1857 gold medal for <em>The Witch of Endor Invoking the Spirit of the Prophet Samuel</em> funded study abroad. In Rome, he met the great Russian history painter Alexander Ivanov, who deeply influenced his approach to biblical subjects.</p>

<p><em>The Last Supper</em> (1863) made Ge famous overnight. The Academy named him professor for this work alone. Unlike traditional depictions, Ge showed Christ and Judas in psychological confrontation rather than symbolic arrangement. He joined the <a href="/movement/realism"><strong>Peredvizhniki</strong></a> (Wanderers) movement in the 1870s, exhibiting with them and rejecting Academic conventions in favor of <strong>realist depictions of social and historical truth</strong>. His 1871 <em>Peter the Great Interrogates Tsarevich Alexey</em> dramatized autocratic power's human cost through unflinching psychological realism.</p>

<p>In 1882, Ge met Leo Tolstoy and adopted his teachings, causing family conflict. The friendship sparked his "Gospel Series," exploring New Testament themes through moral lenses. These late works faced censorship: <em>Quod Est Veritas?</em> (1890) was expelled from exhibition, <em>The Crucifixion</em> (1894) was banned by Tsar Alexander III. Ge died on his Ukrainian estate in 1894. His masterpieces hang at the <a href="/museum/state-russian-museum"><strong>State Russian Museum</strong></a> and <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Nikolai Ge part of?", answer: `Ge was a leading figure in the <a href="/movement/realism"><strong>Peredvizhniki</strong></a> (Wanderers) movement, which rejected Academic rigidity in favor of socially engaged realist painting.` },
      { question: "Where can I see Nikolai Ge's paintings?", answer: `His major works are at the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow and the <a href="/museum/state-russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg.` },
      { question: "What is Nikolai Ge's most famous painting?", answer: `<em>The Last Supper</em> (1863) made him famous and earned him a professorship. It shows <strong>Christ and Judas in psychological confrontation</strong> rather than traditional arrangement.` },
      { question: "What was Nikolai Ge's connection to Leo Tolstoy?", answer: `They met in 1882 and became close friends. Ge <strong>adopted Tolstoy's teachings</strong>, which influenced his late religious paintings and caused conflict with his family.` },
      { question: "Were Nikolai Ge's paintings censored?", answer: `Yes, his late religious works faced <strong>Imperial censorship</strong>. <em>Quod Est Veritas?</em> was expelled from exhibition, and <em>The Crucifixion</em> was banned by Tsar Alexander III.` }
    ]
  },

  "paolo-veronese": {
    bioFull: `<p><strong>Paolo Veronese</strong> (1528–1588) painted Venice at its most opulent. Born Paolo Caliari in Verona (hence his nickname), he was the fifth child of a stonecutter. By fourteen, he had abandoned stone for canvas, apprenticing to the painter Antonio Badile. In 1553, he moved to Venice and never left. Along with Titian and Tintoretto, he formed the great trio that dominated <a href="/movement/renaissance"><strong>Venetian Renaissance</strong></a> painting.</p>

<p>Veronese specialized in enormous narrative paintings filled with <strong>majestic architecture, glittering pageantry, and brilliant color</strong>. His <em>Wedding at Cana</em> (1562–63) measures nearly 70 square meters and depicts Christ's first miracle as a lavish Venetian feast, crowded with over 130 figures in contemporary dress. Napoleon's soldiers looted it from San Giorgio Maggiore in 1797; it now hangs in the <a href="/museum/louvre"><strong>Louvre</strong></a> opposite the <em>Mona Lisa</em>. His <em>Feast in the House of Levi</em> (1573) caused trouble with the Inquisition, who questioned the inclusion of "buffoons, drunkards, Germans, dwarfs, and similar vulgarities" in a sacred scene. Veronese's solution was practical: he simply changed the title.</p>

<p>He decorated the Doge's Palace and numerous Venetian churches, often working with architect Andrea Palladio. His influence stretched across centuries, from Rubens and Van Dyck to Tiepolo and Delacroix. He died in 1588 from a fever caught at a religious procession and was buried in San Sebastiano, the church he had almost single-handedly decorated. His works fill the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and Venice's <strong>Gallerie dell'Accademia</strong>.</p>`,
    faqs: [
      { question: "What art movement was Paolo Veronese part of?", answer: `Veronese was a master of the <a href="/movement/renaissance"><strong>Venetian Renaissance</strong></a>, known as one of the "great trio" with Titian and Tintoretto who dominated 16th-century Venice.` },
      { question: "Where can I see Paolo Veronese's paintings?", answer: `<em>The Wedding at Cana</em> is at the <a href="/museum/louvre"><strong>Louvre</strong></a>. Other works are at Venice's Gallerie dell'Accademia, the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>, and <a href="/museum/met"><strong>Met</strong></a>.` },
      { question: "What is Veronese's largest painting?", answer: `<em>The Wedding at Cana</em> (1562–63) covers nearly <strong>70 square meters</strong>, making it the largest painting in the Louvre's collection. It shows over 130 figures.` },
      { question: "Did Veronese have trouble with the Inquisition?", answer: `Yes, in 1573 they questioned his <em>Last Supper</em> for including "buffoons and drunkards." Veronese's solution: he <strong>simply renamed it</strong> <em>Feast in the House of Levi</em>.` },
      { question: "What was Veronese's painting style?", answer: `He created <strong>enormous narrative paintings</strong> filled with rich color, magnificent architecture, and crowded pageantry, often depicting biblical scenes as Venetian banquets.` }
    ]
  },

  "theodore-chasseriau": {
    bioFull: `<p><strong>Théodore Chassériau</strong> (1819–1856) fused classical precision with Romantic passion. Born in the Dominican Republic to a French diplomat, he moved to Paris at age one. By eleven, he had entered the studio of Jean-Auguste-Dominique Ingres, becoming the master's favorite pupil. Ingres called him his "truest disciple." The relationship soured when Chassériau fell under the spell of Ingres's rival, Eugène Delacroix, whose coloristic approach was everything Ingres opposed.</p>

<p>Chassériau deliberately attempted to merge the two schools: <strong>Ingres's precise linear draftsmanship with Delacroix's rich color and emotional intensity</strong>. The result was something new. His early nudes, including <em>Susanna and the Elders</em> (1839) and <em>Venus Anadyomene</em> (1839), revealed a personal ideal of female beauty. A trip to Algeria in 1846 produced <a href="/movement/orientalism"><strong>Orientalist</strong></a> works like <em>The Tepidarium</em> (1853), an erotically charged scene of Roman bathers that became one of his most celebrated paintings.</p>

<p>His most ambitious project was decorating the grand staircase of the Cour des Comptes (1844–48), painted in oil on plaster following Delacroix's technique. Much of it was destroyed during the Paris Commune. The portrait he completed at age fifteen of Prosper Marilhat made him the youngest painter represented in the <a href="/museum/louvre"><strong>Louvre</strong></a>. His influence reached Puvis de Chavannes, Gustave Moreau, and through them to Gauguin and Matisse. He died at thirty-seven. Major works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> and Louvre.</p>`,
    faqs: [
      { question: "What art movements was Théodore Chassériau associated with?", answer: `Chassériau bridged <a href="/movement/neoclassicism"><strong>Neoclassicism</strong></a> and <a href="/movement/romanticism"><strong>Romanticism</strong></a>, attempting to fuse Ingres's linear precision with Delacroix's coloristic passion. He also painted <a href="/movement/orientalism"><strong>Orientalist</strong></a> subjects.` },
      { question: "Where can I see Théodore Chassériau's paintings?", answer: `Major works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> and <a href="/museum/louvre"><strong>Louvre</strong></a> in Paris. The Louvre has a room dedicated to him.` },
      { question: "Who taught Théodore Chassériau?", answer: `<strong>Jean-Auguste-Dominique Ingres</strong> took him as a student at age eleven and called him his "truest disciple." They later had a falling-out over artistic direction.` },
      { question: "What is Chassériau's most famous painting?", answer: `<em>The Tepidarium</em> (1853) at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> is among his most celebrated works, showing an <strong>erotically charged scene of Roman bathers</strong>.` },
      { question: "How young was Chassériau when he exhibited at the Louvre?", answer: `At <strong>fifteen</strong>, his portrait of Prosper Marilhat made him the youngest painter exhibited at the Louvre, demonstrating his precocious talent.` }
    ]
  },

  "umberto-boccioni": {
    bioFull: `<p><strong>Umberto Boccioni</strong> (1882–1916) was the leading painter and sculptor of <a href="/movement/futurism"><strong>Italian Futurism</strong></a>. Born in Reggio Calabria to a government clerk whose job required constant relocations, he grew up across Italy before settling in Rome in 1899. There he trained as a draftsman and studied under Giacomo Balla, meeting fellow student Gino Severini. In 1910, he encountered Filippo Tommaso Marinetti, author of the Futurist Manifesto. Within weeks, Boccioni had signed the Manifesto of Futurist Painters and read it aloud at Turin's Politeama Chiarella theatre.</p>

<p>Boccioni became Futurism's chief theorist and most talented artist. His paintings like <em>The City Rises</em> (1910) and the <em>States of Mind</em> series captured the <strong>dynamism, speed, and chaos of modern life</strong>. He argued that sculpture should break free of traditional materials: in his 1912 Technical Manifesto of Futurist Sculpture, he proposed using glass, wood, cement, cloth, and electric lights. His bronze <em>Unique Forms of Continuity in Space</em> (1913) became the movement's defining image, a striding figure whose body seems to merge with the space around it in continuous motion.</p>

<p>World War I interrupted everything. Boccioni enlisted enthusiastically but grew disillusioned. In August 1916, during cavalry training near Verona, he was thrown from a horse and died the next day. He was thirty-three. The movement lost its most gifted voice. His sculpture appears on the Italian 20-cent euro coin. Works are at the <a href="/museum/moma"><strong>Museum of Modern Art</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>, and Milan's <strong>Museo del Novecento</strong>.</p>`,
    faqs: [
      { question: "What art movement was Umberto Boccioni part of?", answer: `Boccioni was the leading artist and chief theorist of <a href="/movement/futurism"><strong>Italian Futurism</strong></a>, signing the Futurist Manifesto in 1910 and shaping the movement's visual language.` },
      { question: "Where can I see Umberto Boccioni's sculptures?", answer: `<em>Unique Forms of Continuity in Space</em> has bronze casts at the <a href="/museum/moma"><strong>MoMA</strong></a>, <a href="/museum/met"><strong>Met</strong></a>, <a href="/museum/tate-modern"><strong>Tate Modern</strong></a>, and Milan's Museo del Novecento.` },
      { question: "What is Boccioni's most famous sculpture?", answer: `<em>Unique Forms of Continuity in Space</em> (1913) shows a striding figure merging with space. It appears on the <strong>Italian 20-cent euro coin</strong>.` },
      { question: "How did Umberto Boccioni die?", answer: `He was <strong>thrown from a horse</strong> during cavalry training near Verona in August 1916 and died the next day at age thirty-three. His death effectively ended Futurism.` },
      { question: "What subjects did Boccioni paint?", answer: `He painted <strong>modern urban life</strong>, capturing the dynamism, speed, and chaos of cities. <em>The City Rises</em> and the <em>States of Mind</em> series are his major paintings.` }
    ]
  },

  "vasily-surikov": {
    bioFull: `<p><strong>Vasily Surikov</strong> (1848–1916) is considered Russia's greatest historical painter. Born in Krasnoyarsk, Siberia, to an old Yenisei Cossack family, he grew up in a community so isolated from modern Russia that it preserved traditions from pre-Petrine times. To reach the Academy of Arts in Saint Petersburg, the young artist traveled with a caravan transporting frozen fish to the capital. His dedication to composition earned him the nickname "The Composer." He graduated in 1875 and moved to Moscow in 1877 to paint murals for the Cathedral of Christ the Saviour.</p>

<p>After settling in Moscow, Surikov began the historical paintings that would define his career. <em>The Morning of the Streltsy Execution</em> (1881) created a sensation. Pavel Tretyakov's daughter recalled that "nobody had started like that." The painting depicted Peter the Great's brutal suppression of the Streltsy rebellion with psychological intensity rather than imperial pageantry. His "Moscow trilogy" continued with <em>Menshikov in Beryozovo</em> (1883) and <em>The Boyarynya Morozova</em> (1887), both exploring the <strong>human cost of Russian autocracy through unflinching <a href="/movement/realism"><strong>Realist</strong></a> observation</strong>.</p>

<p>Surikov viewed history as deeply tragic. He knew the streltsy weren't actually executed in Red Square but painted it there anyway, prioritizing emotional truth over documentary accuracy. He joined the <strong>Peredvizhniki</strong> (Wanderers) in 1881, exhibiting with them throughout his career. His nine major historical canvases established the genre in Russian art. He died in Moscow in 1916. His work dominates the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> and <a href="/museum/state-russian-museum"><strong>Russian Museum</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Vasily Surikov part of?", answer: `Surikov was a leading <a href="/movement/realism"><strong>Realist</strong></a> and member of the Peredvizhniki (Wanderers), known for monumental historical paintings depicting Russian national tragedies.` },
      { question: "Where can I see Vasily Surikov's paintings?", answer: `His major works fill the <a href="/museum/tretyakov-gallery"><strong>Tretyakov Gallery</strong></a> in Moscow. The <a href="/museum/state-russian-museum"><strong>Russian Museum</strong></a> in Saint Petersburg also holds important pieces.` },
      { question: "What is Surikov's most famous painting?", answer: `<em>The Morning of the Streltsy Execution</em> (1881) caused a sensation, depicting <strong>Peter the Great's brutal suppression</strong> of rebellion with psychological intensity.` },
      { question: "Why was Surikov called 'The Composer'?", answer: `His contemporaries gave him this nickname for his <strong>extraordinary attention to composition</strong>, carefully arranging dozens of figures into dramatic historical tableaux.` },
      { question: "What was Surikov's approach to historical accuracy?", answer: `He prioritized <strong>emotional truth over documentary accuracy</strong>. He knew the streltsy weren't executed in Red Square but painted them there for dramatic effect.` }
    ]
  },

  "winslow-homer": {
    bioFull: `<p><strong>Winslow Homer</strong> (1836–1910) is widely regarded as the greatest American painter of the nineteenth century. Born in Boston and raised in rural Cambridge, he began his career in 1855 as an apprentice lithographer before moving to New York in 1859. When the Civil War erupted, Harper's Weekly sent him to the front as an artist-correspondent. The experience changed him fundamentally. His wartime images, from chaotic battles to quiet moments of soldier life, visually defined the conflict for the Northern public.</p>

<p>After the war, Homer turned from illustration to oil painting. <em>Prisoners from the Front</em> (1866) established his reputation as a painter of psychological depth. He painted scenes of American rural life, children playing, and African American subjects in the Reconstruction South. Two trips to England in the early 1880s proved decisive. At Cullercoats, a fishing village near Newcastle, he observed <strong>working people confronting the sea's power</strong>, a theme that would dominate his mature work.</p>

<p>In 1883, Homer moved to Prouts Neck, Maine, where he lived in near-isolation for the rest of his life. From his studio overlooking the Atlantic, he produced the great <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>seascapes</strong></a> that define his legacy: <em>The Herring Net</em>, <em>The Gulf Stream</em>, <em>Northeaster</em>. His late paintings capture the look, feel, and almost the sound of crashing waves. He died alone in his studio in 1910. The <a href="/museum/met"><strong>Metropolitan Museum</strong></a> holds <em>The Gulf Stream</em>; major works are also at the <a href="/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, and <a href="/museum/mfa-boston"><strong>Museum of Fine Arts, Boston</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Winslow Homer part of?", answer: `Homer is classified as an <a href="/movement/realism"><strong>American Realist</strong></a>, though his late seascapes transcend categorization with their focus on nature's raw power and atmospheric effects.` },
      { question: "Where can I see Winslow Homer's paintings?", answer: `The <a href="/museum/met"><strong>Metropolitan Museum</strong></a> holds <em>The Gulf Stream</em>. Major works are at the <a href="/museum/national-gallery-of-art"><strong>National Gallery</strong></a>, <a href="/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, and <a href="/museum/mfa-boston"><strong>MFA Boston</strong></a>.` },
      { question: "What subjects did Winslow Homer paint?", answer: `He painted <strong>Civil War scenes, American rural life, and powerful seascapes</strong>. His late career focused on the Maine coast and the drama of sea and storm.` },
      { question: "Did Winslow Homer serve in the Civil War?", answer: `He served as an <strong>artist-correspondent for Harper's Weekly</strong>, documenting the war through drawings and engravings that shaped how the North visualized the conflict.` },
      { question: "Where did Winslow Homer live and work?", answer: `After years in New York, he moved to <strong>Prouts Neck, Maine</strong> in 1883, living in near-isolation and producing his famous seascapes from a studio overlooking the Atlantic.` }
    ]
  },

  "andrea-mantegna": {
    bioFull: `<p><strong>Andrea Mantegna</strong> (c. 1431–1506) was the first fully <a href="/movement/renaissance"><strong>Renaissance</strong></a> artist of northern Italy. Born near Padua to a carpenter, he was apprenticed at eleven to the painter Francesco Squarcione, who ran a workshop and art school. By seventeen, Mantegna had legally separated from his master, claiming Squarcione had profited from his services without proper compensation. Padua's environment, rich with classical antiquities and humanist scholarship, shaped his lifelong passion for archaeology and his characteristically sharp, sculptural style.</p>

<p>In 1460, Marquis Ludovico III Gonzaga of Mantua hired Mantegna as court painter for the extraordinary salary of 75 lire monthly, marking the high esteem for his art. He remained in Gonzaga service for forty-six years. His masterpiece is the <strong>Camera degli Sposi</strong> (1465–74) in the Palazzo Ducale, where he covered an entire room with frescoes depicting scenes from Gonzaga life. The ceiling features a revolutionary painted oculus, a circular opening to the sky with figures peering down in dramatically foreshortened perspective. This invention of total spatial illusionism began a tradition of ceiling decoration that lasted three centuries.</p>

<p>Mantegna's <em>Lamentation over the Dead Christ</em> demonstrates his mastery of <strong>extreme foreshortening</strong>, showing Christ's body from the feet with startling realism. His influence reached Albrecht Dürer, Leonardo da Vinci, and his brother-in-law Giovanni Bellini. He died in Mantua in 1506. Works are at the <a href="/museum/brera"><strong>Pinacoteca di Brera</strong></a> in Milan, the <a href="/museum/louvre"><strong>Louvre</strong></a>, the <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, and the <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Andrea Mantegna part of?", answer: `Mantegna was the first fully <a href="/movement/renaissance"><strong>Renaissance</strong></a> artist of northern Italy, known for his mastery of perspective, classical archaeology, and sculptural clarity.` },
      { question: "Where can I see Andrea Mantegna's paintings?", answer: `The <em>Lamentation over the Dead Christ</em> is at the <a href="/museum/brera"><strong>Pinacoteca di Brera</strong></a> in Milan. The <a href="/museum/louvre"><strong>Louvre</strong></a> and <a href="/museum/national-gallery"><strong>National Gallery</strong></a> hold major works.` },
      { question: "What is the Camera degli Sposi?", answer: `Mantegna's masterpiece in Mantua's Palazzo Ducale, where he covered <strong>an entire room with frescoes</strong> (1465–74) including a revolutionary illusionistic ceiling with painted oculus.` },
      { question: "What technique is Mantegna famous for?", answer: `He mastered <strong>extreme foreshortening</strong>, as seen in his <em>Lamentation over the Dead Christ</em>, which shows Christ's body from the feet with unprecedented realism.` },
      { question: "Who employed Andrea Mantegna?", answer: `The <strong>Gonzaga family of Mantua</strong> employed him as court painter for forty-six years, starting in 1460. He was the first painter of eminence based in Mantua.` }
    ]
  },

  "felix-vallotton": {
    bioFull: `<p><strong>Félix Vallotton</strong> (1865–1925) revived the art of the woodcut and brought it into the modern age. Born in Lausanne, Switzerland, he moved to Paris at seventeen to study at the Académie Julian. Early portraits showed academic precision, influenced by visits to the <a href="/museum/louvre"><strong>Louvre</strong></a> where he studied Holbein, Ingres, and Dürer. In 1892, he joined <a href="/movement/les-nabis"><strong>Les Nabis</strong></a>, a semi-mystical group of young artists that included Pierre Bonnard and Édouard Vuillard, with whom he formed a lifelong friendship. Yet he never quite fit in, earning the nickname "le Nabi étranger" (the foreign Nabi).</p>

<p>Between 1891 and 1902, Vallotton produced over 100 woodcuts that brought him international recognition. Characterized by <strong>bold masses of black and white with minimal detail</strong>, they depicted street scenes, bathers, portraits, and the series <em>Intimités</em>, showing charged domestic encounters between men and women. These prints influenced Edvard Munch, Aubrey Beardsley, and the German Expressionists Erich Heckel and Ernst Ludwig Kirchner. Art historians credit Vallotton with reviving the woodcut as a serious artistic medium.</p>

<p>In 1899, he married Gabrielle Rodrigues-Henriques, daughter of a wealthy art dealer. Financial security allowed him to focus on painting, producing portraits, nudes, and landscapes in a cool, detached style. World War I prompted his final print series, <em>This is War</em> (1915–16). He died in Paris in 1925, a day after his sixtieth birthday. The <strong>Félix Vallotton Foundation</strong> in Lausanne preserves his legacy. Works are at the <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, <a href="/museum/met"><strong>Metropolitan Museum</strong></a>, <a href="/museum/tate-modern"><strong>Tate</strong></a>, and <a href="/museum/hermitage"><strong>Hermitage</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Félix Vallotton part of?", answer: `Vallotton joined <a href="/movement/les-nabis"><strong>Les Nabis</strong></a> in 1892, though he never quite fit the group's mystical tendencies and was nicknamed "le Nabi étranger" (the foreign Nabi).` },
      { question: "Where can I see Félix Vallotton's work?", answer: `The <a href="/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> has major works. The Félix Vallotton Foundation in Lausanne and the <a href="/museum/met"><strong>Metropolitan Museum</strong></a> also hold significant collections.` },
      { question: "What was Félix Vallotton's contribution to printmaking?", answer: `Art historians credit him with <strong>reviving the woodcut</strong> as a modern art form. His bold black-and-white prints influenced Munch, Beardsley, and the German Expressionists.` },
      { question: "What are Vallotton's Intimités prints?", answer: `A series of ten woodcuts depicting <strong>charged domestic encounters between men and women</strong>, showing psychological tension through stark contrasts of black and white.` },
      { question: "Was Félix Vallotton French or Swiss?", answer: `Born in <strong>Lausanne, Switzerland</strong>, he moved to Paris at seventeen and was naturalized as a French citizen in 1900, though he always retained his Swiss identity.` }
    ]
  },

  "hendrick-avercamp": {
    bioFull: `<p><strong>Hendrick Avercamp</strong> (1585–1634) was the first Dutch artist to specialize in winter landscapes. Born in Amsterdam and raised in Kampen after his father opened an apothecary there, he was deaf and mute from birth, known locally as "de Stomme" (the Mute). His mother's will expressed concern for her "mute and miserable" eldest son. He studied with Danish portrait painter Pieter Isaacks and perhaps David Vinckboons, whose Flemish influence, particularly that of Pieter Bruegel the Elder, shaped his approach to crowded outdoor scenes.</p>

<p>Avercamp painted during the Little Ice Age, when two-thirds of Dutch winters between 1600 and 1700 were "cold" to "very severe." The harshest occurred between 1600 and 1625, exactly when he produced his <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>winter landscapes</strong></a>. His masterpiece, <em>Winter Landscape with Ice Skaters</em>, contains over two hundred figures forming a near-encyclopedic catalog of <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> winter life: nobles, peasants, golfers on ice, horse-drawn sleighs, children with sleds, even a man relieving himself in the corner.</p>

<p>His observation was precise despite (or perhaps because of) his deafness. Unable to hear conversation, he watched intently. His technique used <strong>aerial perspective</strong>, with rich colors in front gradually fading to pale tones in the distance. He produced around one hundred paintings, all variations on his frozen theme. He never married and lived his entire adult life in Kampen, where he died in 1634. His nephew Barent Avercamp continued his style. Major works are at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a>, <a href="/museum/mauritshuis"><strong>Mauritshuis</strong></a>, and <a href="/museum/national-gallery"><strong>National Gallery</strong></a>.</p>`,
    faqs: [
      { question: "What art movement was Hendrick Avercamp part of?", answer: `Avercamp was an early <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter, the first in the Northern Netherlands to specialize in winter landscapes.` },
      { question: "Where can I see Hendrick Avercamp's paintings?", answer: `The bulk of his work is at the <a href="/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> and <a href="/museum/mauritshuis"><strong>Mauritshuis</strong></a>. The <a href="/museum/national-gallery"><strong>National Gallery</strong></a> in London also holds major pieces.` },
      { question: "Why was Hendrick Avercamp called 'de Stomme'?", answer: `He was <strong>deaf and mute from birth</strong>. The Dutch nickname "de Stomme" means "the Mute." His mother's will called him "mute and miserable."` },
      { question: "What subjects did Avercamp paint?", answer: `He exclusively painted <strong>Dutch winter scenes</strong> with frozen canals, ice skaters, sledges, and crowds of figures from all social classes enjoying the cold.` },
      { question: "Why did Avercamp paint so many winter scenes?", answer: `He worked during the <strong>Little Ice Age</strong>, when Dutch winters were extremely severe. The harshest winters (1600–1625) coincided exactly with his most productive years.` }
    ]
  }
};

async function main() {
  console.log("Updating artists batch 5 (10 artists)...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(artistUpdates)) {
    const artist = await prisma.artist.findUnique({ where: { slug } });
    if (artist) {
      await prisma.artist.update({
        where: { slug },
        data: {
          bioFull: data.bioFull,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artist.name}`);
      updated++;
    } else {
      console.log(`✗ Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artists in batch 5`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
