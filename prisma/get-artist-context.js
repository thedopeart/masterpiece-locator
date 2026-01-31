const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

const slugs = ['mark-rothko','alberto-giacometti','frederic-remington','augustus-saint-gaudens','francis-bacon','roy-lichtenstein','jean-michel-basquiat','willem-de-kooning','jeff-koons','jasper-johns','constantin-brancusi','ai-weiwei','dale-chihuly','hilaire-germain-edgar-degas','jean-antoine-houdon','giambologna','emile-antoine-bourdelle','clodion','pierre-jean-david-dangers','augustin-pajou','jean-l-on-g-r-me','gaston-lachaise','hiram-powers','tilman-riemenschneider','alessandro-vittoria'];

(async () => {
  for (const slug of slugs) {
    const a = await p.artist.findUnique({
      where: { slug },
      select: {
        name: true,
        nationality: true,
        birthYear: true,
        deathYear: true,
        Movement: { select: { slug: true, name: true } },
        Artwork: {
          select: { Museum: { select: { slug: true, name: true } } },
          distinct: ['museumId'],
        },
      },
    });
    if (a === null) { console.log(slug + ' | NOT FOUND'); continue; }
    const movs = a.Movement.map(m => m.slug).join(', ');
    const museums = a.Artwork.filter(aw => aw.Museum !== null).map(aw => aw.Museum.slug).join(', ');
    console.log(`${slug} | ${a.name} | ${a.nationality || ''} | ${a.birthYear || ''}-${a.deathYear || ''} | movs: ${movs} | museums: ${museums}`);
  }
  await p.$disconnect();
})();
