const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artworks = {
  'mastaba-of-mereruka': {
    description: `<p><strong>Mereruka</strong> served as vizier under Pharaoh Teti during Egypt's 6th Dynasty, around 2300 BCE. His tomb at <a href="/apps/masterpieces/museum/saqqara"><strong>Saqqara</strong></a> is the largest non-royal mastaba ever built there, with 33 decorated chambers. The limestone walls preserve scenes of daily life: fishing, hunting, metalworking, and jewelers at their craft. Six rooms belonged to his wife Watekhethor, a princess.</p><p>What sets this tomb apart is its scale and detail. A life-size painted statue of Mereruka steps out from a false door in the main offering hall. The reliefs show hippo hunts in the marshes, cattle fording a river, and funeral processions. These aren't generic scenes. They record specific activities tied to Mereruka's estates and authority. The tomb was rediscovered in 1892 by Jacques de Morgan and remains one of the best-preserved <a href="/apps/masterpieces/movement/ancient-egyptian-art"><strong>Old Kingdom</strong></a> monuments open to visitors.</p>`,
    faqs: [
      { question: "Where is the Mastaba of Mereruka located?", answer: "The tomb sits at <a href=\"/apps/masterpieces/museum/saqqara\"><strong>Saqqara</strong></a>, just north of Pharaoh Teti's pyramid. It's open to visitors and considered one of the best-preserved Old Kingdom private tombs in Egypt." },
      { question: "How many rooms does Mereruka's tomb have?", answer: "The mastaba contains <strong>33 decorated chambers</strong>, making it the largest non-royal tomb at Saqqara. Six rooms were dedicated to his wife Watekhethor, and five to his son Meryteti." },
      { question: "What scenes are depicted in the tomb?", answer: "The limestone reliefs show <strong>daily life in ancient Egypt</strong>: hippo hunts, fishing, metalworking, cattle herding, and funeral processions. A life-size statue of Mereruka emerges from a false door in the main hall." }
    ]
  },
  'step-pyramid-of-djoser': {
    description: `<p>Built around 2650 BCE, the <strong>Step Pyramid</strong> at <a href="/apps/masterpieces/museum/saqqara"><strong>Saqqara</strong></a> is the oldest monumental stone structure in Egypt. Pharaoh Djoser's architect <strong>Imhotep</strong> designed it by stacking six flat-roofed mastabas of decreasing size, creating the first pyramid shape. It originally stood 62.5 meters tall and was clad in polished white limestone that would have gleamed across the desert.</p><p>Imhotep's design broke completely from tradition. Before this, royal tombs were single-story mud-brick structures. He pioneered large-scale limestone construction, and the surrounding complex included courtyards, temples, and a colonnade with ribbed columns that predate Greek architecture by two millennia. The pyramid sits within a massive enclosure wall stretching 545 by 277 meters. After a 14-year restoration completed in 2020, visitors can now enter the burial chamber 28 meters below ground. Imhotep was later deified by the Egyptians, one of very few commoners to receive that honor.</p>`,
    faqs: [
      { question: "Who designed the Step Pyramid of Djoser?", answer: "<strong>Imhotep</strong>, Pharaoh Djoser's royal architect, designed the pyramid around 2650 BCE. He was later deified by the Egyptians, one of very few non-royals to receive that honor in <a href=\"/apps/masterpieces/movement/ancient-egyptian-art\"><strong>ancient Egyptian</strong></a> history." },
      { question: "How tall is the Step Pyramid?", answer: "The pyramid originally stood <strong>62.5 meters (205 feet)</strong> tall with a base measuring 109 by 121 meters. It consists of six stacked mastabas of decreasing size, clad in polished white limestone." },
      { question: "Can you visit the Step Pyramid?", answer: "Yes. After a 14-year restoration completed in 2020, visitors can enter the pyramid at <a href=\"/apps/masterpieces/museum/saqqara\"><strong>Saqqara</strong></a> and descend to the burial chamber 28 meters below ground." }
    ]
  },
  'standing-striding-figure-nefertiti': {
    description: `<p>This small <strong>limestone sculpture</strong> of Queen Nefertiti dates to around 1350 BCE and stands just 40.5 centimeters tall. It was found in the workshop of the royal sculptor <strong>Thutmose</strong> at Amarna, the same studio that produced the famous painted bust. Unlike the bust's composed elegance, this figure shows Nefertiti striding forward with one foot ahead of the other, a pose traditionally reserved for male figures in <a href="/apps/masterpieces/movement/ancient-egyptian-art"><strong>ancient Egyptian art</strong></a>.</p><p>Traces of the original paint survive on the eyebrows, eye lines, and lips. The right forearm is missing, but the figure is otherwise intact. The thin, clinging garment carved into the limestone reveals the queen's body beneath, reflecting the naturalistic style of the <strong>Amarna Period</strong> under Pharaoh Akhenaten. The sculpture is held at the <a href="/apps/masterpieces/museum/neues-museum"><strong>Neues Museum</strong></a> in Berlin, alongside the more famous bust.</p>`,
    faqs: [
      { question: "Where is the Standing Figure of Nefertiti displayed?", answer: "The sculpture is at the <a href=\"/apps/masterpieces/museum/neues-museum\"><strong>Neues Museum</strong></a> in Berlin, Germany. It shares the collection with the more famous painted bust of Nefertiti, both found in sculptor Thutmose's workshop." },
      { question: "How big is this Nefertiti sculpture?", answer: "The limestone figure stands <strong>40.5 cm (16 inches)</strong> tall. It's a small workshop piece, likely a study model rather than a finished display sculpture. Traces of original paint remain on the face." },
      { question: "What makes this sculpture unusual?", answer: "Nefertiti is shown in a <strong>striding pose</strong> with one foot forward, a stance traditionally reserved for male figures in <a href=\"/apps/masterpieces/movement/ancient-egyptian-art\"><strong>ancient Egyptian art</strong></a>. This likely reflects her unusual political power during the Amarna Period." }
    ]
  },
  'statue-of-thutmose-iii': {
    description: `<p><a href="/apps/masterpieces/artist/ancient-egyptian-artists"><strong>Ancient Egyptian sculptors</strong></a> carved this greywacke statue of <strong>Thutmose III</strong>, Egypt's greatest military pharaoh, during the 18th Dynasty (around 1450 BCE). He wears the traditional nemes headcloth, false beard, and short kilt. The face is idealized but carries distinctive features: a strong nose, slight smile, and wide-set eyes that appear across multiple surviving portraits of this ruler.</p><p>Thutmose III led at least 17 military campaigns, expanding Egypt's empire from Syria to Nubia. He ruled for 54 years, though his stepmother <strong>Hatshepsut</strong> governed as regent for the first two decades. After her death, he ordered many of her monuments defaced. Several statues of Thutmose III survive in collections worldwide, including the <a href="/apps/masterpieces/museum/luxor-museum"><strong>Luxor Museum</strong></a>, the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a>, and the Grand Egyptian Museum in Cairo.</p>`,
    faqs: [
      { question: "Where can I see statues of Thutmose III?", answer: "Multiple statues exist in different museums. Notable examples are at the <a href=\"/apps/masterpieces/museum/luxor-museum\"><strong>Luxor Museum</strong></a>, the <a href=\"/apps/masterpieces/museum/the-metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> in New York, and the Grand Egyptian Museum in Cairo." },
      { question: "Why is Thutmose III famous?", answer: "He's considered <strong>Egypt's greatest military pharaoh</strong>, leading at least 17 campaigns that expanded the empire from Syria to Nubia. He ruled for 54 years during the <a href=\"/apps/masterpieces/movement/ancient-egyptian-art\"><strong>18th Dynasty</strong></a>." },
      { question: "What material is the statue made from?", answer: "The statue is carved from <strong>greywacke</strong>, a hard dark stone prized by Egyptian sculptors for its fine grain and durability. Other portraits of Thutmose III use basalt, schist, and limestone." }
    ]
  },
  'eye-of-horus-wedjat': {
    description: `<p>The <strong>Eye of Horus</strong>, called <em>wedjat</em> ("the sound one"), was ancient Egypt's most popular protective amulet. It represents the eye that the god Horus lost in battle with his uncle Set and that was later restored by the god Thoth. That myth made the symbol a powerful emblem of <strong>healing, protection, and wholeness</strong> in <a href="/apps/masterpieces/movement/ancient-egyptian-art"><strong>ancient Egyptian culture</strong></a>.</p><p>Artisans produced wedjat amulets from the Old Kingdom through the Roman period, a span of over 2,500 years. Materials ranged from cheap <strong>faience</strong> (glazed ceramic) to gold and lapis lazuli for royal use. The living wore them as jewelry, and embalmers placed them on mummies to protect the dead. The eye's six sections may correspond to the six senses or to fractions used in measuring grain. Examples survive in nearly every major Egyptian collection, including the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a> and the <a href="/apps/masterpieces/museum/the-british-museum"><strong>British Museum</strong></a>.</p>`,
    faqs: [
      { question: "What does the Eye of Horus symbolize?", answer: "The wedjat represents <strong>protection, healing, and wholeness</strong>. It comes from the myth of Horus losing his eye in battle with Set, then having it restored by Thoth. That story made it <a href=\"/apps/masterpieces/movement/ancient-egyptian-art\"><strong>ancient Egypt's</strong></a> most popular amulet." },
      { question: "Where can I see Eye of Horus amulets?", answer: "Examples exist in nearly every major Egyptian collection. The <a href=\"/apps/masterpieces/museum/the-metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a> and <a href=\"/apps/masterpieces/museum/the-british-museum\"><strong>British Museum</strong></a> both hold fine examples in faience, gold, and lapis lazuli." },
      { question: "What materials were used to make wedjat amulets?", answer: "Most were made from <strong>faience</strong>, a cheap glazed ceramic. Royal versions used gold, lapis lazuli, and other semiprecious stones. Production spanned over 2,500 years, from the Old Kingdom through Roman-era Egypt." }
    ]
  },
  'ankh-symbol-relief': {
    description: `<p>The <strong>ankh</strong> is ancient Egypt's most recognizable hieroglyph, meaning "life." Shaped like a cross with a loop at the top, it appears carved into temple walls, painted on coffins, and held in the hands of gods across thousands of years of <a href="/apps/masterpieces/movement/ancient-egyptian-art"><strong>Egyptian art</strong></a>. In relief carvings, deities often extend the ankh toward a pharaoh's nose, literally giving the breath of life.</p><p>The symbol's origin is debated. Some scholars see a <strong>sandal strap</strong> (the Egyptian word for sandal strap sounds like "ankh"). Others propose a knot, a vertebra, or a stylized combination of male and female symbols. Whatever its origin, the ankh became synonymous with eternal life and was adopted into <strong>Coptic Christian</strong> iconography as the crux ansata. Relief examples survive at Karnak, Luxor Temple, Abu Simbel, and countless tombs. Standalone ankh amulets in faience, wood, and metal were buried with the dead for protection in the afterlife.</p>`,
    faqs: [
      { question: "What does the ankh symbol mean?", answer: "The ankh is the <a href=\"/apps/masterpieces/movement/ancient-egyptian-art\"><strong>ancient Egyptian</strong></a> hieroglyph for <strong>\"life.\"</strong> In temple reliefs, gods hold it to pharaohs' noses, symbolically giving the breath of life. It later became associated with eternal life and resurrection." },
      { question: "Where can I see ankh reliefs in Egypt?", answer: "Ankh carvings appear at nearly every major Egyptian site, including <strong>Karnak, Luxor Temple, Abu Simbel</strong>, and the Valley of the Kings. They're among the most common symbols in Egyptian temple decoration." },
      { question: "What is the origin of the ankh shape?", answer: "Scholars debate its origin. Leading theories suggest a <strong>sandal strap</strong> (the Egyptian word sounds like \"ankh\"), a ceremonial knot, or a vertebra. The shape was later adopted by Coptic Christians as the crux ansata." }
    ]
  },
  'statue-of-anubis': {
    description: `<p>The most famous statue of <strong>Anubis</strong>, the jackal-headed god of embalming, was found in Tutankhamun's tomb in 1922. It shows a sleek black jackal crouching on a gilded shrine, ears pricked, alert and watchful. The figure is carved from wood, coated in black resin, with gold-leaf ears, eyebrows, and collar. It guarded the entrance to the treasury chamber, positioned to protect the pharaoh's canopic shrine.</p><p>Howard Carter found the statue wrapped in a linen shirt dated to the seventh year of Akhenaten's reign. The jackal form connects to real animal behavior: wild jackals and dogs scavenged near desert cemeteries, which the Egyptians interpreted as <strong>guardianship of the dead</strong>. Anubis played a central role in <a href="/apps/masterpieces/movement/ancient-egyptian-art"><strong>Egyptian funerary practice</strong></a>, overseeing mummification and guiding souls through the underworld. The statue is now displayed at the <a href="/apps/masterpieces/museum/the-egyptian-museum"><strong>Egyptian Museum</strong></a> in Cairo.</p>`,
    faqs: [
      { question: "Where is the Anubis statue from Tutankhamun's tomb?", answer: "The statue is at the <a href=\"/apps/masterpieces/museum/the-egyptian-museum\"><strong>Egyptian Museum</strong></a> in Cairo. Howard Carter found it in 1922 guarding the entrance to the treasury chamber of Tutankhamun's tomb in the Valley of the Kings." },
      { question: "What is the Anubis statue made of?", answer: "The figure is <strong>carved wood coated in black resin</strong>, with gold-leaf details on the ears, eyebrows, and collar. The jackal crouches on a gilded wooden shrine that originally held ritual objects." },
      { question: "Why is Anubis shown as a jackal?", answer: "Wild jackals and dogs scavenged near desert cemeteries, which Egyptians interpreted as <strong>guardianship of the dead</strong>. Anubis oversaw mummification and guided souls in <a href=\"/apps/masterpieces/movement/ancient-egyptian-art\"><strong>ancient Egyptian</strong></a> belief." }
    ]
  },
  'horus-falcon-statue': {
    description: `<p>Ancient Egyptian artists depicted <strong>Horus</strong>, the falcon-headed sky god, as a bird since the earliest dynasties. Bronze falcon statues became especially popular during the Late Period (664-332 BCE), when animal cults surged across Egypt. Craftsmen cast these figures using the lost-wax method, often inserting a <strong>mummified falcon</strong> inside the hollow bronze body as a votive offering.</p><p>Horus was the divine protector of kingship. Every living pharaoh was considered his earthly embodiment, which made the falcon Egypt's most politically charged animal symbol. The bird typically wears the <strong>Double Crown</strong> of Upper and Lower Egypt, reinforcing its royal association. Fine examples survive at the <a href="/apps/masterpieces/museum/the-metropolitan-museum-of-art"><strong>Metropolitan Museum of Art</strong></a>, Harvard Art Museums, and the <a href="/apps/masterpieces/movement/ancient-egyptian-art"><strong>Egyptian</strong></a> collections of the Louvre. The quality of casting varies widely, from rough pilgrim souvenirs to finely detailed royal commissions with inlaid gold eyes.</p>`,
    faqs: [
      { question: "Where can I see Horus falcon statues?", answer: "Fine examples are at the <a href=\"/apps/masterpieces/museum/the-metropolitan-museum-of-art\"><strong>Metropolitan Museum of Art</strong></a>, Harvard Art Museums, and the Louvre. Most date to the Late Period (664-332 BCE) when bronze animal votives were popular." },
      { question: "What are Horus falcon statues made of?", answer: "Most are <strong>cast bronze</strong> made using the lost-wax method. Many are hollow and once contained mummified falcon remains as votive offerings. Royal versions feature inlaid gold eyes and fine detailing." },
      { question: "Why is Horus shown as a falcon?", answer: "Horus was the <strong>sky god and divine protector of kingship</strong>. Every pharaoh was considered his living embodiment. The falcon wears the Double Crown of <a href=\"/apps/masterpieces/movement/ancient-egyptian-art\"><strong>Upper and Lower Egypt</strong></a>, reinforcing that royal connection." }
    ]
  }
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, data] of Object.entries(artworks)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: {
          description: data.description,
          faqs: data.faqs,
          updatedAt: new Date()
        }
      });
      console.log(`✓ ${slug}`);
      ok++;
    } catch (err) {
      console.error(`✗ ${slug}: ${err.message}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} updated, ${fail} failed`);
  await prisma.$disconnect();
}

seed();
