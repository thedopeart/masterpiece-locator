const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Fixing movement links for 3 artists...\n');

  // Gustave Courbet - add Impressionism link (he influenced the movement)
  const courbet = await prisma.artist.findUnique({ where: { slug: 'gustave-courbet' }});
  if (courbet) {
    const newBio = courbet.bioFull.replace(
      'directly influenced Manet, Monet, and the Impressionists',
      'directly influenced Manet, Monet, and the <a href="/movement/impressionism"><strong>Impressionists</strong></a>'
    );
    await prisma.artist.update({
      where: { slug: 'gustave-courbet' },
      data: { bioFull: newBio, updatedAt: new Date() }
    });
    console.log('✓ Fixed: gustave-courbet (added Impressionism link)');
  }

  // Lawrence Alma-Tadema - add Academic Art link
  const almaTadema = await prisma.artist.findUnique({ where: { slug: 'lawrence-alma-tadema' }});
  if (almaTadema) {
    const newBio = almaTadema.bioFull.replace(
      'Dutch-British painter <strong>Sir Lawrence Alma-Tadema</strong>',
      '<a href="/movement/academic-art"><strong>Academic Art</strong></a> master <strong>Sir Lawrence Alma-Tadema</strong>'
    );
    await prisma.artist.update({
      where: { slug: 'lawrence-alma-tadema' },
      data: { bioFull: newBio, updatedAt: new Date() }
    });
    console.log('✓ Fixed: lawrence-alma-tadema (added Academic Art link)');
  }

  // John William Godward - add Academic Art link
  const godward = await prisma.artist.findUnique({ where: { slug: 'john-william-godward' }});
  if (godward) {
    const newBio = godward.bioFull.replace(
      'Victorian Neo-Classicist <strong>John William Godward</strong>',
      '<a href="/movement/academic-art"><strong>Academic Art</strong></a> painter <strong>John William Godward</strong>'
    );
    await prisma.artist.update({
      where: { slug: 'john-william-godward' },
      data: { bioFull: newBio, updatedAt: new Date() }
    });
    console.log('✓ Fixed: john-william-godward (added Academic Art link)');
  }

  console.log('\nAll movement links fixed!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
