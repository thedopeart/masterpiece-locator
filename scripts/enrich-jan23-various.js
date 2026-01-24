const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworksToUpdate = [
  {
    slug: "artemisia-gentileschi-selfportrait-as-a-female-martyr",
    description: `<p><a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> painted this self-portrait around 1615, depicting herself as Saint Catherine of Alexandria. She was twenty-two, recently relocated to Florence after the trauma of a public rape trial in Rome. The painting shows her holding a palm frond, the traditional emblem of martyrdom, dressed in a red garment symbolizing passion and sacrifice. Her gaze is direct, unbroken, utterly composed.</p>

<p>The choice of Saint Catherine was deliberate. Catherine was an early Christian martyr whose theological skills allegedly defeated fifty of the Roman emperor's philosophers in debate. She was tortured on a spiked wheel and beheaded when the wheel miraculously shattered. Gentileschi had endured her own ordeal: at seventeen, her father's colleague Agostino Tassi raped her, then her truthfulness was tested through torture during the seven-month trial. Tassi was convicted but never served his sentence. She fled Rome with a hastily arranged marriage.</p>

<p>This <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>self-portrait</strong></a> as martyr wasn't a statement of victimhood. Catherine and Gentileschi both survived their tormentors, their identities intact. The painting predates by centuries the kind of role-playing self-imagery later artists like Cindy Sherman would explore. It remains in a <strong>private collection</strong>, a fierce declaration of strength from a woman who refused to let her story be defined by men.</p>`,
    faqs: [
      {
        question: "Where can I see Self-Portrait as a Female Martyr?",
        answer: "This painting is currently held in a <strong>private collection</strong> and is not on permanent public display. <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Artemisia Gentileschi</strong></a> painted it around 1615, shortly after relocating to Florence following her rape trial in Rome."
      },
      {
        question: "Who was Saint Catherine of Alexandria?",
        answer: "<strong>Saint Catherine</strong> was an early Christian martyr known for defeating fifty philosophers in religious debate. She was tortured on a spiked wheel (later called the \"Catherine wheel\") and beheaded. <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi</strong></a> identified with her intellectual strength and survival of male persecution."
      },
      {
        question: "What does the palm frond represent?",
        answer: "The <strong>palm frond</strong> is the traditional Christian symbol of martyrdom and spiritual victory. Without it, this painting would read as an ordinary self-portrait. By including it, <a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi</strong></a> transforms herself into Saint Catherine, aligning her own suffering with the saint's triumph."
      },
      {
        question: "Why is this painting significant to Gentileschi's biography?",
        answer: "<a href=\"/apps/masterpieces/artist/artemisia-gentileschi\"><strong>Gentileschi</strong></a> created this self-portrait after surviving a <strong>rape trial</strong> where she was tortured to verify her testimony. Depicting herself as a martyred saint who defeated her male persecutors was a powerful reclamation of her own narrative and professional reputation."
      }
    ]
  },
  {
    slug: "the-bookworm-spitzweg",
    description: `<p><a href="/apps/masterpieces/artist/carl-spitzweg"><strong>Carl Spitzweg</strong></a> painted The Bookworm around 1850, creating what would become his most recognized work. An elderly scholar perches atop a library ladder in a grand Baroque space, several large volumes jammed under his arms and between his legs as he squints at yet another book. He's in the Metaphysics section, a detail that underlines his complete disconnection from practical concerns. Soft golden light streams in from an unseen window, but the old man cares about that light only insofar as it lets him read.</p>

<p>The German title is "Der Bücherwurm," a term that was derisive in the 19th century, describing someone who had "eaten his way through books" while remaining laughably out of touch with reality. Spitzweg painted during the <strong>Biedermeier period</strong>, an era of political conservatism and domestic focus following the Napoleonic Wars. The painting gently mocks that introspective mood while embodying it. The scholar couldn't care less about revolutions or world affairs. He has his books.</p>

<p>Spitzweg produced at least three versions of this composition between 1850 and 1884. The earliest, originally titled "The Librarian," now belongs to the <a href="/apps/masterpieces/museum/museum-georg-schafer"><strong>Museum Georg Schäfer</strong></a> in Schweinfurt. Norman Rockwell later referenced the image directly for a 1926 Saturday Evening Post cover, proving the <strong>bookworm</strong> had become a universal type.</p>`,
    faqs: [
      {
        question: "Where can I see The Bookworm?",
        answer: "The original version (c. 1850) is displayed at the <a href=\"/apps/masterpieces/museum/museum-georg-schafer\"><strong>Museum Georg Schäfer</strong></a> in Schweinfurt, Germany. <a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Spitzweg</strong></a> painted at least three versions. Another is at the Grohmann Museum in Milwaukee."
      },
      {
        question: "What is the Biedermeier style?",
        answer: "<strong>Biedermeier</strong> describes Central European art and culture from roughly 1815 to 1848, between the Napoleonic Wars and the revolutions of 1848. <a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Spitzweg's</strong></a> gentle, humorous genre scenes of eccentric characters in domestic settings perfectly capture this period's inward-looking mood."
      },
      {
        question: "Is The Bookworm meant to be humorous?",
        answer: "Yes. <a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Spitzweg</strong></a> affectionately satirizes the <strong>scholarly type</strong> so absorbed in books that he's oblivious to his precarious position on the ladder and the grand Baroque surroundings. The term \"bookworm\" was mildly derisive in 19th-century German, suggesting impractical intellectualism."
      },
      {
        question: "Why is the scholar in the Metaphysics section?",
        answer: "The visible label \"Metaphysik\" suggests this vast library contains specialized philosophical texts, underscoring the scholar's <strong>otherworldliness</strong>. <a href=\"/apps/masterpieces/artist/carl-spitzweg\"><strong>Spitzweg</strong></a> chose the most abstract possible subject matter to emphasize how disconnected his bookworm is from everyday reality."
      }
    ]
  },
  {
    slug: "the-charging-chasseur",
    description: `<p><a href="/apps/masterpieces/artist/theodore-gericault"><strong>Théodore Géricault</strong></a> painted The Charging Chasseur in 1812, his debut at the Paris Salon at just twenty-one years old. The enormous canvas, measuring 349 by 266 centimeters, shows an officer of Napoleon's Imperial Horse Guards on a rearing mount, saber drawn, twisting toward an unseen enemy. The chasseurs were the elite of French cavalry, tasked with protecting the Emperor himself. Géricault intended the painting as a tribute to French military glory at the height of Napoleon's empire.</p>

<p>The composition borrows from Rubens and echoes Jacques-Louis David's famous Napoleon Crossing the Alps, but Géricault's handling is far more visceral. The paint is applied with aggressive energy, the diagonal arrangement creates dramatic instability, and the horse appears to rear away from danger rather than charge toward victory. The work won a gold medal, but within two years, Napoleon's empire had collapsed. At the 1814 Salon, Géricault exhibited it alongside a pendant piece, The Wounded Cuirassier, showing a defeated soldier retreating from battle.</p>

<p>The subject was actually Géricault's friend Alexandre Dieudonne, though the original title concealed his identity. The painting now hangs in the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>, an early masterpiece of <strong>French Romanticism</strong> that announced a major new talent to the art world.</p>`,
    faqs: [
      {
        question: "Where can I see The Charging Chasseur?",
        answer: "This painting is displayed at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris (Room 700, Denon wing). The canvas is massive, measuring 349 by 266 centimeters, and was <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault's</strong></a> first exhibited work at the Paris Salon."
      },
      {
        question: "Who were the chasseurs of the Imperial Guard?",
        answer: "The <strong>horse chasseurs</strong> were Napoleon's elite cavalry unit, responsible for close protection of the Emperor. By depicting an officer from this prestigious force, <a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault</strong></a> paid tribute to French military power at the height of the Napoleonic Empire in 1812."
      },
      {
        question: "How old was Géricault when he painted this?",
        answer: "<a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault</strong></a> was just <strong>twenty-one years old</strong> when The Charging Chasseur appeared at the 1812 Salon. The painting won a gold medal and immediately established his reputation as a major new talent in French art."
      },
      {
        question: "What is the companion piece to this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/theodore-gericault\"><strong>Géricault</strong></a> painted <strong>The Wounded Cuirassier</strong> as a pendant, showing a defeated soldier retreating from battle. He exhibited both works together at the 1814 Salon, by which point Napoleon's empire had collapsed, giving the pairing a somber resonance."
      }
    ]
  },
  {
    slug: "gustave-courbet-the-desperate-man-selfportrait",
    description: `<p><a href="/apps/masterpieces/artist/gustave-courbet"><strong>Gustave Courbet</strong></a> painted The Desperate Man between 1843 and 1845, at twenty-four years old and still laboring to build his reputation in Paris. He stares out from a claustrophobic horizontal frame, eyes wild, hands tearing at his flowing dark hair. His white shirt is blousy, his smock blue, his forearm muscles tense with the grip on his own skull. There is no background, no escape, just this confrontation between artist and viewer that achieves an intensity rare in the history of art.</p>

<p>The painting remained in Courbet's studio until his death. He later wrote to his friend and patron Alfred Bruyas: "Through this laughing mask that you know me with, I hide the sorrow, the bitterness, and the sadness that grips the heart like a vampire from within." Whether this <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>self-portrait</strong></a> documents genuine despair or merely explores the pose of the <strong>tormented artist</strong> remains unknown. Probably both. Courbet had yet to develop the Realist manifesto that would define his mature work. This is pure Romantic anguish, rendered with technical skill that belies its claims of madness.</p>

<p>The painting spent decades in private hands before Qatar Museums acquired it in 2025. It went on display at the Musée d'Orsay that October, the first time it had been exhibited in France in seventeen years.</p>`,
    faqs: [
      {
        question: "Where can I see The Desperate Man?",
        answer: "The painting was acquired by <strong>Qatar Museums</strong> in 2025 and displayed at the Musée d'Orsay that year. For most of its history, this <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a> self-portrait remained in private collections after leaving the artist's studio upon his death."
      },
      {
        question: "Why did Courbet paint himself this way?",
        answer: "In 1843-1845, <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet</strong></a> was a young artist struggling for recognition in Paris. The <strong>desperate expression</strong> may reflect genuine frustration, or it may be a deliberate pose exploring the Romantic ideal of the tormented genius. Courbet later admitted hiding sorrow behind his public persona."
      },
      {
        question: "What style is this painting?",
        answer: "This early work belongs to <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet's</strong></a> <strong>Romantic period</strong>, before he developed the Realist style he became famous for. The intense emotion, dramatic self-presentation, and focus on individual psychological experience are characteristic of Romanticism."
      },
      {
        question: "Why is this self-portrait so famous?",
        answer: "The painting captures the archetype of the <strong>tormented artist</strong> with unusual directness. <a href=\"/apps/masterpieces/artist/gustave-courbet\"><strong>Courbet's</strong></a> wild-eyed stare and hair-clutching pose have made it an iconic image of artistic struggle, reproduced endlessly as a symbol of creative anguish and Romantic genius."
      }
    ]
  },
  {
    slug: "franz-von-stuck-lucifer",
    description: `<p><a href="/apps/masterpieces/artist/franz-von-stuck"><strong>Franz von Stuck</strong></a> painted Lucifer in 1890, creating one of the most haunting images in Symbolist art. The fallen angel sits alone in undefined darkness, his muscular body hunched forward, his face emerging from shadow with incandescent greenish eyes that seem to glow from within. There are no flames, no pitchfork, no screaming sinners. Just a solitary figure in the abyss, radiating defiance and loss.</p>

<p>Von Stuck was a founder of the Munich Secession and worked at the intersection of Symbolism and Art Nouveau. His approach to <a href="https://luxurywallart.com/collections/macabre-art" target="_blank" rel="noopener"><strong>dark subjects</strong></a> explored duality and contradiction: power and defeat, beauty and menace, divinity and damnation. Early critics described Lucifer's eyes as "appalling," and Prince Ferdinand of Bulgaria reported that his ministers made the sign of the cross when they first saw the canvas. Ferdinand eventually purchased it directly from von Stuck's Munich studio in 1891.</p>

<p>The painting measures 161 by 152.5 centimeters, executed in deep browns, blacks, and muted reds that create an oppressive atmosphere. Von Stuck painted multiple versions of this subject throughout his career. The original now belongs to the National Gallery for Foreign Art in Sofia, where those <strong>glowing eyes</strong> continue to unsettle viewers more than a century later.</p>`,
    faqs: [
      {
        question: "Where can I see Franz von Stuck's Lucifer?",
        answer: "The original 1890 painting is displayed at the <strong>National Gallery for Foreign Art</strong> in Sofia, Bulgaria (now in the Fund Gallery \"Square 500\"). Prince Ferdinand of Bulgaria purchased it from <a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>von Stuck's</strong></a> Munich studio in 1891."
      },
      {
        question: "Why do Lucifer's eyes glow green?",
        answer: "<a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Von Stuck</strong></a> painted the eyes with an <strong>incandescent greenish</strong> quality that makes them appear to emit light from darkness. Critics described them as \"appalling.\" The effect suggests both supernatural power and the envious longing for the heaven Lucifer lost."
      },
      {
        question: "What artistic movement does this represent?",
        answer: "Lucifer belongs to the <strong>Symbolist</strong> movement, which emphasized mood, emotion, and moral ambiguity over realistic depiction. <a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Von Stuck</strong></a> was also associated with Art Nouveau and the Munich Secession, blending decorative style with psychological depth."
      },
      {
        question: "How does this differ from traditional depictions of Satan?",
        answer: "Earlier Christian art showed <strong>Satan</strong> defeated and subjugated. <a href=\"/apps/masterpieces/artist/franz-von-stuck\"><strong>Von Stuck's</strong></a> Lucifer is powerful, defiant, and melancholy, sitting alone without flames or tormented souls. The focus is psychological rather than moralistic, reflecting Symbolist interest in ambiguity and the darker sides of human nature."
      }
    ]
  }
];

async function main() {
  console.log('Starting artwork enrichment...\n');

  let updated = 0;
  let errors = 0;

  for (const artwork of artworksToUpdate) {
    try {
      await prisma.artwork.update({
        where: { slug: artwork.slug },
        data: {
          description: artwork.description,
          faqs: artwork.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${artwork.slug}`);
      updated++;
    } catch (error) {
      console.error(`✗ Error updating ${artwork.slug}:`, error.message);
      errors++;
    }
  }

  console.log(`\nComplete! Updated: ${updated}, Errors: ${errors}`);
  await prisma.$disconnect();
}

main();
