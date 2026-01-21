const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'grant-wood', 'hans-makart', 'harriet-backer', 'jackson-pollock',
  'frederick-arthur-bridgman', 'jules-pascin', 'luca-giordano',
  'ludwig-deutsch', 'marc-chagall', 'meindert-hobbema', 'adriaen-coorte',
  'philips-wouwerman', 'mikhail-vrubel', 'salvador-dali', 'sodoma',
  'willem-claesz-heda', 'willem-van-de-velde-younger', 'lawrence-alma-tadema',
  'john-william-godward', 'george-romney', 'georgia-okeeffe', 'louis-le-nain',
  'maximilien-luce', 'richard-dadd', 'jean-honore-fragonard'
];

async function main() {
  for (const slug of slugs) {
    const artist = await prisma.artist.findUnique({
      where: { slug },
      select: {
        slug: true,
        name: true,
        nationality: true,
        birthYear: true,
        deathYear: true,
        wikipediaUrl: true,
        faqs: true,
        Movement: { select: { slug: true, name: true } }
      }
    });

    if (artist) {
      console.log('\n' + '='.repeat(80));
      console.log(`ARTIST: ${artist.name} (${artist.slug})`);
      console.log(`Nationality: ${artist.nationality || 'Unknown'}`);
      console.log(`Years: ${artist.birthYear || '?'}-${artist.deathYear || '?'}`);
      console.log(`Movements: ${artist.Movement?.map(m => m.name).join(', ') || 'None'}`);
      console.log(`Wikipedia: ${artist.wikipediaUrl || 'None'}`);
      console.log('\nCurrent FAQs:');
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
      console.log(`\nArtist not found: ${slug}`);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
