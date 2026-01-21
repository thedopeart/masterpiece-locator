const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = {
  "camille-pissarro-the-wood-cart": {
    description: `<p><a href="/apps/masterpieces/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> painted The Wood Cart during his exploration of rural French life. The scene captures a horse-drawn cart loaded with timber, set against a <strong>rustic countryside backdrop</strong>. Pissarro's loose brushwork gives the landscape an atmospheric quality typical of his Impressionist approach.</p>

<p>As a founding figure of Impressionism, Pissarro often painted working-class subjects and agricultural scenes. His interest in <strong>peasant labor</strong> connected him to both the Barbizon tradition and younger painters like Cézanne, whom he mentored. This piece remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted The Wood Cart?",
        answer: `<a href="/apps/masterpieces/artist/camille-pissarro"><strong>Camille Pissarro</strong></a> created this rural scene. He was a Danish-French painter and one of the founders of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, known for his landscapes and scenes of peasant life in the French countryside.`
      },
      {
        question: "What style is The Wood Cart painted in?",
        answer: `The painting reflects Pissarro's <strong>Impressionist style</strong>, featuring loose brushwork, natural light effects, and an interest in everyday rural subjects. His technique captures the atmosphere of the French countryside rather than precise details.`
      },
      {
        question: "What does The Wood Cart depict?",
        answer: `The painting shows a <strong>horse-drawn cart</strong> carrying wood through a rural landscape. Pissarro frequently depicted agricultural workers and country scenes, reflecting his interest in the daily rhythms of peasant life.`
      }
    ]
  },

  "caravaggio-rest-on-the-flight-into-egypt": {
    description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted Rest on the Flight into Egypt around 1597, depicting the Holy Family's pause during their escape to Egypt. Joseph holds sheet music for an angel who plays violin while Mary and the infant Jesus sleep. The composition divides into two halves: a lush, green landscape on the right and a <strong>barren, rocky terrain</strong> on the left.</p>

<p>This early work shows Caravaggio before he fully developed his dramatic <strong>chiaroscuro technique</strong>. The angel, painted from a live model, displays the naturalism that would define his career. The painting now hangs at the <a href="/apps/masterpieces/museum/galleria-doria-pamphilj-rome-italy"><strong>Galleria Doria Pamphilj</strong></a> in Rome.</p>`,
    faqs: [
      {
        question: "Where can I see Rest on the Flight into Egypt?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/galleria-doria-pamphilj-rome-italy"><strong>Galleria Doria Pamphilj</strong></a> in Rome, Italy. The museum houses one of the finest private art collections in Rome, including other Baroque masterworks.`
      },
      {
        question: "What is depicted in Rest on the Flight into Egypt?",
        answer: `The scene shows Mary and baby Jesus resting while an <strong>angel plays music</strong> for them, with Joseph holding the sheet music. It illustrates a moment from the biblical story of the Holy Family fleeing Herod's massacre.`
      },
      {
        question: "Who painted Rest on the Flight into Egypt?",
        answer: `<a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> created this work around 1597. It's an early painting from before he developed his signature dramatic lighting, showing a softer, more lyrical approach to religious subjects.`
      },
      {
        question: "What style is this Caravaggio painting?",
        answer: `This is an early <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> work painted before Caravaggio's famous dark style emerged. The composition shows <strong>naturalistic figures</strong> in an idealized landscape setting typical of late Renaissance religious painting.`
      }
    ]
  },

  "chaim-soutine-white-house-on-a-hill": {
    description: `<p><a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a> painted White House on a Hill with his characteristic expressive intensity. A solitary white structure sits atop a rolling hillside, rendered in thick, <strong>swirling brushstrokes</strong> that seem to set the entire landscape in motion. The earthy palette contrasts the pale house against turbulent greens and browns.</p>

<p>Born in Belarus and working mostly in France, Soutine developed a highly personal style that influenced Abstract Expressionists decades later. His landscapes often appear to <strong>twist and writhe</strong> with emotional energy. This painting is held at the <a href="/apps/masterpieces/museum/los-angeles-county-museum-of-art-lacma-los-angeles"><strong>Los Angeles County Museum of Art</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see White House on a Hill?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/los-angeles-county-museum-of-art-lacma-los-angeles"><strong>Los Angeles County Museum of Art (LACMA)</strong></a> in California. LACMA holds one of the largest art collections in the western United States.`
      },
      {
        question: "Who painted White House on a Hill?",
        answer: `<a href="/apps/masterpieces/artist/chaim-soutine"><strong>Chaim Soutine</strong></a> created this work. He was a Lithuanian-born French painter associated with the <strong>School of Paris</strong>, known for his emotionally charged landscapes and portraits.`
      },
      {
        question: "What style is White House on a Hill?",
        answer: `Soutine worked in an <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> style marked by thick impasto, distorted forms, and intense color. His technique influenced later Abstract Expressionists, particularly Willem de Kooning.`
      }
    ]
  },

  "correggio-the-magdalene": {
    description: `<p><a href="/apps/masterpieces/artist/correggio"><strong>Correggio</strong></a> painted The Magdalene around 1518, showing Mary Magdalene in a moment of quiet contemplation. She reclines in a wooded setting, her head resting on her hand as she reads a devotional text. The soft, diffused lighting creates a sense of <strong>intimate devotion</strong>.</p>

<p>Correggio's handling of light and flesh tones influenced generations of painters, from the Carracci to Baroque artists across Europe. His ability to render <strong>tender, sensuous figures</strong> within religious contexts became a hallmark of his work. The painting now resides at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London.</p>`,
    faqs: [
      {
        question: "Where can I see Correggio's The Magdalene?",
        answer: `The painting is displayed at the <a href="/apps/masterpieces/museum/national-gallery-london-uk"><strong>National Gallery</strong></a> in London, England. The museum houses over 2,300 works spanning from the 13th to the early 20th century.`
      },
      {
        question: "Who was Correggio?",
        answer: `<a href="/apps/masterpieces/artist/correggio"><strong>Correggio</strong></a> was an Italian <a href="/apps/masterpieces/movement/high-renaissance"><strong>Renaissance</strong></a> painter known for his soft modeling and graceful figures. His innovative use of light and illusionistic ceiling frescoes influenced Baroque art.`
      },
      {
        question: "What does The Magdalene depict?",
        answer: `The painting shows <strong>Mary Magdalene</strong> reading in a forest setting. She's portrayed as a penitent figure, reflecting on scripture. Correggio renders her with a tender sensuality typical of his religious works.`
      }
    ]
  },

  "david-teniers-younger-landscape-in-the-suburbs-of-brussels": {
    description: `<p><a href="/apps/masterpieces/artist/david-teniers-younger"><strong>David Teniers the Younger</strong></a> captured the outskirts of Brussels in this peaceful landscape. The composition shows a winding road through <strong>rolling countryside</strong>, with travelers and peasants going about their daily business. Flemish farmhouses and distant church spires dot the horizon.</p>

<p>Teniers served as court painter to Archduke Leopold Wilhelm and became famous for both peasant scenes and landscapes. His work combines careful observation with a gentle, <strong>golden atmosphere</strong>. This painting is held at the <a href="/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Where can I see this David Teniers landscape?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/hermitage-museum-saint-petersburg-russia"><strong>Hermitage Museum</strong></a> in Saint Petersburg, Russia. The Hermitage holds one of the world's largest collections of Flemish and Dutch Golden Age painting.`
      },
      {
        question: "Who was David Teniers the Younger?",
        answer: `<a href="/apps/masterpieces/artist/david-teniers-younger"><strong>David Teniers the Younger</strong></a> was a Flemish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter known for peasant scenes, landscapes, and gallery paintings. He served as court painter in Brussels.`
      },
      {
        question: "What does this landscape depict?",
        answer: `The painting shows the <strong>countryside around Brussels</strong> with travelers on a road, farmhouses, and distant buildings. Teniers often painted such scenes, capturing the peaceful atmosphere of rural Flanders.`
      }
    ]
  },

  "diego-velazquez-the-waterseller-of-seville": {
    description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted The Waterseller of Seville around 1620, before leaving for the Spanish court. An elderly vendor hands a glass of water to a young boy while another figure drinks in the background. The <strong>bodegón</strong> (kitchen scene) showcases Velázquez's early mastery of naturalistic detail.</p>

<p>The painting's cool palette and precise rendering of textures, particularly the large earthenware jug beaded with moisture, demonstrate remarkable <strong>technical skill</strong> for a painter still in his early twenties. It now hangs at <a href="/apps/masterpieces/museum/apsley-house-wellington-museum-london-uk"><strong>Apsley House</strong></a> in London, the former residence of the Duke of Wellington.</p>`,
    faqs: [
      {
        question: "Where can I see The Waterseller of Seville?",
        answer: `The painting is displayed at <a href="/apps/masterpieces/museum/apsley-house-wellington-museum-london-uk"><strong>Apsley House</strong></a> (the Wellington Museum) in London. The Duke of Wellington acquired it after the Peninsular War, and it remains part of the Wellington Collection.`
      },
      {
        question: "When did Velázquez paint The Waterseller?",
        answer: `<a href="/apps/masterpieces/artist/diego-velazquez"><strong>Velázquez</strong></a> painted this around 1620 in Seville, when he was only about 21 years old. It's considered one of his finest early works before he became court painter in Madrid.`
      },
      {
        question: "What is a bodegón?",
        answer: `A <strong>bodegón</strong> is a Spanish genre painting featuring kitchen scenes, food, and drink. <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> artists in Seville excelled at these works, which combined still life with humble figure subjects.`
      },
      {
        question: "What makes this painting significant?",
        answer: `The painting demonstrates Velázquez's early genius in rendering <strong>textures and light</strong>. The water droplets on the ceramic jug and the translucent glass show his ability to capture material reality with remarkable precision.`
      }
    ]
  },

  "joshua-reynolds-sir-thomas-kennedy-james-caulfeild-mr-ward-and-mr-": {
    description: `<p><a href="/apps/masterpieces/artist/joshua-reynolds"><strong>Joshua Reynolds</strong></a> painted this group portrait showing four young gentlemen in animated conversation. The composition captures an informal moment among friends, with each figure displaying distinct personality through posture and expression. Reynolds' <strong>fluid brushwork</strong> gives the scene a lively, spontaneous quality.</p>

<p>As the first president of the Royal Academy and England's most sought-after portraitist, Reynolds elevated British painting to new heights. His ability to combine <strong>aristocratic elegance</strong> with psychological insight made him the portraitist of choice for Georgian society.</p>`,
    faqs: [
      {
        question: "Who painted this group portrait?",
        answer: `<a href="/apps/masterpieces/artist/joshua-reynolds"><strong>Joshua Reynolds</strong></a> created this work. He was the leading English portrait painter of the 18th century and first president of the Royal Academy, helping establish British painting's international reputation.`
      },
      {
        question: "What style is this portrait?",
        answer: `Reynolds worked in the <strong>Grand Manner</strong> style, combining elements of classical and <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painting. His portraits blended dignified poses with warm, naturalistic characterization of his sitters.`
      },
      {
        question: "What does this painting depict?",
        answer: `The painting shows four <strong>young aristocratic men</strong> engaged in conversation. Reynolds excelled at group portraits that captured the social dynamics and personalities of his sitters in seemingly informal arrangements.`
      }
    ]
  },

  "edgar-degas-mademoiselle-marie-dihau": {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted this intimate portrait of Marie Dihau, a talented pianist and sister of the bassoonist Désiré Dihau, who was Degas' friend. She sits at the piano in a <strong>domestic interior</strong>, captured with the artist's characteristic naturalism and unconventional composition.</p>

<p>Degas knew the Dihau family through the Paris Opera orchestra and painted several family members. His portraits often show subjects absorbed in <strong>everyday activities</strong> rather than formally posed. This work is held at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg.</p>`,
    faqs: [
      {
        question: "Where can I see this Degas portrait?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/hermitage"><strong>State Hermitage Museum</strong></a> in Saint Petersburg, Russia. The Hermitage houses a strong collection of French <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> works.`
      },
      {
        question: "Who was Marie Dihau?",
        answer: `Marie Dihau was a French <strong>pianist</strong> and the sister of Désiré Dihau, a bassoonist in the Paris Opera orchestra. <a href="/apps/masterpieces/artist/edgar-degas"><strong>Degas</strong></a> was friends with the family and painted several portraits of them.`
      },
      {
        question: "What style is this portrait?",
        answer: `Degas painted in an <strong>Impressionist style</strong> but focused more on figure subjects than landscapes. His portraits capture people in natural poses within everyday settings, often with cropped, photographic compositions.`
      }
    ]
  },

  "juan-gris-landscape-with-house-at-ceret": {
    description: `<p><a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> painted Landscape with House at Céret during his time in this southern French town, which attracted many Cubist artists. The composition breaks the hillside village into <strong>geometric planes</strong>, with buildings and foliage rendered as interlocking facets of color. Ochres, greens, and grays create a subdued Mediterranean palette.</p>

<p>Gris brought a more structured, classical approach to Cubism than Picasso or Braque. His landscapes from Céret show how he applied <strong>Synthetic Cubism's</strong> principles to traditional subject matter while maintaining legibility. This work remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted Landscape with House at Céret?",
        answer: `<a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> created this work. He was a Spanish painter and one of the leading figures of <a href="/apps/masterpieces/movement/cubism"><strong>Cubism</strong></a>, known for his more structured, harmonious approach to the style.`
      },
      {
        question: "What is Céret?",
        answer: `Céret is a town in the <strong>French Pyrenees</strong> near the Spanish border. It attracted many early 20th-century artists including Picasso, Braque, and Gris, becoming an important center for Cubist experimentation.`
      },
      {
        question: "What style is this landscape?",
        answer: `The painting exemplifies <strong>Synthetic Cubism</strong>, featuring geometric simplification and overlapping planes. Gris's landscapes are more orderly and colorful than earlier Analytic Cubist works by Picasso and Braque.`
      }
    ]
  },

  "edgar-degas-rest": {
    description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> titled this work simply Rest, depicting a figure in a moment of pause. Degas was fascinated by the human body in unguarded, <strong>natural positions</strong>. His pastels and paintings often captured dancers, bathers, and workers during rest periods between activities.</p>

<p>Unlike traditional academic poses, Degas preferred to show <strong>unconventional angles</strong> and casual postures that revealed character through body language. His approach influenced how later artists depicted the figure in everyday moments rather than idealized compositions.</p>`,
    faqs: [
      {
        question: "Who painted Rest?",
        answer: `<a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> created this work. He was a French artist associated with <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>, though he preferred to call himself a Realist. He's known for his figures caught in natural moments.`
      },
      {
        question: "What subject matter did Degas prefer?",
        answer: `Degas frequently painted <strong>dancers, bathers, and working women</strong> in everyday moments. He was fascinated by the body in motion and at rest, capturing gestures and postures that academic painting traditionally ignored.`
      },
      {
        question: "What style is this painting?",
        answer: `Degas worked in an <strong>Impressionist style</strong> with a focus on figure subjects. His compositions often feature cropped frames, unusual viewpoints, and natural lighting that give scenes an intimate, spontaneous quality.`
      }
    ]
  },

  "egon-schiele-village-with-mountains": {
    description: `<p><a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> painted Village with Mountains, showing clustered buildings against a mountainous backdrop. The composition features Schiele's characteristic <strong>angular forms</strong> and muted earth tones. Rooftops and walls stack vertically, creating a compressed, almost claustrophobic arrangement.</p>

<p>Though best known for his provocative figure work, Schiele produced numerous landscapes and <strong>townscapes</strong> throughout his short career. His villages appear abandoned and melancholic, reflecting the psychological intensity he brought to all his subjects. This painting remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted Village with Mountains?",
        answer: `<a href="/apps/masterpieces/artist/egon-schiele"><strong>Egon Schiele</strong></a> created this work. He was an Austrian <a href="/apps/masterpieces/movement/expressionism"><strong>Expressionist</strong></a> painter who died at 28 during the 1918 flu pandemic, leaving behind a highly distinctive body of work.`
      },
      {
        question: "What style is this landscape?",
        answer: `The painting reflects Schiele's <strong>Expressionist approach</strong>, with angular lines, compressed space, and a somber palette. Even his landscapes carry the psychological tension found in his more famous figure works.`
      },
      {
        question: "Did Schiele paint many landscapes?",
        answer: `Yes, Schiele produced numerous <strong>townscapes and landscapes</strong> alongside his figure paintings. His views of Bohemian and Austrian villages feature stacked buildings and empty streets that feel haunting and isolated.`
      }
    ]
  },

  "ford-madox-brown-romeo-and-juliet": {
    description: `<p><a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> painted Romeo and Juliet, depicting Shakespeare's famous lovers. The scene likely shows a tender moment between the couple, rendered with the <strong>vivid colors</strong> and meticulous detail associated with the Pre-Raphaelite circle. Brown was a mentor and associate of the Pre-Raphaelite Brotherhood.</p>

<p>Brown's literary subjects combined <strong>romantic intensity</strong> with historical accuracy in costume and setting. His work influenced younger artists seeking to revive the clarity and symbolism of early Renaissance painting. This piece is held in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted this Romeo and Juliet?",
        answer: `<a href="/apps/masterpieces/artist/ford-madox-brown"><strong>Ford Madox Brown</strong></a> created this work. Though not an official member of the <strong>Pre-Raphaelite Brotherhood</strong>, he was closely associated with the movement and mentored several of its founders.`
      },
      {
        question: "What style is this painting?",
        answer: `Brown worked in a style aligned with the <a href="/apps/masterpieces/movement/pre-raphaelite"><strong>Pre-Raphaelite movement</strong></a>, featuring bright colors, detailed observation, and literary or historical subjects. His work emphasized moral seriousness and visual intensity.`
      },
      {
        question: "What does the painting depict?",
        answer: `The painting illustrates a scene from Shakespeare's <strong>Romeo and Juliet</strong>. Brown often chose literary subjects that allowed him to explore intense emotion while demonstrating his skills in costume and historical detail.`
      }
    ]
  },

  "juan-de-valdes-leal-the-sacrifice-of-isaac": {
    description: `<p><a href="/apps/masterpieces/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> painted The Sacrifice of Isaac, depicting the Old Testament moment when Abraham prepares to sacrifice his son before being stopped by an angel. Valdés Leal's <strong>dramatic composition</strong> captures the emotional intensity of the scene with dynamic movement and strong contrasts.</p>

<p>A leading Baroque painter in Seville alongside Murillo, Valdés Leal was known for his energetic brushwork and <strong>vivid religious imagery</strong>. His style combined Spanish realism with Italian Baroque influences. This painting remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted The Sacrifice of Isaac?",
        answer: `<a href="/apps/masterpieces/artist/juan-de-valdes-leal"><strong>Juan de Valdés Leal</strong></a> created this work. He was a Spanish <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> painter active in Seville, known for his dramatic religious compositions and vanitas still lifes.`
      },
      {
        question: "What does this painting depict?",
        answer: `The painting shows <strong>Abraham about to sacrifice Isaac</strong> before God sends an angel to stop him. This Old Testament story was popular in Baroque art as a demonstration of faith and divine intervention.`
      },
      {
        question: "What style is this painting?",
        answer: `Valdés Leal worked in the Spanish <strong>Baroque style</strong>, featuring dramatic lighting, dynamic compositions, and emotional intensity. His work shows influence from both Murillo's gentle manner and more theatrical Italian models.`
      }
    ]
  },

  "juan-gris-portrait-of-the-artist39s-mother": {
    description: `<p><a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> painted this portrait of his mother, applying Cubist principles to a deeply personal subject. The composition breaks the figure into <strong>geometric planes</strong> while maintaining a recognizable human presence. Muted colors and careful construction give the work a contemplative dignity.</p>

<p>Unlike Picasso's more aggressive fragmentations, Gris approached portraiture with structural clarity and <strong>emotional restraint</strong>. His portraits demonstrate that Cubism could convey human presence and feeling, not just formal experimentation. This painting is held privately.</p>`,
    faqs: [
      {
        question: "Who painted Portrait of the Artist's Mother?",
        answer: `<a href="/apps/masterpieces/artist/juan-gris"><strong>Juan Gris</strong></a> created this work. He was a Spanish artist and key figure in <a href="/apps/masterpieces/movement/cubism"><strong>Cubism</strong></a>, known for his systematic approach to the style's geometric principles.`
      },
      {
        question: "What style is this portrait?",
        answer: `The painting is a <strong>Cubist portrait</strong>, breaking the figure into geometric facets while preserving her identity. Gris's approach to portraiture was more orderly and legible than Picasso's radical distortions.`
      },
      {
        question: "Did Cubists paint portraits?",
        answer: `Yes, many <strong>Cubist artists painted portraits</strong>, though the style's fragmentation made them challenging. Gris, Picasso, and Braque all created portraits that balanced formal experimentation with human likeness.`
      }
    ]
  },

  "francis-picabia-sunlight-on-the-banks-of-the-loing": {
    description: `<p><a href="/apps/masterpieces/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted Sunlight on the Banks of the Loing, depicting the French river in dappled light. The scene captures <strong>reflections on water</strong> and foliage along the riverbank, rendered with the broken brushwork of Impressionism. Greens and blues dominate the tranquil composition.</p>

<p>This early landscape predates Picabia's later involvement with Cubism and Dada. Before becoming an avant-garde provocateur, he worked in an <strong>Impressionist manner</strong> that showed genuine skill with light and atmosphere. The painting remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted Sunlight on the Banks of the Loing?",
        answer: `<a href="/apps/masterpieces/artist/francis-picabia"><strong>Francis Picabia</strong></a> created this work. He was a French artist who worked in many styles throughout his career, from <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> to Cubism to Dada.`
      },
      {
        question: "What style is this painting?",
        answer: `This is an <strong>Impressionist landscape</strong>, painted before Picabia moved to more radical styles. The broken brushwork and attention to light effects show his early engagement with French painting traditions.`
      },
      {
        question: "Where is the Loing River?",
        answer: `The <strong>Loing River</strong> flows through central France and was painted by many Impressionists. Monet, Sisley, and other artists worked along its banks, attracted by the light and quiet rural scenery.`
      }
    ]
  },

  "frans-hals-paulus-van-beresteyn": {
    description: `<p><a href="/apps/masterpieces/artist/frans-hals"><strong>Frans Hals</strong></a> painted this portrait of Paulus van Beresteyn, a Dutch civic official. The subject appears in formal black attire with a white ruff collar, typical of <strong>prosperous Dutch burghers</strong> of the period. Hals' rapid, confident brushstrokes give the face a vivid, lifelike presence.</p>

<p>Hals excelled at capturing personality through fleeting expressions and loose paint handling. His portraits influenced later painters including Manet and the Impressionists. This work is held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
    faqs: [
      {
        question: "Where can I see this Frans Hals portrait?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris, France. The museum holds several works by Hals alongside its vast collection of Dutch and Flemish Golden Age painting.`
      },
      {
        question: "Who was Frans Hals?",
        answer: `<a href="/apps/masterpieces/artist/frans-hals"><strong>Frans Hals</strong></a> was a Dutch Golden Age portrait painter known for his loose, energetic brushwork. His ability to capture character and spontaneity influenced painters for centuries.`
      },
      {
        question: "Who was Paulus van Beresteyn?",
        answer: `Paulus van Beresteyn was a <strong>Dutch civic official</strong> from Haarlem. Hals painted portraits of many local citizens and officials, documenting the prosperous middle class of the Dutch Republic.`
      },
      {
        question: "What style is this portrait?",
        answer: `Hals worked in the <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> style, but his loose brushwork set him apart from more polished contemporaries. His technique anticipated Impressionism by over two centuries.`
      }
    ]
  },

  "frida-kahlo-henry-ford-hospital-the-flying-bed": {
    description: `<p><a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> painted Henry Ford Hospital in 1932 following her miscarriage in Detroit. She lies naked on a hospital bed, bleeding, with six symbolic objects floating around her connected by red threads. These include a fetus, snail, pelvis, and medical equipment. The <strong>industrial Detroit skyline</strong> appears in the background.</p>

<p>This deeply personal work transformed private trauma into <strong>powerful visual imagery</strong>. Kahlo's unflinching self-examination and use of Mexican votive painting traditions created a new vocabulary for expressing female experience. The painting is held at the <a href="/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico"><strong>Dolores Olmedo Collection</strong></a> in Mexico City.</p>`,
    faqs: [
      {
        question: "Where can I see Henry Ford Hospital?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/dolores-olmedo-collection-mexico-city-mexico"><strong>Dolores Olmedo Collection</strong></a> in Mexico City. The museum holds the largest collection of <a href="/apps/masterpieces/artist/frida-kahlo"><strong>Frida Kahlo</strong></a> works in the world.`
      },
      {
        question: "What does this painting depict?",
        answer: `The painting shows Kahlo after her <strong>miscarriage in Detroit</strong> in 1932. The floating objects connected to her by red threads symbolize her physical and emotional pain, including a fetus, medical equipment, and her damaged pelvis.`
      },
      {
        question: "What style is this Frida Kahlo painting?",
        answer: `Kahlo combined <a href="/apps/masterpieces/movement/surrealism"><strong>Surrealist</strong></a> elements with Mexican folk art traditions, particularly votive paintings called retablos. Her work creates a unique visual language for personal and physical experiences.`
      }
    ]
  },

  "george-stubbs-portrait-of-a-huntsman": {
    description: `<p><a href="/apps/masterpieces/artist/george-stubbs"><strong>George Stubbs</strong></a> painted Portrait of a Huntsman, showing a figure in traditional hunting attire. The subject likely stands with hunting dogs or horses, elements Stubbs rendered with unmatched <strong>anatomical precision</strong>. His knowledge of animal structure came from years of scientific study.</p>

<p>Stubbs became the leading <strong>sporting painter</strong> in Georgian England, combining artistic skill with scientific accuracy. His portraits of horses, dogs, and their owners documented the country pursuits of the English aristocracy. This work remains in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted Portrait of a Huntsman?",
        answer: `<a href="/apps/masterpieces/artist/george-stubbs"><strong>George Stubbs</strong></a> created this work. He was an English painter famous for his <strong>horse paintings</strong> and sporting subjects, known for his scientific understanding of animal anatomy.`
      },
      {
        question: "What style is this painting?",
        answer: `Stubbs worked in a naturalistic style influenced by both <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> portraiture and scientific illustration. His combination of artistic refinement and anatomical accuracy was unique in British painting.`
      },
      {
        question: "What made George Stubbs famous?",
        answer: `Stubbs became famous for his <strong>anatomically accurate horse paintings</strong>. He spent years dissecting horses and published an influential anatomy book before becoming the most sought-after sporting painter in England.`
      }
    ]
  },

  "giorgione-the-three-philosophers": {
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted The Three Philosophers around 1509, showing three figures of different ages before a rocky cave. Their identities remain debated: they may represent the Three Magi, stages of human life, or different philosophical traditions. The <strong>mysterious atmosphere</strong> is characteristic of Giorgione's poetic approach.</p>

<p>Giorgione pioneered the <strong>Venetian style</strong> of soft modeling and atmospheric landscapes that influenced Titian and later painters. His works often defy easy interpretation, inviting contemplation rather than narrative reading. This painting hangs at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna.</p>`,
    faqs: [
      {
        question: "Where can I see The Three Philosophers?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/kunsthistorisches-museum-vienna-austria"><strong>Kunsthistorisches Museum</strong></a> in Vienna, Austria. The museum houses one of the finest collections of Renaissance and Baroque painting in Europe.`
      },
      {
        question: "Who painted The Three Philosophers?",
        answer: `<a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> created this work around 1509. He was a Venetian <a href="/apps/masterpieces/movement/high-renaissance"><strong>Renaissance</strong></a> master who died young but profoundly influenced the development of oil painting.`
      },
      {
        question: "What does The Three Philosophers depict?",
        answer: `The painting shows three men of different ages before a cave. Their meaning is debated: they may be the <strong>Three Magi</strong>, philosophers from different traditions, or an allegory of human life stages.`
      },
      {
        question: "What is Giorgione known for?",
        answer: `Giorgione pioneered the <strong>Venetian style</strong> of soft lighting, atmospheric landscapes, and mysterious subjects. His poetic approach to painting influenced Titian, who may have helped complete some of his works.`
      }
    ]
  },

  "giotto-st-francis-mourned-by-st-clare": {
    description: `<p><a href="/apps/masterpieces/artist/giotto"><strong>Giotto di Bondone</strong></a> painted St. Francis Mourned by St. Clare as part of his fresco cycle in Assisi. The scene shows Saint Clare and other followers grieving over the body of Saint Francis. Giotto's figures display <strong>genuine human emotion</strong>, a revolutionary departure from the stylized Byzantine tradition.</p>

<p>This fresco helped establish Giotto as the founder of Western painting. His solid, three-dimensional figures and <strong>natural expressions</strong> influenced all subsequent European art. The work remains at the <a href="/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi.</p>`,
    faqs: [
      {
        question: "Where can I see this Giotto fresco?",
        answer: `This fresco is located at the <a href="/apps/masterpieces/museum/basilica-of-saint-francis-of-assisi-assisi-italy"><strong>Basilica of Saint Francis</strong></a> in Assisi, Italy. The church contains Giotto's famous fresco cycle depicting the life of Saint Francis.`
      },
      {
        question: "Who was Giotto?",
        answer: `<a href="/apps/masterpieces/artist/giotto"><strong>Giotto di Bondone</strong></a> was an Italian painter active around 1300. He's considered the father of Western painting, breaking from Byzantine conventions to create naturalistic, emotionally expressive figures.`
      },
      {
        question: "What does this fresco depict?",
        answer: `The scene shows <strong>Saint Clare mourning Saint Francis</strong> after his death. Giotto captures the grief of Francis's followers with unprecedented emotional realism, making religious narratives feel immediate and human.`
      },
      {
        question: "Why is Giotto historically important?",
        answer: `Giotto revolutionized painting by depicting <strong>solid, three-dimensional figures</strong> with natural emotions. His break from flat, stylized Byzantine art launched the development that led to the Renaissance.`
      }
    ]
  },

  "jules-breton-small-gleaner-sitting-in-the-field": {
    description: `<p><a href="/apps/masterpieces/artist/jules-breton"><strong>Jules Breton</strong></a> painted Small Gleaner Sitting in the Field, depicting a young peasant girl resting during the harvest. She sits in golden stubble, taking a moment of pause from gathering leftover grain. Breton's <strong>warm sunlight</strong> and sympathetic portrayal idealize rural labor without sentimentality.</p>

<p>Breton specialized in scenes of French peasant life, particularly the harvest. Unlike Millet's more somber approach, Breton's workers appear <strong>healthy and dignified</strong>. His paintings were enormously popular with American collectors during the Gilded Age. This work is in a private collection.</p>`,
    faqs: [
      {
        question: "Who painted Small Gleaner Sitting in the Field?",
        answer: `<a href="/apps/masterpieces/artist/jules-breton"><strong>Jules Breton</strong></a> created this work. He was a French painter known for poetic scenes of <strong>peasant women</strong> during harvest, combining naturalism with an idealized vision of rural life.`
      },
      {
        question: "What is a gleaner?",
        answer: `A <strong>gleaner</strong> was someone, usually a poor woman or child, who collected leftover grain from harvested fields. This practice provided food for the poor and was a common subject in 19th-century French painting.`
      },
      {
        question: "What style is this painting?",
        answer: `Breton worked in a <a href="/apps/masterpieces/movement/realism"><strong>Realist</strong></a> style focused on rural subjects. His approach was more idealized than Courbet's or Millet's, presenting peasant life with warmth and dignity.`
      }
    ]
  },

  "hyacinthe-rigaud-louis-xv": {
    description: `<p><a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a> painted this portrait of Louis XV, continuing the tradition of grand royal portraiture he established with Louis XIV. The young king appears in <strong>ceremonial regalia</strong>, embodying the majesty and authority of the French crown. Rich fabrics and symbols of power fill the composition.</p>

<p>Rigaud dominated French portraiture for decades, creating the definitive image of <strong>Bourbon monarchy</strong>. His ability to render luxury materials while conveying royal dignity made him the portraitist of choice for European courts. This portrait is held at the <a href="/apps/masterpieces/museum/mus233e-cond233-chantilly-france"><strong>Musée Condé</strong></a> in Chantilly.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait of Louis XV?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/mus233e-cond233-chantilly-france"><strong>Musée Condé</strong></a> in Chantilly, France. The museum houses an outstanding collection of French art and royal portraits.`
      },
      {
        question: "Who was Hyacinthe Rigaud?",
        answer: `<a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a> was the leading French portrait painter of his era. His famous portrait of Louis XIV established the standard for <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> royal portraiture across Europe.`
      },
      {
        question: "What does this portrait depict?",
        answer: `The painting shows <strong>Louis XV in royal regalia</strong>, including coronation robes and symbols of French monarchy. Rigaud specialized in conveying the majesty and authority of his royal and aristocratic sitters.`
      }
    ]
  },

  "van-gogh-milk-jug": {
    description: `<p><a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> painted Milk Jug, a modest still life of a simple ceramic vessel. The composition focuses on the jug's solid form and the <strong>subtle tonal variations</strong> of its cream-colored surface. Van Gogh's early Dutch works often featured humble household objects rendered with careful observation.</p>

<p>This painting was among the works stolen from Boston's <strong>Isabella Stewart Gardner Museum</strong> in the infamous 1990 heist, and it remains missing. The theft also took works by Rembrandt, Vermeer, and others, representing one of the greatest art crimes in history.</p>`,
    faqs: [
      {
        question: "Where is Van Gogh's Milk Jug now?",
        answer: `This painting was <strong>stolen in 1990</strong> from the Isabella Stewart Gardner Museum in Boston during the largest art heist in history. Its whereabouts remain unknown, and the FBI continues investigating the case.`
      },
      {
        question: "Who painted Milk Jug?",
        answer: `<a href="/apps/masterpieces/artist/van-gogh"><strong>Vincent van Gogh</strong></a> created this early still life. He was a Dutch <a href="/apps/masterpieces/movement/post-impressionism"><strong>Post-Impressionist</strong></a> painter whose expressive style would later influence modern art profoundly.`
      },
      {
        question: "What happened at the Gardner Museum in 1990?",
        answer: `In March 1990, thieves disguised as police officers stole 13 works worth over <strong>$500 million</strong>, including this Van Gogh, Vermeer's The Concert, and three Rembrandts. None have been recovered.`
      }
    ]
  },

  "jacob-van-ruisdael-view-of-alkmaar": {
    description: `<p><a href="/apps/masterpieces/artist/jacob-van-ruisdael"><strong>Jacob van Ruisdael</strong></a> painted View of Alkmaar, depicting the Dutch town beneath a vast, <strong>cloud-filled sky</strong>. The low horizon emphasizes the dramatic cloudscape, a hallmark of Dutch landscape painting. Buildings and church towers punctuate the flat terrain while windmills dot the distance.</p>

<p>Ruisdael was the greatest Dutch landscape painter of the Golden Age, known for his <strong>atmospheric effects</strong> and emotional resonance. His work influenced English and French landscape painters for generations. This painting is held at the <a href="/apps/masterpieces/museum/museum-of-fine-arts-mfa-boston-ma-us"><strong>Museum of Fine Arts</strong></a> in Boston.</p>`,
    faqs: [
      {
        question: "Where can I see View of Alkmaar?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/museum-of-fine-arts-mfa-boston-ma-us"><strong>Museum of Fine Arts</strong></a> in Boston, Massachusetts. The MFA holds a strong collection of Dutch Golden Age paintings.`
      },
      {
        question: "Who painted View of Alkmaar?",
        answer: `<a href="/apps/masterpieces/artist/jacob-van-ruisdael"><strong>Jacob van Ruisdael</strong></a> created this work. He was the leading Dutch landscape painter of the 17th century, famous for his <strong>dramatic skies</strong> and atmospheric effects.`
      },
      {
        question: "What is Alkmaar?",
        answer: `Alkmaar is a <strong>historic Dutch city</strong> in North Holland, known for its cheese market. Ruisdael painted views of several Dutch towns, capturing their distinctive profiles against expansive skies.`
      },
      {
        question: "What style is this painting?",
        answer: `Ruisdael worked in the Dutch <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> tradition of landscape painting, emphasizing dramatic cloudscapes and naturalistic detail. His work influenced later Romantic landscape painters.`
      }
    ]
  },

  "jan-steen-love-sickness": {
    description: `<p><a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> painted Love Sickness, a comic genre scene showing a young woman receiving a doctor's visit. The physician checks her pulse while knowing looks suggest her malady is romantic rather than physical. Steen's <strong>theatrical staging</strong> and knowing humor make the diagnosis clear to viewers.</p>

<p>Steen specialized in lively domestic scenes filled with moral wit. His paintings often functioned as visual proverbs, gently mocking human folly. This work hangs at the <a href="/apps/masterpieces/museum/alte-pinakothek-munich-germany"><strong>Alte Pinakothek</strong></a> in Munich.</p>`,
    faqs: [
      {
        question: "Where can I see Love Sickness?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/alte-pinakothek-munich-germany"><strong>Alte Pinakothek</strong></a> in Munich, Germany. The museum holds one of the world's finest collections of European Old Master paintings.`
      },
      {
        question: "Who painted Love Sickness?",
        answer: `<a href="/apps/masterpieces/artist/jan-steen"><strong>Jan Steen</strong></a> created this work. He was a Dutch Golden Age painter famous for his humorous <strong>genre scenes</strong> depicting everyday life with moral undertones.`
      },
      {
        question: "What does Love Sickness depict?",
        answer: `The painting shows a <strong>doctor visiting a lovesick young woman</strong>. The doctor's knowing expression and symbolic details suggest her illness is romantic longing, a popular comic theme in Dutch painting.`
      },
      {
        question: "What style is this painting?",
        answer: `Steen worked in the Dutch <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> genre tradition, creating scenes that combined entertainment with moral commentary. His lively compositions influenced later narrative painting.`
      }
    ]
  }
};

async function main() {
  console.log('Updating 25 artworks (batch 5)...\n');

  for (const [slug, data] of Object.entries(artworkUpdates)) {
    try {
      const updated = await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${updated.title}`);
    } catch (error) {
      console.error(`✗ Failed to update ${slug}:`, error.message);
    }
  }

  await prisma.$disconnect();
  console.log('\nUpdated 25 artworks');
}

main();
