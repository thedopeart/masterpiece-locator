import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const descriptions: Record<string, { description: string; medium?: string; dimensions?: string }> = {
  "port-saint-tropez": {
    description: "Sailboats in the harbor rendered in vibrant Pointillist dots, capturing Mediterranean light and color.",
    medium: "Oil on canvas",
    dimensions: "131 cm × 161 cm",
  },
  "tower-blue-horses": {
    description: "Four blue horses rise in a tower-like composition, symbolizing spiritual aspiration through bold Expressionist color.",
    medium: "Oil on canvas",
    dimensions: "200 cm × 130 cm",
  },
  "yellow-cow": {
    description: "A joyful yellow cow leaps across a colorful landscape, embodying vitality and harmony with nature.",
    medium: "Oil on canvas",
    dimensions: "140 cm × 190 cm",
  },
  "large-blue-horses": {
    description: "Three blue horses curve together in perfect harmony, their forms echoing the rolling hills behind them.",
    medium: "Oil on canvas",
    dimensions: "105.7 cm × 181.1 cm",
  },
  "lady-green-jacket": {
    description: "A woman in a vivid green jacket walks through a park, rendered in bright Expressionist colors.",
    medium: "Oil on canvas",
    dimensions: "44 cm × 43.5 cm",
  },
  "street-berlin": {
    description: "Jagged figures crowd a Berlin street in acidic colors, capturing urban alienation and modern anxiety.",
    medium: "Oil on canvas",
    dimensions: "120.6 cm × 91.1 cm",
  },
  "portrait-picasso-gris": {
    description: "A Cubist portrait of Pablo Picasso fractured into geometric planes of blue and gray.",
    medium: "Oil on canvas",
    dimensions: "93.4 cm × 74.3 cm",
  },
  "violin-checkerboard": {
    description: "A violin and checkerboard dissolve into interlocking Cubist planes of muted colors.",
    medium: "Oil on canvas",
    dimensions: "100 cm × 65 cm",
  },
  "contrast-of-forms": {
    description: "Abstract tubular forms create a dynamic composition exploring pure color and volume.",
    medium: "Oil on canvas",
    dimensions: "130 cm × 97 cm",
  },
  "the-city-leger": {
    description: "A fractured urban landscape of signs, figures, and scaffolding celebrates modern city life.",
    medium: "Oil on canvas",
    dimensions: "231.1 cm × 298.4 cm",
  },
  "simultaneous-windows": {
    description: "The Eiffel Tower glimpsed through prismatic windows of pure color, exploring light and transparency.",
    medium: "Oil on canvas",
    dimensions: "46 cm × 40 cm",
  },
  "eiffel-tower-delaunay": {
    description: "The iconic tower fragments and reassembles in swirling Orphist color, celebrating modernity.",
    medium: "Oil on canvas",
    dimensions: "202 cm × 138.4 cm",
  },
  "city-rises": {
    description: "A massive red horse charges through workers and construction, embodying Futurist dynamism and urban energy.",
    medium: "Oil on canvas",
    dimensions: "199.3 cm × 301 cm",
  },
  "states-mind-farewells": {
    description: "Figures embrace amid swirling lines of force at a train station, capturing the emotion of departure.",
    medium: "Oil on canvas",
    dimensions: "70.5 cm × 96.2 cm",
  },
  "suprematist-composition": {
    description: "Geometric shapes float in infinite white space, a pure expression of Malevich's spiritual abstraction.",
    medium: "Oil on canvas",
    dimensions: "88.5 cm × 71 cm",
  },
  "charing-cross-bridge-derain": {
    description: "London's bridge rendered in explosive Fauvist colors, the Thames alive with reflected hues.",
    medium: "Oil on canvas",
    dimensions: "81 cm × 100 cm",
  },
  "the-dance-derain": {
    description: "Figures dance in a primitive, rhythmic composition influenced by African art and Fauvism.",
    medium: "Oil on canvas",
    dimensions: "185 cm × 228.5 cm",
  },
  "regatta-cowes": {
    description: "Sailboats race in a lively scene of leisure and sport, painted with characteristic breezy brushwork.",
    medium: "Oil on canvas",
    dimensions: "60 cm × 73 cm",
  },
  "carcass-beef": {
    description: "A raw side of beef hangs in visceral glory, paint applied with almost violent physicality.",
    medium: "Oil on canvas",
    dimensions: "140 cm × 107.5 cm",
  },
  "interior-woman-piano": {
    description: "A solitary figure at a piano in a spare, gray-toned room, evoking quiet introspection.",
    medium: "Oil on canvas",
    dimensions: "55.9 cm × 45.1 cm",
  },
  "midsummer-dance": {
    description: "Couples dance around a maypole on a Swedish midsummer eve, celebrating Nordic folk traditions.",
    medium: "Oil on canvas",
    dimensions: "140 cm × 98 cm",
  },
  "self-portrait-anniversary": {
    description: "The pregnant artist confronts the viewer on her wedding anniversary, an intimate self-examination.",
    medium: "Oil on board",
    dimensions: "101.8 cm × 70.2 cm",
  },
  "woman-dead-child": {
    description: "A mother clutches her dead child in raw grief, a stark image of human suffering.",
    medium: "Etching",
    dimensions: "42.4 cm × 48.6 cm",
  },
  "bridge-water-lilies": {
    description: "The Japanese footbridge arches over a pond of water lilies in Monet's garden at Giverny.",
    medium: "Oil on canvas",
    dimensions: "92.7 cm × 73.7 cm",
  },
  "japanese-footbridge": {
    description: "The wisteria-draped bridge spans the lily pond, dissolving into shimmering reflections and blooms.",
    medium: "Oil on canvas",
    dimensions: "89 cm × 93 cm",
  },
  "woman-parasol": {
    description: "A woman and child stand on a windswept hillside, her veil and dress billowing in the breeze.",
    medium: "Oil on canvas",
    dimensions: "100 cm × 81 cm",
  },
  "la-grenouillere-monet": {
    description: "Bathers and boats at the popular riverside resort, captured with revolutionary broken brushwork.",
    medium: "Oil on canvas",
    dimensions: "74.6 cm × 99.7 cm",
  },
  "bal-moulin-galette": {
    description: "Parisians dance and socialize under dappled sunlight at the outdoor dance hall in Montmartre.",
    medium: "Oil on canvas",
    dimensions: "131 cm × 175 cm",
  },
  "two-sisters-terrace": {
    description: "Two sisters sit on a flower-filled terrace overlooking the Seine, a vision of bourgeois contentment.",
    medium: "Oil on canvas",
    dimensions: "100.5 cm × 81 cm",
  },
  "luncheon-boating-party-renoir": {
    description: "Friends gather on a restaurant balcony after boating, a joyous celebration of leisure and friendship.",
    medium: "Oil on canvas",
    dimensions: "130.2 cm × 175.6 cm",
  },
  "the-star-dancer": {
    description: "A prima ballerina takes her bow under stage lights while others wait in the wings.",
    medium: "Pastel on paper",
    dimensions: "60 cm × 44 cm",
  },
  "bellelli-family": {
    description: "The artist's Italian relatives pose in their apartment, revealing family tensions through subtle arrangement.",
    medium: "Oil on canvas",
    dimensions: "200 cm × 250 cm",
  },
  "dancers-blue": {
    description: "Ballerinas in blue tutus adjust their costumes backstage, captured in motion and intimate detail.",
    medium: "Pastel on paper",
    dimensions: "66 cm × 67 cm",
  },
  "basket-of-apples": {
    description: "A tilted basket spills apples across a tablecloth, challenging traditional perspective with revolutionary form.",
    medium: "Oil on canvas",
    dimensions: "65 cm × 80 cm",
  },
  "still-life-apples-cezanne": {
    description: "Apples arranged on rumpled cloth demonstrate Cézanne's method of building form through color patches.",
    medium: "Oil on canvas",
    dimensions: "35.2 cm × 46.2 cm",
  },
  "arearea": {
    description: "Tahitian women and a red dog rest in a tropical landscape, evoking an earthly paradise.",
    medium: "Oil on canvas",
    dimensions: "75 cm × 94 cm",
  },
  "anxiety-munch": {
    description: "Ghostly figures stream across a bridge under a blood-red sky, companions to The Scream.",
    medium: "Oil on canvas",
    dimensions: "94 cm × 74 cm",
  },
  "moulin-rouge-la-goulue": {
    description: "The famous cancan dancer kicks high as onlookers crowd the Moulin Rouge dance floor.",
    medium: "Color lithograph",
    dimensions: "191 cm × 117 cm",
  },
  "jane-avril": {
    description: "The Moulin Rouge dancer poses elegantly, her sinuous form captured in bold Art Nouveau lines.",
    medium: "Color lithograph",
    dimensions: "124 cm × 91.5 cm",
  },
  "bathers-asnieres": {
    description: "Workers relax by the Seine on a summer afternoon, rendered in dots of pure color.",
    medium: "Oil on canvas",
    dimensions: "201 cm × 300 cm",
  },
  "the-circus-seurat": {
    description: "Acrobats, horses, and clowns perform in a swirling ring of Pointillist color and movement.",
    medium: "Oil on canvas",
    dimensions: "185.5 cm × 152.5 cm",
  },
  "nude-maja": {
    description: "A nude woman reclines on pillows, gazing boldly at the viewer with unprecedented directness.",
    medium: "Oil on canvas",
    dimensions: "97 cm × 190 cm",
  },
  "clothed-maja": {
    description: "The same woman now dressed in white, perhaps painted to deflect censure of the nude version.",
    medium: "Oil on canvas",
    dimensions: "95 cm × 190 cm",
  },
  "the-dog-goya": {
    description: "A dog's head emerges from rising sand or water, a haunting image of existential isolation.",
    medium: "Oil mural transferred to canvas",
    dimensions: "131.5 cm × 79.3 cm",
  },
  "death-sardanapalus": {
    description: "The Assyrian king watches his treasures and concubines destroyed, a violent Romantic fantasy.",
    medium: "Oil on canvas",
    dimensions: "392 cm × 496 cm",
  },
  "women-of-algiers": {
    description: "Harem women lounge in an exotic interior, inspired by Delacroix's visit to North Africa.",
    medium: "Oil on canvas",
    dimensions: "180 cm × 229 cm",
  },
  "the-balcony-manet": {
    description: "Figures stand on a sunlit balcony, including Berthe Morisot, in mysteriously disconnected poses.",
    medium: "Oil on canvas",
    dimensions: "170 cm × 124.5 cm",
  },
  "music-tuileries": {
    description: "Fashionable Parisians gather in the Tuileries gardens, a pioneering scene of modern urban life.",
    medium: "Oil on canvas",
    dimensions: "76.2 cm × 118.1 cm",
  },
  "jewish-bride": {
    description: "A couple in historical costume share a tender embrace, glowing with intimate warmth and love.",
    medium: "Oil on canvas",
    dimensions: "121.5 cm × 166.5 cm",
  },
  "storm-sea-galilee": {
    description: "Christ calms the storm as disciples struggle with the sails, dramatically lit against dark clouds.",
    medium: "Oil on canvas",
    dimensions: "160 cm × 128 cm",
  },
  "bathsheba-bath": {
    description: "King David's future queen at her bath, her face shadowed with awareness of her fate.",
    medium: "Oil on canvas",
    dimensions: "142 cm × 142 cm",
  },
  "woman-holding-balance": {
    description: "A woman weighs gold or pearls near a painting of the Last Judgment, a subtle moral allegory.",
    medium: "Oil on canvas",
    dimensions: "42.5 cm × 38 cm",
  },
  "the-lacemaker": {
    description: "A young woman bends over her lace pillow in total concentration, an intimate domestic scene.",
    medium: "Oil on canvas",
    dimensions: "24.5 cm × 21 cm",
  },
  "woman-reading-letter": {
    description: "A woman in blue reads a letter by a window, light illuminating her face and the map behind her.",
    medium: "Oil on canvas",
    dimensions: "46.5 cm × 39 cm",
  },
  "adoration-magi-botticelli": {
    description: "The three kings and their retinue worship the Christ child, including portraits of the Medici family.",
    medium: "Tempera on panel",
    dimensions: "111 cm × 134 cm",
  },
  "pallas-centaur": {
    description: "The goddess Athena grasps a centaur's hair, an allegory of wisdom controlling bestial impulses.",
    medium: "Tempera on canvas",
    dimensions: "207 cm × 148 cm",
  },
  "surrender-breda": {
    description: "The Dutch commander surrenders the city keys with dignity as Spanish lances fill the sky.",
    medium: "Oil on canvas",
    dimensions: "307 cm × 367 cm",
  },
  "portrait-innocent-x": {
    description: "The Pope sits enthroned in crimson, his penetrating gaze revealing intelligence and suspicion.",
    medium: "Oil on canvas",
    dimensions: "140 cm × 120 cm",
  },
  "rokeby-venus": {
    description: "Venus reclines viewing herself in a mirror held by Cupid, the only surviving female nude by Velázquez.",
    medium: "Oil on canvas",
    dimensions: "122.5 cm × 177 cm",
  },
};

async function main() {
  console.log("Adding more descriptions to artworks...\n");

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
