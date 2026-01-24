const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkUpdates = [
  {
    slug: 'nu-couche-left-side-modigliani',
    description: `<p><a href="/artist/amedeo-modigliani"><strong>Amedeo Modigliani</strong></a> painted Nu Couché (sur le côté gauche) in 1917, the largest canvas of his entire career. Measuring nearly 58 inches across, this is the only reclining nude in which Modigliani captured the <strong>entire figure</strong> within the frame. The woman lies on her left side against warm red and ochre tones, her elongated body twisted with the artist's characteristic distortions.</p>
<p>The painting belongs to Modigliani's celebrated series of 22 reclining nudes created between 1916 and 1919. When first exhibited at Galerie Berthe Weill in Paris, police <strong>shut down the show</strong> on opening day, scandalized by the frank depiction of the female form visible from the street. It was Modigliani's only solo exhibition during his short life.</p>
<p>Originally owned by poet and dealer Léopold Zborowski, who acquired it directly from Modigliani, the painting traded for $26.9 million in 2003. Fifteen years later, it sold at Sotheby's New York for <strong>$157.2 million</strong>, setting the house record and ranking as the fourth most expensive artwork ever auctioned. Modigliani died of tubercular meningitis in 1920 at just 35 years old.</p>`,
    faqs: [
      {
        question: "How large is this painting?",
        answer: "At <strong>89.5 by 146.7 cm</strong> (35 by 58 inches), it's the largest painting <a href=\"/artist/amedeo-modigliani\"><strong>Modigliani</strong></a> ever created. It's also the only reclining nude where the entire figure fits within the canvas."
      },
      {
        question: "Why was the 1917 exhibition shut down?",
        answer: "Police closed the show on <strong>opening day</strong> because Modigliani's nudes were visible from the street. The frank depiction of the female body scandalized Paris society, though it was his only solo exhibition during his lifetime."
      },
      {
        question: "Why is this painting worth $157 million?",
        answer: "The record price reflects its status as <strong>Modigliani's largest work</strong>, its importance within his celebrated nude series, and the extreme rarity of museum-quality works by an artist who died at 35."
      }
    ]
  },
  {
    slug: 'le-reve-picasso',
    description: `<p><a href="/artist/pablo-picasso"><strong>Pablo Picasso</strong></a> painted Le Rêve (The Dream) in a single afternoon on January 24, 1932. The canvas depicts his 22-year-old mistress <strong>Marie-Thérèse Walter</strong> asleep in an armchair, her head tilted back and face split into two profiles in his signature <a href="/movement/cubism"><strong>Cubist</strong></a> style. Bold reds, yellows, and greens contrast against the composition, which measures roughly 51 by 38 inches.</p>
<p>Marie-Thérèse became Picasso's most frequent muse during the early 1930s, inspiring hundreds of works. Their relationship began when she was 17 and he was 45, and the erotic charge of their affair infuses the painting with intimate energy. Critics have noted suggestive imagery hidden in the composition, reflecting Picasso's obsession with his young lover.</p>
<p>The painting has a remarkable history. Victor and Sally Ganz bought it in 1941 for $7,000. In 2006, casino magnate Steve Wynn agreed to sell it for $139 million, then accidentally <strong>put his elbow through the canvas</strong> while showing it to friends. After professional restoration, hedge fund manager Steven A. Cohen acquired it in 2013 for <strong>$155 million</strong>, $16 million more than the pre-damage price.</p>`,
    faqs: [
      {
        question: "Who is the woman in Le Rêve?",
        answer: "<strong>Marie-Thérèse Walter</strong> was Picasso's mistress and muse during the 1930s. They met when she was 17 and he was 45. She inspired hundreds of paintings, drawings, and sculptures during their intense relationship."
      },
      {
        question: "What happened when Steve Wynn damaged the painting?",
        answer: "In 2006, Wynn accidentally <strong>put his elbow through the canvas</strong> while showing it to friends. After professional restoration, Steven A. Cohen bought it in 2013 for $155 million, actually more than the pre-damage sale price."
      },
      {
        question: "How quickly did Picasso paint Le Rêve?",
        answer: "Picasso completed the painting in <strong>a single afternoon</strong> on January 24, 1932. He was 50 years old and at the height of his creative powers, producing works with remarkable speed and confidence."
      }
    ]
  },
  {
    slug: 'three-studies-of-lucian-freud',
    description: `<p><a href="/artist/francis-bacon"><strong>Francis Bacon</strong></a> created this monumental triptych in 1969, capturing his close friend and artistic rival <a href="/artist/lucian-freud"><strong>Lucian Freud</strong></a> across three nearly six-foot panels. Working from photographs by John Deakin, Bacon rendered Freud seated on a wooden chair, his form distorted and fragmented against ochre backgrounds. Rather than literal likeness, each study captures <strong>psychological essence</strong>.</p>
<p>Bacon and Freud met in 1944 and became inseparable during the 1950s and 60s, spending most evenings together at Soho drinking establishments like the Colony Room. They painted each other repeatedly, their relationship described as equal parts admiration and unrelenting criticism. The friendship ended bitterly in the mid-1980s when they fell out over personal differences.</p>
<p>The <strong>triptych format</strong> was central to Bacon's practice. He believed multiple panels prevented what he called forced narrative interpretation, allowing images to exist in sequence without storytelling. In November 2013, the work sold at Christie's New York for <strong>$142.4 million</strong>, setting the auction record at that time. Collector Elaine Wynn later bequeathed it to the <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Los Angeles County Museum of Art</strong></a>.</p>`,
    faqs: [
      {
        question: "What was Bacon and Freud's relationship?",
        answer: "They were <strong>close friends and artistic rivals</strong> who met in 1944. Inseparable for decades, they spent evenings together at Soho clubs and painted each other multiple times before falling out bitterly in the 1980s."
      },
      {
        question: "Why did Bacon paint triptychs?",
        answer: "Bacon believed multiple panels <strong>prevented forced narrative</strong> interpretation. He said \"I see images in series,\" using the triptych format to present sequential psychological studies rather than single definitive portraits."
      },
      {
        question: "Where can I see Three Studies of Lucian Freud?",
        answer: "The triptych will be at <strong>LACMA</strong> (Los Angeles County Museum of Art) following collector Elaine Wynn's bequest. It will be the museum's first Francis Bacon work in its permanent collection."
      }
    ]
  },
  {
    slug: 'twelve-landscape-screens-qi-baishi',
    description: `<p><a href="/artist/qi-baishi"><strong>Qi Baishi</strong></a> created the Twelve Landscape Screens in 1925 as a birthday gift for renowned Beijing doctor Chen Zilin. Each of the twelve panels measures 180 by 47 centimeters, rendered in <strong>ink and color on paper</strong> in the artist's distinctive semi-abstract style. Individual landscapes feature calligraphic poem inscriptions that complement the visual compositions.</p>
<p>Qi Baishi rose from a peasant family to become China's most celebrated 20th-century painter, earning the title "the people's artist." His technique fused traditional Chinese ink painting with modernist elements, blending detailed gongbi realism with freestyle xieyi brushwork. The <strong>economy of form</strong> and playful brushstrokes made his work accessible to both artistic and political audiences.</p>
<p>Only two complete sets of Twelve Landscape Screens exist. The other set, created in 1932, resides in the Three Gorges Museum in Chongqing. This 1925 version sold at Poly Auction in Beijing in December 2017 for <strong>$140.8 million</strong> (931.5 million yuan), making Qi Baishi the first Chinese artist to break the $100 million auction barrier. A private Chinese collector acquired the masterwork.</p>`,
    faqs: [
      {
        question: "How large are the Twelve Landscape Screens?",
        answer: "Each of the <strong>twelve panels</strong> measures 180 by 47 cm (approximately 71 by 18.5 inches). Together they form one of only two complete sets of landscape screens by Qi Baishi, the other held by the Three Gorges Museum."
      },
      {
        question: "Why is Qi Baishi significant in Chinese art?",
        answer: "Qi Baishi was the <strong>most celebrated Chinese painter</strong> of the 20th century, called \"the people's artist.\" Rising from a peasant family, he fused traditional ink painting with modernist elements, making his work beloved by both collectors and general audiences."
      },
      {
        question: "Why is this painting so valuable?",
        answer: "At $140.8 million, it made Qi Baishi the <strong>first Chinese artist</strong> to break the $100 million barrier. Its value reflects its rarity (only two sets exist), monumental scale, and the artist's unmatched status in Chinese art history."
      }
    ]
  },
  {
    slug: 'pointing-man-giacometti',
    description: `<p><a href="/artist/alberto-giacometti"><strong>Alberto Giacometti</strong></a> created L'Homme au doigt (Pointing Man) in 1947, working through the night to finish it for his first solo exhibition after World War II. The nearly six-foot <strong>bronze figure</strong> stands with elongated limbs and an extended index finger, its attenuated form stripped to essential gesture. Giacometti created six casts plus one artist's proof.</p>
<p>After experiencing the trauma of wartime Paris, Giacometti obsessively reworked his sculptures, making figures progressively thinner until they resembled shadows striding through space. The <strong>elongated forms</strong> reflect existential themes of isolation and human vulnerability that preoccupied postwar artists. His figures appear frozen mid-step, caught between action and stillness.</p>
<p>The cast sold at Christie's in May 2015 was unique among the six: Giacometti had <strong>hand-painted</strong> it himself to heighten its expressive impact. Collector Sheldon Solow owned it for 45 years before it sold for <strong>$141.3 million</strong>, becoming the most expensive sculpture ever auctioned. Hedge fund manager Steven A. Cohen acquired it. Other casts reside at <a href="/museum/moma"><strong>MoMA</strong></a>, the Tate, and the Fondation Giacometti.</p>`,
    faqs: [
      {
        question: "Why are Giacometti's figures so thin?",
        answer: "After WWII, Giacometti obsessively reworked his sculptures, making them <strong>progressively thinner</strong> until they resembled shadows. The attenuated forms reflect existential themes of isolation and human vulnerability in postwar Europe."
      },
      {
        question: "How many versions of Pointing Man exist?",
        answer: "Giacometti created <strong>six bronze casts</strong> plus one artist's proof. They're held at MoMA, the Tate, Glenstone, and other institutions. The Christie's version was unique because Giacometti hand-painted it himself."
      },
      {
        question: "Why is this sculpture worth $141 million?",
        answer: "It set the <strong>record for any sculpture</strong> at auction. The price reflects Giacometti's towering reputation, the work's postwar significance, and this cast's rarity as the only one hand-painted by the artist."
      }
    ]
  }
];

async function main() {
  console.log('=== Updating Artwork Descriptions - Batch 3 ===\n');

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
