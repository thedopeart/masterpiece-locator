const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'james-ensor', 'jan-davidsz-de-heem', 'rudolf-ernst', 'caspar-netscher',
  'edward-hopper', 'francesco-furini', 'theodore-chasseriau', 'anders-zorn',
  'elisabeth-vigee-le-brun', 'frederic-edwin-church', 'katsushika-hokusai', 'pontormo'
];

async function main() {
  for (const slug of slugs) {
    const artist = await prisma.artist.findUnique({
      where: { slug },
      select: {
        slug: true,
        name: true,
        faqs: true,
        wikipediaUrl: true,
        nationality: true,
        birthYear: true,
        deathYear: true,
        Movement: { select: { name: true, slug: true } }
      }
    });

    if (artist) {
      console.log(`\n=== ${artist.name} (${artist.slug}) ===`);
      console.log(`Nationality: ${artist.nationality || 'N/A'}`);
      console.log(`Years: ${artist.birthYear || '?'}-${artist.deathYear || '?'}`);
      console.log(`Wikipedia: ${artist.wikipediaUrl || 'N/A'}`);
      console.log(`Movements: ${artist.Movement?.map(m => `${m.name} (${m.slug})`).join(', ') || 'None'}`);
      console.log(`\nFAQs:`);
      if (artist.faqs && Array.isArray(artist.faqs)) {
        artist.faqs.forEach((faq, i) => {
          const wordCount = faq.answer.replace(/<[^>]*>/g, '').split(/\s+/).length;
          console.log(`\n${i+1}. Q: ${faq.question}`);
          console.log(`   A: ${faq.answer}`);
          console.log(`   [${wordCount} words]`);
        });
      } else {
        console.log('No FAQs found');
      }
    } else {
      console.log(`\n=== ${slug} NOT FOUND ===`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
