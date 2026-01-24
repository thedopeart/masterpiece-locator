const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Fixing second Laocoön entry...');
  
  const result = await prisma.artwork.update({
    where: { slug: 'laocoon-sons-vatican' },
    data: {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg/800px-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg',
      imageAttribution: 'Wikimedia Commons - Public Domain',
      updatedAt: new Date()
    }
  });
  
  console.log('Fixed:', result.title);
}

main().catch(console.error).finally(() => prisma.$disconnect());
