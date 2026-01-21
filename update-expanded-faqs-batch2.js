const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const expandedFaqs = {
  'james-ensor': [
    {
      question: "What was James Ensor known for painting?",
      answer: "Ensor was famous for <strong>grotesque masks, skeletons, and carnival imagery</strong> that satirized Belgian bourgeois society. His parents ran a souvenir shop selling carnival masks in Ostend, and these objects became central to his art. He used masks to expose what he saw as human ugliness hiding beneath respectable social facades."
    },
    {
      question: "Where can I see James Ensor's paintings?",
      answer: "His masterpiece <em>Christ's Entry into Brussels</em> is at the <strong>Getty Center</strong> in Los Angeles, purchased in 1987 for €9 million despite Belgian protests. Major collections are also at the <strong>Royal Museums of Fine Arts of Belgium</strong> in Brussels, the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York, and Mu.ZEE in his hometown Ostend."
    },
    {
      question: "What art movements did James Ensor influence?",
      answer: "Ensor is considered a forerunner of <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionism</strong></a> and influenced the <a href=\"/apps/masterpieces/movement/surrealism\"><strong>Surrealists</strong></a>. German Expressionists like Emil Nolde admired his aggressive brushwork and disturbing imagery. His treatment of <a href=\"https://luxurywallart.com/collections/macabre-art\" target=\"_blank\" rel=\"noopener\"><strong>macabre subjects</strong></a> anticipated 20th-century movements that rejected naturalism and academic conventions."
    },
    {
      question: "What is James Ensor's most famous painting?",
      answer: "<em>Christ's Entry into Brussels in 1889</em> (1888), a massive canvas measuring 2.5 by 4.3 meters, depicts Jesus amid a grotesque carnival parade where no one pays him any attention. He used brushes, palette knives, and spatulas with crude, heavy strokes. It's considered a <strong>landmark of modern art</strong> and precursor to Expressionism."
    },
    {
      question: "Why did James Ensor paint so many masks?",
      answer: "His parents ran a <strong>souvenir shop selling carnival masks</strong> in the Belgian seaside town of Ostend, where he spent his entire life. For Ensor, masks didn't hide the face but revealed inner human ugliness and hypocrisy. They gave him license to push artistic boundaries and expose the psychological deficiencies of Belgian society."
    }
  ],

  'jan-davidsz-de-heem': [
    {
      question: "What was Jan Davidsz. de Heem known for painting?",
      answer: "De Heem was renowned for <strong>opulent still lifes</strong>: lavish arrangements of fruits, <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flowers</strong></a>, silver vessels, lobsters, oysters, and luxury objects. He combined the restrained Dutch tradition with Flemish exuberance after moving to Antwerp. His compositions often contained hidden moral symbolism reminding viewers of life's transience."
    },
    {
      question: "Where can I see Jan Davidsz. de Heem's paintings?",
      answer: "His work is displayed at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The Mauritshuis in The Hague and the Alte Pinakothek in Munich also hold significant examples of his elaborate still life paintings."
    },
    {
      question: "What art movement was Jan Davidsz. de Heem part of?",
      answer: "De Heem worked in the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> style, uniquely bridging the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> tradition of Utrecht with the opulence of Flemish painting. He moved to Antwerp around 1636, reportedly because 'there one could have rare fruits of all kinds, large plums, peaches, cherries, oranges, lemons, grapes, and others.'"
    },
    {
      question: "What is vanitas symbolism in de Heem's paintings?",
      answer: "De Heem included <strong>skulls, hourglasses, snakes, and wilting flowers</strong> amid apparent abundance to remind viewers of mortality and the vanity of earthly possessions. Even the most sumptuous feast would rot. These <a href=\"https://luxurywallart.com/collections/skeleton-skull-art\" target=\"_blank\" rel=\"noopener\"><strong>memento mori elements</strong></a> gave his decorative works a moral dimension that resonated with Protestant and Catholic audiences alike."
    },
    {
      question: "Why was de Heem admired in his time?",
      answer: "He was celebrated for his <strong>incredibly realistic depiction of gold and silver</strong> vessels, with reflections and textures that contemporaries found astonishing. His ability to render metallic surfaces, dewdrops on fruit, and translucent grapes was unmatched. He trained his son Cornelis, who continued the family tradition of virtuoso still life painting."
    }
  ],

  'rudolf-ernst': [
    {
      question: "What subjects did Rudolf Ernst paint?",
      answer: "Ernst specialized in <a href=\"/apps/masterpieces/movement/orientalism\"><strong>Orientalist</strong></a> subjects: mosque interiors with elaborate tilework, harem scenes, markets, and palace settings from the Islamic world. He painted with warm <a href=\"https://luxurywallart.com/collections/gold-art\" target=\"_blank\" rel=\"noopener\"><strong>golden tones</strong></a> and fine detail, creating atmospheric scenes that transported European viewers to an exotic, romanticized East."
    },
    {
      question: "Where can I see Rudolf Ernst's paintings?",
      answer: "His work is at the <strong>Dahesh Museum of Art</strong> in New York, the <strong>Musée des Beaux-Arts de Nantes</strong>, and the Shafik Gabr Collection. Many paintings remain in private collections, as his detailed Orientalist scenes have attracted Middle Eastern collectors in recent decades."
    },
    {
      question: "What was Rudolf Ernst's nationality?",
      answer: "Ernst was <strong>Austrian</strong>, born in Vienna in 1854, but he spent most of his career in Paris and exhibited under the French name 'Rodolphe Ernst.' He became a French citizen and was deeply connected to the Parisian art world's Orientalist circles throughout his long career."
    },
    {
      question: "Did Rudolf Ernst travel to the Middle East?",
      answer: "Yes, he traveled extensively to <strong>Spain, Morocco, Egypt, and Istanbul</strong> to sketch Islamic monuments, daily life, and architectural details. These studies informed his studio paintings, giving them an authenticity of detail that set them apart. He was particularly fascinated by <a href=\"https://luxurywallart.com/collections/spiritual-art\" target=\"_blank\" rel=\"noopener\"><strong>mosque architecture</strong></a> and decorative tilework."
    },
    {
      question: "What did Rudolf Ernst do later in life?",
      answer: "In 1905, he moved to Fontenay-aux-Roses outside Paris and <strong>produced faience tiles with Orientalist themes</strong>, extending his aesthetic into decorative arts. He decorated his own home in Ottoman style with tiles, fabrics, and objects collected during his travels, living reclusively surrounded by his Middle Eastern collection until his death in 1932."
    }
  ],

  'caspar-netscher': [
    {
      question: "What was Caspar Netscher known for painting?",
      answer: "Netscher specialized in <strong>elegant small-scale <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\">portraits</a></strong> for court circles in The Hague, renowned for his exquisite rendering of expensive fabrics like silk, velvet, and especially white satin. His ability to capture the sheen and folds of costly textiles made him the portraitist of choice for Dutch aristocracy."
    },
    {
      question: "Where can I see Caspar Netscher's paintings?",
      answer: "His work is at the <a href=\"/apps/masterpieces/museum/rijksmuseum\"><strong>Rijksmuseum</strong></a> in Amsterdam, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York. The Mauritshuis in The Hague, where he spent most of his career, holds several examples of his refined society portraits."
    },
    {
      question: "What art movement was Caspar Netscher part of?",
      answer: "Netscher was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painter working in The Hague during the 17th century. His style had French influences unusual for Dutch painters, reflecting the cosmopolitan court culture of The Hague and anticipating the elegant manner that would dominate 18th-century European <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraiture</strong></a>."
    },
    {
      question: "Who taught Caspar Netscher to paint?",
      answer: "He studied for four years with <strong>Gerard ter Borch</strong>, one of the finest painters of the Dutch Golden Age. From ter Borch he learned the famous technique for rendering expensive fabrics, especially the luminous quality of white satin that became Netscher's signature skill and made him sought after by wealthy patrons."
    },
    {
      question: "Did Caspar Netscher have royal patrons?",
      answer: "Yes, <strong>William III of Orange</strong>, who later became King of England, was a generous patron. Charles II of England reportedly invited him to work at the English court, though Netscher declined. His clientele included Dutch and foreign nobility, diplomats, and wealthy merchants seeking fashionable portraits."
    }
  ],

  'edward-hopper': [
    {
      question: "What art movement was Edward Hopper part of?",
      answer: "Hopper is classified as an <a href=\"/apps/masterpieces/movement/realism\"><strong>American Realist</strong></a>, though his psychological treatment of light, space, and isolation distinguishes him from documentary realists. His paintings capture modern American life with a mood of alienation and silence. He drew from Impressionism during Paris visits but developed a uniquely American vision."
    },
    {
      question: "Where can I see Edward Hopper's paintings?",
      answer: "The <a href=\"/apps/masterpieces/museum/whitney\"><strong>Whitney Museum</strong></a> in New York holds over 3,000 Hopper works, the largest collection. <em>Nighthawks</em> is at the <a href=\"/apps/masterpieces/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. The <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> and the National Gallery of Art also display important pieces from his career."
    },
    {
      question: "What is Edward Hopper's most famous painting?",
      answer: "<em>Nighthawks</em> (1942) shows four people in a late-night diner, painted just weeks after Pearl Harbor. Hopper said he was '<strong>painting the loneliness of a large city</strong>,' though he later claimed not to see it as particularly lonely. The diner has no visible entrance, trapping its occupants in fluorescent isolation."
    },
    {
      question: "What subjects did Edward Hopper paint?",
      answer: "Hopper painted <strong>American urban and rural scenes</strong>: late-night diners, gas stations, movie theaters, hotel rooms, and empty streets. Whether depicting a <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>coastal lighthouse</strong></a> or a Manhattan office, his work emphasizes isolation, silence, and the psychological weight of ordinary spaces bathed in stark light."
    },
    {
      question: "How did Edward Hopper influence film?",
      answer: "His cinematic compositions influenced many filmmakers. Alfred Hitchcock based the <strong>Bates house in <em>Psycho</em></strong> on Hopper's <em>House by the Railroad</em>. Ridley Scott waved reproductions of <em>Nighthawks</em> at his production team while creating <em>Blade Runner's</em> noir atmosphere. Wim Wenders and David Lynch also cite Hopper's influence."
    }
  ],

  'francesco-furini': [
    {
      question: "What was Francesco Furini known for painting?",
      answer: "Furini was known for <strong>sensuous female nudes</strong> drawn from mythology and the Old Testament, painted with soft sfumato technique that gave skin an almost translucent glow. His <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>female figures</strong></a> exhibit an eroticism that drew both admiration and criticism from contemporaries, balancing sensuality with religious or classical justification."
    },
    {
      question: "Where can I see Francesco Furini's paintings?",
      answer: "His work is at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the Pitti Palace. The Galleria Palatina in Florence holds several of his most celebrated nudes, including scenes of Bathsheba and other biblical subjects."
    },
    {
      question: "What art movement was Francesco Furini part of?",
      answer: "Furini was a Florentine <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painter whose work bridges late Mannerism and the new Baroque style influenced by Caravaggio. His soft, sfumato modeling differed from Caravaggio's harsh contrasts, creating a dreamlike quality. He studied in Rome before returning to Florence as a leading painter."
    },
    {
      question: "Did Francesco Furini become a priest?",
      answer: "Yes, in 1633 he took holy orders and became rector of Sant'Ansano in Mugello parish after criticism of his sensual nudes. He <strong>continued painting sensuous subjects</strong> even as a priest, claiming biblical and mythological justification. The apparent contradiction between his vocation and his art intrigued contemporaries."
    },
    {
      question: "Who admired Francesco Furini's work?",
      answer: "His admirers included <strong>Galileo Galilei</strong>, who owned his paintings, and the painter <strong>Guido Reni</strong>, who praised his handling of flesh tones. He received commissions from Florence's most powerful families, including the Medici. His reputation declined after his death but was revived by 19th-century collectors."
    }
  ],

  'theodore-chasseriau': [
    {
      question: "What art movements was Théodore Chassériau associated with?",
      answer: "Chassériau bridged <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> and <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>, attempting to fuse Ingres's linear precision with Delacroix's coloristic passion. He also painted <a href=\"/apps/masterpieces/movement/orientalism\"><strong>Orientalist</strong></a> subjects after visiting Algeria in 1846. Critics debated whether he succeeded in synthesizing these opposing styles or remained caught between them."
    },
    {
      question: "Where can I see Théodore Chassériau's paintings?",
      answer: "Major works are at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> and the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. The Louvre has a room dedicated to his work, including fragments from his destroyed murals at the Cour des Comptes. The Metropolitan Museum also holds important examples."
    },
    {
      question: "Who taught Théodore Chassériau?",
      answer: "<strong>Jean-Auguste-Dominique Ingres</strong> took him as a student at age eleven, calling him 'my truest disciple.' They later had a bitter falling-out when Chassériau embraced Romantic colorism. Ingres reportedly said Chassériau 'had come to destroy painting.' Despite this rupture, Ingres's influence remained visible throughout Chassériau's career."
    },
    {
      question: "What is Chassériau's most famous painting?",
      answer: "<em>The Tepidarium</em> (1853) at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> shows Roman <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> drying themselves after bathing in an <strong>erotically charged scene</strong>. The languid poses and warm flesh tones demonstrate his mastery of the female figure. The painting secured his reputation as a leading figure of French academic painting."
    },
    {
      question: "How young was Chassériau when he exhibited at the Louvre?",
      answer: "At <strong>fifteen</strong>, his portrait of the painter Prosper Marilhat made him the youngest artist exhibited at the Louvre, demonstrating precocious talent that astonished the Paris art world. He died at just 37, leaving admirers to wonder what heights he might have reached. Puvis de Chavannes and Gustave Moreau were among his artistic heirs."
    }
  ],

  'anders-zorn': [
    {
      question: "What art movement was Anders Zorn part of?",
      answer: "Zorn worked in an <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a>-influenced style, though he developed his own distinctive approach. Living in Paris and London during the 1880s, he befriended Whistler, <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>John Singer Sargent</strong></a>, and Rodin. His portraits show influences from both French Impressionism and Spanish masters like Velázquez."
    },
    {
      question: "Where can I see Anders Zorn's paintings?",
      answer: "Major collections exist at the <a href=\"/apps/masterpieces/museum/nationalmuseum-stockholm\"><strong>Nationalmuseum</strong></a> in Stockholm and the Zorn Museum in his hometown Mora, Sweden. American museums like the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum</strong></a> and Museum of Fine Arts, Boston hold significant works. The White House displays his portrait of President Taft."
    },
    {
      question: "What subjects did Anders Zorn paint?",
      answer: "Zorn specialized in <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of high society, including royalty, industrialists like Andrew Carnegie, and three American presidents. He also painted Swedish peasant life, luminous nude studies of <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>women</strong></a> bathing outdoors, and shimmering waterscapes of his native Dalarna region."
    },
    {
      question: "Which American presidents did Anders Zorn paint?",
      answer: "Zorn painted presidential portraits of <strong>Grover Cleveland</strong>, <strong>William H. Taft</strong>, and etched <strong>Theodore Roosevelt</strong> at the White House in 1905. Making seven trips to America, he painted over one hundred prominent Americans including Carnegie, Solomon Loeb, and Charles Deering, cementing his reputation as a leading transatlantic portraitist."
    },
    {
      question: "Was Anders Zorn known for etching?",
      answer: "Yes, Zorn was a brilliant etcher with 289 documented works, considered among the finest printmakers of his era. He learned the technique in London and developed a distinctive style using dramatic <strong>light and shade effects</strong>. His nude studies and self-portraits in etching rival his painted work in reputation."
    },
    {
      question: "Where did Anders Zorn live and work?",
      answer: "Born in <strong>Mora, Sweden</strong>, in humble circumstances, Zorn worked in London, Paris, and across Europe before returning permanently to his hometown in 1896. His home, Zorngården, is now part of the Zorn Museum complex. At his death in 1920, he left his entire fortune, equivalent to nine million dollars today, to Sweden."
    }
  ],

  'elisabeth-vigee-le-brun': [
    {
      question: "What art movement was Élisabeth Vigée Le Brun part of?",
      answer: "Her style bridged <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> and <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a>, combining Rococo's grace and elegance with the composure and natural simplicity that defined emerging Neoclassical taste. She softened the formality of official <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraiture</strong></a>, often showing sitters in relaxed poses and simple dress that scandalized traditionalists."
    },
    {
      question: "Where can I see Vigée Le Brun's paintings?",
      answer: "Major works hang at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, the <a href=\"/apps/masterpieces/museum/hermitage-museum\"><strong>Hermitage</strong></a> in St. Petersburg, the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum</strong></a> in New York, and the National Gallery in London. Versailles displays her official portraits of Marie Antoinette and the royal family."
    },
    {
      question: "How many portraits did Vigée Le Brun paint of Marie Antoinette?",
      answer: "She painted more than <strong>30 portraits</strong> of the Queen and her family, establishing herself as Marie Antoinette's unofficial official portraitist and close friend. The Queen received her in private apartments and helped secure her admission to the Royal Academy over objections about her husband's profession as an art dealer."
    },
    {
      question: "Why did Vigée Le Brun leave France?",
      answer: "She fled France in 1789 when the <strong>Revolution</strong> broke out, disguised in tattered clothes, given her close association with Marie Antoinette. Sans-culottes harassed her Paris home. She spent 12 years painting <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> of European royalty and aristocrats across Italy, Austria, Russia, and Germany before returning."
    },
    {
      question: "How many paintings did Vigée Le Brun create?",
      answer: "By her own account, she produced around <strong>900 pictures</strong> during her career, including approximately 660 <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portraits</strong></a> and about 200 <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscapes</strong></a>. She enjoyed patronage from European aristocrats, actors, and writers across the continent and was elected to art academies in ten cities."
    },
    {
      question: "Was Vigée Le Brun admitted to the Royal Academy?",
      answer: "Yes, she was admitted to the <strong>Royal Academy of Painting and Sculpture</strong> in 1783, one of only 15 women granted full membership between 1648 and 1793. Queen Marie Antoinette pressured King Louis XVI to overrule initial objections about her husband's art dealing business. Her rival Adélaïde Labille-Guiard was admitted the same day."
    }
  ],

  'frederic-edwin-church': [
    {
      question: "What art movement was Frederic Edwin Church part of?",
      answer: "Church was the central figure of the <a href=\"/apps/masterpieces/movement/hudson-river-school\"><strong>Hudson River School</strong></a>, a group of American <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> painters active in the mid-19th century. They celebrated American wilderness with romantic grandeur, presenting nature as evidence of divine creation. Church expanded the School's scope beyond New York to include Arctic icebergs and South American volcanoes."
    },
    {
      question: "Where can I see Frederic Edwin Church's paintings?",
      answer: "Major works hang at the <a href=\"/apps/masterpieces/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a>, and the <a href=\"/apps/masterpieces/museum/smithsonian-american-art-museum\"><strong>Smithsonian</strong></a>. His estate <strong>Olana</strong> overlooking the Hudson River is also a museum preserving his Persian-inspired home and studio."
    },
    {
      question: "What are Church's most famous paintings?",
      answer: "'<strong>Niagara</strong>' (1857) made him America's most famous painter with its seven-foot panoramic view of the falls. '<strong>The Heart of the Andes</strong>' (1859) attracted 12,000 visitors in three weeks at its New York debut. People paid admission and viewed it with opera glasses, treating it as spectacle and pilgrimage."
    },
    {
      question: "Who taught Frederic Edwin Church?",
      answer: "<strong>Thomas Cole</strong>, founder of the Hudson River School, taught Church from 1844 to 1846 in the Catskill <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>Mountains</strong></a>. Church became the only student Cole ever formally accepted. He built his estate Olana directly across the Hudson from Cole's former home, honoring his teacher's memory."
    },
    {
      question: "Why did Church travel to South America?",
      answer: "The naturalist <strong>Alexander von Humboldt's</strong> writings inspired Church to visit Ecuador twice, in 1853 and 1857. Humboldt had called for a painter to visualize his ideas about tropical nature. Church painted volcanic <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>mountains</strong></a> and lush valleys, resulting in his celebrated South American masterpieces."
    },
    {
      question: "What is Olana?",
      answer: "<strong>Olana</strong> is Church's 250-acre estate overlooking the Hudson River in New York, designed by the artist himself in a Persian-inspired style starting in 1870. The family moved in during 1872. It's now a state historic site and museum, preserving his home, studio, and designed <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> as his final artistic achievement."
    }
  ],

  'katsushika-hokusai': [
    {
      question: "What art movement was Katsushika Hokusai part of?",
      answer: "Hokusai was a master of <a href=\"/apps/masterpieces/movement/ukiyo-e\"><strong>ukiyo-e</strong></a>, the Japanese 'pictures of the floating world' tradition. He expanded the genre beyond portraits and theatrical scenes to include <strong><a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\">landscapes</a>, <a href=\"https://luxurywallart.com/collections/nature-art\" target=\"_blank\" rel=\"noopener\">nature</a>, and everyday scenes</strong>, transforming Japanese printmaking and influencing Western art."
    },
    {
      question: "Where can I see Hokusai's The Great Wave?",
      answer: "Multiple impressions exist at the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <strong>British Museum</strong>, and the <strong>Sumida Hokusai Museum</strong> in Tokyo. About 8,000 impressions were made from the original woodblock. Perhaps fewer than 100 survive today, as they were cheaply made commercial products, not fine art."
    },
    {
      question: "How many artworks did Hokusai create?",
      answer: "By his own estimate, he produced <strong>over 30,000 works</strong> across a 70-year career: paintings, sketches, woodblock prints, and illustrated books including the famous <em>Hokusai Manga</em>, a fifteen-volume encyclopedia of drawings. His output was extraordinary even by the prolific standards of ukiyo-e artists."
    },
    {
      question: "Why did Hokusai change his name so often?",
      answer: "He used <strong>at least 30 different names</strong> during his lifetime, each marking shifts in his artistic style or the start of a new creative period. This practice was common among ukiyo-e artists. His most famous works were signed 'Hokusai,' meaning 'North Studio,' a name he used from around 1798."
    },
    {
      question: "How did Hokusai influence Western art?",
      answer: "His prints sparked '<strong>Japonisme</strong>' in Europe after Japan opened to trade in the 1850s. Impressionists like <a href=\"/apps/masterpieces/artist/claude-monet\"><strong>Monet</strong></a> and Post-Impressionists like <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> collected his work. Debussy's <em>La Mer</em> was inspired by <em>The Great Wave</em>, featuring it on the original score's cover."
    },
    {
      question: "What were Hokusai's last words?",
      answer: "At 89, he reportedly said: '<strong>If heaven would give me just ten more years... I could become a real painter.</strong>' He died in 1849 still believing he hadn't reached his full potential. He'd once claimed that nothing he made before age 70 was worth keeping."
    }
  ],

  'pontormo': [
    {
      question: "What art movement was Pontormo part of?",
      answer: "Pontormo was a founder of <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>, the style that followed the High <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>. His work features <strong>elongated figures, unusual <a href=\"https://luxurywallart.com/collections/colorful-artwork\" target=\"_blank\" rel=\"noopener\">colors</a>, and ambiguous space</strong>, deliberately breaking classical rules of proportion and perspective. He pushed Renaissance innovations toward expressive distortion."
    },
    {
      question: "Where can I see Pontormo's paintings?",
      answer: "His work is at the <a href=\"/apps/masterpieces/museum/uffizi\"><strong>Uffizi Gallery</strong></a> in Florence, the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>. The <em>Deposition</em> remains in its original location in the Capponi Chapel at Santa Felicita church in Florence."
    },
    {
      question: "Who were Pontormo's teachers?",
      answer: "He studied briefly with <strong>Leonardo da Vinci, Piero di Cosimo, and Andrea del Sarto</strong>. The influence of del Sarto, with whom he trained the longest, is most visible in his early work. He also studied Michelangelo's figures and <a href=\"/apps/masterpieces/artist/albrecht-durer\"><strong>Dürer's</strong></a> prints, absorbing diverse influences into his personal style."
    },
    {
      question: "What was Pontormo's personality like?",
      answer: "Giorgio Vasari described him as <strong>eccentric and reclusive</strong>, so socially anxious he avoided company. A surviving diary from 1554-1556 reveals his obsessive tracking of meals, bowel movements, health, and moods. He pulled up the ladder to his upper-floor studio to prevent visitors, living in increasing isolation."
    },
    {
      question: "Who did Pontormo teach?",
      answer: "His most famous student was <a href=\"/apps/masterpieces/artist/agnolo-bronzino\"><strong>Agnolo Bronzino</strong></a>, who became the leading painter of late Florentine Mannerism and court portraitist to the Medici. Bronzino appears in Pontormo's paintings, and together they're considered central figures in the development of the Mannerist movement."
    },
    {
      question: "What is Pontormo's most famous painting?",
      answer: "The <em>Deposition</em> (1525-28) in the Capponi Chapel, Florence, is his masterwork. It shows <strong>grief-stricken figures floating in an impossible, luminous space</strong> of acid <a href=\"https://luxurywallart.com/collections/pink-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>pinks</strong></a> and pale <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blues</strong></a>. There's no cross, no ground, no logical setting. The emotional intensity defies Renaissance rationality."
    }
  ]
};

async function main() {
  console.log('Starting FAQ expansion updates for 12 artists...\n');

  let updated = 0;
  let failed = 0;

  for (const [slug, faqs] of Object.entries(expandedFaqs)) {
    try {
      // Count words in each FAQ for verification
      const faqStats = faqs.map((faq, i) => {
        const wordCount = faq.answer.replace(/<[^>]*>/g, '').split(/\s+/).length;
        return `FAQ ${i+1}: ${wordCount} words`;
      });

      await prisma.artist.update({
        where: { slug },
        data: {
          faqs: faqs,
          updatedAt: new Date()
        }
      });

      console.log(`✓ Updated ${slug}`);
      faqStats.forEach(stat => console.log(`  ${stat}`));
      updated++;
    } catch (error) {
      console.log(`✗ Failed ${slug}: ${error.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Failed: ${failed}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
