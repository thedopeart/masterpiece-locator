const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Classical Sculpture Descriptions ===\n');

  const updates = [
    {
      slug: 'venus-de-milo',
      description: `<p>The <strong>Venus de Milo</strong> is ancient Greece's most celebrated depiction of Aphrodite, the goddess of love and beauty. Carved from Parian marble around 130 BCE, the statue stands just over two meters tall, her missing arms adding to her mystique rather than diminishing her impact. A Greek peasant discovered the sculpture in 1820 on the island of Melos, and France acquired it shortly after for the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>.</p>
<p>The figure's twisted pose creates a spiraling composition that rewards viewing from multiple angles. Her drapery slips below her hips in a way that scandalized 19th-century viewers while demonstrating <strong>Hellenistic sculptors'</strong> mastery of carving fabric in stone. Scholars debate what the missing arms originally held, with suggestions including an apple, a mirror, or a shield.</p>
<p>The Venus de Milo became France's answer to the Elgin Marbles, a symbol of classical beauty that influenced everything from neoclassical sculpture to contemporary fashion photography.</p>`,
      faqs: [
        {
          question: "Where is the Venus de Milo?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris, where it has been since 1821. It's one of the museum's three most famous works alongside the Mona Lisa and Winged Victory."
        },
        {
          question: "Why are the arms missing?",
          answer: "The arms broke off sometime between antiquity and the statue's 1820 discovery. Scholars have proposed various original poses, but <strong>no definitive evidence</strong> exists for what she once held."
        },
        {
          question: "How big is the Venus de Milo?",
          answer: "The statue stands <strong>204 cm (6 ft 8 in)</strong> tall. The slightly larger-than-life scale was typical for temple statues meant to inspire awe in worshippers."
        },
        {
          question: "Who created the Venus de Milo?",
          answer: "The sculptor remains <strong>unknown</strong>. An inscription naming \"Alexandros of Antioch\" was found nearby but later lost, and scholars debate whether it referred to this statue."
        }
      ]
    },
    {
      slug: 'winged-victory-samothrace',
      description: `<p>The <strong>Winged Victory of Samothrace</strong> depicts Nike, the goddess of victory, alighting on the prow of a warship with wings spread wide. Carved around 190 BCE, the Parian marble figure stands nearly 2.5 meters tall atop a ship's bow made from gray Rhodian marble. The sculpture commemorated a naval victory, though which battle remains debated.</p>
<p>French archaeologists discovered the statue in 1863 on the island of Samothrace, shattered into 118 pieces. Restoration revealed a figure whose <strong>wind-whipped drapery</strong> clings to her body while billowing dramatically behind, a tour de force of Hellenistic stone carving. The missing head and arms haven't diminished the statue's power; if anything, the fragmentary state adds to its romantic appeal.</p>
<p>The Winged Victory now dominates the Daru staircase at the <a href="/apps/masterpieces/museum/louvre"><strong>Louvre</strong></a>, positioned to recreate the experience of viewing Nike descending from the heavens.</p>`,
      faqs: [
        {
          question: "Where is the Winged Victory?",
          answer: "The statue stands atop the Daru staircase at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. Its dramatic placement allows visitors to approach as if witnessing Nike's divine arrival."
        },
        {
          question: "How big is the Winged Victory?",
          answer: "The figure measures <strong>244 cm (8 ft)</strong> tall. Including the ship's prow base, the complete monument reaches over 5.5 meters, dominating the staircase."
        },
        {
          question: "What is Nike standing on?",
          answer: "Nike alights on the <strong>prow of a warship</strong> carved from gray marble. This naval imagery suggests the statue commemorated a sea battle victory, possibly the Battle of Salamis or Rhodes."
        },
        {
          question: "Who made the Winged Victory?",
          answer: "The sculptor remains <strong>unknown</strong>. The monument's quality suggests a master craftsman, possibly from Rhodes, working around 190 BCE during the Hellenistic period."
        }
      ]
    },
    {
      slug: 'laocoon-and-his-sons',
      description: `<p><strong>Laocoön and His Sons</strong> depicts the Trojan priest and his children being strangled by sea serpents sent by the gods. Carved in marble around 40 BCE, the sculpture captures a moment of extreme agony as Laocoön strains against the coils while his sons succumb. The work was created by three sculptors from Rhodes: Agesander, Athenodoros, and Polydorus.</p>
<p>Roman author Pliny the Elder praised the Laocoön as "a work superior to any painting and any bronze." Rediscovered in Rome in 1506, the sculpture profoundly influenced <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a> and the development of Renaissance art. The <strong>Laocoön's contorted pose</strong> and emotional intensity broke from classical serenity, demonstrating what stone could express.</p>
<p>The sculpture has anchored the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' Pio-Clementino collection since its discovery, one of the most influential artworks in Western history.</p>`,
      faqs: [
        {
          question: "Where is Laocoön and His Sons?",
          answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> in the Pio-Clementino collection. It has been there since Pope Julius II acquired it in 1506."
        },
        {
          question: "What story does the Laocoön show?",
          answer: "Laocoön was a <strong>Trojan priest</strong> who warned against accepting the wooden horse. The gods sent serpents to kill him and his sons, clearing the way for Troy's destruction."
        },
        {
          question: "How big is the Laocoön?",
          answer: "The sculpture group measures <strong>208 cm (6 ft 10 in)</strong> tall. The complex composition of three intertwined figures required exceptional technical skill to carve from marble."
        },
        {
          question: "Who created the Laocoön?",
          answer: "Three Rhodian sculptors: <strong>Agesander, Athenodoros, and Polydorus</strong>. Pliny the Elder named them in the 1st century CE, and scholars generally accept the attribution."
        }
      ]
    },
    {
      slug: 'apollo-belvedere',
      description: `<p>The <strong>Apollo Belvedere</strong> shows the god of light in the moment after shooting an arrow, his idealized body combining grace with athletic power. This Roman marble copy dates to the 2nd century CE, based on a Greek bronze original by <a href="/apps/masterpieces/artist/leochares"><strong>Leochares</strong></a> from around 350 BCE. The statue entered the Vatican collection around 1511 and defined classical beauty for centuries.</p>
<p>For 18th-century neoclassicists, the Apollo Belvedere represented the <strong>pinnacle of artistic achievement</strong>. Art historian Johann Winckelmann described it as "the highest ideal of art among all the works of antiquity." The statue influenced countless artists from Canova to Thorvaldsen and shaped Western ideals of male beauty.</p>
<p>Modern scholars have tempered the enthusiasm, but the Apollo remains a cornerstone of the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>' classical collection.</p>`,
      faqs: [
        {
          question: "Where is the Apollo Belvedere?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> in the Pio-Clementino collection. The \"Belvedere\" name comes from its original display in the Vatican's Belvedere courtyard."
        },
        {
          question: "Is it Greek or Roman?",
          answer: "The Vatican statue is a <strong>Roman marble copy</strong> from the 2nd century CE. The lost Greek bronze original was created by Leochares around 350 BCE."
        },
        {
          question: "How big is the Apollo Belvedere?",
          answer: "The statue stands <strong>224 cm (7 ft 4 in)</strong> tall. The larger-than-life scale enhanced the figure's divine presence in its original temple setting."
        },
        {
          question: "Why was it so influential?",
          answer: "18th-century scholars considered it the <strong>peak of classical art</strong>. Johann Winckelmann's praise made it the standard against which all sculpture was measured for generations."
        }
      ]
    },
    {
      slug: 'augustus-prima-porta',
      description: `<p>The <strong>Augustus of Prima Porta</strong> depicts Rome's first emperor in military dress, his arm raised in a gesture of command. Carved around 20 BCE, the marble statue shows Augustus as a youthful, idealized leader rather than the aging man he actually was. The breastplate displays symbolic imagery including the return of Roman standards from the Parthians.</p>
<p>Archaeologists discovered the statue in 1863 at Livia's villa in Prima Porta, just north of Rome. The <strong>original paint</strong> has faded, but traces reveal the statue was once vividly colored. A small Cupid riding a dolphin at Augustus's feet references his claimed descent from Venus through Aeneas. The pose deliberately echoes Polykleitos's Doryphoros, connecting Augustus to Greek artistic ideals.</p>
<p>The statue now stands in the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>, the definitive image of Roman imperial portraiture.</p>`,
      faqs: [
        {
          question: "Where is Augustus of Prima Porta?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> in the Braccio Nuovo gallery. It was excavated from Livia's villa in 1863."
        },
        {
          question: "What does the breastplate show?",
          answer: "The armor depicts the <strong>return of Roman military standards</strong> from Parthia in 20 BCE. This diplomatic triumph was Augustus's greatest foreign policy success."
        },
        {
          question: "Why is there a Cupid at his feet?",
          answer: "The Cupid claims Augustus's <strong>divine ancestry</strong> through Venus. The Julian family traced their lineage to the goddess through her son Aeneas, founder of Rome."
        },
        {
          question: "Was the statue always white?",
          answer: "No. Traces of <strong>original paint</strong> show the statue was once vividly colored. Modern reconstructions reveal bright reds, blues, and flesh tones on the marble surface."
        }
      ]
    },
    {
      slug: 'dying-gaul',
      description: `<p>The <strong>Dying Gaul</strong> depicts a wounded Celtic warrior in his final moments, propped on one arm as life ebbs away. This Roman marble copy preserves a Greek bronze original from around 230 BCE, commissioned to commemorate Pergamon's victory over the Galatians. The sculpture dignifies its subject even in defeat, showing the warrior's <strong>noble suffering</strong> rather than abject collapse.</p>
<p>The Gaul's distinctive features mark him as foreign: a torque around his neck, mustache, and tousled hair contrasting with clean-shaven Greek ideals. His sword and shield lie abandoned beside him, emphasizing the battle's aftermath. The <strong>psychological realism</strong> was revolutionary, presenting an enemy as fully human rather than a caricature.</p>
<p>The statue has been at the <a href="/apps/masterpieces/museum/capitoline-museums"><strong>Capitoline Museums</strong></a> since 1737, inspiring artists from Goya to contemporary photographers.</p>`,
      faqs: [
        {
          question: "Where is the Dying Gaul?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/capitoline-museums\"><strong>Capitoline Museums</strong></a> in Rome. It has been a highlight of the collection since the 18th century."
        },
        {
          question: "What makes this sculpture unusual?",
          answer: "The Dying Gaul treats a <strong>defeated enemy with dignity</strong>. Rather than showing a caricatured barbarian, the sculptor depicted a noble warrior facing death with courage."
        },
        {
          question: "Is it Greek or Roman?",
          answer: "The Capitoline statue is a <strong>Roman marble copy</strong>. The lost bronze original was created around 230 BCE for the victory monument at Pergamon in Asia Minor."
        },
        {
          question: "How big is the Dying Gaul?",
          answer: "The sculpture measures <strong>93 × 187 cm</strong> (37 × 74 inches). The life-size scale enhances the figure's emotional impact and humanity."
        }
      ]
    },
    {
      slug: 'capitoline-wolf',
      description: `<p>The <strong>Capitoline Wolf</strong> is Rome's most iconic symbol: a bronze she-wolf nursing the infant twins Romulus and Remus, legendary founders of the city. The wolf figure dates to the 5th century BCE (though some scholars argue for medieval origin), while the twin infants were added during the Renaissance by Antonio del Pollaiuolo. The combination creates Rome's definitive founding image.</p>
<p>According to legend, the abandoned twins were discovered by a wolf who suckled them in a cave on the Palatine Hill. The <strong>wolf's fierce expression</strong> and prominent ribs suggest a wild creature, though her pose nursing the infants shows maternal protection. The sculpture has served as a symbol of Rome for over 2,500 years.</p>
<p>The original bronze stands in the <a href="/apps/masterpieces/museum/capitoline-museums"><strong>Capitoline Museums</strong></a>, while copies mark Roman sites worldwide.</p>`,
      faqs: [
        {
          question: "Where is the Capitoline Wolf?",
          answer: "The original is at the <a href=\"/apps/masterpieces/museum/capitoline-museums\"><strong>Capitoline Museums</strong></a> in Rome. Copies appear throughout the world in cities with Roman heritage."
        },
        {
          question: "How old is the wolf sculpture?",
          answer: "Dating remains <strong>controversial</strong>. Traditional scholarship places it around 500 BCE, but recent testing suggests a possible medieval creation. The debate continues."
        },
        {
          question: "Were the twins always part of the sculpture?",
          answer: "No. The suckling infants were <strong>added in the Renaissance</strong>, probably by Antonio del Pollaiuolo in the 15th century. The wolf originally stood alone."
        },
        {
          question: "What does the wolf symbolize?",
          answer: "The wolf represents <strong>Rome's miraculous founding</strong>. The legend of a she-wolf saving Romulus and Remus became central to Roman identity and remains Italy's symbol today."
        }
      ]
    },
    {
      slug: 'marcus-aurelius-equestrian',
      description: `<p>The <strong>Equestrian Statue of Marcus Aurelius</strong> is the only complete bronze imperial equestrian statue to survive from antiquity. Created around 175 CE, the monument shows the philosopher-emperor on horseback, his arm extended in a gesture of mercy. The statue stands over four meters tall, its survival likely due to medieval belief that it depicted Constantine, Christianity's first imperial patron.</p>
<p>Marcus Aurelius ruled Rome from 161-180 CE while writing his <em>Meditations</em>, one of philosophy's foundational texts. The <strong>original gilding</strong> has mostly worn away, but traces remain visible. The horse's raised hoof originally rested on a defeated barbarian, now lost. Michelangelo designed the Campidoglio piazza specifically to showcase this statue.</p>
<p>The original now stands protected inside the <a href="/apps/masterpieces/museum/capitoline-museums"><strong>Capitoline Museums</strong></a>, while a replica occupies the outdoor pedestal.</p>`,
      faqs: [
        {
          question: "Where is the Marcus Aurelius statue?",
          answer: "The original is inside the <a href=\"/apps/masterpieces/museum/capitoline-museums\"><strong>Capitoline Museums</strong></a> for protection. A bronze replica stands in the piazza where the original stood for centuries."
        },
        {
          question: "Why did this bronze survive?",
          answer: "Medieval Romans believed it depicted <strong>Constantine</strong>, the first Christian emperor. This misidentification saved it from melting when other \"pagan\" bronzes were destroyed."
        },
        {
          question: "How big is the statue?",
          answer: "The bronze stands <strong>424 cm (13 ft 11 in)</strong> tall. This monumental scale required exceptional bronze-casting skill and enormous quantities of metal."
        },
        {
          question: "Who was Marcus Aurelius?",
          answer: "Marcus Aurelius was a <strong>Roman emperor and Stoic philosopher</strong> who ruled 161-180 CE. His philosophical writings, the Meditations, remain influential today."
        }
      ]
    },
    {
      slug: 'farnese-hercules',
      description: `<p>The <strong>Farnese Hercules</strong> shows the Greek hero exhausted after completing his twelve labors, his massive body slumped against a club draped with the Nemean lion's skin. This Roman marble copy was carved by Glykon of Athens in the early 3rd century CE, based on a Greek bronze original by <a href="/apps/masterpieces/artist/lysippos"><strong>Lysippos</strong></a> from around 320 BCE.</p>
<p>Standing over three meters tall, the statue depicts Hercules with <strong>exaggerated musculature</strong> that influenced bodybuilding ideals for centuries. Behind his back, his right hand clutches the golden apples of the Hesperides, proof of his final labor. The weary pose contrasts with heroic triumphalism, showing even demigods must rest.</p>
<p>Excavated from the Baths of Caracalla in 1546, the sculpture is now a centerpiece of the <a href="/apps/masterpieces/museum/naples-archaeological-museum"><strong>Naples Archaeological Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Farnese Hercules?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/naples-archaeological-museum\"><strong>Naples National Archaeological Museum</strong></a>. It moved there with the Farnese collection in the 18th century."
        },
        {
          question: "How big is the Farnese Hercules?",
          answer: "The marble stands <strong>317 cm (10 ft 5 in)</strong> tall. This colossal scale emphasized Hercules's superhuman nature and originally suited the vast Baths of Caracalla."
        },
        {
          question: "What is Hercules holding behind his back?",
          answer: "He clutches the <strong>golden apples of the Hesperides</strong>, obtained in his final labor. The hidden detail rewards viewers who walk around the massive sculpture."
        },
        {
          question: "Why does Hercules look tired?",
          answer: "The pose shows him <strong>resting after his labors</strong>. This humanizing approach was characteristic of Lysippos, who depicted even heroes as weary mortals."
        }
      ]
    },
    {
      slug: 'farnese-bull',
      description: `<p>The <strong>Farnese Bull</strong> is the largest single sculpture to survive from antiquity, depicting the punishment of Dirce, who was tied to a wild bull by Amphion and Zethus for mistreating their mother. Carved from a single block of marble around 150 BCE, the pyramidal composition rises nearly four meters tall with intertwined figures of extraordinary complexity.</p>
<p>Roman naturalist Pliny the Elder described the original Greek bronze, brought from Rhodes to Rome. This marble version was discovered in the <strong>Baths of Caracalla</strong> in 1545, heavily damaged and requiring extensive restoration. The dynamic composition anticipates Baroque drama by nearly two millennia.</p>
<p>The sculpture dominates a gallery in the <a href="/apps/masterpieces/museum/naples-archaeological-museum"><strong>Naples Archaeological Museum</strong></a>, demonstrating Hellenistic sculptors' ambition to create multi-figure compositions.</p>`,
      faqs: [
        {
          question: "Where is the Farnese Bull?",
          answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/naples-archaeological-museum\"><strong>Naples National Archaeological Museum</strong></a>. It has been there since the Farnese collection transferred from Rome in the 18th century."
        },
        {
          question: "How big is the Farnese Bull?",
          answer: "The group stands <strong>370 cm (12 ft 2 in)</strong> tall, the largest surviving ancient marble sculpture. Carving such a complex composition from a single block required extraordinary skill."
        },
        {
          question: "What myth does it show?",
          answer: "Amphion and Zethus <strong>punish Dirce</strong> by tying her to a wild bull. She had tormented their mother Antiope, and this brutal revenge became a popular subject."
        },
        {
          question: "Is it Greek or Roman?",
          answer: "The Naples version is <strong>Roman</strong>, copied from a Greek bronze original. Heavy restoration during the Renaissance added some elements now difficult to distinguish from the ancient core."
        }
      ]
    },
    {
      slug: 'farnese-atlas',
      description: `<p>The <strong>Farnese Atlas</strong> shows the Titan Atlas bearing the celestial sphere on his shoulders, condemned by Zeus to hold up the heavens for eternity. Created around 150 CE, this Roman marble statue stands 185 centimeters tall. The globe Atlas carries is the oldest surviving representation of the <strong>classical constellations</strong>, making it invaluable for historians of astronomy.</p>
<p>Unlike dramatic depictions of Atlas straining under his burden, this figure bears the cosmos with calm dignity. The 41 constellations carved on the sphere match descriptions by ancient astronomers, though positioned for a viewer looking from outside the heavens rather than standing on Earth. Scholars use the sphere to <strong>reconstruct lost star catalogs</strong>.</p>
<p>The statue is displayed at the <a href="/apps/masterpieces/museum/naples-archaeological-museum"><strong>Naples Archaeological Museum</strong></a> with the Farnese collection.</p>`,
      faqs: [
        {
          question: "Where is the Farnese Atlas?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/naples-archaeological-museum\"><strong>Naples National Archaeological Museum</strong></a>. It arrived with other Farnese family treasures in the 18th century."
        },
        {
          question: "Why is the globe scientifically important?",
          answer: "The sphere shows the <strong>oldest surviving classical constellations</strong>. Astronomers use it to reconstruct ancient star maps and understand how Greeks saw the night sky."
        },
        {
          question: "How big is the Farnese Atlas?",
          answer: "The statue stands <strong>185 cm (6 ft 1 in)</strong> tall. The celestial globe itself is large enough to show detailed constellation figures across its surface."
        },
        {
          question: "Who was Atlas?",
          answer: "Atlas was a <strong>Titan punished by Zeus</strong> to hold up the heavens. This eternal burden became one of mythology's most recognizable images, later applied to books of maps."
        }
      ]
    },
    {
      slug: 'artemision-bronze',
      description: `<p>The <strong>Artemision Bronze</strong> depicts a god (probably Zeus or Poseidon) poised to hurl a weapon, his arms extended in perfect balance. Created around 460 BCE, this is one of the few original Greek bronzes to survive, most having been melted down in antiquity. Fishermen found the statue in a shipwreck off Cape Artemision in 1926, giving the work its name.</p>
<p>The god's identity remains <strong>hotly debated</strong>. The stance suits either Zeus throwing a thunderbolt or Poseidon hurling a trident, though no weapon survives. The figure's anatomical precision and dynamic pose represent the Early Classical period's breakthrough from rigid archaic forms. At 209 centimeters, the statue is slightly larger than life.</p>
<p>The bronze is the prize of the <a href="/apps/masterpieces/museum/national-archaeological-museum-athens"><strong>National Archaeological Museum of Athens</strong></a>, one of the finest ancient bronzes in existence.</p>`,
      faqs: [
        {
          question: "Where is the Artemision Bronze?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/national-archaeological-museum-athens\"><strong>National Archaeological Museum of Athens</strong></a>. It was recovered from a shipwreck off Cape Artemision in 1926."
        },
        {
          question: "Is it Zeus or Poseidon?",
          answer: "Scholars <strong>cannot agree</strong>. The pose suits both Zeus throwing a thunderbolt and Poseidon hurling a trident. Without the missing weapon, the question may never be resolved."
        },
        {
          question: "How big is the Artemision Bronze?",
          answer: "The statue stands <strong>209 cm (6 ft 10 in)</strong> tall with arms spanning over two meters. The slightly larger-than-life scale emphasized the figure's divine nature."
        },
        {
          question: "Why is it so rare?",
          answer: "Most ancient bronzes were <strong>melted for metal reuse</strong>. This statue survived only because it sank in a shipwreck, hiding it from those who would have recycled the valuable bronze."
        }
      ]
    },
    {
      slug: 'mask-of-agamemnon',
      description: `<p>The <strong>Mask of Agamemnon</strong> is a gold funerary mask discovered in a shaft grave at Mycenae, created around 1550 BCE. Heinrich Schliemann, who excavated the mask in 1876, reportedly telegraphed the King of Greece: "I have gazed upon the face of Agamemnon." Though the mask predates the legendary Trojan War king by several centuries, the name stuck.</p>
<p>The mask covered the face of a <a href="https://luxurywallart.com/collections/gold-art" target="_blank" rel="noopener"><strong>Mycenaean king</strong></a> buried with extraordinary wealth. The facial features, including a full beard and closed eyes, were hammered from a single sheet of gold. Five similar masks were found at Mycenae, but this example's detailed craftsmanship makes it the most famous. The discovery helped establish that Greek civilization extended far earlier than previously believed.</p>
<p>The mask is displayed at the <a href="/apps/masterpieces/museum/national-archaeological-museum-athens"><strong>National Archaeological Museum of Athens</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Mask of Agamemnon?",
          answer: "The mask is at the <a href=\"/apps/masterpieces/museum/national-archaeological-museum-athens\"><strong>National Archaeological Museum of Athens</strong></a>. It has been a centerpiece of the Mycenaean collection since its 1876 discovery."
        },
        {
          question: "Did it really belong to Agamemnon?",
          answer: "No. The mask dates to <strong>1550 BCE</strong>, centuries before the legendary Trojan War. Schliemann's dramatic identification was romantic but chronologically impossible."
        },
        {
          question: "What is the mask made of?",
          answer: "The mask is <strong>hammered gold</strong>, shaped from a single sheet. This technique was common in Mycenaean burial practices, with several similar masks found at the site."
        },
        {
          question: "How big is the mask?",
          answer: "The mask measures <strong>26 × 20 cm</strong> (10 × 8 inches). It was sized to cover the face of the deceased king whose identity remains unknown."
        }
      ]
    },
    {
      slug: 'antikythera-youth',
      description: `<p>The <strong>Antikythera Youth</strong> (also called the Marathon Boy) is a bronze statue of an athletic young man, possibly depicting Perseus or Paris holding an object in his raised right hand. Created around 340 BCE, the figure demonstrates the refined proportions of Late Classical Greek sculpture. The statue was recovered from the famous Antikythera shipwreck in 1900.</p>
<p>The same shipwreck yielded the <strong>Antikythera Mechanism</strong>, an ancient astronomical computer. The bronze youth's languid pose and idealized features suggest a divine or heroic subject rather than a mortal athlete. The missing object in his hand has prompted various identifications, from Perseus holding Medusa's head to Paris with the apple of discord.</p>
<p>The statue is displayed at the <a href="/apps/masterpieces/museum/national-archaeological-museum-athens"><strong>National Archaeological Museum of Athens</strong></a> with other treasures from the shipwreck.</p>`,
      faqs: [
        {
          question: "Where is the Antikythera Youth?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/national-archaeological-museum-athens\"><strong>National Archaeological Museum of Athens</strong></a>. It was recovered from the Antikythera shipwreck in 1900."
        },
        {
          question: "Who does the statue represent?",
          answer: "Scholars suggest <strong>Perseus or Paris</strong>, though certainty is impossible without the missing object the figure once held. The idealized beauty suggests a divine or heroic subject."
        },
        {
          question: "How big is the Antikythera Youth?",
          answer: "The bronze stands <strong>196 cm (6 ft 5 in)</strong> tall. The life-size scale and refined proportions represent the peak of Late Classical Greek sculpture."
        },
        {
          question: "What else was found in the shipwreck?",
          answer: "The same wreck yielded the <strong>Antikythera Mechanism</strong>, an ancient astronomical computer, plus marble sculptures, coins, and luxury goods dating to around 70-60 BCE."
        }
      ]
    },
    {
      slug: 'jockey-of-artemision',
      description: `<p>The <strong>Jockey of Artemision</strong> shows a young boy urging his horse forward at full gallop, both figures captured in explosive motion. Created around 150 BCE, this Hellenistic bronze was recovered in pieces from the same shipwreck that yielded the Artemision Bronze. The horse and rider form one of antiquity's most dynamic sculptures.</p>
<p>The boy's face shows intense <strong>concentration and strain</strong>, his small body barely controlling the powerful horse beneath him. The animal's veins bulge with effort, and its mouth opens around a now-missing bit. Racing was a dangerous sport, and jockeys were often slaves or lower-class boys whose lives mattered less than the valuable horses they rode.</p>
<p>The reassembled group is displayed at the <a href="/apps/masterpieces/museum/national-archaeological-museum-athens"><strong>National Archaeological Museum of Athens</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Jockey of Artemision?",
          answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/national-archaeological-museum-athens\"><strong>National Archaeological Museum of Athens</strong></a>. Horse and rider were found separately in the same shipwreck as the Artemision Bronze."
        },
        {
          question: "How big is the sculpture?",
          answer: "The group measures <strong>290 × 250 cm</strong> (9 ft 6 in × 8 ft 2 in). The near life-size horse dwarfs its small jockey, emphasizing the dangerous imbalance of ancient racing."
        },
        {
          question: "Who was the jockey?",
          answer: "Jockeys were typically <strong>slaves or poor boys</strong>, chosen for their light weight. Their social status made them expendable in a sport that killed horses and riders alike."
        },
        {
          question: "Why is it so dynamic?",
          answer: "Hellenistic sculptors excelled at <strong>capturing motion</strong>. This racing scene pushes bronze technique to its limits, freezing a moment of explosive speed and danger."
        }
      ]
    },
    {
      slug: 'charioteer-of-delphi',
      description: `<p>The <strong>Charioteer of Delphi</strong> is one of the finest surviving Greek bronzes, depicting a victorious chariot driver in the moment after winning a race. Created around 478 BCE, the life-size figure wears the long chiton robe required of charioteers and holds reins in his still-extended hands. The statue formed part of a larger monument including a chariot and horses, now lost.</p>
<p>The charioteer's calm expression contrasts with the danger of his sport, where drivers were regularly killed in crashes. His <strong>inlaid copper lips</strong> and silver eyelashes add lifelike detail to the idealized face. A wealthy Sicilian tyrant dedicated the monument after his horses won at the Pythian Games.</p>
<p>The statue stands in the <a href="/apps/masterpieces/museum/delphi-archaeological-museum"><strong>Delphi Archaeological Museum</strong></a>, found during excavations of the sanctuary in 1896.</p>`,
      faqs: [
        {
          question: "Where is the Charioteer of Delphi?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/delphi-archaeological-museum\"><strong>Delphi Archaeological Museum</strong></a>. It was discovered at the sanctuary of Apollo in 1896, buried after an ancient earthquake."
        },
        {
          question: "How big is the Charioteer?",
          answer: "The bronze stands <strong>180 cm (5 ft 11 in)</strong> tall. The life-size scale suited its original placement atop a chariot group as a victory monument."
        },
        {
          question: "Why does he look so calm?",
          answer: "The <strong>Early Classical style</strong> emphasized restraint over emotion. The serene expression represents the ideal victor: dignified in triumph rather than celebrating wildly."
        },
        {
          question: "Who commissioned the statue?",
          answer: "A <strong>Sicilian tyrant</strong> (probably Polyzalos of Gela) dedicated the monument after winning a chariot race at the Pythian Games around 478 BCE."
        }
      ]
    },
    {
      slug: 'sphinx-of-naxos',
      description: `<p>The <strong>Sphinx of Naxos</strong> perched atop a column over 12 meters tall, guarding the sacred precinct at Delphi from around 560 BCE. The marble creature combines a woman's head with a lion's body and eagle's wings, the hybrid form common throughout ancient Mediterranean cultures. Carved from Naxian marble, the sphinx exemplifies Archaic Greek sculpture's blend of Eastern influences and emerging Greek style.</p>
<p>The people of Naxos, a wealthy Cycladic island, dedicated the monument as a display of <strong>piety and prestige</strong>. Sphinxes served as guardians in Greek sanctuaries, their intimidating forms warding off evil. This example's serene "archaic smile" and stylized feathers show sculptors still developing techniques that would mature in later periods.</p>
<p>The sphinx now stands in the <a href="/apps/masterpieces/museum/delphi-archaeological-museum"><strong>Delphi Archaeological Museum</strong></a>, removed from its column base for preservation.</p>`,
      faqs: [
        {
          question: "Where is the Sphinx of Naxos?",
          answer: "The sphinx is at the <a href=\"/apps/masterpieces/museum/delphi-archaeological-museum\"><strong>Delphi Archaeological Museum</strong></a>. Its original Ionic column base remains at the sanctuary site."
        },
        {
          question: "How big is the Sphinx of Naxos?",
          answer: "The sphinx measures <strong>222 cm (7 ft 3 in)</strong> tall. Atop its column, the complete monument reached over 12 meters, dominating the sanctuary approach."
        },
        {
          question: "Why did Naxos dedicate this monument?",
          answer: "The <strong>wealthy island of Naxos</strong> displayed piety and prestige through expensive dedications. Major sanctuaries filled with monuments from competing Greek cities."
        },
        {
          question: "What is the sphinx's significance?",
          answer: "Sphinxes served as <strong>guardian figures</strong> in Greek sanctuaries. Their hybrid form, combining human intelligence with animal power, protected sacred spaces from evil."
        }
      ]
    },
    {
      slug: 'boxer-at-rest',
      description: `<p>The <strong>Boxer at Rest</strong> shows a battle-scarred pugilist sitting exhausted after a bout, his face battered and swollen, his leather gloves still tied on. Created around 330 BCE, this Hellenistic bronze captures athletic violence with unflinching realism. The boxer's broken nose, cauliflower ears, and bleeding wounds speak to a career of punishment.</p>
<p>Unlike idealized classical athletes, this figure shows the <strong>cost of competition</strong>. Copper inlays simulate blood dripping from cuts, and the swelling on his face is anatomically accurate. The boxer looks up as if hearing his name called, perhaps for another bout or to receive a victory crown. His weary body and battered face make him one of antiquity's most human sculptures.</p>
<p>Discovered in Rome in 1885, the boxer is displayed at <a href="/apps/masterpieces/museum/palazzo-massimo"><strong>Palazzo Massimo</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Boxer at Rest?",
          answer: "The statue is at <a href=\"/apps/masterpieces/museum/palazzo-massimo\"><strong>Palazzo Massimo alle Terme</strong></a> in Rome. It was discovered on the Quirinal Hill in 1885, buried since antiquity."
        },
        {
          question: "What makes this bronze unusual?",
          answer: "The <strong>unflinching realism</strong> sets it apart. Broken nose, swollen ears, and bleeding cuts show a real fighter's damage rather than idealized athletic perfection."
        },
        {
          question: "How big is the Boxer at Rest?",
          answer: "The seated figure measures <strong>128 cm (50 in)</strong> tall. Life-size scale and detailed wounds create an almost uncomfortably intimate portrait of athletic suffering."
        },
        {
          question: "Why is he looking up?",
          answer: "The pose suggests <strong>hearing his name called</strong>, perhaps for another bout or victory announcement. This psychological moment intensifies the sculpture's emotional impact."
        }
      ]
    },
    {
      slug: 'discobolus-lancellotti',
      description: `<p>The <strong>Discobolus Lancellotti</strong> is a Roman marble copy of Myron's famous bronze discus thrower, created around 450 BCE. The original Greek statue captured an athlete at the apex of his wind-up, his body twisted in a pose that challenged sculptors to depict frozen motion. This version is among the best-preserved copies of one of antiquity's most celebrated works.</p>
<p>Myron's breakthrough was showing the body in <strong>transitional movement</strong> rather than static rest. The athlete's weight shifts as he prepares to release the discus, creating dynamic tension throughout the composition. The idealized anatomy served as a model for athletic perfection, though modern athletes note the pose would actually produce a poor throw.</p>
<p>The Lancellotti version is displayed at <a href="/apps/masterpieces/museum/palazzo-massimo"><strong>Palazzo Massimo</strong></a> in Rome.</p>`,
      faqs: [
        {
          question: "Where is the Discobolus Lancellotti?",
          answer: "This version is at <a href=\"/apps/masterpieces/museum/palazzo-massimo\"><strong>Palazzo Massimo alle Terme</strong></a> in Rome. Multiple Roman copies exist in museums worldwide."
        },
        {
          question: "Who created the original Discobolus?",
          answer: "The Greek sculptor <strong>Myron</strong> created the bronze original around 450 BCE. No original survives; we know the work only through Roman marble copies."
        },
        {
          question: "How big is the Discobolus?",
          answer: "This copy stands <strong>155 cm (5 ft 1 in)</strong> tall. The slightly under-life-size scale was common for Roman copies displayed in villas and gardens."
        },
        {
          question: "Is the pose athletically accurate?",
          answer: "Modern discus throwers say <strong>no</strong>. The twisted position would produce a weak throw. Myron prioritized visual drama over biomechanical accuracy."
        }
      ]
    },
    {
      slug: 'sleeping-hermaphroditus',
      description: `<p>The <strong>Sleeping Hermaphroditus</strong> shows a figure reclining in apparent slumber, their form appearing female from behind but revealing male anatomy from the front. The original Greek sculpture dates to around 150 BCE, though this version gained fame when <a href="/apps/masterpieces/artist/gian-lorenzo-bernini"><strong>Bernini</strong></a> carved its realistic mattress in 1620. The marble body sinks naturally into the cushioned surface.</p>
<p>In Greek mythology, <strong>Hermaphroditus</strong> was the child of Hermes and Aphrodite who merged with the nymph Salmacis to become both male and female. The sculpture plays with viewer expectations, appearing as a beautiful sleeping woman until they circle to discover the fuller anatomy. Ancient and Renaissance collectors prized such works for their ability to surprise and provoke.</p>
<p>The <a href="/apps/masterpieces/museum/louvre"><strong>Louvre's</strong></a> version, with Bernini's mattress, is the most famous of several ancient copies.</p>`,
      faqs: [
        {
          question: "Where is the Sleeping Hermaphroditus?",
          answer: "The most famous version is at the <a href=\"/apps/masterpieces/museum/louvre\"><strong>Louvre</strong></a> in Paris. Bernini added the mattress in 1620, enhancing the Hellenistic figure's naturalism."
        },
        {
          question: "Who carved the mattress?",
          answer: "<a href=\"/apps/masterpieces/artist/gian-lorenzo-bernini\"><strong>Bernini</strong></a> created the remarkably realistic marble mattress in 1620. His addition transformed a floating figure into one that seems to sink into soft fabric."
        },
        {
          question: "What is the sculpture's effect?",
          answer: "The pose <strong>surprises viewers</strong> who approach from behind expecting a sleeping woman. The revelation of dual anatomy engages themes of desire, gender, and perception."
        },
        {
          question: "How big is the sculpture?",
          answer: "The figure measures <strong>169 cm (5 ft 7 in)</strong> long. The intimate scale suits private viewing in a collector's gallery rather than public temple display."
        }
      ]
    },
    {
      slug: 'hermes-infant-dionysus',
      description: `<p><strong>Hermes and the Infant Dionysus</strong> shows the messenger god pausing during his journey to deliver baby Dionysus to the nymphs who would raise him. Carved from Parian marble around 340 BCE, the sculpture is attributed to <a href="/apps/masterpieces/artist/praxiteles"><strong>Praxiteles</strong></a>, though some scholars argue it's a later copy. If original, it's the only surviving work by one of antiquity's most praised sculptors.</p>
<p>Hermes dangles something (probably grapes, now lost) to amuse the infant, a <strong>tender moment</strong> between deities. The figure's soft modeling and dreamy expression exemplify the Late Classical style that broke from earlier austerity. The marble surface retains an almost skin-like polish that may preserve Praxiteles's original finish.</p>
<p>The statue was discovered in 1877 at the Temple of Hera in Olympia, where ancient sources said Praxiteles had placed it. It remains at the <a href="/apps/masterpieces/museum/olympia-archaeological-museum"><strong>Archaeological Museum of Olympia</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is Hermes and the Infant Dionysus?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/olympia-archaeological-museum\"><strong>Archaeological Museum of Olympia</strong></a> in Greece, found at the Temple of Hera during 1877 excavations."
        },
        {
          question: "Did Praxiteles carve this?",
          answer: "The attribution to <a href=\"/apps/masterpieces/artist/praxiteles\"><strong>Praxiteles</strong></a> remains <strong>debated</strong>. If authentic, it's his only surviving original. Some scholars believe it's a later Roman copy."
        },
        {
          question: "How big is the statue?",
          answer: "The marble stands <strong>215 cm (7 ft 1 in)</strong> tall. The larger-than-life scale suited temple display, where the figures would have appeared divine to worshippers."
        },
        {
          question: "What is Hermes holding?",
          answer: "His raised arm probably held <strong>grapes</strong> to amuse baby Dionysus, god of wine. The missing object has broken off, leaving only the tender gesture."
        }
      ]
    },
    {
      slug: 'nike-of-paionios',
      description: `<p>The <strong>Nike of Paionios</strong> depicts the goddess of victory descending from Olympus, her drapery swirling as she lands. Created around 420 BCE by the sculptor Paionios of Mende, the Parian marble figure stood atop a nine-meter column at Olympia, commemorating a military victory over Sparta. The dynamic pose anticipates the famous Winged Victory of Samothrace by two centuries.</p>
<p>Nike's robes cling to her body in the "wet drapery" style that would dominate Late Classical sculpture. The goddess appears to <strong>float down from heaven</strong>, an illusion enhanced by the eagle beneath her feet and billowing cape. An inscription on the base names both the sculptor and the dedicators, the Messenians and Naupactians, victorious over the Spartans.</p>
<p>The statue is displayed at the <a href="/apps/masterpieces/museum/olympia-archaeological-museum"><strong>Archaeological Museum of Olympia</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Nike of Paionios?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/olympia-archaeological-museum\"><strong>Archaeological Museum of Olympia</strong></a> in Greece. It was excavated from the sanctuary of Zeus in the 19th century."
        },
        {
          question: "How big is the Nike of Paionios?",
          answer: "The marble figure stands <strong>215 cm (7 ft 1 in)</strong> tall. Atop its nine-meter column, the complete monument dominated the sanctuary approach."
        },
        {
          question: "What victory did it commemorate?",
          answer: "The Messenians and Naupactians dedicated it after defeating <strong>Sparta</strong> in battle. The inscription survives, providing rare documentation of both artist and patron."
        },
        {
          question: "How does it relate to the Winged Victory?",
          answer: "The Nike of Paionios <strong>pioneered the descending pose</strong> that the later Winged Victory of Samothrace would perfect. Both show Nike alighting from the sky."
        }
      ]
    },
    {
      slug: 'riace-warrior-a',
      description: `<p><strong>Riace Warrior A</strong> is one of two monumental Greek bronzes discovered by a scuba diver off the coast of Calabria in 1972. Created around 450 BCE, the 198-centimeter figure depicts a bearded warrior in the prime of life, his idealized musculature representing the classical Greek concept of the heroic male body. The statue's survival as an original Greek bronze makes it extraordinarily rare.</p>
<p>The warrior originally held a shield and spear, his eyes were inlaid with bone and glass, and his lips and nipples were highlighted with <strong>copper</strong>. The relaxed contrapposto pose and naturalistic anatomy represent the Early Classical "Severe Style" at its peak. Scholars debate whether the statues depict heroes, gods, or commemorated real warriors.</p>
<p>Both Riace Warriors are displayed at the <a href="/apps/masterpieces/museum/reggio-calabria-museum"><strong>Museo Nazionale della Magna Grecia</strong></a> in Reggio Calabria.</p>`,
      faqs: [
        {
          question: "Where are the Riace Warriors?",
          answer: "Both warriors are at the <a href=\"/apps/masterpieces/museum/reggio-calabria-museum\"><strong>Museo Nazionale della Magna Grecia</strong></a> in Reggio Calabria, Italy. They were found in the sea off the Italian coast in 1972."
        },
        {
          question: "How were they discovered?",
          answer: "A <strong>scuba diver</strong> named Stefano Mariottini found them in 1972, about 200 meters offshore in 8 meters of water. The discovery was one of the century's most important archaeological finds."
        },
        {
          question: "How big is Riace Warrior A?",
          answer: "The bronze stands <strong>198 cm (6 ft 6 in)</strong> tall. The heroic scale and idealized anatomy represent Greek ideals of the perfect male body."
        },
        {
          question: "Why are original Greek bronzes rare?",
          answer: "Most ancient bronzes were <strong>melted for reuse</strong> in later periods. These statues survived only because they sank in a shipwreck, hiding them for over two millennia."
        }
      ]
    },
    {
      slug: 'riace-warrior-b',
      description: `<p><strong>Riace Warrior B</strong> stands slightly shorter than his companion, with a rounder head and less intense expression suggesting an older, calmer warrior or perhaps a different hero. Created around 450 BCE like Warrior A, this bronze displays similar technical mastery but distinct physiological details. The two statues may represent a matched pair of heroes or gods.</p>
<p>Warrior B originally wore a <strong>Corinthian helmet</strong> pushed back on his head, now lost. The figure's teeth are silver, visible through slightly parted lips, and the eyes were inlaid with ivory, glass, and stone. Scientific analysis shows both statues were cast using the lost-wax method, with clay cores still intact inside.</p>
<p>The warrior is displayed alongside Warrior A at the <a href="/apps/masterpieces/museum/reggio-calabria-museum"><strong>Museo Nazionale della Magna Grecia</strong></a>.</p>`,
      faqs: [
        {
          question: "How does Warrior B differ from A?",
          answer: "Warrior B has a <strong>rounder head and calmer expression</strong>, suggesting an older or different character. He originally wore a helmet, unlike Warrior A who was bare-headed."
        },
        {
          question: "What materials enhance the bronze?",
          answer: "The statue features <strong>silver teeth, copper lips</strong>, and eyes inlaid with ivory and colored stone. These details added lifelike color to the bronze surface."
        },
        {
          question: "How big is Riace Warrior B?",
          answer: "The bronze stands <strong>197 cm (6 ft 6 in)</strong> tall, slightly shorter than Warrior A. The near-identical scale suggests they were created as a matching pair."
        },
        {
          question: "Who do the warriors represent?",
          answer: "Scholars have proposed <strong>various heroes and gods</strong>, from Achilles and Ajax to Erechtheus and Pandion. Without inscriptions, their identities remain uncertain."
        }
      ]
    },
    {
      slug: 'discobolus-townley',
      description: `<p>The <strong>Townley Discobolus</strong> is one of the finest Roman marble copies of Myron's famous discus thrower, acquired by the British collector Charles Townley in the late 18th century. The sculpture shows an athlete at the apex of his throwing motion, body twisted in a pose that became shorthand for classical athletic perfection. The head's angle differs from other copies, possibly reflecting different Roman interpretations.</p>
<p>Myron's 5th-century BCE bronze original revolutionized sculpture by capturing the <strong>body in motion</strong>. Roman copyists reproduced the work frequently for wealthy collectors' villas and gardens. The Townley version entered the British Museum in 1805, where it helped establish public taste for classical art.</p>
<p>The statue remains a centerpiece of the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum's</strong></a> Greek and Roman collection.</p>`,
      faqs: [
        {
          question: "Where is the Townley Discobolus?",
          answer: "The statue is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. Collector Charles Townley acquired it in Italy in the late 18th century."
        },
        {
          question: "How does it differ from other copies?",
          answer: "The head's angle varies from other versions, suggesting <strong>Roman copyists interpreted</strong> the original differently. This copy may reflect a specific patron's preferences."
        },
        {
          question: "How big is the Townley Discobolus?",
          answer: "The marble stands <strong>169 cm (5 ft 7 in)</strong> tall. The slightly under-life-size scale suited Roman villa display rather than public monument."
        },
        {
          question: "Why are there so many copies?",
          answer: "<strong>Wealthy Romans</strong> filled their homes with copies of famous Greek sculptures. The Discobolus was especially popular, with numerous versions surviving today."
        }
      ]
    },
    {
      slug: 'nereid-monument',
      description: `<p>The <strong>Nereid Monument</strong> was a tomb for a Lycian ruler built around 390 BCE, combining Greek architectural forms with local traditions. The structure resembled an Ionic temple, with Nereids (sea nymphs) standing between columns, their drapery billowing as if caught in a sea breeze. The monument stood at Xanthos (in modern Turkey) until British archaeologists removed it in 1842.</p>
<p>The Nereids' <strong>windswept clothing</strong> demonstrates advances in sculpting fabric that would culminate in works like the Winged Victory. Friezes depicted battle scenes and a ruler's life, blending Greek artistic vocabulary with non-Greek subjects. The monument's reconstruction in the British Museum shows how Greek art spread throughout the Mediterranean.</p>
<p>The sculptures are displayed at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "Where is the Nereid Monument?",
          answer: "The reconstructed monument is at the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London. The original site at Xanthos, Turkey, is now UNESCO protected."
        },
        {
          question: "Who were the Nereids?",
          answer: "<strong>Nereids</strong> were sea nymphs in Greek mythology, daughters of the sea god Nereus. They guided sailors and represented the beauty and power of the ocean."
        },
        {
          question: "What was the monument's purpose?",
          answer: "It was a <strong>tomb for a Lycian ruler</strong>, possibly Erbinna (known to Greeks as Arbinas). The grandiose structure proclaimed his wealth and Hellenized tastes."
        },
        {
          question: "How big were the sculptures?",
          answer: "The largest Nereid figures stand about <strong>140 cm (4 ft 7 in)</strong> tall. The complete monument reached significant height with its temple-like structure."
        }
      ]
    }
  ];

  let updated = 0;
  for (const item of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: item.slug },
        data: {
          description: item.description,
          faqs: item.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`Updated: ${item.slug}`);
      updated++;
    } catch (error) {
      console.log(`Error updating ${item.slug}: ${error.message}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated}/${updates.length}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
