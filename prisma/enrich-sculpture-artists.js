const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const artistUpdates = [
  // ============================================================
  // 1. AUGUSTE RODIN
  // ============================================================
  {
    slug: 'auguste-rodin',
    data: {
      bioFull: `<p><strong>Auguste Rodin</strong> (1840–1917) is widely considered the father of modern sculpture. Born in Paris to a working-class family, he failed the entrance exam for the <a href="/apps/masterpieces/movement/academic-art"><strong>École des Beaux-Arts</strong></a> three times. That rejection shaped his career. He taught himself by studying in museums and working as a craftsman's assistant for nearly two decades before gaining recognition at 40.</p>

<p>A trip to Italy in 1875 changed everything. <strong>Michelangelo's</strong> figures hit him hard, and he returned to Paris with a rawer, more physical approach to form. His <strong>The Age of Bronze</strong> (1877) was so lifelike that critics accused him of casting from a living body. The scandal, ironically, made his name. Commissions followed: <strong>The Gates of Hell</strong>, a massive bronze portal he worked on for 37 years without finishing, spawned standalone pieces including <strong>The Thinker</strong> and <strong>The Kiss</strong>.</p>

<p>Rodin broke with the polished idealism of <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> tradition. He left surfaces rough, figures incomplete, poses unbalanced. His <strong>Burghers of Calais</strong> (1895) placed six figures at ground level instead of on a pedestal, a move so radical the city council almost rejected it. His work bridged <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a> and early modernism. Students included Brancusi and Bourdelle. Today his sculptures fill the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a> and the dedicated Musée Rodin in Paris, along with major collections at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "What is Auguste Rodin's most famous sculpture?",
          answer: "<strong>The Thinker</strong> (1904) is his most recognized work. Originally conceived as a figure of Dante sitting atop <strong>The Gates of Hell</strong>, it became a standalone symbol of philosophy and intellect. Copies exist worldwide, including at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>."
        },
        {
          question: "What art movement was Rodin part of?",
          answer: "Rodin doesn't fit neatly into one movement. He's often linked to <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a> and <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionism</strong></a> for his textured surfaces and emotional intensity. He rejected <strong>Neoclassical</strong> polish in favor of raw, expressive forms that paved the way for modern sculpture."
        },
        {
          question: "Where can I see Rodin's sculptures?",
          answer: "The Musée Rodin in Paris houses the largest collection, including <strong>The Gates of Hell</strong> in its garden. The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York and the Rodin Museum in Philadelphia also hold major collections of his bronzes and marbles."
        },
        {
          question: "What was The Gates of Hell?",
          answer: "Commissioned in 1880 for a planned Paris museum, <strong>The Gates of Hell</strong> was a monumental bronze portal inspired by Dante's <em>Inferno</em>. Rodin worked on it for 37 years without ever finishing. It spawned over 200 figures, including <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>The Thinker</strong></a> and <strong>The Kiss</strong>."
        },
        {
          question: "Who was Camille Claudel to Rodin?",
          answer: "<strong>Camille Claudel</strong> was Rodin's student, collaborator, and lover from 1883 onward. A gifted sculptor in her own right, she influenced his work significantly. Their relationship was turbulent, and Claudel spent her final 30 years in a psychiatric institution."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 2. ANCIENT GREEK (UNKNOWN)
  // ============================================================
  {
    slug: 'ancient-greek',
    data: {
      bioFull: `<p><strong>Ancient Greek sculpture</strong> spans roughly a thousand years, from the geometric Kouros figures of the 7th century BC to the dramatic compositions of the Hellenistic period. No other sculptural tradition has shaped Western art so fundamentally. The Greeks didn't just carve stone. They invented the idea that sculpture should capture the human body in motion, with accurate anatomy and emotional weight.</p>

<p>The progression tells the story. <strong>Archaic period</strong> (700–480 BC) statues stand stiff and frontal, influenced by Egyptian models. The <strong>Classical period</strong> (480–323 BC) brought a revolution: sculptors like <a href="/apps/masterpieces/artist/praxiteles"><strong>Praxiteles</strong></a> and Polykleitos developed contrapposto, naturalistic proportions, and idealized beauty. Praxiteles carved the first life-size female nude, the <strong>Aphrodite of Knidos</strong>. The <strong>Hellenistic period</strong> (323–31 BC) pushed further into drama and realism with works like the <strong>Laocoön Group</strong> and the <strong>Winged Victory of Samothrace</strong>.</p>

<p>Most original Greek bronzes were melted down centuries ago. What survives are primarily <strong>marble</strong> works and Roman copies. Major collections exist at the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> (including the Parthenon Marbles), the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, and the National Archaeological Museum in Athens. Greek sculptural principles, particularly the pursuit of ideal human form, remain the foundation of Western figurative art.</p>`,
      faqs: [
        {
          question: "What are the periods of Ancient Greek sculpture?",
          answer: "Three main periods: <strong>Archaic</strong> (700–480 BC) with stiff, frontal figures; <strong>Classical</strong> (480–323 BC) with idealized naturalism and contrapposto; and <strong>Hellenistic</strong> (323–31 BC) with dramatic emotion and movement. Each built on the last, pushing toward greater realism."
        },
        {
          question: "Where can I see Ancient Greek sculptures?",
          answer: "The <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> holds the Parthenon Marbles. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> has the Venus de Milo and Winged Victory. Athens' National Archaeological Museum and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a> also hold major collections."
        },
        {
          question: "Why are most Greek sculptures white?",
          answer: "They weren't originally. Greek sculptures were <strong>painted in bright colors</strong>, including red, blue, and gold. The paint wore off over millennia, leaving bare marble. Modern UV and chemical analysis has revealed traces of original pigment on many surviving works."
        },
        {
          question: "What materials did Greek sculptors use?",
          answer: "Primarily <strong>marble</strong> and <strong>bronze</strong>. Bronze was actually preferred for freestanding figures because of its strength and ability to hold fine detail. Most bronze originals were melted down for reuse, so marble works and Roman copies are what mainly survived."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 3. ANCIENT EGYPTIAN (UNKNOWN)
  // ============================================================
  {
    slug: 'ancient-egyptian',
    data: {
      bioFull: `<p><strong>Ancient Egyptian sculpture</strong> stretches back over 5,000 years, making it one of the oldest continuous artistic traditions in human history. From the monumental Great Sphinx of Giza to delicate painted tomb figurines, Egyptian sculptors developed a visual language so consistent and powerful that it remained largely unchanged for three millennia.</p>

<p>Egyptian sculpture served a specific purpose: it wasn't decorative art but a <strong>functional part of religious and funerary practice</strong>. Statues of pharaohs and gods provided vessels for the <em>ka</em> (life force) to inhabit in the afterlife. This explains the strict conventions: frontal poses, left foot forward, idealized features, and minimal emotion. Sculptors worked in <strong>granite</strong>, limestone, basalt, and wood, with some pieces gilded or painted. The level of craftsmanship in hard stone like diorite is still difficult to replicate today.</p>

<p>The <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a> holds one of the world's finest Egyptian collections, including the Rosetta Stone. The <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> houses the Temple of Dendur and hundreds of sculptural works. Cairo's Egyptian Museum and the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a> (home to the famous seated Scribe) round out the major collections worldwide.</p>`,
      faqs: [
        {
          question: "Why do Egyptian sculptures all look similar?",
          answer: "Egyptian art followed strict <strong>canonical rules</strong> for proportion and pose, maintained across dynasties. This consistency wasn't a lack of skill. It was intentional, tied to religious belief that correct representation ensured the subject's <strong>survival in the afterlife</strong>."
        },
        {
          question: "Where can I see Egyptian sculptures?",
          answer: "The <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> in London, Cairo's Egyptian Museum, the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York all hold world-class Egyptian collections with hundreds of sculptures."
        },
        {
          question: "What materials did Ancient Egyptian sculptors use?",
          answer: "<strong>Granite</strong>, limestone, basalt, and diorite were common for large works. Smaller pieces used wood, bronze, faience, and alabaster. Many were originally <strong>painted in vivid colors</strong> or covered in gold leaf. The hardest stones required copper and dolerite tools."
        },
        {
          question: "What was the purpose of Egyptian sculpture?",
          answer: "Sculptures served <strong>religious and funerary functions</strong>, not decoration. Statues housed the <em>ka</em> (life force) of the deceased, ensuring their survival in the afterlife. Temple sculptures honored gods and pharaohs. Even small <a href=\"/apps/masterpieces/artist/ancient-egyptian\"><strong>ushabti figurines</strong></a> were meant to serve the dead."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 4. ANCIENT ROMAN (UNKNOWN)
  // ============================================================
  {
    slug: 'ancient-roman',
    data: {
      bioFull: `<p><strong>Ancient Roman sculpture</strong> borrowed heavily from the Greeks but developed its own distinct character. Where Greek sculptors idealized, Roman sculptors documented. Their greatest contribution was <strong>veristic portraiture</strong>: unflinching, warts-and-all depictions of real people, complete with wrinkles, sagging skin, and receding hairlines. This honesty was a point of pride in Republican Rome, signaling wisdom and service.</p>

<p>Roman sculptors worked across a huge range. They produced colossal <strong>public monuments</strong> like Trajan's Column (with 2,662 carved figures spiraling up 35 meters), intimate portrait busts, mythological scenes on sarcophagi, and relief panels celebrating military victories. They perfected the technique of copying Greek originals in marble, and most of what we know about lost Greek bronzes comes from these Roman copies.</p>

<p>Under the Empire, portraiture shifted toward idealization again, with Augustus borrowing Greek Classical style to project authority. Later emperors swung between realism and propaganda as it suited them. Major Roman sculpture collections exist at the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>, the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, and the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "How is Roman sculpture different from Greek?",
          answer: "The biggest difference is <strong>portraiture</strong>. Greeks idealized their subjects; Romans (especially in the Republic) prized brutal realism. Roman busts show actual faces with wrinkles and blemishes. Romans also excelled at <strong>narrative relief sculpture</strong> on columns and arches, which Greeks rarely attempted at that scale."
        },
        {
          question: "Where can I see Roman sculptures?",
          answer: "The <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> hold iconic works like the Laocoön Group and Apollo Belvedere. The <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>, <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>, and <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a> also have major Roman collections."
        },
        {
          question: "What materials did Roman sculptors use?",
          answer: "Primarily <strong>marble</strong> for statuary and relief work, and <strong>bronze</strong> for portraits and equestrian monuments. They also used concrete for architectural sculpture, terracotta for roofing decorations, and occasionally precious metals. Most Roman bronzes were melted down in later centuries."
        },
        {
          question: "Why did Romans copy Greek sculptures?",
          answer: "Romans deeply admired <strong>Greek art</strong> and culture. Wealthy Romans filled their villas with marble copies of famous Greek bronzes. These copies served as status symbols and cultural statements. Ironically, many lost Greek originals are only known today through their <strong>Roman reproductions</strong>."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 5. GIAN LORENZO BERNINI
  // ============================================================
  {
    slug: 'gian-lorenzo-bernini',
    data: {
      bioFull: `<p><a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> sculptor <strong>Gian Lorenzo Bernini</strong> (1598–1680) essentially invented the style. Born in Naples to a sculptor father, he was carving marble heads by age eight. By ten, he'd caught the eye of Pope Paul V. That kind of precocity set the pace for a career that dominated European sculpture for over half a century.</p>

<p>Four early masterpieces at the <a href="/apps/masterpieces/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a> in Rome established his genius before he turned 27: <strong>Aeneas and Anchises</strong>, <strong>The Rape of Proserpina</strong>, <strong>Apollo and Daphne</strong>, and <strong>David</strong>. His David, captured mid-throw with muscles tensed, was a deliberate challenge to <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> static version. Where Michelangelo showed the moment before, Bernini chose the moment during.</p>

<p>He served eight popes, reshaping Rome's skyline with St. Peter's baldachin, the Fountain of the Four Rivers in Piazza Navona, and the colonnade of St. Peter's Square. His <strong>Ecstasy of Saint Teresa</strong> (1652) in Santa Maria della Vittoria remains one of the most emotionally charged sculptures ever created. Bernini could make marble look like flesh, fabric, even tears. His ability to capture motion and emotion in stone was, and remains, unmatched. Works fill Rome's churches and the <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>.</p>`,
      faqs: [
        {
          question: "What is Bernini's most famous sculpture?",
          answer: "<strong>Apollo and Daphne</strong> (1625) and <strong>The Ecstasy of Saint Teresa</strong> (1652) compete for the title. Apollo and Daphne, showing the nymph mid-transformation into a laurel tree, sits in the <a href=\"/apps/masterpieces/museum/borghese-gallery-rome-italy\"><strong>Borghese Gallery</strong></a> in Rome."
        },
        {
          question: "What art movement was Bernini part of?",
          answer: "Bernini didn't just belong to the <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> movement. He largely created it. His dramatic compositions, emotional intensity, and theatrical use of light and space defined Baroque sculpture. He also worked as an architect, painter, and city planner."
        },
        {
          question: "Where can I see Bernini's sculptures?",
          answer: "Rome is the place. The <a href=\"/apps/masterpieces/museum/borghese-gallery-rome-italy\"><strong>Borghese Gallery</strong></a> holds four early masterpieces. St. Peter's Basilica has his baldachin and Cathedra Petri. The Fountain of the Four Rivers is in Piazza Navona. His work is woven into <strong>Rome's fabric</strong> everywhere you look."
        },
        {
          question: "How did Bernini differ from Michelangelo?",
          answer: "<a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a> carved contained, powerful figures that felt trapped in stone. Bernini went the other direction: his figures burst outward with motion, emotion, and drama. Bernini's <strong>David</strong> twists mid-action, while Michelangelo's stands in calm anticipation."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 6. ANTONIO CANOVA
  // ============================================================
  {
    slug: 'antonio-canova',
    data: {
      bioFull: `<p><strong>Antonio Canova</strong> (1757–1822) was the leading sculptor of the <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> era and the most celebrated European sculptor of his generation. Born in Possagno, northern Italy, to a family of stonecutters, he was carving marble by his early teens. By 20, his first major works had earned him membership in Venice's Academy of Fine Arts.</p>

<p>Canova settled in Rome in 1781 and quickly became the sculptor everyone wanted. His <strong>Psyche Revived by Cupid's Kiss</strong> (1793), now at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, captures the exact moment of awakening with a tenderness that still stops visitors in their tracks. He sculpted popes, emperors, and royalty. Napoleon commissioned him multiple times, including the provocative <strong>Pauline Borghese as Venus Victrix</strong> at the <a href="/apps/masterpieces/museum/borghese-gallery-rome-italy"><strong>Borghese Gallery</strong></a>. He also carved Napoleon himself as a nude Mars, 11 feet tall. Napoleon reportedly hated the result.</p>

<p>What set Canova apart was his surface finish. He treated marble with a light wax that gave skin an almost translucent glow, a technique his rivals couldn't replicate. <strong>The Three Graces</strong> (1817) demonstrates this perfectly, with three figures whose flesh seems warm to the touch. After Napoleon's defeat, Canova personally negotiated the return of looted Italian artworks from Paris, a diplomatic triumph that earned him the title Marquis of Ischia.</p>`,
      faqs: [
        {
          question: "What is Antonio Canova's most famous sculpture?",
          answer: "<strong>Psyche Revived by Cupid's Kiss</strong> (1793) is probably his best-known work. It shows Cupid lifting Psyche from death's sleep with a kiss. You can see it at the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> in Paris, where it remains one of the museum's most popular sculptures."
        },
        {
          question: "What art movement was Canova part of?",
          answer: "Canova was the leading figure of <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassicism</strong></a> in sculpture. He drew heavily on ancient Greek and Roman models but added a sensuality and softness that was entirely his own. His work defined the style for an entire generation of European sculptors."
        },
        {
          question: "Where can I see Canova's sculptures?",
          answer: "The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> has <em>Psyche Revived by Cupid's Kiss</em>. The <a href=\"/apps/masterpieces/museum/borghese-gallery-rome-italy\"><strong>Borghese Gallery</strong></a> in Rome has <em>Pauline Borghese as Venus</em>. The <a href=\"/apps/masterpieces/museum/victoria-and-albert-museum-vampa-london-uk\"><strong>V&A in London</strong></a> and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum</strong></a> also hold his works."
        },
        {
          question: "Did Canova sculpt Napoleon?",
          answer: "Yes. Canova carved a colossal <strong>nude statue of Napoleon as Mars the Peacemaker</strong>, over 11 feet tall. Napoleon reportedly disliked it and kept it hidden. The original is now at Apsley House in London. He also sculpted Napoleon's sister <strong>Pauline</strong> as a reclining Venus."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 7. ALEXANDER CALDER
  // ============================================================
  {
    slug: 'alexander-calder',
    data: {
      bioFull: `<p><strong>Alexander Calder</strong> (1898–1976) changed what sculpture could be. Born into a family of artists (both his father and grandfather were sculptors), he started out as a mechanical engineer. That training never left him. Everything he made balanced engineering precision with playful, visual wit.</p>

<p>In 1926, living in Paris, Calder built a miniature circus from wire, cork, and scraps of fabric. He performed it in artists' studios, narrating in broken French and making sound effects. The performances drew crowds including Mondrian, Duchamp, and Miró. A visit to Mondrian's studio in 1930 triggered his shift to abstraction. Calder began making motorized sculptures, then abandoned the motors in favor of air currents. <strong>Marcel Duchamp</strong> named these balanced, hanging works <strong>"mobiles."</strong> Jean Arp named the stationary ground pieces <strong>"stabiles."</strong></p>

<p>Calder produced over 22,000 works in his lifetime, from delicate hanging mobiles to monumental public stabiles like the 53-foot red <strong>Flamingo</strong> in Chicago. His <strong>Mercury Fountain</strong> (1937) sat alongside Picasso's <em>Guernica</em> at the Spanish Pavilion. Works are held at <a href="/apps/masterpieces/museum/moma"><strong>MoMA</strong></a>, the <a href="/apps/masterpieces/museum/national-gallery-of-art"><strong>National Gallery of Art</strong></a>, the <a href="/apps/masterpieces/museum/whitney-museum"><strong>Whitney Museum</strong></a>, and <a href="/apps/masterpieces/museum/tate-modern-london-uk"><strong>Tate Modern</strong></a>. He received the Presidential Medal of Freedom posthumously in 1977.</p>`,
      faqs: [
        {
          question: "What did Alexander Calder invent?",
          answer: "Calder invented the <strong>mobile</strong>, a type of kinetic sculpture that moves with air currents. Marcel Duchamp coined the name in 1931. Calder also created <strong>stabiles</strong> (large stationary metal sculptures) and combined both forms in his later career."
        },
        {
          question: "Where can I see Calder's sculptures?",
          answer: "<a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York, the <a href=\"/apps/masterpieces/museum/national-gallery-of-art\"><strong>National Gallery of Art</strong></a> in Washington, and the <a href=\"/apps/masterpieces/museum/whitney-museum\"><strong>Whitney Museum</strong></a> all hold major collections. His red <strong>Flamingo</strong> stabile stands in Chicago's Federal Plaza."
        },
        {
          question: "What is Calder's Circus?",
          answer: "Built from 1926 to 1931 in Paris, <strong>Calder's Circus</strong> is a miniature working circus made from wire, cork, cloth, and found objects. He performed it live, narrating acts and making sound effects. It's now permanently displayed at the <a href=\"/apps/masterpieces/museum/whitney-museum\"><strong>Whitney Museum</strong></a> in New York."
        },
        {
          question: "Was Calder trained as an artist?",
          answer: "Not initially. He earned a <strong>mechanical engineering degree</strong> from Stevens Institute of Technology in 1919 before studying art at the Art Students League in New York. That engineering background shaped his approach to balance, weight, and movement throughout his career."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 8. PRAXITELES
  // ============================================================
  {
    slug: 'praxiteles',
    data: {
      bioFull: `<p><strong>Praxiteles</strong> (c. 400–326 BC) was the most celebrated sculptor in ancient Athens and arguably the most influential Greek artist of the 4th century BC. He came from a dynasty of sculptors: his father Kephisodotos and both his sons all practiced the craft. Details of his life are scarce, but his impact on Western art is enormous.</p>

<p>Praxiteles introduced a softer, more sensual approach to the human figure that broke with the severe Classical style. His signature <strong>"Praxitelean curve"</strong>, a languid S-shaped pose with the figure leaning on a support, became one of the most copied poses in art history. He preferred younger gods like Hermes, Apollo, and Aphrodite over the stern older Olympians. His <strong>Aphrodite of Knidos</strong> was the first life-size female nude in Greek sculpture. The island of Kos rejected it as too provocative, but Knidos bought it and the statue became so famous that tourists traveled from across the Mediterranean to see it.</p>

<p>The only surviving work possibly from his own hand is the <strong>Hermes Carrying the Infant Dionysus</strong>, found at Olympia in 1877 (though some scholars dispute the attribution). Everything else we know comes from Roman copies and ancient literary descriptions. His influence can be traced through <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> sculpture all the way to <a href="/apps/masterpieces/artist/antonio-canova"><strong>Canova</strong></a>. Copies of his works survive at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, <a href="/apps/masterpieces/museum/vatican-museums"><strong>Vatican Museums</strong></a>, and <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "What is Praxiteles most famous for?",
          answer: "The <strong>Aphrodite of Knidos</strong>, the first life-size female nude in Greek sculpture. It was so popular in antiquity that tourists traveled specifically to see it. The original is lost, but Roman copies survive in the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a> and elsewhere."
        },
        {
          question: "Do any original Praxiteles sculptures survive?",
          answer: "Possibly one: the <strong>Hermes Carrying the Infant Dionysus</strong>, found at Olympia in 1877. Scholars still debate whether it's his original or a later copy. All other known works survive only as <strong>Roman copies</strong> or through ancient literary descriptions."
        },
        {
          question: "What is the Praxitelean curve?",
          answer: "A signature <strong>languid S-shaped pose</strong> where the figure leans on an external support, shifting weight to one side. This created a softer, more relaxed look than earlier Classical sculpture. The pose influenced artists for centuries, from Hellenistic sculptors to <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> masters."
        },
        {
          question: "What period of Greek art was Praxiteles from?",
          answer: "The <strong>Late Classical period</strong> (4th century BC), between the High Classical era of Phidias and the Hellenistic age. He softened the idealized severity of earlier Greek sculpture, introducing sensuality and emotion that paved the way for Hellenistic drama."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 9. MICHELANGELO (FAQs only, bio already exists)
  // ============================================================
  {
    slug: 'michelangelo',
    data: {
      faqs: [
        {
          question: "What art movement was Michelangelo part of?",
          answer: "Michelangelo was a defining figure of the <a href=\"/apps/masterpieces/movement/renaissance\"><strong>High Renaissance</strong></a>, working alongside Leonardo da Vinci and Raphael. His powerful, muscular figures and emotional intensity later influenced <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>. He considered himself primarily a sculptor, though his painted ceiling changed art history."
        },
        {
          question: "Where can I see Michelangelo's sculptures?",
          answer: "His <em>David</em> stands in Florence's Galleria dell'Accademia. The <em>Pietà</em> is in St. Peter's Basilica. The Sistine Chapel ceiling and <em>The Last Judgment</em> are at the <a href=\"/apps/masterpieces/museum/vatican-museums\"><strong>Vatican Museums</strong></a>. The <a href=\"/apps/masterpieces/museum/bargello-palazzo-del-popolo-florence-italy\"><strong>Bargello</strong></a> in Florence holds several early works."
        },
        {
          question: "What was Michelangelo's preferred medium?",
          answer: "He famously insisted he was a <strong>sculptor</strong>, not a painter, initially refusing Pope Julius II's Sistine Chapel commission. He believed figures existed within marble, waiting to be freed. His <em>David</em>, carved from a block other sculptors had abandoned, demonstrates this philosophy."
        },
        {
          question: "How long did Michelangelo work on the Sistine Chapel?",
          answer: "He painted the ceiling from <strong>1508 to 1512</strong>, four years of work on scaffolding he designed himself. Pope Julius II wanted twelve apostles; Michelangelo convinced him to approve 300+ figures depicting Genesis. He returned decades later to paint <em>The Last Judgment</em> (1536–1541)."
        },
        {
          question: "What is Michelangelo's most famous sculpture?",
          answer: "The <strong>David</strong> (1504), standing 17 feet tall at Florence's Galleria dell'Accademia, is probably the most famous sculpture in the world. He carved it from a marble block that two other sculptors had given up on, completing it in about two years."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 10. DONATELLO
  // ============================================================
  {
    slug: 'donatello',
    data: {
      bioFull: `<p><strong>Donatello</strong> (c. 1386–1466) was the greatest sculptor of the early <a href="/apps/masterpieces/movement/renaissance"><strong>Renaissance</strong></a> and one of the most influential artists in Western history. Born Donato di Niccolò di Betto Bardi in Florence to a wool carder's family, he trained in Lorenzo Ghiberti's workshop while the master was creating the famous bronze doors for Florence's Baptistery.</p>

<p>Donatello did things no sculptor had done since antiquity. His bronze <strong>David</strong> (c. 1440s), now at the <a href="/apps/masterpieces/museum/bargello-palazzo-del-popolo-florence-italy"><strong>Bargello</strong></a> in Florence, was the first freestanding nude male sculpture since the Roman era. It's small (just over five feet) and enigmatic, with David standing over Goliath's severed head wearing only a hat and boots. He also invented <strong>schiacciato</strong> (shallow relief carving), a technique that creates the illusion of depth in almost flat marble surfaces.</p>

<p>His <strong>Gattamelata</strong> (1453) in Padua was the first large equestrian bronze since antiquity, modeled after the Marcus Aurelius statue in Rome. Donatello's late works, including the gaunt wooden <strong>Mary Magdalene</strong> (c. 1455), show a raw emotional intensity that wouldn't be matched until <a href="/apps/masterpieces/artist/auguste-rodin"><strong>Rodin</strong></a> four centuries later. <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo's</strong></a> David (1504) was a direct response to Donatello's version, both an homage and a challenge.</p>`,
      faqs: [
        {
          question: "What is Donatello's most famous sculpture?",
          answer: "His bronze <strong>David</strong> (c. 1440s), the first freestanding nude sculpture since antiquity. It shows a young David standing on Goliath's severed head, wearing only a hat and boots. You can see it at the <a href=\"/apps/masterpieces/museum/bargello-palazzo-del-popolo-florence-italy\"><strong>Bargello</strong></a> in Florence."
        },
        {
          question: "What art movement was Donatello part of?",
          answer: "The early <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> in Florence. Donatello was a pioneer who revived classical sculptural techniques lost since the Roman era, including freestanding bronze casting and realistic anatomy. He influenced virtually every sculptor who followed, especially <a href=\"/apps/masterpieces/artist/michelangelo\"><strong>Michelangelo</strong></a>."
        },
        {
          question: "Where can I see Donatello's works?",
          answer: "Florence is the center. The <a href=\"/apps/masterpieces/museum/bargello-palazzo-del-popolo-florence-italy\"><strong>Bargello</strong></a> holds the bronze <em>David</em> and other key pieces. His <strong>Gattamelata</strong> equestrian statue stands in Padua. Orsanmichele church in Florence displays his <em>St. George</em> and <em>St. Mark</em>."
        },
        {
          question: "What is schiacciato?",
          answer: "<strong>Schiacciato</strong> (meaning \"flattened\") is a shallow relief technique Donatello invented. He carved extremely thin layers of marble to create depth and perspective, almost like a drawing in stone. This innovation influenced relief sculpture for centuries."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 11. DANIEL CHESTER FRENCH
  // ============================================================
  {
    slug: 'daniel-chester-french',
    data: {
      bioFull: `<p><strong>Daniel Chester French</strong> (1850–1931) created the most recognized sculpture in the United States: the seated Abraham Lincoln in the Lincoln Memorial. Born in Exeter, New Hampshire, and raised in Concord, Massachusetts, he grew up as a neighbor of Ralph Waldo Emerson and the Alcott family. Abigail May Alcott (Louisa May's sister) gave him his first modeling supplies.</p>

<p>His formal training was remarkably brief. About a month with sculptor John Quincy Adams Ward, some evening classes at the National Academy of Design, and two years working in Florence. That was it. Yet at 25, he completed <strong>The Minute Man</strong> (1875) for the centennial of the Battle of Concord. Cast from ten melted-down Civil War cannons, it became a national icon, appearing on World War II defense bonds and stamps.</p>

<p>French spent the next five decades as America's most prolific public sculptor. His 65-foot <strong>Republic</strong> towered over the 1893 Columbian Exposition. He carved <strong>Alma Mater</strong> for Columbia University and the seated <strong>John Harvard</strong> (working without any image of the actual man). The <strong>Lincoln Memorial</strong> (dedicated 1922) took eight years to complete. French built four scale models and visited the site with photographs to determine that the statue needed to be 19 feet tall to fill the space. He died in 1931 at Chesterwood, his Berkshires estate, now a museum of his work.</p>`,
      faqs: [
        {
          question: "What is Daniel Chester French's most famous sculpture?",
          answer: "The seated <strong>Abraham Lincoln</strong> inside the Lincoln Memorial in Washington, D.C. Standing 19 feet tall and carved in white marble, it took French eight years to complete. It was dedicated in 1922 and remains one of the most visited monuments in America."
        },
        {
          question: "What is The Minute Man sculpture?",
          answer: "French's first major work (1875), created for the centennial of the <strong>Battle of Concord</strong>. It depicts a colonial farmer leaving his plow to fight. Cast from ten melted Civil War cannons, it became a symbol of American patriotism and appeared on WWII defense bonds."
        },
        {
          question: "Where can I see Daniel Chester French's work?",
          answer: "The <strong>Lincoln Memorial</strong> in Washington, D.C. is the most famous location. <em>The Minute Man</em> stands in Concord, Massachusetts. <em>Alma Mater</em> sits at Columbia University. The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> also holds some of his works."
        },
        {
          question: "How did French become a sculptor?",
          answer: "He received his first modeling supplies from <strong>Abigail May Alcott</strong>, sister of <em>Little Women</em> author Louisa May Alcott, in Concord. His formal training lasted barely a month with sculptor J.Q.A. Ward. Despite this, he became the most prominent American sculptor of his era."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 12. FRÉDÉRIC AUGUSTE BARTHOLDI
  // ============================================================
  {
    slug: 'frederic-auguste-bartholdi',
    data: {
      bioFull: `<p><strong>Frédéric Auguste Bartholdi</strong> (1834–1904) designed the most recognizable statue on Earth: the Statue of Liberty. Born in Colmar, Alsace (then France), he studied architecture and painting before turning to sculpture. A trip to Egypt in 1855 changed his artistic ambitions forever. Seeing the Sphinx and Pyramids ignited an obsession with monumental, colossal-scale works.</p>

<p>The Liberty idea started in 1865, when French political thinker Édouard de Laboulaye suggested a gift from France to America celebrating shared democratic values. Bartholdi ran with it. He designed a robed woman holding a torch aloft, drawing partly from his earlier (rejected) proposal for a lighthouse at the Suez Canal. The internal iron framework was engineered by <strong>Gustave Eiffel</strong>. Workers hammered copper sheets by hand over the skeleton, and the whole thing was assembled in Paris first, then shipped in 350 crates to New York.</p>

<p>President Grover Cleveland dedicated the <strong>Statue of Liberty</strong> on October 28, 1886. It was rumored in France that Bartholdi modeled the face after his mother. His other major work, the <strong>Lion of Belfort</strong> (1880), is a colossal sandstone lion carved into a cliff in eastern France. Bartholdi died of tuberculosis in Paris in 1904. His birthplace in Colmar is now a museum dedicated to his life and work.</p>`,
      faqs: [
        {
          question: "Who designed the Statue of Liberty?",
          answer: "<strong>Frédéric Auguste Bartholdi</strong> designed the exterior form. <strong>Gustave Eiffel</strong> (of Eiffel Tower fame) engineered the internal iron framework. French citizens funded its construction, raising over a million francs. It was a gift from France to the United States, dedicated in 1886."
        },
        {
          question: "What inspired Bartholdi to create the Statue of Liberty?",
          answer: "French political thinker <strong>Édouard de Laboulaye</strong> proposed the idea in 1865 as a gift celebrating Franco-American friendship and democratic ideals. Bartholdi's visit to Egypt in 1855, where the <strong>Sphinx and Pyramids</strong> ignited his love of monumental sculpture, shaped the statue's colossal scale."
        },
        {
          question: "What other sculptures did Bartholdi create?",
          answer: "His other masterwork is the <strong>Lion of Belfort</strong> (1880), a massive sandstone lion carved into a cliff face in eastern France. He also created the Bartholdi Fountain in Washington, D.C. His hometown of <a href=\"/apps/masterpieces/artist/frederic-auguste-bartholdi\"><strong>Colmar</strong></a> has several of his monuments."
        },
        {
          question: "How was the Statue of Liberty built?",
          answer: "Workers <strong>hammered 300 copper sheets</strong> by hand over an iron framework designed by Gustave Eiffel. It was fully assembled in Paris first, then disassembled and shipped to New York in 350 crates. The reassembly on Bedloe's Island took four months."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 13. MEISSEN PORCELAIN MANUFACTORY
  // ============================================================
  {
    slug: 'meissen-porcelain-manufactory',
    data: {
      bioFull: `<p>The <strong>Meissen Porcelain Manufactory</strong> has been producing fine porcelain in Saxony, Germany, since 1710, making it the oldest porcelain maker in Europe. It all started with <strong>Augustus the Strong</strong>, Elector of Saxony and King of Poland, who was obsessed with Chinese porcelain and funded alchemist Johann Friedrich Böttger's attempts to discover the formula. Böttger cracked it in 1708, and production began at Albrechtsburg castle in Meissen two years later.</p>

<p>The manufactory's crossed-swords trademark, introduced in 1720, is one of the oldest brands still in use. Its golden age came under chief modeller <strong>Johann Joachim Kändler</strong> (active 1733–1775), who created the famous <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> and <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> figurines that made Meissen a household name among European aristocracy. Kändler's Monkey Orchestra, Commedia dell'arte figures, and the legendary Swan Service (over 1,000 pieces made for Count von Brühl) remain among the most prized porcelain works ever produced.</p>

<p>Meissen figurines capture court life in miniature: shepherds, soldiers, gods, fools, and musicians, all modeled with extraordinary detail. The manufactory survived wars, occupations, and regime changes over three centuries. Today it's still hand-producing porcelain in Meissen, using techniques that have been refined but never fundamentally changed. Works are held at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <a href="/apps/masterpieces/museum/victoria-and-albert-museum-vampa-london-uk"><strong>V&A</strong></a>, and the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "When was Meissen porcelain founded?",
          answer: "In <strong>1710</strong>, making it the oldest porcelain manufactory in Europe. Augustus the Strong, King of Poland and Elector of Saxony, funded the effort. Alchemist <strong>Johann Friedrich Böttger</strong> discovered the hard-paste porcelain formula in 1708 after years of experimentation."
        },
        {
          question: "What are Meissen figurines?",
          answer: "Small porcelain sculptures depicting court figures, mythological characters, animals, and musicians. Chief modeller <strong>Johann Joachim Kändler</strong> created the most famous examples during the <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> period, including the Monkey Orchestra and Commedia dell'arte characters."
        },
        {
          question: "How can you identify real Meissen porcelain?",
          answer: "Look for the <strong>crossed swords</strong> mark, hand-painted in cobalt blue on the base. Introduced in 1720, it's one of the world's oldest trademarks. The style of the swords has varied over the centuries, which helps date individual pieces."
        },
        {
          question: "Where can I see Meissen porcelain?",
          answer: "The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York, the <a href=\"/apps/masterpieces/museum/victoria-and-albert-museum-vampa-london-uk\"><strong>V&A</strong></a> in London, and the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a> all hold major collections. The Porzellansammlung in Dresden has the largest collection in the world."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 14. FRENCH
  // ============================================================
  {
    slug: 'french',
    data: {
      bioFull: `<p><strong>French sculpture</strong> has shaped Western art for over eight centuries, from the Gothic cathedrals of the 12th century to the radical experiments of the 20th. France's position as Europe's cultural capital, especially from the 17th century onward, made Paris the city where sculptors came to train, compete, and exhibit. The tradition produced some of the greatest names in the medium's history.</p>

<p>The lineage runs deep. Gothic cathedral sculpture at Chartres and Reims set a standard for figurative carving in the Middle Ages. The <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> period saw royal commissions fill Versailles with monumental works. <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> sculptors refined marble into idealized forms during the Enlightenment. The 19th century brought a flowering: <a href="/apps/masterpieces/artist/antoine-louis-barye"><strong>Antoine-Louis Barye</strong></a> pioneered animal bronze sculpture, <a href="/apps/masterpieces/artist/jean-baptiste-carpeaux"><strong>Carpeaux</strong></a> brought Romantic energy to public monuments, and <a href="/apps/masterpieces/artist/auguste-rodin"><strong>Rodin</strong></a> broke every rule left standing.</p>

<p>In the 20th century, French-based artists including <a href="/apps/masterpieces/artist/louise-bourgeois"><strong>Louise Bourgeois</strong></a> and Constantin Brancusi (Romanian, but Paris-based) pushed sculpture into completely new territory. The tradition of anonymous French craftsmen, whose works fill museums labeled simply "French," represents centuries of skilled, often unsigned artistry. Major collections of French sculpture are held at the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>, the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>, and the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>.</p>`,
      faqs: [
        {
          question: "What are the major periods of French sculpture?",
          answer: "Key periods include <strong>Gothic</strong> cathedral sculpture (12th–15th c.), <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> royal commissions (17th c.), <a href=\"/apps/masterpieces/movement/neoclassicism\"><strong>Neoclassical</strong></a> marble idealism (18th c.), <strong>Romantic and Realist</strong> bronze work (19th c.), and modernist experimentation in the 20th century."
        },
        {
          question: "Who are the most famous French sculptors?",
          answer: "<a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Auguste Rodin</strong></a> is the most celebrated, followed by <a href=\"/apps/masterpieces/artist/jean-baptiste-carpeaux\"><strong>Carpeaux</strong></a>, <a href=\"/apps/masterpieces/artist/antoine-louis-barye\"><strong>Barye</strong></a>, and <a href=\"/apps/masterpieces/artist/louise-bourgeois\"><strong>Louise Bourgeois</strong></a>. Earlier masters include Jean Goujon (Renaissance) and Pierre Puget (Baroque)."
        },
        {
          question: "Where can I see French sculpture?",
          answer: "The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> and <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris hold the world's finest collections. The Tuileries Gardens feature outdoor bronzes. The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York also has a strong French sculpture wing."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 15. KHMER
  // ============================================================
  {
    slug: 'khmer',
    data: {
      bioFull: `<p><strong>Khmer sculpture</strong> emerged from the civilization that built Angkor Wat and dominated Southeast Asia from the 9th to 15th centuries. Centered in present-day Cambodia, the Khmer Empire produced some of the most refined stone carving in Asia. Their sculptors worked primarily in <strong>sandstone</strong> and bronze, creating devotional images of Hindu and Buddhist deities with a serene beauty that's instantly recognizable.</p>

<p>The style evolved over centuries. Early Khmer works (pre-Angkorian, 6th–8th centuries) show Indian sculptural influence with cylindrical forms and thick features. The <strong>Angkorian period</strong> (802–1431) refined these into a distinctly Khmer aesthetic: oval faces, arched brows, almond eyes, and a subtle "Angkor smile" that radiates inner calm. Sculptures served temple complexes, from the massive <strong>Bayon</strong> temple (with its 216 carved stone faces) to smaller shrines scattered across the empire.</p>

<p>Khmer sculptors excelled at both monumental and intimate scales. Giant guardian figures flanked temple entrances, while small bronze devotional images were made for private worship. The tradition declined after the fall of Angkor to the Siamese in 1431, but surviving works fill the National Museum of Cambodia in Phnom Penh, the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a>, the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, and the Musée Guimet in Paris.</p>`,
      faqs: [
        {
          question: "What is Khmer sculpture?",
          answer: "<strong>Khmer sculpture</strong> comes from the civilization that built Angkor Wat in Cambodia, spanning the 6th to 15th centuries. Primarily carved in <strong>sandstone</strong> or cast in bronze, it depicts Hindu and Buddhist deities with serene oval faces and a distinctive half-smile."
        },
        {
          question: "Where can I see Khmer sculpture?",
          answer: "The National Museum of Cambodia in Phnom Penh has the largest collection. In the West, the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a>, the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>, and the Musée Guimet in Paris hold important Khmer works."
        },
        {
          question: "What materials did Khmer sculptors use?",
          answer: "Primarily <strong>sandstone</strong> for temple sculpture and <strong>bronze</strong> for smaller devotional images. Some works used laterite as a core with sandstone cladding. Gold and silver were reserved for the most sacred pieces. The sandstone came from quarries at Phnom Kulen, transported by river to temple sites."
        },
        {
          question: "What is the Angkor smile?",
          answer: "A subtle, serene half-smile found on Khmer sculptures, especially from the <strong>Bayon period</strong> (late 12th–early 13th century). The 216 giant stone faces at <strong>Bayon temple</strong> all wear this expression. It conveys inner peace and spiritual composure."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 16. JEAN-BAPTISTE CARPEAUX
  // ============================================================
  {
    slug: 'jean-baptiste-carpeaux',
    data: {
      bioFull: `<p><strong>Jean-Baptiste Carpeaux</strong> (1827–1875) was the most important French sculptor of the Second Empire, bridging <a href="/apps/masterpieces/movement/romanticism"><strong>Romanticism</strong></a> and the naturalism that would culminate in <a href="/apps/masterpieces/artist/auguste-rodin"><strong>Rodin</strong></a>. Born in Valenciennes to a bricklayer father and lacemaker mother, he worked his way up through the Paris art establishment, winning the Prix de Rome in 1854.</p>

<p>Seven years in Rome transformed him. Studying <a href="/apps/masterpieces/artist/michelangelo"><strong>Michelangelo</strong></a>, <a href="/apps/masterpieces/artist/donatello"><strong>Donatello</strong></a>, and Verrocchio gave him a taste for dramatic movement that clashed with the stiff <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> tradition still dominant in France. His <strong>Ugolino and His Sons</strong> (1861), depicting a count devouring his children in Dante's <em>Inferno</em>, announced a new kind of French sculpture: visceral, emotional, and unapologetically physical.</p>

<p>His most famous work, <strong>La Danse</strong> (1869), created for the façade of Charles Garnier's new Paris Opéra, caused a genuine scandal. Nude figures whirl in a wild ring around a central figure, and critics called it an offense to public decency. Someone threw a bottle of ink at it. The controversy only made Carpeaux more famous. He died at 48, but his influence on Rodin and later French sculptors was direct and lasting. The original <em>La Danse</em> is now at the <a href="/apps/masterpieces/museum/musee-dorsay"><strong>Musée d'Orsay</strong></a>.</p>`,
      faqs: [
        {
          question: "What is Carpeaux's most famous sculpture?",
          answer: "<strong>La Danse</strong> (1869), a group of nude figures in wild motion created for the Paris Opéra façade. It caused a public scandal over its sensuality. The original is now at the <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a>; a copy stands on the Opéra building."
        },
        {
          question: "What art movement was Carpeaux part of?",
          answer: "He bridged <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a> and naturalism. His emotional, physically dynamic sculptures rejected the stiff <strong>Neoclassical</strong> tradition still dominant in mid-19th century France. Rodin admired him deeply, and Carpeaux's influence on modern French sculpture was direct."
        },
        {
          question: "Where can I see Carpeaux's work?",
          answer: "The <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris holds major works including the original <em>La Danse</em> and <em>Ugolino</em>. The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York also has an important collection of his sculptures and portrait busts."
        },
        {
          question: "Why was La Danse controversial?",
          answer: "Its <strong>nude figures in wild, ecstatic motion</strong> were considered indecent for a public building. Critics compared the scandal to Flaubert's <em>Madame Bovary</em> and Manet's <em>Olympia</em>. Someone even threw a bottle of ink at the sculpture on the Opéra façade."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 17. JOSEPH MATTHIAS GÖTZ
  // ============================================================
  {
    slug: 'joseph-matthias-g-tz',
    data: {
      bioFull: `<p><strong>Joseph Matthias Götz</strong> (1696–1760) was one of the leading <a href="/apps/masterpieces/movement/baroque"><strong>Baroque</strong></a> and <a href="/apps/masterpieces/movement/rococo"><strong>Rococo</strong></a> sculptors in southern Germany and Austria. Born in Bamberg to a sculptor and organ builder, he learned the craft from his stepfather Sebastian Degler before making his way to Passau as a journeyman. When the city denied him a master's license in 1715, the Augustinian canons of St. Nikola gave him his first big commission anyway.</p>

<p>Götz worked across an enormous range: monumental church altarpieces, organ cases, small ivory carvings, and architectural designs. His territory covered Lower Bavaria and the Diocese of Passau into Upper and Lower Austria. He became a favorite of Prince-Bishop Joseph Dominikus von Lamberg, who handed him prestigious projects including work at the pilgrimage church of <strong>Maria Taferl</strong>. His long collaboration with organ builder Johann Ignaz Egedacher produced some of the finest organ cases in the region.</p>

<p>Though he lacked formal architectural training, Götz took on the redesign of the monastery church at Kloster Fürstenzell in 1739 (later completed by Johann Michael Fischer). His output was prolific, with works in wood, stone, and ivory scattered across churches and collections from Bavaria to Austria. The <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> and the Walters Art Museum in Baltimore hold examples of his work.</p>`,
      faqs: [
        {
          question: "Who was Joseph Matthias Götz?",
          answer: "A German <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> and <a href=\"/apps/masterpieces/movement/rococo\"><strong>Rococo</strong></a> sculptor (1696–1760) active in Bavaria and Austria. He created church altarpieces, organ cases, and ivory carvings. His patrons included monasteries, civic communities, and the Prince-Bishop of Passau."
        },
        {
          question: "What materials did Götz work with?",
          answer: "He worked in <strong>wood, stone, and ivory</strong>. His large-scale church furnishings were typically carved wood, often gilded or polychromed. His smaller, highly detailed <strong>ivory carvings</strong> are found in museum collections including the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a>."
        },
        {
          question: "Where can I see Götz's work?",
          answer: "His church commissions remain in situ across <strong>Bavaria and Austria</strong>, including work at Maria Taferl and various monastery churches. Museum collections at the <a href=\"/apps/masterpieces/museum/cleveland-museum-of-art\"><strong>Cleveland Museum of Art</strong></a> and the Walters Art Museum in Baltimore also hold his pieces."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 18. ANTOINE-LOUIS BARYE
  // ============================================================
  {
    slug: 'antoine-louis-barye',
    data: {
      bioFull: `<p><strong>Antoine-Louis Barye</strong> (1795–1875) is known as the father of modern animal sculpture. Born in Paris, he started as a goldsmith's apprentice before studying under sculptor François-Joseph Bosio and painter Baron Gros. His real education happened at the Jardin des Plantes zoo, where he spent years sketching animals from life. The zookeeper would even tip him off when an animal was dying so he could observe it uncaged.</p>

<p>Barye's breakthrough came at the 1831 Salon with <strong>Tiger Devouring a Crocodile</strong>. It was raw, violent, and nothing like the polished classical work the Academy preferred. He followed it with <strong>Lion and Serpent</strong> (1832), which established his reputation for capturing predatory tension with anatomical precision. His bronzes of lions, jaguars, bears, and horses are prized by collectors for their dynamic energy and scientific accuracy.</p>

<p>Despite his talent, Barye was terrible with money. He went bankrupt in 1848, losing all his molds to a foundry that produced inferior casts for nearly a decade. Recognition finally came later in life: a professorship at the Museum of Natural History in 1854 and election to the Académie des Beaux-Arts in 1868. His monumental works include reliefs on the <a href="/apps/masterpieces/museum/louvre-paris-france"><strong>Louvre</strong></a>'s Sully Pavilion and bronzes in the Tuileries Gardens. Collections are held at the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum of Art</strong></a> and the Walters Art Museum in Baltimore.</p>`,
      faqs: [
        {
          question: "What is Antoine-Louis Barye known for?",
          answer: "Barye is the <strong>father of modern animal sculpture</strong> (the \"Animalier\" school). His bronze sculptures of wild animals, especially predators in combat, combined dynamic energy with precise anatomical detail. He spent years sketching live animals at the Paris zoo."
        },
        {
          question: "What are Barye's most famous works?",
          answer: "<strong>Lion and Serpent</strong> (1832) and <strong>Tiger Devouring a Crocodile</strong> (1831) are his best-known pieces. He also created monumental work for the <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a>'s Sully Pavilion and bronze groups in the Tuileries Gardens in Paris."
        },
        {
          question: "Where can I see Barye's sculptures?",
          answer: "The <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> in New York and the Walters Art Museum in Baltimore hold major collections. The <a href=\"/apps/masterpieces/museum/louvre-paris-france\"><strong>Louvre</strong></a> and <a href=\"/apps/masterpieces/museum/musee-dorsay\"><strong>Musée d'Orsay</strong></a> in Paris also display his work."
        },
        {
          question: "What art movement was Barye part of?",
          answer: "Barye is associated with <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romanticism</strong></a>. His dramatic, emotionally charged animal combat scenes broke with <strong>Neoclassical</strong> restraint. He inspired an entire generation of animal sculptors, including Pierre-Jules Mêne and Isidore Bonheur."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 19. WEDGWOOD MANUFACTORY
  // ============================================================
  {
    slug: 'wedgwood-manufactory',
    data: {
      bioFull: `<p>The <strong>Wedgwood Manufactory</strong> has been producing ceramics in Staffordshire, England, since 1759. Founded by <strong>Josiah Wedgwood</strong> (1730–1795), a potter from a long line of potters, it became one of the most influential ceramic operations in history. Wedgwood couldn't work the wheel himself after childhood smallpox damaged his right knee. That limitation pushed him toward design, chemistry, and business instead, and he turned out to be better at all three.</p>

<p>His innovations came fast. <strong>Queen's Ware</strong> (a refined creamware) earned royal patronage from Queen Charlotte in the 1760s. <strong>Black Basalt</strong> gave him a stoneware that could imitate ancient Greek vases. But his greatest achievement was <strong>Jasperware</strong> (1775): an unglazed stoneware, typically in the famous "Wedgwood blue," with white relief decorations creating a cameo effect. It took over 10,000 experiments to get the formula right. His reproduction of the ancient Roman Portland Vase in jasperware (1790) was a technical and artistic triumph.</p>

<p>Wedgwood was also a prominent abolitionist. His "Am I Not a Man and a Brother?" medallion, showing a kneeling enslaved person, became one of the most powerful symbols of the anti-slavery movement. The manufactory opened its Etruria factory in 1769, dedicated to <a href="/apps/masterpieces/movement/neoclassicism"><strong>Neoclassical</strong></a> ornamental wares. Over 260 years later, the brand (now part of Fiskars Group) still produces many of Josiah's original formulas. Collections are held at the <a href="/apps/masterpieces/museum/victoria-and-albert-museum-vampa-london-uk"><strong>V&A</strong></a> in London, the <a href="/apps/masterpieces/museum/british-museum"><strong>British Museum</strong></a>, and the <a href="/apps/masterpieces/museum/met"><strong>Metropolitan Museum</strong></a>.</p>`,
      faqs: [
        {
          question: "What is Wedgwood Jasperware?",
          answer: "An unglazed <strong>stoneware</strong> invented by Josiah Wedgwood in 1775, typically in pale blue with white relief decorations. It took over <strong>10,000 experiments</strong> to perfect. The most popular color, \"Wedgwood blue,\" required 3,000+ samples alone. It's still produced today using the original formula."
        },
        {
          question: "Who founded Wedgwood?",
          answer: "<strong>Josiah Wedgwood</strong> (1730–1795) founded the manufactory in 1759 in Staffordshire, England. A childhood bout of smallpox left him unable to work the potter's wheel, so he focused on design, chemistry, and business. He earned the title \"Potter to Her Majesty\" from Queen Charlotte."
        },
        {
          question: "Where can I see Wedgwood ceramics?",
          answer: "The <a href=\"/apps/masterpieces/museum/victoria-and-albert-museum-vampa-london-uk\"><strong>V&A</strong></a> in London, the <a href=\"/apps/masterpieces/museum/british-museum\"><strong>British Museum</strong></a>, and the <a href=\"/apps/masterpieces/museum/met\"><strong>Metropolitan Museum of Art</strong></a> all hold important collections. The Wedgwood Museum in Barlaston, Staffordshire, has the most complete collection of the manufactory's output."
        },
        {
          question: "Was Josiah Wedgwood involved in social causes?",
          answer: "Yes. Wedgwood was a prominent <strong>abolitionist</strong>. He produced the \"Am I Not a Man and a Brother?\" medallion, which became one of the most recognizable symbols of the anti-slavery movement. People wore it as jewelry and on accessories to show their support."
        }
      ],
      updatedAt: new Date()
    }
  },

  // ============================================================
  // 20. LOUISE BOURGEOIS
  // ============================================================
  {
    slug: 'louise-bourgeois',
    data: {
      bioFull: `<p><strong>Louise Bourgeois</strong> (1911–2010) made art for nearly eight decades and didn't get her first museum retrospective until age 71. Born in Paris, she grew up in her family's tapestry restoration business, filling in damaged sections of antique textiles as a child. Her mother's death in 1932 pushed her from mathematics into art. She studied under Fernand Léger, who recognized her talent as a sculptor, and moved to New York in 1938 after marrying American art historian Robert Goldwater.</p>

<p>Her early wooden <strong>Personnages</strong> sculptures (1945–1955) were slender, abstract forms representing people she'd left behind in France. But Bourgeois is best known for her giant spiders. <strong>Maman</strong> (1999), over 30 feet tall in bronze, stainless steel, and marble, was her tribute to her mother: "She was deliberate, clever, patient, soothing, reasonable, dainty, subtle, indispensable, neat, and as useful as a spider." The sculpture carries a sac of 32 marble eggs beneath its abdomen.</p>

<p>MoMA's 1982 retrospective, the first the museum had ever given a female sculptor, finally brought her wide recognition. She kept working until her death at 98, producing her <strong>Cells</strong> series (enclosed environments of found objects tied to memory) well into her 90s. Her work explored family, sexuality, trauma, and the body with an honesty that influenced generations. Casts of <em>Maman</em> stand outside <a href="/apps/masterpieces/museum/tate-modern-london-uk"><strong>Tate Modern</strong></a>, the Guggenheim Bilbao, and the National Gallery of Canada.</p>`,
      faqs: [
        {
          question: "What is Louise Bourgeois's most famous sculpture?",
          answer: "<strong>Maman</strong> (1999), a 30-foot bronze spider carrying 32 marble eggs. It was a tribute to her mother, whom she compared to a spider for being protective, patient, and industrious. Casts stand outside <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a> and the Guggenheim Bilbao, among other locations."
        },
        {
          question: "Why did Louise Bourgeois make spider sculptures?",
          answer: "The spiders represent her <strong>mother</strong>, who ran a tapestry repair workshop. Bourgeois saw parallels: both spiders and her mother were weavers, protectors, and providers. \"She was deliberate, clever, patient, soothing, reasonable, dainty, subtle, indispensable, neat, and as useful as a spider.\""
        },
        {
          question: "Where can I see Louise Bourgeois's art?",
          answer: "<a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA</strong></a> in New York holds major works. Casts of <em>Maman</em> are installed at <a href=\"/apps/masterpieces/museum/tate-modern-london-uk\"><strong>Tate Modern</strong></a>, the Guggenheim Bilbao, and Ottawa's National Gallery. Her work appears in major contemporary art museums worldwide."
        },
        {
          question: "When did Bourgeois become famous?",
          answer: "Not until her <strong>70s</strong>. She worked for decades in relative obscurity. <a href=\"/apps/masterpieces/museum/moma\"><strong>MoMA's</strong></a> 1982 retrospective, the first the museum had given any female sculptor, brought her mainstream recognition. She kept producing major work until her death at 98 in 2010."
        }
      ],
      updatedAt: new Date()
    }
  }
];

async function main() {
  console.log('=== ENRICHING SCULPTURE ARTIST BIOS & FAQS ===\n');

  for (const artist of artistUpdates) {
    try {
      const result = await prisma.artist.update({
        where: { slug: artist.slug },
        data: artist.data
      });
      console.log(`✓ Updated: ${result.name} (${artist.slug})`);
    } catch (err) {
      console.error(`✗ FAILED: ${artist.slug} — ${err.message}`);
    }
  }

  console.log('\n=== DONE ===');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
