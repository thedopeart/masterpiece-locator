# Optimized Enrichment Prompts

Copy each prompt into a new Claude Code terminal. Each batch has 5 artworks with pre-researched data.

---

## PROMPT 1: Vermeer + Leonardo (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## EXAMPLE OUTPUT FORMAT (copy this structure):

slug: "example-slug"
description: `<p><a href="/apps/masterpieces/artist/artist-slug"><strong>Artist Name</strong></a> painted this... [200-300 words with museum/artist links]</p>`
faqs: [
  { question: "Where can I see...?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/museum-slug\"><strong>Museum Name</strong></a>..." },
  ...
]

---

## ARTWORK 1: johannes-vermeer-the-concert
- Title: The Concert
- Artist: Johannes Vermeer (slug: johannes-vermeer)
- Year: c. 1664
- Museum: Isabella Stewart Gardner Museum (slug: isabella-stewart-gardner)
- Wikipedia: https://en.wikipedia.org/wiki/The_Concert_(Vermeer)
- Key facts: Stolen in 1990 Gardner heist (largest art theft in history), worth $250+ million, one of only 34 known Vermeers, shows two women and man making music

## ARTWORK 2: johannes-vermeer-the-geographer
- Title: The Geographer
- Artist: Johannes Vermeer (slug: johannes-vermeer)
- Year: c. 1668-1669
- Museum: Städel Museum (slug: stadel)
- Wikipedia: https://en.wikipedia.org/wiki/The_Geographer
- Key facts: Pendant to The Astronomer, scholar with dividers and globe, Japanese robe indicates wealth, possibly depicts Antonie van Leeuwenhoek

## ARTWORK 3: johannes-vermeer-study-of-a-young-woman
- Title: Study of a Young Woman
- Artist: Johannes Vermeer (slug: johannes-vermeer)
- Year: c. 1665-1667
- Museum: Metropolitan Museum of Art (slug: metropolitan-museum)
- Wikipedia: https://en.wikipedia.org/wiki/Study_of_a_Young_Woman
- Key facts: Also called Girl with a Veil, similar composition to Girl with a Pearl Earring, acquired by Met in 1979

## ARTWORK 4: leonardo-da-vinci-the-baptism-of-christ
- Title: The Baptism of Christ
- Artist: Leonardo da Vinci (slug: leonardo-da-vinci)
- Year: c. 1472-1475
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/The_Baptism_of_Christ_(Verrocchio_and_Leonardo)
- Key facts: Collaboration with Verrocchio, Leonardo painted the left angel, Vasari says Verrocchio quit painting after seeing Leonardo's superior work

## ARTWORK 5: leonardo-da-vinci-madonna-with-a-flower-madonna-benois
- Title: Madonna Benois
- Artist: Leonardo da Vinci (slug: leonardo-da-vinci)
- Year: c. 1478-1480
- Museum: State Hermitage Museum (slug: hermitage)
- Wikipedia: https://en.wikipedia.org/wiki/Benois_Madonna
- Key facts: Named after Benois family who owned it, shows Mary playfully offering flower to infant Jesus, one of Leonardo's earliest Madonnas

After researching each on Wikipedia, update the database using Prisma:

const artworksToUpdate = [
  { slug: "...", description: `...`, faqs: [...] },
  ...
];

