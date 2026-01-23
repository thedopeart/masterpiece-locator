const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'maurice-quentin-de-la-tour-jean-le-rond-d39alembert',
    description: `<p><a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this pastel portrait of philosopher Jean Le Rond d'Alembert in 1753. The work shows d'Alembert with a lively, almost laughing expression, which was unusual for formal portraits of the period. Most portraits of intellectuals depicted them with stern, serious faces. La Tour chose to capture something different: the warmth and wit of his subject.</p>
<p>D'Alembert was one of the leading minds of the <strong>French Enlightenment</strong>. He co-edited the famous Encyclopédie with Denis Diderot and made significant contributions to mathematics and physics. At the time this portrait was made, he held memberships in the French Academy of Sciences, the Royal Society of London, and the Berlin Academy. La Tour exhibited the work at the Salon of 1753, where it drew considerable attention.</p>
<p>The artist worked from a preparatory study painted from life, now held at the Musée Antoine-Lécuyer in Saint-Quentin. For the finished version, he adjusted the direction of d'Alembert's gaze. The portrait remained in d'Alembert's possession until his death in 1783, when it passed to the philosopher Condorcet. Today it hangs in the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, displayed in the Sully wing on the second floor.</p>`,
    faqs: [
      {
        question: "Where can I see the portrait of Jean Le Rond d'Alembert?",
        answer: `This pastel portrait is displayed at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. You'll find it in the Sully wing, second floor, room 45, alongside other 18th-century French pastels.`
      },
      {
        question: "Who was Jean Le Rond d'Alembert?",
        answer: `D'Alembert was a French mathematician and philosopher who co-edited the <strong>Encyclopédie</strong> with Denis Diderot. He contributed to physics and mathematics, joining the Academy of Sciences at just 24 years old.`
      },
      {
        question: "What medium did La Tour use for this portrait?",
        answer: `<a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> worked in pastel on grey and blue paper. He was considered the foremost pastel portraitist of 18th-century France.`
      },
      {
        question: "When was this portrait created?",
        answer: `La Tour completed the portrait in 1753 and exhibited it at the Paris <strong>Salon</strong> that same year. It measured 550 by 458 millimeters (roughly 22 by 18 inches).`
      }
    ]
  },
  {
    slug: 'rembrandt-jean-lutma',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> made this etching and drypoint portrait of goldsmith Jan Lutma in 1656. The print shows Lutma seated in a leather-backed chair decorated with carved lion's head finials. He holds one of his own creations, a sculptured candlestick, while tools of his trade rest on the table beside him: a hammer, punches, and a small oval dish in the auricular style.</p>
<p>Lutma (c.1584-1669) was born in Emden, East Friesland, and moved to Amsterdam in 1621 after spending time in Paris. He became one of the city's most respected silversmiths, known for working in the <strong>auricular style</strong>, a flowing decorative approach that resembled ear cartilage. He received major commissions, including the rood screen for Amsterdam's Nieuwe Kerk. His son, Jan Lutma the younger, likely trained as an etcher in Rembrandt's studio.</p>
<p>The print exists in multiple states. In the second state, Rembrandt added a deep alcove and window behind the sitter, along with a glass bottle on the windowsill and his signature in the upper left window pane. The image measures about 19.7 by 14.9 centimeters (roughly 7.75 by 5.88 inches). Impressions are held by the <strong>Metropolitan Museum of Art</strong>, the Art Institute of Chicago, the British Museum, and other major collections.</p>`,
    faqs: [
      {
        question: "Who was Jan Lutma?",
        answer: `Jan Lutma was a renowned <strong>Amsterdam goldsmith</strong> who worked in the auricular style. He created the rood screen for the Nieuwe Kerk and befriended <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a>, who made this portrait etching.`
      },
      {
        question: "What technique did Rembrandt use for this portrait?",
        answer: `Rembrandt created this work using <strong>etching and drypoint</strong> on laid paper. He made multiple states, adding architectural elements and his signature in later versions.`
      },
      {
        question: "What objects appear in this portrait?",
        answer: `Lutma holds a sculptured <strong>candlestick</strong> he made himself. On the table beside him sit his tools: a hammer, punches, and a small oval dish showing his auricular metalwork style.`
      },
      {
        question: "Where can I see this etching?",
        answer: `Impressions exist at the <strong>Metropolitan Museum of Art</strong> in New York, the Art Institute of Chicago, the British Museum, and the National Galleries of Scotland, among other collections.`
      }
    ]
  },
  {
    slug: 'rembrandt-jesus-christ-entombed',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching depicting the entombment of Christ around 1652-1656. The print shows the moment when Jesus's body is placed in the tomb following the crucifixion, a scene from the Passion narrative that appears in all four Gospels. Rembrandt approached biblical subjects throughout his career, but the 1650s marked a particularly intense period of religious printmaking.</p>
<p>The composition uses Rembrandt's characteristic handling of <strong>light and shadow</strong> to create dramatic effect. Figures emerge from darkness, their forms defined by stark contrasts. This treatment gives the scene both physical weight and spiritual gravity. The artist was known for depicting Christ's body with uncommon realism, emphasizing its humanity and physical presence.</p>
<p>Rembrandt produced numerous <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual art</strong></a> works during his lifetime, with his religious prints standing among his most celebrated achievements. His biblical etchings were prized by collectors even in his own time, with some commanding unusually high prices. The work belongs to his series of Passion scenes that trace Christ's suffering, death, and burial.</p>`,
    faqs: [
      {
        question: "What biblical scene does this print depict?",
        answer: `The etching shows the <strong>entombment of Christ</strong>, when Jesus's body was placed in the tomb after the crucifixion. This scene appears in all four Gospels of the New Testament.`
      },
      {
        question: "When did Rembrandt create this print?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> created this etching around 1652-1656, during a decade when he produced many of his most significant religious prints.`
      },
      {
        question: "What artistic technique did Rembrandt use?",
        answer: `Rembrandt used <strong>etching</strong> to create this work. He was famous for his dramatic use of light and shadow, a technique that gave his religious scenes emotional power.`
      }
    ]
  },
  {
    slug: 'rembrandt-jesus-christ-s-body-carried-to-the-tomb',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the transportation of Christ's body to the tomb in this work. The scene follows immediately after the Deposition, when Jesus was taken down from the cross. His followers carry the body through darkness toward burial, a moment of grief and reverence captured with the artist's distinctive handling of shadow.</p>
<p>Rembrandt returned to Passion subjects repeatedly throughout his career. He created both paintings and prints showing Christ's suffering, death, and burial. His approach stood apart from other artists of his time. Rather than idealizing the figures, he gave them ordinary human qualities. Christ's body shows the weight of death. The mourners express real sorrow.</p>
<p>The <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London holds this work in their collection. Rembrandt's <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>religious artwork</strong></a> influenced generations of artists who followed him. His biblical scenes combined technical skill with genuine emotional depth, treating sacred stories as human experiences.</p>`,
    faqs: [
      {
        question: "Where is this artwork located?",
        answer: `This work by <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> is held at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, UK, one of the world's major art museums.`
      },
      {
        question: "What moment does this artwork show?",
        answer: `The work depicts Christ's body being carried to the tomb after the <strong>Deposition</strong>, when he was taken down from the cross. It's part of the Passion narrative sequence.`
      },
      {
        question: "Why is Rembrandt's religious art significant?",
        answer: `Rembrandt depicted biblical figures with unusual <strong>humanity and realism</strong>. Rather than idealizing sacred scenes, he showed them as genuine human experiences with real emotion.`
      }
    ]
  },
  {
    slug: 'rembrandt-jesus-disputing-the-doctors-a-larger-print',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicted the young Jesus debating with scholars in this etching. The scene comes from Luke's Gospel, which describes how the twelve-year-old Jesus stayed behind in the Temple of Jerusalem after his parents left. When Mary and Joseph returned, they found him discussing scripture with the learned doctors, who were astonished by his understanding.</p>
<p>Rembrandt produced multiple versions of this subject in the 1650s, working in both <strong>etching and drawing</strong>. This larger print shows his mature approach to biblical scenes, using dramatic contrasts of light and dark to focus attention on the central figure. The young Christ sits among older scholars whose reactions range from wonder to skepticism.</p>
<p>The artist's religious prints were highly valued even during his lifetime. His etching Christ Preaching, known as the "Hundred Guilder Print," earned its nickname from the substantial sums collectors paid for impressions. Rembrandt treated New Testament stories as human dramas, giving his <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual subjects</strong></a> psychological depth that distinguished them from conventional religious imagery.</p>`,
    faqs: [
      {
        question: "What biblical story does this print illustrate?",
        answer: `The print shows young <strong>Jesus in the Temple</strong>, debating with religious scholars at age twelve. This story from Luke's Gospel describes how he amazed the doctors with his understanding.`
      },
      {
        question: "Did Rembrandt create other versions of this subject?",
        answer: `Yes, <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> produced both larger and smaller prints of this scene in the 1650s, along with related drawings, exploring the subject in different formats.`
      },
      {
        question: "What technique did Rembrandt use?",
        answer: `Rembrandt created this work as an <strong>etching</strong>, using his distinctive handling of light and shadow to dramatize the scene and focus attention on the young Christ.`
      }
    ]
  },
  {
    slug: 'rembrandt-jesus-disputing-with-the-doctors',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> explored the story of young Jesus in the Temple through this work. According to the Gospel of Luke, the twelve-year-old Jesus remained in Jerusalem after the Passover festival while his parents traveled home. When they returned three days later, they found him in the Temple, sitting among the teachers, listening and asking questions. Everyone who heard him was amazed at his understanding.</p>
<p>Rembrandt depicted biblical narratives throughout his career, treating them as intimate human stories rather than distant sacred events. He showed the <strong>Temple scholars</strong> reacting to Christ's words with varied expressions. Some lean forward in interest, others sit back in thought. The composition draws viewers into the scene as if they too were present.</p>
<p>The artist created multiple works on this theme during the 1650s. His approach to religious subjects earned him recognition even in his lifetime. At his death in 1669, an inventory of his possessions listed only one book: his well-worn Dutch Bible. This <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual imagery</strong></a> reveals his deep engagement with scripture.</p>`,
    faqs: [
      {
        question: "What story does this artwork depict?",
        answer: `The work shows twelve-year-old <strong>Jesus debating</strong> with scholars in the Jerusalem Temple, a scene from the Gospel of Luke describing his early display of wisdom.`
      },
      {
        question: "When was this created?",
        answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> worked on versions of this subject during the 1650s, a period when he produced many of his most significant religious works.`
      },
      {
        question: "How did Rembrandt approach biblical scenes?",
        answer: `Rembrandt treated <strong>religious narratives</strong> as human dramas, showing varied emotional reactions and psychological depth rather than idealized or distant sacred imagery.`
      }
    ]
  },
  {
    slug: 'alexandre-cabanel-jesus-in-the-pretorium',
    description: `<p><a href="/apps/masterpieces/artist/alexandre-cabanel"><strong>Alexandre Cabanel</strong></a> painted this scene of Christ's trial in 1845, when he was just twenty-two years old. The work depicts Jesus in the praetorium, the Roman governor's headquarters, where he was mocked and tormented by soldiers before his crucifixion. Cabanel created it for the prestigious Prix de Rome competition, spending 72 days in seclusion to complete the final canvas.</p>
<p>The painting shows Cabanel's training in the <strong>Academic tradition</strong>. He used earth tones with strategic pops of red, rendered flesh with precision, and included hints of monumental architecture in the background. Despite these qualities, he came in second place. The judges felt his figures were too vigorous and expressive compared to the more restrained, classical style they preferred.</p>
<p>This work and his "Christ in the Garden of Olives" were among Cabanel's earliest recognized religious paintings. He would later become famous for mythological subjects like "The Birth of Venus" (1863), which Napoleon III purchased. Today, "Jesus in the Pretorium" hangs at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, representing his early engagement with <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual subjects</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `"Jesus in the Pretorium" is displayed at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris, France, which houses a major collection of 19th-century French academic and Impressionist art.`
      },
      {
        question: "Why did Cabanel create this painting?",
        answer: `<a href="/apps/masterpieces/artist/alexandre-cabanel"><strong>Cabanel</strong></a> painted it for the <strong>Prix de Rome</strong> competition in 1845. He spent 72 days creating the canvas but came in second place to a rival student.`
      },
      {
        question: "What scene does the painting depict?",
        answer: `The painting shows Christ in the <strong>praetorium</strong>, the Roman governor's headquarters, where soldiers mocked him before the crucifixion. It's a scene from the Passion narrative.`
      },
      {
        question: "What style is this painting?",
        answer: `Cabanel painted in the French <strong>Academic style</strong>, using careful technique, classical composition, and restrained colors with strategic accents of red throughout the scene.`
      }
    ]
  },
  {
    slug: 'paul-delaroche-joan-d39arc-being-interrogated',
    description: `<p><a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> painted this dramatic scene of Joan of Arc's interrogation in 1824. The large canvas, measuring 277 by 217.5 centimeters, shows the young saint lying ill on a bed of straw while the Cardinal of Winchester threatens her with damnation. His fierce profile and angular posture contrast sharply with Joan's vulnerable but defiant position, her manacled hands clasped in prayer.</p>
<p>Delaroche took artistic liberty with history. Joan was actually interrogated by Pierre Cauchon, Bishop of Beauvais, not by the Cardinal of Winchester. The artist chose Winchester because English audiences knew him from Shakespeare's Henry VI plays. The 1824 Salon, where this painting debuted, marked the official birth of <strong>Romanticism</strong> in French art. Delaroche's work hung alongside paintings by Delacroix, Scheffer, and Horace Vernet.</p>
<p>Critics praised the composition, which drew inspiration from Titian's "Pope Paul III and his Grandsons." The subject of Joan of Arc carried strong nationalist and royalist associations in France after the Bourbon restoration of 1815. Today the painting hangs at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-de-rouen-rouen-france"><strong>Musée des Beaux-Arts de Rouen</strong></a>, with a smaller replica at the Wallace Collection in London.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `The original painting is at the <a href="/apps/masterpieces/museum/mus233e-des-beauxarts-de-rouen-rouen-france"><strong>Musée des Beaux-Arts de Rouen</strong></a> in France. A smaller replica exists at the Wallace Collection in London.`
      },
      {
        question: "Is this scene historically accurate?",
        answer: `No, <a href="/apps/masterpieces/artist/paul-delaroche"><strong>Delaroche</strong></a> changed history for dramatic effect. Joan was interrogated by Bishop <strong>Pierre Cauchon</strong>, not the Cardinal of Winchester as shown.`
      },
      {
        question: "When was this painting created?",
        answer: `Delaroche completed the painting in 1824 and exhibited it at the Paris <strong>Salon</strong> that year, an event that marked the birth of Romanticism as a French art movement.`
      },
      {
        question: "How large is this painting?",
        answer: `The canvas measures 277 by 217.5 centimeters (roughly 109 by 86 inches), making it a substantial <strong>history painting</strong> typical of French academic tradition.`
      }
    ]
  },
  {
    slug: 'job-cigarettes',
    description: `<p><a href="/apps/masterpieces/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> created this poster for Job cigarette rolling papers in 1896. Originally titled "La Femme Blonde" (The Blonde Woman), it became one of the most recognizable images of the Art Nouveau movement. The design shows an elegant woman with flowing hair that spirals around her, wrapping with the word "JOB" in a decorative circle above her head.</p>
<p>The composition features Mucha's signature style: organic curved lines, elaborate floral patterns, and <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>gold and white</strong></a> color harmonies. F. Champenois in Paris printed the original lithograph in two editions. The popular version sold for 3 francs, while a deluxe edition commanded higher prices. Both sold so well that people bought copies to hang as art rather than advertisements.</p>
<p>Mucha became famous almost overnight in 1895 when his poster for actress Sarah Bernhardt appeared around Paris. His work for Job cemented his reputation. The company commissioned several artists, including Jules Chéret, but Mucha's posters remain the most collected. In the 1960s, Art Nouveau experienced a revival, and Stanley Mouse and Alton Kelley reinterpreted Mucha's Job poster with psychedelic effects for the rock music scene.</p>`,
    faqs: [
      {
        question: "What was this poster advertising?",
        answer: `The poster advertised <strong>Job cigarette rolling papers</strong>, a French company that hired several artists including <a href="/apps/masterpieces/artist/alphonse-mucha"><strong>Alphonse Mucha</strong></a> to create promotional artwork.`
      },
      {
        question: "What style is this poster?",
        answer: `This is a prime example of <strong>Art Nouveau</strong>, featuring organic curved lines, flowing hair, floral patterns, and decorative typography integrated into the design.`
      },
      {
        question: "When was this poster created?",
        answer: `Mucha created the poster in <strong>1896</strong>, printed by F. Champenois in Paris. It was released in both popular and deluxe editions due to high demand.`
      },
      {
        question: "What was the poster's original title?",
        answer: `Mucha originally titled the work "<strong>La Femme Blonde</strong>" (The Blonde Woman), though it became better known simply as the Job poster or Job Cigarettes.`
      }
    ]
  },
  {
    slug: 'edgar-degas-jockey-in-blue-on-a-chestnut-horse',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this oil on panel around 1889. The small work, measuring just 27 by 22 centimeters, captures a jockey in blue silks steering a chestnut horse sharply to the right. Degas positioned the figures off-center on the left side of the composition, a bold choice that reinforces the sense of movement and direction change.</p>
<p>This modestly sized sketch served as an experiment in capturing motion. Degas made multiple attempts to convey the forceful energy of the animal while the rider imposes an abrupt change of trajectory. A serpentine river flows in the background, its curves echoing the dynamic tension of the main figures. The artist approached similar problems in his wax sculptures of <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horses</strong></a>.</p>
<p>Degas began painting horse racing scenes in the 1860s after visiting friends in Normandy and attending the newly opened Longchamp racecourse. He returned to the subject throughout his career, manipulating horses and jockeys from one picture to the next. The Virginia Museum of Fine Arts holds this painting as part of the Paul Mellon Collection.</p>`,
    faqs: [
      {
        question: "Where is this painting located?",
        answer: `This work is held at the <strong>Virginia Museum of Fine Arts</strong> in Richmond, Virginia, as part of the Paul Mellon Collection of French art.`
      },
      {
        question: "What medium did Degas use?",
        answer: `<a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> painted this work in <strong>oil on panel</strong>, a more intimate format than his larger canvas compositions of similar racing subjects.`
      },
      {
        question: "Why did Degas paint horse racing scenes?",
        answer: `Degas became interested in <strong>horse racing</strong> after visiting Normandy in the 1860s and attending races at Longchamp. He explored the subject throughout his career.`
      },
      {
        question: "How large is this painting?",
        answer: `The panel measures just <strong>27 by 22 centimeters</strong> (about 10.5 by 8.5 inches), making it a small, sketch-like study rather than a finished exhibition piece.`
      }
    ]
  },
  {
    slug: 'edgar-degas-jockeys',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted horse racing subjects throughout his career, producing dozens of works showing jockeys before, during, and after races. This painting belongs to that extensive body of work. Degas didn't simply copy nature. He manipulated his figures from one composition to the next, enlarging, reversing, or reducing them to fit different backgrounds.</p>
<p>The artist drew on multiple sources for his <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse imagery</strong></a>. Some poses traced back to old masters. The prancing mount and rider that appear in several works derive from Benozzo Gozzoli's 15th-century "Journey of the Magi" in Florence, which Degas had copied in 1859. He combined historical references with direct observation of contemporary racing.</p>
<p>Horse racing boomed in France after Longchamp racecourse opened in 1857. The track attracted regular spectators including Degas, Édouard Manet, and Henri de Toulouse-Lautrec. While most visitors remember Degas for his ballet dancers, his racing scenes represent equally sophisticated explorations of movement and light. The <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> holds this work in their collection.</p>`,
    faqs: [
      {
        question: "Where can I see this painting?",
        answer: `This work is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which has an extensive collection of Impressionist paintings including several horse racing scenes by Degas.`
      },
      {
        question: "Why did Degas paint jockeys?",
        answer: `<a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> became fascinated with <strong>horse racing</strong> after Longchamp racecourse opened in 1857. He explored the subject alongside his more famous ballet scenes.`
      },
      {
        question: "How did Degas compose his racing scenes?",
        answer: `Degas didn't copy nature directly. He <strong>manipulated figures</strong> between paintings, sometimes borrowing poses from old masters like Benozzo Gozzoli's 15th-century frescoes.`
      }
    ]
  },
  {
    slug: 'edgar-degas-jockeys-at-epsom',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted racing scenes at both French and English tracks. Epsom Downs in England hosted one of the world's most famous horse races, the Derby, attracting crowds and artists alike. Degas captured the atmosphere of the racing world without always specifying exact locations. His interest lay in movement, color, and the relationship between rider and <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a>.</p>
<p>The artist stepped up his production of racing subjects in the 1880s. He worked from direct observation, photographs, and his own imagination, combining these sources freely. A single composition might include horses studied at Longchamp, poses borrowed from Renaissance masters, and backgrounds invented in the studio. This approach gave his work both authenticity and artistic freedom.</p>
<p>Degas explored similar subjects in sculpture, modeling horses in wax to study their movement in three dimensions. These experiments informed his paintings. The <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> displays this work alongside other Impressionist paintings in their collection.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `This work is part of the collection at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which holds several racing scenes by <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a>.`
      },
      {
        question: "Did Degas actually visit Epsom?",
        answer: `Degas traveled and painted racing scenes at various tracks. He combined direct observation with photographs and studio work, so his titles don't always indicate <strong>specific locations</strong>.`
      },
      {
        question: "What interested Degas about horse racing?",
        answer: `Degas was fascinated by <strong>movement and light</strong>. Racing gave him subjects in constant motion, allowing him to explore similar concerns as his famous ballet dancer paintings.`
      }
    ]
  },
  {
    slug: 'edgar-degas-jockeys-in-the-rain',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this racing scene showing jockeys in wet weather conditions. Rain adds atmosphere and challenge to the composition, with moisture affecting how light plays across the horses and riders. Degas often chose unexpected moments rather than the obvious drama of the race itself, preferring the anticipation before the start or the aftermath.</p>
<p>The artist worked on racing subjects from the 1860s until his eyesight began to fail. He knew the world of French racing well, attending meets at Longchamp and other tracks. But his paintings weren't straightforward records. He rearranged elements, borrowed poses, and adjusted colors to serve his artistic purposes. The <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horses</strong></a> in his paintings represent a synthesis of observation and imagination.</p>
<p>Rain scenes allowed Degas to explore how weather transforms ordinary subjects. The dampness creates different reflections, muted colors, and changed postures as riders hunch against the elements. The <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> holds this work in their extensive collection of Impressionist art.</p>`,
    faqs: [
      {
        question: "Where can I view this painting?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which features one of America's strongest collections of Impressionist works including multiple Degas racing scenes.`
      },
      {
        question: "Why did Degas paint jockeys in rain?",
        answer: `<a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> was interested in how <strong>weather transforms light</strong> and color. Rain creates different reflections and muted tones, offering new artistic challenges.`
      },
      {
        question: "What moments did Degas prefer to paint?",
        answer: `Rather than the obvious excitement of races, Degas often chose <strong>quieter moments</strong>: jockeys waiting, horses being prepared, or riders dealing with weather conditions.`
      }
    ]
  },
  {
    slug: 'lucas-cranach-elder-johannes-reuss',
    description: `<p><a href="/apps/masterpieces/artist/lucas-cranach-elder"><strong>Lucas Cranach the Elder</strong></a> painted this portrait of Johannes Reuss in 1503. The work shows a half-length figure facing right, dressed in a red overcoat with a pomegranate pattern, lined and trimmed with fur. He wears a chaperon and red cap, with gold buttons visible on his sleeves and undergarment. Five rings adorn his fingers, and his hands rest on the pages of an open book supported by a marble balustrade.</p>
<p>The background contains symbolic elements: a dead tree stands beside a group of blossoming trees, with a bird perched on one of the bare branches and two more flying toward it. Scholars believe the subject may be Johannes Stephan Reuss, Rector of the University of Vienna. The portrait formed a pair with one of his wife, now in Berlin's Gemäldegalerie.</p>
<p>Cranach painted this during his time in Vienna, before he became court painter to Frederick the Wise of Saxony and a close associate of <strong>Martin Luther</strong>. The <a href="/apps/masterpieces/museum/germanisches-nationalmuseum-nuremberg-germany"><strong>Germanisches Nationalmuseum</strong></a> in Nuremberg holds this work, which measures 52 by 39 centimeters.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The portrait hangs at the <a href="/apps/masterpieces/museum/germanisches-nationalmuseum-nuremberg-germany"><strong>Germanisches Nationalmuseum</strong></a> in Nuremberg, Germany, which holds significant Northern Renaissance works.`
      },
      {
        question: "Who was Johannes Reuss?",
        answer: `Scholars believe he may be <strong>Johannes Stephan Reuss</strong>, Rector of the University of Vienna. <a href="/apps/masterpieces/artist/lucas-cranach-elder"><strong>Cranach</strong></a> painted him alongside a companion portrait of his wife.`
      },
      {
        question: "When did Cranach paint this portrait?",
        answer: `Cranach completed this work in <strong>1503</strong>, during his time in Vienna before becoming court painter to Frederick the Wise of Saxony.`
      },
      {
        question: "What symbolic elements appear in the background?",
        answer: `The painting includes a <strong>dead tree beside blossoming trees</strong>, with birds perched and flying. These likely carry symbolic meaning about life, death, or renewal.`
      }
    ]
  },
  {
    slug: 'thomas-gainsborough-john-kirby',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this portrait of John Kirby around 1752-1753. The oil on canvas measures 76.2 by 63.7 centimeters and shows Gainsborough's early portrait style before he moved to Bath and became one of England's most sought-after painters. The work captures his friendship with the Kirby family.</p>
<p>The subject appears to be John Joshua Kirby, a topographical draughtsman who made the rules of perspective accessible to ordinary artists. Kirby distilled the complex mathematics from Brook Taylor's 1715 treatise into practical instructions that painters could actually use. His book earned him the position of teaching perspective to the future King George III, who later appointed him Clerk of the Works at Kew.</p>
<p>Gainsborough and Kirby remained close friends throughout their lives. When Gainsborough died in 1788, he expressed his wish to be buried near Joshua Kirby at St Anne's Church in Kew. The <a href="/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid"><strong>Fitzwilliam Museum</strong></a> at Cambridge University holds this portrait, a gift from Charles Fairfax Murray in 1908.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `The painting is displayed at the <a href="/apps/masterpieces/museum/fitzwilliam-museum-university-of-cambridge-cambrid"><strong>Fitzwilliam Museum</strong></a> at Cambridge University, donated by Charles Fairfax Murray in 1908.`
      },
      {
        question: "Who was John Kirby?",
        answer: `John Joshua Kirby was a <strong>draughtsman and perspective expert</strong> who taught the future King George III. <a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Gainsborough</strong></a> and Kirby were close lifelong friends.`
      },
      {
        question: "When did Gainsborough paint this portrait?",
        answer: `Gainsborough created this work around <strong>1752-1753</strong>, during his early career before moving to Bath where he became a leading society portraitist.`
      },
      {
        question: "How large is this painting?",
        answer: `The oil on canvas measures <strong>76.2 by 63.7 centimeters</strong> (roughly 30 by 25 inches), a typical size for 18th-century English portraits.`
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork updates...\n');

  for (const update of artworkUpdates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          description: update.description,
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.title}`);
    } catch (error) {
      console.error(`✗ Failed: ${update.slug}`, error.message);
    }
  }

  console.log('\nDone! Run "node get-artworks.js" to regenerate the checklist.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
