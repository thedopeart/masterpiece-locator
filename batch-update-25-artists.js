const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'paul-signac',
    faqs: [
      { question: "What art movement was Paul Signac part of?", answer: "Signac co-founded <a href=\"/apps/masterpieces/movement/neo-impressionism\"><strong>Neo-Impressionism</strong></a> alongside <a href=\"/apps/masterpieces/artist/georges-seurat\"><strong>Georges Seurat</strong></a> in the 1880s. After Seurat's early death in 1891, Signac became the movement's leader and chief theorist, writing the influential treatise \"From Eugène Delacroix to Neo-Impressionism\" (1899) to explain Pointillist technique and color theory." },
      { question: "Where can I see Signac's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris holds major works, while the Metropolitan Museum of Art in New York and the Pushkin Museum in Moscow also display significant pieces. His Mediterranean harbor scenes and seascapes are particularly well represented in French collections." },
      { question: "What is Pointillism?", answer: "<strong>Pointillism</strong> applies small dots of pure color that blend optically when viewed from a distance, a technique called \"optical mixture.\" Signac and Seurat developed this scientifically-grounded approach to achieve more luminous color effects than traditional paint mixing could produce." },
      { question: "What subjects did Signac paint?", answer: "A passionate sailor, Signac painted Mediterranean <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>harbors and seascapes</strong></a>, particularly around Saint-Tropez where he bought a house in 1892. His vibrant views of ports and rivers showcase his mastery of capturing light on water." },
      { question: "What book did Signac write?", answer: "Signac wrote <strong>From Eugène Delacroix to Neo-Impressionism</strong> (1899), the definitive text explaining Pointillism's scientific color principles. This theoretical treatise traced the movement's roots and influenced younger artists including Henri Matisse, who visited Signac in Saint-Tropez in 1904." }
    ]
  },
  {
    slug: 'otto-mueller',
    faqs: [
      { question: "What art movement was Otto Mueller part of?", answer: "Mueller joined <strong>Die Brücke</strong> in 1910, a pioneering German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> group based in Dresden. He worked alongside Ernst Ludwig Kirchner, Max Pechstein, and Erich Heckel until the group dissolved in 1913, though his style remained more lyrical and less harsh than his colleagues." },
      { question: "What subjects did Mueller paint?", answer: "Mueller was nicknamed \"Gypsy Mueller\" for his fascination with <strong>Romani women and nudes in natural settings</strong>. His mother was possibly Romani, and he made multiple trips to Hungary, Romania, and Bulgaria to document their communities without romanticizing their often harsh living conditions." },
      { question: "Where can I see Mueller's paintings?", answer: "Major works are at the <strong>Brücke Museum</strong> in Berlin, dedicated to the group's art. The <a href=\"/apps/masterpieces/museum/thyssen-bornemisza\"><strong>Museo Thyssen-Bornemisza</strong></a> and <a href=\"/apps/masterpieces/museum/neue-galerie\"><strong>Neue Galerie</strong></a> also hold significant pieces from his brief but productive career." },
      { question: "What happened to Mueller's work under the Nazis?", answer: "The Nazis seized <strong>357 of Mueller's works</strong> from German museums in 1937, labeling them \"degenerate art.\" Mueller had already died in 1930, but this cultural purge destroyed or scattered much of his artistic legacy across confiscated collections." },
      { question: "What was distinctive about Mueller's technique?", answer: "Mueller used <strong>pale, earthy tones</strong> and distemper paint on coarse canvas, creating a matte surface with an almost primal quality. This deliberate roughness gave his <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female nudes</strong></a> an intimacy and vulnerability that set him apart from other Expressionists." }
    ]
  },
  {
    slug: 'giorgione',
    faqs: [
      { question: "What art movement was Giorgione part of?", answer: "Giorgione helped found the Venetian school during the High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, alongside his younger contemporary <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>. His poetic, atmospheric approach to color and mood distinguished Venetian painting from the line-focused Florentine tradition and influenced generations of artists." },
      { question: "Where can I see The Tempest?", answer: "<strong>The Tempest</strong> (c. 1505) hangs at the <a href=\"/apps/masterpieces/museum/gallerie-dellaccademia\"><strong>Gallerie dell'Accademia</strong></a> in Venice, where it has been since the early 19th century. The painting's mysterious subject matter and innovative landscape treatment make it one of the most discussed works in art history." },
      { question: "What is the Sleeping Venus?", answer: "<strong>Sleeping Venus</strong> (c. 1508-10) established the <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>reclining female nude</strong></a> as a major artistic genre. Now at the Gemäldegalerie Alte Meister in Dresden, it was left unfinished at Giorgione's death and completed by Titian, who later created his own famous variation, Venus of Urbino." },
      { question: "Why are so few paintings attributed to Giorgione?", answer: "Giorgione died of plague around age 33 in 1510, leaving few completed works. Many paintings were finished by pupils, especially <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, making attribution extremely difficult. Only about six paintings are firmly attributed to him today, though his influence was enormous." },
      { question: "How did Giorgione influence later art?", answer: "Giorgione's atmospheric <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> and poetic mood essentially reinvented landscape painting as a genre. His innovative use of sfumato and color influenced Sebastiano del Piombo, Titian, and generations of Venetian painters who followed his example." }
    ]
  },
  {
    slug: 'annibale-carracci',
    faqs: [
      { question: "What art movement did Annibale Carracci help create?", answer: "Annibale was one of the founders of the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> movement in the 1580s-90s. Working with his brother Agostino and cousin Lodovico, he rejected Mannerist artificiality and returned to the classical ideals of <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a> while adding dynamic energy and naturalistic observation." },
      { question: "Where can I see Annibale Carracci's masterpiece?", answer: "His greatest work, the ceiling frescoes of the <strong>Galleria Farnese</strong>, remains at the <a href=\"/apps/masterpieces/museum/palazzo-farnese\"><strong>Palazzo Farnese</strong></a> in Rome, depicting mythological love stories from Ovid. This cycle was considered the supreme fresco achievement for two centuries and deeply influenced Rubens and Bernini." },
      { question: "What was the Accademia degli Incamminati?", answer: "An influential art school founded by the <strong>Carracci family</strong> in Bologna around 1582, it emphasized life drawing and studying masters like Raphael and Correggio. This \"Academy of the Progressives\" became the model for later European art academies and helped reform painting after Mannerism." },
      { question: "Who influenced Annibale Carracci?", answer: "He drew from <strong>Raphael's classical ideals</strong>, Venetian colorists like <a href=\"/apps/masterpieces/artist/titian\"><strong>Titian</strong></a>, and Correggio's soft modeling. This synthesis of northern and central Italian traditions created a new Baroque style that balanced naturalism with idealized beauty." },
      { question: "What innovations did Annibale Carracci introduce?", answer: "He pioneered the <strong>ideal landscape genre</strong> and is credited with inventing artistic caricature as a recognized form. His <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a> influenced Claude Lorrain and Nicolas Poussin, while his naturalistic approach transformed religious and mythological painting." }
    ]
  },
  {
    slug: 'jean-leon-gerome',
    faqs: [
      { question: "What art movements was Gérôme part of?", answer: "Gérôme was a leading figure of <a href=\"/apps/masterpieces/movement/academic-art\"><strong>Academic Art</strong></a> and <strong>Orientalism</strong> in 19th-century France. His technically polished historical and Middle Eastern scenes made him arguably the world's most famous living artist by 1880, though his staunch academicism put him at odds with emerging movements." },
      { question: "Where can I see Gérôme's paintings?", answer: "Works hang at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris and the <a href=\"/apps/masterpieces/museum/walters-art-museum\"><strong>Walters Art Museum</strong></a> in Baltimore. His painting \"The Snake Charmer\" famously appeared on the cover of Edward Said's influential 1978 book \"Orientalism,\" sparking modern debate about his legacy." },
      { question: "Who were Gérôme's famous students?", answer: "As professor at the École des Beaux-Arts, he taught influential artists including <strong>Thomas Eakins, Mary Cassatt</strong>, and Ottoman painter Osman Hamdi Bey. His rigorous classical training shaped a generation of artists on both sides of the Atlantic despite his resistance to newer movements." },
      { question: "What was Gérôme's view of Impressionism?", answer: "He was <strong>exceedingly hostile</strong> to <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a>, urging the French government in 1893 to refuse a bequest of 65 Impressionist works. He viewed their loose brushwork and everyday subjects as an assault on the academic tradition he championed." },
      { question: "Did Gérôme create sculpture?", answer: "In his final 25 years, he produced significant <strong>polychrome sculpture</strong>, including bronze gladiators and classical figures with tinted surfaces. His sculptural work, often featuring painted details, represented a controversial revival of ancient polychromy techniques." }
    ]
  },
  {
    slug: 'theodore-gericault',
    faqs: [
      { question: "What art movement was Théodore Géricault part of?", answer: "Géricault was a pioneering figure in French <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, emphasizing emotional intensity and contemporary subjects over classical ideals. Despite dying at just 32, he helped establish the movement's emphasis on drama, individual expression, and engagement with current events." },
      { question: "Where can I see The Raft of the Medusa?", answer: "<strong>The Raft of the Medusa</strong> (1818-19) hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, measuring an enormous 16 by 23 feet. Géricault later toured it to England in 1820, where it achieved the popular success French critics had initially denied it." },
      { question: "What was The Raft of the Medusa about?", answer: "The painting depicts survivors of the 1816 shipwreck of the French frigate <strong>Medusa</strong>, where government incompetence left 150 people adrift on a raft. Only 15 survived 13 days of starvation, dehydration, and cannibalism, making it a political scandal that Géricault transformed into <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>monumental art</strong></a>." },
      { question: "How did Géricault research his masterpiece?", answer: "Géricault interviewed survivors, studied corpses and severed limbs at morgues, built a scale model of the raft, and had friends pose, including the young <a href=\"/apps/masterpieces/artist/eugene-delacroix\"><strong>Eugène Delacroix</strong></a>. This forensic research gave the painting its harrowing, unflinching realism." },
      { question: "What other subjects did Géricault paint?", answer: "Géricault painted horses, military subjects, and <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>psychological portraits</strong></a> of asylum patients. His equestrian works and studies of the mentally ill demonstrated his fascination with both physical power and human vulnerability." }
    ]
  },
  {
    slug: 'gilbert-stuart',
    faqs: [
      { question: "What is Gilbert Stuart's most famous painting?", answer: "The <strong>\"Athenaeum\" portrait of George Washington</strong> (1796) appears on the U.S. one-dollar bill and is among history's most reproduced images. Stuart deliberately left it unfinished so he could make profitable copies, ultimately producing over 100 versions of his Washington <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a>." },
      { question: "Where can I see Gilbert Stuart's paintings?", answer: "Major collections are at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>. His presidential portraits remain essential visual records of America's founding era." },
      { question: "How many presidents did Gilbert Stuart paint?", answer: "Stuart painted the <strong>first six U.S. presidents</strong>: Washington, Adams, Jefferson, Madison, Monroe, and John Quincy Adams. His ability to capture both likeness and character made him the definitive portraitist of the early Republic's leaders." },
      { question: "Why did Gilbert Stuart leave his Washington portrait unfinished?", answer: "Stuart <strong>deliberately left the Athenaeum portrait unfinished</strong> so he could keep making copies. This shrewd business decision let him profit from the enormous demand for Washington images, producing replicas throughout his career while retaining the original." },
      { question: "What was unique about Gilbert Stuart's painting technique?", answer: "Stuart painted <strong>without preliminary drawing</strong>, working directly with color from the start. He studied under Benjamin West in London and absorbed techniques from Gainsborough and Reynolds, developing a luminous color sense and psychological penetration that made him America's preeminent portraitist." }
    ]
  },
  {
    slug: 'jan-toorop',
    faqs: [
      { question: "What art movements was Jan Toorop associated with?", answer: "Toorop worked in <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, Art Nouveau, and Pointillism at different career stages. He joined Les XX in Brussels and later experimented with Neo-Impressionist technique before converting to Catholicism in 1905 and focusing on religious imagery." },
      { question: "Where can I see Jan Toorop's paintings?", answer: "Major works are at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam and the <strong>Kröller-Müller Museum</strong> in Otterlo, which holds his masterpiece \"The Three Brides.\" Dutch collections preserve his diverse output across multiple artistic movements." },
      { question: "What makes Jan Toorop's style distinctive?", answer: "His work combines <strong>Javanese influences</strong> from his Indonesian birthplace, including shadow puppet motifs and wayang patterns, with European Symbolist themes. These flowing, decorative lines and exotic elements create a uniquely hybrid style unlike any other European artist of his era." },
      { question: "Where was Jan Toorop born?", answer: "Toorop was born in <strong>Purworejo, Java</strong> (present-day Indonesia), then the Dutch East Indies, in 1858. He lived on the island of Bangka until age nine before moving to the Netherlands, and his Southeast Asian heritage profoundly shaped his <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>artistic vision</strong></a>." },
      { question: "What is Jan Toorop's most famous painting?", answer: "<strong>The Three Brides</strong> (1893), held at the Kröller-Müller Museum, epitomizes his Symbolist style with three female figures representing spiritual, earthly, and satanic love. The work's sinuous lines and <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>mysterious female imagery</strong></a> made it an icon of European Symbolism." }
    ]
  },
  {
    slug: 'gustave-moreau',
    faqs: [
      { question: "What art movement was Moreau part of?", answer: "Moreau was a major figure in French <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>, emphasizing imagination, myth, and the inner life over realism. His visionary paintings of biblical and mythological subjects, populated with ambiguous symbols, anticipated the movement's full flowering in the 1890s." },
      { question: "Where can I see Moreau's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/musee-gustave-moreau\"><strong>Musée Gustave Moreau</strong></a> in Paris, housed in his former home and studio, displays over 8,000 works he bequeathed to France. This remarkable collection preserves his complete artistic vision, from finished masterpieces to working sketches." },
      { question: "What subjects did Moreau paint?", answer: "Moreau painted <strong>mythological and biblical subjects</strong> including Salome, Oedipus, and Orpheus with <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>richly detailed, jewel-like surfaces</strong></a>. His obsessive exploration of Salome alone produced over one hundred sketches, drawings, and paintings throughout his career." },
      { question: "Who were Moreau's famous students?", answer: "As professor at the École des Beaux-Arts, Moreau mentored <strong>Henri Matisse</strong> and <strong>Georges Rouault</strong>, who would later lead the Fauve movement. His encouragement of personal expression over strict technique helped liberate a generation of modernist painters from academic constraints." },
      { question: "What is Moreau's most famous painting?", answer: "<strong>Oedipus and the Sphinx</strong> (1864) and multiple versions of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>Salome</strong></a> and \"The Apparition\" are his most celebrated works. These paintings of dangerous, mysterious women established him as the master of Symbolist femmes fatales." }
    ]
  },
  {
    slug: 'pierre-puvis-de-chavannes',
    faqs: [
      { question: "What art movement was Puvis de Chavannes part of?", answer: "Puvis was associated with <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> and became France's leading mural painter in the later 19th century. His simplified forms and dreamlike atmosphere influenced both Symbolists and early modernists, earning him the title \"the painter for France.\"" },
      { question: "Where can I see Puvis de Chavannes's murals?", answer: "His murals decorate the <strong>Panthéon, Sorbonne</strong>, and Hôtel de Ville in Paris, plus the Boston Public Library in the United States. These monumental works, painted on canvas then affixed to walls, use pale colors to imitate fresco while remaining accessible to conservation." },
      { question: "Who admired Puvis de Chavannes?", answer: "A remarkably diverse group: <strong>Seurat, Gauguin, Van Gogh, Matisse</strong>, and <a href=\"/apps/masterpieces/artist/pablo-picasso\"><strong>Picasso</strong></a> all recognized his importance. His flattened forms and muted palette anticipated modernist developments while his allegorical subjects appealed to Symbolist sensibilities." },
      { question: "What is distinctive about Puvis's style?", answer: "His style featured <strong>simplified forms, rhythmic line</strong>, and pale flat coloring reminiscent of Italian frescoes. These serene, timeless compositions of idealized figures in <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>classical landscapes</strong></a> influenced Post-Impressionists seeking alternatives to naturalistic representation." },
      { question: "Where can I see his easel paintings?", answer: "Works hang at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, the Metropolitan Museum of Art in New York, and the Art Institute of Chicago. Though best known for murals, his easel paintings demonstrate the same distinctive pale harmony." }
    ]
  },
  {
    slug: 'peder-severin-kroyer',
    faqs: [
      { question: "What art movement was P. S. Krøyer part of?", answer: "Krøyer was a Danish <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and unofficial leader of the Skagen Painters, artists who gathered each summer in the northern Danish fishing village. He studied under Léon Bonnat in Paris and absorbed techniques from Monet, Renoir, and Manet before adapting them to Scandinavian subjects." },
      { question: "What are Krøyer's most famous paintings?", answer: "\"<strong>Summer Evening on Skagen's Southern Beach</strong>\" (1893) and his \"<strong>blue hour</strong>\" paintings capturing twilight on the shore are his most beloved works. These <a href=\"https://luxurywallart.com/collections/beach-artwork\" target=\"_blank\" rel=\"noopener\"><strong>beach scenes</strong></a> showing his wife Marie and fellow artist Anna Ancher became icons of Danish art." },
      { question: "Where can I see Krøyer's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/skagens-museum\"><strong>Skagens Museum</strong></a> in Denmark holds the largest collection of his work alongside other Skagen painters. The Hirschsprung Collection in Copenhagen, whose founder supported Krøyer from early in his career, also displays major pieces." },
      { question: "Who influenced Krøyer's style?", answer: "He studied in Paris under <strong>Léon Bonnat</strong> and absorbed Impressionist techniques from <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>, Degas, and Renoir. His mastery of light effects, especially during twilight, combined French influence with distinctly Nordic atmospheric conditions." },
      { question: "Did Krøyer have vision problems?", answer: "Yes, his <strong>eyesight gradually failed</strong> during his last decade, but he continued painting almost to the end in 1909. He also suffered bouts of mental illness requiring hospitalization, yet produced some of his finest work while battling these challenges." }
    ]
  },
  {
    slug: 'sebastiano-del-piombo',
    faqs: [
      { question: "What art movement was Sebastiano del Piombo part of?", answer: "Sebastiano was a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a> painter who uniquely combined Venetian coloring with Roman monumental form. Trained under Giorgione in Venice, he moved to Rome in 1511 and became the only major artist of his era to successfully fuse both schools." },
      { question: "What does 'del Piombo' mean?", answer: "The nickname \"<strong>del Piombo</strong>\" (of the Lead) came from his 1531 appointment as Keeper of the Papal Seal (piombatore). This lucrative sinecure from Pope Clement VII provided financial security but, according to Vasari, led Sebastiano to paint less in his later years." },
      { question: "Where can I see Sebastiano del Piombo's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, the <a href=\"/apps/masterpieces/museum/museo-del-prado\"><strong>Prado</strong></a> in Madrid, and the Hermitage. His <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> were particularly sought after, with Vasari calling his naturalistic likenesses unparalleled." },
      { question: "Who was Sebastiano del Piombo's collaborator?", answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> provided drawings and cartoons for Sebastiano's paintings from about 1515. This partnership aimed to challenge <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>'s dominance in Rome by combining Michelangelo's designs with Sebastiano's Venetian coloring skills." },
      { question: "Did Sebastiano compete with Raphael?", answer: "Yes, \"<strong>The Raising of Lazarus</strong>\" (1519) was created in direct competition with Raphael's \"Transfiguration,\" both commissioned for the same French cathedral. Michelangelo supplied drawings to help Sebastiano outshine their rival, creating one of Renaissance art's most famous artistic competitions." }
    ]
  },
  {
    slug: 'egon-schiele',
    faqs: [
      { question: "What art movement was Egon Schiele part of?", answer: "Schiele was a leading Austrian <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> whose raw, contorted figures and unflinching self-examination defined Viennese modernism alongside <a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> and Oskar Kokoschka. His intense psychological exploration and angular distortions influenced generations of figurative artists." },
      { question: "Where can I see Schiele's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/leopold-museum\"><strong>Leopold Museum</strong></a> in Vienna holds the world's largest Schiele collection with over 200 works. The Albertina Museum, also in Vienna, displays significant drawings, while major pieces appear in the Museum of Modern Art in New York." },
      { question: "Who mentored Egon Schiele?", answer: "<a href=\"/apps/masterpieces/artist/gustav-klimt\"><strong>Gustav Klimt</strong></a> mentored Schiele from 1907, buying his drawings, arranging models, and introducing him to patrons. The two maintained a close friendship until Klimt's death from Spanish flu in February 1918, which devastated the younger artist." },
      { question: "What subjects did Schiele paint?", answer: "Schiele painted intense <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>self-portraits</strong></a>, nudes, and expressive landscapes of the Austrian countryside. His unflinching depictions of the human body, often in contorted poses with raw sexuality, shocked contemporary viewers but established his enduring reputation." },
      { question: "How did Schiele die?", answer: "Schiele died on October 31, 1918, during the <strong>Spanish flu</strong> pandemic, just three days after his pregnant wife Edith succumbed to the same illness. He was only 28, having produced an extraordinary body of work in his brief career." }
    ]
  },
  {
    slug: 'fitz-henry-lane',
    faqs: [
      { question: "What art movement was Fitz Henry Lane part of?", answer: "Lane was a founding figure of <a href=\"/apps/masterpieces/movement/luminism\"><strong>Luminism</strong></a>, an American movement characterized by calm water, glowing light, and serene atmosphere. His quiet harbor scenes and attention to atmospheric effects distinguished him from the more dramatic Hudson River School painters." },
      { question: "Where can I see Fitz Henry Lane's paintings?", answer: "His work is at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts, Boston</strong></a>, the Cape Ann Museum in Gloucester, and the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a>. The White House also displays his work, reflecting his status as America's premier marine painter of his era." },
      { question: "What subjects did Fitz Henry Lane paint?", answer: "Lane specialized in <strong>harbor scenes and <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\">coastal views</a></strong>, particularly capturing the transitional light of dawn and dusk around Gloucester, Massachusetts. His serene depictions of ships and shorelines elevated American marine painting to fine art status." },
      { question: "Did Fitz Henry Lane have a disability?", answer: "Yes, childhood polio <strong>paralyzed his legs</strong> when he was about two years old. Despite this limitation, Lane became America's leading marine painter, designing his own house and studio in Gloucester and producing paintings now displayed in 27 museums." },
      { question: "Was Fitz Henry Lane a transcendentalist?", answer: "Recent research confirms he was a <strong>transcendentalist and spiritualist</strong>. His serene paintings reflect this philosophy, using pervasive light and calm atmosphere to suggest divine presence in nature, aligning with the spiritual ideas of Emerson and Thoreau." }
    ]
  },
  {
    slug: 'sassetta',
    faqs: [
      { question: "What art movement was Sassetta part of?", answer: "Sassetta bridged the <strong>Gothic and <a href=\"/apps/masterpieces/movement/renaissance\">Renaissance</a></strong> traditions in 15th-century Siena. While maintaining Sienese Gothic elegance with gold backgrounds and refined line, he incorporated Florentine innovations like perspective and naturalistic detail, creating a distinctive transitional style." },
      { question: "Where can I see Sassetta's paintings?", answer: "His work is at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London, and the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a>. Because his great altarpiece was dismantled, panels are now scattered across twelve museums in Europe and America." },
      { question: "What was Sassetta's most important work?", answer: "The <strong>San Francesco altarpiece</strong> (1437-44) for Borgo San Sepolcro was his masterwork. Originally nearly six yards tall and double-sided with a gilt frame, it was the most expensive commission of the early <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>Italian Renaissance</strong></a>, costing 510 florins." },
      { question: "Why is Sassetta's altarpiece in multiple museums?", answer: "The San Francesco altarpiece was <strong>disassembled after the church's dissolution</strong> in the 19th century. Collectors dispersed its panels, which now reside in institutions from London to Budapest, making complete viewing of this once-magnificent work impossible today." },
      { question: "How did Sassetta die?", answer: "He died in 1450 from <strong>pneumonia caught while painting a fresco</strong> on Siena's Porta Romana. His pupil Sano di Pietro completed the work, marking the end of Siena's most original early Renaissance painter." },
      { question: "What made Sassetta's style distinctive?", answer: "He combined <strong>Sienese Gothic elegance</strong>, including gold backgrounds and flowing lines, with <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> spatial awareness. This fusion created lyrical religious narratives that honored tradition while embracing innovation, making him Siena's greatest painter of his generation." }
    ]
  },
  {
    slug: 'akseli-gallen-kallela',
    faqs: [
      { question: "What art movement was Akseli Gallen-Kallela part of?", answer: "Gallen-Kallela was associated with <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a> and Finnish National Romanticism, a movement expressing Finland's cultural identity during Russian rule. He moved fluidly between Realism, Symbolism, and Expressionism throughout his career while consistently promoting Finnish national themes." },
      { question: "Where can I see Gallen-Kallela's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/ateneum\"><strong>Ateneum</strong></a> in Helsinki displays major works, while the Gallen-Kallela Museum preserves his studio and home. His Paris Exposition frescoes secured his position as Finland's most important artist and remain essential to Finnish cultural identity." },
      { question: "What is the Kalevala?", answer: "The <strong>Kalevala</strong> is Finland's national epic, compiled from folk poetry in the 1830s. Gallen-Kallela spent decades illustrating its heroes and myths, planning a never-completed 700-page \"Great Kalevala\" that would have been his definitive statement on Finnish <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>mythology and nature</strong></a>." },
      { question: "What are Gallen-Kallela's most famous paintings?", answer: "<strong>The Defense of the Sampo</strong>, <strong>Lemminkäinen's Mother</strong>, and the <strong>Aino Triptych</strong> (1891) depicting scenes from the Kalevala are his most celebrated works. These monumental paintings, created between 1896-1899, defined how Finns visualize their national epic." },
      { question: "Did Gallen-Kallela only create paintings?", answer: "No, he also designed furniture, textiles, frescoes, and even Finnish army uniforms after independence in 1918. When General Mannerheim learned Gallen-Kallela and his son had fought in the Civil War, he commissioned the artist to design flags and official decorations for the new nation." }
    ]
  },
  {
    slug: 'luis-melendez',
    faqs: [
      { question: "What art movement was Luis Meléndez part of?", answer: "Meléndez worked during the late <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> period in 18th-century Spain, reviving and updating the bodegón (pantry) still life tradition established by masters like Zurbarán and Sánchez Cotán. He brought unprecedented naturalism and close observation to Spanish <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\"><strong>still life painting</strong></a>." },
      { question: "Where can I see Luis Meléndez paintings?", answer: "The <a href=\"/apps/masterpieces/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> holds 39 paintings, the world's largest collection. The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London and the Museum of Fine Arts, Boston also display significant works, though his art rarely appears outside major institutions." },
      { question: "What subjects did Luis Meléndez paint?", answer: "Meléndez specialized in <strong>bodegón still life</strong> paintings depicting Spanish foods: oranges, melons, bread, fish, and kitchen vessels. His extraordinary skill capturing the textures of ceramic, glass, cork, metal, and fruit surfaces distinguishes his work from all other European still life painters." },
      { question: "Why did Luis Meléndez paint still lifes?", answer: "After failing to secure royal patronage as a court painter following his father's scandalous expulsion from the Academy, Meléndez turned to <strong>still life</strong> as a commercially viable genre. He created at least 44 works for the Prince of Asturias's natural history cabinet between 1759-1772." },
      { question: "Did Luis Meléndez receive recognition in his lifetime?", answer: "Despite completing a major royal commission, Meléndez was never appointed court painter. He died in <strong>poverty in 1780</strong>, declaring he owned only his brushes. Modern scholars now recognize him as the greatest Spanish still life painter of his century." }
    ]
  },
  {
    slug: 'jasper-francis-cropsey',
    faqs: [
      { question: "What art movement was Jasper Francis Cropsey part of?", answer: "Cropsey was a second-generation <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a> painter known for vivid autumn <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. He believed nature directly manifested God and saw American wilderness as spiritually superior to European scenery, a patriotic conviction that shaped his brilliant fall foliage scenes." },
      { question: "Why was Jasper Cropsey called 'America's painter of autumn'?", answer: "Cropsey earned this title for his vibrant <strong>autumn landscapes</strong> featuring unprecedented orange, red, and gold foliage. When exhibiting in London, he reportedly had real American leaves sent over to prove his colors were accurate, as skeptical British viewers couldn't believe such brilliance existed." },
      { question: "Where can I see Jasper Francis Cropsey paintings?", answer: "Works hang at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, and his preserved home Ever Rest in Hastings-on-Hudson. His \"Autumn on the Hudson River\" was even shown to Queen Victoria in 1861." },
      { question: "Was Jasper Cropsey also an architect?", answer: "Yes, Cropsey trained as an architect and later designed New York's elevated railway stations. He built his own Gothic Revival mansion \"Aladdin\" in Warwick, New York, though financial difficulties forced the family to leave when Impressionism overshadowed his style." },
      { question: "When did Jasper Cropsey live in Europe?", answer: "Cropsey spent 1847-1849 in Rome, staying in <a href=\"/apps/masterpieces/artist/thomas-cole\"><strong>Thomas Cole</strong></a>'s former studio. From 1857 to 1863, he lived in London, where his American autumn paintings achieved enormous popularity and brought international attention to Hudson River School landscape painting." }
    ]
  },
  {
    slug: 'alonso-cano',
    faqs: [
      { question: "What art movement was Alonso Cano part of?", answer: "Cano was a leading figure of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> who excelled in painting, sculpture, and architecture, earning the nickname \"the Spanish Michelangelo\" for his versatility. His religious works balance dramatic Baroque energy with serene, idealized beauty." },
      { question: "Where can I see Alonso Cano's work?", answer: "Paintings hang at the <a href=\"/apps/masterpieces/museum/museo-del-prado\"><strong>Museo del Prado</strong></a> in Madrid, while his finest sculptures and architectural work are in Granada, where he spent his final years. Granada Cathedral preserves both his polychrome statues and his revolutionary facade design." },
      { question: "Why was Cano called 'the Spanish Michelangelo'?", answer: "Like Michelangelo, he excelled in <strong>painting, sculpture, and architecture</strong>, demonstrating mastery across all three visual arts. His <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious sculptures</strong></a>, paintings, and the Granada Cathedral facade represent peak achievement in each medium during Spanish Baroque." },
      { question: "Who was Cano's fellow student?", answer: "<a href=\"/apps/masterpieces/artist/diego-velazquez\"><strong>Diego Velázquez</strong></a> was his fellow student under Francisco Pacheco in Seville during the 1610s. The two remained lifelong friends, with Cano eventually joining Velázquez at the royal court in Madrid as a court painter." },
      { question: "What is Cano's architectural masterpiece?", answer: "The <strong>west façade of Granada Cathedral</strong> (1667), consisting of three huge arches without supporting columns, is considered one of Spanish architecture's most original works. This boldly innovative design, completed shortly before his death, demonstrates his unique creative vision." }
    ]
  },
  {
    slug: 'el-lissitzky',
    faqs: [
      { question: "What art movement was El Lissitzky part of?", answer: "El Lissitzky was a key figure in <a href=\"/apps/masterpieces/movement/suprematism\"><strong>Suprematism</strong></a> and <a href=\"/apps/masterpieces/movement/constructivism\"><strong>Constructivism</strong></a>, serving as a bridge between Russian avant-garde movements and Western European modernism. He worked with <a href=\"/apps/masterpieces/artist/kazimir-malevich\"><strong>Kazimir Malevich</strong></a> at Vitebsk before developing his own distinctive approach to geometric abstraction." },
      { question: "What are El Lissitzky's Proun works?", answer: "The <strong>Proun series</strong> (from 1919) consisted of <a href=\"https://luxurywallart.com/collections/abstract-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>abstract geometric compositions</strong></a> Lissitzky called \"the station where one changes from painting to architecture.\" These works have no fixed orientation, meant to be viewed from any angle, bridging two-dimensional art and three-dimensional space." },
      { question: "Where can I see El Lissitzky's work?", answer: "Major collections exist at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York, the Tate Gallery in London, and the Van Abbemuseum in Eindhoven. His graphic designs, exhibition installations, and paintings influenced generations of artists and designers worldwide." },
      { question: "What influenced El Lissitzky's style?", answer: "<strong>Kazimir Malevich</strong> had the greatest impact on Lissitzky after they met at Vitebsk in 1919. Malevich's Suprematist principles of pure geometric form merged with Lissitzky's architectural training to create his unique vision of art as a tool for social transformation." },
      { question: "What is El Lissitzky's most famous poster?", answer: "\"<strong>Beat the Whites with the Red Wedge</strong>\" (1919) became an icon of revolutionary graphic design. This powerful propaganda poster uses a <a href=\"https://luxurywallart.com/collections/red-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>red triangle</strong></a> piercing a white circle to represent Bolshevik forces defeating counter-revolutionaries with stunning visual economy." }
    ]
  },
  {
    slug: 'amedeo-modigliani',
    faqs: [
      { question: "What art movement was Modigliani part of?", answer: "Modigliani is associated with <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> though his style was uniquely personal, combining influences from African sculpture, Italian Renaissance painting, and <a href=\"/apps/masterpieces/artist/paul-cezanne\"><strong>Cézanne</strong></a>. He worked in Montparnasse alongside Cubists and Fauves but remained independent of any single movement." },
      { question: "Where can I see Modigliani's paintings?", answer: "Works hang at <a href=\"/apps/masterpieces/museum/museum-of-modern-art\"><strong>MoMA</strong></a>, <a href=\"/apps/masterpieces/museum/tate-modern\"><strong>Tate Modern</strong></a>, and <a href=\"/apps/masterpieces/museum/musee-de-lorangerie\"><strong>Musée de l'Orangerie</strong></a> in Paris. His paintings regularly achieve record auction prices, with some nudes selling for over $150 million in recent years." },
      { question: "What is distinctive about Modigliani's style?", answer: "Modigliani's <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> feature elongated necks, almond-shaped eyes, and mask-like faces that create haunting psychological presence. A 1917 exhibition of his sensuous nudes was shut down by Paris police on opening day for indecency." },
      { question: "Did Modigliani create sculpture?", answer: "Yes, Modigliani studied sculpture under <a href=\"/apps/masterpieces/artist/constantin-brancusi\"><strong>Brancusi</strong></a> and created carved stone heads influenced by African art from about 1909-1914. Health issues from stone dust and lack of funds forced him to return to painting, where he achieved his greatest recognition." },
      { question: "How did Modigliani die?", answer: "Modigliani died of tubercular meningitis on January 24, 1920, at age 35 in Paris. His pregnant partner Jeanne Hébuterne committed suicide the following day, leaving their three-year-old daughter Jeanne orphaned. His tragic end cemented his legend as a doomed bohemian artist." }
    ]
  },
  {
    slug: 'giovanni-battista-moroni',
    faqs: [
      { question: "What art movement was Moroni part of?", answer: "Moroni was a <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painter working in Northern Italy whose remarkably direct <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> anticipated later naturalistic developments. Art historian Roberto Longhi suggested his realistic approach prefigured <a href=\"/apps/masterpieces/artist/caravaggio\"><strong>Caravaggio</strong></a>'s revolutionary naturalism by several decades." },
      { question: "Where can I see Moroni's paintings?", answer: "The <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London holds <strong>The Tailor</strong> and several other major works. The <a href=\"/apps/masterpieces/museum/accademia-carrara\"><strong>Accademia Carrara</strong></a> in his native Bergamo preserves the largest collection of his psychologically penetrating portraits." },
      { question: "What is The Tailor?", answer: "<strong>The Tailor</strong> (1565-70) shows a craftsman pausing with scissors and cloth, meeting the viewer's gaze directly. It's one of the first full-length portraits of a working person in Western art, revolutionary for depicting a tradesman with the dignity usually reserved for aristocrats." },
      { question: "What subjects did Moroni paint?", answer: "Moroni painted <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of the Bergamasque bourgeoisie, aristocrats, and professionals against plain backgrounds. He also created religious works, though his remarkably naturalistic and psychologically acute portraits secured his lasting reputation." },
      { question: "How did Moroni influence later art?", answer: "Moroni's direct approach to portraiture, capturing sitters' inner life with unusual immediacy, influenced later Bergamasque painters and anticipated Caravaggio's naturalism. Around 150 of his portraits survive in good condition, testimony to his prolific output and lasting appeal." }
    ]
  },
  {
    slug: 'domenico-ghirlandaio',
    faqs: [
      { question: "What was Domenico Ghirlandaio best known for?", answer: "Ghirlandaio was renowned for his <strong>detailed narrative frescoes</strong> that incorporated portraits of prominent Florentine citizens in contemporary settings. His cycles at Santa Maria Novella and Santa Trinita preserve invaluable records of 15th-century Tuscan life, fashion, and personalities." },
      { question: "Where can I see Domenico Ghirlandaio's frescoes?", answer: "His greatest frescoes are in <strong>Santa Maria Novella</strong> in Florence, depicting the lives of the Virgin and John the Baptist. He also painted in the <a href=\"/apps/masterpieces/museum/sistine-chapel\"><strong>Sistine Chapel</strong></a> and at Santa Trinita, all preserving his gift for vivid <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>religious narratives</strong></a>." },
      { question: "Was Michelangelo a student of Ghirlandaio?", answer: "Yes, <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> apprenticed in Ghirlandaio's workshop at age thirteen in 1487. Though Michelangelo later claimed to be self-taught, his early work shows Ghirlandaio's influence, particularly in cross-hatching technique and fresco skills." },
      { question: "What art movement was Domenico Ghirlandaio part of?", answer: "Ghirlandaio was an Early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> Florentine painter of the \"third generation,\" working alongside Botticelli, Verrocchio, and the Pollaiolo brothers. His detailed naturalism and ability to populate religious scenes with contemporary portraits distinguished his workshop." },
      { question: "Why was he called Ghirlandaio?", answer: "The nickname means <strong>\"garland-maker\"</strong> and came from his father, who was famous for creating fashionable garlands worn by Florentine women. Domenico's given surname was Bigordi, but the nickname stuck and became more famous than the family name." }
    ]
  },
  {
    slug: 'leonardo-da-vinci',
    faqs: [
      { question: "What art movement was Leonardo da Vinci part of?", answer: "Leonardo was a central figure of the High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>, alongside <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> and <a href=\"/apps/masterpieces/artist/raphael\"><strong>Raphael</strong></a>. He pioneered sfumato technique and psychological depth in portraiture, while his scientific investigations and artistic innovations made him the archetypal \"Renaissance man.\"" },
      { question: "Where can I see the Mona Lisa?", answer: "The <strong>Mona Lisa</strong> hangs at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, attracting millions of visitors annually behind bulletproof glass. It has been there since the French Revolution and briefly became even more famous after being stolen in 1911 and recovered two years later." },
      { question: "Where is The Last Supper?", answer: "<strong>The Last Supper</strong> remains at its original location in the refectory of Santa Maria delle Grazie in Milan, where Leonardo painted it on the wall between 1495-1498. Advance reservations are essential due to strict visitor limits protecting the fragile mural." },
      { question: "What is sfumato?", answer: "<strong>Sfumato</strong> is Leonardo's technique of soft, hazy transitions between tones without visible brushstrokes, creating an atmospheric \"smoky\" effect. The <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>Mona Lisa</strong></a> exemplifies this innovation, with its mysterious smile emerging from subtle tonal gradations." },
      { question: "What other fields did Leonardo work in?", answer: "Leonardo studied anatomy, engineering, architecture, geology, and natural science with equal intensity. His notebooks contain designs for flying machines, tanks, solar power, and anatomical studies centuries ahead of their time, embodying the Renaissance ideal of universal knowledge." }
    ]
  },
  {
    slug: 'childe-hassam',
    faqs: [
      { question: "What art movement was Childe Hassam part of?", answer: "Hassam was a pioneer of American <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> and co-founded the Ten American Painters group in 1897. After studying at the Académie Julian in Paris, he adapted French Impressionist techniques to distinctly American subjects, becoming the movement's most prolific practitioner." },
      { question: "What are Hassam's most famous paintings?", answer: "His <strong>flag series</strong> depicting Fifth Avenue during WWI and his <strong>Isles of Shoals</strong> coastal paintings are his most celebrated works. <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\"><strong>\"The Avenue in the Rain\"</strong></a> (1917) hangs in the Oval Office, chosen by President Obama for display." },
      { question: "Where can I see Childe Hassam's paintings?", answer: "His work hangs at the <a href=\"/apps/masterpieces/museum/art-institute-of-chicago\"><strong>Art Institute of Chicago</strong></a>, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, and the National Gallery of Art. The White House permanent collection includes his patriotic flag paintings from the WWI era." },
      { question: "What influenced Hassam's style?", answer: "Studying at the <strong>Académie Julian in Paris</strong> (1886-1889) exposed him to French Impressionist techniques, particularly <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a>'s light effects. He combined these influences with American urban energy, becoming New York City's foremost artistic chronicler at the turn of the century." },
      { question: "How many works did Hassam create?", answer: "He produced over <strong>3,000 paintings</strong>, watercolors, etchings, and lithographs during his prolific career. This enormous output, spanning urban scenes, <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal landscapes</strong></a>, and patriotic subjects, made him American Impressionism's most dedicated practitioner." }
    ]
  }
];

async function main() {
  console.log('Starting FAQ expansion updates for 25 artists...\n');

  let successCount = 0;
  let failCount = 0;

  for (const update of updates) {
    try {
      await prisma.artist.update({
        where: { slug: update.slug },
        data: {
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${update.slug}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
      failCount++;
    }
  }

  console.log(`\n========================================`);
  console.log(`Complete: ${successCount} succeeded, ${failCount} failed`);
  console.log(`========================================\n`);
}

main().catch(console.error).finally(() => prisma.$disconnect());