for (const artwork of artworksToUpdate) {
  await prisma.artwork.update({ where: { slug: artwork.slug }, data: { description: artwork.description, faqs: artwork.faqs } });
}
```

---

## PROMPT 2: Leonardo Studies + Caravaggio (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: leonardo-da-vinci-study-of-the-madonna-and-child-with-a-cat
- Title: Study of the Madonna and Child with a Cat
- Artist: Leonardo da Vinci (slug: leonardo-da-vinci)
- Year: c. 1478-1480
- Museum: British Museum (slug: british-museum)
- Wikipedia: https://en.wikipedia.org/wiki/Madonna_and_Child_with_Cat
- Key facts: Pen and ink drawing, shows playful interaction with cat, no finished painting exists, multiple preparatory sketches

## ARTWORK 2: leonardo-da-vinci-landscape-drawing-for-santa-maria-della-neve
- Title: Landscape Drawing for Santa Maria della Neve
- Artist: Leonardo da Vinci (slug: leonardo-da-vinci)
- Year: 1473 (dated August 5)
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/Landscape_drawing_for_Santa_Maria_della_Neve
- Key facts: First dated work by Leonardo (age 21), first pure landscape drawing in Western art, Arno valley view, pen and ink

## ARTWORK 3: caravaggio-martha-and-mary-magdalene
- Title: Martha and Mary Magdalene
- Artist: Caravaggio (slug: caravaggio)
- Year: c. 1598
- Museum: Detroit Institute of Arts (slug: detroit-institute-of-arts)
- Wikipedia: https://en.wikipedia.org/wiki/Martha_and_Mary_Magdalene_(Caravaggio)
- Key facts: Shows moment of Mary's conversion, Martha urges sister to abandon vanity, mirror and flower symbolize earthly temptations, dramatic lighting

## ARTWORK 4: caravaggio-saint-francis-of-assisi-in-ecstasy
- Title: Saint Francis of Assisi in Ecstasy
- Artist: Caravaggio (slug: caravaggio)
- Year: c. 1594-1595
- Museum: Wadsworth Atheneum (slug: wadsworth-atheneum)
- Wikipedia: https://en.wikipedia.org/wiki/Saint_Francis_of_Assisi_in_Ecstasy_(Caravaggio)
- Key facts: Shows Francis receiving stigmata, angel supports swooning saint, one of Caravaggio's earliest religious works, dramatic chiaroscuro

## ARTWORK 5: caravaggio-sacrifice-of-isaac
- Title: Sacrifice of Isaac
- Artist: Caravaggio (slug: caravaggio)
- Year: c. 1601-1602
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/Sacrifice_of_Isaac_(Caravaggio)
- Key facts: Abraham about to sacrifice Isaac, angel intervenes, Isaac's terrified expression, ram visible in background, dramatic tension

Update database using Prisma after completing all 5.
```

---

## PROMPT 3: Blake + Kahlo (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: william-blake-isaac-newton
- Title: Newton
- Artist: William Blake (slug: william-blake)
- Year: 1795-1805
- Museum: Tate Britain (slug: tate-britain)
- Wikipedia: https://en.wikipedia.org/wiki/Newton_(Blake)
- Key facts: Color print with watercolor and ink, shows Newton hunched over with dividers, critiques scientific materialism/rationalism, Blake saw Newton as limited by reason, iconic Romantic image, inspired Eduardo Paolozzi sculpture

## ARTWORK 2: frida-kahlo-selfportrait-along-the-border-line-between-mexico-
- Title: Self-Portrait Along the Borderline Between Mexico and the United States
- Artist: Frida Kahlo (slug: frida-kahlo)
- Year: 1932
- Museum: Private Collection (Maria Rodriguez de Reyero)
- Wikipedia: https://en.wikipedia.org/wiki/Self-Portrait_on_the_Borderline_Between_Mexico_and_the_United_States
- Key facts: Painted during Detroit stay with Diego Rivera, contrasts Mexican nature/culture with American industry, expresses cultural identity conflict, Mexican flag in her hand

## ARTWORK 3: frida-kahlo-the-bus
- Title: The Bus
- Artist: Frida Kahlo (slug: frida-kahlo)
- Year: 1929
- Museum: Dolores Olmedo Collection, Mexico City
- Wikipedia: https://en.wikipedia.org/wiki/The_Bus_(Frida_Kahlo)
- Key facts: Early work before developing signature style, shows cross-section of Mexican society on bus bench, foreshadows her 1925 bus accident that changed her life, includes bourgeois, worker, indigenous woman

