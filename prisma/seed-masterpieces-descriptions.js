const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'birth-of-venus',
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted The Birth of Venus around <strong>1485</strong> for the Medici family, depicting the goddess emerging fully grown from the sea. She stands on a giant scallop shell while Zephyr, the west wind, blows her toward shore. One of the Horae, goddesses of the seasons, waits with a flowered cloak to cover her.</p>

<p>The painting draws from classical mythology and contemporary poetry, particularly Angelo Poliziano's verses. Venus's pose echoes the ancient <strong>Venus Pudica</strong> (modest Venus) stance, with her hands covering herself. Botticelli elongated her neck and sloped her shoulders beyond natural proportion, creating an idealized beauty that influenced artists for centuries.</p>

<p>Unlike most Florentine paintings of the era, Botticelli used <strong>canvas rather than wood panel</strong>, applying tempera in thin, luminous layers. The work remained with the Medici until their collections passed to the state. It now hangs at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence, displayed near Botticelli's Primavera in the dedicated Botticelli rooms.</p>`,
    faqs: [
      {
        question: "What myth does The Birth of Venus depict?",
        answer: "Venus (Aphrodite) was <strong>born from sea foam</strong> after Cronus castrated Uranus and threw his remains into the ocean. She emerged fully grown and beautiful, blown to shore by the winds."
      },
      {
        question: "Who commissioned The Birth of Venus?",
        answer: "The <strong>Medici family</strong>, likely Lorenzo di Pierfrancesco de' Medici. The painting decorated a private villa, not a church, which was unusual for such a large work."
      },
      {
        question: "Where can I see The Birth of Venus?",
        answer: "At the <a href=\"/apps/masterpieces/museum/uffizi-gallery-florence-italy\"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It's displayed in the Botticelli rooms alongside Primavera and other Renaissance masterworks."
      },
      {
        question: "Why does Venus look so elongated?",
        answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli</strong></a> deliberately distorted proportions for <strong>idealized beauty</strong>. Her neck, shoulders, and left arm are anatomically impossible but create graceful visual rhythm."
      }
    ]
  },
  {
    slug: 'creation-of-adam',
    description: `<p><a href="/apps/masterpieces/artist/michelangelo-buonarroti"><strong>Michelangelo</strong></a> painted The Creation of Adam in <strong>1512</strong> as part of the Sistine Chapel ceiling, depicting the moment God gives life to the first man. The nearly touching fingers of God and Adam have become one of the most <strong>replicated images</strong> in art history, symbolizing the divine spark of creation.</p>

<p>Adam reclines on Earth, his body beautiful but listless. God approaches from the right, wrapped in a billowing cloak and surrounded by angels. The <strong>small gap between their fingers</strong> creates extraordinary tension. Some scholars see the shape around God as resembling a human brain, suggesting Michelangelo embedded anatomical knowledge into the composition.</p>

<p>Michelangelo painted the entire ceiling while standing on scaffolding, working in <strong>true fresco</strong> where pigment bonds with wet plaster. He completed this section in about sixteen days. The painting remains on the Sistine Chapel ceiling in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>, viewed by millions annually who crane their necks upward just as Michelangelo once did.</p>`,
    faqs: [
      {
        question: "Do their fingers actually touch?",
        answer: "No. A <strong>small gap</strong> remains between God's and Adam's fingers, creating visual tension that suggests the moment just before or after the spark of life passes between them."
      },
      {
        question: "How long did Michelangelo take to paint this?",
        answer: "About <strong>sixteen days</strong> for this particular scene. The entire Sistine Chapel ceiling took four years (1508-1512), with Michelangelo working largely alone."
      },
      {
        question: "Is the shape behind God a brain?",
        answer: "Some scholars believe the red cloak resembles a <strong>human brain</strong> in cross-section. <a href=\"/apps/masterpieces/artist/michelangelo-buonarroti\"><strong>Michelangelo</strong></a> studied anatomy through dissection, making this theory plausible."
      },
      {
        question: "Where is The Creation of Adam?",
        answer: "On the <strong>Sistine Chapel ceiling</strong> in the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a>, Rome. Visitors view it by looking straight up, as it's painted on the barrel-vaulted ceiling."
      }
    ]
  },
  {
    slug: 'school-of-athens',
    description: `<p><a href="/apps/masterpieces/artist/raphael-sanzio"><strong>Raphael</strong></a> painted The School of Athens in <strong>1509-1511</strong> for Pope Julius II's private library in the Vatican. The fresco depicts ancient Greek philosophers gathered in a grand classical building, with <strong>Plato and Aristotle</strong> at the center. Plato points upward toward the realm of forms; Aristotle gestures downward toward the empirical world.</p>

<p>Raphael populated the scene with over fifty figures representing different philosophical schools. He gave many ancient philosophers the faces of contemporary artists: <strong>Plato resembles Leonardo da Vinci</strong>, Heraclitus has Michelangelo's features, and Raphael himself appears at the far right. The architectural setting draws from Bramante's plans for the new St. Peter's Basilica.</p>

<p>The painting demonstrates perfect <strong>one-point perspective</strong>, with all lines converging on the vanishing point between Plato and Aristotle. This mathematical precision, combined with natural figure groupings, made the work a textbook example of High Renaissance composition. It remains in the Stanza della Segnatura at the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
    faqs: [
      {
        question: "Who are the central figures?",
        answer: "<strong>Plato and Aristotle</strong> stand at the center. Plato points up (ideal forms), Aristotle gestures down (empirical observation). Their poses summarize their philosophical differences."
      },
      {
        question: "Which contemporary artists did Raphael include?",
        answer: "<strong>Leonardo appears as Plato</strong>, Michelangelo as Heraclitus (the brooding figure on the steps), Bramante as Euclid, and <a href=\"/apps/masterpieces/artist/raphael-sanzio\"><strong>Raphael himself</strong></a> at the far right."
      },
      {
        question: "Where is The School of Athens?",
        answer: "In the <strong>Stanza della Segnatura</strong> at the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a>, Rome. It was originally Pope Julius II's private library."
      },
      {
        question: "Why is this painting so influential?",
        answer: "It perfects <strong>one-point perspective</strong> and High Renaissance composition. Art academies used it as a teaching example for centuries, making it one of history's most studied paintings."
      }
    ]
  },
  {
    slug: 'garden-of-earthly-delights',
    description: `<p><a href="/apps/masterpieces/artist/hieronymus-bosch"><strong>Hieronymus Bosch</strong></a> painted The Garden of Earthly Delights around <strong>1490-1510</strong>, creating a triptych that has puzzled viewers for five centuries. When closed, it shows Earth during creation in grisaille. Open, the three panels depict the <strong>Garden of Eden</strong> (left), a surreal earthly paradise (center), and a nightmarish Hell (right).</p>

<p>The central panel teems with hundreds of nude figures engaging in bizarre pleasures amid giant fruits, birds, and fantastic structures. Scholars have interpreted it as a <strong>warning against sin</strong>, an alchemical allegory, or a vision of humanity before the Fall. Bosch's intentions remain mysterious, with no contemporary documents explaining the imagery.</p>

<p>The right panel depicts Hell with burning cities, musical instruments as torture devices, and a tree-man often interpreted as <strong>Bosch's self-portrait</strong>. Philip II of Spain acquired the triptych in 1591. It now dominates a room at the <a href="/apps/masterpieces/museum/museo-nacional-del-prado-madrid-spain"><strong>Museo del Prado</strong></a> in Madrid, where its strange imagery continues to fascinate visitors.</p>`,
    faqs: [
      {
        question: "What do the three panels show?",
        answer: "Left: <strong>Garden of Eden</strong> with Adam, Eve, and God. Center: a surreal paradise of nude figures and giant fruits. Right: <strong>Hell</strong> with torture and burning cities."
      },
      {
        question: "What does the painting mean?",
        answer: "Nobody knows for certain. Interpretations include a <strong>moral warning</strong> about sin, an alchemical allegory, or a depiction of humanity's potential before corruption. <a href=\"/apps/masterpieces/artist/hieronymus-bosch\"><strong>Bosch</strong></a> left no explanation."
      },
      {
        question: "Where can I see this painting?",
        answer: "At the <a href=\"/apps/masterpieces/museum/museo-nacional-del-prado-madrid-spain\"><strong>Museo del Prado</strong></a> in Madrid. The triptych has its own room due to its size (over 3.8 meters wide when open) and importance."
      },
      {
        question: "Is the tree-man Bosch's self-portrait?",
        answer: "Many scholars believe so. The <strong>tree-man in Hell</strong> looks back over his shoulder with an expression that suggests self-awareness, possibly Bosch reflecting on his own strange visions."
      }
    ]
  },
  {
    slug: 'wanderer-above-sea-of-fog',
    description: `<p><a href="/apps/masterpieces/artist/caspar-david-friedrich"><strong>Caspar David Friedrich</strong></a> painted Wanderer above the Sea of Fog around <strong>1818</strong>, depicting a man standing on a rocky precipice overlooking a fog-filled valley. The figure, seen from behind, wears a dark green coat and holds a walking stick. Mountain peaks emerge from the mist like islands in a white sea.</p>

<p>The painting epitomizes German <strong>Romanticism's</strong> fascination with sublime nature and human insignificance before it. Friedrich used the <strong>Rückenfigur</strong> technique, showing figures from behind so viewers share their perspective. We don't see the wanderer's face, allowing us to project ourselves into his contemplation of the vast landscape.</p>

<p>The setting likely combines several locations in <strong>Saxony and Bohemia</strong> that Friedrich sketched during his travels. The wanderer may represent a specific person or serve as a universal symbol of humanity confronting nature and infinity. The painting hangs at the <a href="/apps/masterpieces/museum/hamburger-kunsthalle-hamburg-germany"><strong>Hamburger Kunsthalle</strong></a> in Germany, where it remains the museum's most famous work.</p>`,
    faqs: [
      {
        question: "Who is the wanderer?",
        answer: "Unknown. Some suggest a <strong>Saxon forestry official</strong> who died in the Napoleonic Wars. Others see him as a universal symbol of humanity contemplating nature's sublimity."
      },
      {
        question: "What is Rückenfigur?",
        answer: "A technique showing figures <strong>from behind</strong>, facing away from the viewer. <a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> used it so viewers share the figure's perspective and emotional experience."
      },
      {
        question: "Where can I see this painting?",
        answer: "At the <a href=\"/apps/masterpieces/museum/hamburger-kunsthalle-hamburg-germany\"><strong>Hamburger Kunsthalle</strong></a> in Hamburg, Germany. It's the museum's most iconic work and a symbol of German <strong>Romanticism</strong>."
      },
      {
        question: "Is the landscape a real place?",
        answer: "Friedrich <strong>combined multiple locations</strong> from his sketches in Saxony and Bohemia. The composite creates an idealized sublime landscape rather than depicting one specific view."
      }
    ]
  },
  {
    slug: 'irises-van-gogh',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted Irises in May <strong>1889</strong>, just days after entering the Saint-Paul-de-Mausole asylum in Saint-Rémy-de-Provence. He found the subject in the asylum's garden, calling the painting a <strong>"lightning conductor for my illness"</strong> as he threw himself into work to maintain his sanity.</p>

<p>The composition shows iris flowers filling the canvas with <strong>bold blue-purple blooms</strong> against orange marigolds, demonstrating Van Gogh's mastery of complementary colors. One white iris stands apart from the others, leading to interpretations about isolation and individuality. The thick, rhythmic brushstrokes give the flowers dynamic energy.</p>

<p>Van Gogh's brother Theo exhibited Irises at the Salon des Indépendants in September 1889, where it received praise. After passing through several collections, it sold at Sotheby's in 1987 for <strong>$53.9 million</strong>, then a record price for any painting. The <a href="/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-usa"><strong>Getty Museum</strong></a> in Los Angeles acquired it in 1990.</p>`,
    faqs: [
      {
        question: "When did Van Gogh paint Irises?",
        answer: "In <strong>May 1889</strong>, within his first week at the Saint-Rémy asylum. <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted it in the asylum garden as therapy for his mental illness."
      },
      {
        question: "What does the white iris symbolize?",
        answer: "Scholars suggest it represents <strong>Van Gogh himself</strong>, standing apart from the group. He often felt isolated, and the single white flower among purples may reflect that loneliness."
      },
      {
        question: "Where can I see Irises?",
        answer: "At the <a href=\"/apps/masterpieces/museum/j-paul-getty-museum-los-angeles-usa\"><strong>Getty Museum</strong></a> in Los Angeles. It's displayed in the West Pavilion galleries dedicated to Impressionist and Post-Impressionist art."
      },
      {
        question: "How much did it sell for?",
        answer: "<strong>$53.9 million</strong> at Sotheby's in 1987, then a world record. The buyer defaulted, and the Getty acquired it in 1990 for an undisclosed sum."
      }
    ]
  },
  {
    slug: 'bal-du-moulin-de-la-galette',
    description: `<p><a href="/apps/masterpieces/artist/pierre-auguste-renoir"><strong>Pierre-Auguste Renoir</strong></a> painted Bal du moulin de la Galette in <strong>1876</strong>, capturing a Sunday afternoon dance at a popular outdoor venue in Montmartre. The scene shows Parisians dancing, drinking, and socializing under acacia trees, with <strong>dappled sunlight</strong> filtering through the leaves and creating patterns on figures and floor.</p>

<p>Renoir worked on the large canvas partly outdoors, having friends carry it to the site daily. He depicted actual friends and models among the crowd, including painter Georges Rivière at the foreground table. The painting demonstrates <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism's</strong></a> interest in modern leisure, fleeting light, and spontaneous moments.</p>

<p>The canvas measures over two meters wide, ambitious for an outdoor scene. Renoir exhibited it at the third Impressionist exhibition in 1877, where critics praised its joyful atmosphere. It now hangs at the <a href="/apps/masterpieces/museum/musee-dorsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris. A smaller version sold at Sotheby's in 1990 for <strong>$78.1 million</strong>.</p>`,
    faqs: [
      {
        question: "What was the Moulin de la Galette?",
        answer: "A <strong>popular dance hall and café</strong> in Montmartre, Paris. Working-class Parisians gathered there on Sundays to dance, drink, and socialize outdoors."
      },
      {
        question: "Did Renoir paint this outdoors?",
        answer: "Partly. <a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> had friends carry the large canvas to the site to capture natural light, though he finished details in his studio."
      },
      {
        question: "Where can I see this painting?",
        answer: "At the <a href=\"/apps/masterpieces/museum/musee-dorsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris. A smaller version exists in a private collection after selling for $78.1 million in 1990."
      },
      {
        question: "Who are the people in the painting?",
        answer: "Renoir's <strong>actual friends and models</strong>. Painter Georges Rivière sits at the foreground table. Others include artists, dancers, and local Montmartre residents."
      }
    ]
  },
  {
    slug: 'great-wave-off-kanagawa',
    description: `<p><a href="/apps/masterpieces/artist/katsushika-hokusai"><strong>Katsushika Hokusai</strong></a> created The Great Wave off Kanagawa around <strong>1831</strong> as part of his series Thirty-six Views of Mount Fuji. The woodblock print depicts a massive wave threatening boats near the coast while <strong>Mount Fuji</strong> appears small and serene in the background. The contrast between the violent sea and distant mountain creates dramatic tension.</p>

<p>Hokusai was about seventy when he made this print, and he considered his earlier work immature. The wave's <strong>claw-like foam</strong> and perfect curl have made it one of the most recognized images in world art. The composition influenced Western artists including Van Gogh, Whistler, and Debussy, who used it on the cover of his composition La Mer.</p>

<p>As a woodblock print, multiple impressions exist in museums worldwide. The original woodblocks are lost. Fine early impressions with strong colors and crisp lines are rare and valuable. Major examples can be seen at the <strong>Metropolitan Museum of Art</strong>, <strong>British Museum</strong>, and <strong>Art Institute of Chicago</strong>, among many other institutions.</p>`,
    faqs: [
      {
        question: "Is this a painting or a print?",
        answer: "A <strong>woodblock print</strong> (ukiyo-e), not a painting. Multiple impressions were made from carved wooden blocks. Fine early examples with strong colors are highly prized."
      },
      {
        question: "What's the significance of Mount Fuji?",
        answer: "Mount Fuji represents <strong>eternal calm</strong> contrasted with the wave's violence. The series title is Thirty-six Views of Mount Fuji, making the mountain the true subject despite appearing small."
      },
      {
        question: "Where can I see The Great Wave?",
        answer: "Many museums have impressions, including the <strong>Metropolitan Museum of Art</strong>, British Museum, and Art Institute of Chicago. As a print, no single \"original\" exists."
      },
      {
        question: "How old was Hokusai when he made this?",
        answer: "About <strong>seventy years old</strong>. <a href=\"/apps/masterpieces/artist/katsushika-hokusai\"><strong>Hokusai</strong></a> said he only began understanding art at sixty, and would become a great artist by one hundred (he lived to eighty-nine)."
      }
    ]
  },
  {
    slug: 'napoleon-crossing-the-alps',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted Napoleon Crossing the Alps between <strong>1801 and 1805</strong>, creating the definitive propaganda image of Napoleon Bonaparte. The general sits on a rearing horse atop the Great St. Bernard Pass, his cape billowing dramatically while he points forward toward Italy. The names of previous great commanders who crossed the Alps, Hannibal and Charlemagne, appear carved in rocks below.</p>

<p>In reality, Napoleon crossed on a mule in calm weather, but he commissioned David to show him <strong>"calm on a fiery steed."</strong> David painted five versions for Napoleon to place in royal palaces across Europe. Each varies slightly in the color of Napoleon's cloak and the horse's coloring.</p>

<p>The painting exemplifies <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> heroic portraiture, with idealized anatomy and theatrical composition. The original version hangs at the <strong>Château de Malmaison</strong> near Paris. Other versions are at Versailles, the Belvedere in Vienna, the Charlottenburg Palace in Berlin, and the Château de Versailles.</p>`,
    faqs: [
      {
        question: "Is this how Napoleon actually crossed?",
        answer: "No. Napoleon rode a <strong>mule in good weather</strong>. He told <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> to paint him \"calm on a fiery steed,\" creating propaganda rather than historical record."
      },
      {
        question: "Why are there multiple versions?",
        answer: "Napoleon commissioned <strong>five versions</strong> to hang in palaces across Europe. Each varies slightly in cape and horse colors. All were painted between 1801 and 1805."
      },
      {
        question: "What names are carved in the rocks?",
        answer: "<strong>BONAPARTE, HANNIBAL, KAROLVS MAGNVS</strong> (Charlemagne). Napoleon placed himself among history's great commanders who crossed the Alps."
      },
      {
        question: "Where can I see the paintings?",
        answer: "Versions exist at <strong>Château de Malmaison</strong>, Versailles, Vienna's Belvedere, and Berlin's Charlottenburg Palace. The first version is considered the finest."
      }
    ]
  },
  {
    slug: 'raft-of-the-medusa',
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted The Raft of the Medusa in <strong>1818-1819</strong>, depicting survivors of the French naval frigate Méduse, which ran aground off Mauritania in 1816. The captain abandoned 147 crew members on a hastily built raft. After <strong>thirteen days of starvation, madness, and cannibalism</strong>, only fifteen survived.</p>

<p>Géricault researched obsessively, interviewing survivors, building a scale model of the raft, and studying corpses in morgues. The massive canvas, nearly five meters tall, shows survivors spotting a rescue ship on the horizon. The <strong>pyramidal composition</strong> rises from death at lower left to desperate hope at upper right, where a man waves frantically.</p>

<p>The painting caused scandal at the 1819 Salon because it implicitly criticized the incompetent royalist captain. Its raw emotion and contemporary subject matter influenced the emerging <a href="/apps/masterpieces/movement/romanticism"><strong>Romantic movement</strong></a>. It hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, dominating an entire wall.</p>`,
    faqs: [
      {
        question: "What happened to the Méduse survivors?",
        answer: "The captain abandoned <strong>147 people</strong> on a raft while he escaped in lifeboats. After 13 days of starvation and cannibalism, only 15 survived. The scandal embarrassed the French government."
      },
      {
        question: "How did Géricault research the painting?",
        answer: "<a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault</strong></a> interviewed survivors, built a <strong>scale raft model</strong>, and studied corpses and severed limbs in morgues to depict death accurately."
      },
      {
        question: "Why was the painting controversial?",
        answer: "It implicitly criticized the <strong>royalist government</strong> whose incompetent captain caused the disaster. The realistic horror also shocked viewers used to idealized history paintings."
      },
      {
        question: "Where can I see this painting?",
        answer: "At the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. Its massive size (491 × 716 cm) requires an entire wall, making it impossible to miss."
      }
    ]
  },
  {
    slug: 'oath-of-the-horatii',
    description: `<p><a href="/apps/masterpieces/artist/jacques-louis-david"><strong>Jacques-Louis David</strong></a> painted The Oath of the Horatii in <strong>1784</strong>, depicting a Roman legend in which three brothers pledge to fight for Rome against three champions from rival Alba Longa. Their father holds three swords as the sons reach forward to swear their oath. Women weep on the right, knowing that blood ties connect both families.</p>

<p>David created the painting in Rome, deliberately adopting a severe <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> style to reject the frivolity of Rococo art. The stark architectural setting, rigid geometric composition, and <strong>restrained palette</strong> emphasized civic virtue and masculine duty. It caused a sensation at the 1785 Salon.</p>

<p>Though painted before the French Revolution, the themes of patriotic sacrifice and republican virtue made it a symbol of revolutionary ideals. David later became the revolution's official painter. The work hangs at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, where it remains a landmark of Neoclassical painting and a turning point in European art.</p>`,
    faqs: [
      {
        question: "What story does this depict?",
        answer: "A Roman legend: <strong>three Horatii brothers</strong> swear to fight three Curiatii brothers from rival Alba Longa. The oath prioritizes civic duty over family ties."
      },
      {
        question: "Why are the women crying?",
        answer: "One sister is <strong>engaged to a Curiatii</strong>; one brother's wife is a Curiatii. The women are caught between their birth families and their Roman family, facing loss regardless of outcome."
      },
      {
        question: "How did this influence the French Revolution?",
        answer: "Its themes of <strong>republican sacrifice</strong> resonated with revolutionaries, though <a href=\"/apps/masterpieces/artist/jacques-louis-david\"><strong>David</strong></a> painted it five years before 1789. He later became the Revolution's official artist."
      },
      {
        question: "Where is The Oath of the Horatii?",
        answer: "At the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris. It's displayed among other <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> masterworks in the French painting galleries."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Masterpiece Descriptions ===\n');

  let updated = 0;
  let skipped = 0;

  for (const update of artworkUpdates) {
    const artwork = await prisma.artwork.findFirst({
      where: { slug: update.slug }
    });

    if (!artwork) {
      console.log(`Skipped (not found): ${update.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: artwork.id },
      data: {
        description: update.description,
        faqs: update.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${artwork.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
