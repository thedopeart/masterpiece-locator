const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'sandro-botticelli-madonna-in-glory-with-seraphim',
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted this early devotional panel around 1470, showing the Madonna and Child surrounded by six-winged seraphim against a traditional gold background. The fiery angels crowd around Mary in concentric rings, their multiple wings creating a radiating pattern of divine light. The work demonstrates Botticelli's training under Filippo Lippi while already hinting at his emerging personal style.</p>

<p>The <strong>gold background</strong> follows Byzantine conventions that were becoming old-fashioned by the 1470s, but remained appropriate for devotional images meant to inspire prayer rather than represent earthly space. Botticelli would soon move toward more naturalistic settings in his larger altarpieces, but intimate panels like this maintained traditional formats for private devotion.</p>

<p>The seraphim represent the highest order of angels, those closest to God's throne, their six wings following the description in Isaiah's vision. Mary sits enthroned among these celestial beings, affirming her special status as Queen of Heaven. Botticelli's delicate linear style gives the composition an ethereal quality despite its formal arrangement. The painting now hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, where it represents the early development of an artist who would soon create the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>Birth of Venus</strong></a> and Primavera.</p>`,
    faqs: [
      {
        question: "Where can I see Madonna in Glory with Seraphim?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, Italy. The museum holds the world's greatest collection of Botticelli's work, spanning his entire career.`
      },
      {
        question: "What are seraphim?",
        answer: `<strong>Seraphim</strong> are the highest order of angels, those closest to God's throne. They have six wings as described in Isaiah's vision. <a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Botticelli</strong></a> shows them surrounding Mary to affirm her status as Queen of Heaven.`
      },
      {
        question: "Why is the background gold?",
        answer: `The <strong>gold background</strong> follows Byzantine traditions that symbolized divine light and heavenly space. Though becoming old-fashioned by 1470, this convention remained appropriate for intimate devotional images meant to inspire prayer.`
      },
      {
        question: "When did Botticelli paint this work?",
        answer: `Botticelli created this panel around <strong>1470</strong>, early in his career while still influenced by his teacher Filippo Lippi. The work predates his famous mythological paintings like the Birth of Venus.`
      }
    ]
  },
  {
    slug: 'sandro-botticelli-madonna-and-child-with-six-saints',
    description: `<p><a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Sandro Botticelli</strong></a> painted this early altarpiece around 1470 for the church of Sant'Ambrogio in Florence. The composition follows the sacra conversazione format, showing the Madonna and Child enthroned with saints arranged on either side as if in silent contemplation or holy conversation. Among the six saints appear Cosmas and Damian, the physician brothers who served as patron saints of the Medici family.</p>

<p>The inclusion of <strong>Cosmas and Damian</strong> suggests Medici involvement in the commission, as these healing saints appeared frequently in works the family sponsored. Botticelli was establishing his reputation during this period, and Medici patronage would soon become crucial to his career. The painting shows him transitioning between the more conservative style of his training and the graceful elegance that would distinguish his mature work.</p>

<p>The sacra conversazione format was standard for altarpieces in fifteenth-century Florence, gathering holy figures in a unified space rather than separating them into distinct panels as earlier Gothic altarpieces did. This arrangement encouraged viewers to see the saints as intercessors, accessible through prayer. The work now hangs at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a>, representing a transitional moment in Botticelli's development toward the <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>lyrical beauty</strong></a> of his famous later paintings.</p>`,
    faqs: [
      {
        question: "Where can I see the Sant'Ambrogio Altarpiece?",
        answer: `This altarpiece is displayed at the <a href="/apps/masterpieces/museum/uffizi"><strong>Uffizi Gallery</strong></a> in Florence, Italy. It was originally painted for the church of Sant'Ambrogio in Florence around 1470.`
      },
      {
        question: "Who are Cosmas and Damian?",
        answer: `<strong>Cosmas and Damian</strong> were twin brothers and physicians who became Christian martyrs. They served as patron saints of the Medici family, whose name means "doctors." Their inclusion suggests Medici involvement in commissioning this altarpiece.`
      },
      {
        question: "What is a sacra conversazione?",
        answer: `<strong>Sacra conversazione</strong> (holy conversation) is an altarpiece format showing the Madonna and Child with saints arranged in a unified space, as if in silent contemplation together. This replaced earlier Gothic formats that separated figures into distinct panels.`
      },
      {
        question: "When did Botticelli paint this altarpiece?",
        answer: `<a href="/apps/masterpieces/artist/sandro-botticelli"><strong>Botticelli</strong></a> created this work around <strong>1470</strong>, early in his career while establishing his reputation in Florence. The painting shows him transitioning toward his distinctive mature style.`
      }
    ]
  },
  {
    slug: 'rembrandt-titus-the-artist39s-son',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this tender portrait of his son Titus around 1657, capturing the adolescent in a moment of quiet contemplation. Warm golden light illuminates the boy's face while the background dissolves into characteristic shadow. The affection between father and son comes through in every brushstroke, making this one of Rembrandt's most emotionally affecting works.</p>

<p>Titus was Rembrandt's only surviving child with his wife Saskia, who died when the boy was just nine months old. Father and son grew exceptionally close, and <strong>Titus appears in numerous paintings</strong> throughout his life, aging from childhood through young adulthood in Rembrandt's portraits. This version shows him at perhaps fourteen or fifteen, his features still soft with youth but his expression already thoughtful.</p>

<p>The tragedy that shadows these portraits is that Titus would die in 1668 at age twenty-seven, just a year before his father. The paintings Rembrandt made of his son thus preserve someone who would not outlive the artist. This portrait now belongs to the <strong>Wallace Collection</strong> in London, where it represents both Rembrandt's technical mastery and his capacity for capturing <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>human intimacy</strong></a> on canvas.</p>`,
    faqs: [
      {
        question: "Where can I see Titus, the Artist's Son?",
        answer: `This portrait is displayed at the <strong>Wallace Collection</strong> in London, England. The museum holds an important collection of Old Master paintings including several works by Dutch masters.`
      },
      {
        question: "Who was Titus?",
        answer: `Titus was <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt's</strong></a> only surviving child with his wife Saskia, who died when Titus was nine months old. Father and son were exceptionally close, and <strong>Titus appears in numerous paintings</strong> throughout his life.`
      },
      {
        question: "What happened to Titus?",
        answer: `Titus died in <strong>1668 at age twenty-seven</strong>, just one year before his father. The many portraits Rembrandt painted of his son thus preserve someone who would not outlive the artist, adding poignancy to each image.`
      },
      {
        question: "When did Rembrandt paint this portrait?",
        answer: `Rembrandt created this portrait around <strong>1657</strong>, when Titus was approximately fourteen or fifteen years old. The warm golden light and tender characterization show the deep affection between father and son.`
      }
    ]
  },
  {
    slug: 'rembrandt-selfportrait-with-bittern',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> painted this self-portrait in 1639, showing himself as a prosperous gentleman-hunter holding a dead bittern (a type of heron). He wears an elaborate velvet costume with a heavy gold chain, projecting the success and social status he had achieved during the 1630s. This was Rembrandt at the height of his fortune, before financial troubles would later diminish his circumstances.</p>

<p>The inclusion of the <strong>hunting trophy</strong> was unusual for artist self-portraits, which typically showed the subject with brushes and palette. Hunting was an aristocratic pursuit, and by depicting himself this way, Rembrandt claimed gentlemanly status beyond mere craftsman. The rich costume reinforces this message: he was not just a painter but a man of position and wealth.</p>

<p>The portrait's confident swagger would prove somewhat ironic. Within a decade, Rembrandt's spending habits and changing tastes in art would leave him bankrupt. But in 1639, nothing suggested the coming reversal. This painting now hangs at the <strong>Gemäldegalerie Alte Meister</strong> in Dresden, Germany, where it documents a moment of triumph in the career of a painter who would produce masterpieces in <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>prosperity and poverty</strong></a> alike.</p>`,
    faqs: [
      {
        question: "Where can I see the Self-portrait with Bittern?",
        answer: `This painting is displayed at the <strong>Gemäldegalerie Alte Meister</strong> in Dresden, Germany. The museum holds an important collection of Old Master paintings including Dutch and Flemish works.`
      },
      {
        question: "What is a bittern?",
        answer: `A <strong>bittern</strong> is a wading bird related to herons. <a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt</strong></a> shows himself holding a dead bittern as a hunting trophy, claiming the gentlemanly status associated with aristocratic hunting pursuits.`
      },
      {
        question: "Why did Rembrandt portray himself as a hunter?",
        answer: `Hunting was an <strong>aristocratic pursuit</strong>, and by depicting himself with a hunting trophy rather than artist's tools, Rembrandt claimed social status beyond mere craftsman. The elaborate costume reinforces his success during the prosperous 1630s.`
      },
      {
        question: "When did Rembrandt paint this self-portrait?",
        answer: `Rembrandt created this portrait in <strong>1639</strong>, at the height of his prosperity. Within a decade, changing tastes and spending habits would leave him bankrupt, making this confident image somewhat ironic.`
      }
    ]
  },
  {
    slug: 'rembrandt-the-holy-family-with-a-cat',
    description: `<p><a href="/apps/masterpieces/artist/rembrandt"><strong>Rembrandt van Rijn</strong></a> created this etching in 1654, depicting the Holy Family in an intimate domestic setting with an unusual addition: a cat curled near the hearth. Mary tends to the infant Jesus while Joseph works in the background, their simple home warmed by a fire. The scene transforms the divine family into ordinary Dutch householders, sacred figures made approachable through domestic detail.</p>

<p>The <strong>inclusion of a cat</strong> was unconventional for religious imagery. Cats appeared in secular Dutch genre scenes but rarely in depictions of the Holy Family. Rembrandt's addition humanizes the sacred subject, suggesting a real home where a pet might wander. This approach reflected Protestant emphasis on finding God in everyday life rather than in distant grandeur.</p>

<p>The etching belongs to Rembrandt's late period, when his technique had reached full maturity. Fine lines build atmosphere through shadow and suggestion rather than hard outlines. As a print, the image exists in multiple impressions across collections worldwide, more accessible than his unique paintings. The work represents Rembrandt's ability to find <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual depth</strong></a> in the simplest moments of domestic life.</p>`,
    faqs: [
      {
        question: "Where can I see The Holy Family with a Cat?",
        answer: `As an etching, this work exists in <strong>multiple impressions</strong> across museum print collections worldwide. Major holdings include the Rijksmuseum, British Museum, and Metropolitan Museum of Art.`
      },
      {
        question: "Why did Rembrandt include a cat?",
        answer: `The <strong>cat humanizes</strong> the sacred subject, suggesting a real home where a pet might wander. This approach reflected Protestant emphasis on finding God in everyday life, making the Holy Family approachable through <a href="/apps/masterpieces/artist/rembrandt"><strong>domestic detail</strong></a>.`
      },
      {
        question: "When did Rembrandt create this etching?",
        answer: `Rembrandt made this etching in <strong>1654</strong>, during his late period when his technique had reached full maturity. The fine lines build atmosphere through shadow and suggestion rather than hard outlines.`
      },
      {
        question: "What is an etching?",
        answer: `An <strong>etching</strong> is a print made by scratching lines into a metal plate coated with acid-resistant ground. The plate is dipped in acid, which bites into the exposed lines. Ink fills these grooves, and the image transfers to paper under pressure.`
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
