const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Enrich top-tier sculptures: expand T1 David, add FAQs to 5 T2 with 0 FAQs, upgrade 14 T2 with only 3 FAQs

const enrichments = {

  // ============ TIER 1: MICHELANGELO'S DAVID (expand description) ============
  'michelangelo-david': {
    description: `<p><a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> carved this colossal marble statue between 1501 and 1504, depicting the biblical hero David before his battle with Goliath. He was 26 years old when he began. The marble block itself had a history: <strong>Agostino di Duccio</strong> roughed out the legs and torso in 1464, then abandoned it. Antonio Rossellino tried in 1476 and also quit. The block sat exposed in a cathedral workshop yard for 25 years, nicknamed "The Giant."</p>

<p>Michelangelo worked in near-total secrecy behind a scaffolding enclosure. He had to work within the constraints of earlier cuts, which partly explains the relatively flat pose. The deliberately <strong>oversized head and right hand</strong> were calculated for the original plan: display on Florence Cathedral's roofline, where normal proportions would look wrong from below. A committee including Leonardo da Vinci and Botticelli decided it was too good for the rooftop and placed it in the Piazza della Signoria instead. It took four days to move on greased logs.</p>

<p>The statue stood outdoors for nearly 400 years before being moved to the <a href="/apps/masterpieces/museum/galleria-accademia-florence"><strong>Galleria dell'Accademia</strong></a> in 1873. David's eyes look in slightly different directions (confirmed by Stanford's digital scan in 2004), his pupils are carved in a heart shape to catch light, and his sling is nearly invisible over his left shoulder. A full-size replica now stands in the original piazza location.</p>`,
    faqs: [
      { question: "How tall is Michelangelo's David?", answer: "The statue stands <strong>5.17 meters (17 feet)</strong> tall including its pedestal and weighs about 5,660 kg (12,478 pounds). <a href='/apps/masterpieces/artist/michelangelo'><strong>Michelangelo</strong></a> carved it from a single block of white Carrara marble that two other sculptors had already tried and abandoned. He finished in 1504 at age 29." },
      { question: "Where can I see Michelangelo's David?", answer: "The original is at the <a href='/apps/masterpieces/museum/galleria-accademia-florence'><strong>Galleria dell'Accademia</strong></a> in Florence, Italy (Via Ricasoli 58/60). It was moved indoors in <strong>1873</strong> to protect it from weather damage. Book tickets in advance. Without a reservation, wait times of 1-3 hours are common. A full-size replica stands in the original outdoor spot at Piazza della Signoria." },
      { question: "Has David ever been damaged?", answer: "Multiple times. In <strong>1527</strong>, rioters threw a bench from the Palazzo Vecchio, breaking David's left arm into three pieces (Vasari collected the fragments as a teenager). Lightning struck the base in 1512. In <strong>1991</strong>, Piero Cannata attacked the statue with a hammer, breaking off part of the second toe on the left foot. Conservators reattached the marble fragments." },
      { question: "Why is David's head so large?", answer: "Michelangelo deliberately made the head and <strong>right hand oversized</strong> because the statue was meant for Florence Cathedral's roofline, high above viewers. From below, normal proportions would look wrong. When the city council saw the finished piece, they placed it at ground level instead, making the exaggeration visible up close." },
      { question: "What moment does David depict?", answer: "David is shown <strong>before the fight</strong>, not after. Unlike earlier versions by <a href='/apps/masterpieces/artist/donatello'><strong>Donatello</strong></a> and Verrocchio (which show David over Goliath's severed head), Michelangelo captured the tense moment of preparation. His brow is furrowed, muscles taut, sling over his left shoulder. The choice reflected Florence's political identity: a small republic ready to defend itself." }
    ]
  },

  // ============ TIER 2: 5 SCULPTURES WITH 0 FAQs ============

  'shuttlecocks-kansas-city': {
    faqs: [
      { question: "How big are the Shuttlecocks?", answer: "Each of the four shuttlecocks stands <strong>18 feet tall with a 16-foot diameter</strong> and weighs 5,500 pounds. They're made of aluminum and fiberglass-reinforced plastic, painted with polyurethane enamel. <a href='/apps/masterpieces/artist/claes-oldenburg-coosje-van-bruggen'><strong>Oldenburg and van Bruggen</strong></a> placed them on opposite sides of the museum building in 1994." },
      { question: "What's the concept behind Shuttlecocks?", answer: "The artists saw the <strong>Nelson-Atkins Museum building as a badminton net</strong>. The four giant shuttlecocks are positioned on opposite sides of it, as if a game were in progress. The building itself becomes part of the artwork. It was commissioned as a gift from the Sosland family of Kansas City." },
      { question: "Were the Shuttlecocks controversial?", answer: "Yes. When first installed in 1994, critics called them <strong>'not art' and a 'giant waste.'</strong> Today they're the museum's most recognizable icon and a beloved Kansas City landmark. The shift from controversy to affection is common with large-scale public art." },
      { question: "Where can I see the Shuttlecocks?", answer: "On the grounds of the <a href='/apps/masterpieces/museum/nelson-atkins-museum'><strong>Nelson-Atkins Museum of Art</strong></a> in Kansas City, Missouri. <strong>Admission is free</strong>. The shuttlecocks are outdoors and visible year-round, two on the north lawn and two on the south." }
    ]
  },

  'eagle-calder-seattle': {
    faqs: [
      { question: "How big is Calder's Eagle?", answer: "The Eagle stands <strong>39 feet tall</strong> and weighs over 6 tons. It's made of painted sheet steel in Calder's signature red-orange color. Despite its name, the form is entirely abstract. <a href='/apps/masterpieces/artist/alexander-calder'><strong>Calder</strong></a> created it in 1971 and left interpretation open to viewers." },
      { question: "Where can I see the Eagle?", answer: "At the <a href='/apps/masterpieces/museum/olympic-sculpture-park'><strong>Olympic Sculpture Park</strong></a> in Seattle, run by the Seattle Art Museum. The park is <strong>free and open daily</strong>. The Eagle is one of its defining landmarks, visible from multiple vantage points throughout the park." },
      { question: "How did the Eagle get to Seattle?", answer: "Originally owned by the <strong>Fort Worth National Bank in Texas</strong>, the Seattle Art Museum purchased it in 2000. It was installed when the Olympic Sculpture Park opened in 2007. The bold red color and sweeping steel forms have made it the park's most photographed work." },
      { question: "What's a 'stabile'?", answer: "A <strong>stabile</strong> is a stationary sculpture, as opposed to Calder's famous mobiles (which move). Calder invented both forms in the 1920s-30s while living in Paris. The Eagle is one of his largest stabiles, created near the end of his career." }
    ]
  },

  'wake-richard-serra': {
    faqs: [
      { question: "How big is Wake?", answer: "Wake consists of five pairs of S-curved steel plates, each <strong>14 feet tall, 2 inches thick, and weighing 30 tons</strong>. The total installation stretches 125 feet long, 46 feet wide, and weighs 300 tons. <a href='/apps/masterpieces/artist/richard-serra'><strong>Serra</strong></a> used computer ship-hull design software to create the toroid forms." },
      { question: "Where can I see Wake?", answer: "At the <a href='/apps/masterpieces/museum/olympic-sculpture-park'><strong>Olympic Sculpture Park</strong></a> in Seattle. <strong>Admission is free</strong>. It was the first piece installed at the park in July 2006, before the park's 2007 opening. Each 30-ton plate was lifted into position by crane." },
      { question: "What material is it made from?", answer: "<strong>Weathering steel</strong>, which slowly rusts to a deep brown over time. The surface changes appearance with the seasons and years. Walking between the curved walls creates a shifting sense of enclosure and openness. The forms suggest tidal waves or ship hull profiles." },
      { question: "What does 'Wake' mean?", answer: "The title has multiple readings: the <strong>wake of a ship</strong> (matching the hull-like forms and the park's waterfront setting), a vigil for the dead, or the act of waking up. Serra designed the curved walls to create a physical experience of moving through space, not just looking at an object." }
    ]
  },

  'seaform-pavilion-chihuly': {
    faqs: [
      { question: "How many glass pieces are in the Seaform Pavilion?", answer: "<strong>2,364 individually blown glass sculptures</strong> from <a href='/apps/masterpieces/artist/dale-chihuly'><strong>Chihuly</strong></a>'s Seaform and Persian series, all suspended overhead in a plate-glass ceiling. Visitors walk beneath them and look up through the translucent forms." },
      { question: "Where is the Seaform Pavilion?", answer: "On the <strong>Bridge of Glass</strong>, a 500-foot pedestrian bridge spanning Interstate 705 in Tacoma, Washington. It connects the Museum of Glass to downtown. The bridge opened in 2002 and also features Chihuly's Crystal Towers and Venetian Wall installations." },
      { question: "Why Tacoma?", answer: "Chihuly was <strong>born and raised in Tacoma</strong>, making this a hometown tribute. The bridge transforms an ordinary highway overpass into an immersive art experience, connecting the city's museum district to its downtown core." },
      { question: "Is it free to visit?", answer: "Yes. The <strong>Bridge of Glass is free and open to the public</strong> at all times. You don't need a Museum of Glass ticket to walk through and view the Seaform Pavilion, Crystal Towers, and Venetian Wall. The museum itself charges admission." }
    ]
  },

  'some-one-do-ho-suh': {
    faqs: [
      { question: "What is Some/One made of?", answer: "Approximately <strong>100,000 stainless steel military dog tags</strong>, plus nickel-plated copper, steel, glass fiber-reinforced resin, and rubber. The tags form a 9-foot-tall structure resembling a suit of armor or ceremonial robe, with the 'hem' spreading across the gallery floor." },
      { question: "What do the dog tags say?", answer: "The tags are stamped with <strong>nonsense symbols, not real names</strong>, rendering their collective identity anonymous. <a href='/apps/masterpieces/artist/do-ho-suh'><strong>Do Ho Suh</strong></a> was inspired by his mandatory military service in South Korea. The piece explores the tension between individuality and collective identity." },
      { question: "Where can I see Some/One?", answer: "The work exists in an edition of three. One is at the <strong>Whitney Museum of American Art</strong> in New York, another at the Seattle Art Museum. Viewers who approach the armor-like form see themselves reflected in a <strong>mirrored interior</strong>." },
      { question: "What does the title mean?", answer: "The title plays on '<strong>someone</strong>' (an individual) versus 'some one' (one among many). The 100,000 anonymous dog tags create a single, larger-than-life figure, raising questions about how individual identity survives within military or collective structures." }
    ]
  },

  // ============ TIER 2: SCULPTURES WITH ONLY 3 FAQs (add 4th FAQ) ============

  'atlas-rockefeller-center': {
    faqs: [
      { question: "How big is the Atlas statue?", answer: "The total installation is <strong>45 feet tall</strong>: a 15-foot bronze figure holding a 21-foot-diameter armillary sphere on a 9-foot granite pedestal. It weighs 7 tons (14,000 pounds). Created by sculptor <strong>Lee Lawrie</strong> with René Paul Chambellan, it was installed in 1937." },
      { question: "Is it true Atlas looks like Mussolini?", answer: "It's an urban legend that was <strong>largely debunked</strong> by the New York Public Library. A few individuals noted a resemblance, most notably illustrator James Montgomery Flagg (creator of the Uncle Sam poster), who said Atlas 'looks too much as Mussolini thinks he looks.' But no organized protests occurred." },
      { question: "What are the hidden details?", answer: "The sphere's north-south axis <strong>points toward the North Star</strong> as seen from New York. Standing behind the sculpture looking toward Fifth Avenue, the sphere frames a view of St. Patrick's Cathedral. The symbol for Jupiter (who punished Atlas in myth) is behind the figure's head." },
      { question: "Where can I see it?", answer: "In the <strong>International Building courtyard</strong> at Rockefeller Center, facing Fifth Avenue between 50th and 51st Streets in Manhattan. It's outdoors and free to view at any time. The nearby Prometheus sculpture shares a zodiac ring motif, connecting the two thematically." }
    ]
  },

  'fearless-girl': {
    faqs: [
      { question: "Where is Fearless Girl now?", answer: "She was <strong>relocated in 2018</strong> from Bowling Green (where she faced the Charging Bull) to Broad Street, where she now faces the <strong>New York Stock Exchange</strong>. The bronze statue is about 50 inches tall and weighs 250 pounds. Sculptor Kristen Visbal created her." },
      { question: "Why was Fearless Girl controversial?", answer: "Charging Bull sculptor <strong>Arturo Di Modica</strong> objected that Fearless Girl distorted his sculpture's original meaning (celebrating American resilience) by turning it into a symbol of male aggression. State Street Global Advisors commissioned Fearless Girl as marketing for a gender-diversity index fund, then settled a <strong>$5 million gender discrimination lawsuit</strong> from its own female employees the same year." },
      { question: "Who made Fearless Girl?", answer: "<strong>Kristen Visbal</strong>, born 1962 in Montevideo, Uruguay, based in Delaware. The statue was installed on March 7, 2017 (International Women's Day) with a one-week permit that kept getting extended due to public demand. Visbal later sued State Street over unauthorized reproductions." },
      { question: "Can I visit Fearless Girl for free?", answer: "Yes. She's on <strong>Broad Street in Manhattan's Financial District</strong>, facing the New York Stock Exchange. It's a public sidewalk, free to visit anytime. The original location at Bowling Green facing the Charging Bull was about a 5-minute walk south." }
    ]
  },

  'the-motherland-calls': {
    faqs: [
      { question: "How tall is The Motherland Calls?", answer: "The total height is <strong>85 meters (279 feet)</strong>: the figure is 52 meters (170 ft) and the sword is 33 meters (108 ft). It weighs over 8,000 tonnes. Khrushchev ordered it to be taller than the Statue of Liberty. Holes were drilled into the sword to reduce wind resistance." },
      { question: "Who was the model?", answer: "The body was reportedly modeled on a <strong>26-year-old waitress named Valentina Izotova</strong>, while the face is believed to be based on sculptor Vuchetich's wife. Construction ran from 1962 to 1967, with structural engineer Nikolai Nikitin ensuring it wouldn't collapse under its own weight." },
      { question: "What does the memorial commemorate?", answer: "The <strong>Battle of Stalingrad</strong> (1942-1943), one of the bloodiest battles in human history. The 200 steps from the base to the statue represent the 200 days of the battle. Approximately 35,000 Soviet war dead are buried on the grounds of Mamayev Kurgan." },
      { question: "Where is it located?", answer: "Atop <strong>Mamayev Kurgan</strong> in Volgograd (formerly Stalingrad), Russia. It's the centerpiece of a massive war memorial complex. A 2019 restoration revealed the foundation was sliding because it was built on a riverbed." }
    ]
  },

  'leshan-giant-buddha': {
    faqs: [
      { question: "How big is the Leshan Giant Buddha?", answer: "It stands <strong>71 meters (233 feet) tall</strong>, making it one of the tallest pre-modern statues in the world. The head alone is 14.7 meters high, the shoulders span 24 meters, and 100 people can sit on the feet. The ears are 7 meters long." },
      { question: "How long did it take to build?", answer: "<strong>90 years</strong> (713-803 CE). The monk Hai Tong initiated construction, believing a Buddha would calm the dangerous river currents. When funding was threatened, he reportedly gouged out his own eyes to prove his devotion. The stone debris actually changed the river currents, making the water safer." },
      { question: "What's special about the engineering?", answer: "The hair contains <strong>1,021 individually carved spiral buns</strong>. A hidden drainage system (pipes concealed throughout the body) still functions today, carrying away rainwater to reduce weathering. A 13-story wooden shelter once protected the statue but was destroyed during Mongol wars." },
      { question: "Can I visit?", answer: "Yes. It's at the confluence of the Min and Dadu Rivers in <strong>Sichuan Province, China</strong>, and has been a UNESCO World Heritage Site since 1996. You can view it from boats on the river or climb stairs alongside the cliff face for close-up views." }
    ]
  },

  'three-graces-canova': {
    faqs: [
      { question: "Where can I see Canova's Three Graces?", answer: "Two versions exist. The first is at the <strong>Hermitage Museum</strong> in St. Petersburg. The second alternates between the <a href='/apps/masterpieces/museum/victoria-albert-museum'><strong>V&A</strong></a> in London and the National Galleries of Scotland in Edinburgh, jointly purchased for £7.6 million in 1994." },
      { question: "How was the second version nearly lost to Britain?", answer: "In 1989, the <strong>Getty Museum offered $12.3 million</strong> for it. The British government blocked the export license. After a years-long battle, the V&A and National Galleries of Scotland jointly bought it, partly funded by John Paul Getty II himself." },
      { question: "Who commissioned the originals?", answer: "The first version was commissioned by <strong>Empress Josephine</strong> (Napoleon's first wife), who died in 1814 before it was finished. The second was made for the Duke of Bedford, who displayed it in a purpose-built rotunda at Woburn Abbey." },
      { question: "How was it designed to be viewed?", answer: "<a href='/apps/masterpieces/artist/antonio-canova'><strong>Canova</strong></a> designed it on a <strong>rotating plinth</strong> so viewers could walk around and see constantly changing silhouettes. He personally advised on lighting and positioning. The white marble is polished to an extraordinary smoothness." }
    ]
  },

  'cupid-and-psyche-canova': {
    faqs: [
      { question: "Where can I see Cupid and Psyche?", answer: "At the <a href='/apps/masterpieces/museum/louvre'><strong>Musée du Louvre</strong></a> in Paris. It entered the collection in 1824 after a complicated ownership history. Commissioned in 1787 by Colonel John Campbell, then acquired by Napoleon's brother-in-law Joachim Murat, King of Naples." },
      { question: "What moment does it capture?", answer: "The exact moment <strong>Cupid revives Psyche with a kiss</strong> after she opens the forbidden box from Proserpina and falls into a deathlike sleep. The almost-touching lips at the center of the composition create one of the most tender moments in all of sculpture." },
      { question: "What makes the composition special?", answer: "<a href='/apps/masterpieces/artist/antonio-canova'><strong>Canova</strong></a> designed the two bodies to form an <strong>X shape</strong> when viewed from the side, drawing the eye to the near-kiss at the center. The marble is polished to an extraordinary smoothness that mimics living skin. It's considered a Neoclassical masterpiece with Romantic emotional intensity." },
      { question: "How big is it?", answer: "It measures <strong>155 x 168 x 101 cm</strong> (about 5 feet tall by 5.5 feet long). Canova carved it between 1788 and 1793 from white marble. It's one of the most reproduced sculptures in the world." }
    ]
  },

  'medici-venus': {
    faqs: [
      { question: "Where can I see the Medici Venus?", answer: "In the <strong>Tribuna</strong> at the <a href='/apps/masterpieces/museum/uffizi-gallery'><strong>Uffizi Gallery</strong></a> in Florence, Italy. For centuries it was considered one of the six finest surviving ancient statues and a must-see on the Grand Tour." },
      { question: "Was it originally white?", answer: "No. A 2012 restoration discovered <strong>large patches of gold leaf on the hair, red paint on the lips, and pierced ears</strong> that once held earrings. Grand Tour travelers had mentioned gilded hair for centuries, but it wasn't widely acknowledged until conservators confirmed it." },
      { question: "Was it ever stolen?", answer: "<strong>Napoleon seized it and shipped it to Paris in 1803</strong>. It was returned to Florence on December 27, 1815, after his fall. Earlier, Pope Innocent XI had allowed it to leave Rome for Florence in 1677 because he believed it 'stimulated lewd behavior.'" },
      { question: "How old is it?", answer: "It's a <strong>1st-century BCE Roman marble copy</strong> of a lost Greek bronze original. It stands 1.53 meters (5 feet) tall. The arms were restored by sculptor Ercole Ferrata, whose elongated Mannerist fingers weren't recognized as stylistically wrong until the 19th century." }
    ]
  },

  'doryphoros-spear-bearer': {
    faqs: [
      { question: "What is the Doryphoros?", answer: "The '<strong>Spear Bearer</strong>' by Polykleitos, created around 440 BCE as a physical demonstration of his written treatise 'The Canon,' which laid out mathematically ideal human proportions. The head-to-body ratio is 1:7. Every measurement relates proportionally to every other." },
      { question: "Where is the original?", answer: "The original bronze is <strong>completely lost</strong>. The best-known copy is at the <strong>Naples National Archaeological Museum</strong>, excavated from Pompeii. It was so popular among wealthy Romans that entire copy studios were set up to meet demand. It's one of the most copied sculptures from antiquity." },
      { question: "Why is the pose important?", answer: "It's one of the earliest and most influential examples of <strong>contrapposto</strong> (weight on one leg, opposite hip raised). This natural-looking stance replaced the stiff frontal poses of earlier Greek art and became the standard for representing the idealized figure for the next 2,000 years." },
      { question: "How big is it?", answer: "Approximately <strong>213 cm (7 feet) tall</strong>. The surviving Roman marble copies are slightly larger than the lost Greek bronze original would have been, because marble copies require structural supports (tree trunks, struts) that bronze originals didn't need." }
    ]
  },

  'aphrodite-of-knidos': {
    faqs: [
      { question: "Why is the Aphrodite of Knidos important?", answer: "It was the <strong>first life-size female nude</strong> in Greek sculpture. <a href='/apps/masterpieces/artist/praxiteles'><strong>Praxiteles</strong></a> made both a nude and clothed version. The city of Kos bought the clothed one, considering the nude obscene. Knidos bought the nude, and it became the most famous statue in the ancient world." },
      { question: "Where is the original?", answer: "The original was <strong>destroyed in a fire</strong> at the Palace of Lausos in Constantinople in 476 CE. Scholar Kristen Seaman has catalogued 192 surviving ancient copies. The best-known copies are the Colonna Venus (Vatican) and Capitoline Venus (Rome)." },
      { question: "Who was the model?", answer: "Reportedly the courtesan <strong>Phryne</strong>, one of the most famous women in Athens. The statue was placed in an open circular temple so it could be viewed from all angles, which was unusual for the time." },
      { question: "How many copies survive?", answer: "<strong>192 ancient copies</strong> have been catalogued, making it possibly the most-copied sculpture from antiquity. It established the proportional canon for the female nude that influenced Western art for centuries." }
    ]
  },

  'fountain-four-rivers-bernini': {
    faqs: [
      { question: "What do the four figures represent?", answer: "Four river gods representing the <strong>four continents</strong> of papal authority: the Nile (Africa), Danube (Europe), Ganges (Asia), and Río de la Plata (Americas). Each figure is 5-5.5 meters tall, carved in white Carrara marble atop a travertine rock base." },
      { question: "How did Bernini get the commission?", answer: "<a href='/apps/masterpieces/artist/gian-lorenzo-bernini'><strong>Bernini</strong></a> was initially <strong>excluded from the competition</strong> because Pope Innocent X disliked him. He secretly made a silver model and had it placed where the Pope would see it. The Pope was so impressed he gave Bernini the commission over rival Borromini." },
      { question: "Is it true the Nile covers its face to avoid Borromini's church?", answer: "No. That's a <strong>popular legend but chronologically impossible</strong>. The fountain was completed years before Borromini started work on the nearby church of Sant'Agnese. The Nile's veiled head actually symbolizes that no one knew the river's source at the time." },
      { question: "Where can I see it?", answer: "<strong>Piazza Navona</strong> in central Rome, Italy. Free to view at any time. The fountain was unveiled June 12, 1651. The Egyptian obelisk at its center was reconstructed by Bernini from five broken pieces found at the Circus of Maxentius." }
    ]
  },

  'tian-tan-buddha': {
    faqs: [
      { question: "How big is the Tian Tan Buddha?", answer: "The seated figure is <strong>26.4 meters (87 feet) tall</strong>, with a total height of 34 meters (112 feet) including the base. It weighs over 250 metric tonnes and is made of 202 bronze pieces over a steel framework. The face alone measures 4.3 x 5.8 meters." },
      { question: "Why does it face north?", answer: "Most Buddha statues face south, but this one <strong>faces north</strong> (slightly east), symbolically looking toward mainland China. The base is modeled after the Temple of Heaven (Tian Tan) in Beijing, which is how it got its name." },
      { question: "How do I visit?", answer: "It's at <strong>Ngong Ping on Lantau Island</strong>, Hong Kong, 482 meters above sea level. Visitors climb 268 steps to reach it. The Ngong Ping 360 cable car from Tung Chung is the most scenic route. Inside the base are three exhibit floors, including a relic believed to be part of Gautama Buddha's remains." },
      { question: "When was it built?", answer: "Construction ran from <strong>1990 to 1993</strong>, completed December 29, 1993. It cost over 60 million Hong Kong dollars. The design was inspired by monks from Po Lin Monastery visiting the Great Buddha of Kamakura in Japan and draws from Tang Dynasty Buddhist traditions." }
    ]
  },

  'the-dinner-party': {
    faqs: [
      { question: "How big is The Dinner Party?", answer: "A triangular banquet table with each side measuring <strong>48 feet (14.6 meters)</strong>. It has 39 place settings honoring historical and mythical women, from the Primordial Goddess to Georgia O'Keeffe. Another 999 women's names are inscribed in gold on the Heritage Floor tiles beneath." },
      { question: "Where can I see it?", answer: "At the <strong>Elizabeth A. Sackler Center for Feminist Art</strong> in the <a href='/apps/masterpieces/museum/brooklyn-museum'><strong>Brooklyn Museum</strong></a>, New York. It had no permanent home until 2002, when Elizabeth Sackler purchased it and donated it on the condition they build a dedicated feminist art gallery." },
      { question: "How was it made?", answer: "It took <a href='/apps/masterpieces/artist/judy-chicago'><strong>Judy Chicago</strong></a> <strong>five years (1974-1979)</strong> with over 400 volunteers. Each place setting features a unique hand-painted china plate, ceramic cutlery, a chalice, and an embroidered runner in needlework styles appropriate to each woman's era." },
      { question: "Why ceramics and needlework?", answer: "Chicago deliberately chose materials dismissed as <strong>'women's work'</strong> to challenge the art-world hierarchy that devalued craft traditions. The piece toured 16 venues across six countries over nine years, seen by 15 million people before finding its permanent home." }
    ]
  },
};

async function main() {
  const slugs = Object.keys(enrichments);
  console.log(`Enriching ${slugs.length} sculptures...`);

  let updated = 0;
  let notFound = 0;
  let failed = 0;

  for (const slug of slugs) {
    const data = enrichments[slug];
    try {
      const existing = await prisma.artwork.findFirst({
        where: { slug },
        select: { id: true, title: true }
      });

      if (!existing) {
        console.log(`✗ Not found: ${slug}`);
        notFound++;
        continue;
      }

      const updateData = { updatedAt: new Date() };
      if (data.description) updateData.description = data.description;
      if (data.faqs) updateData.faqs = data.faqs;

      await prisma.artwork.update({
        where: { id: existing.id },
        data: updateData
      });
      updated++;
      console.log(`✓ ${existing.title}`);
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
