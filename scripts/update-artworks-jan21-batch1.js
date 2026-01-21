const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Starting artwork updates (Batch: 20 artworks)...\n');

  // 1. Hieronymus Bosch - The Concert in the Egg
  await prisma.artwork.update({
    where: { slug: 'hieronymus-bosch-the-concert-in-the-egg' },
    data: {
      description: `<p><a href="/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> painted this bizarre scene of figures crowded inside a giant eggshell, singing from a shared music sheet. The composition belongs to a tradition of moralizing imagery popular in the <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a>. Eggs in Bosch's symbolism often represent <strong>foolishness and fragility</strong>, while communal singing could suggest harmony or, more likely given Bosch's outlook, discord masked as unity.</p>

<p>A demon figure lurks among the singers, and the cracked shell hints at the precariousness of earthly pleasures. The work survives as a copy of a lost Bosch original. Its strange imagery has inspired centuries of interpretation, from alchemical readings to critiques of human vanity. The painting hangs at the <a href="/museum/palais-des-beauxarts-de-lille-lille-france"><strong>Palais des Beaux-Arts de Lille</strong></a>.</p>`,
      faqs: [
        { question: "What does the egg symbolize in this painting?", answer: "In <a href=\"/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> work, eggs typically represent <strong>foolishness, fragility, and the fleeting nature</strong> of earthly pleasures. The cracked shell suggests how easily human harmony can shatter." },
        { question: "Where can I see The Concert in the Egg?", answer: "This painting hangs at the <a href=\"/museum/palais-des-beauxarts-de-lille-lille-france\"><strong>Palais des Beaux-Arts de Lille</strong></a> in France. It's considered a copy of a lost <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> original by Bosch." },
        { question: "What style is this painting?", answer: "The work belongs to the <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> tradition of moralizing imagery. Bosch used <strong>fantastical scenes</strong> to critique human folly and sin through symbolic visual language." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: hieronymus-bosch-the-concert-in-the-egg');

  // 2. Hieronymus Bosch - Two Male Heads
  await prisma.artwork.update({
    where: { slug: 'hieronymus-bosch-two-male-heads' },
    data: {
      description: `<p>This small drawing by <a href="/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> shows two male heads in profile, rendered with the artist's characteristic attention to <strong>physiognomic detail</strong>. The figures appear to be studies from life, capturing distinct personalities through subtle differences in their features. One face seems contemplative, the other more assertive.</p>

<p>Such preparatory sketches reveal Bosch's working process and his keen observation of human character. The <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> master used studies like these to populate his complex allegorical paintings with believable figures. This drawing resides at the <a href="/museum/museum-boijmans-van-beuningen-rotterdam-netherland"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam, which holds an important collection of Bosch's rare surviving drawings.</p>`,
      faqs: [
        { question: "What type of artwork is Two Male Heads?", answer: "This is a <strong>preparatory drawing</strong> by <a href=\"/artist/hieronymus-bosch\"><strong>Bosch</strong></a>, likely a study from life. Such sketches helped him develop believable characters for his complex allegorical paintings." },
        { question: "Where can I see this Bosch drawing?", answer: "The drawing is at the <a href=\"/museum/museum-boijmans-van-beuningen-rotterdam-netherland\"><strong>Museum Boijmans Van Beuningen</strong></a> in Rotterdam. The museum holds an important collection of Bosch's rare surviving drawings." },
        { question: "Why are Bosch's drawings significant?", answer: "Very few of <a href=\"/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> drawings survive. They reveal his <strong>working process</strong> and keen observation of human character that he brought to his fantastical painted scenes." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: hieronymus-bosch-two-male-heads');

  // 3. Francesco Guardi - The Grand Canal, Looking toward the Rialto Bridge
  await prisma.artwork.update({
    where: { slug: 'francesco-guardi-the-grand-canal-looking-toward-the-rialto-bridge' },
    data: {
      description: `<p><a href="/artist/francesco-guardi"><strong>Francesco Guardi</strong></a> captured the shimmering light and bustling activity of Venice's Grand Canal with the Rialto Bridge rising in the distance. Gondolas and trading vessels crowd the waterway while figures move along the fondamente. Guardi's <strong>loose, flickering brushwork</strong> creates an atmosphere of constant movement and reflected light dancing on the water.</p>

<p>Working in the <a href="/movement/rococo"><strong>Rococo</strong></a> tradition of Venetian vedute (view paintings), Guardi developed a more impressionistic approach than his predecessor Canaletto. His <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>atmospheric views</strong></a> sacrificed precise architectural detail for mood and spontaneity. This painting hangs at the <a href="/museum/palazzo-brera-milan-italy"><strong>Pinacoteca di Brera</strong></a> in Milan.</p>`,
      faqs: [
        { question: "What is a veduta painting?", answer: "A <strong>veduta</strong> is a detailed view painting of a city, popular in 18th-century Venice. <a href=\"/artist/francesco-guardi\"><strong>Guardi</strong></a> and Canaletto were the genre's leading practitioners, capturing Venice for Grand Tour travelers." },
        { question: "Where can I see this painting?", answer: "This Venetian scene hangs at the <a href=\"/museum/palazzo-brera-milan-italy\"><strong>Pinacoteca di Brera</strong></a> in Milan. The museum holds significant works of Italian <a href=\"/movement/rococo\"><strong>Rococo</strong></a> and earlier periods." },
        { question: "How does Guardi differ from Canaletto?", answer: "<a href=\"/artist/francesco-guardi\"><strong>Guardi</strong></a> used <strong>looser, more atmospheric brushwork</strong> compared to Canaletto's precise detail. His style anticipates Impressionism, favoring mood over architectural accuracy." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: francesco-guardi-the-grand-canal-looking-toward-the-rialto-bridge');

  // 4. Hugo van der Goes - Portinari Triptych
  await prisma.artwork.update({
    where: { slug: 'hugo-van-der-goes-portinari-triptych' },
    data: {
      description: `<p>The <strong>Portinari Triptych</strong> by <a href="/artist/hugo-van-der-goes"><strong>Hugo van der Goes</strong></a> stands among the greatest achievements of <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> painting. Commissioned by Tommaso Portinari, a Medici bank agent in Bruges, this massive altarpiece depicts the Adoration of the Shepherds with unprecedented emotional intensity. The central panel shows the Virgin and angels worshipping the Christ Child, while shepherds rush in with raw, unidealized expressions of wonder.</p>

<p>Van der Goes rendered every surface with extraordinary precision: the <a href="https://luxurywallart.com/collections/floral-art" target="_blank" rel="noopener"><strong>flowers</strong></a> in the foreground carry symbolic meaning, the sheaf of wheat prefigures the Eucharist. When the triptych arrived in Florence around 1483, it profoundly influenced Italian artists including Ghirlandaio. The work remains at the <a href="/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a>.</p>`,
      faqs: [
        { question: "Who commissioned the Portinari Triptych?", answer: "<strong>Tommaso Portinari</strong>, a Medici bank agent in Bruges, commissioned this altarpiece. He and his family appear in the side panels, kneeling in devotion with their patron saints." },
        { question: "Where can I see the Portinari Triptych?", answer: "The triptych hangs at the <a href=\"/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence. When it arrived around 1483, it profoundly influenced Italian <a href=\"/movement/renaissance\"><strong>Renaissance</strong></a> artists." },
        { question: "Why is this painting historically significant?", answer: "The triptych introduced <a href=\"/movement/northern-renaissance\"><strong>Northern Renaissance</strong></a> realism to Florence. Its <strong>unidealized shepherds</strong> and botanical precision influenced artists like Ghirlandaio and shaped Italian painting." },
        { question: "What do the flowers symbolize?", answer: "The <a href=\"https://luxurywallart.com/collections/floral-art\" target=\"_blank\" rel=\"noopener\"><strong>flowers</strong></a> carry religious meaning: lilies for purity, columbine for sorrow, violets for humility. The sheaf of wheat prefigures Christ's body in the Eucharist." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: hugo-van-der-goes-portinari-triptych');

  // 5. Hyacinthe Rigaud - La Famille Lafitte
  await prisma.artwork.update({
    where: { slug: 'hyacinthe-rigaud-la-famille-lafitte' },
    data: {
      description: `<p><a href="/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a>, the foremost French <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> painter of the late 17th and early 18th centuries, captured the Lafitte family with the grandeur typically reserved for aristocracy. Rigaud built his reputation painting Louis XIV and the French court, bringing <strong>sumptuous fabrics, dignified poses, and subtle psychological insight</strong> to his subjects.</p>

<p>This family portrait demonstrates his skill at balancing formal composition with natural interaction between figures. Rich <a href="/movement/baroque"><strong>Baroque</strong></a> drapery and carefully rendered textures display the family's wealth and status. The intimate scale suggests a more personal commission than Rigaud's monumental royal portraits. The painting hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "Who was Hyacinthe Rigaud?", answer: "<a href=\"/artist/hyacinthe-rigaud\"><strong>Rigaud</strong></a> was the leading French <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait</strong></a> painter of his era. He famously painted Louis XIV and established the template for royal portraiture in France." },
        { question: "Where can I see this painting?", answer: "La Famille Lafitte hangs at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris alongside other major works by Rigaud, including his celebrated portrait of Louis XIV." },
        { question: "What style is this portrait?", answer: "Rigaud worked in the <a href=\"/movement/baroque\"><strong>Baroque</strong></a> tradition, emphasizing <strong>sumptuous fabrics, dignified poses</strong>, and rich textures that conveyed his subjects' social standing and character." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: hyacinthe-rigaud-la-famille-lafitte');

  // 6. John William Godward - Leaning on the Balcony
  await prisma.artwork.update({
    where: { slug: 'john-william-godward-leaning-on-the-balcony' },
    data: {
      description: `<p><a href="/artist/john-william-godward"><strong>John William Godward</strong></a> specialized in paintings of beautiful <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>women</strong></a> in classical settings, and this work exemplifies his refined approach. A young woman in flowing Greco-Roman dress rests against a marble balustrade, gazing pensively into the distance. Behind her, the Mediterranean sparkles under a warm sky.</p>

<p>Godward was a leading figure in <a href="/movement/academic-art"><strong>Academic</strong></a> painting who remained devoted to classical beauty even as modernism transformed the art world. His meticulous rendering of <strong>marble textures, draped fabrics, and sun-warmed skin</strong> demonstrates his technical mastery. Though dismissed by critics favoring avant-garde movements, his work has found renewed appreciation for its pure craftsmanship and serene classical vision.</p>`,
      faqs: [
        { question: "What subjects did Godward paint?", answer: "<a href=\"/artist/john-william-godward\"><strong>Godward</strong></a> specialized in <a href=\"https://luxurywallart.com/collections/women-art\" target=\"_blank\" rel=\"noopener\"><strong>beautiful women</strong></a> in ancient Greco-Roman settings. He meticulously rendered marble, draped fabrics, and Mediterranean light with technical precision." },
        { question: "What style is this painting?", answer: "Godward worked in the <a href=\"/movement/academic-art\"><strong>Academic</strong></a> tradition, remaining devoted to classical beauty and technical excellence even as modernism transformed the art world around him." },
        { question: "Why was Godward overlooked in his time?", answer: "Critics favored <strong>avant-garde movements</strong> over his classical approach. Reportedly, he said \"the world is not big enough\" for both himself and Picasso. His work has since found renewed appreciation." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: john-william-godward-leaning-on-the-balcony');

  // 7. Adriaen Brouwer - Interior with Smokers
  await prisma.artwork.update({
    where: { slug: 'adriaen-brouwer-interior-with-smokers' },
    data: {
      description: `<p><a href="/artist/adriaen-brouwer"><strong>Adriaen Brouwer</strong></a> captured peasant life with unflinching honesty in this tavern scene of men smoking clay pipes. The figures huddle in a dim interior, their faces illuminated by subtle light as <strong>wisps of tobacco smoke</strong> curl through the air. Brouwer's loose, confident brushwork brings energy to these humble subjects.</p>

<p>Working during the <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>, Brouwer specialized in low-life genre scenes that influenced later artists including Adriaen van Ostade. Despite his short life (he died at around 32), his work was collected by both Rubens and Rembrandt. This painting hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a> in Paris.</p>`,
      faqs: [
        { question: "What subjects did Adriaen Brouwer paint?", answer: "<a href=\"/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> specialized in <strong>peasant tavern scenes</strong> showing smoking, drinking, and fighting. His unflinching depictions of low life influenced later <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painters." },
        { question: "Where can I see this painting?", answer: "Interior with Smokers hangs at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. Despite Brouwer's short life, major collections prize his energetic genre scenes." },
        { question: "Who collected Brouwer's work?", answer: "Both <strong>Rubens and Rembrandt</strong> collected Brouwer's paintings. His loose brushwork and psychological insight into common people earned admiration from the greatest masters of his era." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: adriaen-brouwer-interior-with-smokers');

  // 8. Francis Picabia - Portrait of Jeanne Marie Bourgeois
  await prisma.artwork.update({
    where: { slug: 'francis-picabia-portrait-of-jeanne-marie-bourgeois' },
    data: {
      description: `<p><a href="/artist/francis-picabia"><strong>Francis Picabia</strong></a> painted this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> of Jeanne Marie Bourgeois, known professionally as Mistinguett, the legendary French actress and singer who dominated the Parisian music-hall scene. The work captures her glamorous presence with Picabia's characteristic blend of <strong>bold colors and modernist styling</strong>.</p>

<p>Picabia moved restlessly between artistic movements throughout his career, from Impressionism through Cubism, Dada, and Surrealism. This portrait shows his engagement with figurative representation while maintaining avant-garde sensibilities. The painting resides at the <a href="/museum/solomon-r-guggenheim-museum-new-york-city-ny-us"><strong>Solomon R. Guggenheim Museum</strong></a> in New York.</p>`,
      faqs: [
        { question: "Who was Mistinguett?", answer: "<strong>Jeanne Marie Bourgeois</strong>, known as Mistinguett, was a legendary French actress and singer who dominated Parisian music halls. She was famous for her elaborate costumes and reportedly insured legs." },
        { question: "Where can I see this portrait?", answer: "This painting hangs at the <a href=\"/museum/solomon-r-guggenheim-museum-new-york-city-ny-us\"><strong>Solomon R. Guggenheim Museum</strong></a> in New York alongside other modern and contemporary masterworks." },
        { question: "What styles did Picabia work in?", answer: "<a href=\"/artist/francis-picabia\"><strong>Picabia</strong></a> moved through <strong>Impressionism, Cubism, Dada, and Surrealism</strong>. His restless experimentation made him a key figure in multiple avant-garde movements." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: francis-picabia-portrait-of-jeanne-marie-bourgeois');

  // 9. François Boucher - The Birth and Triumph of Venus
  await prisma.artwork.update({
    where: { slug: 'francois-boucher-the-birth-and-triumph-of-venus' },
    data: {
      description: `<p><a href="/artist/francois-boucher"><strong>François Boucher</strong></a> created this sensuous celebration of Venus, goddess of love, emerging from the sea amid a swirl of tritons, nereids, and cherubs. The composition bursts with <a href="https://luxurywallart.com/collections/colorful-artwork" target="_blank" rel="noopener"><strong>pastel colors</strong></a>, billowing drapery, and the soft, idealized flesh that defined <a href="/movement/rococo"><strong>Rococo</strong></a> painting at its most exuberant.</p>

<p>As the favorite painter of Madame de Pompadour and a dominant force in French decorative arts, Boucher set the visual tone for mid-18th century aristocratic taste. This mythological scene demonstrates his mastery of theatrical composition and <strong>sensual elegance</strong>. The painting hangs at the <a href="/museum/nationalmuseum-stockholm-sweden"><strong>Nationalmuseum</strong></a> in Stockholm.</p>`,
      faqs: [
        { question: "What style is this painting?", answer: "This is quintessential <a href=\"/movement/rococo\"><strong>Rococo</strong></a> painting: sensuous, decorative, and theatrical. <a href=\"/artist/francois-boucher\"><strong>Boucher</strong></a> was the movement's leading French practitioner and a favorite of Madame de Pompadour." },
        { question: "Where can I see this painting?", answer: "The Birth and Triumph of Venus hangs at the <a href=\"/museum/nationalmuseum-stockholm-sweden\"><strong>Nationalmuseum</strong></a> in Stockholm, which holds significant French <a href=\"/movement/rococo\"><strong>Rococo</strong></a> works." },
        { question: "What mythological scene does this depict?", answer: "The painting shows <strong>Venus emerging from the sea</strong>, attended by tritons, nereids, and cherubs. This classical birth myth was a popular subject for sensuous <a href=\"/movement/rococo\"><strong>Rococo</strong></a> treatment." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: francois-boucher-the-birth-and-triumph-of-venus');

  // 10. Frédéric Bazille - Studio of The Rue Visconti
  await prisma.artwork.update({
    where: { slug: 'frederic-bazille-studio-of-the-rue-visconti' },
    data: {
      description: `<p><a href="/artist/frederic-bazille"><strong>Frédéric Bazille</strong></a> painted this intimate view of the Paris studio he shared with Claude Monet in the mid-1860s. The cluttered interior shows canvases stacked against walls, a <strong>stove for warmth</strong>, and the modest furnishings of young artists before fame found them. Natural light floods through the window, anticipating <a href="/movement/impressionism"><strong>Impressionist</strong></a> concerns with illumination.</p>

<p>Bazille was a central figure in the emerging Impressionist circle, close friends with Monet, Renoir, and Sisley. His promising career ended tragically when he was killed in the Franco-Prussian War at age 28. This painting documents a pivotal moment in art history: the shared space where Impressionism was taking shape. It hangs at the <a href="/museum/virginia-museum-of-fine-arts-richmond-va-us"><strong>Virginia Museum of Fine Arts</strong></a>.</p>`,
      faqs: [
        { question: "Who shared this studio with Bazille?", answer: "<a href=\"/artist/frederic-bazille\"><strong>Bazille</strong></a> shared this Paris studio with <strong>Claude Monet</strong> in the mid-1860s. The two were close friends and key figures in the emerging <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> movement." },
        { question: "Where can I see this painting?", answer: "Studio of The Rue Visconti hangs at the <a href=\"/museum/virginia-museum-of-fine-arts-richmond-va-us\"><strong>Virginia Museum of Fine Arts</strong></a> in Richmond. It documents a pivotal moment in <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> history." },
        { question: "What happened to Frédéric Bazille?", answer: "Bazille was <strong>killed in the Franco-Prussian War</strong> at age 28, cutting short a promising career. He was a central figure among Monet, Renoir, and Sisley before his tragic death." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: frederic-bazille-studio-of-the-rue-visconti');

  // 11. Jacob van Ruisdael - Wheat Fields
  await prisma.artwork.update({
    where: { slug: 'jacob-van-ruisdael-wheat-fields' },
    data: {
      description: `<p><a href="/artist/jacob-van-ruisdael"><strong>Jacob van Ruisdael</strong></a> transformed the flat Dutch <a href="https://luxurywallart.com/collections/landscapes" target="_blank" rel="noopener"><strong>landscape</strong></a> into something grand and atmospheric in this view of wheat fields under dramatic skies. Golden grain stretches toward the horizon while towering clouds build overhead, their shadows racing across the land. A country road leads the eye deep into the composition.</p>

<p>Ruisdael was the greatest landscapist of the <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a>, elevating humble terrain to epic status through his attention to <strong>weather, light, and seasonal change</strong>. His influence extended to English Romantic painters including Constable and Gainsborough. This painting resides at the <a href="/museum/metropolitan-museum-of-art-met-new-york-city-ny-us"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        { question: "Why is Jacob van Ruisdael significant?", answer: "<a href=\"/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> was the greatest landscapist of the <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a>. He elevated humble terrain to epic status and influenced English Romantic painters like Constable." },
        { question: "Where can I see Wheat Fields?", answer: "This <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>landscape</strong></a> hangs at the <a href=\"/museum/metropolitan-museum-of-art-met-new-york-city-ny-us\"><strong>Metropolitan Museum of Art</strong></a> in New York alongside other major Dutch Golden Age works." },
        { question: "What makes Ruisdael's landscapes distinctive?", answer: "Ruisdael emphasized <strong>dramatic skies, weather effects, and seasonal atmosphere</strong>. His clouds and shifting light give humble Dutch terrain a grandeur that influenced landscape painting for centuries." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jacob-van-ruisdael-wheat-fields');

  // 12. Jacques-Louis David - The Combat of Mars and Minerva
  await prisma.artwork.update({
    where: { slug: 'jacques-louis-david-the-combat-of-mars-and-minerva' },
    data: {
      description: `<p><a href="/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> depicted the mythological confrontation between Mars, god of war, and Minerva, goddess of wisdom. The composition shows Minerva triumphant, her spear poised over the defeated Mars while Venus attempts to intervene. This allegory of <strong>wisdom conquering brute force</strong> reflected <a href="/movement/neoclassicism"><strong>Neoclassical</strong></a> ideals of reason over passion.</p>

<p>David painted this early work to compete for the Prix de Rome, the prestigious scholarship that would launch his career. Though he lost that year, the painting demonstrates the clarity, muscular anatomy, and classical subjects that would later make him the most influential French painter of his generation. It hangs at the <a href="/museum/louvre-paris-france"><strong>Louvre</strong></a>.</p>`,
      faqs: [
        { question: "What does this painting symbolize?", answer: "The combat represents <strong>wisdom triumphing over brute force</strong>. Minerva's victory over Mars embodied <a href=\"/movement/neoclassicism\"><strong>Neoclassical</strong></a> ideals of reason and intellect conquering violent passion." },
        { question: "Where can I see this painting?", answer: "The Combat of Mars and Minerva hangs at the <a href=\"/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris alongside David's later masterworks including \"The Coronation of Napoleon.\"" },
        { question: "Why did David paint this subject?", answer: "<a href=\"/artist/jacques-louis-david\"><strong>David</strong></a> created this work to compete for the <strong>Prix de Rome</strong> scholarship. Though he lost, the painting launched his career as the leading <a href=\"/movement/neoclassicism\"><strong>Neoclassical</strong></a> painter." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jacques-louis-david-the-combat-of-mars-and-minerva');

  // 13. Gabriel Metsu - The Hunter's Present
  await prisma.artwork.update({
    where: { slug: 'gabriel-metsu-the-hunter39s-present' },
    data: {
      description: `<p><a href="/artist/gabriel-metsu"><strong>Gabriel Metsu</strong></a> painted this elegant scene of a hunter presenting game birds to a well-dressed <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>woman</strong></a> in a refined interior. The exchange carries undertones of courtship, a common theme in <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre painting. Her knowing glance and his attentive posture suggest more than a simple transaction.</p>

<p>Metsu excelled at depicting <strong>luxurious fabrics, subtle emotions, and the material culture</strong> of prosperous Dutch households. His careful observation of light on satin and velvet rivals Vermeer, while his narrative sensibility adds psychological depth. This painting hangs at the <a href="/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "What is the hidden meaning in this scene?", answer: "The hunter's gift carries <strong>courtship undertones</strong>. In <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> painting, such exchanges often suggested romantic pursuit masked as innocent social interaction." },
        { question: "Where can I see The Hunter's Present?", answer: "This painting hangs at the <a href=\"/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a> in Amsterdam, which holds major works by Metsu and other Dutch Golden Age masters." },
        { question: "How does Metsu compare to Vermeer?", answer: "<a href=\"/artist/gabriel-metsu\"><strong>Metsu's</strong></a> handling of <strong>light on luxurious fabrics</strong> rivals Vermeer. He adds more narrative complexity, while Vermeer emphasizes stillness and mystery." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: gabriel-metsu-the-hunter39s-present');

  // 14. Jan Steen - Lean Kitchen
  await prisma.artwork.update({
    where: { slug: 'jan-steen-lean-kitchen' },
    data: {
      description: `<p><a href="/artist/jan-steen"><strong>Jan Steen</strong></a> depicted a household of poverty in this moralizing scene. The "lean kitchen" shows a family with empty pots, thin faces, and ragged clothes. A cat prowls hopefully, finding nothing. Steen often paired such images with "fat kitchen" scenes showing gluttony, together warning against extremes.</p>

<p>This <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painter was famous for chaotic household scenes, but here he shows restraint in depicting <strong>genuine hardship</strong>. The painting served as both social observation and moral instruction: poverty could result from bad fortune or bad behavior, and viewers were meant to consider their own circumstances. It hangs at the <a href="/museum/national-gallery-of-canada-ottawa-canada"><strong>National Gallery of Canada</strong></a>.</p>`,
      faqs: [
        { question: "What does 'lean kitchen' mean?", answer: "A <strong>lean kitchen</strong> shows poverty and scarcity. <a href=\"/artist/jan-steen\"><strong>Steen</strong></a> often paired such images with \"fat kitchen\" scenes of gluttony, warning against both extremes through visual contrast." },
        { question: "Where can I see Lean Kitchen?", answer: "This painting hangs at the <a href=\"/museum/national-gallery-of-canada-ottawa-canada\"><strong>National Gallery of Canada</strong></a> in Ottawa, which holds significant <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> works." },
        { question: "What is Jan Steen famous for?", answer: "<a href=\"/artist/jan-steen\"><strong>Steen</strong></a> was famous for <strong>chaotic household scenes</strong> with moralizing messages. The Dutch phrase \"a Jan Steen household\" still means a messy, disorderly home." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jan-steen-lean-kitchen');

  // 15. Jan Steen - Village Fair
  await prisma.artwork.update({
    where: { slug: 'jan-steen-village-fair' },
    data: {
      description: `<p><a href="/artist/jan-steen"><strong>Jan Steen</strong></a> captured the raucous energy of a Dutch village fair with his characteristic eye for human folly and festivity. The scene teems with figures drinking, flirting, performing, and making merry. Children play, vendors hawk wares, and couples steal away from the crowd. Steen renders this <strong>carnival atmosphere</strong> with affectionate humor.</p>

<p>Such <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> genre scenes documented social life while gently mocking human weakness. The fair represents a temporary release from daily order, where normal rules bend. Steen himself reportedly ran a tavern, giving him intimate knowledge of <a href="https://luxurywallart.com/collections/people-paintings" target="_blank" rel="noopener"><strong>such revelry</strong></a>. This painting hangs at the <a href="/museum/mauritshuis-hague-netherlands"><strong>Mauritshuis</strong></a>.</p>`,
      faqs: [
        { question: "What does this painting depict?", answer: "The scene shows a <strong>Dutch village fair</strong> with all its chaos: drinking, flirting, performing, and general revelry. <a href=\"/artist/jan-steen\"><strong>Steen</strong></a> captures the carnival atmosphere with affectionate humor." },
        { question: "Where can I see Village Fair?", answer: "This painting hangs at the <a href=\"/museum/mauritshuis-hague-netherlands\"><strong>Mauritshuis</strong></a> in The Hague, home to Vermeer's \"Girl with a Pearl Earring\" and other <a href=\"/movement/dutch-golden-age\"><strong>Dutch</strong></a> masterworks." },
        { question: "Did Jan Steen run a tavern?", answer: "Yes, <a href=\"/artist/jan-steen\"><strong>Steen</strong></a> reportedly <strong>ran a tavern</strong> in addition to painting. This gave him intimate knowledge of the drinking, revelry, and human folly he depicted so vividly." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jan-steen-village-fair');

  // 16. Jan van Eyck - The Offerings of Cain and Abel
  await prisma.artwork.update({
    where: { slug: 'jan-van-eyck-the-offerings-of-cain-and-abel' },
    data: {
      description: `<p>This panel by <a href="/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> forms part of the monumental <strong>Ghent Altarpiece</strong>, one of the most important works in Western art. The scene shows the Old Testament brothers offering sacrifices to God: Abel's lamb is accepted while Cain's grain is rejected. The figures appear as carved stone reliefs, demonstrating van Eyck's legendary ability to simulate different textures.</p>

<p>The <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> master rendered every detail with almost supernatural precision. This panel prefigures the central theme of Christ's sacrifice depicted elsewhere in the massive polyptych. The Ghent Altarpiece remains at <a href="/museum/st-bavo-cathedral-ghent-belgium"><strong>St. Bavo Cathedral</strong></a> in Ghent, where it has drawn pilgrims and art lovers for nearly 600 years.</p>`,
      faqs: [
        { question: "What is the Ghent Altarpiece?", answer: "The <strong>Ghent Altarpiece</strong> is a monumental polyptych by <a href=\"/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a> and his brother Hubert. It's considered one of the most important works in Western art history." },
        { question: "Where can I see this panel?", answer: "This panel remains at <a href=\"/museum/st-bavo-cathedral-ghent-belgium\"><strong>St. Bavo Cathedral</strong></a> in Ghent, Belgium. The complete altarpiece has drawn visitors for nearly 600 years." },
        { question: "What biblical story does this show?", answer: "The scene depicts <strong>Cain and Abel's offerings</strong> to God. Abel's lamb sacrifice is accepted while Cain's grain is rejected, prefiguring biblical themes of worthy sacrifice." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jan-van-eyck-the-offerings-of-cain-and-abel');

  // 17. Jan van Eyck - Donor and St. John the Baptist
  await prisma.artwork.update({
    where: { slug: 'jan-van-eyck-donor-and-st-john-the-baptist' },
    data: {
      description: `<p>This panel from the <strong>Ghent Altarpiece</strong> by <a href="/artist/jan-van-eyck"><strong>Jan van Eyck</strong></a> depicts Jodocus Vijd, who commissioned the masterwork, kneeling before St. John the Baptist. The donor wears fashionable Burgundian court dress, his hands clasped in prayer, while the Baptist holds a lamb symbolizing Christ. Van Eyck painted both figures with his characteristic <strong>microscopic precision</strong>.</p>

<p>Including donor portraits in altarpieces allowed wealthy patrons to be perpetually present in sacred scenes. Van Eyck's ability to capture individual likeness and personality revolutionized <a href="/movement/northern-renaissance"><strong>Northern Renaissance</strong></a> portraiture. This panel remains at <a href="/museum/st-bavo-cathedral-ghent-belgium"><strong>St. Bavo Cathedral</strong></a> in Ghent as part of the complete polyptych.</p>`,
      faqs: [
        { question: "Who is the donor in this painting?", answer: "<strong>Jodocus Vijd</strong> commissioned the entire Ghent Altarpiece. His portrait here shows him in fashionable Burgundian court dress, kneeling in perpetual prayer before St. John." },
        { question: "Where can I see this panel?", answer: "This panel remains at <a href=\"/museum/st-bavo-cathedral-ghent-belgium\"><strong>St. Bavo Cathedral</strong></a> in Ghent as part of the complete <strong>Ghent Altarpiece</strong> by <a href=\"/artist/jan-van-eyck\"><strong>Jan van Eyck</strong></a>." },
        { question: "Why did donors appear in altarpieces?", answer: "Including <strong>donor portraits</strong> allowed wealthy patrons to be perpetually present in sacred scenes. It demonstrated piety while commemorating their generosity for future generations." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jan-van-eyck-donor-and-st-john-the-baptist');

  // 18. Jan van Goyen - Winter
  await prisma.artwork.update({
    where: { slug: 'jan-van-goyen-winter' },
    data: {
      description: `<p><a href="/artist/jan-van-goyen"><strong>Jan van Goyen</strong></a> captured a frozen Dutch waterway in this atmospheric winter scene. Figures skate and walk across the ice while bare trees stand against a pale sky. Van Goyen pioneered a <strong>tonal approach to landscape</strong>, using restricted palettes of browns, grays, and ochres to unify his compositions and evoke specific weather conditions.</p>

<p>Winter scenes became a specialty of <a href="/movement/dutch-golden-age"><strong>Dutch Golden Age</strong></a> painters, documenting the Little Ice Age that made frozen canals a regular feature of life. Van Goyen's economical brushwork and misty atmospheres influenced generations of landscapists. This painting hangs at the <a href="/museum/rijksmuseum-amsterdam-netherlands"><strong>Rijksmuseum</strong></a> in Amsterdam.</p>`,
      faqs: [
        { question: "What style did Jan van Goyen pioneer?", answer: "<a href=\"/artist/jan-van-goyen\"><strong>Van Goyen</strong></a> pioneered <strong>tonal landscape painting</strong>, using restricted palettes of browns, grays, and ochres. His atmospheric approach influenced generations of <a href=\"/movement/dutch-golden-age\"><strong>Dutch</strong></a> landscapists." },
        { question: "Where can I see this painting?", answer: "Winter hangs at the <a href=\"/museum/rijksmuseum-amsterdam-netherlands\"><strong>Rijksmuseum</strong></a> in Amsterdam alongside other major <a href=\"/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> landscapes." },
        { question: "Why were frozen canal scenes popular?", answer: "The <strong>Little Ice Age</strong> made frozen waterways common in 17th-century Holland. Skating and winter activities on ice became beloved subjects for Dutch painters and their patrons." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jan-van-goyen-winter');

  // 19. Jean-Antoine Watteau - Satire on Physicians
  await prisma.artwork.update({
    where: { slug: 'jean-antoine-watteau-satire-on-physicians' },
    data: {
      description: `<p><a href="/artist/jean-antoine-watteau"><strong>Jean-Antoine Watteau</strong></a> created this biting satire of medical practice, depicting doctors as pompous figures surrounding a suffering patient. The scene mocks the <strong>elaborate costumes and dubious treatments</strong> of early 18th-century medicine. Watteau, who suffered from tuberculosis and died young, had personal reasons to distrust physicians.</p>

<p>Though famous for his dreamy fêtes galantes, Watteau could turn his brush to sharper social commentary. This <a href="/movement/rococo"><strong>Rococo</strong></a> master influenced generations of French painters with his delicate touch and subtle psychology. The painting hangs at the <a href="/museum/pushkin-museum-moscow-russia"><strong>Pushkin Museum</strong></a> in Moscow, far from its French origins.</p>`,
      faqs: [
        { question: "Why did Watteau satirize doctors?", answer: "<a href=\"/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> suffered from <strong>tuberculosis</strong> and died at 36. His experience with ineffective treatments gave him reason to mock the pompous doctors and dubious medicine of his era." },
        { question: "Where can I see this painting?", answer: "Satire on Physicians hangs at the <a href=\"/museum/pushkin-museum-moscow-russia\"><strong>Pushkin Museum</strong></a> in Moscow, which holds significant French <a href=\"/movement/rococo\"><strong>Rococo</strong></a> paintings." },
        { question: "What is Watteau famous for?", answer: "<a href=\"/artist/jean-antoine-watteau\"><strong>Watteau</strong></a> is famous for <strong>fêtes galantes</strong>, dreamy scenes of elegant figures in parkland settings. This satire shows his lesser-known talent for social commentary." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: jean-antoine-watteau-satire-on-physicians');

  // 20. George Stubbs - The Hunters leave Southill
  await prisma.artwork.update({
    where: { slug: 'george-stubbs-the-hunters-leave-southill' },
    data: {
      description: `<p><a href="/artist/george-stubbs"><strong>George Stubbs</strong></a> depicted this hunting party departing from Southill, a grand English country estate. Riders and their mounts gather before the house as hounds mill about, eager for the chase. Stubbs rendered each <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>horse</strong></a> with the anatomical precision that made him the greatest equestrian painter in British history.</p>

<p>Stubbs famously dissected horses to understand their musculature, publishing his findings in "The Anatomy of the Horse" (1766). His sporting paintings captured the <strong>aristocratic world of hunting and racing</strong> that defined Georgian England. Though this work is in a private collection, major Stubbs paintings hang at the Tate, the National Gallery, and the Yale Center for British Art.</p>`,
      faqs: [
        { question: "Why is Stubbs famous for painting horses?", answer: "<a href=\"/artist/george-stubbs\"><strong>Stubbs</strong></a> famously <strong>dissected horses</strong> to understand their anatomy, publishing his findings in 1766. This scientific approach made him the greatest equestrian painter in British history." },
        { question: "What scene does this painting show?", answer: "The painting depicts a <strong>hunting party departing</strong> from Southill, an English country estate. Riders, <a href=\"https://luxurywallart.com/collections/horse-art\" target=\"_blank\" rel=\"noopener\"><strong>horses</strong></a>, and hounds gather before the hunt begins." },
        { question: "Where can I see Stubbs paintings?", answer: "This work is in a <strong>private collection</strong>, but major Stubbs paintings hang at the Tate, National Gallery in London, and Yale Center for British Art." }
      ],
      updatedAt: new Date()
    }
  });
  console.log('Updated: george-stubbs-the-hunters-leave-southill');

  console.log('\nAll 20 artworks updated successfully!');
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