## ARTWORK 4: frida-kahlo-portrait-of-virginia-little-girl
- Title: Portrait of Virginia (Little Girl)
- Artist: Frida Kahlo (slug: frida-kahlo)
- Year: 1929
- Museum: Dolores Olmedo Collection, Mexico City
- Key facts: Early commissioned portrait, shows young Mexican girl, demonstrates Kahlo's portrait skills before focus on self-portraits, child holds doll

## ARTWORK 5: gustav-klimt-portrait-of-a-lady
- Title: Portrait of a Lady
- Artist: Gustav Klimt (slug: gustav-klimt)
- Year: 1916-1917
- Museum: Ricci Oddi Modern Art Gallery, Piacenza
- Wikipedia: https://en.wikipedia.org/wiki/Portrait_of_a_Lady_(Klimt)
- Key facts: Stolen in 1997, found in 2019 hidden behind ivy on gallery wall, painted over earlier portrait of different woman, worth €60 million, late Klimt work

Update database using Prisma after completing all 5.
```

---

## PROMPT 4: Klimt + Munch (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: gustav-klimt-sappho
- Title: Sappho
- Artist: Gustav Klimt (slug: gustav-klimt)
- Year: 1888-1890
- Museum: Vienna Museum
- Key facts: Early historicist work, part of ceiling paintings for Burgtheater staircase, shows ancient Greek poetess Sappho of Lesbos, before his golden period

## ARTWORK 2: gustav-klimt-klara-klimt
- Title: Portrait of Klara Klimt
- Artist: Gustav Klimt (slug: gustav-klimt)
- Year: 1880s
- Museum: Leopold Museum (slug: leopold-museum)
- Key facts: Portrait of artist's mother, early realistic academic style, before his golden/decorative period, intimate family portrait

## ARTWORK 3: edvard-munch-self-portrait
- Title: Self-Portrait
- Artist: Edvard Munch (slug: edvard-munch)
- Year: 1895
- Museum: National Gallery of Norway (slug: national-gallery-oslo)
- Wikipedia: https://en.wikipedia.org/wiki/Self-Portrait_(Munch)
- Key facts: Skeletal arm at bottom references mortality, lithograph, one of many Munch self-portraits, psychological intensity, stark black background

## ARTWORK 4: edvard-munch-sister-inger
- Title: Sister Inger
- Artist: Edvard Munch (slug: edvard-munch)
- Year: 1892
- Museum: National Gallery of Norway (slug: national-gallery-oslo)
- Wikipedia: https://en.wikipedia.org/wiki/Inger_in_Black_and_Violet
- Key facts: Portrait of his sister Inger in black dress, somber palette, shows his naturalist period, Inger was close to Edvard throughout his life

## ARTWORK 5: edvard-munch-spring
- Title: Spring
- Artist: Edvard Munch (slug: edvard-munch)
- Year: 1889
- Museum: National Gallery of Norway (slug: national-gallery-oslo)
- Wikipedia: https://en.wikipedia.org/wiki/Spring_(Munch_painting)
- Key facts: Shows sick girl by window with older woman, based on death of his sister Sophie from tuberculosis, spring light symbolizes hope amid illness, naturalist style

Update database using Prisma after completing all 5.
```

---

## PROMPT 5: Munch + Russian Masters (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: edvard-munch-summer-night-inger-on-the-shore
- Title: Summer Night (Inger on the Shore)
- Artist: Edvard Munch (slug: edvard-munch)
- Year: 1889
- Museum: Rasmus Meyer Collection, Bergen
- Wikipedia: https://en.wikipedia.org/wiki/Inger_on_the_Beach
- Key facts: Sister Inger sitting on rocks at Åsgårdstrand, Nordic summer evening light (white nights), melancholic mood, naturalist style before Expressionism

