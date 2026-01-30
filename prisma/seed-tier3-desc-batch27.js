const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'gustave-courbet-selfportrait-with-a-black-dog': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/petit-palais-paris-france\"><strong>Petit Palais</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "Courbet portrays himself <strong>seated outdoors with a black <a href=\"https://luxurywallart.com/collections/dog-paintings\" target=\"_blank\" rel=\"noopener\">dog</a></strong>. Painted in 1842, it was his first Salon acceptance. He presents himself as a <strong>Romantic bohemian</strong> in the landscape of his native Jura." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this early work. It launched his career at the Paris Salon, establishing the <strong>self-confident persona</strong> he cultivated throughout his life." }
  ],
  'gustave-courbet-selfportrait-the-man-with-a-pipe': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-fabre-montpellier-france\"><strong>Musée Fabre</strong></a> in Montpellier, France." },
    { question: "What does this painting depict?", answer: "Courbet shows himself <strong>smoking a pipe with half-closed eyes</strong>, projecting dreamy self-assurance. It's one of his most famous self-portraits, painted with thick, sensuous brushwork." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this around 1848-1849. He painted over 20 self-portraits, each reinforcing his image as a <strong>bold, independent artist</strong> who answered to no one." }
  ],
  'gustave-courbet-the-man-made-mad-by-fear': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/national-gallery-oslo\"><strong>National Gallery of Norway</strong></a> in Oslo." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>man driven mad by terror</strong>, wild-eyed and desperate. Courbet painted psychological extremity with the same <strong>physical realism</strong> he applied to landscapes and laborers." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this <strong>Realist</strong> painting. His willingness to depict <strong>raw human emotion without idealizing it</strong> made him the most radical French painter of the mid-19th century." }
  ],
  'gustave-courbet-the-happy-lovers': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-lyon-lyon-france\"><strong>Musée des Beaux-Arts de Lyon</strong></a> in France." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>two lovers in a countryside setting</strong>. Courbet painted the couple with the same earthy physicality he brought to all his subjects, celebrating <strong>sensual pleasure without shame</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this <strong>Realist</strong> painting. His frankness about the body and desire scandalized bourgeois Paris and opened the door for <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Manet and the Impressionists</strong></a>." }
  ],
  'origin-of-the-world': [
    { question: "Where is The Origin of the World?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris, where it was placed on public display in 1995 after decades in private hands." },
    { question: "What does this painting depict?", answer: "It's a <strong>close-up view of a nude female torso</strong>, the most sexually explicit painting by a major 19th-century artist. Courbet painted it with the same <strong>unflinching realism</strong> he applied to landscapes and portraits." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this in 1866 for the Ottoman diplomat <strong>Khalil Bey</strong>. It remained hidden in private collections for over a century, including behind a painting by Masson in psychoanalyst Jacques Lacan's study." }
  ],
  'gustave-courbet-the-vagabond': [
    { question: "Where is The Vagabond?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-des-beauxarts-de-dole-dole-france\"><strong>Musée des Beaux-Arts de Dole</strong></a> in France, near Courbet's birthplace." },
    { question: "What does this painting depict?", answer: "It shows a <strong>wanderer on the road</strong>. Courbet painted outcasts and wanderers with <strong>dignity and physical truth</strong>, refusing to sentimentalize or moralize about poverty." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Gustave Courbet</strong></a> created this <strong>Realist</strong> painting. His depictions of ordinary people challenged the French art establishment's insistence that only <strong>noble subjects</strong> deserved large-scale treatment." }
  ],
  'gustave-moreau-view-of-the-villa-borthese': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musée National Gustave Moreau</strong></a> in Paris, the artist's former home and studio." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>view of the Villa Borghese</strong> gardens in Rome. Moreau visited Italy to study the Old Masters, and this landscape shows a <strong>rare naturalistic side</strong> of a painter known for fantasy." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> created this scene. He's best known for <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> paintings of myth and fantasy, making this straightforward landscape an <strong>unusual entry</strong> in his body of work." }
  ],
  'gustave-moreau-the-daughters-of-thespius': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musée National Gustave Moreau</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>daughters of Thespius</strong>, a mythological subject involving Hercules. Moreau painted classical myths as <strong>jewel-like visions</strong> dripping with ornament and mystery." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> created this <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painting. His densely layered mythological scenes influenced the <strong>Surrealists, Matisse (his student), and the Art Nouveau movement</strong>." }
  ],
  'gustave-moreau-selfportrait': [
    { question: "Where is this self-portrait?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musée National Gustave Moreau</strong></a> in Paris." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> (1826-1898) created this work. He was a reclusive painter who transformed his Paris townhouse into a <strong>museum of his own work</strong>, now open to the public." },
    { question: "What style did Moreau work in?", answer: "He was a founder of <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>. His paintings of mythology and biblical subjects use <strong>encrusted surfaces and jewel-like color</strong> to create otherworldly visions." }
  ],
  'gustave-moreau-removal-dejanira': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mus233e-national-gustave-moreau-paris-france\"><strong>Musée National Gustave Moreau</strong></a> in Paris." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>abduction of Deianira by the centaur Nessus</strong>, a Greek myth that leads to Hercules's death. Moreau paints it with <strong>rich, almost hallucinatory detail</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> created this <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> mythological scene. As a professor at the École des Beaux-Arts, he taught <strong>Matisse and Rouault</strong>, shaping the next generation of French modernism." }
  ],
  'gustave-moreau-the-chimera': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>chimera</strong>, the mythological creature combining parts of different animals. Moreau painted monsters and mythical beings as <strong>symbols of the unconscious mind</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/gustave-moreau\"><strong>Gustave Moreau</strong></a> created this <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolist</strong></a> painting. His monstrous and fantastical subjects anticipated <strong>Surrealism's fascination with dreams and the irrational</strong>." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/symbolism\"><strong>Symbolism</strong></a>. Moreau's paintings layer <strong>myth, ornament, and psychological symbolism</strong> into surfaces so dense they feel like illuminated manuscripts brought to life." }
  ],
  'hans-holbein-younger-mayor-jakob-meyer-zum-hasen': [
    { question: "Where is this portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland." },
    { question: "What does this painting depict?", answer: "It's a <strong>portrait of Jakob Meyer zum Hasen</strong>, Basel's last Catholic mayor. Holbein captures his features with the <strong>razor-sharp precision</strong> that made him the greatest portrait painter of the Northern <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a>." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Hans Holbein the Younger</strong></a> created this work. He later became <strong>court painter to Henry VIII</strong>, documenting the Tudor court with unmatched clarity." }
  ],
  'hans-holbein-younger-marginal-illustration-for-erasmus-39in-praise-of-f': [
    { question: "Where is this work?", answer: "This illustration is at the <a href=\"/apps/masterpieces/museum/kunstmuseum-basel\"><strong>Kunstmuseum Basel</strong></a> in Switzerland." },
    { question: "What does this work depict?", answer: "It's a <strong>marginal illustration for Erasmus's In Praise of Folly</strong>. Holbein drew witty sketches in the margins of a copy owned by his friend, the great humanist scholar." },
    { question: "Who created this work?", answer: "<a href=\"/apps/masterpieces/artist/hans-holbein-younger\"><strong>Hans Holbein the Younger</strong></a> drew these illustrations. His friendship with <strong>Erasmus</strong> connected him to Europe's intellectual elite, and Erasmus's letter of introduction helped Holbein find work in England." }
  ],
  'hans-memling-triptych-of-jan-crabbe': [
    { question: "Where is this triptych?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/palazzo-chiericati-vicenza-italy\"><strong>Palazzo Chiericati</strong></a> in Vicenza, Italy." },
    { question: "What does this triptych depict?", answer: "It shows <strong>religious scenes with donor Jan Crabbe</strong> kneeling in prayer. Memling's triptychs combine <strong>devotional imagery with portrait-like donor figures</strong> in serene, luminous settings." },
    { question: "Who painted this triptych?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> altarpiece. He was the most popular painter in late 15th-century Bruges, producing <strong>exquisitely refined</strong> devotional works." }
  ],
  'hans-memling-the-donne-triptych-right-wing': [
    { question: "Where is this panel?", answer: "This wing is at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London." },
    { question: "What does this panel depict?", answer: "It's the <strong>right wing of the Donne Triptych</strong>, commissioned by Sir John Donne. Memling's triptych wings typically show <strong>saints and donors</strong> flanking a central devotional scene." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> (c. 1430-1494) created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> panel. His calm, luminous style made him <strong>Bruges's wealthiest painter</strong> and one of the most collected artists in Europe." }
  ],
  'hans-memling-praying-donor-with-st-william-of-maleval': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/morgan-library-and-museum-pierpont-morgan-library-\"><strong>Morgan Library and Museum</strong></a> in New York." },
    { question: "What does this painting depict?", answer: "The scene shows a <strong>praying donor accompanied by St. William of Maleval</strong>. Memling placed donors alongside their patron saints with <strong>gentle, devotional intimacy</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> devotional panel. His serene, <strong>jewel-toned paintings</strong> were prized by Flemish, Italian, and Spanish collectors alike." }
  ],
  'hans-memling-wings-of-a-triptych': [
    { question: "Where is this work?", answer: "These wings are at the <a href=\"/apps/masterpieces/museum/museo-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid." },
    { question: "What do these panels depict?", answer: "They show <strong>wings of a triptych</strong>, likely featuring saints or donors. Memling's triptych wings were painted on both sides, visible when the altarpiece was <strong>opened or closed</strong>." },
    { question: "Who painted these panels?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> created these <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> panels. Spanish collectors avidly sought Netherlandish painting, which is why the Prado holds <strong>major works by Memling, Van der Weyden, and Bosch</strong>." }
  ],
  'last-judgment-memling': [
    { question: "Where is The Last Judgment?", answer: "This triptych is at the <a href=\"/apps/masterpieces/museum/national-museum-gdansk\"><strong>National Museum in Gdańsk</strong></a>, Poland. It arrived there after being <strong>seized by pirates</strong> from a ship bound for Florence in 1473." },
    { question: "What does this triptych depict?", answer: "The central panel shows <strong>Christ judging souls</strong>, with the blessed ascending to heaven on the left and the damned falling to hell on the right. It's one of the most <strong>dramatic Northern Renaissance altarpieces</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> masterwork. Its journey from Bruges to Gdańsk via <strong>piracy on the English Channel</strong> is one of art history's most colorful stories." }
  ],
  'hans-memling-the-last-judgment-triptych-right-wing-casting-the-': [
    { question: "Where is this panel?", answer: "This wing is at the <a href=\"/apps/masterpieces/museum/national-museum-gdansk\"><strong>National Museum in Gdańsk</strong></a>, Poland." },
    { question: "What does this panel depict?", answer: "It shows the <strong>damned being cast into Hell</strong>, with demons dragging naked sinners into flames. Memling paints the horror with the same <strong>meticulous detail</strong> he applied to serene Madonnas." },
    { question: "Who painted this panel?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> Hell scene. The contrast between his usually <strong>calm, beautiful style</strong> and this terrifying subject makes the panel especially powerful." }
  ],
  'hans-memling-the-presentation-in-the-temple': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, D.C." },
    { question: "What does this painting depict?", answer: "The scene shows the <strong>infant Christ being presented at the Temple</strong>. Memling paints the ceremony with <strong>quiet reverence and luminous color</strong>, typical of his devotional works." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/hans-memling\"><strong>Hans Memling</strong></a> created this <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Northern Renaissance</strong></a> panel. His religious paintings were so admired that Vasari called him <strong>the leading Netherlandish painter</strong> of his time." }
  ],
  'hendrick-avercamp-winter-landscape-near-a-village': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/mfa-boston\"><strong>Museum of Fine Arts</strong></a> in Boston." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>villagers skating, sledding, and socializing on frozen waterways</strong>. Avercamp painted Dutch winters with <strong>joyful detail</strong>, filling his icy landscapes with dozens of individual stories." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/hendrick-avercamp\"><strong>Hendrick Avercamp</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> winter scene. Known as \"de Stomme\" (the Mute) because he was deaf, he communicated through his <strong>vivid, populated ice scenes</strong>." }
  ],
  'hendrick-avercamp-winter-scene-on-a-canal': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/toledo-museum-of-art-toledo-oh-us\"><strong>Toledo Museum of Art</strong></a> in Ohio." },
    { question: "What does this painting depict?", answer: "The scene shows <strong>figures skating and playing on a frozen canal</strong>. Avercamp's winter scenes are time capsules of <strong>17th-century Dutch life</strong>, from elegant couples to playing children to horse-drawn sleds." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/hendrick-avercamp\"><strong>Hendrick Avercamp</strong></a> created this <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> winter scene. He virtually <strong>invented the Dutch winter landscape</strong> as a genre, and his paintings remain among the most beloved images of the Golden Age." }
  ],
  'henri-toulouse-lautrec-the-falconer-comte-alphonse-de-toulouse-lautrec': [
    { question: "Where is this painting?", answer: "This work is at the <a href=\"/apps/masterpieces/museum/musee-toulouse-lautrec\"><strong>Musée Toulouse-Lautrec</strong></a> in Albi, France, the artist's birthplace." },
    { question: "What does this painting depict?", answer: "It shows <strong>Toulouse-Lautrec's father, Comte Alphonse, as a falconer</strong>. The Comte was an eccentric aristocrat whose love of horses and hunting shaped his son's early subjects." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Henri de Toulouse-Lautrec</strong></a> created this early work. Before painting <strong>Montmartre's cabarets and dancers</strong>, he painted his aristocratic family and their rural pursuits." }
  ],
  'henri-toulouse-lautrec-souvenir-of-auteuil': [
    { question: "What does this painting depict?", answer: "The scene shows a <strong>memory of Auteuil</strong>, the Parisian neighborhood known for its racecourse. Toulouse-Lautrec painted <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horse</strong></a> racing subjects early in his career before focusing on <strong>nightlife and entertainment</strong>." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/henri-toulouse-lautrec\"><strong>Henri de Toulouse-Lautrec</strong></a> created this scene. Two childhood leg fractures left him with a <strong>normal torso but stunted legs</strong>, and he channeled his energy into documenting Paris's demimonde." },
    { question: "What style is this painting?", answer: "It's <a href=\"/apps/masterpieces/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. Toulouse-Lautrec's fluid line and bold color, influenced by <strong>Degas and Japanese prints</strong>, made him one of the most original draftsmen of the 19th century." }
  ],
  'henri-fantin-latour-self-portrait': [
    { question: "Where is this self-portrait?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/mus233e-de-grenoble-grenoble-france\"><strong>Musée de Grenoble</strong></a> in France." },
    { question: "Who painted this self-portrait?", answer: "<a href=\"/apps/masterpieces/artist/henri-fantin-latour\"><strong>Henri Fantin-Latour</strong></a> (1836-1904) created this work. He's best known for <strong>group portraits of artists and writers</strong> and his luminous still lifes of flowers." },
    { question: "What style did Fantin-Latour work in?", answer: "He worked in a <strong>quiet, tonal realism</strong> independent of any movement. Friends with the Impressionists and admired by the Symbolists, he maintained his own <strong>intimate, contemplative approach</strong> to painting <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flowers</strong></a> and portraits." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
