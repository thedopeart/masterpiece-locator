const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  // 1. Emanuel Leutze - Mrs. Schuyler Burning Her Wheat Fields
  {
    slug: 'emanuel-leutze-mrs-schuyler-burning-her-wheat-fields-on-the-appro',
    description: `<p><a href="/apps/masterpieces/artist/emanuel-leutze"><strong>Emanuel Leutze</strong></a> painted this dramatic scene from the American Revolution in 1852, shortly after his famous "Washington Crossing the Delaware." The subject comes from Elizabeth Ellet's 1848 book "The Women of the American Revolution," one of the first feminist publications of its kind. <strong>Catherine Schuyler</strong>, wife of General Philip Schuyler, stands in patriotic red, white, and blue as she sets fire to her wheat fields near Saratoga.</p>

<p>The story holds that Mrs. Schuyler torched her family's crops rather than allow British forces to seize them. Though later proved apocryphal, the tale captured American imaginations in the mid-19th century. Leutze's painting is notable for its inclusion of <strong>African American figures</strong> in prominent roles. A young Black man holds the candle that lights the wheat, dressed in patriotic colors, while another helps prepare the escape carriage.</p>

<p>This <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic</strong></a> work now hangs at the <a href="/apps/masterpieces/museum/los-angeles-county-museum-of-art-lacma-los-angeles"><strong>Los Angeles County Museum of Art</strong></a>. Leutze's rich color harmonies and dramatic composition demonstrate why he was considered an outstanding colorist. The painting expanded his Revolutionary War series while offering a more inclusive view of American patriotism.</p>`,
    faqs: [
      {
        question: "Where can I see Mrs. Schuyler Burning Her Wheat Fields?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/los-angeles-county-museum-of-art-lacma-los-angeles"><strong>Los Angeles County Museum of Art</strong></a> (LACMA) in California. It was created in 1852 by <a href="/apps/masterpieces/artist/emanuel-leutze"><strong>Emanuel Leutze</strong></a>.`
      },
      {
        question: "Is the story of Mrs. Schuyler historically accurate?",
        answer: `The story was <strong>later proved to be family legend</strong> rather than historical fact. However, it was widely believed in the 1850s and appeared in Elizabeth Ellet's influential 1848 book on women of the Revolution.`
      },
      {
        question: "What other famous painting did Leutze create?",
        answer: `<a href="/apps/masterpieces/artist/emanuel-leutze"><strong>Leutze</strong></a> is best known for <strong>"Washington Crossing the Delaware"</strong> (1851), now at the Metropolitan Museum of Art. The Mrs. Schuyler painting was the second in his planned Revolutionary War series.`
      }
    ]
  },

  // 2. André Derain - Music
  {
    slug: 'andre-derain-music',
    description: `<p><a href="/apps/masterpieces/artist/andre-derain"><strong>André Derain</strong></a> explored musical themes in his work, building on the <a href="/apps/masterpieces/movement/fauvism"><strong>Fauvist</strong></a> style he co-founded with Henri Matisse. Derain's approach to subjects like music allowed him to experiment with <strong>bold color</strong> and flattened forms that would influence modern art for decades.</p>

<p>Born in 1880, Derain became one of the most important French artists of the early 20th century. His collaboration with Matisse in 1905 at Collioure produced work so vivid that critics dubbed them "les Fauves" (the wild beasts). Throughout his career, Derain moved between styles, from Fauvism to a more classical approach, always maintaining his skill as a colorist.</p>

<p>This painting resides in a <strong>private collection</strong>. Derain's range of styles influenced many artists, though his role in developing both Fauvism and Cubism is often overlooked. He later designed ballet sets for Diaghilev's Ballets Russes, bringing his artistic sensibility to theatrical productions.</p>`,
    faqs: [
      {
        question: "What art movement is André Derain associated with?",
        answer: `<a href="/apps/masterpieces/artist/andre-derain"><strong>Derain</strong></a> co-founded <a href="/apps/masterpieces/movement/fauvism"><strong>Fauvism</strong></a> with Henri Matisse in 1905. The movement was named by critics shocked by the artists' use of <strong>vivid, non-naturalistic colors</strong>.`
      },
      {
        question: "Where is this painting located?",
        answer: `This work is held in a <strong>private collection</strong>. Major collections of Derain's work can be found at the Centre Pompidou in Paris and the Musée de l'Orangerie.`
      },
      {
        question: "Did Derain work in other artistic fields?",
        answer: `Yes, Derain designed sets and costumes for the <strong>Ballets Russes</strong>, including the successful 1919 production of "La Boutique fantasque." He also worked as a sculptor and book illustrator.`
      }
    ]
  },

  // 3. Édouard Manet - Music in the Tuileries Garden
  {
    slug: 'edouard-manet-music-in-the-tuileries-garden',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted this scene of Parisian social life in 1862, creating what scholars call "the earliest true example of modern painting in both subject matter and technique." A fashionable crowd gathers in the <strong>Tuileries Gardens</strong> for one of the twice-weekly concerts, though notably, no musicians appear in the composition.</p>

<p>The painting contains numerous portraits of Manet's circle, including the poet Charles Baudelaire and members of the artist's family. Manet himself stands at the far left, his figure partly cut by the canvas edge. Rather than idealize his subjects, he captured the casual disorder of modern leisure. The compressed space and seemingly random arrangement shocked viewers accustomed to traditional composition.</p>

<p>This work now hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, jointly owned with The Hugh Lane in Dublin. The painting's influence spread to Monet, Renoir, and Bazille, who painted similar crowd scenes. As writer Émile Zola observed, rarely were Manet's powers as an "analytic painter" displayed more dazzlingly than here.</p>`,
    faqs: [
      {
        question: "Where can I see Music in the Tuileries Garden?",
        answer: `The painting hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London. It's jointly owned with The Hugh Lane gallery in Dublin and has been in the collection since 1917.`
      },
      {
        question: "Who appears in this painting?",
        answer: `<a href="/apps/masterpieces/artist/edouard-manet"><strong>Manet</strong></a> included himself at the far left, plus poet <strong>Charles Baudelaire</strong>, painter Albert de Balleroy, and several family members. It functions as a group portrait of Second Empire Paris society.`
      },
      {
        question: "Why is this painting historically important?",
        answer: `Art historians consider it <strong>the first true modern painting</strong> in both subject and technique. It influenced the <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionists</strong></a> and established contemporary urban life as a worthy subject for serious art.`
      },
      {
        question: "When was it first exhibited?",
        answer: `Manet showed it at his <strong>first solo exhibition</strong> in March 1863 at Louis Martinet's gallery. He later displayed it in 1867 near the Universal Exhibition, where German painter Adolph Menzel likely saw it.`
      }
    ]
  },

  // 4. Rembrandt - Musical Allegory
  {
    slug: 'rembrandt-musical-allegory',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this mysterious scene in 1626, early in his career. The <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> describes it as a painting that "refuses to divulge its secrets." The work shows figures gathered around music-making, but whether the scene represents <strong>divine praise or earthly seduction</strong> remains deliberately unclear.</p>

<p>The young woman wears gaudy garments and red shoes, details that suggested questionable taste to 17th-century viewers. An old woman in the scene looks suspiciously like a procuress, a common figure in Dutch paintings warning against vice. The painting may function as a moral warning about immoral conduct, dressed in the appealing guise of musical entertainment.</p>

<p>This oil on panel measures 63 by 47 centimeters and exemplifies the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style of the Dutch Golden Age. Rembrandt was just 20 years old when he painted it, yet the work already shows his mastery of light and psychological ambiguity that would define his later career.</p>`,
    faqs: [
      {
        question: "Where can I see Rembrandt's Musical Allegory?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/rijksmuseum"><strong>Rijksmuseum</strong></a> in Amsterdam, Netherlands. It's also known as "The Music Party" in some references.`
      },
      {
        question: "What is the meaning of this painting?",
        answer: `The meaning is <strong>deliberately ambiguous</strong>. It can be read as praising God through music or as a warning against seduction and vice. The old woman may represent a procuress figure common in Dutch moral paintings.`
      },
      {
        question: "How old was Rembrandt when he painted this?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> was only <strong>20 years old</strong> when he created this work in 1626. It comes from his early Leiden period before he moved to Amsterdam.`
      }
    ]
  },

  // 5. Caravaggio - Musicians
  {
    slug: 'caravaggio-musicians',
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted this scene of four young musicians around 1595, likely his first commission from Cardinal Francesco Maria del Monte. The Cardinal had an avid interest in music and owned expensive instruments that Caravaggio could use as models. Three figures play or tune instruments while a fourth, dressed as <strong>Cupid</strong>, reaches for grapes.</p>

<p>The painting functions as an allegory linking music to love's sustenance, just as food sustains life. A violin in the foreground suggests a fifth participant, implicitly including the viewer. The central figure with the lute has been identified as Caravaggio's companion Mario Minniti, while the figure facing the viewer may be the artist himself. In reality, the models never posed together; Caravaggio constructed the scene from separate studies.</p>

<p>The work had a remarkable rediscovery. In 1947 it sold at auction in England for just £100 to a retired naval captain who didn't recognize it as a Caravaggio. It reached the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in 1952 and underwent extensive restoration in 1983. The music in the manuscript has been badly damaged by past restorations.</p>`,
    faqs: [
      {
        question: "Where can I see Caravaggio's Musicians?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> in New York City. It has been in the collection since 1952 and underwent major restoration in 1983.`
      },
      {
        question: "Who commissioned this painting?",
        answer: `<strong>Cardinal Francesco Maria del Monte</strong> commissioned the work around 1595. <a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> had recently entered the Cardinal's household, and this was likely his first painting for that patron.`
      },
      {
        question: "Is Caravaggio depicted in this painting?",
        answer: `Art historians believe the <strong>figure facing the viewer</strong> may be a self-portrait. The central lutist has been identified as Mario Minniti, Caravaggio's companion.`
      },
      {
        question: "How was this painting rediscovered?",
        answer: `In 1947, it sold at auction in England for just <strong>£100</strong> (about $280) to a buyer who didn't recognize it as a Caravaggio. Its true attribution was discovered afterward.`
      }
    ]
  },

  // 6. Frida Kahlo - My Birth
  {
    slug: 'frida-kahlo-my-birth',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted this stark autobiographical work in 1932, depicting herself giving birth to herself. A shrouded figure lies on a bed while an infant emerges, watched over by an agonized Virgin of Sorrows. The painting carries dual meanings: Kahlo's mother had just died, so the covered figure may represent her; but Kahlo had also just miscarried in Detroit, so she may be the mother figure.</p>

<p>The work uses the <strong>retablo style</strong>, a traditional Mexican form derived from Catholic votive paintings where thanks would be given to the Madonna. Kahlo leaves the gratitude panel blank, as though unable to give thanks for either her own birth or her inability to give birth. The painting may also reference a 16th-century Aztec sculpture of the goddess Tlazolteotl giving birth.</p>

<p>Pop star Madonna owns this painting and has said she uses it to judge potential friends: "If somebody doesn't like this painting, then I know they can't be my friend." The work resides in her <strong>private collection</strong> and represents one of just five paintings Kahlo produced while in Detroit. Kahlo wrote in her diary that she was "the one who gave birth to herself."</p>`,
    faqs: [
      {
        question: "Who owns Frida Kahlo's My Birth?",
        answer: `Pop star <strong>Madonna</strong> owns this painting as part of her extensive Kahlo collection. She has said it's a litmus test for friendship and takes pride of place in her collection.`
      },
      {
        question: "What does this painting represent?",
        answer: `The painting has <strong>dual autobiographical meanings</strong>. <a href="/apps/masterpieces/artist/frida-kahlo"><strong>Kahlo's</strong></a> mother had just died, and she had just suffered a miscarriage in Detroit. The shrouded figure may represent either woman.`
      },
      {
        question: "What is a retablo?",
        answer: `A <strong>retablo</strong> is a traditional Mexican votive painting derived from Catholic art, typically giving thanks to the Madonna. Kahlo subverted the form by leaving the gratitude panel intentionally blank.`
      },
      {
        question: "When and where was this painted?",
        answer: `Kahlo painted this in <strong>1932 in Detroit</strong>, Michigan, while accompanying her husband Diego Rivera. It was one of five works she created during that difficult period following her miscarriage.`
      }
    ]
  },

  // 7. Maurice Denis - Mystic Allegory or Tea
  {
    slug: 'maurice-denis-mystic-allegory-or-tea',
    description: `<p><a href="/apps/masterpieces/artist/maurice-denis"><strong>Maurice Denis</strong></a> combined spiritual symbolism with everyday scenes throughout his career as a leading member of the <strong>Nabis</strong> movement. The Nabis, meaning "prophets" in Hebrew, believed art should be a synthesis of metaphors and symbols rather than mere depiction of nature.</p>

<p>Denis famously declared that "a picture, before being a war horse, a female nude, or some anecdote, is essentially a flat surface covered with colors in a particular order." This theoretical position influenced Cubism, Fauvism, and abstract art. His paintings often featured allegorical figures and decorative elements drawn from sources like medieval stained glass and Byzantine mosaics.</p>

<p>A devout Roman Catholic, Denis frequently painted biblical subjects in modern settings. He founded the Ateliers d'Art Sacré after World War I and worked to revive religious art. This particular work remains in a <strong>private collection</strong>, though major Denis paintings can be found at the Musée d'Orsay and the Musée Maurice Denis in Saint-Germain-en-Laye, his former home.</p>`,
    faqs: [
      {
        question: "What was the Nabis movement?",
        answer: `The <strong>Nabis</strong> (Hebrew for "prophets") formed in 1890 around <a href="/apps/masterpieces/artist/maurice-denis"><strong>Maurice Denis</strong></a> and others who admired Gauguin and Cézanne. They believed paintings should be symbolic expressions rather than naturalistic depictions.`
      },
      {
        question: "Where can I see Maurice Denis's work?",
        answer: `Major collections exist at the <strong>Musée d'Orsay</strong> in Paris and the <strong>Musée Maurice Denis</strong> in Saint-Germain-en-Laye, the artist's former home. This particular painting is in a private collection.`
      },
      {
        question: "What other art forms did Denis work in?",
        answer: `Denis worked in <strong>decorative arts</strong> including stained glass, ceramics, carpets, and theater design. He also decorated church interiors as part of his mission to revive sacred art.`
      }
    ]
  },

  // 8. Paolo Veronese - Mystic Marriage of St Catherine
  {
    slug: 'paolo-veronese-mystic-marriage-of-st-catherine',
    description: `<p><a href="/apps/masterpieces/artist/paolo-veronese"><strong>Paolo Veronese</strong></a> painted this religious subject in 1547, depicting the mystical union of <strong>Saint Catherine of Alexandria</strong> with the infant Christ. The Virgin Mary oversees the ceremony in which the saint receives a ring from the Christ child, symbolizing her spiritual devotion. Veronese painted several versions of this popular subject throughout his career.</p>

<p>The work embodies the spirit of the Venetian <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a>, with its lavish costumes and warm coloring influenced by Titian and Giorgione. Veronese became famous for sumptuous religious scenes that celebrated Venice's opulence. His ability to combine spiritual subjects with material beauty made him one of the most successful painters of his era.</p>

<p>This version, measuring 58 by 91 centimeters, resides at the <a href="/apps/masterpieces/museum/yale-art-gallery"><strong>Yale University Art Gallery</strong></a> in New Haven, Connecticut. Agostino Carracci later made an engraving after Veronese's composition in 1582, which critic Bartsch considered one of the printmaker's finest works.</p>`,
    faqs: [
      {
        question: "Where is Veronese's Mystic Marriage of St Catherine?",
        answer: `This version hangs at the <a href="/apps/masterpieces/museum/yale-art-gallery"><strong>Yale University Art Gallery</strong></a> in New Haven, Connecticut. Other versions by <a href="/apps/masterpieces/artist/paolo-veronese"><strong>Veronese</strong></a> exist at the Gallerie dell'Accademia in Venice and the Hermitage in Saint Petersburg.`
      },
      {
        question: "What is the Mystic Marriage of St Catherine?",
        answer: `According to legend, <strong>Saint Catherine of Alexandria</strong> experienced a vision in which the Virgin Mary presented her to the infant Christ, who gave her a ring. The mystical marriage symbolized her complete spiritual devotion.`
      },
      {
        question: "What art movement does this represent?",
        answer: `This painting represents the late <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> Venetian style, transitioning into Mannerism. Veronese was known for combining religious subjects with luxurious Venetian settings.`
      }
    ]
  },

  // 9. Parmigianino - Mystic Marriage of St Catherine
  {
    slug: 'parmigianino-mystic-marriage-of-st-catherine',
    description: `<p><a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> painted this graceful composition around 1529, creating one of the finest examples of <a href="/apps/masterpieces/movement/mannerism"><strong>Mannerism</strong></a>. The elongated figures and serpentine poses that define his style are fully evident here. Saint Catherine receives the ring from Christ while the Virgin Mary looks on, the figures arranged in an elegant, swirling composition.</p>

<p>Giorgio Vasari mentioned this painting, noting it was made for a saddler friend during Parmigianino's time in Bologna. The artist had fled there after the Sack of Rome in 1527 devastated that city. His confident brushwork, broader and quicker than High Renaissance tastes would allow, demonstrates his mature style at its most harmonious.</p>

<p>The painting exemplifies Parmigianino's "artistic daring," as he confronted the naturalistic orthodoxies established by Leonardo, Michelangelo, and Raphael. The rhythmic sensuality of his figures expressed the spiritual uncertainty of this turbulent period. The work hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where is Parmigianino's Mystic Marriage displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. Another significant version of the subject by Parmigianino is at the National Gallery in London.`
      },
      {
        question: "What is Mannerism?",
        answer: `<a href="/apps/masterpieces/movement/mannerism"><strong>Mannerism</strong></a> emerged after the High Renaissance, featuring elongated figures, complex poses, and emotional expressiveness. <a href="/apps/masterpieces/artist/parmigianino"><strong>Parmigianino</strong></a> was one of its leading practitioners.`
      },
      {
        question: "When did Parmigianino paint this work?",
        answer: `The painting dates to around <strong>1529</strong>, during Parmigianino's time in Bologna. He had fled there after the Sack of Rome in 1527 disrupted his work in that city.`
      }
    ]
  },

  // 10. Dosso Dossi - Mythological Scene
  {
    slug: 'dosso-dossi-mythological-scene',
    description: `<p><a href="/apps/masterpieces/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> created this enigmatic painting around 1524, filling it with visual clues that scholars have debated for centuries. The male figure on the right is the Greek god <strong>Pan</strong>, identifiable by the syrinx (pan flute) in his left hand. A sleeping nude in the foreground may be the nymph Echo, who spurned Pan for Narcissus. An old woman, perhaps the goddess Gea (Earth), shields her from harm.</p>

<p>The painting underwent considerable changes during its creation. X-rays reveal that Dossi originally included an armored woman, painted over with landscape, then later uncovered during 19th-century restoration. He also removed a suit of armor hanging from a lemon tree, a cello held by one figure, and altered facial expressions. The canvas was even cut down by six inches on the left.</p>

<p>Dossi served as court painter to the Este Dukes of Ferrara from 1514 until his death, producing many mythological subjects with dreamlike atmospheres. This large work, measuring 163 by 145 centimeters, now hangs at the <a href="/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles.</p>`,
    faqs: [
      {
        question: "Where is Dosso Dossi's Mythological Scene displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-ca-us"><strong>J. Paul Getty Museum</strong></a> in Los Angeles. It was included in a major Dosso Dossi exhibition organized jointly with the Met in 1999.`
      },
      {
        question: "What is the subject of this painting?",
        answer: `The subject remains <strong>deliberately ambiguous</strong>. It features the god <strong>Pan</strong> with his syrinx, possibly the nymph Echo, and cupids suggesting a theme of love. The precise meaning may never have been intended to be clear.`
      },
      {
        question: "Who was Dosso Dossi?",
        answer: `<a href="/apps/masterpieces/artist/dosso-dossi"><strong>Dosso Dossi</strong></a> (c. 1489-1542) was court painter to the Este Dukes of <strong>Ferrara</strong>. His style was influenced by Venetian painting, particularly Giorgione and early Titian.`
      }
    ]
  },

  // 11. Théodore Géricault - Naked man reversed on the ground
  {
    slug: 'theodore-gericault-naked-man-reversed-on-the-ground',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> created anatomical studies of the male nude that revolutionized academic conventions. While nude studies were essential to an artist's training, Géricault abandoned the traditional frontal studio pose entirely. He placed figures in dramatic settings and experimented with radical ways of presenting the body that explored his deep understanding of anatomy.</p>

<p>Géricault trained under Pierre-Narcisse Guérin, a rigorous classicist who disapproved of his student's impulsive temperament while recognizing his talent. A trip to Italy in 1816-17 ignited Géricault's fascination with Michelangelo, visible in the dramatic poses of his figures. The expressive use of light and shadow in his nudes anticipated the development of <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>.</p>

<p>This painting resides at the <a href="/apps/masterpieces/museum/mus233e-magnin-dijon-france"><strong>Musée Magnin</strong></a> in Dijon, France. Géricault is best known for "The Raft of the Medusa," and despite his short life (he died at 32), he was one of the pioneers of the Romantic movement. His anatomical studies reveal the intense preparation behind his major works.</p>`,
    faqs: [
      {
        question: "Where is this Géricault painting displayed?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/mus233e-magnin-dijon-france"><strong>Musée Magnin</strong></a> in Dijon, France. Other anatomical studies by <a href="/apps/masterpieces/artist/theodore-gericault"><strong>Géricault</strong></a> are at the Musée Bonnat in Bayonne.`
      },
      {
        question: "Why did Géricault study anatomy so intensely?",
        answer: `Géricault's anatomical studies prepared him for major works like <strong>"The Raft of the Medusa."</strong> He even kept human remains from the morgue in his studio to study, an extreme commitment that shocked contemporaries.`
      },
      {
        question: "What art movement did Géricault help pioneer?",
        answer: `Géricault was a pioneer of <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a>. His dramatic use of light and shadow and his emotional approach to subjects helped establish the movement's visual language.`
      }
    ]
  },

  // 12. Gustave Caillebotte - Naked Woman Lying on a Couch
  {
    slug: 'gustave-caillebotte-naked-woman-lying-on-a-couch',
    description: `<p><a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Gustave Caillebotte</strong></a> painted this work around 1880-1882, creating his only female nude. The painting was never exhibited during his lifetime, which curators suggest indicates his lack of interest in the subject. Unlike academic nudes that idealized their subjects, Caillebotte depicted a real modern woman with uncompromising anatomical realism.</p>

<p>The woman has just removed her clothing, tossing it haphazardly on the couch. The indented line of her undergarment remains visible above her waist. She appears tired, shielding her eyes with one arm as if sleeping. The subject may be Charlotte Berthier, Caillebotte's longtime companion. There is no attempt to idealize her or place her in seductive poses common to the period.</p>

<p>This <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> work remains in a <strong>private collection</strong>. Caillebotte often reversed gendered expectations in his paintings, depicting men in poses typically reserved for women. Scholar Kirk Varnedoe called this a "realist nude" that "belongs to a story," making it unique among Impressionist figure paintings.</p>`,
    faqs: [
      {
        question: "Why wasn't this painting exhibited in Caillebotte's lifetime?",
        answer: `The work was <strong>never shown publicly</strong> while <a href="/apps/masterpieces/artist/gustave-caillebotte"><strong>Caillebotte</strong></a> lived, suggesting he may not have considered the female nude his natural subject. His famous nudes typically depicted men.`
      },
      {
        question: "Who is the woman in this painting?",
        answer: `The subject may be <strong>Charlotte Berthier</strong>, Caillebotte's longtime companion. Her everyday clothing and lack of idealization suggest an intimate, private portrait rather than a traditional model study.`
      },
      {
        question: "How does this differ from typical Impressionist nudes?",
        answer: `Unlike Degas's voyeuristic bathers or Renoir's idealized figures, Caillebotte depicts a <strong>real, modern woman</strong> with anatomical honesty. The indented lines from her undergarments and natural skin tones remain visible.`
      }
    ]
  },

  // 13. Ernest Meissonier - Napoleon I in 1814
  {
    slug: 'ernest-meissonier-napoleon-i-in-1814',
    description: `<p><a href="/apps/masterpieces/artist/ernest-meissonier"><strong>Ernest Meissonier</strong></a> painted this somber scene in 1862, depicting <strong>Napoleon Bonaparte</strong> leading the remnants of his army through mud and snow during the French campaign of 1814. The Emperor rides grimly forward, his forces diminished by disaster. Meissonier's meticulous attention to historical detail made him the leading military painter of 19th-century France.</p>

<p>This smaller version, measuring 32 by 24 centimeters, relates to Meissonier's larger "Campagne de France" (1864) now at the Musée d'Orsay. The artist spent years researching Napoleonic campaigns, studying uniforms, weapons, and terrain to achieve historical accuracy. His dedication to detail commanded premium prices from collectors and admiration from fellow artists.</p>

<p>The painting now hangs at the <a href="/apps/masterpieces/museum/walters-art-museum-baltimore-md-us"><strong>Walters Art Museum</strong></a> in Baltimore, Maryland. Meissonier's small-scale works, executed with miniaturist precision, earned him comparison to Dutch Golden Age masters. His military scenes remained popular throughout the Second Empire and beyond.</p>`,
    faqs: [
      {
        question: "Where is Napoleon I in 1814 displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/walters-art-museum-baltimore-md-us"><strong>Walters Art Museum</strong></a> in Baltimore, Maryland. A larger related version, "Campagne de France" (1864), is at the Musée d'Orsay in Paris.`
      },
      {
        question: "What historical event does this depict?",
        answer: `The painting shows <strong>Napoleon's 1814 campaign</strong> in France, when he fought desperately to defend Paris against allied forces. Within months, he would abdicate and be exiled to Elba.`
      },
      {
        question: "Who was Ernest Meissonier?",
        answer: `<a href="/apps/masterpieces/artist/ernest-meissonier"><strong>Meissonier</strong></a> (1815-1891) was the leading French military painter of his era. He was renowned for <strong>meticulous historical accuracy</strong> and commanded the highest prices of any living French artist.`
      }
    ]
  },

  // 14. Ernest Meissonier - Napoleon III at the Battle of Solferino
  {
    slug: 'ernest-meissonier-napoleon-iii-at-the-battle-of-solferino',
    description: `<p><a href="/apps/masterpieces/artist/ernest-meissonier"><strong>Ernest Meissonier</strong></a> depicted a more recent conflict in this painting of <strong>Napoleon III at Solferino</strong>. The Battle of Solferino, fought on June 24, 1859, was the decisive engagement of the Second Italian War of Independence. French and Sardinian forces defeated the Austrian army, helping to unify Italy. The battle's carnage also inspired Henri Dunant to found the Red Cross.</p>

<p>Meissonier accompanied Napoleon III's army as an official artist, witnessing the campaign firsthand. This direct experience gave his military paintings an authenticity that distinguished them from studio recreations. He captured the chaos and movement of battle while maintaining the precise detail for which he was famous.</p>

<p>The painting resides at the <a href="/apps/masterpieces/museum/ch226teau-de-compi232gne-compi232gne-france"><strong>Château de Compiègne</strong></a>, the imperial residence Napoleon III used as a hunting lodge and retreat. Meissonier received major commissions from the Emperor throughout the Second Empire, documenting contemporary events alongside his Napoleonic histories.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `This work hangs at the <a href="/apps/masterpieces/museum/ch226teau-de-compi232gne-compi232gne-france"><strong>Château de Compiègne</strong></a> in northern France. The palace served as Napoleon III's imperial residence and now houses collections from the Second Empire.`
      },
      {
        question: "What was the Battle of Solferino?",
        answer: `Fought on <strong>June 24, 1859</strong>, Solferino was the decisive battle of the Second Italian War of Independence. The combined French and Sardinian victory over Austria helped lead to Italian unification.`
      },
      {
        question: "Did Meissonier witness the battle personally?",
        answer: `Yes, <a href="/apps/masterpieces/artist/ernest-meissonier"><strong>Meissonier</strong></a> accompanied <strong>Napoleon III's army</strong> as an official artist. His firsthand experience of the campaign gave his paintings an authenticity that pure studio work couldn't match.`
      }
    ]
  },

  // 15. Emanuel Leutze - Nathaniel Hawthorne
  {
    slug: 'emanuel-leutze-nathaniel-hawthorne',
    description: `<p><a href="/apps/masterpieces/artist/emanuel-leutze"><strong>Emanuel Leutze</strong></a> painted this portrait of <strong>Nathaniel Hawthorne</strong>, capturing the American novelist and short story writer. Hawthorne was among the most important literary figures of 19th-century America, known for "The Scarlet Letter," "The House of the Seven Gables," and numerous short stories exploring guilt, sin, and the Puritan legacy.</p>

<p>Leutze, best known for historical paintings like "Washington Crossing the Delaware," also worked as a portraitist throughout his career. His subjects included many notable Americans of the mid-19th century. He brought the same attention to character and detail that made his historical works successful to these more intimate commissions.</p>

<p>This portrait now hangs at the <a href="/apps/masterpieces/museum/national-portrait-gallery-washington-dc-usa"><strong>National Portrait Gallery</strong></a> in Washington, DC. Hawthorne served as American consul in Liverpool from 1853 to 1857 and later lived in Italy, experiences that influenced his final works. Leutze's portrait preserves the appearance of one of America's most penetrating writers.</p>`,
    faqs: [
      {
        question: "Where is Leutze's portrait of Hawthorne displayed?",
        answer: `This portrait hangs at the <a href="/apps/masterpieces/museum/national-portrait-gallery-washington-dc-usa"><strong>National Portrait Gallery</strong></a> in Washington, DC, part of the Smithsonian Institution.`
      },
      {
        question: "What is Nathaniel Hawthorne known for?",
        answer: `Hawthorne was a major <strong>American novelist</strong> known for "The Scarlet Letter" (1850) and "The House of the Seven Gables" (1851). His work explored Puritan New England and themes of sin, guilt, and redemption.`
      },
      {
        question: "What other portraits did Emanuel Leutze paint?",
        answer: `<a href="/apps/masterpieces/artist/emanuel-leutze"><strong>Leutze</strong></a> painted many prominent Americans alongside his historical works. He's best known for <strong>"Washington Crossing the Delaware"</strong> at the Metropolitan Museum of Art.`
      }
    ]
  },

  // 16. Petrus Christus - Nativity
  {
    slug: 'petrus-christus-nativity',
    description: `<p><a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus</strong></a> painted this Nativity scene around 1452, during the height of Early Netherlandish painting. The work demonstrates the meticulous technique that made Flemish painters famous throughout Europe. Rich detail, luminous color, and precise rendering of textures characterize this devotional image of Christ's birth.</p>

<p>Christus became Bruges' leading painter after the death of Jan van Eyck in 1441, a position he held until Hans Memling established himself in the mid-1460s. Though long seen only in van Eyck's shadow, recent scholarship reveals Christus as an independent artist equally influenced by Rogier van der Weyden and Robert Campin. He was noted for innovations with linear perspective.</p>

<p>This panel resides at the <a href="/apps/masterpieces/museum/groeningemuseum"><strong>Groeningemuseum</strong></a> in Bruges, Belgium, appropriately housed in the city where Christus spent his career. The museum's collection spans six centuries of Flemish and Belgian art, with particular strength in Early Netherlandish painting.</p>`,
    faqs: [
      {
        question: "Where is Petrus Christus's Nativity displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/groeningemuseum"><strong>Groeningemuseum</strong></a> in Bruges, Belgium. The museum specializes in Early Netherlandish painting, making it an ideal home for this work.`
      },
      {
        question: "Who was Petrus Christus?",
        answer: `<a href="/apps/masterpieces/artist/petrus-christus"><strong>Petrus Christus</strong></a> (c. 1410-1476) was the leading painter in Bruges after Jan van Eyck's death. About 30 works are confidently attributed to him today.`
      },
      {
        question: "What characterized Early Netherlandish painting?",
        answer: `Early Netherlandish artists were known for <strong>meticulous detail, luminous oil technique</strong>, and realistic rendering of textures. They pioneered oil painting methods that spread throughout Europe.`
      }
    ]
  },

  // 17. Rembrandt - Nativity
  {
    slug: 'rembrandt-nativity',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> spent considerable time creating art representing the life of Christ, particularly the <strong>Nativity</strong> and associated events. He realized these subjects in many different styles and methods throughout his career. His approach to religious subjects combined deep spiritual feeling with technical mastery of light and shadow.</p>

<p>Rembrandt's religious works stand apart from those of his contemporaries in their psychological depth and human warmth. Rather than emphasizing divine majesty, he portrayed sacred figures as humble, relatable people. His use of <strong>chiaroscuro</strong>, the dramatic contrast between light and dark, gave his religious scenes powerful emotional impact.</p>

<p>This Nativity hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The Hermitage holds an important collection of Rembrandt's work, including "The Return of the Prodigal Son," one of his last and most moving paintings. These religious works demonstrate why Rembrandt remains considered one of history's greatest visual artists.</p>`,
    faqs: [
      {
        question: "Where is Rembrandt's Nativity displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The museum holds several important works by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>.`
      },
      {
        question: "What makes Rembrandt's religious paintings distinctive?",
        answer: `Rembrandt portrayed sacred figures with <strong>psychological depth and human warmth</strong> rather than distant majesty. His masterful use of light and shadow gave scenes powerful emotional resonance.`
      },
      {
        question: "What other Nativity-related works did Rembrandt create?",
        answer: `Rembrandt painted the <strong>Adoration of the Magi</strong> (1632) and created Nativity etchings. The Hermitage also holds his "Adoration of the Magi" and "The Holy Family" (1645).`
      }
    ]
  },

  // 18. George Bellows - New York
  {
    slug: 'george-bellows-new-york',
    description: `<p><a href="/apps/masterpieces/artist/george-bellows"><strong>George Bellows</strong></a> completed this ambitious painting in February 1911, capturing the frenetic energy of modern New York City. Though the view looks toward Madison Square from Broadway and 23rd Street, Bellows created an <strong>imaginary composite</strong> rather than a specific location. He packed the scene with skyscrapers, billboards, elevated trains, horse-drawn carriages, and motorcars to convey the city's overwhelming pace.</p>

<p>Bellows studied under Robert Henri and became associated with the <strong>Ashcan School</strong>, a group that advocated painting contemporary American life in all its forms. His New York scenes captured the raw reality of urban existence. This large canvas, measuring 42 by 60 inches, denies the viewer's eye any resting place, mirroring the experience of being in the crowded city.</p>

<p>The painting now hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, DC. Bellows revolutionized American urban painting by assembling diverse elements into one overwhelming image. He has been called "the American master of snow" for his winter cityscapes, though this work shows the city in busier conditions.</p>`,
    faqs: [
      {
        question: "Where is George Bellows's New York displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, DC. It measures 42 x 60 inches (106.7 x 152.4 cm) and was completed in February 1911.`
      },
      {
        question: "What was the Ashcan School?",
        answer: `The <strong>Ashcan School</strong> was a group of American artists who painted everyday urban life. <a href="/apps/masterpieces/artist/george-bellows"><strong>Bellows</strong></a> studied under Robert Henri, the movement's leader, and depicted New York's streets, docks, and boxing matches.`
      },
      {
        question: "Is this painting of a specific New York location?",
        answer: `No. While it suggests Madison Square and the Broadway/23rd Street intersection, Bellows created an <strong>imaginary composite</strong> from several business districts to convey the city's overwhelming energy.`
      }
    ]
  },

  // 19. George Inness - Niagara
  {
    slug: 'george-inness-niagara',
    description: `<p><a href="/apps/masterpieces/artist/george-inness"><strong>George Inness</strong></a> painted this view of <strong>Niagara Falls</strong> in 1889, one of nine times he depicted the famous waterfall in oil and watercolor. The image is thick with atmospheric effect as waters cascade down the American Falls. The viewer stands on an elevated position on the American bank, looking through scumbled green scrub toward the mist-shrouded cascade.</p>

<p>Curiously, the painting includes a smokestack from a paper mill on Bath Island that had been destroyed in 1882, seven years before this painting. Its inclusion suggests Inness worked from memory or earlier studies rather than direct observation. The <a href="/apps/masterpieces/movement/tonalism"><strong>Tonalist</strong></a> style emphasizes atmospheric effects over naturalistic detail.</p>

<p>This work hangs at the <a href="/apps/masterpieces/museum/smithsonian-american-art"><strong>Smithsonian American Art Museum</strong></a> in Washington, DC, a gift of collector William T. Evans in 1909. Inness first visited Niagara in 1881 and remained fascinated by the challenge of capturing water, mist, and light. His body of work comprises over 1,150 paintings, watercolors, and sketches.</p>`,
    faqs: [
      {
        question: "Where is George Inness's Niagara displayed?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/smithsonian-american-art"><strong>Smithsonian American Art Museum</strong></a> in Washington, DC. It was donated by collector William T. Evans in 1909.`
      },
      {
        question: "What is Tonalism?",
        answer: `<a href="/apps/masterpieces/movement/tonalism"><strong>Tonalism</strong></a> was an American art movement of the 1880s-1910s emphasizing <strong>atmospheric effects over detail</strong>. <a href="/apps/masterpieces/artist/george-inness"><strong>Inness</strong></a> helped develop the style through his loose, painterly landscapes.`
      },
      {
        question: "How many times did Inness paint Niagara Falls?",
        answer: `Inness depicted <strong>Niagara Falls nine times</strong> in oil and watercolor. He first visited in 1881 and continued exploring the subject in various styles throughout the 1880s and 1890s.`
      }
    ]
  },

  // 20. Henri de Toulouse-Lautrec - Nice, on the Promenade des Anglais
  {
    slug: 'henri-toulouse-lautrec-nice-on-the-promenade-des-anglais',
    description: `<p><a href="/apps/masterpieces/artist/henri-toulouse-lautrec"><strong>Henri de Toulouse-Lautrec</strong></a> captured this scene of the <strong>Promenade des Anglais</strong> in Nice, the famous Mediterranean seafront walkway. The promenade, built by the English colony in Nice in the 1820s, became a fashionable destination for European aristocracy and wealthy tourists seeking the Riviera's mild climate.</p>

<p>Though Toulouse-Lautrec is best known for his depictions of Parisian nightlife, particularly the cabarets and dance halls of Montmartre, he traveled throughout France and captured diverse subjects. His aristocratic upbringing gave him access to high society even as his art documented its margins. The quick, confident brushwork characteristic of his <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> style is evident here.</p>

<p>This painting remains in a <strong>private collection</strong>. Major collections of Toulouse-Lautrec's work can be found at the Musée Toulouse-Lautrec in Albi, his hometown, and at the Musée d'Orsay in Paris. His ability to capture social atmosphere with just a few strokes made him one of the most distinctive artists of his generation.</p>`,
    faqs: [
      {
        question: "What is the Promenade des Anglais?",
        answer: `The <strong>Promenade des Anglais</strong> is Nice's famous seafront walkway along the Mediterranean. Built by the English colony in the 1820s, it became a fashionable destination for European aristocracy.`
      },
      {
        question: "Where can I see Toulouse-Lautrec's work?",
        answer: `This painting is in a <strong>private collection</strong>. Major collections exist at the <strong>Musée Toulouse-Lautrec</strong> in Albi (his hometown) and the Musée d'Orsay in Paris.`
      },
      {
        question: "What is Toulouse-Lautrec best known for?",
        answer: `<a href="/apps/masterpieces/artist/henri-toulouse-lautrec"><strong>Toulouse-Lautrec</strong></a> is best known for depicting <strong>Parisian nightlife</strong>, particularly the Moulin Rouge cabaret. His posters and paintings of dancers, singers, and prostitutes defined Belle Époque Paris.`
      }
    ]
  }
];

async function main() {
  console.log(`Updating ${artworkUpdates.length} artworks...`);

  for (const artwork of artworkUpdates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug} - ${error.message}`);
    }
  }

  console.log('\nDone!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