## ARTWORK 2: edvard-munch-portrait-of-the-painter-jensen-hjell
- Title: Portrait of the Painter Jensen-Hjell
- Artist: Edvard Munch (slug: edvard-munch)
- Year: 1885
- Museum: National Gallery of Norway (slug: national-gallery-oslo)
- Key facts: Portrait of fellow artist Karl Jensen-Hjell, early naturalist work showing portrait skill, dark interior setting, Munch was only 22

## ARTWORK 3: ivan-tsarevich-riding-grey-wolf
- Title: Ivan Tsarevich Riding the Grey Wolf
- Artist: Viktor Vasnetsov (slug: viktor-vasnetsov)
- Year: 1889
- Museum: Tretyakov Gallery (slug: tretyakov)
- Wikipedia: https://en.wikipedia.org/wiki/Ivan_Tsarevich_Riding_the_Grey_Wolf
- Key facts: Depicts Russian fairy tale, Ivan escapes with Princess Elena the Beautiful on magic wolf, iconic Russian nationalist painting, forest setting symbolizes Russian wilderness

## ARTWORK 4: demon-seated
- Title: The Demon Seated
- Artist: Mikhail Vrubel (slug: mikhail-vrubel)
- Year: 1890
- Museum: Tretyakov Gallery (slug: tretyakov)
- Wikipedia: https://en.wikipedia.org/wiki/Demon_Seated
- Key facts: Inspired by Lermontov's poem "The Demon", shows melancholy fallen angel at twilight, Vrubel's most famous work, revolutionary mosaic-like brushwork, symbolist masterpiece

## ARTWORK 5: artemisia-gentileschi-jael-and-sisera
- Title: Jael and Sisera
- Artist: Artemisia Gentileschi (slug: artemisia-gentileschi)
- Year: c. 1620
- Museum: Budapest Museum of Fine Arts (slug: budapest-fine-arts)
- Wikipedia: https://en.wikipedia.org/wiki/Jael_and_Sisera_(Artemisia_Gentileschi)
- Key facts: Biblical scene of Jael killing Canaanite general Sisera with tent peg, Artemisia's trademark violent subject with powerful female figure, dramatic Caravaggist lighting

Update database using Prisma after completing all 5.
```

---

## PROMPT 6: Artemisia + Iconic Works (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: artemisia-gentileschi-selfportrait-as-a-female-martyr
- Title: Self-Portrait as a Female Martyr
- Artist: Artemisia Gentileschi (slug: artemisia-gentileschi)
- Year: c. 1615
- Museum: Private Collection
- Key facts: May depict Saint Catherine of Alexandria, self-portrait as martyr figure with palm frond, reflects her personal struggles after rape trial, powerful female agency

## ARTWORK 2: the-bookworm-spitzweg
- Title: The Bookworm
- Artist: Carl Spitzweg (slug: carl-spitzweg)
- Year: c. 1850
- Museum: Museum Georg Schäfer (slug: museum-georg-schafer)
- Wikipedia: https://en.wikipedia.org/wiki/The_Bookworm_(painting)
- Key facts: Shows elderly scholar perched on library ladder absorbed in book, affectionate satire of intellectuals/academics, Spitzweg's most famous painting, Biedermeier genre scene

## ARTWORK 3: the-charging-chasseur
- Title: The Charging Chasseur
- Artist: Théodore Géricault (slug: theodore-gericault)
- Year: 1812
- Museum: Louvre (slug: louvre)
- Wikipedia: https://en.wikipedia.org/wiki/The_Charging_Chasseur
- Key facts: Shows officer of Napoleon's Imperial Guard on rearing horse, Géricault's Salon debut at age 21, Romantic military drama, won gold medal, established his reputation

## ARTWORK 4: gustave-courbet-the-desperate-man-selfportrait
- Title: The Desperate Man (Self-Portrait)
- Artist: Gustave Courbet (slug: gustave-courbet)
- Year: c. 1843-1845
- Museum: Private Collection
- Wikipedia: https://en.wikipedia.org/wiki/The_Desperate_Man
- Key facts: Intense self-portrait with Courbet clutching his hair, wide-eyed expression, early work expressing artistic frustration/romantic anguish, became iconic image of the tormented artist

## ARTWORK 5: franz-von-stuck-lucifer
- Title: Lucifer
- Artist: Franz von Stuck (slug: franz-von-stuck)
- Year: 1890
- Museum: National Gallery for Foreign Art, Sofia
- Wikipedia: https://en.wikipedia.org/wiki/Lucifer_(Franz_von_Stuck)
- Key facts: Symbolist depiction of Satan with haunting frontal gaze, eyes glow from darkness, Art Nouveau/Jugendstil style, one of multiple versions Stuck painted

Update database using Prisma after completing all 5.
```

