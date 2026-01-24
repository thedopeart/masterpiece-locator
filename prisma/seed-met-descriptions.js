const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Met Descriptions ===\n');

  const artworkDescriptions = [
    {
      slug: 'madame-x-sargent',
      description: `<p><a href="/apps/masterpieces/artist/john-singer-sargent"><strong>John Singer Sargent</strong></a> painted <strong>Madame X</strong> in 1884, depicting Virginie Amélie Avegno Gautreau, a Parisian society beauty. Her pale skin against the <a href="https://luxurywallart.com/collections/black-and-gold" target="_blank" rel="noopener"><strong>black dress</strong></a> and her haughty profile created a sensation. When exhibited at the Paris Salon, the painting caused scandal.</p><p>Critics attacked the suggestive pose and décolletage. Sargent originally painted one strap fallen off her shoulder, later repainting it. The scandal damaged both Sargent's and Gautreau's reputations. Sargent kept the painting in his studio for decades before selling it to the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a> in 1916. He considered it his best work.</p>`,
      faqs: [
        { question: "Who was Madame X?", answer: "<strong>Virginie Amélie Avegno Gautreau</strong> was a famous Parisian beauty of the 1880s. She was American-born (from New Orleans) and married French banker Pierre Gautreau." },
        { question: "Why was Madame X controversial?", answer: "The portrait's <strong>suggestive pose and revealing dress</strong> shocked Paris Salon visitors in 1884. Originally one strap hung off her shoulder, which Sargent later repainted." },
        { question: "Why did Sargent call it his best work?", answer: "Sargent admired the painting's <strong>bold composition and striking contrast</strong>. Despite the scandal, he kept it for 32 years and reluctantly sold it only near the end of his career." }
      ]
    },
    {
      slug: 'young-woman-water-pitcher-vermeer',
      description: `<p><a href="/apps/masterpieces/artist/johannes-vermeer"><strong>Johannes Vermeer</strong></a> painted <strong>Young Woman with a Water Pitcher</strong> around 1662. A woman in a <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue jacket</strong></a> stands by a window, one hand on a silver pitcher, the other on a leaded glass window. Morning light bathes the scene in Vermeer's characteristic luminosity.</p><p>The composition balances geometric elements: the window's grid, the map on the wall, the pitcher's curves. Everything suggests a moment of quiet contemplation. Is she about to wash? Simply pausing? Vermeer leaves the narrative open. The painting exemplifies the <a href="/apps/masterpieces/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> fascination with domestic interiors. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "What is the woman doing?", answer: "The action is <strong>deliberately ambiguous</strong>. She may be about to wash or simply pausing in thought. Vermeer's genius lies in capturing this moment of potential action suspended in stillness." },
        { question: "How many Vermeer paintings exist?", answer: "Only <strong>34-36 paintings</strong> are attributed to Vermeer. His small output and extraordinary quality make each work precious. The Met owns five Vermeers." }
      ]
    },
    {
      slug: 'aristotle-bust-homer-rembrandt',
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted <strong>Aristotle with a Bust of Homer</strong> in 1653 for the Sicilian collector Don Antonio Ruffo. The philosopher stands in rich Renaissance dress, his hand resting contemplatively on a bust of the blind poet Homer. A <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>golden chain</strong></a> with a medallion of Alexander (Aristotle's pupil) hangs from his neck.</p><p>The painting meditates on fame, wisdom, and mortality. Aristotle seems to ponder the fate of even the greatest minds: Homer is now merely stone. In 1961 the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a> purchased it at auction for $2.3 million, then a world record for any artwork.</p>`,
      faqs: [
        { question: "What is Aristotle contemplating?", answer: "Aristotle <strong>touches Homer's blind eyes</strong> while wearing Alexander's medallion. He seems to reflect on the fate of great men: even Homer is now cold stone. Wisdom, fame, and mortality intertwine." },
        { question: "Why did this painting set a world record?", answer: "In 1961 the Met paid <strong>$2.3 million</strong>, the highest price ever for a painting at that time. The acquisition made international headlines and demonstrated art's increasing value as investment." }
      ]
    },
    {
      slug: 'self-portrait-rembrandt-1660-met',
      description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> painted this <strong>Self-Portrait</strong> in 1660, age 54. He faces the viewer directly, wearing a <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>brown beret</strong></a> and fur-trimmed coat. His face shows the effects of age and financial ruin (he had declared bankruptcy four years earlier), yet his gaze remains unflinching.</p><p>Rembrandt created over 80 self-portraits across his life, an unprecedented act of self-examination. This late example shows mastery of light and shadow, with flesh emerging from darkness. The thick impasto of his technique gives the face sculptural presence. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "How many self-portraits did Rembrandt paint?", answer: "Rembrandt created <strong>over 80 self-portraits</strong> in oil, etching, and drawing across 40 years. No artist before him documented his own aging so thoroughly." },
        { question: "Why did Rembrandt paint so many self-portraits?", answer: "Scholars debate his motives: <strong>artistic practice, marketing, psychological exploration</strong>. The self-portraits trace his journey from confident youth to weathered old age with unprecedented honesty." }
      ]
    },
    {
      slug: 'juan-de-pareja-velazquez',
      description: `<p><a href="/apps/masterpieces/artist/diego-velazquez"><strong>Diego Velázquez</strong></a> painted <strong>Juan de Pareja</strong> in 1650 in Rome. Pareja was Velázquez's enslaved assistant, of Moorish descent. The portrait's dignity and humanity astonished Roman viewers. Shortly after completing it, Velázquez freed Pareja, who became a painter himself.</p><p>The portrait captures Pareja's alert intelligence and self-possession. His fine lace collar and <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green-brown cloak</strong></a> suggest a man of substance, not servitude. Velázquez reportedly made this portrait as practice before painting Pope Innocent X. The <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a> acquired it in 1971.</p>`,
      faqs: [
        { question: "Who was Juan de Pareja?", answer: "<strong>Juan de Pareja</strong> (c. 1606-1670) was enslaved in Velázquez's household but trained secretly as a painter. Velázquez freed him in 1650. Pareja later had his own successful career as an artist." },
        { question: "Why is this portrait significant?", answer: "The portrait treats an enslaved man with <strong>profound dignity and humanity</strong>. It challenged social hierarchies and demonstrated that artistic genius could recognize worth regardless of status." }
      ]
    },
    {
      slug: 'view-of-toledo-el-greco',
      description: `<p><a href="/apps/masterpieces/artist/el-greco"><strong>El Greco</strong></a> painted <strong>View of Toledo</strong> around 1600, one of only two surviving landscapes by the artist. The Spanish city rises on its hill under a <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>dark, storm-green sky</strong></a>. Lightning threatens. The composition anticipates Expressionism by three centuries.</p><p>El Greco altered the city's topography for dramatic effect, moving buildings to suit his composition. The painting vibrates with supernatural energy, as if the city might dissolve into the turbulent heavens. It's among the earliest "mood landscapes" in Western art. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "Is View of Toledo accurate?", answer: "No, El Greco <strong>rearranged the city's landmarks</strong> for compositional effect. The cathedral appears to the right when it should be central. Art trumped topographical accuracy." },
        { question: "Why is the sky so dramatic?", answer: "The <strong>stormy green sky</strong> suggests supernatural forces at work. El Greco painted spiritual visions, and even this landscape seems charged with divine presence." }
      ]
    },
    {
      slug: 'musicians-caravaggio-met',
      description: `<p><a href="/apps/masterpieces/artist/caravaggio"><strong>Caravaggio</strong></a> painted <strong>The Musicians</strong> around 1595 for Cardinal Francesco del Monte. Four young men gather with instruments and sheet music. One figure at left looks directly at the viewer, possibly a self-portrait. Another tunes a lute, his mouth slightly open.</p><p>The painting demonstrates Caravaggio's early mastery of realistic textures: velvet, linen, skin, feathers. The homoerotic undertones reflect the Cardinal's circle. Caravaggio would soon develop his dramatic <strong>chiaroscuro</strong>, but here soft light bathes the intimate scene. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "Is Caravaggio in this painting?", answer: "The figure at left, looking at the viewer, may be a <strong>self-portrait</strong>. Caravaggio often included himself in early works, partly because models cost money he didn't have." },
        { question: "Who commissioned The Musicians?", answer: "<strong>Cardinal Francesco del Monte</strong> was Caravaggio's early patron. He supported the young artist and commissioned several paintings of musicians and fortune-tellers." }
      ]
    },
    {
      slug: 'dance-class-degas-met',
      description: `<p><a href="/apps/masterpieces/artist/edgar-degas"><strong>Edgar Degas</strong></a> painted <strong>The Dance Class</strong> in 1874, showing ballet dancers practicing at the Paris Opera. The elderly ballet master Jules Perrot leans on his stick while young dancers stretch, adjust their costumes, and await their turn.</p><p>Degas cropped the composition unconventionally, cutting off figures at the frame's edge like a photograph. The <a href="https://luxurywallart.com/collections/neutral-art" target="_blank" rel="noopener"><strong>pale tutus</strong></a> create a frothy mass against the brown floor. He painted over 1,500 works depicting dancers, capturing the physical labor behind artistic grace. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "Why did Degas paint so many dancers?", answer: "Degas found dancers ideal subjects for studying <strong>the body in motion</strong>. The backstage world also appealed to his interest in showing labor and rehearsal rather than polished performance." },
        { question: "Who is the man with the stick?", answer: "<strong>Jules Perrot</strong> was a famous ballet master who trained dancers at the Paris Opera. Degas included him in several paintings, using him as a compositional anchor." }
      ]
    },
    {
      slug: 'madame-charpentier-renoir',
      description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted <strong>Madame Charpentier and Her Children</strong> in 1878. The publisher's wife sits with her daughters Georgette and Paul (dressed as a girl, then fashionable). The family dog sprawls nearby. The scene radiates bourgeois comfort and maternal warmth.</p><p>Madame Charpentier's salon was a center of Parisian intellectual life. Her patronage helped Renoir gain acceptance at the Salon, where this painting won success. The <a href="https://luxurywallart.com/collections/black-and-gold" target="_blank" rel="noopener"><strong>black dress</strong></a> against Japanese décor shows <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> adapting to portraiture. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "Why is one child dressed as a girl?", answer: "Young Paul wears a dress because <strong>Victorian convention</strong> dressed all young children alike regardless of sex. Boys typically switched to masculine clothing around age 6-7." },
        { question: "Who were the Charpentiers?", answer: "<strong>Georges Charpentier</strong> published Zola, Flaubert, and other major writers. His wife Marguerite hosted a famous salon. Their patronage helped establish Impressionist painters." }
      ]
    },
    {
      slug: 'card-players-cezanne-met',
      description: `<p><a href="/apps/masterpieces/artist/paul-cezanne"><strong>Paul Cézanne</strong></a> painted five versions of <strong>The Card Players</strong> between 1890 and 1895. This Met version shows two Provençal peasants absorbed in their game. Their bodies form solid geometric masses, almost architectural in their stillness.</p><p>Cézanne sought to make <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a> something "solid and durable, like the art of the museums." These card players exemplify his late style: simplified forms, muted <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>earth tones</strong></a>, and monumental presence from ordinary subjects. One version sold in 2011 for over $250 million. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "How many Card Players paintings exist?", answer: "Cézanne painted <strong>five versions</strong> of The Card Players with different numbers of figures. Museums in Paris, London, Philadelphia, and New York hold versions." },
        { question: "Why are The Card Players valuable?", answer: "One version sold for <strong>over $250 million</strong> in 2011, making it among the most expensive paintings ever sold. Cézanne's influence on modern art makes his major works extremely desirable." }
      ]
    },
    {
      slug: 'bridge-water-lilies-monet',
      description: `<p><a href="/apps/masterpieces/artist/claude-monet"><strong>Claude Monet</strong></a> painted <strong>Bridge over a Pond of Water Lilies</strong> in 1899, showing the Japanese footbridge at his garden in Giverny. Weeping willows arch over water lilies floating in <a href="https://luxurywallart.com/collections/green-wall-art" target="_blank" rel="noopener"><strong>green</strong></a> and <a href="https://luxurywallart.com/collections/blue-wall-art" target="_blank" rel="noopener"><strong>blue water</strong></a>.</p><p>Monet built this garden specifically to paint. He diverted a stream, planted exotic species, and hired gardeners to maintain the pond. This painting belongs to a series of 18 views of the bridge made in 1899. The Japanese aesthetic appealed to <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> painters. It hangs at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "Did Monet design his garden for painting?", answer: "Yes, Monet <strong>created the water garden specifically</strong> to paint. He bought the land in 1893, diverted water, built the bridge, and employed gardeners to maintain exact conditions for his art." },
        { question: "How many bridge paintings did Monet make?", answer: "Monet painted the Japanese bridge <strong>18 times in 1899</strong> alone. He returned to the subject throughout his final decades, each version capturing different light and seasons." }
      ]
    },
    {
      slug: 'portrait-gertrude-stein-picasso',
      description: `<p><a href="/apps/masterpieces/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted <strong>Portrait of Gertrude Stein</strong> in 1906 after about 90 sittings. The American writer's face has a mask-like quality that anticipates Cubism. Stein reportedly said it didn't look like her. Picasso replied: "It will."</p><p>The portrait marks Picasso's transition from his Rose Period to the revolutionary experiments of 1907. The simplified features and heavy-lidded eyes show influence from Iberian sculpture. Stein bequeathed the portrait to the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a> in 1946.</p>`,
      faqs: [
        { question: "How many times did Gertrude Stein pose?", answer: "Stein posed for <strong>about 90 sittings</strong>. Picasso then wiped out the face entirely and repainted it from memory without her present, giving it the mask-like quality." },
        { question: "What did Picasso mean by 'It will'?", answer: "When Stein said the portrait didn't resemble her, Picasso predicted she would <strong>grow to resemble it</strong>. The painting's influence on her public image proved him right." }
      ]
    },
    {
      slug: 'sphinx-hatshepsut-met',
      description: `<p>This <strong>Sphinx of Hatshepsut</strong> dates from around 1479-1458 BCE and depicts the female pharaoh with a lion's body and human head wearing the royal nemes headdress. Hatshepsut ruled Egypt as pharaoh, not merely queen regent, and commissioned monuments depicting herself with masculine attributes.</p><p>After her death, her successor Thutmose III attempted to erase her from history, destroying her statues. This sphinx survived to demonstrate her power and divine status. The <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a> acquired it from excavations at Hatshepsut's mortuary temple at Deir el-Bahari.</p>`,
      faqs: [
        { question: "Why is Hatshepsut shown as a sphinx?", answer: "Sphinxes represented <strong>royal power and divine protection</strong>. By depicting herself as a sphinx, Hatshepsut claimed the same authority as male pharaohs before her." },
        { question: "Who was Hatshepsut?", answer: "<strong>Hatshepsut</strong> (r. 1479-1458 BCE) was one of Egypt's few female pharaohs. She built extensively and expanded trade. Her mortuary temple at Deir el-Bahari is an architectural masterpiece." }
      ]
    },
    {
      slug: 'seated-hatshepsut-met',
      description: `<p>This <strong>Seated Statue of Hatshepsut</strong> shows the female pharaoh enthroned in the traditional pose of kingship. Carved from indurated limestone around 1479-1458 BCE, traces of original paint survive. She wears the nemes headdress and false beard of pharaonic authority.</p><p>Hatshepsut's mortuary temple at Deir el-Bahari contained over 100 statues of the pharaoh. Her successor Thutmose III destroyed most of them, possibly to erase a woman's claim to the throne. The <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum's</strong></a> excavations recovered many fragments, which conservators reassembled.</p>`,
      faqs: [
        { question: "Why does Hatshepsut wear a false beard?", answer: "The <strong>false beard was a symbol of pharaonic power</strong>, not gender. By wearing it, Hatshepsut claimed full royal authority. Many of her statues show her with masculine attributes." },
        { question: "Why were so many Hatshepsut statues destroyed?", answer: "After her death, <strong>Thutmose III</strong> ordered her images destroyed. Scholars debate whether this was personal hatred or an attempt to regularize the succession by erasing a female pharaoh." }
      ]
    },
    {
      slug: 'kouros-statue-met',
      description: `<p>This <strong>Kouros</strong> (youth) dates from around 590-580 BCE and represents the Archaic Greek ideal of male beauty. The life-size marble figure stands rigidly frontal, left foot forward, arms at sides, in a pose derived from Egyptian sculpture. Yet the nudity and attention to anatomy are distinctly Greek.</p><p>Kouroi served as grave markers or dedications to gods. This example shows early attempts to render human musculature: the abs are suggested by grooves, the knees by stylized patterns. Later Greek sculpture would achieve greater naturalism, but these Archaic figures have a powerful presence. It stands at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "What is a kouros?", answer: "A <strong>kouros</strong> (plural: kouroi) is an Archaic Greek statue of a nude youth. They served as grave markers or dedications to Apollo. The word means 'youth' or 'boy' in Greek." },
        { question: "Why do kouroi all look similar?", answer: "Archaic sculptors followed <strong>formulaic conventions</strong>: frontal pose, left foot forward, arms at sides. Individual variation was less important than representing an ideal type." }
      ]
    },
    {
      slug: 'euphronios-krater',
      description: `<p>The <strong>Euphronios Krater</strong> is a wine-mixing bowl painted around 515 BCE by the Athenian potter Euxitheos and painted by Euphronios. It depicts the death of Sarpedon from Homer's Iliad: the hero's body lifted by Sleep and Death while Hermes directs them.</p><p>The red-figure technique (painting figures in red clay against black) allowed unprecedented detail. Euphronios's anatomy and foreshortening were revolutionary for their time. The Met returned this krater to Italy in 2008 after evidence showed it had been looted. A reproduction now stands in its place at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        { question: "Why did the Met return the Euphronios Krater?", answer: "Evidence showed the krater was <strong>illegally excavated from an Etruscan tomb</strong> in the 1970s. After negotiation, the Met returned it to Italy in 2008 and displays a reproduction." },
        { question: "Who was Sarpedon?", answer: "<strong>Sarpedon</strong> was a Trojan ally and son of Zeus. When he died fighting Patroclus, Zeus couldn't save him but ordered Sleep and Death to carry his body home for proper burial." }
      ]
    },
  ];

  let updated = 0;
  for (const art of artworkDescriptions) {
    const existing = await prisma.artwork.findFirst({
      where: { slug: art.slug }
    });

    if (!existing) {
      console.log(`Not found: ${art.slug}`);
      continue;
    }

    await prisma.artwork.update({
      where: { id: existing.id },
      data: {
        description: art.description,
        faqs: art.faqs,
        updatedAt: new Date(),
      }
    });

    console.log(`Updated: ${art.slug}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}/${artworkDescriptions.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
