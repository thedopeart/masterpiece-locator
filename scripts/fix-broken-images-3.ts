import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Corrected Wikimedia Commons URLs for broken/missing images
// All artists died 70+ years ago - public domain
const fixes: Record<string, string> = {
  // Previous fixes
  "sick-child": "https://upload.wikimedia.org/wikipedia/commons/4/41/Edvard_Munch_-_The_Sick_Child_%281885-1886%29_-_Google_Art_Project.jpg",
  "when-will-you-marry": "https://upload.wikimedia.org/wikipedia/commons/2/27/Paul_Gauguin_-_Nafea_Faa_Ipoipo%3F_%28When_Will_You_Marry%3F%29_-_Google_Art_Project.jpg",
  "adele-bloch-bauer-ii": "https://upload.wikimedia.org/wikipedia/commons/8/87/Gustav_Klimt_-_Portrait_of_Adele_Bloch-Bauer_II_-_1912.jpg",
  "madonna-munch": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Edvard_Munch_-_Madonna_-_Google_Art_Project.jpg",
  "madonna-with-the-long-neck": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Parmigianino_-_Madonna_with_the_Long_Neck.jpg",
  "venus-cupid-folly-and-time": "https://upload.wikimedia.org/wikipedia/commons/3/30/Angelo_Bronzino_-_Venus%2C_Cupid%2C_Folly_and_Time_-_National_Gallery%2C_London.jpg",
  "the-blue-boy": "https://upload.wikimedia.org/wikipedia/commons/1/17/Thomas_Gainsborough_-_The_Blue_Boy_%28The_Huntington_Library%2C_San_Marino_L._A.%29.jpg",
  "the-laughing-cavalier": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Frans_Hals_-_The_Laughing_Cavalier_-_WGA11133.jpg",
  "the-ray": "https://upload.wikimedia.org/wikipedia/commons/9/93/Jean-Baptiste-Sim%C3%A9on_Chardin_-_The_Ray_-_WGA04750.jpg",
  "ghent-altarpiece": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Lamgods_open.jpg",
  "woman-parasol": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
  "madame-pompadour-la-tour": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Maurice_Quentin_de_La_Tour_-_Portrait_of_the_Marquise_de_Pompadour_-_WGA12360.jpg",
  "adoration-shepherds-bassano": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Jacopo_Bassano_-_Adoration_of_the_Shepherds_-_WGA01420.jpg",
  "preaching-john-baptist-bloemaert": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Abraham_Bloemaert_-_The_preaching_of_St_John_the_Baptist.jpg",
  "fall-rebel-angels-beccafumi": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Domenico_Beccafumi_-_Fall_of_the_Rebel_Angels_-_WGA01535.jpg",
  "lady-with-glove": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Carolus-Duran_-_Lady_with_a_Glove_%28Mme._Carolus-Duran%29.jpg",
  "swooning-saint-catherine": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Giovanni_Antonio_Bazzi_001.jpg",
  "hylas-nymphs-furini": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Francesco_Furini_-_Hylas_and_the_Nymphs_-_WGA08332.jpg",
  "autumn-landscape-inness-jr": "https://upload.wikimedia.org/wikipedia/commons/f/f5/George_Inness_Jr._-_Autumn_Landscape_%28ca._1894%29.jpg",
  "the-city-leger": "https://upload.wikimedia.org/wikipedia/commons/9/93/Fernand_L%C3%A9ger_-_La_Ville_%28The_City%29_-_Google_Art_Project.jpg",
  "regatta-cowes": "https://upload.wikimedia.org/wikipedia/commons/8/85/Raoul_Dufy_-_Regatta_at_Cowes.jpg",
  "death-and-life": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Gustav_Klimt_-_Death_and_Life_-_Google_Art_Project.jpg",

  // NEW FIXES for missing public domain images - VERIFIED URLs from Wikimedia API
  // Joaquín Sorolla (d.1923)
  "children-beach-sorolla": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Joaqu%C3%ADn_Sorolla_y_Bastida_-_Children_on_the_Beach_-_A2138_-_Hispanic_Society_of_America.jpg",

  // Ernest Meissonier (d.1891)
  "1807-friedland": "https://upload.wikimedia.org/wikipedia/commons/e/e1/1807%2C_Friedland.jpg",

  // Juan Gris (d.1927)
  "portrait-picasso-gris": "https://upload.wikimedia.org/wikipedia/commons/1/18/Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg",
  "violin-checkerboard": "https://upload.wikimedia.org/wikipedia/commons/6/67/Juan_Gris_-_Violin_and_Checkerboard.jpg",

  // Vilhelm Hammershøi (d.1916)
  "interior-woman-piano": "https://upload.wikimedia.org/wikipedia/commons/0/04/Vilhelm_Hammersh%C3%B8i%2C_Stue_med_kvinde_ved_klaver%2C_Strandgade_30%2C_1901.jpg",
  "interior-young-woman-behind": "https://upload.wikimedia.org/wikipedia/commons/5/56/Vilhelm_Hammershoi_-_Interieur_mit_Rueckenansicht_einer_Frau_-_1903-1904_-_Randers_Kunstmuseum.jpg",
  "dust-motes-dancing-sunbeams": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hammersh%C3%B8i_Dust_motes_dancing.jpg",

  // Henri de Toulouse-Lautrec (d.1901)
  "jane-avril": "https://upload.wikimedia.org/wikipedia/commons/d/da/Jane_Avril_Leaving_the_Moulin_Rouge_Henri_de_Toulouse-Lautrec_1892.jpeg",
  "moulin-rouge-la-goulue": "https://upload.wikimedia.org/wikipedia/commons/8/85/Toulouse-Lautrec_-_Moulin_Rouge_-_La_Goulue.jpg",

  // Peder Severin Krøyer (d.1909)
  "summer-evening-skagen-beach": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Summer_evening_at_Skagen_-_P.S._Kr%C3%B8yer_-_Google_Cultural_Institute.jpg",

  // Élisabeth Vigée Le Brun (d.1842)
  "marie-antoinette-rose": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Marie_Louise_Elisabeth_Vig%C3%A9e-Lebrun_-_Erzherzogin_Marie_Antoinette_%281755-1793%29%2C_K%C3%B6nigin_von_Frankreich_-_GG_2772_-_Kunsthistorisches_Museum.jpg",

  // Jean-Marc Nattier (d.1766)
  "madame-henriette-flora": "https://upload.wikimedia.org/wikipedia/commons/4/45/Jean_marc_nattier_-_madame_anne_henriette_de_france.jpg",

  // Akseli Gallen-Kallela (d.1931)
  "aino-triptych": "https://upload.wikimedia.org/wikipedia/commons/1/17/Gallen_Kallela_The_Aino_Triptych.jpg",

  // Suzanne Valadon (d.1938)
  "the-blue-room-valadon": "https://upload.wikimedia.org/wikipedia/commons/2/23/Valadon_Chambre-Bleue.jpg",

  // Ferdinand Georg Waldmüller (d.1865)
  "children-at-window-waldmuller": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ferdinand_Georg_Waldm%C3%BCller_-_Children_at_the_Window_-_WGA25429.jpg",

  // Diego Velázquez (d.1660)
  "rokeby-venus": "https://upload.wikimedia.org/wikipedia/commons/8/80/Diego_Vel%C3%A1zquez_-_Rokeby_Venus.jpg",
};

async function main() {
  console.log("Fixing broken image URLs...\n");

  let fixed = 0;
  for (const [slug, newUrl] of Object.entries(fixes)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug } });
    if (artwork) {
      await prisma.artwork.update({
        where: { slug },
        data: { imageUrl: newUrl },
      });
      console.log(`Fixed: ${artwork.title}`);
      fixed++;
    } else {
      console.log(`Not found: ${slug}`);
    }
  }

  console.log(`\nFixed ${fixed} images`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
