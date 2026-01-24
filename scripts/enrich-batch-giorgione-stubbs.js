const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'giorgione-the-holy-family-madonna-benson',
    description: `<p><a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> painted this intimate Holy Family around 1500, creating one of his most tender religious works. The composition brings Mary, Joseph, and the infant Christ together in quiet domestic harmony. The painting takes its alternate name from Robert Benson, a British collector who once owned it, though the work has passed through many hands since leaving Venice.</p>

<p>What distinguishes this Holy Family is <strong>Joseph's prominent placement</strong>. In earlier Renaissance paintings, Joseph typically appeared as a background figure or was omitted entirely. Here he joins Mary as an equal participant in the sacred scene, reflecting changing attitudes toward the holy family as a model for earthly households. Giorgione renders all three figures with his characteristic sfumato, softening edges and blending tones to create atmospheric depth.</p>

<p>The Venetian approach to color shows throughout. Warm flesh tones glow against cooler backgrounds, and subtle gradations of light unify the composition. Giorgione died young, probably of plague in 1510, leaving fewer than two dozen accepted works. This panel now belongs to the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C., where it represents the poetic, mysterious quality that made Giorgione one of the most influential <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>Venetian masters</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see Giorgione's Holy Family?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a> in Washington, D.C. The museum's Italian Renaissance collection includes several important Venetian works from Giorgione's circle.`
      },
      {
        question: "Why is it called the Madonna Benson?",
        answer: `The painting takes this alternate name from <strong>Robert Benson</strong>, a British collector who previously owned the work. Like many Old Master paintings, it passed through various private collections before entering its current museum home.`
      },
      {
        question: "What makes Joseph's role unusual in this painting?",
        answer: `<a href="/apps/masterpieces/artist/giorgione"><strong>Giorgione</strong></a> gives Joseph an unusually <strong>prominent position</strong> alongside Mary. Earlier Renaissance painters often minimized Joseph or placed him in the background, but here he participates equally in the intimate family scene.`
      },
      {
        question: "What is Venetian sfumato?",
        answer: `Sfumato refers to the technique of <strong>softening edges and blending tones</strong> to create atmospheric depth and mystery. Giorgione mastered this approach, which influenced later Venetian painters including his student Titian.`
      }
    ]
  },
  {
    slug: 'joachim-patinir-landscape-with-charon-crossing-the-styx',
    description: `<p><a href="/apps/masterpieces/artist/joachim-patinir"><strong>Joachim Patinir</strong></a> painted this panoramic vision of the afterlife around 1520-1524, showing the mythological ferryman Charon guiding a soul across the River Styx. The composition divides the world into three realms: Paradise glows green and welcoming on the left, Hell burns orange and threatening on the right, and the dark waters of the underworld river flow between them.</p>

<p>Patinir was the first painter to specialize primarily in landscapes, and this work shows why he earned that distinction. The <strong>"world landscape"</strong> format presents an impossibly vast panorama seen from above, stretching from foreground details to distant horizons. Mountains, rivers, cities, and fantastical architecture fill the scene. The small figure of Charon and his passenger almost disappear within this cosmic geography.</p>

<p>The soul in Charon's boat turns toward Paradise but must choose its path. Angels tend the gardens on the left while demons torment the damned on the right. Patinir transforms classical mythology into a Christian moral landscape, visualizing the choice between salvation and damnation. The painting now hangs at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, a key example of how <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>landscape painting</strong></a> emerged as an independent genre in Northern Renaissance art.</p>`,
    faqs: [
      {
        question: "Where can I see Landscape with Charon Crossing the Styx?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/prado"><strong>Museo del Prado</strong></a> in Madrid, Spain. The museum holds several works by Patinir, reflecting his importance to the Spanish royal collection.`
      },
      {
        question: "What is the painting's mythological subject?",
        answer: `The painting shows <strong>Charon</strong>, the ferryman of Greek mythology, transporting a soul across the River Styx to the afterlife. Patinir transforms this classical story into a Christian allegory, with Paradise on the left and Hell on the right.`
      },
      {
        question: "Why is Joachim Patinir important in art history?",
        answer: `<a href="/apps/masterpieces/artist/joachim-patinir"><strong>Joachim Patinir</strong></a> was the first painter to specialize primarily in <strong>landscape painting</strong>. His "world landscapes" presenting vast panoramic views influenced generations of Northern European artists.`
      },
      {
        question: "What is a 'world landscape'?",
        answer: `The <strong>world landscape</strong> format presents an impossibly vast panoramic view seen from an elevated vantage point. Mountains, rivers, cities, and distant horizons all appear in a single cosmic geography that could never be seen in real life.`
      }
    ]
  },
  {
    slug: 'pontormo-leda-and-the-swan',
    description: `<p><a href="/apps/masterpieces/artist/pontormo"><strong>Pontormo</strong></a> painted this version of Leda and the Swan around 1512-1513, copying a lost composition by Michelangelo that has since been destroyed. The mythological scene shows the Spartan queen Leda embracing Zeus, who has transformed himself into a swan to seduce her. Their union would produce Helen of Troy and the twins Castor and Pollux.</p>

<p>Michelangelo's original painting disappeared, probably intentionally destroyed for its <strong>erotic content</strong>. Pontormo's copy, made while he was still a young artist, preserves some record of what the master created. The elongated forms and twisted pose already show the Mannerist tendencies that would define Pontormo's mature style. The figure wraps around the swan in an elegant spiral, displaying the complex poses that Mannerist painters prized.</p>

<p>Several copies of the lost Michelangelo exist, each offering slightly different interpretations. Pontormo's version now hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, where it represents both the influence of Michelangelo on younger artists and the transmission of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>classical mythology</strong></a> through Renaissance painting.</p>`,
    faqs: [
      {
        question: "Where can I see Pontormo's Leda and the Swan?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum's Mannerist collection includes several works by Pontormo alongside paintings by Bronzino and other sixteenth-century Florentine masters.`
      },
      {
        question: "What happened to Michelangelo's original painting?",
        answer: `Michelangelo's original <strong>Leda and the Swan</strong> was destroyed, probably intentionally due to its erotic content. <a href="/apps/masterpieces/artist/pontormo"><strong>Pontormo's</strong></a> copy, made around 1512-1513, helps preserve some record of the lost masterpiece.`
      },
      {
        question: "What is the myth of Leda and the Swan?",
        answer: `In Greek mythology, <strong>Zeus</strong> transformed into a swan to seduce Leda, queen of Sparta. Their union produced Helen of Troy (whose abduction caused the Trojan War) and the twins Castor and Pollux.`
      },
      {
        question: "What is Mannerism?",
        answer: `Mannerism was a sixteenth-century style featuring <strong>elongated forms</strong>, complex poses, and sophisticated elegance. Pontormo was a leading Mannerist painter, known for figures with twisted postures and unusual proportions.`
      }
    ]
  },
  {
    slug: 'bronzino-lucrezia-panciatichi',
    description: `<p><a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> painted this portrait of Lucrezia Panciatichi around 1540, creating one of the finest examples of Mannerist court portraiture. The young Florentine noblewoman sits in rigid, elegant posture, her hands precisely arranged, her gaze cool and unreadable. She wears a sumptuous red dress with gold embroidery and an elaborate gold chain bearing the inscription "AMOUR DURE SANS FIN" (love lasts forever).</p>

<p>The portrait was painted as a <strong>pendant</strong> to accompany a matching portrait of Lucrezia's husband Bartolomeo Panciatichi, and the inscription speaks to their marriage. Bronzino's style achieves an almost inhuman perfection. The skin appears porcelain-smooth, the fabrics impossibly crisp, every detail rendered with icy clarity. This deliberate artificiality was the height of sophistication for Medici Florence.</p>

<p>Lucrezia came from the Pucci family and married into the wealthy Panciatichi. Her portrait reveals nothing of her inner life, presenting instead an idealized image of aristocratic beauty and virtue. Both pendant portraits now hang together at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a>, where they represent the peak of <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>Renaissance portraiture</strong></a> at the Medici court.</p>`,
    faqs: [
      {
        question: "Where can I see the Portrait of Lucrezia Panciatichi?",
        answer: `This portrait hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It is displayed alongside the matching portrait of her husband Bartolomeo, as Bronzino painted them as a pair.`
      },
      {
        question: "What does the inscription on her necklace mean?",
        answer: `The gold chain bears the French inscription <strong>"AMOUR DURE SANS FIN"</strong> meaning "love lasts forever." This motto speaks to Lucrezia's marriage to Bartolomeo Panciatichi, whose portrait was painted as a companion piece.`
      },
      {
        question: "What is Bronzino's portrait style like?",
        answer: `<a href="/apps/masterpieces/artist/bronzino"><strong>Bronzino</strong></a> developed a style of <strong>icy perfection</strong> with porcelain-smooth skin, impossibly crisp fabrics, and cool, unreadable expressions. This deliberate artificiality represented the height of sophistication at the Medici court.`
      },
      {
        question: "Who was Lucrezia Panciatichi?",
        answer: `Lucrezia came from the <strong>Pucci family</strong>, Florentine nobility, and married Bartolomeo Panciatichi. The matching portraits celebrate their union and display their social status at the height of Medici Florence.`
      }
    ]
  },
  {
    slug: 'george-stubbs-lion-attacking-a-horse',
    description: `<p><a href="/apps/masterpieces/artist/george-stubbs"><strong>George Stubbs</strong></a> painted this dramatic scene around 1762, one of seventeen versions he created on the theme of a lion attacking a horse. The composition shows the moment of assault: the lion has leapt onto the horse's back, claws sinking into flesh, while the terrified horse rears against a stormy sky. The contrast between predator and prey captures what eighteenth-century viewers called the <strong>sublime</strong>: terror mixed with awe.</p>

<p>Stubbs drew inspiration from an ancient Roman marble sculpture he may have seen in Italy, but he transformed the classical source into something uniquely his own. His deep anatomical knowledge, gained from years of dissecting horses, gives the struggling animal convincing musculature and movement. The lion's attack feels viscerally real despite the theatrical setting.</p>

<p>The theme obsessed Stubbs throughout his career. He returned to it repeatedly, varying the composition, the landscape, and the precise moment depicted. This version now belongs to the <a href="/apps/masterpieces/museum/national-gallery-victoria"><strong>National Gallery of Victoria</strong></a> in Melbourne, Australia. The painting represents the darker side of Stubbs's work, far removed from the calm <a href="https://luxurywallart.com/collections/horse-art" target="_blank" rel="noopener"><strong>equestrian portraits</strong></a> that made his reputation among English aristocrats.</p>`,
    faqs: [
      {
        question: "Where can I see Stubbs's Lion Attacking a Horse?",
        answer: `This version is displayed at the <a href="/apps/masterpieces/museum/national-gallery-victoria"><strong>National Gallery of Victoria</strong></a> in Melbourne, Australia. Stubbs painted seventeen variations on this theme, now scattered across museums worldwide.`
      },
      {
        question: "Why did Stubbs paint this subject so many times?",
        answer: `<a href="/apps/masterpieces/artist/george-stubbs"><strong>George Stubbs</strong></a> was inspired by an <strong>ancient Roman sculpture</strong> of a lion attacking a horse. The theme of sublime terror in nature fascinated him, and he returned to it repeatedly throughout his career with variations in composition and setting.`
      },
      {
        question: "What is 'the sublime' in art?",
        answer: `The <strong>sublime</strong> was an eighteenth-century aesthetic concept describing experiences that inspire both terror and awe. Scenes of violent nature, vast landscapes, and dangerous animals embodied this mixture of fear and fascination.`
      },
      {
        question: "Was George Stubbs mainly a horse painter?",
        answer: `Stubbs built his reputation painting calm <strong>equestrian portraits</strong> for English aristocrats, but his lion and horse series reveals a darker fascination with violence in nature. His anatomical expertise, gained from dissecting horses, appears in both types of work.`
      }
    ]
  }
];

async function main() {
  console.log('Starting enrichment of 5 artworks...\n');

  for (const artwork of artworks) {
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
    } catch (error) {
      console.error(`✗ Failed: ${artwork.slug}`, error.message);
    }
  }

  console.log('\nEnrichment complete!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
