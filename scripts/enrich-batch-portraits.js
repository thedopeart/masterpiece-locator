const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'lucas-cranach-elder-portrait-of-johann-friederich-i-the-magnanimous-el',
    description: `<p><a href="/apps/masterpieces/artist/lucas-cranach-the-elder"><strong>Lucas Cranach the Elder</strong></a> painted this portrait of Johann Friedrich the Magnanimous in 1509, when the future Elector of Saxony was just six years old. The oil on wood panel measures 42 x 31.2 cm and forms half of a diptych with a companion portrait of the boy's father, Johann the Steadfast.</p>
<p>The pairing is unusual. Most father-son portraits from this period show adult heirs. Young Johann Friedrich's mother, Sophia of Mecklenburg, died giving birth to him, which may explain why the child was depicted so early. The two paintings share complementary color schemes: <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> in the father's background echoes the son's clothing, while the son's black background matches his father's garments.</p>
<p>Cranach (1472-1553) served as court painter to successive Saxon electors from 1505 until his death. He painted Johann Friedrich throughout his life, though later portraits show a thickly set man with receding dark hair, bearing little resemblance to this angelic blonde child. Johann Friedrich became Elector in 1532 and was the last of the Ernestine line. The diptych hangs at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `This portrait is displayed at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, alongside its companion portrait of Johann the Steadfast.`
      },
      {
        question: "How old was Johann Friedrich in this portrait?",
        answer: `Johann Friedrich was only <strong>six years old</strong> when <a href="/apps/masterpieces/artist/lucas-cranach-the-elder"><strong>Cranach</strong></a> painted this portrait in 1509.`
      },
      {
        question: "Who was Lucas Cranach the Elder?",
        answer: `<a href="/apps/masterpieces/artist/lucas-cranach-the-elder"><strong>Cranach</strong></a> was <strong>court painter to the Electors of Saxony</strong> from 1505 to 1553. He's remembered as the chief artist of the Protestant Reformation.`
      }
    ]
  },
  {
    slug: 'william-holman-hunt-portrait-of-john-everett-millais',
    description: `<p><a href="/apps/masterpieces/artist/william-holman-hunt"><strong>William Holman Hunt</strong></a> painted this portrait of John Everett Millais in 1853, capturing one of his fellow founders of the <a href="/apps/masterpieces/movement/pre-raphaelitism"><strong>Pre-Raphaelite</strong></a> Brotherhood. The two artists had been close collaborators since forming the Brotherhood in 1848, along with Dante Gabriel Rossetti and four others.</p>
<p>Millais (1829-1896) was a child prodigy who entered the Royal Academy Schools at age eleven, the youngest student ever admitted. By 1853, when Hunt made this sketch-like <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a>, Millais had already painted several of his most famous works, including Ophelia and Christ in the House of His Parents.</p>
<p>The Pre-Raphaelites often depicted one another during this period, creating a visual record of their artistic circle. Hunt and Millais shared a particular bond, traveling together and occasionally working in the same studio. The portrait hangs at <a href="/apps/masterpieces/museum/tate-modern"><strong>Tate Modern</strong></a> in London, part of their collection documenting the Pre-Raphaelite movement.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `This portrait is displayed at <a href="/apps/masterpieces/museum/tate-modern"><strong>Tate Modern</strong></a> in London as part of their Pre-Raphaelite collection.`
      },
      {
        question: "What was the Pre-Raphaelite Brotherhood?",
        answer: `The <strong>Pre-Raphaelite Brotherhood</strong> was an art movement founded in 1848 by <a href="/apps/masterpieces/artist/william-holman-hunt"><strong>Hunt</strong></a>, Millais, Rossetti, and others who rejected academic conventions.`
      },
      {
        question: "Who was John Everett Millais?",
        answer: `Millais (1829-1896) was a <strong>founding Pre-Raphaelite</strong> and child prodigy who entered the Royal Academy Schools at age eleven.`
      }
    ]
  },
  {
    slug: 'gustav-klimt-portrait-of-joseph-pembauer',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted the Portrait of Joseph Pembauer in 1890, depicting the pianist and piano teacher with striking realism. The oil on canvas measures 69 x 55 cm and shows Pembauer in formal attire against a decorative frame that Klimt designed himself. At top right stands Apollo, the Greek god of music, playing a lyre.</p>
<p>The frame's symbolic elements relate abstraction to reality, connecting the viewer to Pembauer's <strong>musical career</strong>. This combination of naturalistic portraiture and stylized decoration was new to European art. The portrait looks so lifelike it could almost be mistaken for a photograph, demonstrating the technical skill Klimt developed painting portraits from photographs as a student.</p>
<p>In 1888, Klimt received the Golden Order of Merit from the Emperor for his contributions to murals. His ability to capture a likeness with photographic accuracy served him well when painting Vienna's elite. The painting hangs at the <a href="/apps/masterpieces/museum/tyrolean-state-museum"><strong>Tyrolean State Museum</strong></a> (Tiroler Landesmuseum) in Innsbruck, Austria, showing Klimt before his famous <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> period.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Joseph Pembauer is displayed at the <a href="/apps/masterpieces/museum/tyrolean-state-museum"><strong>Tyrolean State Museum</strong></a> (Tiroler Landesmuseum) in Innsbruck, Austria.`
      },
      {
        question: "Who was Joseph Pembauer?",
        answer: `Joseph Pembauer was a <strong>pianist and piano teacher</strong>. <a href="/apps/masterpieces/artist/gustav-klimt"><strong>Klimt</strong></a> included the god Apollo with a lyre to reference his musical career.`
      },
      {
        question: "What style is this painting?",
        answer: `This 1890 portrait shows Klimt's early <strong>realistic style</strong> before his famous Art Nouveau golden period. The decorative frame hints at his later symbolic work.`
      }
    ]
  },
  {
    slug: 'elisabeth-vigee-le-brun-portrait-of-joseph-vernet',
    description: `<p><a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Élisabeth Vigée Le Brun</strong></a> painted the Portrait of Joseph Vernet in 1778, depicting her fellow painter with palette and brush in hand. The oil on canvas measures 72 x 92 cm and was one of her earliest portraits, showing an artist who had supported her career. Vernet appears as a working painter, ready to apply paint to canvas.</p>
<p>Joseph Vernet (1714-1789) was famous for his marine paintings, particularly his "Views of the Ports of France" series commissioned by the Marquis de Marigny. He spent twelve years completing fifteen large paintings showing French harbors for the King. His son Carle and grandson Horace both became noted painters, creating a dynasty of French artists.</p>
<p>Vigée Le Brun (1755-1842) would become one of the most accomplished <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>female</strong></a> painters of the 18th century, best known as Marie Antoinette's official portraitist. This early work shows her developing the elegant <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> style that defined her career. The <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> acquired the painting in 1817.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Joseph Vernet is displayed at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris. It was acquired in 1817.`
      },
      {
        question: "Who was Joseph Vernet?",
        answer: `<strong>Joseph Vernet</strong> (1714-1789) was a marine painter famous for his "Views of the Ports of France" series. His son and grandson also became painters.`
      },
      {
        question: "Why did Vigée Le Brun paint Vernet?",
        answer: `Vernet had been <strong>supportive of her career</strong>. This 1778 portrait was one of <a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Vigée Le Brun's</strong></a> earliest, showing a mentor figure.`
      }
    ]
  },
  {
    slug: 'gustave-courbet-portrait-of-juliette-courbet-as-a-sleeping-child',
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> created Portrait of Juliette Courbet as a Sleeping Child in 1841, a graphite drawing on paper measuring 35.2 x 45.7 cm. The work depicts his younger sister Juliette nestled beside an open book, capturing the innocence of childhood sleep. At just twenty-two, Courbet was already showing the observational skills that would define his <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> approach.</p>
<p>Rather than grand narratives or heroic gestures, Courbet focused on quiet intimacy. A sleeping child beside a book speaks to themes of innocence, tranquility, and the pursuit of knowledge. This early drawing shows his interest in depicting everyday life and emotional depth, diverging from the historical and mythological themes that dominated academic art.</p>
<p>Courbet painted his sister Juliette throughout his career. Her face appears in several works as he developed his revolutionary approach to representing ordinary subjects with dignity and honesty. The drawing hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, an early glimpse of the artist who would champion <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraiture</strong></a> of real people over idealized figures.</p>`,
    faqs: [
      {
        question: "Where can I see this artwork?",
        answer: `Portrait of Juliette Courbet as a Sleeping Child is displayed at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris.`
      },
      {
        question: "Who was Juliette Courbet?",
        answer: `Juliette was <a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet's</strong></a> <strong>younger sister</strong>. She appeared in several of his works throughout his career.`
      },
      {
        question: "What medium is this work?",
        answer: `This is a <strong>graphite drawing on paper</strong>, measuring 35.2 x 45.7 cm, created in 1841 when Courbet was twenty-two.`
      }
    ]
  },
  {
    slug: 'william-adolphe-bouguereau-portrait-of-l233onie-bouguereau',
    description: `<p><a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>William-Adolphe Bouguereau</strong></a> painted Portrait of Léonie Bouguereau in 1850, depicting a family member seated in an armchair against a gray background. The oil painting shows a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> in formal dress, her posture reflecting the conventions of mid-19th century portraiture.</p>
<p>Bouguereau (1825-1905) was just twenty-five when he created this portrait, years before becoming one of the most successful academic painters in France. The same year, he also painted Portrait of Eugène Bouguereau, suggesting a series of family portraits created during this period. His technical precision is already evident in the careful rendering of fabric and flesh tones.</p>
<p>Bouguereau would go on to receive numerous honors, including the Grand Medal of Honor at the Paris Salon. His idealized figures and flawless technique made him wealthy and famous, though modernist critics later dismissed his work. The portrait remains in a <strong>private collection</strong>, an early example of the artist's skill with formal portraiture before his mythological and peasant subjects brought wider fame.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Léonie Bouguereau is in a <strong>private collection</strong> and not currently on public display.`
      },
      {
        question: "Who was Léonie Bouguereau?",
        answer: `Léonie was a <strong>family member</strong> of <a href="/apps/masterpieces/artist/william-adolphe-bouguereau"><strong>Bouguereau</strong></a>. He painted several family portraits in 1850.`
      },
      {
        question: "When was this painted?",
        answer: `Bouguereau created this portrait in <strong>1850</strong>, when he was twenty-five years old and before his rise to fame.`
      }
    ]
  },
  {
    slug: 'egon-schiele-portrait-of-leopold-czihaczek',
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> painted Portrait of Leopold Czihaczek in 1907, depicting his uncle and guardian with Impressionist-influenced brushwork. The oil on canvas shows Czihaczek (1842-1929), who became Schiele's joint guardian after the artist's father died on New Year's Eve 1904-05.</p>
<p>Like Schiele's father, Czihaczek was a high-ranking railway official who wanted his ward to study engineering. Despite disapproving of Egon's artistic ambitions, he took the young man in when he came to Vienna in 1906 to study at the Art Academy. Their relationship began warmly. Schiele portrayed his uncle several times during these early years, including Leopold Czihaczek at the Piano.</p>
<p>By 1910, Czihaczek had resigned as guardian, citing Schiele's behavior "flouting any and all notions of morality." This early <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> shows Schiele before he developed the angular, expressionistic style that would make him famous. The painting remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "Who was Leopold Czihaczek?",
        answer: `Leopold Czihaczek was <a href="/apps/masterpieces/artist/egon-schiele"><strong>Schiele's</strong></a> <strong>uncle and guardian</strong> after Egon's father died in 1904-05. He was a railway official.`
      },
      {
        question: "Why did Schiele paint multiple portraits of Czihaczek?",
        answer: `Czihaczek housed Schiele in Vienna during his art studies. Their relationship was initially warm, and <strong>Schiele painted him several times</strong> between 1906-1909.`
      },
      {
        question: "Where can I see this portrait?",
        answer: `This Portrait of Leopold Czihaczek is in a <strong>private collection</strong>. The Leopold Museum in Vienna holds other Schiele-Czihaczek photographs and works.`
      }
    ]
  },
  {
    slug: 'egon-schiele-portrait-of-leopold-czihaczek-head-of-a-bearded-ma',
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> painted Portrait of Leopold Czihaczek (Head of a Bearded Man I) in 1907, an oil on cardboard study of his uncle's face. The work focuses on Czihaczek's bearded features, capturing the railway official who served as Schiele's guardian during his Vienna art studies.</p>
<p>This head study is one of several portraits Schiele made of his uncle between 1906 and 1909. The "I" in the title suggests at least one additional head study exists. Working on cardboard rather than canvas indicates this may have been a quick study, perhaps made to capture a particular expression or lighting condition. The Impressionist brushwork shows Schiele still absorbing influences before developing his distinctive style.</p>
<p>Czihaczek's <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown</strong></a> beard dominates the composition. Within three years, Schiele would move toward the angular distortions and psychological intensity of <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionism</strong></a>. This early portrait remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "What makes this portrait different from other Czihaczek portraits?",
        answer: `This version focuses on Czihaczek's <strong>head and beard</strong>, painted on cardboard as a study. The "I" suggests multiple head studies exist.`
      },
      {
        question: "What style is this portrait?",
        answer: `The painting shows <strong>Impressionist influence</strong>, typical of <a href="/apps/masterpieces/artist/egon-schiele"><strong>Schiele's</strong></a> early work before his famous Expressionist period.`
      },
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Leopold Czihaczek (Head of a Bearded Man I) is in a <strong>private collection</strong>.`
      }
    ]
  },
  {
    slug: 'egon-schiele-portrait-of-leopold-czihaczek-in-profile-facing-le',
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> created Portrait of Leopold Czihaczek, in Profile Facing Left as part of his series depicting his uncle and guardian. The profile view shows Czihaczek's distinctive bearded features from a different angle than Schiele's frontal portraits, demonstrating the young artist's interest in studying his subject from multiple perspectives.</p>
<p>During his years at the Vienna Academy (1906-1909), Schiele lived with Czihaczek and repeatedly returned to his uncle as a subject. The profile orientation was a classical approach to portraiture, dating back to ancient coins and Renaissance medals. Schiele may have been exploring traditional formats while developing his skills.</p>
<p>The relationship between artist and guardian would deteriorate by 1910, when Czihaczek resigned his guardianship over Schiele's scandalous behavior. These early <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> document a period of relative stability before Schiele's controversial subject matter brought notoriety. The work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "What makes this portrait unique?",
        answer: `This portrait shows Czihaczek <strong>in profile facing left</strong>, a classical approach that differs from <a href="/apps/masterpieces/artist/egon-schiele"><strong>Schiele's</strong></a> other frontal portraits.`
      },
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Leopold Czihaczek, in Profile Facing Left is in a <strong>private collection</strong>.`
      },
      {
        question: "Why did Schiele paint so many Czihaczek portraits?",
        answer: `Schiele <strong>lived with his uncle</strong> during his Vienna Academy years (1906-1909). Czihaczek was a readily available subject for the young artist.`
      }
    ]
  },
  {
    slug: 'egon-schiele-portrait-of-leopold-czihaczek-standing',
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> created Portrait of Leopold Czihaczek, Standing as a full-length study of his uncle and guardian. Unlike the head studies and seated poses in his other Czihaczek portraits, this work shows the railway official standing, giving a sense of his full physical presence and posture.</p>
<p>Czihaczek took over joint guardianship of Egon and his sister Gertrude after their father's death. Though he disapproved of his nephew's artistic ambitions, preferring he study engineering like the family tradition, he provided housing and support during Schiele's academy years. The standing pose may suggest formality or the uncle's authoritative role in the household.</p>
<p>Schiele's early portraits show competent but conventional technique, influenced by <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. The raw psychological intensity of his mature <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> had not yet emerged. By 1910, artistic and personal differences would end their relationship. The work remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "What makes this portrait different?",
        answer: `This is a <strong>full-length standing portrait</strong>, unlike <a href="/apps/masterpieces/artist/egon-schiele"><strong>Schiele's</strong></a> other Czihaczek works showing head studies or seated poses.`
      },
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Leopold Czihaczek, Standing is in a <strong>private collection</strong>.`
      },
      {
        question: "What happened to Schiele and Czihaczek's relationship?",
        answer: `Czihaczek <strong>resigned as guardian in 1910</strong>, citing Schiele's behavior "flouting any and all notions of morality."`
      }
    ]
  },
  {
    slug: 'portrait-louis-xiv-rigaud',
    description: `<p><a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a> painted the Portrait of Louis XIV in 1701, creating what became the most recognizable image of the Sun King. The monumental oil on canvas measures 277 x 194 cm and shows the sixty-two-year-old monarch in coronation robes embroidered with the royal fleur-de-lis, standing in a pose of absolute authority.</p>
<p>The portrait was commissioned as a gift for King Philip V of Spain, Louis's grandson. But it proved so successful at court that a copy was sent to Spain instead, while the original remained at Versailles. Rigaud executed the face on a small separate canvas, later sewn onto the larger composition, allowing him to achieve the finest detail in the King's features.</p>
<p>Louis wears the key elements of <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> court fashion: elaborate cravat, <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red</strong></a> heels, and an enormous wig. The goddess Justice appears on a column at left. Rigaud's purpose was not to capture personality but to glorify the monarchy. The painting hung at Versailles until 1793, when the Revolution transferred it to what became the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `The Portrait of Louis XIV is displayed at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris. It was transferred there after the French Revolution in 1793.`
      },
      {
        question: "How big is this painting?",
        answer: `The portrait measures <strong>277 x 194 cm</strong> (approximately 9 x 6.4 feet), making it a monumental state portrait.`
      },
      {
        question: "Why was the original kept instead of sent to Spain?",
        answer: `The portrait was so <strong>successful at court</strong> that Louis XIV kept the original at Versailles and sent a copy to his grandson Philip V of Spain.`
      },
      {
        question: "How old was Louis XIV in this portrait?",
        answer: `Louis XIV was <strong>sixty-two years old</strong> when <a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Rigaud</strong></a> painted this in 1701, at the summit of his reign.`
      }
    ]
  },
  {
    slug: 'frida-kahlo-portrait-of-lupe-mar237n',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted Portrait of Lupe Marín in 1929, the same year she married Diego Rivera. The oil on canvas shows Rivera's second wife in the <a href="/apps/masterpieces/movement/naive-art"><strong>Naïve Art</strong></a> style Kahlo was developing. The portrait has since been destroyed, making it one of Kahlo's lost works.</p>
<p>Lupe Marín (1895-1983) was a Mexican model and writer who had two daughters with Rivera before their divorce in 1927. Kahlo's decision to paint her husband's ex-wife reveals something about the complex relationships within Mexico's artistic circle. The women maintained a connection; Marín's daughters were raised partly by Kahlo and Rivera after the marriage.</p>
<p>Kahlo created this portrait during her early career, before the surrealist <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>self-portraits</strong></a> that would bring her international recognition. The work's destruction means we rely on descriptions and reproductions to understand its appearance. It was originally held in a <strong>private collection</strong> before being lost.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Unfortunately, Portrait of Lupe Marín has been <strong>destroyed</strong> and no longer exists. It's one of <a href="/apps/masterpieces/artist/frida-kahlo"><strong>Kahlo's</strong></a> lost works.`
      },
      {
        question: "Who was Lupe Marín?",
        answer: `Lupe Marín was <strong>Diego Rivera's second wife</strong> before he married Kahlo. She was a Mexican model and writer with two daughters.`
      },
      {
        question: "Why did Kahlo paint Rivera's ex-wife?",
        answer: `Kahlo painted this in <strong>1929, the year she married Rivera</strong>. The women were connected through Mexico's artistic circle and Rivera's daughters.`
      }
    ]
  },
  {
    slug: 'frida-kahlo-portrait-of-luther-burbank',
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted Portrait of Luther Burbank in 1931, a surrealist tribute to the American horticulturist who revolutionized plant breeding. The oil on masonite measures 87 x 62 cm and shows Burbank as a human-plant hybrid, his body merged with a tree trunk, his legs becoming roots fed by his own corpse underground.</p>
<p>Burbank (1849-1926) developed over 800 plant varieties during his career, including the Shasta daisy and the Russet Burbank potato. Kahlo painted him in San Francisco, where she and Diego Rivera were living. The portrait shows her characteristic duality of life and death: Burbank holds an uprooted plant above ground while his decaying body nourishes the roots below.</p>
<p>Standing in a black suit against <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> foliage and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue</strong></a> sky, Burbank represents humanity's connection to nature. Life and death intertwine, each feeding the other. The painting hangs at the <a href="/apps/masterpieces/museum/dolores-olmedo-collection"><strong>Dolores Olmedo Collection</strong></a> in Mexico City.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of Luther Burbank?",
        answer: `Portrait of Luther Burbank is displayed at the <a href="/apps/masterpieces/museum/dolores-olmedo-collection"><strong>Dolores Olmedo Collection</strong></a> (Museo Dolores Olmedo) in Mexico City.`
      },
      {
        question: "Who was Luther Burbank?",
        answer: `Luther Burbank (1849-1926) was an American <strong>horticulturist</strong> who developed over 800 plant varieties, including the Shasta daisy.`
      },
      {
        question: "What does the painting symbolize?",
        answer: `<a href="/apps/masterpieces/artist/frida-kahlo"><strong>Kahlo</strong></a> shows <strong>life and death intertwined</strong>. Burbank's corpse feeds the tree roots while his living half holds plants above ground.`
      }
    ]
  },
  {
    slug: 'mary-cassatt-portrait-of-madame-cordier',
    description: `<p><a href="/apps/masterpieces/artist/mary-cassatt"><strong>Mary Cassatt</strong></a> painted Portrait of Madame Cordier in 1874, an oil on canvas showing a woman in elegant black and white attire. The subject sits slightly in profile, her gaze avoiding the viewer to create an air of introspection. A luminous lace blouse glows against the somber background.</p>
<p>Cassatt was one of the few women in the <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> circle, breaking barriers at a time when female artists faced severe limitations. Her loose brushwork and attention to light show the influence of her French colleagues, though she brought her own approach to depicting <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women's</strong></a> character and identity.</p>
<p>The composition balances elegance and sobriety. Madame Cordier's black dress contrasts with her fair complexion and white lace, while her averted gaze adds mystery. This focus on psychological depth became a recurring theme in Cassatt's work. The portrait remains in a <strong>private collection</strong>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Madame Cordier is in a <strong>private collection</strong> and not currently on public display.`
      },
      {
        question: "What style is this portrait?",
        answer: `The painting combines <strong>Realism with Impressionist</strong> influence. <a href="/apps/masterpieces/artist/mary-cassatt"><strong>Cassatt's</strong></a> loose brushwork and light handling reflect her French colleagues.`
      },
      {
        question: "What was significant about Mary Cassatt?",
        answer: `Cassatt was one of the few <strong>women in the Impressionist circle</strong>, breaking barriers when female artists faced severe professional limitations.`
      }
    ]
  },
  {
    slug: 'elisabeth-vigee-le-brun-portrait-of-madame-du-barry',
    description: `<p><a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Élisabeth Vigée Le Brun</strong></a> painted Portrait of Madame du Barry in 1781, depicting the former mistress of King Louis XV. The oil on canvas shows Jeanne Bécu, Comtesse du Barry, years after her royal lover's death in 1774. Vigée Le Brun described her as still attractive at about forty-five, with ash blonde curly hair "like a child's."</p>
<p>Vigée Le Brun painted du Barry multiple times, including versions in 1782 and 1789. The fact that Marie Antoinette's official portraitist would paint du Barry suggests how much the former courtesan's reputation had shifted since her scandal-ridden introduction to court. Born illegitimate, du Barry had been set up as a courtesan before catching the King's eye.</p>
<p>Both <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> met tragic ends during the Revolution. Du Barry was guillotined in 1793, buried in the same cemetery as Marie Antoinette. One portrait changed hands among French aristocracy before joining the Rothschild collection, selling at Christie's for $975,000 in 2019. This version hangs at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `This Portrait of Madame du Barry is displayed at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art"><strong>Philadelphia Museum of Art</strong></a>. Other versions exist in different collections.`
      },
      {
        question: "Who was Madame du Barry?",
        answer: `Jeanne Bécu, Comtesse du Barry, was the <strong>last mistress of Louis XV</strong>. She was guillotined during the French Revolution in 1793.`
      },
      {
        question: "How many portraits did Vigée Le Brun paint of du Barry?",
        answer: `<a href="/apps/masterpieces/artist/elisabeth-vigee-le-brun"><strong>Vigée Le Brun</strong></a> painted du Barry <strong>at least three times</strong>, in 1781, 1782, and 1789.`
      }
    ]
  },
  {
    slug: 'jean-auguste-dominique-ingres-portrait-of-mademoiselle-rivi232re',
    description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted Portrait of Mademoiselle Rivière in 1805, depicting Caroline Rivière at about thirteen or fourteen years old. The oil on canvas measures 100 x 70 cm and shows her in a white dress with a fur boa, set against a watery landscape. Ingres described her as the "ravishing daughter" of his patron.</p>
<p>This portrait is the third of three Rivière family commissions. Caroline's father Philibert was a court official under Napoleon who sought to commemorate his family through the rising young artist. The three paintings were exhibited at the 1806 Salon, where critics attacked them for perceived "Gothicness," comparing them unfavorably to Jan van Eyck and Early Netherlandish painting.</p>
<p>Today the portrait is typically seen as a peak in Ingres's <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> career. The contrast between her <a href="https://luxurywallart.com/collections/white-wall-art" target="_blank" rel="noopener"><strong>white</strong></a> dress and curved boa offended some viewers then, but now reads as elegantly rhythmic. Caroline's sister-in-law bequeathed the painting to the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in 1870.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Mademoiselle Rivière is displayed at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris. It was bequeathed in 1870.`
      },
      {
        question: "How old was Caroline Rivière?",
        answer: `Caroline was between <strong>thirteen and fifteen</strong> years old when <a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Ingres</strong></a> painted her. He called her the "ravishing daughter."`
      },
      {
        question: "How was the portrait received?",
        answer: `Critics at the 1806 Salon <strong>attacked the painting's "Gothicness"</strong> and precision. Today it's considered a peak in Ingres's career.`
      }
    ]
  },
  {
    slug: 'fernand-khnopff-portrait-of-marguerite-khnopff',
    description: `<p><a href="/apps/masterpieces/artist/fernand-khnopff"><strong>Fernand Khnopff</strong></a> painted Portrait of Marguerite Khnopff in 1887, a full-length oil on canvas (mounted on wood) measuring 96 x 74.5 cm. The work depicts his beloved sister standing before a closed door, looking away from the viewer. Khnopff always cherished this portrait, illustrating what many describe as an obsessive relationship.</p>
<p>Marguerite became Khnopff's primary model after an incident with another model. She represents his ideal woman: beautiful yet out of reach, present yet emotionally distant. Her averted gaze and folded arm create psychological tension. Some scholars see inspiration from the Greek goddess Athena, adding mysticism to the composition.</p>
<p>In 1889, Khnopff created "Memories," a pastel showing seven women playing tennis, all modeled after Marguerite in different poses from photographs. When she married in 1890 and moved away, Khnopff felt profound loss. The portrait belongs to the King Baudouin Foundation and hangs at the <a href="/apps/masterpieces/museum/royal-museum-of-fine-arts-antwerp"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels, a key work of <a href="/apps/masterpieces/movement/symbolism"><strong>Symbolism</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Marguerite Khnopff is displayed at the <a href="/apps/masterpieces/museum/royal-museum-of-fine-arts-antwerp"><strong>Royal Museums of Fine Arts of Belgium</strong></a> in Brussels.`
      },
      {
        question: "Who was Marguerite Khnopff?",
        answer: `Marguerite was <a href="/apps/masterpieces/artist/fernand-khnopff"><strong>Khnopff's</strong></a> <strong>beloved sister and primary model</strong>. She represented his ideal woman in many works.`
      },
      {
        question: "Why does Marguerite look away?",
        answer: `Her <strong>averted gaze</strong> creates psychological tension, suggesting she is out of reach, present yet emotionally distant from the viewer.`
      }
    ]
  },
  {
    slug: 'jean-leon-gerome-portrait-of-marianne-elisa-birch',
    description: `<p><a href="/apps/masterpieces/artist/jean-leon-gerome"><strong>Jean-Léon Gérôme</strong></a> painted Portrait of Marianne Elisa Birch in 1849, depicting the wife of poet Alphonse de Lamartine. The oil on canvas shows her seated gracefully with a fan in hand, wearing an off-the-shoulder dress. An oval mirror behind her reflects her black hair and elegant profile.</p>
<p>Gérôme (1824-1904) was just twenty-five when he created this portrait, years before becoming a leading <a href="/apps/masterpieces/movement/academicism"><strong>Academic</strong></a> painter known for Orientalist and historical subjects. His early work shows skill with formal portraiture and attention to decorative details. Birch wears jewelry including a charm bracelet, each element carefully rendered.</p>
<p>Marianne Elisa Birch (1790-1863) was an English painter who married Lamartine in 1820. She appears here as a <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> of elegance and refinement. The portrait hangs at the <a href="/apps/masterpieces/museum/musee-ingres"><strong>Musée Ingres</strong></a> in Montauban, France, named for Gérôme's teacher and fellow Neoclassicist.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Marianne Elisa Birch is displayed at the <a href="/apps/masterpieces/museum/musee-ingres"><strong>Musée Ingres</strong></a> in Montauban, France.`
      },
      {
        question: "Who was Marianne Elisa Birch?",
        answer: `Marianne Elisa Birch (1790-1863) was an <strong>English painter</strong> and wife of French poet Alphonse de Lamartine.`
      },
      {
        question: "How old was Gérôme when he painted this?",
        answer: `<a href="/apps/masterpieces/artist/jean-leon-gerome"><strong>Gérôme</strong></a> was only <strong>twenty-five</strong> in 1849, years before his fame for Orientalist and historical subjects.`
      }
    ]
  },
  {
    slug: 'gustav-klimt-portrait-of-marie-breunig',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted Portrait of Marie Breunig around 1894, a large-format oil on canvas measuring 168 x 84 cm. The work shows the wife of a Viennese bakery owner in profile, her porcelain-white skin contrasting dramatically with her black dress against a neutral background. Klimt received the commission through the Flöge sisters' fashion salon, where Breunig was a client.</p>
<p>The portrait demonstrates almost hyperrealistic accuracy in places, likely aided by photography. Yet Klimt's painted version differs through extraordinary refinement of reality. The contrast between pale skin and deep black appears particularly delicate, carefully built up through precise brushwork.</p>
<p>Marie Breunig was born in humble circumstances in one of the Austro-Hungarian crownlands before marrying a successful Viennese businessman. This large portrait represents the high point of Klimt's early 1890s style, before the <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden</strong></a> decorative period that would make him famous. The painting is held in a <strong>private collection</strong>, though the <a href="/apps/masterpieces/museum/belvedere-museum"><strong>Belvedere Museum</strong></a> in Vienna has exhibited it.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Marie Breunig is in a <strong>private collection</strong>. The <a href="/apps/masterpieces/museum/belvedere-museum"><strong>Belvedere Museum</strong></a> in Vienna has exhibited it.`
      },
      {
        question: "Who was Marie Breunig?",
        answer: `Marie Breunig was the <strong>wife of a Viennese bakery owner</strong> and client of the Flöge sisters' fashion salon, where <a href="/apps/masterpieces/artist/gustav-klimt"><strong>Klimt</strong></a> had connections.`
      },
      {
        question: "What style is this portrait?",
        answer: `This shows Klimt's early <strong>hyperrealistic style</strong> from the 1890s, before his famous golden decorative period.`
      }
    ]
  },
  {
    slug: 'jacques-louis-david-portrait-of-marie-francoise-buron',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted Portrait of Marie-Françoise Buron in 1769, an oil on canvas measuring 66 x 54 cm depicting his cousin. Art historians believe David and Buron may have had a love affair, making this portrait possibly an attempt to immortalize his beloved on canvas.</p>
<p>David was about twenty-one when he created this relatively small work, still building confidence before tackling larger, more ambitious projects. The same year, he painted several other Buron portraits, all single-figure compositions. The technique called "craquelure," applying multiple layers of paint for texture, creates distinctive effects in the dress.</p>
<p>This early portrait shows David before his <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> masterpieces like The Death of Marat and Napoleon Crossing the Alps. The intimate scale and personal subject matter differ from the monumental historical paintings that would define his career. The portrait hangs at the <a href="/apps/masterpieces/museum/national-museum-of-fine-arts-of-algiers"><strong>National Museum of Fine Arts of Algiers</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `Portrait of Marie-Françoise Buron is displayed at the <a href="/apps/masterpieces/museum/national-museum-of-fine-arts-of-algiers"><strong>National Museum of Fine Arts of Algiers</strong></a> in Algeria.`
      },
      {
        question: "Who was Marie-Françoise Buron?",
        answer: `Marie-Françoise Buron was <a href="/apps/masterpieces/artist/jacques-louis-david"><strong>David's</strong></a> <strong>cousin</strong>. Some historians believe they had a romantic relationship.`
      },
      {
        question: "How old was David when he painted this?",
        answer: `David was about <strong>twenty-one years old</strong> in 1769, early in his career before his famous Neoclassical works.`
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment for 20 portrait artworks...\n');

  for (const artwork of artworks) {
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

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
