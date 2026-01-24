const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = [
  {
    slug: 'piero-della-francesca-sigismondo-malatesta',
    description: `<p><a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> painted this profile portrait around 1451, depicting Sigismondo Pandolfo Malatesta, the Lord of Rimini. The work shows the condottiero in strict profile against a dark background, his features rendered with the geometric precision that defines Piero's entire approach to painting. The stark simplicity of the composition strips away everything except the essential form of the man.</p>

<p>Sigismondo was a mercenary captain, patron of the arts, and one of the most controversial figures of fifteenth-century Italy. He commissioned Piero to paint a <strong>fresco at the Tempio Malatestiano</strong> in Rimini showing himself kneeling before his patron saint. This panel portrait likely dates from the same period of their association. The profile format follows ancient Roman coin portraits, deliberately linking Sigismondo to classical ideals of rulership and military virtue.</p>

<p>Piero's mathematical mind shows in every aspect of the work. The head sits precisely within the picture space, the features reduced to clear geometric forms without losing their individuality. The portrait now hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, where it represents one of the finest examples of Italian Renaissance <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>profile portraiture</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see the Portrait of Sigismondo Malatesta?",
        answer: `This painting hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. The museum's Italian Renaissance collection includes several important works by Piero della Francesca and his contemporaries.`
      },
      {
        question: "Who was Sigismondo Pandolfo Malatesta?",
        answer: `Sigismondo was the <strong>Lord of Rimini</strong>, a mercenary military captain (condottiero), and patron of the arts. He commissioned major works including the Tempio Malatestiano, but was also condemned by Pope Pius II for crimes including murder and heresy.`
      },
      {
        question: "Why is the portrait shown in profile?",
        answer: `The strict <strong>profile format</strong> deliberately echoes ancient Roman coin portraits, linking Sigismondo to classical ideals of leadership. <a href="/apps/masterpieces/artist/piero-della-francesca"><strong>Piero della Francesca</strong></a> used this convention to suggest nobility and timeless authority.`
      },
      {
        question: "What makes Piero della Francesca's style distinctive?",
        answer: `Piero brought <strong>mathematical precision</strong> to painting, reducing forms to clear geometric shapes while maintaining individual character. His figures possess a serene stillness and monumental quality that influenced artists for centuries.`
      }
    ]
  },
  {
    slug: 'giotto-the-dream-of-innocent-iii',
    description: `<p><a href="/apps/masterpieces/artist/giotto-di-bondone"><strong>Giotto di Bondone</strong></a> painted this fresco around 1297-1299 as part of his twenty-eight scene cycle in the Upper Basilica at Assisi. The image depicts a pivotal moment in Franciscan history: Pope Innocent III sleeps while dreaming that a small figure in a brown habit supports the crumbling Lateran Basilica, the mother church of Christendom, on his shoulders.</p>

<p>The dream convinced the Pope to authorize <strong>Saint Francis's new religious order</strong>. In Giotto's interpretation, the tilting church leans dramatically while Francis braces it from below, a visual metaphor for the reform movement that the Franciscans would bring to medieval Christianity. The Pope rests on an elaborate bed with rich hangings, contrasting with the humble brown-robed figure who saves the institution from collapse.</p>

<p>This fresco demonstrates Giotto's gift for translating complex theological ideas into clear, readable images. The architecture creates believable space, the figures show emotion through posture and gesture, and the narrative unfolds immediately to any viewer. The work remains in its original location at the <a href="/apps/masterpieces/museum/assisi-basilica"><strong>Basilica of Saint Francis of Assisi</strong></a>, part of a <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual pilgrimage</strong></a> site that draws visitors from around the world.</p>`,
    faqs: [
      {
        question: "Where can I see The Dream of Innocent III?",
        answer: `This fresco remains in its original location in the Upper Church of the <a href="/apps/masterpieces/museum/assisi-basilica"><strong>Basilica of Saint Francis of Assisi</strong></a> in Umbria, Italy. It forms part of the twenty-eight scene cycle depicting the life of Saint Francis.`
      },
      {
        question: "What does the Pope's dream mean?",
        answer: `In the dream, Pope Innocent III sees <strong>Saint Francis supporting the falling Lateran Basilica</strong>, the mother church of Christianity. This vision convinced the Pope that Francis's new order would help reform and strengthen the medieval Church.`
      },
      {
        question: "When did Giotto paint the Assisi frescoes?",
        answer: `<a href="/apps/masterpieces/artist/giotto-di-bondone"><strong>Giotto</strong></a> completed the Saint Francis cycle around <strong>1297-1299</strong>, though scholars continue debating exact dates and the extent of his personal involvement in all twenty-eight scenes.`
      },
      {
        question: "Why is this scene important for Franciscan history?",
        answer: `The dream directly led to <strong>papal approval</strong> of the Franciscan order. By showing Francis literally holding up the Church, the image symbolizes how the friars' poverty and preaching would renew Christianity during a time of institutional crisis.`
      }
    ]
  },
  {
    slug: 'fra-angelico-madonna-of-the-star',
    description: `<p><a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> painted this small devotional panel around 1424, creating an intimate image of the Virgin Mary holding the Christ child against a luminous gold background. The work takes its name from the star visible on Mary's shoulder or mantle, a traditional symbol identifying her as the "Star of the Sea" who guides believers toward salvation.</p>

<p>The panel demonstrates Fra Angelico's early mastery of <strong>miniature-like technique</strong>. Every detail receives careful attention: the delicate folds of Mary's blue robe, the gold striations of the background, the tender interaction between mother and child. Despite its small size, the work possesses a quiet monumentality. The figures fill the frame with dignified presence, their faces showing the gentle sweetness that would become Fra Angelico's signature.</p>

<p>Fra Angelico was a Dominican friar who approached painting as a form of prayer. His works radiate a spiritual calm that distinguished him from more dramatic contemporaries. This early panel now resides at the <strong>Museo di San Marco</strong> in Florence, the former Dominican convent where Fra Angelico created many of his greatest <a href="https://luxurywallart.com/collections/spiritual-art" target="_blank" rel="noopener"><strong>spiritual frescoes</strong></a>. The museum holds the world's largest collection of his work.</p>`,
    faqs: [
      {
        question: "Where can I see the Madonna of the Star?",
        answer: `This panel is displayed at the <strong>Museo di San Marco</strong> in Florence, Italy. The museum occupies the former Dominican convent where Fra Angelico lived and worked, and holds the world's largest collection of his paintings.`
      },
      {
        question: "Why is it called the Madonna of the Star?",
        answer: `The painting takes its name from the <strong>star on Mary's mantle</strong>, a traditional symbol identifying her as "Stella Maris" (Star of the Sea). This iconographic element represents Mary as a guiding light for Christian believers.`
      },
      {
        question: "When did Fra Angelico paint this work?",
        answer: `<a href="/apps/masterpieces/artist/fra-angelico"><strong>Fra Angelico</strong></a> created this panel around <strong>1424</strong> during his early career. The delicate, miniature-like technique already shows the luminous color and gentle spirituality that would define his mature work.`
      },
      {
        question: "What makes Fra Angelico's style distinctive?",
        answer: `Fra Angelico combined <strong>precise craftsmanship</strong> with deep spiritual devotion. His figures radiate calm and sweetness, his colors glow with inner light, and his compositions achieve clarity without sacrificing emotional warmth. He approached painting as a form of prayer.`
      }
    ]
  },
  {
    slug: 'hyacinthe-rigaud-louis-xiv-roi-de-france',
    description: `<p><a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a> painted this definitive portrait of Louis XIV in 1701, when the Sun King was sixty-three years old. The monarch stands in full regalia: ermine-lined coronation robes embroidered with golden fleur-de-lis, the sword of Charlemagne at his side, high-heeled shoes displaying his still-elegant legs. The image became the most reproduced portrait in French history.</p>

<p>Every element serves the propaganda of <strong>absolute monarchy</strong>. Louis gestures toward his crown resting on a cushion, reminding viewers of his divine right to rule. The massive column and sweeping drapery create a theatrical setting worthy of Versailles itself. Yet Rigaud doesn't hide Louis's age. The face shows an older man with heavy features, lending the portrait a surprising honesty beneath its overwhelming grandeur.</p>

<p>Originally intended as a gift for Louis's grandson Philip V of Spain, the portrait so pleased the king that he kept the original and sent a copy instead. The painting now dominates a gallery at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, where it remains the ultimate statement of <a href="https://luxurywallart.com/collections/kings-and-queens" target="_blank" rel="noopener"><strong>royal power</strong></a> and Baroque portraiture at its most ambitious.</p>`,
    faqs: [
      {
        question: "Where can I see Rigaud's Portrait of Louis XIV?",
        answer: `This iconic painting hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. It dominates the French painting galleries and remains the most famous state portrait in French history, widely reproduced for centuries.`
      },
      {
        question: "What symbols of power appear in the portrait?",
        answer: `Louis wears <strong>coronation robes</strong> embroidered with fleur-de-lis, carries the sword of Charlemagne, and gestures toward his crown. The column, drapery, and theatrical setting reinforce his status as Europe's most powerful absolute monarch.`
      },
      {
        question: "How old was Louis XIV in this portrait?",
        answer: `<a href="/apps/masterpieces/artist/hyacinthe-rigaud"><strong>Hyacinthe Rigaud</strong></a> painted the king at <strong>sixty-three years old</strong> in 1701. Despite the grandeur, Rigaud honestly depicts Louis's aged features, giving the portrait psychological depth beneath its propaganda function.`
      },
      {
        question: "Why was this portrait so influential?",
        answer: `The portrait established the template for <strong>European state portraiture</strong> for over a century. Its combination of theatrical setting, symbolic regalia, and commanding pose was copied by rulers across the continent seeking to project similar absolute authority.`
      }
    ]
  },
  {
    slug: 'maurice-quentin-de-la-tour-madame-de-pompadour',
    description: `<p><a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> created this portrait of Madame de Pompadour in 1755, producing the largest pastel ever made at over five feet tall. The Marquise sits surrounded by symbols of her cultural influence: books, musical scores, engravings, and a portfolio of drawings. She was the official mistress of Louis XV and one of the most powerful women in France.</p>

<p>Pompadour carefully controlled her image, and this portrait presents her as a <strong>patron of the Enlightenment</strong> rather than merely a royal favorite. Her blue silk dress matches the volumes beside her. She holds an open book while more texts stack nearby, including the Encyclopédie she helped protect from censorship. The composition emphasizes intellect and taste over beauty or seduction.</p>

<p>Working in pastel presented enormous technical challenges at this scale. La Tour built up layers of powdered pigment to achieve the luminous textures of silk, skin, and paper. The portrait took years to complete and nearly ruined the artist's health. Today it hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, a testament to both Pompadour's cultural ambitions and La Tour's mastery of the <a href="https://luxurywallart.com/collections/portrait-art" target="_blank" rel="noopener"><strong>portrait format</strong></a>.</p>`,
    faqs: [
      {
        question: "Where can I see this portrait of Madame de Pompadour?",
        answer: `This monumental pastel hangs at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a> in Paris, France. At over five feet tall, it remains the largest pastel portrait ever created and one of the museum's most celebrated eighteenth-century works.`
      },
      {
        question: "Who was Madame de Pompadour?",
        answer: `Jeanne-Antoinette Poisson, Marquise de Pompadour, was the <strong>official mistress of Louis XV</strong> and one of France's most influential cultural patrons. She supported Enlightenment philosophers, protected the Encyclopédie, and shaped French taste for two decades.`
      },
      {
        question: "Why is the portrait filled with books and engravings?",
        answer: `Pompadour deliberately presented herself as an <strong>intellectual and patron</strong> rather than merely a royal mistress. The books, musical scores, and art portfolios surrounding her emphasize her role in supporting Enlightenment culture and the arts.`
      },
      {
        question: "What makes this pastel portrait technically remarkable?",
        answer: `<a href="/apps/masterpieces/artist/maurice-quentin-de-la-tour"><strong>Maurice Quentin de La Tour</strong></a> worked at unprecedented scale in the fragile <strong>pastel medium</strong>. Building up layers of powdered pigment over years, he achieved luminous textures that rival oil painting while capturing Pompadour's famous elegance.`
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
