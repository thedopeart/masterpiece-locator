const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'edvard-munch-summer-night-inger-on-the-shore',
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this quiet portrait of his sister Inger in 1889, capturing her seated on rocks along the shore at Åsgårdstrand, a small Norwegian coastal town where the Munch family spent many summers. The work dates from the artist's naturalist period, before he developed the intense expressionist style that would later define his career.</p>

<p>The painting draws its power from the peculiar light of <strong>Nordic summer nights</strong>, when the sun barely sets and the sky holds a pale, luminous glow for hours. Inger sits motionless, her white dress catching that diffused light, her expression distant and unreadable. The mood feels melancholic despite the gentle evening, a hint of the psychological depth Munch would explore more directly in later works. The composition balances her solitary figure against the vast horizontal expanse of sea and sky.</p>

<p>Today the painting belongs to the <strong>Rasmus Meyer Collection</strong> in Bergen, Norway, one of the country's most important holdings of nineteenth-century Norwegian art. The work shows Munch's early technical abilities and his lifelong attachment to the Åsgårdstrand <a href="https://luxurywallart.com/collections/coastal-decor" target="_blank" rel="noopener"><strong>coastal landscape</strong></a>, a location that would appear repeatedly throughout his career.</p>`,
    faqs: [
      {
        question: "Where can I see Summer Night (Inger on the Shore)?",
        answer: `This painting belongs to the <strong>Rasmus Meyer Collection</strong> in Bergen, Norway. The collection, now part of the KODE Art Museums, holds significant works of Norwegian art from the nineteenth and early twentieth centuries.`
      },
      {
        question: "Who is the woman in the painting?",
        answer: `The figure is <strong>Inger Munch</strong>, the artist's younger sister. <a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted her seated on rocks at Åsgårdstrand, a Norwegian coastal town where the family spent summers and which became important throughout his career.`
      },
      {
        question: "What is special about the light in this painting?",
        answer: `The painting captures the unique phenomenon of <strong>Nordic white nights</strong>, when summer evenings in Scandinavia remain illuminated for hours with a pale, diffused glow. This atmospheric light gives the scene its dreamlike, melancholic quality.`
      },
      {
        question: "How does this relate to Munch's later work?",
        answer: `This 1889 painting shows Munch working in a naturalist style before his turn to Expressionism. While technically more conventional than works like The Scream, it already displays his interest in <strong>mood and psychological atmosphere</strong> that would define his mature career.`
      }
    ]
  },
  {
    slug: 'edvard-munch-portrait-of-the-painter-jensen-hjell',
    description: `<p><a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> painted this portrait of his fellow artist Karl Jensen-Hjell in 1885, when Munch was just twenty-two years old. The work shows a bearded man seated in a dark interior, his gaze direct and penetrating. It belongs to Munch's early naturalist period, years before he would develop the expressive, psychologically charged style that made him famous.</p>

<p>Jensen-Hjell was part of the bohemian artist circle in Kristiania (now Oslo) that Munch moved through in his youth. The <strong>dark palette</strong> and careful attention to the sitter's features demonstrate Munch's solid grounding in traditional portrait techniques. The somber background pushes the viewer's attention entirely onto the subject's face and hands, creating an intimate psychological study despite its conventional format.</p>

<p>The painting now hangs at the <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo, where it sits alongside Munch's more famous later works including The Scream. Seeing this early <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait</strong></a> next to his expressionist masterpieces reveals just how dramatically his style would evolve over the following decade.</p>`,
    faqs: [
      {
        question: "Where can I see Portrait of the Painter Jensen-Hjell?",
        answer: `This early portrait hangs at the <a href="/apps/masterpieces/museum/national-gallery-oslo"><strong>National Gallery of Norway</strong></a> in Oslo. The museum's Munch collection includes works spanning his entire career, from naturalist portraits to expressionist masterpieces.`
      },
      {
        question: "Who was Karl Jensen-Hjell?",
        answer: `Jensen-Hjell was a fellow painter in the <strong>Kristiania bohemian circle</strong> that young Edvard Munch associated with in the 1880s. These artists gathered around writer Hans Jæger and embraced unconventional lifestyles that scandalized conservative Norwegian society.`
      },
      {
        question: "How old was Munch when he painted this?",
        answer: `<a href="/apps/masterpieces/artist/edvard-munch"><strong>Edvard Munch</strong></a> was only twenty-two when he completed this portrait in 1885. The work demonstrates his early mastery of traditional portrait techniques before he broke away toward his distinctive <strong>expressionist style</strong> in the 1890s.`
      },
      {
        question: "What style is this painting?",
        answer: `This portrait exemplifies Munch's early <strong>naturalist period</strong>, characterized by dark interiors, careful observation, and traditional composition. It shows little hint of the psychological intensity and bold colors that would later define his expressionist works like The Scream.`
      }
    ]
  },
  {
    slug: 'ivan-tsarevich-riding-grey-wolf',
    description: `<p><a href="/apps/masterpieces/artist/viktor-vasnetsov"><strong>Viktor Vasnetsov</strong></a> painted this iconic image from Russian folklore in 1889, depicting the moment when Prince Ivan escapes through a dark forest on the back of a magical grey wolf, clutching Princess Elena the Beautiful. The scene comes from a traditional fairy tale in which the wolf helps Ivan complete impossible tasks set by his father the Tsar.</p>

<p>The composition places the fleeing couple against a dense, ancient forest that seems to close in around them. Gnarled trees with moss-covered trunks create an atmosphere of both danger and enchantment. Elena wears an elaborate <strong>golden headdress and brocade robes</strong>, while Ivan holds her protectively as the wolf bounds forward. The painting became one of the defining images of the Russian nationalist art movement, celebrating Slavic mythology and folk traditions.</p>

<p>Vasnetsov devoted much of his career to bringing Russian legends and fairy tales to life on canvas. This work hangs at the <a href="/apps/masterpieces/museum/tretyakov"><strong>Tretyakov Gallery</strong></a> in Moscow, where it remains one of the most beloved paintings in the collection. The dense forest setting has become synonymous with the mysterious, <a href="https://luxurywallart.com/collections/nature-art" target="_blank" rel="noopener"><strong>wild nature</strong></a> of traditional Russian storytelling.</p>`,
    faqs: [
      {
        question: "Where can I see Ivan Tsarevich Riding the Grey Wolf?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/tretyakov"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia. The museum houses the world's largest collection of Russian fine art, and this work remains one of its most popular and frequently reproduced images.`
      },
      {
        question: "What fairy tale does this painting depict?",
        answer: `The painting illustrates the <strong>Russian fairy tale</strong> of Tsarevich Ivan, the Firebird, and the Grey Wolf. In the story, the magical wolf helps Prince Ivan complete dangerous quests, including rescuing Princess Elena the Beautiful from a rival kingdom.`
      },
      {
        question: "Who painted Ivan Tsarevich Riding the Grey Wolf?",
        answer: `<a href="/apps/masterpieces/artist/viktor-vasnetsov"><strong>Viktor Vasnetsov</strong></a> completed this painting in 1889. He specialized in depicting Russian folklore and medieval history, becoming one of the most important artists of the Russian nationalist movement in art.`
      },
      {
        question: "Why is this painting significant in Russian culture?",
        answer: `This work became an iconic symbol of <strong>Russian national identity</strong>, celebrating Slavic folklore and the mysterious Russian wilderness. Vasnetsov's romantic interpretation helped revive interest in traditional tales during a period of growing nationalist sentiment.`
      }
    ]
  },
  {
    slug: 'demon-seated',
    description: `<p><a href="/apps/masterpieces/artist/mikhail-vrubel"><strong>Mikhail Vrubel</strong></a> painted The Demon Seated in 1890, creating what would become his most famous and influential work. The painting shows a muscular, melancholy figure sitting alone at twilight, his massive arms wrapped around his knees, his face turned away in brooding contemplation. Giant flowers bloom around him while mountains fade into the evening sky behind.</p>

<p>Vrubel drew inspiration from Mikhail Lermontov's Romantic poem "The Demon," which tells of a fallen angel who wanders the earth in eternal loneliness. But Vrubel's demon isn't evil or menacing. He's <strong>tragic and isolated</strong>, a being caught between heaven and earth, belonging to neither. The artist's revolutionary technique fragments the surface into faceted planes that shimmer like mosaics, breaking completely from the smooth academic painting of his contemporaries.</p>

<p>This mosaic-like brushwork made Vrubel a pioneer of <strong>Russian Symbolism</strong> and influenced generations of artists who followed. The painting now occupies a central place at the <a href="/apps/masterpieces/museum/tretyakov"><strong>Tretyakov Gallery</strong></a> in Moscow. Vrubel would return to the demon subject repeatedly throughout his career, but this seated figure, with its strange beauty and cosmic loneliness, remains the most <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritually powerful</strong></a> version.</p>`,
    faqs: [
      {
        question: "Where can I see The Demon Seated?",
        answer: `This painting is displayed at the <a href="/apps/masterpieces/museum/tretyakov"><strong>Tretyakov Gallery</strong></a> in Moscow, Russia. As Vrubel's most famous work, it occupies a prominent position in the museum's collection of nineteenth-century Russian art.`
      },
      {
        question: "What inspired Vrubel's Demon paintings?",
        answer: `<a href="/apps/masterpieces/artist/mikhail-vrubel"><strong>Mikhail Vrubel</strong></a> drew inspiration from the Romantic poem "The Demon" by <strong>Mikhail Lermontov</strong>. The poem tells of a fallen angel condemned to wander the earth in loneliness, a theme that obsessed Vrubel throughout his career.`
      },
      {
        question: "What makes Vrubel's painting technique unusual?",
        answer: `Vrubel developed a distinctive <strong>mosaic-like brushwork</strong> that fragments forms into faceted planes, creating a shimmering, crystalline surface. This revolutionary technique broke from academic tradition and made him a pioneer of Russian Symbolism.`
      },
      {
        question: "Is the demon meant to be evil?",
        answer: `Vrubel's demon isn't depicted as evil but as <strong>tragic and lonely</strong>, a powerful being caught between worlds and belonging to neither. The figure's melancholy posture and averted gaze emphasize isolation rather than malevolence.`
      }
    ]
  },
  {
    slug: 'artemisia-gentileschi-jael-and-sisera',
    description: `<p><a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> painted this violent biblical scene around 1620, depicting the moment when the Israelite heroine Jael prepares to kill the Canaanite general Sisera. According to the Book of Judges, Sisera fled to Jael's tent after losing a battle, where she offered him milk and let him sleep before driving a tent peg through his skull.</p>

<p>Artemisia's version shows Jael leaning over the sleeping general, hammer raised, her face calm and determined. The dramatic contrast of light and shadow follows the <strong>Caravaggist style</strong> that Artemisia mastered, with the figures emerging powerfully from a dark background. Like many of Artemisia's subjects, Jael is a woman taking violent action against a man, a theme that scholars have connected to the artist's own experience of sexual assault and subsequent trial against her attacker.</p>

<p>The painting belongs to the <a href="/apps/masterpieces/museum/budapest-fine-arts"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. Artemisia returned to subjects of <a href="https://luxurywallart.com/collections/women-art" target="_blank" rel="noopener"><strong>powerful women</strong></a> throughout her career, including Judith, Susanna, and Lucretia. Her Jael combines technical brilliance with psychological intensity, showing a woman in complete control of a deadly situation.</p>`,
    faqs: [
      {
        question: "Where can I see Artemisia's Jael and Sisera?",
        answer: `This painting is housed at the <a href="/apps/masterpieces/museum/budapest-fine-arts"><strong>Budapest Museum of Fine Arts</strong></a> in Hungary. The museum holds an important collection of Old Master paintings, including several significant Baroque works.`
      },
      {
        question: "What biblical story does this painting show?",
        answer: `The painting depicts a scene from the <strong>Book of Judges</strong>. After the Canaanite general Sisera lost a battle and fled, the Israelite woman Jael offered him shelter in her tent. Once he fell asleep, she killed him by driving a tent peg through his head.`
      },
      {
        question: "Why did Artemisia paint violent female subjects?",
        answer: `<a href="/apps/masterpieces/artist/artemisia-gentileschi"><strong>Artemisia Gentileschi</strong></a> repeatedly painted women enacting violence against men, including Judith beheading Holofernes. Scholars connect these choices to her experience of <strong>sexual assault</strong> and the public trial that followed, though the interpretation remains debated.`
      },
      {
        question: "What style is this painting?",
        answer: `The work exemplifies the <strong>Caravaggist style</strong>, using dramatic contrasts between light and dark to create theatrical intensity. Artemisia studied under her father Orazio and developed into one of the most accomplished followers of Caravaggio's revolutionary approach.`
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
