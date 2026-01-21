const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting artwork updates (Batch 6: 25 artworks)...\n');

  // 1. jean-antoine-watteau-savoyard-with-a-marmot
  await prisma.artwork.update({
    where: { slug: 'jean-antoine-watteau-savoyard-with-a-marmot' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> created this charming genre scene featuring a Savoyard street performer with his trained marmot. The painting shows a young man in worn clothing, accompanied by the small animal used in his itinerant entertainment performances across 18th-century France.</p><p>Watteau captured everyday street life with <strong>sensitivity and warmth</strong>, focusing on figures often overlooked by traditional academic painting. The work now resides at the <a href="/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia.</p>`,
      faqs: [
        {
          question: "Who painted Savoyard with a marmot?",
          answer: `<a href="/apps/masterpieces/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> painted this work. The French Rococo master specialized in fêtes galantes and genre scenes, capturing 18th-century life with delicate brushwork and emotional depth that influenced later artists across Europe.`
        },
        {
          question: "What is a Savoyard?",
          answer: "Savoyards were itinerant entertainers from the Savoy region of France who traveled with trained marmots, performing for coins in city streets. Watteau's painting documents this vanished aspect of <strong>18th-century street culture</strong> with sympathy."
        },
        {
          question: "Where can I see this painting?",
          answer: `The painting is held at the <a href="/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia, which houses one of the world's largest collections of European art spanning from the Middle Ages to modern times.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jean-antoine-watteau-savoyard-with-a-marmot');

  // 2. jean-auguste-dominique-ingres-le-casino-de-l39aurore-de-la-villa-ludovisi
  await prisma.artwork.update({
    where: { slug: 'jean-auguste-dominique-ingres-le-casino-de-l39aurore-de-la-villa-ludovisi' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> painted this detailed interior study of the Casino dell'Aurora at the Villa Ludovisi in Rome. The work documents the famous ceiling fresco by Guercino, showing Aurora's chariot racing across the sky, along with the architectural elements of the <strong>Baroque chamber</strong>.</p><p>Created during Ingres' Italian period, this painting reflects his fascination with Renaissance and Baroque art. The work belongs to the <a href="/apps/masterpieces/museum/mus233e-ingres-montauban-france"><strong>Musée Ingres</strong></a> in Montauban, France.</p>`,
      faqs: [
        {
          question: "What does the painting show?",
          answer: "The painting shows the interior of the Casino dell'Aurora at Villa Ludovisi in Rome, featuring Guercino's famous ceiling fresco of Aurora in her chariot. Ingres carefully documented the <strong>architectural details</strong> and decorative elements of this Baroque space."
        },
        {
          question: "Where can I see this work?",
          answer: `It's housed at the <a href="/apps/masterpieces/museum/mus233e-ingres-montauban-france"><strong>Musée Ingres</strong></a> in Montauban, France. The museum is dedicated to the artist's work and contains the largest collection of his paintings and drawings in the world.`
        },
        {
          question: "Who was Ingres?",
          answer: `<a href="/apps/masterpieces/artist/jean-auguste-dominique-ingres"><strong>Jean-Auguste-Dominique Ingres</strong></a> was a French Neoclassical painter known for his precise draftsmanship and historical subjects. He spent years studying in Rome, where he developed his mature style.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jean-auguste-dominique-ingres-le-casino-de-l39aurore-de-la-villa-ludovisi');

  // 3. rembrandt-st-jerome-reading
  await prisma.artwork.update({
    where: { slug: 'rembrandt-st-jerome-reading' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrays St. Jerome absorbed in reading scripture, surrounded by books in his study. The scholar-saint sits in contemplation, with <strong>warm light</strong> illuminating his weathered face and the pages before him.</p><p>Rembrandt painted several versions of St. Jerome throughout his career, drawn to themes of solitary scholarship and spiritual devotion. This work belongs to the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Who was St. Jerome?",
          answer: "St. Jerome was a 4th-century Christian scholar who translated the Bible into Latin (the Vulgate). Artists often depicted him as an elderly scholar in his study, surrounded by books, or as a penitent hermit in the <strong>desert wilderness</strong>."
        },
        {
          question: "Where can I see this painting?",
          answer: `The painting is at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> in Ohio. The museum's collection spans 6,000 years of art history, with particularly strong holdings in European paintings and Asian art.`
        },
        {
          question: "What technique did Rembrandt use?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> used his characteristic chiaroscuro technique, contrasting deep shadows with focused light. This dramatic approach creates spiritual atmosphere and draws attention to the saint's thoughtful expression and weathered hands.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-st-jerome-reading');

  // 4. rembrandt-woman-wearing-a-gold-chain
  await prisma.artwork.update({
    where: { slug: 'rembrandt-woman-wearing-a-gold-chain' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this portrait of an unidentified woman adorned with a prominent gold chain, a symbol of wealth and social status in 17th-century Holland. Her direct gaze and sumptuous clothing suggest she came from Amsterdam's prosperous merchant class.</p><p>The painting demonstrates Rembrandt's skill at rendering <strong>textures and materials</strong>, from the gleaming gold to the rich fabrics of her dress. The work is now part of the collection at the <a href="/apps/masterpieces/museum/collection-of-the-minneapolis-institute-of-art"><strong>Minneapolis Institute of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "What does the gold chain symbolize?",
          answer: "In 17th-century Dutch portraiture, gold chains signified wealth, status, and civic achievement. They were often <strong>prestigious gifts</strong> or marks of membership in guilds and civic organizations, displaying the sitter's social standing."
        },
        {
          question: "Where can I see this painting?",
          answer: `It's housed at the <a href="/apps/masterpieces/museum/collection-of-the-minneapolis-institute-of-art"><strong>Minneapolis Institute of Art</strong></a> in Minnesota. The museum offers free admission and holds more than 90,000 works spanning 5,000 years of world history.`
        },
        {
          question: "Who painted this portrait?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this work during his Amsterdam period. The Dutch master was renowned for psychological portraits that captured his subjects' inner character while showcasing his technical brilliance with light and texture.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-woman-wearing-a-gold-chain');

  // 5. jean-honore-fragonard-the-happy-lovers
  await prisma.artwork.update({
    where: { slug: 'jean-honore-fragonard-the-happy-lovers' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> captures an intimate moment between two lovers in a lush garden setting. The painting shows a young couple in an affectionate embrace, surrounded by flowering plants and soft, atmospheric light typical of <strong>Rococo romance</strong>.</p><p>Fragonard specialized in depicting scenes of courtship and pleasure for aristocratic patrons in pre-revolutionary France. This work resides at the <a href="/apps/masterpieces/museum/norton-simon-museum-pasadena-ca-us"><strong>Norton Simon Museum</strong></a> in Pasadena, California.</p>`,
      faqs: [
        {
          question: "What style is this painting?",
          answer: "The painting exemplifies the Rococo style with its soft colors, intimate subject matter, and decorative approach. Fragonard used <strong>fluid brushwork</strong> and delicate tones to create a dreamy atmosphere celebrating romance and sensual pleasure."
        },
        {
          question: "Who was Fragonard?",
          answer: `<a href="/apps/masterpieces/artist/jean-honore-fragonard"><strong>Jean-Honoré Fragonard</strong></a> was a French Rococo painter known for scenes of love and leisure. He worked for wealthy patrons before the French Revolution disrupted his career and the aristocratic world he depicted.`
        },
        {
          question: "Where can I see The Happy Lovers?",
          answer: `The painting is displayed at the <a href="/apps/masterpieces/museum/norton-simon-museum-pasadena-ca-us"><strong>Norton Simon Museum</strong></a> in Pasadena, California. The museum holds an impressive collection of European art from the Renaissance through the 20th century.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jean-honore-fragonard-the-happy-lovers');

  // 6. rembrandt-the-pancake-woman
  await prisma.artwork.update({
    where: { slug: 'rembrandt-the-pancake-woman' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicts a woman cooking pancakes over a fire, surrounded by children eagerly awaiting the finished treats. The scene captures everyday life in 17th-century Holland with <strong>warmth and humor</strong>, showing domestic activity often overlooked by grand history painting.</p><p>The painting demonstrates Rembrandt's interest in genre subjects and his ability to find dignity in common life. It's now held at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "What does the painting show?",
          answer: "The painting depicts a woman making pancakes while children watch with anticipation. It's a <strong>genre scene</strong> showing everyday domestic life in 17th-century Netherlands, a popular subject for Dutch painters of the Golden Age."
        },
        {
          question: "Where can I see this work?",
          answer: `The painting resides at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> in Ohio. The museum maintains a significant collection of Dutch Golden Age paintings, including multiple works by Rembrandt and his contemporaries.`
        },
        {
          question: "Why did Rembrandt paint everyday scenes?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> was drawn to all aspects of human experience, from biblical drama to humble domestic moments. Genre scenes allowed him to explore light, character, and narrative in familiar settings that resonated with Dutch audiences.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-the-pancake-woman');

  // 7. bronzino-portrait-of-cosimo-i-de39-medici-as-orpheus
  await prisma.artwork.update({
    where: { slug: 'bronzino-portrait-of-cosimo-i-de39-medici-as-orpheus' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> portrays Cosimo I de' Medici, Duke of Florence, in the guise of Orpheus, the legendary musician from Greek mythology. The duke holds a lyre, linking his rule to the civilizing power of music and poetry, while demonstrating the <strong>allegorical portraiture</strong> favored by Medici court artists.</p><p>The painting served political purposes, presenting Cosimo as a cultured ruler who brought harmony to Florence. It's now at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art-philadelphia-pa-us"><strong>Philadelphia Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "Who was Cosimo I de' Medici?",
          answer: "Cosimo I de' Medici ruled Florence from 1537 to 1574, becoming the first Grand Duke of Tuscany. He consolidated Medici power, patronized the arts extensively, and commissioned numerous works celebrating his <strong>political authority</strong> and cultural refinement."
        },
        {
          question: "Why is he shown as Orpheus?",
          answer: "Orpheus symbolized the power of art and harmony to civilize society. By portraying Cosimo as this mythological figure, Bronzino suggested the duke brought order and culture to Florence through his wise, <strong>enlightened rule</strong>."
        },
        {
          question: "Where can I see this portrait?",
          answer: `The painting is housed at the <a href="/apps/masterpieces/museum/philadelphia-museum-of-art-philadelphia-pa-us"><strong>Philadelphia Museum of Art</strong></a> in Pennsylvania. The museum holds an extensive collection of Renaissance and Baroque art from Italy and across Europe.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: bronzino-portrait-of-cosimo-i-de39-medici-as-orpheus');

  // 8. lawrence-alma-tadema-preparations-for-the-festivities
  await prisma.artwork.update({
    where: { slug: 'lawrence-alma-tadema-preparations-for-the-festivities' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> depicts figures preparing for a celebration in an ancient Roman setting. The painting shows people arranging flowers and decorations in a marble courtyard, rendered with the artist's characteristic attention to <strong>archaeological detail</strong> and classical architecture.</p><p>Alma-Tadema researched ancient sites and artifacts extensively to ensure historical accuracy in his idealized visions of Roman life. The work belongs to the <a href="/apps/masterpieces/museum/clark-art-institute-williamstown-ma-us"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts.</p>`,
      faqs: [
        {
          question: "Who was Lawrence Alma-Tadema?",
          answer: `<a href="/apps/masterpieces/artist/lawrence-alma-tadema"><strong>Lawrence Alma-Tadema</strong></a> was a Dutch-British painter famous for depicting ancient Roman life with meticulous detail. He achieved great success in Victorian England, creating sun-drenched scenes of classical antiquity that appealed to 19th-century audiences.`
        },
        {
          question: "How accurate are his Roman scenes?",
          answer: "Alma-Tadema studied archaeology extensively, visiting Pompeii and examining ancient artifacts. His paintings combined <strong>scholarly research</strong> with artistic imagination, creating historically informed yet romanticized visions of classical life that influenced later historical films."
        },
        {
          question: "Where can I see this painting?",
          answer: `It's displayed at the <a href="/apps/masterpieces/museum/clark-art-institute-williamstown-ma-us"><strong>Clark Art Institute</strong></a> in Williamstown, Massachusetts. The museum specializes in European and American art from the 14th through the early 20th centuries.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: lawrence-alma-tadema-preparations-for-the-festivities');

  // 9. gustav-klimt-portrait-of-a-man-with-beard-in-three-quarter-prof
  await prisma.artwork.update({
    where: { slug: 'gustav-klimt-portrait-of-a-man-with-beard-in-three-quarter-prof' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this portrait drawing showing a bearded man in three-quarter profile. The work demonstrates Klimt's skill as a draftsman before his famous <strong>Golden Phase</strong>, capturing the subject's features with confident lines and careful attention to facial expression.</p><p>This drawing was among the artworks stolen from the Isabella Stewart Gardner Museum in Boston during the infamous 1990 heist. Its current whereabouts remain unknown, making it one of the most sought-after stolen artworks in the world.</p>`,
      faqs: [
        {
          question: "What happened to this drawing?",
          answer: "It was stolen from the Isabella Stewart Gardner Museum in Boston during a brazen 1990 heist. Two thieves disguised as police officers took 13 artworks worth over $500 million. Despite a <strong>$10 million reward</strong>, none have been recovered."
        },
        {
          question: "What was the Gardner Museum heist?",
          answer: "On March 18, 1990, thieves stole 13 artworks including pieces by Rembrandt, Vermeer, Degas, and this Klimt drawing. It remains the largest unsolved <strong>art theft</strong> in history, with empty frames still hanging as placeholders."
        },
        {
          question: "Who was Gustav Klimt?",
          answer: `<a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> was an Austrian Symbolist painter known for decorative works featuring gold leaf. Before his famous paintings, he was an accomplished draftsman who created numerous portrait studies and preparatory drawings.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: gustav-klimt-portrait-of-a-man-with-beard-in-three-quarter-prof');

  // 10. luca-signorelli-the-holy-family
  await prisma.artwork.update({
    where: { slug: 'luca-signorelli-the-holy-family' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> depicts the Virgin Mary with the Christ Child and St. Joseph in this Renaissance devotional painting. The composition shows the family in an intimate domestic moment, with <strong>tender gestures</strong> connecting the figures against a landscape background.</p><p>Signorelli was known for his anatomical precision and powerful figure compositions. This work is held at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence, Italy.</p>`,
      faqs: [
        {
          question: "Who was Luca Signorelli?",
          answer: `<a href="/apps/masterpieces/artist/luca-signorelli"><strong>Luca Signorelli</strong></a> was an Italian Renaissance painter known for his anatomical knowledge and dynamic compositions. He worked in Tuscany and Umbria, creating frescoes and panel paintings that influenced later artists including Michelangelo.`
        },
        {
          question: "What is the Holy Family?",
          answer: "The Holy Family refers to Jesus, Mary, and Joseph. Renaissance artists frequently depicted them in domestic settings, emphasizing their humanity and family bonds. These paintings served as <strong>devotional images</strong> for private homes and churches."
        },
        {
          question: "Where can I see this painting?",
          answer: `The painting resides at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum houses one of the world's finest collections of Italian Renaissance art, including masterpieces by Botticelli, Leonardo, and Raphael.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: luca-signorelli-the-holy-family');

  // 11. rembrandt-selfportrait-leaning-on-a-stone-sill
  await prisma.artwork.update({
    where: { slug: 'rembrandt-selfportrait-leaning-on-a-stone-sill' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this self-portrait showing himself leaning casually on a stone sill, looking directly at the viewer. The composition creates an intimate connection, as if the artist is emerging from the canvas into our space with <strong>confident presence</strong>.</p><p>This self-portrait belongs to the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which holds several Rembrandt works documenting his lifelong practice of self-examination through portraiture.</p>`,
      faqs: [
        {
          question: "Why did Rembrandt paint so many self-portraits?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> created nearly 100 self-portraits throughout his life. They served as artistic experiments, records of his changing appearance, and explorations of expression and identity. No other artist documented themselves so thoroughly.`
        },
        {
          question: "What does the stone sill represent?",
          answer: "The stone sill creates a visual boundary between the artist's space and the viewer's, a device borrowed from Renaissance portraiture. Rembrandt's casual lean on it creates <strong>intimacy and immediacy</strong>, inviting engagement with his direct gaze."
        },
        {
          question: "Where can I see this painting?",
          answer: `It's at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> in Illinois. The museum maintains an outstanding collection of European paintings, including multiple works from the Dutch Golden Age and several Rembrandt portraits.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-selfportrait-leaning-on-a-stone-sill');

  // 12. rembrandt-portrait-of-artist39s-mother
  await prisma.artwork.update({
    where: { slug: 'rembrandt-portrait-of-artist39s-mother' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrays an elderly woman believed to be his mother, Neeltgen Willemsdochter van Zuytbrouck. The painting shows her in contemplative mood, her weathered face illuminated by <strong>gentle light</strong> that emphasizes her age and character.</p><p>Rembrandt painted his mother several times, using her as a model for studies of age and expression. The work is recreated in its original setting at the Rembrandt House Museum in Amsterdam.</p>`,
      faqs: [
        {
          question: "Who was Rembrandt's mother?",
          answer: "Neeltgen Willemsdochter van Zuytbrouck was the mother of nine children, including Rembrandt. She was the daughter of a baker and married a miller. Rembrandt painted her multiple times, particularly in his early years in <strong>Leiden</strong>."
        },
        {
          question: "Where can I see this painting?",
          answer: "The work is displayed at the Rembrandt House Museum in Amsterdam, recreated in the original room where Rembrandt lived and worked. The museum preserves his former home and studio, offering insight into his <strong>daily life</strong>."
        },
        {
          question: "Why did Rembrandt paint family members?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> frequently used family members as models, particularly early in his career. This practical approach allowed him to study expression, light, and character while developing his technique without hiring professional models.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-portrait-of-artist39s-mother');

  // 13. max-liebermann-lumberjack-in-the-forest
  await prisma.artwork.update({
    where: { slug: 'max-liebermann-lumberjack-in-the-forest' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/max-liebermann"><strong>Max Liebermann</strong></a> depicts a laborer at work in a forest setting, capturing the physicality of manual labor with loose brushwork. The painting shows the lumberjack amid trees, rendered in <strong>natural light</strong> that filters through the forest canopy.</p><p>Liebermann was drawn to working-class subjects throughout his career, influenced by French Realism and Impressionism. This painting remains in a private collection.</p>`,
      faqs: [
        {
          question: "Who was Max Liebermann?",
          answer: `<a href="/apps/masterpieces/artist/max-liebermann"><strong>Max Liebermann</strong></a> was a leading German Impressionist painter who depicted everyday life and labor. He became president of the Prussian Academy of Arts but was forced to resign when the Nazis came to power in 1933.`
        },
        {
          question: "What style did Liebermann use?",
          answer: "Liebermann worked in an Impressionist style influenced by French painters and the Barbizon school. He used <strong>visible brushstrokes</strong> and natural light to capture working people in rural and urban settings with dignity and directness."
        },
        {
          question: "Why did he paint workers?",
          answer: "Like the French Realists, Liebermann believed ordinary working people deserved artistic attention. His paintings of laborers, servants, and craftspeople challenged academic traditions that favored <strong>historical and mythological</strong> subjects over contemporary life."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: max-liebermann-lumberjack-in-the-forest');

  // 14. carl-spitzweg-the-sunday-hunting
  await prisma.artwork.update({
    where: { slug: 'carl-spitzweg-the-sunday-hunting' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/carl-spitzweg"><strong>Carl Spitzweg</strong></a> created this humorous scene of a bumbling amateur hunter on a Sunday outing. The painting captures the figure in an awkward moment, poking gentle fun at middle-class leisure pursuits with <strong>affectionate satire</strong> typical of Biedermeier art.</p><p>Spitzweg specialized in small-scale genre paintings that depicted everyday German life with warmth and humor. The work is held at the Staatsgalerie Stuttgart in Germany.</p>`,
      faqs: [
        {
          question: "Who was Carl Spitzweg?",
          answer: `<a href="/apps/masterpieces/artist/carl-spitzweg"><strong>Carl Spitzweg</strong></a> was a German Romantic painter known for humorous genre scenes of middle-class life. Originally trained as a pharmacist, he turned to art in his thirties and became one of the most beloved German painters.`
        },
        {
          question: "What is Biedermeier art?",
          answer: "Biedermeier refers to German and Austrian art from roughly 1815-1848, emphasizing domestic tranquility, modest virtues, and <strong>middle-class values</strong>. Artists depicted everyday life with gentle humor and attention to detail in small, intimate paintings."
        },
        {
          question: "Where can I see this painting?",
          answer: "The painting resides at the Staatsgalerie Stuttgart in Germany. The museum holds an extensive collection of European art from medieval times to the present, with strong holdings in German painting and <strong>contemporary art</strong>."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: carl-spitzweg-the-sunday-hunting');

  // 15. nicolas-poussin-martyrdom-of-st-erasmus
  await prisma.artwork.update({
    where: { slug: 'nicolas-poussin-martyrdom-of-st-erasmus' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> depicts the brutal martyrdom of St. Erasmus, who according to legend had his intestines wound out on a windlass. The painting shows the saint's torture with <strong>Classical restraint</strong>, balancing graphic subject matter with formal compositional order typical of Baroque religious art.</p><p>Poussin painted this altarpiece for St. Peter's Basilica in Rome, demonstrating his ability to handle large-scale religious commissions. The work is now at the <a href="/apps/masterpieces/museum/pinacoteca-vaticana-vatican"><strong>Pinacoteca Vaticana</strong></a>.</p>`,
      faqs: [
        {
          question: "Who was St. Erasmus?",
          answer: "St. Erasmus was a 3rd-century bishop and martyr, also known as St. Elmo. Legends describe his torture, making him the patron saint of sailors (St. Elmo's fire) and those suffering from <strong>abdominal ailments</strong>."
        },
        {
          question: "Where can I see this painting?",
          answer: `The painting is housed at the <a href="/apps/masterpieces/museum/pinacoteca-vaticana-vatican"><strong>Pinacoteca Vaticana</strong></a> in Vatican City. The museum contains paintings collected by the popes, including masterpieces by Giotto, Caravaggio, and Raphael spanning eight centuries.`
        },
        {
          question: "What is Poussin's style?",
          answer: `<a href="/apps/masterpieces/artist/nicolas-poussin"><strong>Nicolas Poussin</strong></a> was a French Baroque painter who worked primarily in Rome. He emphasized rational composition, classical forms, and intellectual clarity, becoming a leading figure in the classical tradition of French painting.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: nicolas-poussin-martyrdom-of-st-erasmus');

  // 16. rembrandt-self-portrait-in-a-flat-cap-and-embroidered-dress
  await prisma.artwork.update({
    where: { slug: 'rembrandt-self-portrait-in-a-flat-cap-and-embroidered-dress' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrays himself wearing an elaborate embroidered dress and flat cap, experimenting with costume and identity in his ongoing self-examination. The rich textures of the clothing contrast with the artist's direct, unidealized gaze with <strong>psychological intensity</strong>.</p><p>This self-portrait belongs to the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a>, which holds multiple Rembrandt works spanning his career.</p>`,
      faqs: [
        {
          question: "Why is Rembrandt wearing unusual clothes?",
          answer: "Rembrandt often dressed in historical or exotic costumes for his self-portraits, exploring different personas and practicing the rendering of <strong>luxurious fabrics</strong>. These costumes allowed him to experiment with identity and theatrical self-presentation."
        },
        {
          question: "Where can I see this painting?",
          answer: `The painting is at the <a href="/apps/masterpieces/museum/art-institute-chicago"><strong>Art Institute of Chicago</strong></a> in Illinois. The museum's European painting collection includes significant Dutch Golden Age works, with several important Rembrandt paintings and prints.`
        },
        {
          question: "How many self-portraits did Rembrandt create?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> made approximately 40 painted self-portraits, 31 etchings, and seven drawings of himself over his lifetime. This unprecedented self-documentation traced his aging, changing fortune, and artistic evolution across five decades.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-self-portrait-in-a-flat-cap-and-embroidered-dress');

  // 17. rembrandt-the-sleeping-herdsman
  await prisma.artwork.update({
    where: { slug: 'rembrandt-the-sleeping-herdsman' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicts a herdsman asleep in a pastoral setting, slumped against a tree with his animals nearby. The quiet scene captures a moment of rest from labor, rendered with <strong>subtle lighting</strong> that emphasizes the figure's relaxed posture.</p><p>The painting demonstrates Rembrandt's interest in pastoral and biblical themes blended with everyday observation. It's held at the National Gallery in London.</p>`,
      faqs: [
        {
          question: "What does the painting show?",
          answer: "The work depicts a herdsman sleeping in the countryside, probably a shepherd resting while watching his flock. It might reference biblical shepherds or simply show a <strong>rural worker</strong> taking a break from his duties in the fields."
        },
        {
          question: "Where can I see this painting?",
          answer: "The painting is at the National Gallery in London. The museum holds one of the world's greatest collections of European paintings, with works from the 13th to the early 20th centuries including a <strong>strong Dutch Golden Age</strong> collection."
        },
        {
          question: "Why did Rembrandt paint this subject?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> was interested in humble, everyday subjects and their connection to biblical themes. Shepherds appear throughout scripture, and this sleeping figure might allude to religious parables while also showing simple rural life.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-the-sleeping-herdsman');

  // 18. paul-delaroche-herodias
  await prisma.artwork.update({
    where: { slug: 'paul-delaroche-herodias' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> portrays Herodias, the biblical figure whose request led to John the Baptist's beheading. The painting shows her in <strong>opulent robes</strong>, capturing the mixture of beauty and moral ambiguity that fascinated 19th-century artists drawn to dramatic historical subjects.</p><p>Delaroche specialized in historical paintings that combined academic technique with theatrical staging. The work belongs to the Wallraf-Richartz Museum in Cologne, Germany.</p>`,
      faqs: [
        {
          question: "Who was Herodias?",
          answer: "Herodias was the wife of Herod Antipas in the New Testament. According to scripture, she orchestrated the execution of John the Baptist through her daughter Salome's dance. Artists depicted her as a symbol of <strong>dangerous feminine power</strong>."
        },
        {
          question: "Who was Paul Delaroche?",
          answer: `<a href="/apps/masterpieces/artist/paul-delaroche"><strong>Paul Delaroche</strong></a> was a French academic painter known for historical subjects rendered with dramatic flair and meticulous detail. He achieved great success in the mid-19th century with paintings that brought history to life.`
        },
        {
          question: "Where can I see this painting?",
          answer: "The painting is at the Wallraf-Richartz Museum in Cologne, Germany. The museum houses an extensive collection of European art from medieval times through the early 20th century, with strong holdings in <strong>German and French painting</strong>."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: paul-delaroche-herodias');

  // 19. paul-signac-river39s-edge-the-siene-at-herblay
  await prisma.artwork.update({
    where: { slug: 'paul-signac-river39s-edge-the-siene-at-herblay' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/paul-signac"><strong>Paul Signac</strong></a> captures the Seine River at Herblay using his distinctive Neo-Impressionist technique. The painting shows the riverbank with trees and reflections rendered in separate dots and dashes of <strong>pure color</strong>, creating a vibrant, luminous surface.</p><p>Signac was a leading practitioner of Pointillism after Georges Seurat's death, applying color theory to landscape painting. The work is held at the <a href="/apps/masterpieces/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: [
        {
          question: "What is Neo-Impressionism?",
          answer: "Neo-Impressionism is a style using small dots or strokes of unmixed color that optically blend in the viewer's eye. Developed by Georges Seurat and <strong>systematized</strong> by Paul Signac, it applied scientific color theory to painting."
        },
        {
          question: "Where can I see this painting?",
          answer: `The painting resides at the <a href="/apps/masterpieces/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris, France. The museum specializes in French art from 1848-1914, including the world's finest collection of Impressionist and Post-Impressionist masterpieces.`
        },
        {
          question: "Who was Paul Signac?",
          answer: `<a href="/apps/masterpieces/artist/paul-signac"><strong>Paul Signac</strong></a> was a French Neo-Impressionist painter who developed Pointillism with Georges Seurat. After Seurat's death, Signac became the style's leading practitioner and theorist, writing influential texts on color and technique.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: paul-signac-river39s-edge-the-siene-at-herblay');

  // 20. gustav-klimt-sitting-nude-man-turned-to-the-left
  await prisma.artwork.update({
    where: { slug: 'gustav-klimt-sitting-nude-man-turned-to-the-left' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created this figure study showing a nude male model seated and turning to the left. The drawing demonstrates Klimt's <strong>draftsmanship skills</strong>, capturing the figure's anatomy and posture with confident, expressive lines.</p><p>The work belongs to the Leopold Museum in Vienna, which holds the world's largest collection of Klimt's drawings and paintings, offering insight into his artistic process beyond his famous decorative works.</p>`,
      faqs: [
        {
          question: "Why did Klimt make figure studies?",
          answer: `<a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> created thousands of drawings throughout his career, using them as preparatory studies and independent works. These studies honed his understanding of human anatomy and movement before incorporating figures into his elaborate <strong>decorative paintings</strong>.`
        },
        {
          question: "Where can I see this drawing?",
          answer: `The drawing is at the <a href="/apps/masterpieces/museum/leopold-museum-vienna-austria"><strong>Leopold Museum</strong></a> in Vienna, Austria. The museum houses the world's largest Klimt collection, including paintings, drawings, and prints that document his entire career and working methods.`
        },
        {
          question: "Is this typical of Klimt's work?",
          answer: "While Klimt is famous for golden decorative paintings, he was primarily a draftsman who made over 4,000 drawings. These figure studies reveal his classical training and ability to capture <strong>human form</strong> before transforming it into stylized compositions."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: gustav-klimt-sitting-nude-man-turned-to-the-left');

  // 21. piero-della-francesca-st-ludovico
  await prisma.artwork.update({
    where: { slug: 'piero-della-francesca-st-ludovico' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> depicts St. Ludovico (Louis of Toulouse) in bishop's vestments, standing with attributes of his office. The painting shows Piero's characteristic approach to religious figures with <strong>geometric clarity</strong> and monumental presence.</p><p>The work belongs to the Museo Civico di Sansepolcro, Piero's birthplace in Tuscany, which preserves several of his important paintings including The Resurrection.</p>`,
      faqs: [
        {
          question: "Who was St. Ludovico?",
          answer: "St. Louis of Toulouse was a 13th-century Franciscan friar who became Bishop of Toulouse. He gave up his claim to the throne of Naples to pursue religious life, dying young. Artists depicted him in <strong>episcopal vestments</strong> with a crown."
        },
        {
          question: "Who was Piero della Francesca?",
          answer: `<a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> was an early Italian Renaissance master known for serene, geometrically precise compositions. He combined perspective, light, and form with mathematical rigor, influencing later Renaissance artists through his innovative approach.`
        },
        {
          question: "Where can I see this painting?",
          answer: "The painting is at the Museo Civico di Sansepolcro in Tuscany, Italy. The museum in Piero's hometown preserves his masterpieces, offering the best opportunity to study his work in <strong>depth and context</strong>."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: piero-della-francesca-st-ludovico');

  // 22. rembrandt-virgin-and-child-in-the-clouds
  await prisma.artwork.update({
    where: { slug: 'rembrandt-virgin-and-child-in-the-clouds' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> depicts the Virgin Mary holding the infant Jesus, both figures surrounded by clouds in a celestial vision. The painting shows Rembrandt's approach to religious subjects with <strong>tender humanity</strong>, emphasizing the intimate bond between mother and child.</p><p>The work demonstrates Rembrandt's ability to combine earthly observation with spiritual themes, rendering sacred figures with the same psychological depth he brought to portraits of contemporary Amsterdam residents.</p>`,
      faqs: [
        {
          question: "How did Rembrandt approach religious subjects?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted biblical scenes throughout his career, treating sacred figures as real people with recognizable emotions. He often used Dutch models and settings, making ancient stories feel immediate and <strong>emotionally accessible</strong>.`
        },
        {
          question: "What does the cloud setting mean?",
          answer: "Clouds traditionally signify heavenly realm in Christian art. Placing Mary and Jesus in clouds emphasizes their divine nature while the intimate portrayal of their relationship maintains the painting's <strong>human warmth</strong> and emotional connection."
        },
        {
          question: "Why did Rembrandt paint this subject?",
          answer: "Despite working in Protestant Amsterdam, Rembrandt frequently painted Catholic subjects like the Virgin and Child. These works served personal devotion, artistic exploration, and the art market, as collectors of all faiths appreciated his <strong>powerful religious imagery</strong>."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-virgin-and-child-in-the-clouds');

  // 23. chaim-soutine-young-woman
  await prisma.artwork.update({
    where: { slug: 'chaim-soutine-young-woman' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a> portrays a young woman with his characteristic turbulent brushwork and distorted forms. The painting shows the subject with <strong>expressive intensity</strong>, using thick paint application and vivid colors that convey psychological depth rather than conventional beauty.</p><p>Soutine's emotionally charged portraits influenced later Expressionist painters. This work remains in a private collection.</p>`,
      faqs: [
        {
          question: "Who was Chaim Soutine?",
          answer: `<a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a> was a Russian-French Expressionist painter known for turbulent, emotionally intense works. Part of the School of Paris, he created visceral paintings of figures and still lifes with thick paint and distorted forms.`
        },
        {
          question: "What is Soutine's painting style?",
          answer: "Soutine used aggressive brushwork, thick impasto, and distorted forms to convey emotional intensity. His paintings reject academic polish for raw expression, with <strong>writhing brushstrokes</strong> and bold colors that influenced Abstract Expressionists like de Kooning."
        },
        {
          question: "Why are his portraits so distorted?",
          answer: "Soutine distorted figures to express inner psychological states rather than external appearance. His approach emphasized feeling over likeness, using formal distortion to convey the <strong>emotional truth</strong> of his subjects through paint itself."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: chaim-soutine-young-woman');

  // 24. pierre-bonnard-the-white-cat
  await prisma.artwork.update({
    where: { slug: 'pierre-bonnard-the-white-cat' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> depicts a white cat in an interior setting, capturing the animal with soft, luminous color. The painting shows Bonnard's intimate approach to domestic subjects, using <strong>vibrant hues</strong> and loose brushwork to convey the warmth of everyday life.</p><p>Bonnard frequently painted his home environment, including the cats that shared his domestic space. The work is held at the <a href="/apps/masterpieces/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris.</p>`,
      faqs: [
        {
          question: "Who was Pierre Bonnard?",
          answer: `<a href="/apps/masterpieces/artist/pierre-bonnard"><strong>Pierre Bonnard</strong></a> was a French Post-Impressionist painter known for intimate interior scenes and landscapes. He used radiant color and personal vision to transform everyday moments into <strong>luminous, decorative compositions</strong>.`
        },
        {
          question: "Why did Bonnard paint domestic subjects?",
          answer: "Bonnard found artistic material in his immediate surroundings: his home, garden, wife, and pets. He believed everyday domestic life contained beauty and meaning, transforming familiar scenes through his unique sense of <strong>color and light</strong>."
        },
        {
          question: "Where can I see this painting?",
          answer: `The painting resides at the <a href="/apps/masterpieces/museum/mus233e-d39orsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris, France. The museum holds extensive Post-Impressionist works, including a significant Bonnard collection that showcases his exploration of domestic intimacy and color.`
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: pierre-bonnard-the-white-cat');

  // 25. rembrandt-jan-cornelisz-sylvius-the-preacher
  await prisma.artwork.update({
    where: { slug: 'rembrandt-jan-cornelisz-sylvius-the-preacher' },
    data: {
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> portrays Jan Cornelisz Sylvius, a prominent Amsterdam preacher and relative of Rembrandt's wife Saskia. The portrait captures the preacher in a moment of animated speech, his hand gesturing as if delivering a sermon with <strong>passionate conviction</strong>.</p><p>Rembrandt created multiple portraits and prints of Sylvius, who baptized several of his children. The work is recreated in the Rembrandt House Museum in Amsterdam.</p>`,
      faqs: [
        {
          question: "Who was Jan Cornelisz Sylvius?",
          answer: "Jan Cornelisz Sylvius was a respected Mennonite preacher in Amsterdam and a cousin of Rembrandt's wife Saskia. He baptized several of Rembrandt's children and maintained a close relationship with the artist's family throughout his <strong>ministerial career</strong>."
        },
        {
          question: "Why did Rembrandt portray him preaching?",
          answer: `<a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> captured Sylvius in action rather than static pose, showing the preacher's animated gestures and engaged expression. This approach conveyed the man's character and vocation, creating a <strong>psychologically vivid portrait</strong>.`
        },
        {
          question: "Where can I see this work?",
          answer: "The painting is displayed at the Rembrandt House Museum in Amsterdam, recreated in the original setting where Rembrandt lived and worked. The museum preserves his home and studio, offering context for understanding his <strong>life and art</strong>."
        }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: rembrandt-jan-cornelisz-sylvius-the-preacher');

  console.log('\nAll 25 artworks updated successfully!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