---

## PROMPT 7: Early Renaissance Masters (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: cimabue-madonna-and-child-enthroned-maesta
- Title: Santa Trinita Maestà
- Artist: Cimabue (slug: cimabue)
- Year: c. 1280-1290
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/Santa_Trinita_Maestà
- Key facts: Monumental altarpiece over 12 feet tall, transitional work from Byzantine to Gothic, originally for Santa Trinita church in Florence, shows prophets beneath throne

## ARTWORK 2: duccio-madonna-rucellai
- Title: Rucellai Madonna
- Artist: Duccio di Buoninsegna (slug: duccio-di-buoninsegna)
- Year: 1285
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/Rucellai_Madonna
- Key facts: Commissioned for Santa Maria Novella confraternity, long attributed to Cimabue until 1889, Duccio's first documented work, over 14 feet tall, six kneeling angels

## ARTWORK 3: giotto-st-francis-giving-his-mantle-to-a-poor-man
- Title: St. Francis Giving His Mantle to a Poor Man
- Artist: Giotto di Bondone (slug: giotto-di-bondone)
- Year: c. 1297-1299
- Museum: Basilica of Saint Francis of Assisi (slug: assisi-basilica)
- Wikipedia: https://en.wikipedia.org/wiki/Legend_of_Saint_Francis
- Key facts: Part of 28-scene Saint Francis cycle in Upper Basilica, fresco showing Francis's early act of charity, revolutionary naturalism and spatial depth for the era

## ARTWORK 4: masaccio-madonna-casini
- Title: Madonna Casini
- Artist: Masaccio (slug: masaccio)
- Year: c. 1426
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/Madonna_and_Child_(Masaccio)
- Key facts: Small devotional panel, Christ child eats grapes symbolizing Eucharist/Passion, named after Cardinal Casini who commissioned it, gold background traditional style

## ARTWORK 5: fra-angelico-predella-of-the-san-domenico-altarpiece
- Title: San Domenico Altarpiece Predella
- Artist: Fra Angelico (slug: fra-angelico)
- Year: c. 1423-1424
- Museum: National Gallery, London (slug: national-gallery)
- Wikipedia: https://en.wikipedia.org/wiki/San_Domenico_Altarpiece
- Key facts: Predella panels now separated from main altarpiece, originally for San Domenico in Fiesole, early Fra Angelico work, five scenes from lives of saints

