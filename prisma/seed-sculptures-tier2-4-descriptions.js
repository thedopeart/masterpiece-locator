const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Tier 2-4 Sculpture Descriptions ===\n');

  const updates = [
    // === TIER 2: MUSEUM MASTERPIECES ===
    {
      slug: 'apollo-belvedere',
      description: `<p>The <strong>Apollo Belvedere</strong> is a Roman marble copy of a lost Greek bronze original, likely created by <a href="/apps/masterpieces/artist/leochares"><strong>Leochares</strong></a> around 350-325 BCE. The statue depicts the god Apollo at the moment after releasing an arrow, perhaps having just slain the serpent Python. For centuries, it was considered the highest achievement of ancient sculpture.</p>

<p>The statue was rediscovered in central Italy during the late 15th century and quickly became the centerpiece of the papal art collection. Renaissance and Neoclassical artists revered it as the perfect male form. Johann Joachim Winckelmann, the founder of art history, called it "the highest ideal of art among all the works of antiquity."</p>

<p>The marble stands in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Cortile del Belvedere, the courtyard that gave the statue its name. Napoleon seized it for the Louvre in 1798, but it returned to Rome after his defeat. Modern scholars debate whether its fame was deserved or simply the result of Renaissance taste. Either way, the Apollo Belvedere shaped Western ideals of beauty for 400 years.</p>`,
      faqs: [
        {
          question: "Where can I see the Apollo Belvedere?",
          answer: "The statue is displayed in the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> in Rome, specifically in the Cortile del Belvedere (Belvedere Courtyard). It shares space with other famous ancient sculptures including the Laocoön group."
        },
        {
          question: "How old is the Apollo Belvedere?",
          answer: "The marble version dates to approximately <strong>120-140 CE</strong>, a Roman copy of a Greek bronze original from around 350-325 BCE. The original was likely created by the sculptor Leochares, who worked on the Mausoleum at Halicarnassus."
        },
        {
          question: "How tall is the Apollo Belvedere?",
          answer: "The statue stands <strong>224 centimeters tall</strong> (about 7.3 feet). Apollo is shown in a striding pose, his missing left hand likely once held a bow. The right arm was restored during the Renaissance."
        },
        {
          question: "Why was the Apollo Belvedere so influential?",
          answer: "For centuries it was considered <strong>the perfect male form</strong>. Renaissance artists studied it, Neoclassical sculptors copied it, and art theorists called it the highest achievement of ancient art. Its influence shaped Western beauty standards until modern times."
        }
      ]
    },
    {
      slug: 'belvedere-torso',
      description: `<p>The <strong>Belvedere Torso</strong> is a fragmentary marble sculpture from the 1st century BCE, signed by the Athenian sculptor Apollonius. Despite missing its head, arms, and legs, the torso has been one of the most influential works of ancient art. <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> was so moved by its powerful musculature that he refused to restore it, declaring the fragment perfect as it stood.</p>

<p>The identity of the figure remains debated. Most scholars believe it depicts Hercules, either resting on his lion skin or contemplating his labors. The seated pose and muscular tension suggest a moment of reflection rather than action. Whoever he was, the ancient sculptor captured extraordinary anatomical detail in the twisting torso.</p>

<p>The marble resides in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>, where it has been since the late 15th century. Michelangelo drew inspiration from it for the <a href="/apps/masterpieces/artwork/sistine-chapel-ceiling"><strong>Sistine Chapel ceiling</strong></a> figures, and its influence echoes through centuries of art. The fragment proves that great sculpture communicates power even in ruin.</p>`,
      faqs: [
        {
          question: "Where is the Belvedere Torso displayed?",
          answer: "The sculpture is housed in the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> in Rome, in the Museo Pio-Clementino. It has occupied the Belvedere courtyard (which gave it its name) since the late 1400s."
        },
        {
          question: "Who made the Belvedere Torso?",
          answer: "The base is signed by <strong>Apollonius, son of Nestor, Athenian</strong>. This identifies the sculptor, though nothing else is known about him. The work dates to the 1st century BCE, likely a copy or interpretation of an earlier Greek original."
        },
        {
          question: "Why didn't Michelangelo restore the Belvedere Torso?",
          answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> believed the fragment was <strong>too perfect to alter</strong>. When Pope Julius II suggested restoration, Michelangelo refused, reportedly saying he could learn more from this torso than from any complete statue."
        },
        {
          question: "What figure does the Belvedere Torso represent?",
          answer: "Most scholars identify it as <strong>Hercules</strong>, seated on his lion skin, possibly contemplating his labors. Others suggest Ajax contemplating suicide or Polyphemus. The missing limbs and head make certain identification impossible."
        }
      ]
    },
    {
      slug: 'elgin-marbles',
      description: `<p>The <strong>Elgin Marbles</strong> are a collection of ancient Greek sculptures removed from the Parthenon in Athens between 1801 and 1812 by agents of Thomas Bruce, 7th Earl of Elgin. The marbles include sections of the frieze depicting the Panathenaic procession, metopes showing battles between gods and giants, and surviving pediment sculptures designed by <a href="/apps/masterpieces/artist/phidias"><strong>Phidias</strong></a>.</p>

<p>The sculptures date to approximately 447-432 BCE, created during the golden age of Athens under Pericles. They represent the highest achievement of Classical Greek sculpture. The frieze alone originally stretched 160 meters around the Parthenon's inner chamber, depicting over 300 human figures and dozens of animals in the annual procession honoring Athena.</p>

<p>The marbles reside in the <strong>British Museum</strong> in London, displayed in a purpose-built gallery since 1816. Greece has formally requested their return since 1983, arguing they were removed without proper authority and belong in their original context. Britain maintains they were legally acquired and are better preserved in London. The dispute remains one of the most contentious issues in cultural heritage.</p>`,
      faqs: [
        {
          question: "Where are the Elgin Marbles displayed?",
          answer: "The sculptures are housed in the <strong>British Museum</strong> in London, in the Duveen Gallery specifically designed for them. Entry to the museum is free. Greece's Acropolis Museum displays the remaining Parthenon sculptures and casts of the London pieces."
        },
        {
          question: "Why are the Elgin Marbles controversial?",
          answer: "Greece argues the marbles were <strong>illegally removed</strong> and should be returned to Athens. Britain claims Lord Elgin obtained proper permission from Ottoman authorities who then controlled Greece. The debate over cultural property ownership continues to this day."
        },
        {
          question: "How old are the Elgin Marbles?",
          answer: "The sculptures date to <strong>447-432 BCE</strong>, created under the direction of <a href=\"/apps/masterpieces/artist/phidias\"><strong>Phidias</strong></a> during the construction of the Parthenon. They are approximately 2,450 years old."
        },
        {
          question: "What do the Elgin Marbles depict?",
          answer: "The collection includes frieze sections showing the <strong>Panathenaic procession</strong>, metopes depicting battles between gods and giants, and pediment sculptures showing the birth of Athena and her contest with Poseidon for Athens."
        }
      ]
    },

    // === TIER 3: ANCIENT & ARCHAEOLOGICAL ===
    {
      slug: 'great-sphinx-giza',
      description: `<p>The <strong>Great Sphinx of Giza</strong> is a limestone statue with the body of a lion and the head of a human, believed to represent Pharaoh Khafre. Carved from the bedrock of the Giza plateau around 2500 BCE, it is the oldest and largest monumental sculpture in the ancient world. The Sphinx guards the pyramid complex, facing east toward the rising sun.</p>

<p>The statue measures 73 meters (240 feet) long and 20 meters (66 feet) high, roughly the length of a Boeing 747 and as tall as a six-story building. Its nose is famously missing, broken off sometime between the 3rd and 10th centuries CE. Popular legend blames Napoleon's troops, but drawings made before his invasion show the damage already existed.</p>

<p>The Sphinx sits on the Giza plateau near Cairo, Egypt, between the Great Pyramid of Khufu and Khafre's pyramid. Sand has buried it repeatedly throughout history. A restoration effort begun in 1990 stabilized the crumbling limestone. The monument remains one of <a href="https://luxurywallart.com/collections/earth-tones" target="_blank" rel="noopener"><strong>Egypt's</strong></a> most visited attractions, drawing millions yearly to wonder at its silent gaze across the desert.</p>`,
      faqs: [
        {
          question: "Where is the Great Sphinx located?",
          answer: "The Sphinx sits on the <strong>Giza plateau</strong> in Egypt, about 10 kilometers from central Cairo. It faces east, guarding the pyramid complex of Khufu (Great Pyramid) and Khafre. The site is open to visitors daily."
        },
        {
          question: "How big is the Great Sphinx?",
          answer: "The statue measures <strong>73 meters long</strong> (240 feet) and <strong>20 meters high</strong> (66 feet). The face alone is 4 meters (13 feet) wide. It is the largest monolithic sculpture from the ancient world."
        },
        {
          question: "What happened to the Sphinx's nose?",
          answer: "The nose was broken off <strong>between the 3rd and 10th centuries CE</strong>. Popular legend blames Napoleon, but sketches from before his 1798 invasion show it already missing. A 15th-century historian blamed a religious fanatic who vandalized it."
        },
        {
          question: "How old is the Great Sphinx?",
          answer: "The Sphinx dates to approximately <strong>2500 BCE</strong>, making it about 4,500 years old. Most Egyptologists believe it was built during the reign of Pharaoh Khafre, whose pyramid stands directly behind it."
        }
      ]
    },
    {
      slug: 'terracotta-army',
      description: `<p>The <strong>Terracotta Army</strong> is a collection of over 8,000 life-sized clay soldiers buried with China's first emperor, Qin Shi Huang, around 210 BCE. Each warrior has unique facial features, hairstyles, and expressions, suggesting they may have been modeled on actual soldiers. The army was meant to protect the emperor in the afterlife.</p>

<p>Farmers discovered the first fragments in 1974 while digging a well near Xi'an. Excavation revealed three major pits containing infantry, cavalry, archers, and officers arranged in battle formation. The warriors originally held real weapons, mostly looted in antiquity, and were painted in bright colors that faded within minutes of exposure to air.</p>

<p>The museum complex sits in <strong>Xi'an, China</strong>, about 35 kilometers from the city center. Only a fraction of the emperor's tomb complex has been excavated. The main burial mound remains sealed, reportedly containing rivers of mercury and elaborate recreations of the empire. The Terracotta Army alone took an estimated 700,000 workers over 40 years to create.</p>`,
      faqs: [
        {
          question: "Where can I see the Terracotta Army?",
          answer: "The warriors are displayed at the <strong>Emperor Qinshihuang's Mausoleum Site Museum</strong> near Xi'an, China, about 35 kilometers from the city. Three excavation pits are open to visitors, showing the army in its original positions."
        },
        {
          question: "How many Terracotta Warriors are there?",
          answer: "Archaeologists estimate <strong>over 8,000 soldiers</strong>, plus 130 chariots, 520 horses, and 150 cavalry horses. Only about 2,000 warriors have been fully excavated and restored. Additional figures likely remain buried."
        },
        {
          question: "Why is each Terracotta Warrior unique?",
          answer: "Each figure has <strong>individual facial features</strong>, suggesting they may have been modeled on real soldiers. Workers likely used molds for bodies but hand-sculpted faces. No two warriors discovered so far are identical."
        },
        {
          question: "How old is the Terracotta Army?",
          answer: "The warriors date to approximately <strong>210 BCE</strong>, created for Emperor Qin Shi Huang, who unified China and began the Great Wall. Construction reportedly took 40 years and 700,000 workers."
        }
      ]
    },
    {
      slug: 'moai-easter-island',
      description: `<p>The <strong>Moai</strong> are monolithic human figures carved by the Rapa Nui people on Easter Island between 1250 and 1500 CE. Nearly 900 statues dot the remote Pacific island, most standing with their backs to the sea, gazing inland over villages they once protected. The statues represented deified ancestors who watched over the living.</p>

<p>The average Moai stands 4 meters tall (13 feet) and weighs 14 tons, though the largest erected statue reaches 10 meters (33 feet). Most were carved from compressed volcanic ash at the Rano Raraku quarry, then transported miles across the island. How the Rapa Nui moved these massive statues without wheels or large animals remains debated. Recent experiments suggest they may have "walked" the figures using ropes.</p>

<p>Easter Island (Rapa Nui) lies in the southeastern Pacific Ocean, over 3,500 kilometers from mainland Chile. The island became a Chilean territory in 1888 and a UNESCO World Heritage Site in 1995. Many Moai were toppled during tribal conflicts or by earthquakes, but restoration efforts have re-erected dozens along the coast. Their solemn faces continue to watch over one of Earth's most isolated inhabited islands.</p>`,
      faqs: [
        {
          question: "Where are the Moai located?",
          answer: "The statues stand on <strong>Easter Island (Rapa Nui)</strong> in the southeastern Pacific Ocean, a territory of Chile. The island lies about 3,500 kilometers (2,200 miles) from the Chilean coast. Flights operate from Santiago."
        },
        {
          question: "How many Moai are on Easter Island?",
          answer: "Nearly <strong>900 Moai</strong> exist on the island, though many remain unfinished at the Rano Raraku quarry. About 400 were transported to ceremonial platforms called ahu around the coastline before carving stopped."
        },
        {
          question: "How big are the Moai statues?",
          answer: "The average Moai stands <strong>4 meters tall</strong> (13 feet) and weighs 14 tons. The largest erected statue measures 10 meters (33 feet). One unfinished statue at the quarry would have stood 21 meters (69 feet) if completed."
        },
        {
          question: "How did the Rapa Nui move the Moai?",
          answer: "Islanders likely <strong>\"walked\" the statues</strong> using ropes to rock them forward, as modern experiments have demonstrated. Oral traditions say the statues walked themselves through spiritual power. No sledges, wheels, or large animals were available."
        }
      ]
    },
    {
      slug: 'colossi-of-memnon',
      description: `<p>The <strong>Colossi of Memnon</strong> are two massive stone statues of Pharaoh Amenhotep III, standing guard at the entrance to his ruined mortuary temple on the west bank of the Nile near Luxor. Built around 1350 BCE, each figure stands 18 meters (60 feet) tall and weighs approximately 720 tons. They are among the largest ancient Egyptian statues still standing.</p>

<p>The statues originally flanked a temple larger than any other in Egypt, but floods and earthquakes destroyed the structure. Ancient visitors knew the northern colossus as the "Vocal Memnon" because it produced a singing or whistling sound at dawn, likely caused by rising temperatures expanding cracked stone. Roman Emperor Septimius Severus repaired the statue around 199 CE, and the sounds stopped.</p>

<p>The colossi sit in the <strong>Theban Necropolis</strong>, the ancient burial ground across the Nile from Luxor. They face east toward the rising sun and the river. No temple remains behind them, only fragments of what was once Amenhotep III's greatest monument. The statues have watched over the necropolis for over 3,400 years.</p>`,
      faqs: [
        {
          question: "Where are the Colossi of Memnon located?",
          answer: "The statues stand on the <strong>west bank of the Nile near Luxor</strong>, Egypt, in the Theban Necropolis. They originally guarded Amenhotep III's mortuary temple. The site is freely accessible to visitors."
        },
        {
          question: "How big are the Colossi of Memnon?",
          answer: "Each statue stands approximately <strong>18 meters tall</strong> (60 feet) and weighs about 720 tons. They were carved from single blocks of quartzite sandstone transported 675 kilometers from quarries near Cairo."
        },
        {
          question: "Why did one Colossus 'sing'?",
          answer: "The northern statue produced <strong>whistling sounds at dawn</strong> after earthquake damage in 27 BCE cracked the stone. Warming air expanding through the cracks created the noise. Roman repairs in 199 CE sealed the cracks and silenced the singing forever."
        },
        {
          question: "Who was Memnon?",
          answer: "Greeks and Romans misidentified the statues as <strong>Memnon</strong>, a mythical Ethiopian king killed at Troy. The actual pharaoh depicted is Amenhotep III, who ruled Egypt during the 18th Dynasty around 1350 BCE."
        }
      ]
    },
    {
      slug: 'abu-simbel-temples',
      description: `<p>The <strong>Abu Simbel temples</strong> are two massive rock temples carved into a mountainside in southern Egypt during the reign of Ramesses II around 1264 BCE. Four colossal seated statues of the pharaoh guard the entrance to the Great Temple, each standing 20 meters (66 feet) tall. The temples were built to intimidate Egypt's southern neighbors and commemorate Ramesses' victory at the Battle of Kadesh.</p>

<p>The Great Temple penetrates 56 meters into the cliff, culminating in a sanctuary where statues of four gods sit in eternal darkness. Twice yearly, on February 22 and October 22, sunlight penetrates the entire length of the temple to illuminate three of the four statues. The dates may mark Ramesses' birthday and coronation anniversary.</p>

<p>The temples were relocated in their entirety between 1964 and 1968 to save them from flooding when the Aswan High Dam created Lake Nasser. Engineers cut the monuments into blocks, moved them 65 meters higher and 200 meters inland, then reassembled them against an artificial mountain. The salvage operation remains one of archaeology's greatest technical achievements.</p>`,
      faqs: [
        {
          question: "Where is Abu Simbel located?",
          answer: "The temples stand in <strong>southern Egypt near the Sudanese border</strong>, about 290 kilometers south of Aswan. Most visitors fly from Aswan or Cairo, as the drive takes over three hours through desert."
        },
        {
          question: "How big are the Abu Simbel statues?",
          answer: "The four seated figures of Ramesses II at the entrance stand <strong>20 meters tall</strong> (66 feet). The temple itself extends 56 meters into the cliff. Smaller figures at the pharaoh's feet depict family members."
        },
        {
          question: "Why was Abu Simbel moved?",
          answer: "The temples were <strong>relocated between 1964 and 1968</strong> to save them from the rising waters of Lake Nasser, created by the Aswan High Dam. UNESCO coordinated the salvage, cutting the monuments into blocks and reassembling them 65 meters higher."
        },
        {
          question: "What is the solar alignment at Abu Simbel?",
          answer: "Twice yearly, on <strong>February 22 and October 22</strong>, sunlight penetrates the 56-meter temple to illuminate three statues in the inner sanctuary. The god of darkness, Ptah, remains in shadow even then."
        }
      ]
    },

    // === TIER 4: MODERN & CONTEMPORARY ===
    {
      slug: 'bird-in-space',
      description: `<p><a href="/apps/masterpieces/artist/constantin-brancusi"><strong>Constantin Brâncuși</strong></a> created the first <strong>Bird in Space</strong> in 1923, beginning a series of 16 sculptures that would occupy him for two decades. The form reduced a bird to pure upward thrust: a sleek, elongated ovoid balanced on a slender point. Brâncuși sought to capture not a bird's appearance but the essence of flight itself.</p>

<p>The sculptures caused legal controversy in 1926 when U.S. customs officials refused to classify one as art, instead taxing it as a manufactured metal object. Brâncuși sued, and the court's ruling that the work qualified as sculpture helped establish legal protection for abstract art. The case became a landmark in American art law.</p>

<p>Various versions exist in bronze, marble, and polished brass. The <a href="/apps/masterpieces/museum/moma"><strong>Museum of Modern Art</strong></a> in New York owns one of the finest bronze casts. Others reside in the Philadelphia Museum of Art, the Art Institute of Chicago, and the Centre Pompidou in Paris. A 1923 bronze sold at auction in 2005 for $27.5 million, then a record for sculpture.</p>`,
      faqs: [
        {
          question: "Where can I see Bird in Space?",
          answer: "Multiple versions exist in major museums. The <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York owns an excellent bronze cast. Other versions are at the Philadelphia Museum of Art, Art Institute of Chicago, and Centre Pompidou in Paris."
        },
        {
          question: "How many Bird in Space sculptures did Brâncuși make?",
          answer: "<a href=\"/apps/masterpieces/artist/constantin-brancusi\"><strong>Brâncuși</strong></a> created <strong>16 versions</strong> between 1923 and 1940 in bronze, marble, and polished brass. Each varies slightly in proportions, though all share the same soaring form."
        },
        {
          question: "How tall is Bird in Space?",
          answer: "The bronze versions typically stand about <strong>136 centimeters tall</strong> (54 inches), including the stone or metal base. The slender form and polished surface make the sculpture appear to be ascending."
        },
        {
          question: "Why did Bird in Space go to court?",
          answer: "In 1926, U.S. customs classified it as <strong>manufactured metal</strong> rather than art, charging import duty. Brâncuși sued and won, establishing legal precedent that abstract sculpture qualified as art under American law."
        }
      ]
    },
    {
      slug: 'walking-man-giacometti',
      description: `<p><a href="/apps/masterpieces/artist/alberto-giacometti"><strong>Alberto Giacometti</strong></a> created <strong>Walking Man I</strong> in 1960, a life-sized bronze figure stripped to skeletal essence. The elongated man strides forward on impossibly thin legs, arms hanging, surface rough and eroded. The figure embodies existential isolation: alone, moving through space, going nowhere in particular.</p>

<p>Giacometti developed his signature thin figures after World War II, influenced by Surrealism and existentialist philosophy. He worked obsessively, often destroying pieces that didn't capture his vision. The walking figure became a recurring motif, representing humanity's solitary journey through life. "The more I work," he said, "the more I see things differently."</p>

<p>Six bronze casts exist, scattered among major museums and private collections. In 2010, a cast sold at auction for $104.3 million, then the highest price ever paid for a sculpture. The <strong>Fondation Giacometti</strong> in Paris preserves the artist's studio and archive. Walking Man I remains one of the most recognized sculptures of the 20th century, its haunted figure speaking to human vulnerability.</p>`,
      faqs: [
        {
          question: "Where can I see Walking Man I?",
          answer: "Six bronze casts exist. Notable locations include the <strong>Fondation Maeght</strong> in France, the Carnegie Museum of Art in Pittsburgh, and private collections. The Fondation Giacometti in Paris displays related works and the artist's studio."
        },
        {
          question: "How tall is Giacometti's Walking Man?",
          answer: "The sculpture stands <strong>183 centimeters tall</strong> (about 6 feet), roughly life-sized. Despite the human height, the <a href=\"/apps/masterpieces/artist/alberto-giacometti\"><strong>attenuated proportions</strong></a> make the figure appear stretched and insubstantial."
        },
        {
          question: "Why are Giacometti's figures so thin?",
          answer: "<a href=\"/apps/masterpieces/artist/alberto-giacometti\"><strong>Giacometti</strong></a> developed his thin style after World War II, influenced by <strong>existentialist philosophy</strong>. The emaciated forms represent human vulnerability and isolation. He said figures appeared to shrink when he tried to capture how he actually perceived them."
        },
        {
          question: "How much did Walking Man I sell for?",
          answer: "A cast sold at Sotheby's in 2010 for <strong>$104.3 million</strong>, then the highest price ever paid for any sculpture at auction. The record has since been broken, but Walking Man remains one of the most valuable works in existence."
        }
      ]
    },
    {
      slug: 'cloud-gate-the-bean',
      description: `<p><a href="/apps/masterpieces/artist/anish-kapoor"><strong>Anish Kapoor</strong></a> designed <strong>Cloud Gate</strong>, unveiled in 2006 in Chicago's Millennium Park. The massive stainless steel sculpture measures 10 by 20 by 13 meters and weighs 110 tons. Locals immediately nicknamed it "The Bean" for its legume-like shape, though Kapoor reportedly dislikes the name. The polished surface reflects and distorts the Chicago skyline like a funhouse mirror.</p>

<p>The sculpture's seamless surface required extraordinary fabrication. Workers welded 168 stainless steel plates together, then polished away all visible seams. The "omphalos" (navel) underneath creates a concave chamber where visitors can stand surrounded by their own warped reflections. Kapoor wanted the work to feel like a gate between the earth and sky.</p>

<p>Cloud Gate sits in <strong>Millennium Park</strong> in downtown Chicago, free and accessible 24 hours daily. It has become the city's most photographed landmark, drawing millions of visitors yearly. The reflective surface shows different faces depending on weather, time of day, and the crowds gathered around it. Chicago has embraced the sculpture as a symbol of civic pride.</p>`,
      faqs: [
        {
          question: "Where is Cloud Gate (The Bean)?",
          answer: "The sculpture sits in <strong>Millennium Park</strong> in downtown Chicago, on Michigan Avenue between Washington and Madison streets. Entry is free, and the park is open 24 hours. It's Chicago's most-visited attraction."
        },
        {
          question: "How big is Cloud Gate?",
          answer: "The sculpture measures <strong>10 by 20 by 13 meters</strong> (33 by 66 by 42 feet) and weighs 110 tons. The polished stainless steel surface comprises 168 plates welded together and polished to eliminate visible seams."
        },
        {
          question: "Why is it called The Bean?",
          answer: "Chicagoans nicknamed it <strong>\"The Bean\"</strong> because its shape resembles a legume. <a href=\"/apps/masterpieces/artist/anish-kapoor\"><strong>Anish Kapoor</strong></a> reportedly dislikes the nickname, preferring the official title Cloud Gate. The name stuck anyway."
        },
        {
          question: "Can you go inside Cloud Gate?",
          answer: "Yes. The underside features a concave chamber called the <strong>omphalos</strong> (Greek for navel) where visitors can stand surrounded by distorted reflections. Looking up creates a kaleidoscope effect of multiplied images."
        }
      ]
    },
    {
      slug: 'balloon-dog-koons',
      description: `<p><a href="/apps/masterpieces/artist/jeff-koons"><strong>Jeff Koons</strong></a> created <strong>Balloon Dog</strong> as part of his Celebration series, begun in 1994. The sculpture replicates a balloon animal twisted at children's parties, scaled up monumentally and fabricated in mirror-polished stainless steel with transparent color coating. Five unique versions exist in blue, magenta, orange, red, and yellow.</p>

<p>Each sculpture stands over 3 meters tall and weighs nearly 1,500 kilograms. The polished surface reflects the viewer and surroundings, inserting them into a childhood memory made permanent in steel. Koons worked with industrial fabricators for years to achieve the flawless finish, treating the surface with the same precision as luxury automobile paint.</p>

<p>The Balloon Dogs reside in various collections worldwide. The orange version sold at Christie's in 2013 for $58.4 million, then the highest price ever paid for a work by a living artist. Critics remain divided on Koons's work, some celebrating its joyful populism, others dismissing it as shallow kitsch. Either way, Balloon Dog has become one of contemporary art's most recognized images.</p>`,
      faqs: [
        {
          question: "Where can I see Balloon Dog?",
          answer: "The five unique versions are in various collections. The <strong>orange version</strong> is privately owned. Others have appeared at major museums including the Broad in Los Angeles, the Palace of Versailles, and the Guggenheim Bilbao."
        },
        {
          question: "How big is Balloon Dog?",
          answer: "Each sculpture stands approximately <strong>307 centimeters tall</strong> (about 10 feet). <a href=\"/apps/masterpieces/artist/jeff-koons\"><strong>Koons</strong></a> scaled up a party favor to monumental proportions while maintaining the appearance of twisted balloon segments."
        },
        {
          question: "How much did Balloon Dog sell for?",
          answer: "The orange version sold at Christie's in 2013 for <strong>$58.4 million</strong>, then a record for a living artist. The price reflected both Koons's market dominance and the rarity of the five-color edition."
        },
        {
          question: "What is Balloon Dog made of?",
          answer: "The sculpture is fabricated from <strong>mirror-polished stainless steel</strong> with a transparent color coating. Despite resembling a balloon, each piece weighs nearly 1,500 kilograms (3,300 pounds) and took years to manufacture."
        }
      ]
    },
    {
      slug: 'maman-spider-bourgeois',
      description: `<p><a href="/apps/masterpieces/artist/louise-bourgeois"><strong>Louise Bourgeois</strong></a> created <strong>Maman</strong> in 1999 when she was 88 years old. The monumental bronze spider stands over 9 meters tall, its eight legs spanning a protective space beneath its body, which carries a sac of marble eggs. The title means "Mom" in French, and Bourgeois conceived the work as a tribute to her mother, a tapestry restorer who died when the artist was 21.</p>

<p>Bourgeois associated spiders with her mother's industriousness, patience, and skill with thread. "She was my best friend," Bourgeois said. "Like a spider, my mother was a weaver." The sculpture transforms childhood memory into towering presence, simultaneously nurturing and threatening. The spider protects her eggs as Bourgeois's mother protected her children.</p>

<p>Multiple authorized casts exist worldwide. Permanent installations stand at the <strong>Guggenheim Museum Bilbao</strong>, Tate Modern in London, the National Gallery of Canada in Ottawa, and the Mori Art Museum in Tokyo, among others. Maman has become one of the most photographed sculptures of the past 25 years, its unlikely subject transformed into an icon of maternal devotion.</p>`,
      faqs: [
        {
          question: "Where can I see Maman?",
          answer: "Permanent casts stand at the <strong>Guggenheim Museum Bilbao</strong>, Tate Modern in London, the National Gallery of Canada in Ottawa, and the Mori Art Museum in Tokyo. Other casts travel to temporary exhibitions worldwide."
        },
        {
          question: "How big is Maman?",
          answer: "The spider stands approximately <strong>9.27 meters tall</strong> (about 30 feet) with a leg span of nearly 10 meters. <a href=\"/apps/masterpieces/artist/louise-bourgeois\"><strong>Bourgeois</strong></a> created it when she was 88 years old, one of her largest and most famous works."
        },
        {
          question: "Why did Bourgeois make a giant spider?",
          answer: "<a href=\"/apps/masterpieces/artist/louise-bourgeois\"><strong>Bourgeois</strong></a> associated spiders with her <strong>mother</strong>, a tapestry restorer who died when the artist was 21. \"Like a spider, my mother was a weaver,\" she explained. The sculpture honors maternal protection and skill."
        },
        {
          question: "What are the eggs under Maman?",
          answer: "The spider carries a sac containing <strong>26 marble eggs</strong> beneath her body. The eggs represent fertility and the artist's memories of her mother. The protective stance suggests a mother guarding her offspring."
        }
      ]
    },
    {
      slug: 'love-sculpture-indiana',
      description: `<p><a href="/apps/masterpieces/artist/robert-indiana"><strong>Robert Indiana</strong></a> designed <strong>LOVE</strong> in 1964 as a card for the Museum of Modern Art's Christmas collection. The image stacked the letters L and O over V and E, with the O tilted to create visual tension. The design became so popular that Indiana created the first sculptural version in 1970, a 12-foot Cor-Ten steel piece now in Indianapolis.</p>

<p>The sculpture's bold simplicity made it instantly iconic. The tilted O prevents the design from looking static, while the stacked arrangement fits the word into a square format. Indiana chose Cor-Ten steel for its weathering properties, developing a rust patina that protects the metal beneath. The <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>red, blue, and green</strong></a> painted versions became even more famous.</p>

<p>Authorized sculptures stand in cities worldwide, including Philadelphia, New York, Tokyo, Singapore, and Taipei. The image has been reproduced countless times, often without authorization, making it one of the most recognized artworks of the 20th century. Indiana received minimal royalties from unauthorized copies, a situation that frustrated him until his death in 2018.</p>`,
      faqs: [
        {
          question: "Where can I see LOVE sculptures?",
          answer: "Authorized versions stand in many cities including <strong>Philadelphia</strong> (JFK Plaza, nicknamed \"Love Park\"), New York (55th Street and 6th Avenue), Indianapolis (Indianapolis Museum of Art), and locations in Tokyo, Singapore, and Taipei."
        },
        {
          question: "How big is the LOVE sculpture?",
          answer: "The original 1970 version stands <strong>366 centimeters tall</strong> (12 feet). <a href=\"/apps/masterpieces/artist/robert-indiana\"><strong>Indiana</strong></a> later created versions in various sizes, from small desk sculptures to larger public installations."
        },
        {
          question: "When did Robert Indiana create LOVE?",
          answer: "Indiana designed the LOVE image in <strong>1964</strong> as a Christmas card for the Museum of Modern Art. The first sculptural version was created in 1970. The design has been reproduced, often without authorization, ever since."
        },
        {
          question: "Why is the O tilted in LOVE?",
          answer: "The tilted O creates <strong>visual tension</strong> and prevents the design from appearing too static. <a href=\"/apps/masterpieces/artist/robert-indiana\"><strong>Indiana</strong></a> also said the tilt suggested the instability and vulnerability of love itself."
        }
      ]
    },
    {
      slug: 'unique-forms-continuity-space',
      description: `<p><a href="/apps/masterpieces/artist/umberto-boccioni"><strong>Umberto Boccioni</strong></a> created <strong>Unique Forms of Continuity in Space</strong> in 1913, the masterpiece of <a href="/apps/masterpieces/movement/futurism"><strong>Futurist</strong></a> sculpture. The striding figure appears to merge with the air it displaces, muscular forms flowing backward like flames. Boccioni sought to capture speed, force, and the interpenetration of body and environment.</p>

<p>The Futurists worshipped modernity, machines, and motion. Boccioni wrote that sculpture should "abolish the finite line and the closed statue" and instead show objects interacting with their surroundings. This figure achieves that goal: we see not a man walking but the act of walking itself, force made visible in bronze.</p>

<p>The original plaster was cast in bronze only after Boccioni's death in 1916 at age 33. The <a href="/apps/masterpieces/museum/moma"><strong>Museum of Modern Art</strong></a> in New York owns a cast, as does the Tate Modern in London. The image appears on the Italian 20-cent euro coin, a fitting tribute to an artist who celebrated speed and believed Italy must embrace the future. His sculpture captured that future in permanent form.</p>`,
      faqs: [
        {
          question: "Where can I see Unique Forms of Continuity in Space?",
          answer: "Bronze casts exist at the <a href=\"/apps/masterpieces/museum/moma\"><strong>Museum of Modern Art</strong></a> in New York, Tate Modern in London, and the Museo del Novecento in Milan. The work also appears on the Italian 20-cent euro coin."
        },
        {
          question: "What art movement does this sculpture represent?",
          answer: "The work is the masterpiece of <a href=\"/apps/masterpieces/movement/futurism\"><strong>Futurism</strong></a>, an Italian movement that celebrated speed, technology, and modernity. <a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Boccioni</strong></a> wrote manifestos calling for sculpture to show objects merging with their environment."
        },
        {
          question: "How big is the sculpture?",
          answer: "The figure stands <strong>111 centimeters tall</strong> (about 44 inches), smaller than life-sized but powerfully dynamic. The flowing forms extend the figure's visual presence far beyond its actual dimensions."
        },
        {
          question: "What happened to Boccioni?",
          answer: "<a href=\"/apps/masterpieces/artist/umberto-boccioni\"><strong>Boccioni</strong></a> died in 1916 at age 33, thrown from a horse during military training in World War I. The bronze casts of this sculpture were made only after his death. His promising career ended just as Futurism reached its peak."
        }
      ]
    }
  ];

  let updated = 0;

  for (const artwork of updates) {
    const result = await prisma.artwork.updateMany({
      where: { slug: artwork.slug },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date(),
      }
    });

    if (result.count > 0) {
      console.log(`Updated: ${artwork.slug}`);
      updated++;
    } else {
      console.log(`Not found: ${artwork.slug}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated} sculptures with descriptions and FAQs`);

  // Final count
  const totalSculptures = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  const sculpturesWithDesc = await prisma.artwork.count({
    where: { artworkType: 'sculpture', description: { not: null } }
  });
  console.log(`\nTotal sculptures: ${totalSculptures}`);
  console.log(`With descriptions: ${sculpturesWithDesc}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
