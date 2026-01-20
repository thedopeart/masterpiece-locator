const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'woman-holding-balance',
    faqs: [
      { question: "What is the meaning behind Woman Holding a Balance?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> created an allegory about weighing one's life choices. The empty scales and Last Judgment painting behind her suggest spiritual reflection over material wealth in <a href=\"/movement/baroque\"><strong>Baroque</strong></a> tradition." },
      { question: "Where can I see Woman Holding a Balance?", answer: "This 1664 masterpiece hangs at the <a href=\"/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington D.C. The museum's Dutch collection features several important <a href=\"/movement/baroque\"><strong>Baroque</strong></a> works." },
      { question: "What technique did Vermeer use in this painting?", answer: "<a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> used soft, diffused light from the left window, his signature approach. Lovers of <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blue artwork</strong></a> appreciate the woman's ultramarine jacket." },
      { question: "Why are the scales empty in Vermeer's painting?", answer: "The <strong>empty balance</strong> shifts focus from weighing gold to weighing moral choices. <a href=\"/artist/johannes-vermeer\"><strong>Vermeer</strong></a> uses this detail to transform a simple domestic scene into deeper meditation on virtue." }
    ]
  },
  {
    slug: 'music-tuileries',
    faqs: [
      { question: "What makes Music in the Tuileries important?", answer: "<a href=\"/artist/edouard-manet\"><strong>Manet</strong></a> broke from tradition by painting modern Parisian life rather than historical scenes. This 1862 work helped launch <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a> by capturing everyday leisure moments." },
      { question: "Where is Music in the Tuileries displayed?", answer: "The painting hangs at the <a href=\"/museum/national-gallery-london\"><strong>National Gallery</strong></a> in London. It's considered a key early work in the <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> movement's development." },
      { question: "Who are the people in Music in the Tuileries?", answer: "<a href=\"/artist/edouard-manet\"><strong>Manet</strong></a> included himself and friends like poet Baudelaire among the crowd. The painting captures Parisian bourgeoisie socializing, a subject explored in <a href=\"https://luxurywallart.com/collections/people-paintings\" target=\"_blank\" rel=\"noopener\"><strong>people paintings</strong></a>." },
      { question: "What style is Music in the Tuileries?", answer: "It's an early <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> work with loose brushwork and cropped composition. <a href=\"/artist/edouard-manet\"><strong>Manet</strong></a> rejected academic finish, favoring spontaneous scenes of contemporary life over polished classical subjects." }
    ]
  },
  {
    slug: 'basket-of-apples',
    faqs: [
      { question: "Where is The Basket of Apples displayed?", answer: "This still life hangs at the <a href=\"/museum/art-institute-chicago\"><strong>Art Institute of Chicago</strong></a>. It's one of <a href=\"/artist/paul-cezanne\"><strong>Cézanne's</strong></a> most studied works, showing his signature tilted perspective that later influenced Cubist painters." },
      { question: "Why does the table look tilted in this painting?", answer: "<a href=\"/artist/paul-cezanne\"><strong>Cézanne</strong></a> deliberately shifted perspective to show objects from multiple angles at once. This <a href=\"/movement/post-impressionism\"><strong>Post-Impressionist</strong></a> approach broke from traditional single-point perspective and opened the door for modern abstraction." },
      { question: "What art movement does The Basket of Apples belong to?", answer: "It's a key work of <a href=\"/movement/post-impressionism\"><strong>Post-Impressionism</strong></a>. <a href=\"/artist/paul-cezanne\"><strong>Cézanne</strong></a> moved beyond Impressionist techniques, focusing on structure and form. Browse <a href=\"https://luxurywallart.com/collections/earth-tones\" target=\"_blank\" rel=\"noopener\"><strong>earth tone artwork</strong></a> for similar warm palettes." }
    ]
  },
  {
    slug: 'bellelli-family',
    faqs: [
      { question: "Where is The Bellelli Family painting located?", answer: "You'll find it at the <a href=\"/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris. <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> painted his aunt's family during an extended stay in Florence, capturing domestic tension with subtle body language." },
      { question: "What makes The Bellelli Family an unusual portrait?", answer: "<a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> showed family discord rather than harmony. The father sits apart, turned away. This psychological depth set it apart from conventional <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> and Victorian portraits." },
      { question: "How does The Bellelli Family reflect Impressionism?", answer: "While the composition feels formal, <a href=\"/artist/edgar-degas\"><strong>Degas</strong></a> used natural poses and domestic settings typical of <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>. Browse <a href=\"https://luxurywallart.com/collections/portrait-art\" target=\"_blank\" rel=\"noopener\"><strong>portrait artwork</strong></a> for similar intimate family scenes." }
    ]
  },
  {
    slug: 'la-grenouillere-monet',
    faqs: [
      { question: "What is La Grenouillère?", answer: "La Grenouillère was a popular bathing and boating spot on the Seine near Paris. <a href=\"/artist/claude-monet\"><strong>Claude Monet</strong></a> and Renoir painted side by side here in 1869, developing techniques that would define <a href=\"/movement/impressionism\"><strong>Impressionism</strong></a>." },
      { question: "Why is this painting important to Impressionism?", answer: "Monet's quick, broken brushstrokes capturing sunlight on water helped establish the <a href=\"/movement/impressionism\"><strong>Impressionist</strong></a> style. This riverside scene marked a shift from studio work to <a href=\"https://luxurywallart.com/collections/coastal-decor\" target=\"_blank\" rel=\"noopener\"><strong>outdoor painting</strong></a>." },
      { question: "Where is La Grenouillère displayed?", answer: "You'll find this painting at the <a href=\"/museum/metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York. Renoir's version of the same scene hangs in Stockholm." },
      { question: "What colors dominate the painting?", answer: "Cool <a href=\"https://luxurywallart.com/collections/blue-wall-art\" target=\"_blank\" rel=\"noopener\"><strong>blues and greens</strong></a> capture the water and foliage, while warm earth tones render the figures and wooden platforms. <a href=\"/artist/claude-monet\"><strong>Monet</strong></a> used visible brushwork throughout." }
    ]
  }
];

async function main() {
  console.log(`Updating ${updates.length} artworks with FAQs (fixed slugs)...`);

  for (const update of updates) {
    try {
      const result = await prisma.artwork.update({
        where: { slug: update.slug },
        data: {
          faqs: update.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ Updated: ${result.title}`);
    } catch (error) {
      console.error(`✗ Failed to update ${update.slug}:`, error.message);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
