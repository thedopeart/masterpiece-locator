const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworkDescriptions = [
  {
    slug: 'american-progress',
    description: `<p><a href="/apps/masterpieces/artist/john-gast"><strong>John Gast</strong></a> created this allegorical painting to promote westward expansion during the era of <strong>Manifest Destiny</strong>. A floating female figure called "Columbia" leads settlers west, stringing telegraph wire as she goes. Below her, pioneers, stagecoaches, and railroads advance while Native Americans and bison flee into darkness.</p>
<p>The painting served as propaganda for railroad companies and land speculators. George Crofutt commissioned it for a widely distributed print. Today it's studied as a visual document of 19th-century American ideology, showing how westward expansion was portrayed as divine providence rather than displacement and conquest.</p>
<p>The original painting resides at the Autry Museum of the American West in Los Angeles.</p>`,
    faqs: [
      {
        question: "Where can I see American Progress?",
        answer: "The painting hangs at the <strong>Autry Museum of the American West</strong> in Los Angeles. It's one of the most recognizable images of <strong>Manifest Destiny</strong>."
      },
      {
        question: "Who is the woman in American Progress?",
        answer: "The floating figure is \"<strong>Columbia</strong>,\" a female personification of America. She represents westward expansion as progress and civilization moving across the continent."
      },
      {
        question: "Why was American Progress painted?",
        answer: "<a href=\"/apps/masterpieces/artist/john-gast\"><strong>John Gast</strong></a> was commissioned by publisher George Crofutt to create promotional imagery for <strong>westward expansion</strong>. It was widely reproduced as a print."
      },
      {
        question: "What does American Progress symbolize?",
        answer: "The painting visualizes <strong>Manifest Destiny</strong>, the belief that American expansion was divinely ordained. Modern scholars study it as propaganda that justified displacement of Native peoples."
      }
    ]
  },
  {
    slug: 'declaration-of-independence',
    description: `<p><a href="/apps/masterpieces/artist/john-trumbull"><strong>John Trumbull</strong></a> spent decades creating this monumental scene of the <strong>Declaration of Independence</strong> being presented to the Continental Congress. The painting depicts the Committee of Five (Jefferson, Adams, Franklin, Sherman, and Livingston) submitting the draft document on June 28, 1776.</p>
<p>Trumbull personally knew many of the Founding Fathers and painted their portraits from life when possible. The 12-by-18-foot canvas contains 47 identifiable figures. It's a historical document as well as a painting, preserving the likenesses of men who shaped American independence.</p>
<p>The painting hangs in the <strong>United States Capitol Rotunda</strong> in Washington, D.C., where it has been displayed since 1826.</p>`,
    faqs: [
      {
        question: "Where can I see Declaration of Independence?",
        answer: "The monumental painting hangs in the <strong>United States Capitol Rotunda</strong> in Washington, D.C. A smaller version is at Yale University Art Gallery."
      },
      {
        question: "Is the Declaration of Independence painting accurate?",
        answer: "<a href=\"/apps/masterpieces/artist/john-trumbull\"><strong>Trumbull</strong></a> painted many figures from life but took <strong>artistic liberties</strong>. Not all 47 people shown were present together on the day depicted."
      },
      {
        question: "Who commissioned this painting?",
        answer: "The <strong>U.S. Congress</strong> commissioned <a href=\"/apps/masterpieces/artist/john-trumbull\"><strong>Trumbull</strong></a> in 1817 to create four large paintings of Revolutionary War scenes for the Capitol Rotunda."
      },
      {
        question: "How big is the painting?",
        answer: "The Capitol version measures 365.8 cm × 548.6 cm (<strong>12 × 18 feet</strong>). It's one of the largest paintings in the United States Capitol."
      }
    ]
  },
  {
    slug: 'pinkie-lawrence',
    description: `<p><a href="/apps/masterpieces/artist/thomas-lawrence"><strong>Thomas Lawrence</strong></a> painted this portrait of Sarah Barrett Moulton when she was about eleven years old. She wears a <a href="https://luxurywallart.com/collections/pink-wall-art" target="_blank" rel="noopener"><strong>pink</strong></a> dress with a white sash, standing against a stormy sky that highlights her youthful freshness. The pose and setting echo Gainsborough's famous "Blue Boy."</p>
<p>Tragically, Sarah died of tuberculosis the year after this portrait was completed, making it her only surviving likeness. The painting became enormously popular when paired with "The Blue Boy" at the Huntington Library, where they have hung together since 1927. The contrast of <strong>pink and blue</strong> created one of art history's most recognized pairings.</p>
<p>The painting resides at The Huntington Library in San Marino, California.</p>`,
    faqs: [
      {
        question: "Where can I see Pinkie?",
        answer: "The painting hangs at <strong>The Huntington Library</strong> in San Marino, California. It's displayed near <strong>The Blue Boy</strong>, forming a famous complementary pair."
      },
      {
        question: "Who was Pinkie?",
        answer: "<strong>Sarah Barrett Moulton</strong> was the subject, painted at age eleven. She died of tuberculosis the following year, making this her only known portrait."
      },
      {
        question: "Why is Pinkie paired with The Blue Boy?",
        answer: "Henry Huntington bought both paintings and displayed them together starting in 1927. The <a href=\"https://luxurywallart.com/collections/pink-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>pink</strong></a> and <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue</strong></a> color contrast became iconic."
      },
      {
        question: "When did Thomas Lawrence paint Pinkie?",
        answer: "<a href=\"/apps/masterpieces/artist/thomas-lawrence\"><strong>Lawrence</strong></a> completed this portrait in <strong>1794</strong>, when he was already England's most fashionable portrait painter."
      }
    ]
  },
  {
    slug: 'girl-with-broom-rembrandt',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt-van-rijn"><strong>Rembrandt</strong></a> painted this contemplative portrait of a young servant girl pausing in her work. She leans on a broom handle, gazing out with a thoughtful expression that transcends her humble station. The warm <a href="https://luxurywallart.com/collections/brown-art" target="_blank" rel="noopener"><strong>golden-brown tones</strong></a> envelop her in gentle light.</p>
<p>Unlike formal commissions, this painting shows Rembrandt's interest in ordinary people. The girl's direct gaze and quiet dignity challenge viewers to see beyond social class. The loose brushwork in the background contrasts with the careful rendering of her face and hands, drawing attention to her humanity.</p>
<p>The painting hangs at the National Gallery of Art in Washington, D.C.</p>`,
    faqs: [
      {
        question: "Where can I see A Girl with a Broom?",
        answer: "The painting hangs at the <strong>National Gallery of Art</strong> in Washington, D.C. It's one of <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt's</strong></a> most beloved genre paintings."
      },
      {
        question: "Who is the girl in the painting?",
        answer: "Her identity is <strong>unknown</strong>. She may have been a household servant or a model from <a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt's</strong></a> neighborhood in Amsterdam."
      },
      {
        question: "When did Rembrandt paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> completed this work around <strong>1651</strong>, during his mature period when he often painted everyday people with great psychological depth."
      },
      {
        question: "Why is this painting significant?",
        answer: "<a href=\"/apps/masterpieces/artist/rembrandt-van-rijn\"><strong>Rembrandt</strong></a> elevated an ordinary servant to the status of a <strong>dignified portrait subject</strong>, showing his democratic vision of human worth."
      }
    ]
  },
  {
    slug: 'battle-bunker-hill',
    description: `<p><a href="/apps/masterpieces/artist/john-trumbull"><strong>John Trumbull</strong></a> captured the death of General Joseph Warren at the <strong>Battle of Bunker Hill</strong>, one of the bloodiest engagements of the Revolutionary War. The scene shows the moment British forces overwhelm the American position, with Warren falling at the center while a British officer attempts to save him from a bayonet.</p>
<p>Trumbull based his composition on accounts from survivors and his own military experience. Though the Americans lost the hill, they inflicted devastating casualties on the British. The painting transforms military defeat into heroic sacrifice, establishing the visual language of <strong>American patriotism</strong>.</p>
<p>The original hangs at Yale University Art Gallery, with a large replica in the U.S. Capitol Rotunda.</p>`,
    faqs: [
      {
        question: "Where can I see The Battle of Bunker Hill?",
        answer: "The original hangs at <strong>Yale University Art Gallery</strong>. A larger version is displayed in the U.S. Capitol Rotunda with other <a href=\"/apps/masterpieces/artist/john-trumbull\"><strong>Trumbull</strong></a> Revolutionary War paintings."
      },
      {
        question: "Who is dying in the painting?",
        answer: "<strong>General Joseph Warren</strong>, a patriot leader, was killed at the battle. <a href=\"/apps/masterpieces/artist/john-trumbull\"><strong>Trumbull</strong></a> made his death the dramatic center of the composition."
      },
      {
        question: "Did America win the Battle of Bunker Hill?",
        answer: "The British captured the position, but suffered over <strong>1,000 casualties</strong>. The American resistance proved they could stand against professional soldiers."
      },
      {
        question: "When did Trumbull paint this?",
        answer: "<a href=\"/apps/masterpieces/artist/john-trumbull\"><strong>Trumbull</strong></a> completed the original in <strong>1786</strong> in London, where he studied with Benjamin West."
      }
    ]
  },
  {
    slug: 'surrender-general-burgoyne',
    description: `<p><a href="/apps/masterpieces/artist/john-trumbull"><strong>John Trumbull</strong></a> depicted the surrender of British General John Burgoyne to American General Horatio Gates at Saratoga in 1777. This victory convinced France to ally with America, making it the <strong>turning point</strong> of the Revolutionary War. Officers from both armies witness the formal ceremony.</p>
<p>The painting shows Burgoyne offering his sword while Gates gestures for him to keep it, a sign of respect between gentlemen. Trumbull researched uniforms, landscapes, and portraits meticulously, making the work both artistically compelling and historically valuable.</p>
<p>The painting hangs in the <strong>United States Capitol Rotunda</strong> alongside Trumbull's other Revolutionary War commissions.</p>`,
    faqs: [
      {
        question: "Where can I see Surrender of General Burgoyne?",
        answer: "The painting hangs in the <strong>United States Capitol Rotunda</strong> in Washington, D.C., commissioned as part of the Capitol's historical decoration."
      },
      {
        question: "Why was the Battle of Saratoga important?",
        answer: "The American victory at <strong>Saratoga</strong> convinced France to enter the war against Britain. This alliance proved decisive for American independence."
      },
      {
        question: "Is the scene historically accurate?",
        answer: "<a href=\"/apps/masterpieces/artist/john-trumbull\"><strong>Trumbull</strong></a> researched the event extensively, but the <strong>formal surrender</strong> shown is somewhat idealized. The actual handover was less ceremonial."
      },
      {
        question: "When did Trumbull complete this painting?",
        answer: "<a href=\"/apps/masterpieces/artist/john-trumbull\"><strong>Trumbull</strong></a> finished the Capitol version in <strong>1821</strong>, based on earlier studies and sketches from the 1780s."
      }
    ]
  },
];

async function main() {
  console.log('=== Updating Masterpieces Batch 5 with Descriptions ===\n');

  let updated = 0;
  let skipped = 0;

  for (const artwork of artworkDescriptions) {
    const existing = await prisma.artwork.findFirst({
      where: { slug: artwork.slug }
    });

    if (!existing) {
      console.log(`Skipped (not found): ${artwork.slug}`);
      skipped++;
      continue;
    }

    await prisma.artwork.update({
      where: { id: existing.id },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date()
      }
    });

    console.log(`Updated: ${existing.title}`);
    updated++;
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
