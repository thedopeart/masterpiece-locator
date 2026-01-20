import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Descriptions for artworks that are missing them
const descriptions: Record<string, { description: string; medium?: string; dimensions?: string }> = {
  "lamentation-giotto": {
    description: "A pivotal work in Western art showing the dead Christ mourned by angels and followers, with unprecedented emotional intensity and spatial depth.",
    medium: "Fresco",
    dimensions: "200 cm × 185 cm",
  },
  "ghent-altarpiece": {
    description: "A monumental polyptych featuring the Adoration of the Mystic Lamb, one of the most influential paintings in history and a masterpiece of oil technique.",
    medium: "Oil on oak panel",
    dimensions: "350 cm × 461 cm (open)",
  },
  "descent-rogier": {
    description: "A deeply moving depiction of Christ being lowered from the cross, with figures arranged like sculptural reliefs against a gold background.",
    medium: "Oil on oak panel",
    dimensions: "220 cm × 262 cm",
  },
  "expulsion-masaccio": {
    description: "Adam and Eve expelled from Eden, their anguished faces expressing shame and despair with revolutionary psychological realism.",
    medium: "Fresco",
    dimensions: "208 cm × 88 cm",
  },
  "tribute-money": {
    description: "Christ instructs Peter to find a coin in a fish's mouth to pay the temple tax, demonstrating Masaccio's mastery of perspective and atmospheric space.",
    medium: "Fresco",
    dimensions: "255 cm × 598 cm",
  },
  "flagellation-piero": {
    description: "Christ is flogged in the background while three enigmatic figures converse in the foreground, an intellectually complex composition.",
    medium: "Oil and tempera on panel",
    dimensions: "58.4 cm × 81.5 cm",
  },
  "duke-duchess-urbino": {
    description: "Profile portraits of Federico da Montefeltro and Battista Sforza, showcasing Renaissance ideals of nobility against panoramic landscapes.",
    medium: "Tempera on panel",
    dimensions: "47 cm × 33 cm (each)",
  },
  "adam-eve-cranach": {
    description: "The first humans stand in paradise, Eve offering the apple to Adam, with Cranach's characteristic elongated figures and decorative foliage.",
    medium: "Oil on panel",
    dimensions: "172 cm × 63 cm (each)",
  },
  "assumption-correggio": {
    description: "The Virgin ascends to heaven in a swirling vortex of angels and clouds, a revolutionary illusionistic ceiling fresco.",
    medium: "Fresco",
    dimensions: "1093 cm × 1195 cm",
  },
  "aurora-reni": {
    description: "The goddess of dawn leads Apollo's chariot across the sky, surrounded by dancing Hours, an epitome of Baroque classicism.",
    medium: "Fresco",
    dimensions: "280 cm × 700 cm",
  },
  "banquet-cleopatra": {
    description: "Cleopatra dissolves a pearl in wine to win a wager with Antony, staged as an opulent theatrical spectacle.",
    medium: "Oil on canvas",
    dimensions: "250 cm × 357 cm",
  },
  "grand-canal-canaletto": {
    description: "A luminous view of Venice's Grand Canal with the Baroque church of Santa Maria della Salute, capturing the city's unique light.",
    medium: "Oil on canvas",
    dimensions: "119 cm × 153 cm",
  },
  "bucintoro-molo": {
    description: "The Doge's ceremonial barge returns to the Molo on Ascension Day, documenting Venice's maritime rituals with topographic precision.",
    medium: "Oil on canvas",
    dimensions: "182 cm × 259 cm",
  },
  "woman-child-courtyard": {
    description: "A mother and child in a sunlit Dutch courtyard, exemplifying de Hooch's serene domestic interiors with masterful light effects.",
    medium: "Oil on canvas",
    dimensions: "73.5 cm × 68 cm",
  },
  "jewish-cemetery": {
    description: "Tombs amid ruins and blasted trees under stormy skies, a meditation on mortality and the passage of time.",
    medium: "Oil on canvas",
    dimensions: "84 cm × 95 cm",
  },
  "windmill-wijk": {
    description: "A monumental windmill dominates the sky above a Dutch waterway, perhaps the most famous image of the Netherlands.",
    medium: "Oil on canvas",
    dimensions: "83 cm × 101 cm",
  },
  "avenue-middelharnis": {
    description: "A long avenue of slender trees recedes to the horizon, creating an iconic image of the Dutch landscape.",
    medium: "Oil on canvas",
    dimensions: "103.5 cm × 141 cm",
  },
  "immaculate-conception-murillo": {
    description: "The Virgin Mary stands on a crescent moon surrounded by cherubs, an influential model for Catholic imagery.",
    medium: "Oil on canvas",
    dimensions: "274 cm × 190 cm",
  },
  "saint-serapion": {
    description: "The martyred saint hangs from his bound wrists, his white robes luminous against darkness in a powerful image of sacrifice.",
    medium: "Oil on canvas",
    dimensions: "120 cm × 103 cm",
  },
  "diana-leaving-bath": {
    description: "The goddess Diana emerges from bathing attended by a nymph, embodying Rococo sensuality and decorative elegance.",
    medium: "Oil on canvas",
    dimensions: "57 cm × 73 cm",
  },
  "reclining-girl-boucher": {
    description: "A young woman reclines in a state of abandon, displaying Boucher's mastery of pink flesh tones and silken textures.",
    medium: "Oil on canvas",
    dimensions: "59 cm × 73 cm",
  },
  "pilgrimage-cythera": {
    description: "Elegant couples depart the island of love, a dreamlike fête galante that defined a new genre in French painting.",
    medium: "Oil on canvas",
    dimensions: "129 cm × 194 cm",
  },
  "pierrot-gilles": {
    description: "A melancholy Pierrot stands isolated before a group of commedia dell'arte players, an enigmatic masterpiece of Rococo painting.",
    medium: "Oil on canvas",
    dimensions: "184 cm × 149 cm",
  },
  "portrait-omai": {
    description: "A young Polynesian visitor to London stands in flowing white robes, embodying Enlightenment ideals of the 'noble savage'.",
    medium: "Oil on canvas",
    dimensions: "236 cm × 145 cm",
  },
  "whistlejacket": {
    description: "A life-sized Arabian horse rears against a plain background, one of the greatest animal portraits ever painted.",
    medium: "Oil on canvas",
    dimensions: "292 cm × 246 cm",
  },
  "marriage-a-la-mode": {
    description: "A satirical scene of an aristocratic couple ignoring each other after a night of separate debaucheries, critiquing arranged marriages.",
    medium: "Oil on canvas",
    dimensions: "69.9 cm × 90.8 cm",
  },
  "ancient-of-days": {
    description: "God as architect measures the universe with a compass, Blake's iconic image of divine creation and limitation.",
    medium: "Etching with watercolor",
    dimensions: "23.3 cm × 16.8 cm",
  },
  "great-red-dragon": {
    description: "The apocalyptic beast from Revelation looms over the Woman Clothed in Sun, one of Blake's most terrifying visions.",
    medium: "Watercolor",
    dimensions: "43.7 cm × 34.8 cm",
  },
  "madame-x": {
    description: "Virginie Gautreau poses in a black gown with a plunging neckline, a portrait that scandalized Paris and made Sargent's reputation.",
    medium: "Oil on canvas",
    dimensions: "208.6 cm × 109.9 cm",
  },
  "daughters-boit": {
    description: "Four daughters of an American expatriate stand in a darkened Parisian apartment, influenced by Velázquez's Las Meninas.",
    medium: "Oil on canvas",
    dimensions: "221.93 cm × 222.57 cm",
  },
  "carnation-lily-rose": {
    description: "Two girls light paper lanterns in a flower-filled garden at dusk, capturing the fleeting magic of twilight.",
    medium: "Oil on canvas",
    dimensions: "174 cm × 153.7 cm",
  },
  "gross-clinic": {
    description: "Dr. Samuel Gross lectures during surgery, a shockingly realistic depiction of 19th-century medicine.",
    medium: "Oil on canvas",
    dimensions: "244 cm × 198 cm",
  },
  "max-schmitt": {
    description: "A rower pauses on the Schuylkill River, an image of athletic leisure in industrial Philadelphia.",
    medium: "Oil on canvas",
    dimensions: "82.5 cm × 117.5 cm",
  },
  "heart-of-andes": {
    description: "A panoramic view of the South American Andes, a monumental celebration of tropical nature's sublimity.",
    medium: "Oil on canvas",
    dimensions: "168 cm × 302.9 cm",
  },
  "niagara-church": {
    description: "The thundering falls seen from the Canadian side, capturing the awesome power of American nature.",
    medium: "Oil on canvas",
    dimensions: "101.6 cm × 229.9 cm",
  },
  "sierra-nevada": {
    description: "The dramatic peaks of the Sierra Nevada rise above a tranquil lake, bathed in golden western light.",
    medium: "Oil on canvas",
    dimensions: "183 cm × 305 cm",
  },
  "the-oxbow": {
    description: "A storm clears over the Connecticut River Valley, contrasting wild nature with cultivated landscape.",
    medium: "Oil on canvas",
    dimensions: "130.8 cm × 193 cm",
  },
  "course-empire-destruction": {
    description: "Barbarians sack a once-great city, the fourth painting in Cole's allegorical cycle on the rise and fall of civilizations.",
    medium: "Oil on canvas",
    dimensions: "100.3 cm × 161.3 cm",
  },
  "ninth-wave": {
    description: "Survivors cling to wreckage as an enormous wave approaches, lit by the first rays of dawn after a storm.",
    medium: "Oil on canvas",
    dimensions: "221 cm × 332 cm",
  },
  "barge-haulers": {
    description: "Ragged men strain to pull a barge up the Volga, a powerful indictment of human exploitation.",
    medium: "Oil on canvas",
    dimensions: "131.5 cm × 281 cm",
  },
  "reply-cossacks": {
    description: "Zaporozhian Cossacks compose a mocking letter to the Ottoman Sultan, celebrating defiant Ukrainian spirit.",
    medium: "Oil on canvas",
    dimensions: "203 cm × 358 cm",
  },
  "walk-on-beach": {
    description: "Two figures stroll along a sunlit Spanish beach, their white clothing brilliant against sea and sand.",
    medium: "Oil on canvas",
    dimensions: "205 cm × 200 cm",
  },
  "children-beach-sorolla": {
    description: "Naked children play in the surf under Mediterranean sun, capturing the joy of seaside childhood.",
    medium: "Oil on canvas",
    dimensions: "118 cm × 185 cm",
  },
  "isle-of-dead": {
    description: "A boat approaches a rocky island of cypresses and tombs, an enigmatic meditation on death and eternity.",
    medium: "Oil on panel",
    dimensions: "111 cm × 155 cm",
  },
  "the-sin": {
    description: "A woman with a serpent coiled around her body embodies temptation in this provocative Symbolist image.",
    medium: "Oil on canvas",
    dimensions: "88 cm × 53 cm",
  },
  "paris-street-rainy": {
    description: "Parisians with umbrellas cross a rain-slicked intersection, a meticulously composed view of Haussmann's new boulevards.",
    medium: "Oil on canvas",
    dimensions: "212.2 cm × 276.2 cm",
  },
  "floor-scrapers": {
    description: "Bare-chested workers scrape a wooden floor, an unflinching depiction of urban labor.",
    medium: "Oil on canvas",
    dimensions: "102 cm × 146.5 cm",
  },
};

async function main() {
  console.log("Adding descriptions to artworks...\n");

  let updated = 0;
  for (const [slug, data] of Object.entries(descriptions)) {
    const artwork = await prisma.artwork.findUnique({ where: { slug } });
    if (artwork) {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          ...(data.medium && { medium: data.medium }),
          ...(data.dimensions && { dimensions: data.dimensions }),
        },
      });
      console.log(`Updated: ${artwork.title}`);
      updated++;
    } else {
      console.log(`Not found: ${slug}`);
    }
  }

  console.log(`\nUpdated ${updated} artworks`);

  const remaining = await prisma.artwork.count({
    where: { OR: [{ description: null }, { description: "" }] },
  });
  console.log(`Artworks still missing description: ${remaining}`);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
