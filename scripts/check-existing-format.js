const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function check() {
  const museum = await prisma.museum.findUnique({
    where: { slug: 'guggenheim' },
    select: { description: true, faqs: true }
  });
  console.log('=== Description ===');
  console.log(museum.description);
  console.log('\n=== FAQs ===');
  console.log(JSON.stringify(museum.faqs, null, 2));
}

check().catch(console.error).finally(() => prisma.$disconnect());