Update database using Prisma after completing all 5.
```

---

## PROMPT 8: Renaissance + Royal Portraits (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: piero-della-francesca-sigismondo-malatesta
- Title: Portrait of Sigismondo Pandolfo Malatesta
- Artist: Piero della Francesca (slug: piero-della-francesca)
- Year: c. 1451
- Museum: Louvre (slug: louvre)
- Wikipedia: https://en.wikipedia.org/wiki/Portrait_of_Sigismondo_Pandolfo_Malatesta
- Key facts: Profile portrait of Lord of Rimini, condottiero and patron, stark profile against dark background, mathematical precision typical of Piero

## ARTWORK 2: giotto-the-dream-of-innocent-iii
- Title: The Dream of Innocent III
- Artist: Giotto di Bondone (slug: giotto-di-bondone)
- Year: c. 1297-1299
- Museum: Basilica of Saint Francis of Assisi (slug: assisi-basilica)
- Wikipedia: https://en.wikipedia.org/wiki/Legend_of_Saint_Francis
- Key facts: Pope dreams of Francis supporting falling Lateran church, legitimizes Franciscan order, part of Upper Basilica cycle, symbolic of Church reform

## ARTWORK 3: fra-angelico-madonna-of-the-star
- Title: Madonna of the Star
- Artist: Fra Angelico (slug: fra-angelico)
- Year: c. 1424
- Museum: Museo di San Marco, Florence
- Key facts: Small devotional panel, gold background, named for star on Mary's shoulder/mantle, delicate miniature-like technique, early work

## ARTWORK 4: hyacinthe-rigaud-louis-xiv-roi-de-france
- Title: Portrait of Louis XIV
- Artist: Hyacinthe Rigaud (slug: hyacinthe-rigaud)
- Year: 1701
- Museum: Louvre (slug: louvre)
- Wikipedia: https://en.wikipedia.org/wiki/Portrait_of_Louis_XIV_(Rigaud)
- Key facts: Definitive state portrait of the Sun King at age 63, ermine robes and sword of Charlemagne, most reproduced French royal portrait ever, epitome of absolutist propaganda

## ARTWORK 5: maurice-quentin-de-la-tour-madame-de-pompadour
- Title: Portrait of Madame de Pompadour
- Artist: Maurice Quentin de La Tour (slug: maurice-quentin-de-la-tour)
- Year: 1755
- Museum: Louvre (slug: louvre)
- Wikipedia: https://en.wikipedia.org/wiki/Portrait_of_the_Marquise_de_Pompadour_(La_Tour)
- Key facts: Pastel portrait of Louis XV's famous mistress, largest pastel ever made (over 5 feet), shows her with books and engravings representing her cultural patronage

Update database using Prisma after completing all 5.
```

---

## PROMPT 9: More Royal + Botticelli/Giorgione (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: elisabeth-vigee-le-brun-marie-antoinette-in-a-muslin-dress
- Title: Marie Antoinette in a Muslin Dress
- Artist: Élisabeth Vigée Le Brun (slug: elisabeth-vigee-le-brun)
- Year: 1783
- Museum: National Gallery of Art, Washington (slug: national-gallery-of-art)
- Wikipedia: https://en.wikipedia.org/wiki/Marie_Antoinette_in_a_Chemise_Dress
- Key facts: Caused scandal at 1783 Salon, queen's casual chemise dress shocked public, seemed improper for royalty, also called "en chemise" or "en gaulle" portrait

## ARTWORK 2: sandro-botticelli-the-discovery-of-the-body-of-holofernes
- Title: The Discovery of the Body of Holofernes
- Artist: Sandro Botticelli (slug: sandro-botticelli)
- Year: c. 1470-1472
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/The_Return_of_Judith_to_Bethulia
- Key facts: Companion panel to Return of Judith, soldiers discover beheaded general, dramatic scene of aftermath, early Botticelli masterwork, originally diptych

## ARTWORK 3: sandro-botticelli-madonna-and-child
- Title: Madonna and Child
- Artist: Sandro Botticelli (slug: sandro-botticelli)
- Year: c. 1470
- Museum: Uffizi Gallery (slug: uffizi)
- Key facts: Early devotional panel, shows influence of teacher Filippo Lippi, tender interaction between mother and child, gold background, transitional work

## ARTWORK 4: giorgione-the-three-ages-of-man
- Title: The Three Ages of Man
- Artist: Giorgione (slug: giorgione)
- Year: c. 1500-1501
- Museum: Palazzo Pitti (slug: palazzo-pitti)
- Wikipedia: https://en.wikipedia.org/wiki/The_Three_Ages_of_Man_(Giorgione)
- Key facts: Music lesson scene interpreted as allegory, old man teaches young while child watches, attribution sometimes disputed, Venetian sfumato technique

