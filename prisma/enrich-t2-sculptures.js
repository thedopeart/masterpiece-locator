const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== ENRICHING T2 SCULPTURES ===\n');

  // Fix Great Sphinx artist attribution (Ancient Greek → Ancient Egyptian)
  const egyptianArtist = await prisma.artist.findUnique({ where: { slug: 'ancient-egyptian' } });
  if (egyptianArtist) {
    await prisma.artwork.update({
      where: { slug: 'great-sphinx-giza' },
      data: { artistId: egyptianArtist.id }
    });
    console.log('✓ Fixed Sphinx artist → Ancient Egyptian');
  }

  const updates = [
    // 1. DISCOBOLUS - add ancient-greek artist link
    {
      slug: 'discobolus',
      data: {
        description: `<p>The Discobolus (Discus Thrower) captures an athlete at the peak moment before releasing his disc. The original bronze by <a href="/apps/masterpieces/artist/ancient-greek"><strong>Myron</strong></a> dates to around 450 BCE, but survives only through Roman marble copies. The figure's body coils with <strong>potential energy</strong>, frozen in an impossible instant of athletic perfection.</p>

<p>The pose demonstrates the Greek ideal of combining athletic power with artistic beauty. Though the face remains serene (following Classical conventions), the body shows extreme physical effort. The twisted torso and carefully balanced limbs create a composition that works from every angle. Multiple Roman copies exist, with the best-preserved versions at the Palazzo Massimo in Rome and the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> in London.</p>`,
        updatedAt: new Date()
      }
    },

    // 2. DYING GAUL - add ancient-greek artist link
    {
      slug: 'dying-gaul',
      data: {
        description: `<p>The <strong>Dying Gaul</strong> depicts a wounded Celtic warrior in his final moments, propped on one arm as life ebbs away. This Roman marble copy preserves an <a href="/apps/masterpieces/artist/ancient-greek"><strong>Ancient Greek</strong></a> bronze original from around 230 BCE, commissioned to celebrate Pergamon's victory over the Galatians. The sculpture dignifies its subject even in defeat, showing the warrior's <strong>noble suffering</strong> rather than abject collapse.</p>

<p>The Gaul's distinctive features mark him as foreign: a torque around his neck, mustache, and tousled hair contrasting with clean-shaven Greek ideals. His sword and shield lie abandoned beside him. The <strong>psychological realism</strong> was revolutionary, presenting an enemy as fully human rather than a caricature.</p>

<p>The statue has been at the <a href="/apps/masterpieces/museum/capitoline-museums"><strong>Capitoline Museums</strong></a> in Rome since 1737, inspiring artists from Goya to contemporary photographers. It's one of the finest examples of Hellenistic emotional intensity in sculpture.</p>`,
        updatedAt: new Date()
      }
    },

    // 3. GREAT SPHINX OF GIZA - add ancient-egyptian artist link
    {
      slug: 'great-sphinx-giza',
      data: {
        description: `<p>The <strong>Great Sphinx of Giza</strong> is a limestone statue with the body of a lion and the head of a human, believed to represent Pharaoh Khafre. Carved from the bedrock of the Giza plateau around 2500 BCE by <a href="/apps/masterpieces/artist/ancient-egyptian"><strong>Ancient Egyptian</strong></a> craftsmen, it is the oldest and largest monumental sculpture in the ancient world. The Sphinx guards the pyramid complex, facing east toward the rising sun.</p>

<p>The statue measures 73 meters (240 feet) long and 20 meters (66 feet) high, roughly the length of a Boeing 747 and as tall as a six-story building. Its nose is famously missing, broken off sometime between the 3rd and 10th centuries CE. Popular legend blames Napoleon's troops, but drawings made before his invasion show the damage already existed.</p>

<p>The Sphinx sits on the Giza plateau near Cairo, Egypt, between the Great Pyramid of Khufu and Khafre's pyramid. Sand has buried it repeatedly throughout history. A restoration effort begun in 1990 stabilized the crumbling limestone. The monument remains one of Egypt's most visited attractions, drawing millions yearly to wonder at its silent gaze across the desert.</p>`,
        updatedAt: new Date()
      }
    },

    // 4. MEDICI VENUS - add ancient-greek artist link
    {
      slug: 'medici-venus',
      data: {
        description: `<p>The Medici Venus is a <strong>1st-century BCE marble</strong> of Aphrodite, a Roman copy of a lost <a href="/apps/masterpieces/artist/ancient-greek"><strong>Ancient Greek</strong></a> bronze. She stands in the Venus Pudica (modest Venus) pose, one hand covering her chest and the other her groin. The figure is 153 cm tall and has been at the <a href="/apps/masterpieces/museum/uffizi-gallery-florence-italy"><strong>Uffizi Gallery</strong></a> in Florence since 1677.</p>

<p>For centuries she was considered <strong>the most beautiful ancient sculpture in the world</strong>, and she was the prize of the Medici collection. Napoleon seized her in 1802 and took her to Paris. She was returned to Florence after Waterloo in 1815. <a href="/apps/masterpieces/artist/antonio-canova"><strong>Canova's</strong></a> Venus Italica was commissioned as a replacement during her absence.</p>`,
        updatedAt: new Date()
      }
    },

    // 5. VENUS DE MILO - add ancient-greek artist link, fix museum link
    {
      slug: 'venus-de-milo',
      data: {
        description: `<p>The Venus de Milo, discovered in 1820 on the Greek island of Milos, represents either <strong>Aphrodite</strong>, goddess of love, or the sea goddess Amphitrite. Carved from Parian marble around 130–100 BCE by an unknown <a href="/apps/masterpieces/artist/ancient-greek"><strong>Ancient Greek</strong></a> sculptor, it combines an idealized upper body with a more naturalistic treatment of drapery pooling at the hips.</p>

<p>A Greek peasant found the statue in two main pieces on his land. French naval officers quickly negotiated its purchase and sent it to Paris as a gift for King Louis XVIII. The arms were already missing at discovery, sparking endless speculation about her original pose. Was she holding a mirror? An apple? The arms of a male companion?</p>

<p>The <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> prominently displayed the Venus as a replacement for the Medici Venus, which Napoleon had been forced to return to Italy. She became a symbol of Classical Greek beauty, though the proportions are actually Hellenistic. The statue's fame was partly a matter of political timing: France needed a world-class classical sculpture, and the Venus arrived at exactly the right moment.</p>`,
        updatedAt: new Date()
      }
    },

    // 6. WINGED VICTORY OF SAMOTHRACE - add ancient-greek artist link, fix museum link
    {
      slug: 'winged-victory-samothrace',
      data: {
        description: `<p>The Winged Victory of Samothrace, also called Nike of Samothrace, dates to approximately 190 BCE. This Hellenistic <a href="/apps/masterpieces/artist/ancient-greek"><strong>Greek</strong></a> sculpture depicts Nike, the goddess of victory, alighting on the prow of a warship. Her wings spread wide, her drapery whipped by sea wind, she celebrates a naval triumph.</p>

<p>French archaeologists discovered the statue in 1863 on the island of Samothrace in the Aegean Sea. It arrived at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> in 118 fragments and was painstakingly reconstructed. The head and arms were never found, though a single hand appeared decades later. The statue originally stood on a hilltop sanctuary overlooking the sea.</p>

<p>The sculptor mastered the illusion of <strong>wet fabric clinging to the body</strong>, revealing the form beneath while suggesting powerful forward motion. Standing at the top of the Daru staircase, the Nike remains one of the Louvre's most photographed works and among the greatest surviving examples of Hellenistic art.</p>`,
        updatedAt: new Date()
      }
    },

    // 7. LESHAN GIANT BUDDHA - no individual artist, but add cultural context link
    {
      slug: 'leshan-giant-buddha',
      data: {
        description: `<p>The Leshan Giant Buddha is a <strong>71-meter (233-foot) stone sculpture</strong> of Maitreya carved into a cliff face where the Min, Dadu, and Qingyi rivers converge in Sichuan Province, China. A Chinese monk named Haitong initiated the project in 713 CE, hoping the Buddha's presence would calm the dangerous waters. Construction took 90 years, finishing in 803 CE.</p>

<p>It's the <strong>largest stone Buddha in the world</strong>. The figure sits with hands on its knees, facing the rivers. The head alone is 14.7 meters tall. Over a thousand buns of coiled hair were individually carved into the scalp. A clever drainage system hidden in the hair, collar, and chest channels rainwater away to prevent erosion. The engineering rivals anything produced by <a href="/apps/masterpieces/artist/ancient-egyptian"><strong>Ancient Egyptian</strong></a> or <a href="/apps/masterpieces/artist/ancient-greek"><strong>Greek</strong></a> builders, though it's far less known in the West.</p>

<p>The site became a UNESCO World Heritage Site in 1996 and draws millions of visitors annually to Sichuan Province.</p>`,
        updatedAt: new Date()
      }
    },

    // 8. MOAI - no individual artist
    {
      slug: 'moai-easter-island',
      data: {
        description: `<p>The <strong>Moai</strong> are monolithic human figures carved by the Rapa Nui people on Easter Island between 1250 and 1500 CE. Nearly 900 statues dot the remote Pacific island, most standing with their backs to the sea, gazing inland over villages they once protected. The statues represented deified ancestors who watched over the living, a function not unlike <a href="/apps/masterpieces/artist/ancient-egyptian"><strong>Ancient Egyptian</strong></a> funerary sculpture.</p>

<p>The average Moai stands 4 meters tall (13 feet) and weighs 14 tons, though the largest erected statue reaches 10 meters (33 feet). Most were carved from compressed volcanic ash at the Rano Raraku quarry, then transported miles across the island. How the Rapa Nui moved these massive statues without wheels or large animals remains debated. Recent experiments suggest they may have "walked" the figures using ropes.</p>

<p>Easter Island (Rapa Nui) lies in the southeastern Pacific Ocean, over 3,500 kilometers from mainland Chile. The island became a Chilean territory in 1888 and a UNESCO World Heritage Site in 1995. Many Moai were toppled during tribal conflicts or by earthquakes, but restoration efforts have re-erected dozens along the coast. Some Moai were taken to museums: the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> holds Hoa Hakananai'a, one of the most important examples.</p>`,
        updatedAt: new Date()
      }
    },

    // 9. TERRACOTTA ARMY - no individual artist
    {
      slug: 'terracotta-army',
      data: {
        description: `<p>The <strong>Terracotta Army</strong> is a collection of over 8,000 life-sized clay soldiers buried with China's first emperor, Qin Shi Huang, around 210 BCE. Each warrior has unique facial features, hairstyles, and expressions, suggesting they were modeled on actual soldiers. The army was meant to protect the emperor in the afterlife, a concept of <a href="/apps/masterpieces/artist/ancient-egyptian"><strong>Ancient Egyptian</strong></a> sculpture taken to an entirely different scale.</p>

<p>Farmers discovered the first fragments in 1974 while digging a well near Xi'an. Excavation revealed three major pits containing infantry, cavalry, archers, and officers arranged in battle formation. The warriors originally held real weapons (mostly looted in antiquity) and were painted in bright colors that faded within minutes of exposure to air. Some pigments have been preserved using modern techniques.</p>

<p>The museum complex sits in <strong>Xi'an, China</strong>, about 35 kilometers from the city center. Only a fraction of the emperor's tomb complex has been excavated. The main burial mound remains sealed, reportedly containing rivers of mercury and elaborate recreations of the empire. The Terracotta Army alone took an estimated 700,000 workers over 40 years to create.</p>`,
        updatedAt: new Date()
      }
    },

    // 10. TIAN TAN BUDDHA - no individual artist
    {
      slug: 'tian-tan-buddha',
      data: {
        description: `<p>The Tian Tan Buddha (or Big Buddha) is a <strong>34-meter (112-foot) bronze</strong> seated on a hilltop at Ngong Ping on Lantau Island, Hong Kong. Completed in 1993, it took 12 years to build. The figure depicts Shakyamuni Buddha sitting in a lotus position facing north, symbolically looking toward mainland China. It's one of the largest outdoor seated bronze Buddhas in the world.</p>

<p>The bronze weighs <strong>250 tonnes</strong> and sits on a three-platform lotus throne modeled after the Altar of Heaven (Tian Tan) at the Temple of Heaven in Beijing. Visitors climb 268 steps to reach the base. Inside the pedestal is a museum with Buddhist relics. The monument continues a tradition of monumental <a href="/apps/masterpieces/artist/ancient-egyptian"><strong>devotional sculpture</strong></a> that spans cultures from ancient Egypt to modern Asia.</p>

<p>The Ngong Ping 360 cable car offers dramatic views of the statue during the approach from Tung Chung. The surrounding Po Lin Monastery, founded in 1906, draws Buddhist pilgrims alongside the tourist crowds.</p>`,
        updatedAt: new Date()
      }
    }
  ];

  for (const update of updates) {
    try {
      await prisma.artwork.update({
        where: { slug: update.slug },
        data: update.data
      });
      console.log(`✓ Updated: ${update.slug}`);
    } catch (err) {
      console.error(`✗ FAILED: ${update.slug} — ${err.message}`);
    }
  }

  // Also fix old-format links on other T2 sculptures that already have artist links
  // but use /artist/ or /museum/ instead of /apps/masterpieces/artist/ or /apps/masterpieces/museum/
  const oldFormatSculptures = await prisma.artwork.findMany({
    where: {
      artworkType: 'sculpture',
      searchVolumeTier: 2,
      OR: [
        { description: { contains: 'href="/artist/' } },
        { description: { contains: 'href="/museum/' } },
        { description: { contains: 'href="/movement/' } },
        { description: { contains: 'href="/artwork/' } }
      ]
    },
    select: { slug: true, description: true }
  });

  for (const s of oldFormatSculptures) {
    let desc = s.description;
    desc = desc.replace(/href="\/artist\//g, 'href="/apps/masterpieces/artist/');
    desc = desc.replace(/href="\/museum\//g, 'href="/apps/masterpieces/museum/');
    desc = desc.replace(/href="\/movement\//g, 'href="/apps/masterpieces/movement/');
    desc = desc.replace(/href="\/artwork\//g, 'href="/apps/masterpieces/art/');
    if (desc !== s.description) {
      await prisma.artwork.update({
        where: { slug: s.slug },
        data: { description: desc, updatedAt: new Date() }
      });
      console.log(`✓ Fixed old links: ${s.slug}`);
    }
  }

  console.log('\n=== DONE ===');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
