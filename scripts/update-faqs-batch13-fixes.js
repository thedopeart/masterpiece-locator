const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const updates = [
  {
    slug: 'the-garden-of-earthly-delights',
    faqs: [
      { question: "What is The Garden of Earthly Delights?", answer: "<a href=\"/artist/hieronymus-bosch\"><strong>Hieronymus Bosch</strong></a> painted this triptych showing Eden, earthly pleasures, and Hell. Hundreds of bizarre creatures and naked figures populate surreal landscapes." },
      { question: "Where can I see The Garden of Earthly Delights?", answer: "It's at the <a href=\"/museum/prado\"><strong>Museo del Prado</strong></a> in Madrid. The triptych is Bosch's most famous work and draws visitors from around the world." },
      { question: "What does The Garden of Earthly Delights mean?", answer: "Scholars still debate <a href=\"/artist/hieronymus-bosch\"><strong>Bosch's</strong></a> intent. Some see moral warning against sin, others a vision of lost paradise. The painting's mystery fuels endless interpretation." },
      { question: "How big is The Garden of Earthly Delights?", answer: "Open, the triptych spans about 13 feet wide. <a href=\"/artist/hieronymus-bosch\"><strong>Bosch</strong></a> packed incredible detail into every inch. For <a href=\"https://luxurywallart.com/collections/surrealism-art\" target=\"_blank\" rel=\"noopener\"><strong>surrealist art</strong></a>, it's a foundational influence." }
    ]
  },
  {
    slug: 'the-raft-of-the-medusa',
    faqs: [
      { question: "What event does The Raft of the Medusa show?", answer: "<a href=\"/artist/theodore-gericault\"><strong>Théodore Géricault</strong></a> depicted survivors of the French frigate Méduse, wrecked in 1816. The 147 people on a makeshift raft suffered starvation and cannibalism." },
      { question: "Where can I see The Raft of the Medusa?", answer: "It dominates a wall at the <a href=\"/museum/louvre\"><strong>Louvre Museum</strong></a> in Paris. At roughly 16 x 23 feet, the painting's massive scale immerses viewers in the tragedy." },
      { question: "Why was The Raft of the Medusa controversial?", answer: "<a href=\"/artist/theodore-gericault\"><strong>Géricault</strong></a> criticized government incompetence that caused the disaster. The raw depiction of suffering and death shocked audiences used to idealized classical subjects." },
      { question: "What style is The Raft of the Medusa?", answer: "It bridges <a href=\"/movement/neoclassicism\"><strong>Neoclassicism</strong></a> and Romanticism. <a href=\"/artist/theodore-gericault\"><strong>Géricault</strong></a> used classical composition but chose a modern, politically charged subject with raw emotional power." }
    ]
  }
];

async function main() {
  console.log('Updating artworks with correct slugs (Batch 13 fixes)...');
  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: { faqs: update.faqs, updatedAt: new Date() }
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (e) {
      console.error(`✗ Failed: ${update.slug}`, e.message);
    }
  }
}

main().catch(console.error).finally(() => prisma.$disconnect());