## ARTWORK 5: giorgione-the-adoration-of-the-kings
- Title: The Adoration of the Kings
- Artist: Giorgione (slug: giorgione)
- Year: c. 1506-1507
- Museum: National Gallery, London (slug: national-gallery)
- Wikipedia: https://en.wikipedia.org/wiki/Adoration_of_the_Kings_(Giorgione)
- Key facts: Small intimate panel unlike monumental altarpieces, unusually tender Epiphany scene, rare religious work by Giorgione, landscape background important

Update database using Prisma after completing all 5.
```

---

## PROMPT 10: Final Batch (5 artworks)

```
cd "/Users/thedopeart/Desktop/luxury-wall-art/Apps/Masterpiece Locator/masterpiece-locator"

Enrich these 5 artworks in the database. For each, write a description (200-300 words, HTML) and 3-4 FAQs (40+ words each answer). Use the research provided. Follow ENRICHMENT-TEMPLATE.md exactly.

## ARTWORK 1: giorgione-the-holy-family-madonna-benson
- Title: The Holy Family (Madonna Benson)
- Artist: Giorgione (slug: giorgione)
- Year: c. 1500
- Museum: National Gallery of Art, Washington (slug: national-gallery-of-art)
- Key facts: Named after former British owner, intimate family grouping, Venetian sfumato technique, Joseph unusually prominent for the era

## ARTWORK 2: joachim-patinir-landscape-with-charon-crossing-the-styx
- Title: Landscape with Charon Crossing the Styx
- Artist: Joachim Patinir (slug: joachim-patinir)
- Year: c. 1520-1524
- Museum: Museo del Prado (slug: prado)
- Wikipedia: https://en.wikipedia.org/wiki/Landscape_with_Charon_Crossing_the_Styx
- Key facts: Shows Charon ferrying souls, Paradise (left) vs Hell (right), Patinir was first painter to specialize primarily in landscapes, "world landscape" panoramic view

## ARTWORK 3: pontormo-leda-and-the-swan
- Title: Leda and the Swan
- Artist: Pontormo (slug: pontormo)
- Year: c. 1512-1513
- Museum: Uffizi Gallery (slug: uffizi)
- Key facts: Copy after lost painting by Michelangelo, mythological subject of Zeus seducing Leda, Mannerist elongated forms, original Michelangelo destroyed

## ARTWORK 4: bronzino-lucrezia-panciatichi
- Title: Portrait of Lucrezia Panciatichi
- Artist: Bronzino (slug: bronzino)
- Year: c. 1540
- Museum: Uffizi Gallery (slug: uffizi)
- Wikipedia: https://en.wikipedia.org/wiki/Portrait_of_Lucrezia_Panciatichi
- Key facts: Pendant to portrait of husband Bartolomeo, inscription "AMOUR DURE SANS FIN" (love lasts forever), height of Mannerist court portraiture, icy perfection

## ARTWORK 5: george-stubbs-lion-attacking-a-horse
- Title: Lion Attacking a Horse
- Artist: George Stubbs (slug: george-stubbs)
- Year: c. 1762
- Museum: National Gallery of Victoria (slug: national-gallery-victoria)
- Wikipedia: https://en.wikipedia.org/wiki/Horse_Attacked_by_a_Lion
- Key facts: One of 17 versions Stubbs painted of this theme, based on antique Roman sculpture, sublime terror in nature, dramatic contrast of predator and prey

Update database using Prisma after completing all 5.
```

---

## Summary

- **10 prompts** with **5 artworks each** = **50 artworks**
- Each prompt includes pre-researched Wikipedia URLs and key facts
- Workers should read ENRICHMENT-TEMPLATE.md before starting
- Descriptions: 200-300 words with proper HTML links
- FAQs: 3-4 questions, 40+ words each answer
- Update database via Prisma after each batch
