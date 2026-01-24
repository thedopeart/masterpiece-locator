const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'the-potato-eaters',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted The Potato Eaters in April <strong>1885</strong> in Nuenen, Netherlands, considering it his first major work. Five peasants share a meager meal of potatoes under a dim oil lamp. Their <strong>coarse features and gnarled hands</strong> reflect the hard labor that earned their simple food.</p>

<p>Van Gogh deliberately made the figures rough and unglamorous, writing to his brother Theo that he wanted to show peasants "in all their coarseness" rather than sentimentalized. The dark <strong>earth-toned palette</strong> reinforces the connection between these workers and the soil they till. He repainted the composition multiple times before finalizing this version.</p>

<p>Contemporary critics found the painting too dark and the figures too ugly. Van Gogh defended his vision, arguing that honest peasant life deserved honest depiction. The work marked his transition from drawing to serious painting. It hangs at the <a href="/apps/masterpieces/museum/van-gogh-museum-amsterdam"><strong>Van Gogh Museum</strong></a> in Amsterdam, representing his early Dutch period before he discovered color in Paris.</p>`,
    faqs: [
      {
        question: "Why did Van Gogh make the peasants look so rough?",
        answer: "He wanted to show <strong>authentic working-class life</strong>, not romanticized peasants. <a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> wrote that he painted them eating potatoes with the same hands that dug the earth."
      },
      {
        question: "Why is the painting so dark?",
        answer: "The <strong>earth-toned palette</strong> connects the peasants to the soil. Van Gogh hadn't yet encountered Impressionism; his palette would brighten dramatically after moving to Paris in 1886."
      },
      {
        question: "Where can I see The Potato Eaters?",
        answer: "At the <a href=\"/apps/masterpieces/museum/van-gogh-museum-amsterdam\"><strong>Van Gogh Museum</strong></a> in Amsterdam. It's displayed with other early Dutch works from his Nuenen period."
      },
      {
        question: "Did people like this painting at the time?",
        answer: "No. Critics found the figures <strong>too ugly</strong> and the technique crude. Van Gogh defended the work, but it received little recognition during his lifetime."
      }
    ]
  },
  {
    slug: 'self-portrait-bandaged-ear',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted Self-Portrait with Bandaged Ear in January <strong>1889</strong>, weeks after severing part of his left ear during a mental breakdown in Arles. He wears a fur cap and green coat, a bandage covering his right ear (reversed due to painting in a mirror). A <strong>Japanese print</strong> hangs on the wall behind him, reflecting his admiration for ukiyo-e art.</p>

<p>The incident followed a violent confrontation with Paul Gauguin, who had been staying with Van Gogh. Van Gogh delivered the severed ear to a woman at a local brothel, leading to his hospitalization. Despite the trauma, he returned to painting almost immediately, creating this <strong>remarkably calm self-examination</strong>.</p>

<p>Two versions exist: this one at the <a href="/apps/masterpieces/museum/courtauld-gallery"><strong>Courtauld Gallery</strong></a> in London shows him in a fur cap, while another at a private collection shows him with a pipe. Both demonstrate his determination to work through mental illness. The painting remains one of art history's most <strong>recognizable images of artistic suffering</strong>.</p>`,
    faqs: [
      {
        question: "Why did Van Gogh cut off his ear?",
        answer: "During a <strong>mental breakdown</strong> after a confrontation with Gauguin. The exact cause remains debated: some historians suggest Gauguin may have cut it during a fight."
      },
      {
        question: "Why does the bandage appear on his right ear?",
        answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> painted using a <strong>mirror</strong>, which reverses the image. The injury was actually to his left ear."
      },
      {
        question: "Where can I see this painting?",
        answer: "At the <a href=\"/apps/masterpieces/museum/courtauld-gallery\"><strong>Courtauld Gallery</strong></a> in London. Another version with a pipe exists in a private collection."
      },
      {
        question: "What is the print in the background?",
        answer: "A <strong>Japanese ukiyo-e print</strong>. Van Gogh collected Japanese art and incorporated its flat color and bold outlines into his own style."
      }
    ]
  },
  {
    slug: 'wheatfield-with-crows',
    description: `<p><a href="/apps/masterpieces/artist/vincent-van-gogh"><strong>Vincent van Gogh</strong></a> painted Wheatfield with Crows in July <strong>1890</strong>, one of his final works before his death later that month. A <strong>turbulent sky</strong> of deep blue and black looms over golden wheat, while crows fly across the scene. Three paths diverge through the field, leading nowhere visible.</p>

<p>The painting's ominous atmosphere has led many to interpret it as Van Gogh's suicide note, though art historians debate this reading. He actually painted several other works after this one. The <strong>violent brushwork</strong> and threatening sky do reflect his mental state during his final weeks, but the golden wheat also suggests summer abundance.</p>

<p>Van Gogh wrote to Theo about paintings of wheat fields under troubled skies expressing "sadness and extreme loneliness." Whether or not he intended it as a farewell, the image has become inseparable from the tragedy of his death. It hangs at the <a href="/apps/masterpieces/museum/van-gogh-museum-amsterdam"><strong>Van Gogh Museum</strong></a> in Amsterdam.</p>`,
    faqs: [
      {
        question: "Was this Van Gogh's last painting?",
        answer: "Probably not. He painted <strong>several other works</strong> after this one. The myth of it being his final painting adds to its emotional power but isn't historically accurate."
      },
      {
        question: "What do the crows symbolize?",
        answer: "Viewers often interpret them as <strong>omens of death</strong>. Van Gogh may simply have painted what he saw, but the black birds against the stormy sky create undeniable menace."
      },
      {
        question: "Where can I see Wheatfield with Crows?",
        answer: "At the <a href=\"/apps/masterpieces/museum/van-gogh-museum-amsterdam\"><strong>Van Gogh Museum</strong></a> in Amsterdam. It's displayed among his final Auvers-sur-Oise paintings."
      },
      {
        question: "What happened to Van Gogh?",
        answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> shot himself on <strong>July 27, 1890</strong>, dying two days later. He was 37. His brother Theo died six months afterward."
      }
    ]
  },
  {
    slug: 'bar-at-folies-bergere',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted A Bar at the Folies-Bergère in <strong>1882</strong>, his final major work before dying the following year. A barmaid named Suzon stands behind a marble counter laden with bottles, oranges, and flowers. Behind her, a mirror reflects the crowded café-concert and a gentleman in a top hat apparently speaking to her.</p>

<p>The reflection creates deliberate spatial confusion: the barmaid's reflection appears too far right, and the customer seems to stand where the viewer should be. Manet may have intended this <strong>impossible geometry</strong> to suggest the barmaid's alienation from her environment. Her expression is famously unreadable, detached despite the surrounding revelry.</p>

<p>Manet painted it while suffering from locomotor ataxia, working from sketches made at the actual Folies-Bergère. The painting debuted at the 1882 Salon, receiving mixed reviews. It now hangs at the <a href="/apps/masterpieces/museum/courtauld-gallery"><strong>Courtauld Gallery</strong></a> in London, considered both Manet's testament and a summation of <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionist</strong></a> modernity.</p>`,
    faqs: [
      {
        question: "Why is the reflection wrong?",
        answer: "The mirror shows the barmaid from a different angle than we see her. <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet</strong></a> likely created this <strong>deliberate impossibility</strong> to suggest psychological disconnection or multiple viewpoints."
      },
      {
        question: "Who is the woman?",
        answer: "A real barmaid named <strong>Suzon</strong> who worked at the Folies-Bergère. Manet painted her in his studio rather than at the actual venue."
      },
      {
        question: "Where can I see this painting?",
        answer: "At the <a href=\"/apps/masterpieces/museum/courtauld-gallery\"><strong>Courtauld Gallery</strong></a> in London. It's one of the gallery's most celebrated works."
      },
      {
        question: "Was this Manet's last painting?",
        answer: "His last <strong>major work</strong>. Manet died in April 1883, a year after completing it. He was 51, suffering from syphilis complications."
      }
    ]
  },
  {
    slug: 'dejeuner-sur-lherbe',
    description: `<p><a href="/apps/masterpieces/artist/edouard-manet"><strong>Édouard Manet</strong></a> painted Le Déjeuner sur l'herbe (Luncheon on the Grass) in <strong>1863</strong>, causing immediate scandal at the Salon des Refusés. A nude woman sits casually with two fully clothed men in modern dress, while another woman bathes in the background. The <strong>direct gaze</strong> of the nude, modeled by Victorine Meurent, confronts viewers with uncomfortable frankness.</p>

<p>Classical paintings showed nudes as goddesses or allegories; Manet presented a contemporary Parisian woman undressed in a public park. The composition quotes Raphael and Giorgione, but the modern clothing transforms mythological distance into <strong>provocative immediacy</strong>. Critics called it indecent, vulgar, and incomprehensible.</p>

<p>Emperor Napoleon III himself declared it "an offense against modesty." Yet the painting launched modern art's break with academic tradition. Manet's flat lighting, visible brushwork, and refusal to idealize predicted <a href="/apps/masterpieces/movement/impressionism"><strong>Impressionism</strong></a>. It hangs at the <a href="/apps/masterpieces/museum/musee-dorsay-paris-france"><strong>Musée d'Orsay</strong></a> in Paris, now celebrated as revolutionary.</p>`,
    faqs: [
      {
        question: "Why was this painting so scandalous?",
        answer: "The nude woman sits with <strong>clothed modern men</strong>, not mythological figures. Her direct stare implicates the viewer. Critics found this contemporary context indecent."
      },
      {
        question: "What is the Salon des Refusés?",
        answer: "An 1863 exhibition of works <strong>rejected by the official Salon</strong>. Napoleon III ordered it to let the public judge. <a href=\"/apps/masterpieces/artist/edouard-manet\"><strong>Manet's</strong></a> painting became its most notorious exhibit."
      },
      {
        question: "Where can I see Le Déjeuner sur l'herbe?",
        answer: "At the <a href=\"/apps/masterpieces/museum/musee-dorsay-paris-france\"><strong>Musée d'Orsay</strong></a> in Paris, in the galleries dedicated to early modern art and the origins of Impressionism."
      },
      {
        question: "Who is the nude woman?",
        answer: "<strong>Victorine Meurent</strong>, Manet's favorite model. She also posed for Olympia. She later became a painter herself, exhibiting at the Salon."
      }
    ]
  },
  {
    slug: 'portrait-adele-bloch-bauer',
    description: `<p><a href="/apps/masterpieces/artist/gustav-klimt"><strong>Gustav Klimt</strong></a> painted Portrait of Adele Bloch-Bauer I in <strong>1907</strong>, creating what became known as "The Woman in Gold." Adele sits against an ornate golden background, her dress merging with abstract patterns of eyes, spirals, and geometric shapes. Only her face and hands emerge naturalistically from the <strong>shimmering gold leaf</strong>.</p>

<p>Ferdinand Bloch-Bauer commissioned Klimt to paint his wife, and the artist worked on it for three years. The Byzantine-influenced gold technique reached its peak here, part of Klimt's "Golden Phase." Adele appears again in a <strong>1912 portrait</strong>, but this first version became far more famous.</p>

<p>Nazis seized the painting in 1938. After decades of legal battle, Maria Altmann, Adele's niece, recovered it from Austria in 2006. Ronald Lauder purchased it for <strong>$135 million</strong>, then a record price. It now anchors the <a href="/apps/masterpieces/museum/neue-galerie-new-york-usa"><strong>Neue Galerie</strong></a> in New York, the museum's most treasured possession.</p>`,
    faqs: [
      {
        question: "Why is it called 'The Woman in Gold'?",
        answer: "The extensive <strong>gold leaf</strong> background and dress gave it this nickname. A 2015 film about its recovery used this title, making it more familiar than the formal name."
      },
      {
        question: "What happened to the painting during WWII?",
        answer: "<strong>Nazis confiscated it</strong> from the Bloch-Bauer family in 1938. Austria kept it for decades until Maria Altmann won a legal battle in 2006 to recover her family's property."
      },
      {
        question: "Where can I see this painting?",
        answer: "At the <a href=\"/apps/masterpieces/museum/neue-galerie-new-york-usa\"><strong>Neue Galerie</strong></a> in New York City. It's the museum's centerpiece, displayed in a dedicated gallery."
      },
      {
        question: "How much did it sell for?",
        answer: "<strong>$135 million</strong> in 2006, then a record for any painting. Ronald Lauder bought it for his museum immediately after Maria Altmann recovered it from Austria."
      }
    ]
  },
  {
    slug: 'the-dance-matisse',
    description: `<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> painted The Dance in <strong>1910</strong> for Russian collector Sergei Shchukin's Moscow mansion. Five nude figures join hands in a <strong>circular dance</strong> against a simplified landscape of blue sky and green hill. The flat, intense colors and rhythmic movement epitomize Matisse's Fauve style.</p>

<p>The painting represents Matisse's move toward radical simplification. He reduced the human form to essential curves, eliminated modeling and perspective, and limited his palette to three bold colors: <strong>vermillion, blue, and green</strong>. The figures seem to pulse with primitive energy, their dance suggesting primal ritual.</p>

<p>Shchukin initially hesitated because the figures' nudity might shock Moscow society, but ultimately installed it in his stairwell alongside its companion piece, Music. After the Russian Revolution, both paintings entered state collections. The Dance now hangs at the <a href="/apps/masterpieces/museum/hermitage-museum-st-petersburg-russia"><strong>Hermitage</strong></a> in St. Petersburg.</p>`,
    faqs: [
      {
        question: "Why only three colors?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> sought <strong>maximum expression through simplification</strong>. Vermillion for the bodies, blue for the sky, green for the earth. The limited palette intensifies each color's emotional impact."
      },
      {
        question: "Who commissioned this painting?",
        answer: "<strong>Sergei Shchukin</strong>, a Russian textile merchant and art collector. He commissioned The Dance and Music as decorative panels for his Moscow mansion's staircase."
      },
      {
        question: "Where can I see The Dance?",
        answer: "At the <a href=\"/apps/masterpieces/museum/hermitage-museum-st-petersburg-russia\"><strong>Hermitage</strong></a> in St. Petersburg, Russia. An earlier version from 1909 is at MoMA in New York."
      },
      {
        question: "Is there another version?",
        answer: "Yes. <strong>Matisse painted a study in 1909</strong> (at MoMA) before creating the larger 1910 version for Shchukin. The final version has more saturated colors."
      }
    ]
  },
  {
    slug: 'blue-nude-matisse',
    description: `<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> created Blue Nude II in <strong>1952</strong> using his paper cut-out technique, developed after illness confined him to bed. He called this method <strong>"painting with scissors,"</strong> cutting shapes from painted paper and arranging them into compositions. The seated nude emerges from four pieces of blue gouache paper against white.</p>

<p>The figure recalls his earlier painted nudes but achieves new abstraction through the cut-out medium. Matisse worked on the Blue Nude series at age 82, finding the technique liberated him from the physical demands of painting. The <strong>simplified forms</strong> distill decades of studying the human body.</p>

<p>Blue Nude II is part of a series of four blue nudes Matisse created in 1952. Each explores the same pose in different configurations. This version resides at the <strong>Centre Pompidou</strong> in Paris, representing the culmination of Matisse's lifelong pursuit of color and form. The cut-outs, once dismissed as minor works, are now considered among his greatest achievements.</p>`,
    faqs: [
      {
        question: "What are Matisse's cut-outs?",
        answer: "A technique <a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> called <strong>\"painting with scissors.\"</strong> He cut shapes from paper painted with gouache, then arranged them into compositions. Illness made this easier than traditional painting."
      },
      {
        question: "How old was Matisse when he made this?",
        answer: "<strong>82 years old</strong>. The cut-out technique allowed him to continue creating despite health problems that made standing at an easel impossible."
      },
      {
        question: "How many Blue Nudes are there?",
        answer: "<strong>Four in the series</strong>, all created in 1952. Each shows a seated nude in similar poses, exploring variations in the arrangement of cut paper shapes."
      },
      {
        question: "Where can I see Blue Nude II?",
        answer: "At the <strong>Centre Pompidou</strong> in Paris. Other works from the Blue Nude series are in different museum collections worldwide."
      }
    ]
  },
  {
    slug: 'woman-with-a-hat-matisse',
    description: `<p><a href="/apps/masterpieces/artist/henri-matisse"><strong>Henri Matisse</strong></a> painted Woman with a Hat in <strong>1905</strong>, exhibiting it at the Salon d'Automne where it helped launch <a href="/apps/masterpieces/movement/fauvism"><strong>Fauvism</strong></a>. His wife Amélie sits in a conventional portrait pose, but Matisse rendered her face and hat in <strong>wild, non-naturalistic colors</strong>: green shadows, orange highlights, a multicolored hat.</p>

<p>Critics reacted with outrage. One called the Fauvist room a "cage of wild beasts" (fauves), giving the movement its name. The seemingly arbitrary colors shocked viewers accustomed to naturalistic flesh tones. Yet Matisse insisted he was painting <strong>emotional truth</strong> rather than optical reality.</p>

<p>Gertrude and Leo Stein purchased the painting directly from the exhibition, an early sign of the family's influential collecting. It remained with the Steins until entering American collections. The painting now belongs to the <strong>San Francisco Museum of Modern Art</strong>, a landmark of early modern art's liberation of color from description.</p>`,
    faqs: [
      {
        question: "Why are the colors so strange?",
        answer: "<a href=\"/apps/masterpieces/artist/henri-matisse\"><strong>Matisse</strong></a> used color for <strong>emotional expression</strong>, not realistic description. The green and orange shadows on Amélie's face convey feeling rather than observed light."
      },
      {
        question: "What is Fauvism?",
        answer: "A movement named after critics called these artists <strong>\"wild beasts\" (fauves)</strong> for their aggressive, non-naturalistic colors. Woman with a Hat was a defining work of the 1905 Salon d'Automne exhibition."
      },
      {
        question: "Who bought this painting originally?",
        answer: "<strong>Gertrude and Leo Stein</strong>, American expatriates and influential collectors in Paris. Their purchase signaled early support for avant-garde art."
      },
      {
        question: "Where can I see Woman with a Hat?",
        answer: "At the <strong>San Francisco Museum of Modern Art</strong> (SFMOMA). It's one of the museum's most important early modern paintings."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Masterpiece Descriptions Batch 2 ===\n');

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
