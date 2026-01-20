import { prisma } from '../src/lib/db';

/**
 * Fix broken image URLs in the database
 * All images are from Wikimedia Commons - verified public domain
 *
 * Copyright verification:
 * - All artists died 70+ years ago (public domain under life+70 rule)
 * - Vincent van Gogh (d. 1890) - public domain
 * - Caspar David Friedrich (d. 1840) - public domain
 * - Francisco Goya (d. 1828) - public domain
 * - Jan Vermeer (d. 1675) - public domain
 * - Edgar Degas (d. 1917) - public domain
 * - El Greco (d. 1614) - public domain
 * - Paul Gauguin (d. 1903) - public domain
 * - Henri Matisse (d. 1954) - public domain (just entered in 2024)
 * - Gustav Klimt (d. 1918) - public domain
 * - Henri de Toulouse-Lautrec (d. 1901) - public domain
 * - Caravaggio (d. 1610) - public domain
 * - Claude Monet (d. 1926) - public domain
 * - Egon Schiele (d. 1918) - public domain
 * - Amedeo Modigliani (d. 1920) - public domain
 * - Peter Paul Rubens (d. 1640) - public domain
 * - Frida Kahlo (d. 1954) - public domain (just entered in 2024)
 */

const imageUpdates: { title: string; newUrl: string }[] = [
  // Sunflowers - van Gogh (public domain, d. 1890)
  {
    title: "Sunflowers",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/4/46/Vincent_Willem_van_Gogh_127.jpg"
  },
  // Wanderer above the Sea of Fog - Caspar David Friedrich (public domain, d. 1840)
  {
    title: "Wanderer above the Sea of Fog",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg"
  },
  // Saturn Devouring His Son - Goya (public domain, d. 1828)
  {
    title: "Saturn Devouring His Son",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg"
  },
  // The Art of Painting - Vermeer (public domain, d. 1675)
  {
    title: "The Art of Painting",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg"
  },
  // L'Absinthe - Degas (public domain, d. 1917)
  {
    title: "L'Absinthe",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg"
  },
  // View of Toledo - El Greco (public domain, d. 1614)
  {
    title: "View of Toledo",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/El_Greco_-_View_of_Toledo_-_Google_Art_Project.jpg"
  },
  // Where Do We Come From? - Gauguin (public domain, d. 1903)
  {
    title: "Where Do We Come From? What Are We? Where Are We Going?",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Paul_Gauguin_-_D%27ou_venons-nous.jpg"
  },
  // Dance - Matisse (public domain, d. 1954 - entered PD 2024)
  {
    title: "Dance",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Matissedance.jpg"
  },
  // The Dance - Matisse (alternate title)
  {
    title: "The Dance",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Matissedance.jpg"
  },
  // The Kiss - Klimt (public domain, d. 1918)
  {
    title: "The Kiss",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"
  },
  // At the Moulin Rouge - Toulouse-Lautrec (public domain, d. 1901)
  {
    title: "At the Moulin Rouge",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg"
  },
  // Judith Beheading Holofernes - Caravaggio (public domain, d. 1610)
  {
    title: "Judith Beheading Holofernes",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Caravaggio_Judith_Beheading_Holofernes.jpg"
  },
  // Haystacks (End of Summer) - Monet (public domain, d. 1926)
  {
    title: "Haystacks (End of Summer)",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg"
  },
  // Seated Woman with Bent Knee - Schiele (public domain, d. 1918)
  {
    title: "Seated Woman with Bent Knee",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Egon_Schiele_-_Seated_Woman_with_Legs_Drawn_Up_%28Adele_Herms%29_-_Google_Art_Project.jpg"
  },
  // Reclining Nude - Modigliani (public domain, d. 1920)
  {
    title: "Reclining Nude (Le Grand Nu)",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Amedeo_Modigliani_Nu_Couch%C3%A9_au_coussin_Bleu.jpg"
  },
  // Descent from the Cross - Rubens (public domain, d. 1640)
  {
    title: "Descent from the Cross",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Peter_Paul_Rubens_-_Descent_from_the_Cross_-_WGA20212.jpg"
  },
  // The Descent from the Cross - Rubens (alternate title)
  {
    title: "The Descent from the Cross",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Peter_Paul_Rubens_-_Descent_from_the_Cross_-_WGA20212.jpg"
  },
  // The Two Fridas - Kahlo (public domain, d. 1954 - entered PD 2024)
  {
    title: "The Two Fridas",
    newUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Las_dos_Fridas.jpg"
  }
];

async function fixBrokenImages() {
  console.log("Fixing broken image URLs...\n");

  let updated = 0;
  let notFound = 0;

  for (const { title, newUrl } of imageUpdates) {
    const result = await prisma.artwork.updateMany({
      where: { title },
      data: { imageUrl: newUrl }
    });

    if (result.count > 0) {
      console.log(`✓ Updated: ${title} (${result.count} records)`);
      updated += result.count;
    } else {
      console.log(`- Not found: ${title}`);
      notFound++;
    }
  }

  console.log(`\nDone! Updated ${updated} artworks.`);
  if (notFound > 0) {
    console.log(`(${notFound} titles not found in database)`);
  }

  await prisma.$disconnect();
}

fixBrokenImages().catch(console.error);
