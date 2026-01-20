import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const descriptions: Record<string, { description: string; medium?: string; dimensions?: string }> = {
  "the-yellow-house": {
    description: "Van Gogh's house in Arles glows under a blue sky, the home where he dreamed of an artists' colony.",
    medium: "Oil on canvas",
    dimensions: "72 cm × 91.5 cm",
  },
  "the-night-cafe": {
    description: "A billiard hall at night rendered in clashing reds and greens to express the terrible passions of humanity.",
    medium: "Oil on canvas",
    dimensions: "72.4 cm × 92.1 cm",
  },
  "starry-night-over-rhone": {
    description: "The night sky reflects in the Rhône while gas lamps glitter along the Arles waterfront.",
    medium: "Oil on canvas",
    dimensions: "72.5 cm × 92 cm",
  },
  "maesta-santa-trinita": {
    description: "The enthroned Madonna and Child surrounded by angels, a monumental altarpiece bridging Byzantine and Gothic styles.",
    medium: "Tempera on panel",
    dimensions: "385 cm × 223 cm",
  },
  "maesta-duccio": {
    description: "The Madonna enthroned with saints and angels, Siena's greatest altarpiece combining Byzantine tradition with Gothic naturalism.",
    medium: "Tempera and gold on wood",
    dimensions: "213 cm × 396 cm",
  },
  "annunciation-simone-martini": {
    description: "The Angel Gabriel announces to Mary against a shimmering gold ground, a masterpiece of International Gothic elegance.",
    medium: "Tempera and gold on wood",
    dimensions: "184 cm × 210 cm",
  },
  "adoration-magi-gentile": {
    description: "The Magi's procession unfolds in lavish detail, their retinue filling the landscape in a celebration of courtly splendor.",
    medium: "Tempera on panel",
    dimensions: "303 cm × 282 cm",
  },
  "procession-magi-gozzoli": {
    description: "The Three Kings journey through an idealized Tuscan landscape, their train including portraits of the Medici family.",
    medium: "Fresco",
    dimensions: "Variable",
  },
  "old-man-grandson": {
    description: "An elderly man with a diseased nose gazes lovingly at his grandson, an unflinching yet tender double portrait.",
    medium: "Tempera on panel",
    dimensions: "62 cm × 46 cm",
  },
  "damned-cast-hell": {
    description: "Demons drag the damned into hell's mouth, a terrifying vision of damnation from the Orvieto Cathedral frescoes.",
    medium: "Fresco",
    dimensions: "Variable",
  },
  "miracle-relic-cross": {
    description: "A miracle at the Rialto Bridge unfolds before a detailed view of 15th-century Venice.",
    medium: "Tempera on canvas",
    dimensions: "365 cm × 389 cm",
  },
  "merode-altarpiece": {
    description: "The Annunciation takes place in a Flemish bourgeois interior, filled with domestic objects carrying symbolic meaning.",
    medium: "Oil on oak panel",
    dimensions: "64.5 cm × 117.8 cm",
  },
  "portinari-altarpiece": {
    description: "Shepherds adore the Christ child in a monumental triptych that profoundly influenced Italian Renaissance art.",
    medium: "Oil on wood",
    dimensions: "253 cm × 586 cm",
  },
  "judgment-cambyses": {
    description: "The corrupt judge is flayed alive on the king's orders, a grisly warning to civic officials.",
    medium: "Oil on wood",
    dimensions: "182 cm × 159 cm",
  },
  "moneylender-wife": {
    description: "A money changer weighs coins while his wife turns from her prayer book, a moralizing genre scene.",
    medium: "Oil on panel",
    dimensions: "71 cm × 68 cm",
  },
  "landscape-flight-egypt": {
    description: "The Holy Family's flight unfolds in an fantastical landscape of towering rocks and winding paths.",
    medium: "Oil on panel",
    dimensions: "17 cm × 21 cm",
  },
  "winter-landscape-skaters": {
    description: "Crowds skate and play on frozen waterways before a wintry Dutch town, a pioneering winter landscape.",
    medium: "Oil on panel",
    dimensions: "77.5 cm × 132 cm",
  },
  "view-dordrecht": {
    description: "The city skyline rises from morning mists, its reflections rippling in the calm river.",
    medium: "Oil on panel",
    dimensions: "40.5 cm × 72.5 cm",
  },
  "feast-saint-nicholas": {
    description: "Children discover St. Nicholas gifts while adults observe with amusement, a lively Dutch family scene.",
    medium: "Oil on canvas",
    dimensions: "82 cm × 70.5 cm",
  },
  "merry-family": {
    description: "Three generations make music and merriment, embodying the proverb about children following their parents' example.",
    medium: "Oil on canvas",
    dimensions: "110.5 cm × 141 cm",
  },
  "smokers-inn": {
    description: "Peasants smoke and drink in a dim tavern interior, captured with rough vitality.",
    medium: "Oil on panel",
    dimensions: "34.5 cm × 26.5 cm",
  },
  "archduke-gallery": {
    description: "The Archduke's collection displayed salon-style, a document of Habsburg art patronage.",
    medium: "Oil on canvas",
    dimensions: "123 cm × 163 cm",
  },
  "man-writing-letter": {
    description: "A gentleman writes a letter by a window, his concentration depicted with quiet refinement.",
    medium: "Oil on panel",
    dimensions: "52.5 cm × 40.2 cm",
  },
  "woman-reading-letter-metsu": {
    description: "A maid delivers a letter to her mistress who reads with evident emotion near a window.",
    medium: "Oil on panel",
    dimensions: "52.5 cm × 40.2 cm",
  },
  "triumph-bacchus-ariadne": {
    description: "Bacchus discovers Ariadne on Naxos, their meeting celebrated by a procession of revelers across a ceiling fresco.",
    medium: "Fresco",
    dimensions: "Variable",
  },
  "bean-eater": {
    description: "A peasant pauses mid-bite to look at the viewer, a humble subject treated with unsentimental dignity.",
    medium: "Oil on canvas",
    dimensions: "57 cm × 68 cm",
  },
  "judith-slaying-holofernes-artemisia": {
    description: "Judith and her maid decapitate the Assyrian general, painted with visceral power by a female artist.",
    medium: "Oil on canvas",
    dimensions: "158.8 cm × 125.5 cm",
  },
  "self-portrait-allegory-painting": {
    description: "The artist depicts herself as Painting personified, brush in hand, demonstrating women's artistic capabilities.",
    medium: "Oil on canvas",
    dimensions: "98.6 cm × 75.2 cm",
  },
  "triumph-divine-providence": {
    description: "A vast ceiling fresco glorifying the Barberini papacy through swirling allegory and illusionistic architecture.",
    medium: "Fresco",
    dimensions: "Variable",
  },
  "self-portrait-salvator-rosa": {
    description: "The artist as philosopher holds a tablet inscribed with stoic wisdom about keeping silent or speaking truth.",
    medium: "Oil on canvas",
    dimensions: "99 cm × 79.5 cm",
  },
  "cheat-ace-clubs": {
    description: "A young man is cheated at cards while a courtesan signals his hand to accomplices, a moralizing scene lit by candlelight.",
    medium: "Oil on canvas",
    dimensions: "97.8 cm × 156.2 cm",
  },
  "penitent-magdalen-la-tour": {
    description: "Mary Magdalene meditates by candlelight, her hand on a skull, in profound contemplation of mortality.",
    medium: "Oil on canvas",
    dimensions: "128 cm × 94 cm",
  },
  "landscape-isaac-rebecca": {
    description: "The biblical couple appears in an idealized Italian landscape bathed in golden afternoon light.",
    medium: "Oil on canvas",
    dimensions: "152.3 cm × 200.6 cm",
  },
  "seaport-queen-sheba": {
    description: "The Queen of Sheba embarks at a classical harbor suffused with the light of a Mediterranean dawn.",
    medium: "Oil on canvas",
    dimensions: "149.1 cm × 196.7 cm",
  },
  "et-in-arcadia-ego": {
    description: "Shepherds discover a tomb inscribed 'Even in Arcadia, I exist,' a meditation on death amid pastoral beauty.",
    medium: "Oil on canvas",
    dimensions: "85 cm × 121 cm",
  },
  "rape-sabine-women": {
    description: "Roman soldiers seize Sabine women as chaos erupts, a dynamic composition of intertwined figures.",
    medium: "Oil on canvas",
    dimensions: "154.6 cm × 209.9 cm",
  },
  "marie-antoinette-rose": {
    description: "The French queen holds a rose in an intimate portrait that humanizes her public image.",
    medium: "Oil on canvas",
    dimensions: "113 cm × 87 cm",
  },
  "self-portrait-straw-hat": {
    description: "The artist poses outdoors in natural light, her straw hat casting shadows on her confident face.",
    medium: "Oil on canvas",
    dimensions: "97.8 cm × 70.5 cm",
  },
  "pollice-verso": {
    description: "A victorious gladiator awaits the crowd's judgment on his fallen opponent in a blood-splattered arena.",
    medium: "Oil on canvas",
    dimensions: "97.5 cm × 146.7 cm",
  },
  "slave-market-gerome": {
    description: "A slave is inspected by potential buyers in a Middle Eastern market, a controversial Orientalist scene.",
    medium: "Oil on canvas",
    dimensions: "84.8 cm × 63 cm",
  },
  "birth-venus-bouguereau": {
    description: "Venus rises from the sea surrounded by putti and tritons, a virtuoso display of Academic technique.",
    medium: "Oil on canvas",
    dimensions: "300 cm × 215 cm",
  },
  "nymphs-satyr": {
    description: "Water nymphs drag a reluctant satyr toward their pool, a playful mythological fantasy.",
    medium: "Oil on canvas",
    dimensions: "260 cm × 180 cm",
  },
  "birth-venus-cabanel": {
    description: "Venus drifts on the waves as putti circle above, a sensuous Academic treatment of the myth.",
    medium: "Oil on canvas",
    dimensions: "130 cm × 225 cm",
  },
  "dante-virgil-ninth-circle": {
    description: "Dante and Virgil witness damned souls frozen in ice in the lowest circle of Hell.",
    medium: "Oil on canvas",
    dimensions: "154.3 cm × 281 cm",
  },
  "studio-batignolles": {
    description: "Manet paints at his easel surrounded by friends including Renoir, Bazille, and Zola.",
    medium: "Oil on canvas",
    dimensions: "204 cm × 273.5 cm",
  },
  "white-roses-fantin": {
    description: "White roses bloom in a simple vase against a dark background, painted with delicate precision.",
    medium: "Oil on canvas",
    dimensions: "36 cm × 29 cm",
  },
  "horse-fair": {
    description: "Horses are paraded at a market in a monumental composition rivaling the old masters in ambition.",
    medium: "Oil on canvas",
    dimensions: "244.5 cm × 506.7 cm",
  },
  "ophelia": {
    description: "Shakespeare's drowned heroine floats among flowers in a stream, singing her final songs.",
    medium: "Oil on canvas",
    dimensions: "76.2 cm × 111.8 cm",
  },
  "christ-house-parents": {
    description: "The young Christ in Joseph's workshop, surrounded by symbolic objects foreshadowing the Passion.",
    medium: "Oil on canvas",
    dimensions: "86.4 cm × 139.7 cm",
  },
  "beata-beatrix": {
    description: "Rossetti's wife Elizabeth Siddal transfigured as Dante's Beatrice at the moment of death.",
    medium: "Oil on canvas",
    dimensions: "86.4 cm × 66 cm",
  },
  "proserpine": {
    description: "The goddess of the underworld holds a pomegranate, her features modeled on Jane Morris.",
    medium: "Oil on canvas",
    dimensions: "125.1 cm × 61 cm",
  },
  "light-of-world": {
    description: "Christ knocks on a door overgrown with weeds, lantern in hand, an allegory of spiritual awakening.",
    medium: "Oil on canvas",
    dimensions: "125.5 cm × 59.8 cm",
  },
  "golden-stairs": {
    description: "Young women in classical dress descend a spiral staircase in a dreamlike procession.",
    medium: "Oil on canvas",
    dimensions: "269.2 cm × 116.8 cm",
  },
  "flaming-june": {
    description: "A woman sleeps in a vivid orange gown against a Mediterranean sea, an iconic image of Victorian aestheticism.",
    medium: "Oil on canvas",
    dimensions: "120.6 cm × 120.6 cm",
  },
  "roses-heliogabalus": {
    description: "The Roman emperor smothers dinner guests with rose petals in an orgy of decadent luxury.",
    medium: "Oil on canvas",
    dimensions: "132.7 cm × 214.4 cm",
  },
  "favorite-custom": {
    description: "Roman women prepare to bathe in a marble frigidarium, exemplifying Victorian classical fantasy.",
    medium: "Oil on panel",
    dimensions: "66 cm × 45 cm",
  },
  "lady-of-shalott": {
    description: "The Lady drifts toward Camelot and death, her tapestry unraveling, inspired by Tennyson's poem.",
    medium: "Oil on canvas",
    dimensions: "153 cm × 200 cm",
  },
  "hylas-nymphs": {
    description: "Water nymphs entice the beautiful youth Hylas into their pool, from which he will never return.",
    medium: "Oil on canvas",
    dimensions: "98 cm × 163 cm",
  },
  "circe-offering-cup": {
    description: "The enchantress offers her transformative potion, enthroned amid pigs that were once men.",
    medium: "Oil on canvas",
    dimensions: "149 cm × 92 cm",
  },
  "george-washington-lansdowne": {
    description: "The first president in statesmanlike pose, his gesture suggesting he rejects monarchical power.",
    medium: "Oil on canvas",
    dimensions: "247.6 cm × 158.7 cm",
  },
  "washington-crossing-delaware": {
    description: "Washington leads troops across the icy Delaware on Christmas night 1776, a patriotic icon.",
    medium: "Oil on canvas",
    dimensions: "378.5 cm × 647.7 cm",
  },
  "fur-traders-missouri": {
    description: "A French trapper and his mixed-race son paddle with their tethered bear cub in morning mist.",
    medium: "Oil on canvas",
    dimensions: "73.7 cm × 92.7 cm",
  },
  "ride-for-liberty": {
    description: "An enslaved family rides toward freedom through moonlit fields during the Civil War.",
    medium: "Oil on board",
    dimensions: "55.8 cm × 66.4 cm",
  },
  "cattleya-orchid-hummingbirds": {
    description: "Hummingbirds hover around an orchid in a misty tropical setting, painted with botanical precision.",
    medium: "Oil on canvas",
    dimensions: "47.6 cm × 40.3 cm",
  },
  "kindred-spirits": {
    description: "Painter Thomas Cole and poet William Cullen Bryant stand on a ledge overlooking the Catskills.",
    medium: "Oil on canvas",
    dimensions: "117 cm × 92 cm",
  },
  "lackawanna-valley": {
    description: "A boy watches a train cross the landscape, witnessing America's industrial transformation of nature.",
    medium: "Oil on canvas",
    dimensions: "86 cm × 127.5 cm",
  },
  "friendly-call": {
    description: "Two fashionably dressed women visit in a sunlit parlor, exemplifying Gilded Age elegance.",
    medium: "Oil on canvas",
    dimensions: "76.5 cm × 122.5 cm",
  },
  "avenue-in-rain": {
    description: "American flags flutter along Fifth Avenue in the rain, celebrating Allied victory in World War I.",
    medium: "Oil on canvas",
    dimensions: "106.7 cm × 56.5 cm",
  },
  "allies-day": {
    description: "Flags of the Allied nations hang over Fifth Avenue in celebration of wartime alliance.",
    medium: "Oil on canvas",
    dimensions: "92.7 cm × 76.8 cm",
  },
  "stag-sharkeys": {
    description: "Two boxers exchange blows in a dimly lit athletic club, painted with brutal energy.",
    medium: "Oil on canvas",
    dimensions: "92 cm × 122.6 cm",
  },
  "dempsey-firpo": {
    description: "Jack Dempsey is knocked through the ropes in a legendary 1923 heavyweight fight.",
    medium: "Oil on canvas",
    dimensions: "130.5 cm × 160.3 cm",
  },
  "wild-turkey": {
    description: "A male wild turkey struts amid lush foliage, rendered with ornithological accuracy.",
    medium: "Hand-colored engraving",
    dimensions: "97.5 cm × 65 cm",
  },
};

async function main() {
  console.log("Adding final batch of descriptions...\n");

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
