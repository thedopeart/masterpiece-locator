const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'juan-gris-portrait-of-pablo-picasso',
    description: `<p><a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> painted this portrait of Pablo Picasso in 1912 as his artistic debut. The work shows Picasso holding a palette, depicted through the fractured planes and geometric forms of Analytical Cubism. Gris inscribed "Hommage à Pablo Picasso" at the bottom right, acknowledging his mentor's role in developing the movement.</p>
<p>Gris had moved to Paris in 1906 and settled in Montmartre, where he met Picasso. The older artist introduced him to the leading painters, poets, and critics of the new generation, including Georges Braque, Guillaume Apollinaire, and Max Jacob. This <strong>portrait honored Picasso</strong> while establishing Gris's own place in the Paris art world.</p>
<p>The composition uses a limited palette of cool blues, browns, and grays that produce a gentle undulating rhythm across the surface. Rather than depicting Picasso from a single viewpoint, Gris deconstructs the figure by showing the head, neck, and torso from multiple angles simultaneously. This approach defined Analytical Cubism's method of breaking down subjects into geometric shapes.</p>
<p>Gris exhibited the portrait at the Salon des Indépendants in spring 1912, where it attracted acclaim from fellow artists and critics. Gertrude Stein noted that "Juan Gris was the only person whom Picasso wished away," suggesting the older master may have felt threatened by his protégé's talents. The <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> holds this <a href="https://luxurywallart.com/collections/abstract-art" target="_blank" rel="noopener"><strong>cubist masterpiece</strong></a>, which measures 93.4 by 74.3 centimeters.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>. It measures 93.4 by 74.3 centimeters and represents one of the finest Cubist portraits ever created.`
      },
      {
        question: "When did Juan Gris paint this portrait?",
        answer: `<a href="/apps/masterpieces/artist/juan-gris"><strong>Gris</strong></a> created this portrait in <strong>1912</strong> and exhibited it at the Salon des Indépendants that spring, marking his artistic debut.`
      },
      {
        question: "What style is this portrait painted in?",
        answer: `The portrait exemplifies <strong>Analytical Cubism</strong>, depicting Picasso from multiple viewpoints simultaneously. The fractured planes and geometric forms define this early phase of Cubism.`
      },
      {
        question: "What was the relationship between Gris and Picasso?",
        answer: `Gris met <strong>Picasso in Montmartre</strong> after arriving in Paris in 1906. Picasso introduced him to the artistic circles and served as his mentor in developing Cubism.`
      }
    ]
  },
  {
    slug: 'amedeo-modigliani-portrait-of-paul-alexander-on-green-background',
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted several portraits of Dr. Paul Alexandre, his first patron and close friend. This version shows Alexandre against a distinctive <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green background</strong></a>. The two men met in November 1907 at the Maison du Delta in Montmartre, a house set up by Alexandre and his brother Jean for use by young artists.</p>
<p>Alexandre was training as a dermatologist at Lariboisière hospital when he discovered Modigliani's work. He became the first person to take serious interest in the artist, purchasing paintings for 10 to 20 francs and drawings for about 20 centimes. He encouraged Modigliani and continued buying his work until the outbreak of World War I in 1914 forced the doctor into military service.</p>
<p>The <strong>portrait series</strong> of Alexandre evokes the Renaissance tradition of patrons having their portraits painted in return for financial support. Modigliani's depictions of his friend range from conventional poses to more distinctively "Modiglianiesque" treatments with elongated faces and blank eyes. Between 1907 and his death in 1920, Modigliani gave Alexandre no fewer than 25 paintings and some 500 drawings.</p>
<p>After Alexandre's death in 1968, his youngest son Noël organized an exhibition at the Musée des Beaux-Arts de Rouen in 1993, finally revealing this remarkable collection to the public. The impeccable provenance of these works enabled a new understanding of Modigliani's early Parisian period.</p>`,
    faqs: [
      {
        question: "Who was Paul Alexandre?",
        answer: `Dr. Paul Alexandre was a dermatologist who became <a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Modigliani's</strong></a> first patron. They met in 1907 at the <strong>Maison du Delta</strong> in Montmartre.`
      },
      {
        question: "How many portraits did Modigliani paint of Alexandre?",
        answer: `Modigliani created multiple portraits of Alexandre between <strong>1907 and 1914</strong>. He gave the doctor 25 paintings and about 500 drawings over the years.`
      },
      {
        question: "What ended their patron relationship?",
        answer: `<strong>World War I</strong> interrupted their friendship in 1914 when Alexandre was called to military service. Modigliani died in 1920, six years after they parted.`
      }
    ]
  },
  {
    slug: 'amedeo-modigliani-portrait-of-paul-alexandre',
    description: `<p><a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted this portrait of Dr. Paul Alexandre in 1909, two years after they first met at the Maison du Delta in Montmartre. This version shows the doctor in a three-quarter pose with his left hand placed on his hip, echoing the tradition of Italian Renaissance portraiture that Modigliani had studied before leaving Italy.</p>
<p>The portrait represents a pivotal moment in Modigliani's development. In 1909, he painted three portraits of Alexandre, with this being among the most accomplished. The work still shows conventional elements of <strong>academic portraiture</strong> before Modigliani developed his signature style of elongated faces and almond-shaped eyes in later years.</p>
<p>Alexandre's support proved crucial during Modigliani's difficult early years in Paris. The young doctor ran a kind of low-budget art colony at the Maison du Delta, where Modigliani could paint rent-free. Alexandre paid modest sums for the artist's work and allowed him to retrieve paintings if better offers came along. This arrangement gave Modigliani the freedom to experiment.</p>
<p>Around this time, Modigliani befriended sculptor Constantin Brancusi, which prompted him to devote several years primarily to sculpture. When he returned to painting around 1914, his style had transformed into the distinctive approach we recognize today. The <a href="/apps/masterpieces/museum/tokyo-fuji-art-museum-tokyo-japan"><strong>Tokyo Fuji Art Museum</strong></a> holds this early <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/tokyo-fuji-art-museum-tokyo-japan"><strong>Tokyo Fuji Art Museum</strong></a> in Japan, one of several portraits of Dr. Alexandre that Modigliani painted.`
      },
      {
        question: "When was this portrait painted?",
        answer: `<a href="/apps/masterpieces/artist/amedeo-modigliani"><strong>Modigliani</strong></a> painted this portrait in <strong>1909</strong>, two years after meeting Alexandre. He created three portraits of the doctor that year.`
      },
      {
        question: "What style is this portrait?",
        answer: `This work shows a more <strong>conventional portrait style</strong> before Modigliani developed his famous elongated faces. It reflects his Italian training and Renaissance influences.`
      }
    ]
  },
  {
    slug: 'jean-francois-millet-portrait-of-pauline-ono',
    description: `<p><a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Jean-François Millet</strong></a> painted this portrait of his first wife Pauline Ono between 1843 and 1844. The work shows Pauline wearing refined oriental-style clothing that provides a moving frame for her tired body. She was already showing signs of the illness that would take her life at just 22 years old.</p>
<p>Pauline-Virginie Ono was a tailor's daughter from Cherbourg. Millet met her in his hometown, where he received his first artistic training. They married in 1841, and he brought his frail wife to Paris to establish his career. The couple struggled financially, with Millet selling portraits to support them while Pauline's health declined.</p>
<p>The portrait reflects <strong>Spanish influences</strong> that Millet absorbed from studying works in the Galerie Espagnole at the Louvre. The somber palette and direct gaze recall portraits by Velázquez and other Golden Age masters. This approach distinguished his early work from the peasant scenes that would later make him famous.</p>
<p>Pauline died in 1844, leaving Millet devastated. He remarried two years later to Catherine Lemaire, with whom he would have nine children. The <a href="/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france"><strong>Musée Thomas-Henry</strong></a> in Cherbourg holds this tender <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a>, connecting visitors to the artist's roots in the region where he was born and first fell in love.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/mus233e-thomashenry-cherbourg-france"><strong>Musée Thomas-Henry</strong></a> in Cherbourg, France, near where both Millet and his wife were born.`
      },
      {
        question: "Who was Pauline Ono?",
        answer: `Pauline-Virginie Ono was <a href="/apps/masterpieces/artist/jean-francois-millet"><strong>Millet's</strong></a> first wife, a tailor's daughter from Cherbourg. They married in <strong>1841</strong>, but she died three years later at age 22.`
      },
      {
        question: "What makes this portrait significant?",
        answer: `The portrait shows Pauline during her final illness, her <strong>tired body</strong> visible despite the refined clothing. It represents Millet's early portrait work before he turned to peasant scenes.`
      }
    ]
  },
  {
    slug: 'maurice-quentin-de-la-tour-portrait-of-philibert-orry-de-vignory',
    description: `<p><a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this grand pastel portrait of Philibert Orry around 1737. Orry served as France's contrôleur général (finance minister) and directeur des Bâtiments du roi under Louis XV. The portrait shows him wearing the blue ribbon and cross of the Ordre du Saint-Esprit, France's highest order of chivalry.</p>
<p>La Tour depicted his subject in an official capacity rather than as a patron of the arts. Orry wears a long, outdated wig characteristic of ministerial portraits of the period. The <strong>formal presentation</strong> suited someone of his governmental standing. As finance minister, Orry managed France's treasury during a period of economic challenges.</p>
<p>The work measures an impressive 88 by 114 centimeters, executed in pastel on five sheets of blue paper assembled with covered joints and mounted on canvas stretched over a wooden frame. La Tour exhibited it at the Paris Salon of 1745, where it appeared under the entry "M. Orry. Ministre d'État, Contrôleur Général; peint en grand."</p>
<p>The pastel remained in Orry's own collection during his lifetime. The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> holds this work today, having restored it in 2004 with additional conservation in 2016. La Tour became the foremost <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>pastel portraitist</strong></a> of 18th-century France, counting Voltaire, Rousseau, and Madame de Pompadour among his famous subjects.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `The portrait is displayed at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. It was restored in 2004 and again in 2016.`
      },
      {
        question: "Who was Philibert Orry?",
        answer: `Orry served as France's <strong>finance minister</strong> and directeur des Bâtiments under Louis XV. The portrait shows him wearing the Ordre du Saint-Esprit, France's highest honor.`
      },
      {
        question: "What medium did La Tour use?",
        answer: `<a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>La Tour</strong></a> worked in <strong>pastel</strong> on blue paper. This large work measures 88 by 114 centimeters and was exhibited at the 1745 Paris Salon.`
      }
    ]
  },
  {
    slug: 'nikolai-ge-portrait-of-piotr-zabela',
    description: `<p><a href="/apps/masterpieces/artist/nikolai-ge"><strong>Nikolai Ge</strong></a> painted this portrait of Piotr Zabela, a member of the Ukrainian gentry connected to the artist through family ties. Ge met Anna Zabela, Piotr's sister, while traveling through the Monastyrische estate in January 1855. Their meeting led to marriage in October 1856, making Piotr Zabela the artist's brother-in-law.</p>
<p>The Zabela family belonged to the minor Ukrainian nobility with estates in the countryside. This connection grounded Ge in Ukrainian culture and society, influencing his later decision to settle on a farm in Ukraine rather than pursue a comfortable city life. His <strong>portraits of family members</strong> document this world of provincial landowners.</p>
<p>Ge became famous for historical and religious paintings, but portraiture formed an important part of his practice. He painted his subjects with psychological depth, seeking to reveal their inner character rather than merely recording their appearance. This approach distinguished his work from conventional society portraits.</p>
<p>The <a href="/apps/masterpieces/museum/museum-of-russian-art-tereshchenko-museum-kyiv-ukr"><strong>Museum of Russian Art</strong></a> (Tereshchenko Museum) in Kyiv holds this portrait along with other works by Ge, including paintings of his wife Anna. The museum preserves an important collection of 19th-century <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Russian painting</strong></a> with strong connections to Ukrainian cultural history.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/museum-of-russian-art-tereshchenko-museum-kyiv-ukr"><strong>Museum of Russian Art</strong></a> (Tereshchenko Museum) in Kyiv, Ukraine.`
      },
      {
        question: "Who was Piotr Zabela?",
        answer: `Piotr Zabela was a Ukrainian landowner and the brother of <a href="/apps/masterpieces/artist/nikolai-ge"><strong>Nikolai Ge's</strong></a> wife Anna. Ge met the family while traveling through their <strong>Monastyrische estate</strong> in 1855.`
      },
      {
        question: "How is this portrait connected to Ge's life?",
        answer: `Meeting the Zabela family changed Ge's life. He married Anna Zabela in 1856, making Piotr his <strong>brother-in-law</strong> and connecting him to Ukrainian gentry society.`
      }
    ]
  },
  {
    slug: 'edgar-degas-portrait-of-princess-pauline-de-metternich',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this portrait of Princess Pauline de Metternich around 1860 without ever meeting his subject in person. Instead, he worked from a visiting card photograph of the Princess and her husband taken around 1867. This makes it one of the earliest painted portraits based directly on a photograph.</p>
<p>Princess Pauline Sander (1836–1921) was married to Prince Richard Metternich, the Austro-Hungarian Ambassador at Napoleon III's court from 1860 to 1871. Known as the "ambassadress of pleasure," she was a glamorous figure in Parisian high society. She pioneered new fashions, including the crinoline, and had already been painted by society portraitist Franz Xaver Winterhalter.</p>
<p>Degas made no attempt to disguise the portrait's photographic origins. In the original image, the Princess stood alongside her husband with her left arm entwined in his. Degas removed the Prince entirely, along with her left arm. The result focuses attention solely on the Princess against a flat <strong>mustard-yellow background</strong>.</p>
<p>Two colors dominate: variations of Naples yellow with a greenish tinge for the wallpaper, and gray-black for the dress and hair. The <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London acquired this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> in 1918 from the Degas studio sale. It measures just 40 by 28.8 centimeters.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `The portrait is at the <a href="/apps/masterpieces/museum/national-gallery"><strong>National Gallery</strong></a> in London, acquired in 1918 from the first Degas studio sale after the artist's death.`
      },
      {
        question: "Did Degas paint this from life?",
        answer: `No, <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> painted from a <strong>visiting card photograph</strong>. This makes it one of the earliest painted portraits based directly on photography.`
      },
      {
        question: "Who was Princess Pauline de Metternich?",
        answer: `She was the wife of the <strong>Austro-Hungarian Ambassador</strong> to Napoleon III's court. Known as the "ambassadress of pleasure," she was a fashion pioneer in Second Empire Paris.`
      }
    ]
  },
  {
    slug: 'theodore-chasseriau-portrait-of-prosper-marilhat',
    description: `<p><a href="/apps/masterpieces/artist/theodore-chasseriau"><strong>Théodore Chassériau</strong></a> painted this portrait of fellow artist Prosper Marilhat in 1835, when Chassériau was just 16 years old. This achievement makes him one of the youngest painters ever represented in the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>. He exhibited the portrait at the following year's Salon alongside several other works that earned him a third-class medal.</p>
<p>The two young artists met around 1833 at a ball organized by a group of Romantic painters. Théophile Gautier later described how Chassériau and Marilhat both contributed decorations to the event. They formed a deep friendship that lasted until Marilhat's early death in 1847. When Chassériau's teacher Ingres left for Rome in 1834, the young artist began seeking connections among the <strong>Romantic generation</strong>.</p>
<p>Objects in the portrait, including an antique red-figure vase and an Egyptian basket, reference Marilhat's recent voyage to the Near East. Prosper Marilhat (1811–1847) was an Orientalist painter whose most successful works drew from sketches made during his time in Egypt in 1831–1832. The somber coloring and austere composition reflect Italian Renaissance portraiture and Spanish Golden Age masters.</p>
<p>The portrait remained in the Marilhat family collection, passing to Robert Marilhat and then to descendants who donated it to the Louvre in 1906. It represents the beginning of Chassériau's journey toward becoming a major <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Romantic painter</strong></a> in his own right.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The portrait is at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris. The Marilhat family donated it in 1906.`
      },
      {
        question: "How old was Chassériau when he painted this?",
        answer: `<a href="/apps/masterpieces/artist/theodore-chasseriau"><strong>Chassériau</strong></a> was just <strong>16 years old</strong> when he painted this portrait in 1835, making him one of the youngest painters in the Louvre's collection.`
      },
      {
        question: "Who was Prosper Marilhat?",
        answer: `Marilhat was a French <strong>Orientalist painter</strong> (1811–1847) who traveled to Egypt in 1831–1832. The objects in his portrait reference that Near Eastern journey.`
      }
    ]
  },
  {
    slug: 'edgar-degas-portrait-of-rene-de-gas',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted and drew his younger brother René many times throughout their lives. René was the youngest of five siblings, born in 1845, ten years after Edgar. In 1855, Degas painted one of his earliest major works showing René with an inkwell, a composition now at the Smith College Museum.</p>
<p>The brothers had a complicated relationship. After their father Augustin died in 1874, Edgar discovered that René had accumulated enormous business debts. To preserve the family's reputation, Edgar sold his house and an inherited art collection to pay off his brother's obligations. This sacrifice forced him to depend on selling his own work for the first time.</p>
<p>René moved to New Orleans, where he married their cousin Estelle Musson. Degas visited them there in 1872, producing some of his finest <strong>family portraits</strong> during the stay. But in 1878, René abandoned his blind wife and children to follow a mistress. Edgar could never forgive this betrayal, and the brothers remained estranged.</p>
<p>Despite the later falling out, Degas's early portraits of René show genuine affection. The drawings and paintings from the 1850s and early 1860s capture a beloved younger sibling during more innocent times. Creating <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits of friends and family</strong></a> remained central to Degas's artistic practice throughout his career.</p>`,
    faqs: [
      {
        question: "Who was René de Gas?",
        answer: `René was <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas's</strong></a> youngest brother, born in 1845. He later moved to <strong>New Orleans</strong> and married their cousin Estelle Musson.`
      },
      {
        question: "Why did the brothers become estranged?",
        answer: `René's business debts forced Edgar to sell his property. Then in 1878, René <strong>abandoned his blind wife</strong> for a mistress, which Edgar could never forgive.`
      },
      {
        question: "How did René's debts affect Degas's career?",
        answer: `To protect family honor, Degas sold his house and art collection. This forced him to <strong>depend on selling his work</strong>, which actually increased his productivity during the late 1870s.`
      }
    ]
  },
  {
    slug: 'edgar-degas-portrait-of-renehillaire-de-gas',
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this portrait of his grandfather René-Hilaire de Gas in 1857 at the family's summer villa in Capodimonte, near Naples. The elderly patriarch, then in his late eighties, sits in a domestic interior that conveys both comfort and dignity. He would die the following year in August 1858.</p>
<p>René-Hilaire de Gas (1769/1770–1858) was born in Orléans and fled France during the Revolution to establish a banking business in Naples. He became a wealthy <strong>banker and art collector</strong>, founding the de Gas family fortune that allowed his grandson to pursue art without financial pressure during his early career.</p>
<p>During frequent trips to Italy, Degas painted numerous pictures of his Neapolitan relatives, beginning with this family patriarch. The portrait shows the influence of Italian Renaissance masters that Degas was studying during his extended Italian sojourn from 1856 to 1859. A related drawing at Harvard Art Museums bears the inscription "Mon grand père Degas, Capodimonte 1857."</p>
<p>René-Hilaire appears posthumously in Degas's famous painting "The Bellelli Family" as a framed portrait on the wall. His daughter Laura wears mourning dress for her recently deceased father. The <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> holds this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a>, connecting it to Degas's larger body of family works.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> in Paris. It connects to Degas's larger body of family portraits from his Italian period.`
      },
      {
        question: "Who was René-Hilaire de Gas?",
        answer: `He was <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas's</strong></a> grandfather, a <strong>banker from Naples</strong> who fled France during the Revolution. He founded the family fortune.`
      },
      {
        question: "When was this portrait painted?",
        answer: `Degas painted this in <strong>1857 at Capodimonte</strong> near Naples. His grandfather died the following year in August 1858.`
      }
    ]
  },
  {
    slug: 'thomas-gainsborough-portrait-of-sarah-kirby-n233e-bull-and-john-joshua',
    description: `<p><a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Thomas Gainsborough</strong></a> painted this informal double portrait of Sarah and John Joshua Kirby around 1751–1752, shortly after returning to his native Suffolk. The couple appears in a rural landscape with their dog, though X-rays reveal Gainsborough originally planned a grander French-style composition with a classical sculpture behind Kirby.</p>
<p>Gainsborough had moved back to Ipswich in 1748 after failing to establish himself in London. Life in Suffolk proved equally difficult financially. He relied on local professional people for portrait commissions. Joshua Kirby became one of his most important early patrons, and this commission likely cemented their <strong>lifelong friendship</strong>.</p>
<p>Kirby was a man of many talents. He authored an early illustrated book on Suffolk and wrote a well-known treatise on perspective. He also ran a general painting business where Gainsborough may have assisted. Later, Kirby taught perspective to the future King George III, who appointed him Clerk of the Works at Kew.</p>
<p>The two men remained close until death. In his final weeks, Gainsborough gave instructions to be buried next to Kirby in Kew churchyard. The <a href="/apps/masterpieces/museum/national-portrait-gallery-london-uk"><strong>National Portrait Gallery</strong></a> in London acquired this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> in 1905. It is currently on long-term loan to Beningbrough Hall in Yorkshire.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait?",
        answer: `The painting belongs to the <a href="/apps/masterpieces/museum/national-portrait-gallery-london-uk"><strong>National Portrait Gallery</strong></a> in London but is on long-term loan to Beningbrough Hall in Yorkshire.`
      },
      {
        question: "Who were the Kirbys?",
        answer: `John Joshua Kirby was a <strong>perspective expert</strong> who later taught King George III. <a href="/apps/masterpieces/artist/thomas-gainsborough"><strong>Gainsborough</strong></a> became his lifelong friend and asked to be buried beside him.`
      },
      {
        question: "When was this portrait painted?",
        answer: `Gainsborough painted this around <strong>1751–1752</strong> after returning to Suffolk. X-rays show he originally planned a grander French-style composition.`
      }
    ]
  },
  {
    slug: 'anthony-van-dyck-portrait-of-sir-thomas-chaloner',
    description: `<p><a href="/apps/masterpieces/artist/anthony-van-dyck"><strong>Anthony van Dyck</strong></a> painted this portrait of Sir Thomas Chaloner in 1637, one of his finest late works. The artist depicts Chaloner's aging face with remarkable psychological insight: flaccid skin, flushed cheeks, but penetrating light eyes that convey an active and temperamental character. The energetic turn of the head and slightly pursed lips suggest a man of strong convictions.</p>
<p>Chaloner proved to be an unusual figure in English history. A member of the Long Parliament, he actively opposed royal power. In 1648, he became one of the judges who signed the death warrant of <strong>King Charles I</strong>. After the Restoration of the Stuart monarchy, Chaloner was forced into exile and died in Holland.</p>
<p>Van Dyck worked meticulously on the face and hands, using delicate brushstrokes to capture every detail. By contrast, he rendered the wavy hair and black silk cloak with sketchy freedom, letting patches of light play across the fabric. This nearly monochromatic palette focuses attention on the sitter's compelling face.</p>
<p>The <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> acquired this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> in 1779 from the Walpole collection at Houghton Hall, England. Van Dyck died in 1641, just four years after completing this work, having served as the leading court painter in England after earlier success in Flanders and Italy.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg, acquired in 1779 from the Walpole collection at Houghton Hall.`
      },
      {
        question: "Who was Sir Thomas Chaloner?",
        answer: `Chaloner was an English politician who <strong>signed King Charles I's death warrant</strong> in 1648. After the monarchy's restoration, he fled to Holland where he died in exile.`
      },
      {
        question: "When was this portrait painted?",
        answer: `<a href="/apps/masterpieces/artist/anthony-van-dyck"><strong>Van Dyck</strong></a> painted this in <strong>1637</strong>, just four years before his death. It's considered one of his finest late portraits.`
      }
    ]
  },
  {
    slug: 'konstantin-korovin-portrait-of-sofia-golitsyna',
    description: `<p><a href="/apps/masterpieces/artist/konstantin-korovin"><strong>Konstantin Korovin</strong></a> painted this portrait of Sofia Golitsyna in 1886, capturing a prominent figure of late 19th-century Russian aristocratic society. Born into the noble Golitsyn family, Sofia became Countess Stroganova through marriage to Count Pavel Stroganov. She hosted famous evening salons where leading poets and writers gathered at her home.</p>
<p>Korovin was emerging as a leading figure in <strong>Russian Impressionism</strong> when he painted this portrait. He had studied at the Moscow School of Painting, Sculpture, and Architecture, where he developed skills across all genres: landscape, still life, and portraiture. His approach combined careful observation with the luminous brushwork that would define his mature style.</p>
<p>The portrait depicts the Countess with the grace and sophistication expected of her social position. Korovin's treatment balances formal dignity with psychological sensitivity, revealing something of the woman behind the aristocratic facade. During this period of cultural renaissance in Russia, such portraits documented the world of nobility that would soon transform dramatically.</p>
<p>The work is held at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg. Korovin went on to become not just a painter but also a celebrated theater designer and writer, bringing his colorful vision to multiple artistic fields. His <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> from the 1880s represent his early mastery before his theatrical career took off.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg, Russia.`
      },
      {
        question: "Who was Sofia Golitsyna?",
        answer: `Born into the noble <strong>Golitsyn family</strong>, she married Count Pavel Stroganov. <a href="/apps/masterpieces/artist/konstantin-korovin"><strong>Korovin</strong></a> captured her as a prominent salon hostess in 1886.`
      },
      {
        question: "What style is this portrait?",
        answer: `The portrait represents early <strong>Russian Impressionism</strong>. Korovin combined careful observation with luminous brushwork that would define his later work.`
      }
    ]
  },
  {
    slug: 'viktor-vasnetsov-portrait-of-the-artist-arkhip-kuinji',
    description: `<p><a href="/apps/masterpieces/artist/viktor-vasnetsov"><strong>Viktor Vasnetsov</strong></a> painted this portrait of his friend and fellow artist Arkhip Kuindzhi in 1869. The two painters met at the Imperial Academy of Arts in St. Petersburg and maintained their friendship for many years. Vasnetsov, known for paintings of Russian mythology and folklore, here demonstrates his skill in straightforward portraiture.</p>
<p>Arkhip Kuindzhi (1841–1910) would become one of Russia's most celebrated <strong>landscape painters</strong>, famous for his ability to capture effects of light and atmosphere. He developed a close friendship with chemist Dmitri Mendeleev, attending his classes and developing a lifelong interest in the science of color and perception. This scientific approach set his landscapes apart from conventional Russian painting.</p>
<p>Vasnetsov captured Kuindzhi's vivid and powerful presence. At the time, both artists were still developing their distinctive approaches. Vasnetsov would go on to become a co-founder of Russian folklorist and romantic nationalistic painting, while Kuindzhi pursued his luminous landscapes with their striking light effects.</p>
<p>The <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg holds this portrait, connecting two important figures in 19th-century Russian art. Interestingly, Kuindzhi also painted a reciprocal portrait of Vasnetsov. The exchange of <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraits</strong></a> between artists documented the creative friendships that shaped Russian painting during this period.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg, Russia.`
      },
      {
        question: "Who was Arkhip Kuindzhi?",
        answer: `Kuindzhi (1841–1910) was a celebrated Russian <strong>landscape painter</strong> known for capturing light and atmosphere. He studied color science with chemist Dmitri Mendeleev.`
      },
      {
        question: "How did Vasnetsov and Kuindzhi know each other?",
        answer: `<a href="/apps/masterpieces/artist/viktor-vasnetsov"><strong>Vasnetsov</strong></a> and Kuindzhi met at the <strong>Imperial Academy of Arts</strong> in St. Petersburg. They remained friends and even painted reciprocal portraits of each other.`
      }
    ]
  },
  {
    slug: 'rembrandt-portrait-of-the-artist-at-his-easel-detail-of-the-',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this self-portrait at his easel in 1660, nine years before his death. The work shows the artist in old work clothes, presenting himself as a craftsman rather than a gentleman. This honest approach typified his late self-portraits, which surveyed his own face without vanity and with unflinching sincerity.</p>
<p>By 1660, Rembrandt had experienced both triumph and tragedy. He had been one of Amsterdam's most successful painters, then faced bankruptcy in 1656. His common-law wife Hendrickje and son Titus now managed his business affairs. Yet his art reached new depths during these difficult years, with <strong>self-portraits</strong> forming a unique visual autobiography.</p>
<p>The composition belongs to a series of standing self-portraits showing Rembrandt at work. Earlier versions from the 1650s established the format, including paintings now in Vienna and Washington. This 1660 canvas employs Rembrandt's characteristic tenebrism, with the figure emerging from darkness illuminated by directed light.</p>
<p>The <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in St. Petersburg holds this work (the main version is at the Louvre). Of approximately forty painted <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>self-portraits</strong></a> by Rembrandt known today, those from his final decade rank among his greatest achievements. They show an artist confronting age, loss, and mortality with remarkable honesty.</p>`,
    faqs: [
      {
        question: "Where are versions of this painting?",
        answer: `The main version is at the Louvre in Paris. The <a href="/apps/masterpieces/museum/hermitage"><strong>Hermitage</strong></a> in St. Petersburg also holds related works. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted many self-portraits.`
      },
      {
        question: "When did Rembrandt paint this self-portrait?",
        answer: `Rembrandt painted this in <strong>1660</strong>, nine years before his death. It belongs to a series of late self-portraits that rank among his greatest works.`
      },
      {
        question: "What makes Rembrandt's late self-portraits significant?",
        answer: `They show remarkable <strong>psychological honesty</strong>. Rather than flattering himself, Rembrandt confronted age and hardship directly in paintings that form a visual autobiography.`
      }
    ]
  },
  {
    slug: 'valentin-serov-portrait-of-the-artist-pavel-tchistyakov',
    description: `<p><a href="/apps/masterpieces/artist/valentin-serov"><strong>Valentin Serov</strong></a> painted this portrait of his teacher Pavel Chistyakov, the man who shaped his artistic development. In 1880, the fifteen-year-old Serov joined the Imperial Academy of Fine Arts and began studying in Chistyakov's workshop, even though he was technically too young for admission.</p>
<p>Chistyakov (1832–1919) was a legendary teacher who had trained an entire generation of great Russian painters, including Ilya Repin, Vasily Surikov, Vasily Polenov, and Mikhail Vrubel. His <strong>pedagogical system</strong> emphasized careful study of nature and learning from past masters. These principles remained pivotal to Serov's artistic methods throughout his career.</p>
<p>The academic style didn't come naturally to young Serov, who had grown accustomed to Repin's freer brushwork. But Chistyakov immediately recognized his new student's talent. He sometimes made Serov draw squares and triangles to prove students were incapable, yet years later Serov wrote to his mentor: "I remember you as the teacher and consider you the only (in Russia) true teacher of the eternal sacrosanct rules of forms."</p>
<p>The <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg holds this tribute from student to teacher. Serov spent hours at the Hermitage copying Rembrandt, Velázquez, and Veronese on Chistyakov's advice, developing into the primary <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portraitist</strong></a> of his generation.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/russian-museum"><strong>State Russian Museum</strong></a> in Saint Petersburg, Russia.`
      },
      {
        question: "Who was Pavel Chistyakov?",
        answer: `Chistyakov was a legendary <strong>art teacher</strong> at the Imperial Academy who trained Repin, Surikov, and Vrubel. <a href="/apps/masterpieces/artist/valentin-serov"><strong>Serov</strong></a> called him Russia's only true teacher of form.`
      },
      {
        question: "What was Chistyakov's teaching approach?",
        answer: `He emphasized <strong>careful study of nature</strong> and learning from old masters. Serov spent hours copying Rembrandt and Velázquez at the Hermitage on his advice.`
      }
    ]
  },
  {
    slug: 'berthe-morisot-portrait-of-the-artist39s-mother-and-sister',
    description: `<p><a href="/apps/masterpieces/artist/berthe-morisot"><strong>Berthe Morisot</strong></a> painted this large canvas showing her mother reading while her sister Edma sits nearby with a pensive expression. The work, also known as "The Reading," was created in 1869–1870 when Edma stayed with the family to await the birth of her first child. Her loose white morning robe discreetly disguises the pregnancy.</p>
<p>This is one of Morisot's largest paintings and represents an ambitious <strong>family portrait</strong> combined with intimate domestic genre. She exhibited it at the Salon of 1870 and possibly again at the first Impressionist exhibition in 1874. The composition captures two women absorbed in their own thoughts, creating a mood of quiet introspection.</p>
<p>Anxious about sending the work to the Salon, Morisot asked Édouard Manet for advice on the last day for submissions. He visited her home, took her brushes, and began applying black to her mother's dress, continuing to the head and background. Morisot was furious, later calling the result a "caricature." This incident captures the complicated dynamics between male and female artists of the period.</p>
<p>The <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington holds this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> as part of the Chester Dale Collection since 1965. Morisot became one of the founding members of the Impressionist movement, exhibiting in seven of their eight shows.</p>`,
    faqs: [
      {
        question: "Where is this painting displayed?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C., part of the Chester Dale Collection since 1965.`
      },
      {
        question: "Who are the subjects of this portrait?",
        answer: `The painting shows <a href="/apps/masterpieces/artist/berthe-morisot"><strong>Morisot's</strong></a> mother reading and her sister <strong>Edma</strong>, who was pregnant at the time. Edma's loose robe conceals her condition.`
      },
      {
        question: "What happened with Manet and this painting?",
        answer: `On the last day before the Salon deadline, <strong>Manet took Morisot's brushes</strong> and made changes she didn't want. She was furious and called the result a "caricature."`
      }
    ]
  },
  {
    slug: 'raoul-dufy-portrait-of-the-artist39s-sister-suzanne-dufy',
    description: `<p><a href="/apps/masterpieces/artist/raoul-dufy"><strong>Raoul Dufy</strong></a> painted this portrait of his sister Suzanne in 1904, one year before he discovered Fauvism. The small canvas, measuring just 33 by 46 centimeters, shows his Impressionist-influenced approach before Henri Matisse's work transformed his artistic direction at the 1905 Salon des Indépendants.</p>
<p>Dufy grew up in Le Havre, where he studied at the municipal art school before moving to Paris on a scholarship in 1900. In his early years, he looked to the Impressionists for inspiration, developing skills in color and light that would serve him throughout his career. This <strong>intimate family portrait</strong> demonstrates his technical accomplishment before stylistic experimentation took over.</p>
<p>After seeing Matisse's "Luxe, Calme et Volupté" in 1905, Dufy devoted himself to Fauvism with its bold colors and expressive brushwork. He also drew inspiration from Paul Cézanne and André Derain. Though he later developed his own distinctive style of bright, decorative paintings, his Fauvist period marked a crucial turning point.</p>
<p>The <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg holds this early <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a>. Dufy went on to become a versatile artist working in painting, textile design, and ceramics, bringing his colorful vision to multiple media. He died in 1953 after winning the main painting prize at the Venice Biennale the previous year.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia.`
      },
      {
        question: "What style is this portrait painted in?",
        answer: `<a href="/apps/masterpieces/artist/raoul-dufy"><strong>Dufy</strong></a> painted this in an <strong>Impressionist-influenced style</strong> in 1904, one year before his discovery of Fauvism transformed his approach.`
      },
      {
        question: "How large is this painting?",
        answer: `The canvas measures just <strong>33 by 46 centimeters</strong> (about 13 by 18 inches), making it an intimate portrait of the artist's sister.`
      }
    ]
  },
  {
    slug: 'nikolai-ge-portrait-of-the-artist39s-wife-anna-ge',
    description: `<p><a href="/apps/masterpieces/artist/nikolai-ge"><strong>Nikolai Ge</strong></a> painted this portrait of his wife Anna with evident reverence and affection. The work shows a charming and serious young woman in a white morning dress, settled in a chair with a book. Through a balcony doorway behind her, white houses and blue mountains of Italy are visible.</p>
<p>Anna Petrovna Zabela became Ge's wife in October 1856, a year after they met at her family's Monastyrische estate while he was traveling. She was the sister of Parmen Zabelo, and her family belonged to the Ukrainian minor nobility. The couple had two sons together and Anna remained Ge's companion throughout his career.</p>
<p>The Italian setting visible through the balcony reflects the couple's time abroad. Ge had won the Grand Gold Medal at the Academy of Arts, which funded travel to Rome. He and Anna lived in Italy for years, where he painted history subjects alongside <strong>intimate family portraits</strong> like this one. The combination of domestic warmth and distant landscape creates a tender image of their life together.</p>
<p>The <a href="/apps/masterpieces/museum/museum-of-russian-art-tereshchenko-museum-kyiv-ukr"><strong>Museum of Russian Art</strong></a> (Tereshchenko Museum) in Kyiv holds this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> along with other works by Ge, including his self-portrait from 1892. Both paintings tacitly suggest the depth of feeling between husband and wife.</p>`,
    faqs: [
      {
        question: "Where is this portrait displayed?",
        answer: `The painting is at the <a href="/apps/masterpieces/museum/museum-of-russian-art-tereshchenko-museum-kyiv-ukr"><strong>Museum of Russian Art</strong></a> (Tereshchenko Museum) in Kyiv, Ukraine.`
      },
      {
        question: "Who was Anna Ge?",
        answer: `Anna Petrovna Zabela married <a href="/apps/masterpieces/artist/nikolai-ge"><strong>Nikolai Ge</strong></a> in <strong>October 1856</strong>. She came from Ukrainian minor nobility and had two sons with the artist.`
      },
      {
        question: "What setting does the portrait show?",
        answer: `Anna sits with a book while <strong>Italian mountains</strong> are visible through a balcony door. The setting reflects the couple's years living abroad after Ge won a travel prize.`
      }
    ]
  },
  {
    slug: 'felix-vallotton-portrait-of-the-artists-brother-with-hat',
    description: `<p><a href="/apps/masterpieces/artist/felix-vallotton"><strong>Félix Vallotton</strong></a> painted this portrait of his brother Paul wearing a hat around 1888. The work belongs to his early Realist period, before he joined the Nabis group in 1892 and developed his later style of flat colors and bold outlines. At this stage, Vallotton focused on direct observation and careful rendering.</p>
<p>Paul and Félix came from a modest Protestant family in Lausanne, on the shores of Lake Geneva. Félix had moved to Paris in 1882 at age sixteen to study at the Académie Julian. In 1887, he exhibited his first two <strong>portrait paintings</strong> at the Salon, though criticism from his mentor led him to distance himself from the academy.</p>
<p>The brothers remained connected throughout their lives. Paul later became an art dealer, founding the Galerie Paul Vallotton in Lausanne in 1922. The gallery continued under his descendants for many years, helping to preserve and promote his brother's legacy.</p>
<p>After joining the Nabis, Félix earned the nickname "The Foreign Nabi" because of his Swiss origins. His colleagues included Pierre Bonnard, Maurice Denis, and Édouard Vuillard, who became a lifelong friend. This early <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> of Paul shows Vallotton's skill before his stylistic transformation. The oil on canvas measures 76 by 61 centimeters and is held at the Galerie Vallotton in Lausanne.</p>`,
    faqs: [
      {
        question: "When did Vallotton paint this portrait?",
        answer: `<a href="/apps/masterpieces/artist/felix-vallotton"><strong>Vallotton</strong></a> painted this around <strong>1888</strong>, during his early Realist period before joining the Nabis group in 1892.`
      },
      {
        question: "Who was Paul Vallotton?",
        answer: `Paul was Félix's brother from Lausanne. He later became an <strong>art dealer</strong> and founded Galerie Paul Vallotton in 1922 to promote his brother's work.`
      },
      {
        question: "What style is this portrait?",
        answer: `The portrait shows a <strong>Realist style</strong> with careful observation. It predates Vallotton's Nabi period when he adopted flat colors and bold outlines.`
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork updates (batch 3 - portraits)...\n');

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
