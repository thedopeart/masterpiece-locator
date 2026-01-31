const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichments = {
  'eight-armed-dancing-god-ganesha': {
    description: `<p>This wooden sculpture from the Kathmandu Valley depicts <strong>Ganesha</strong>, the elephant-headed Hindu deity, in a dynamic dancing pose with eight arms. The dancing form, known as Nritya Ganapati, represents the joy and enthusiasm of spiritual realization. Eight arms signify the deity's superhuman capacity for purposeful action. In Hindu iconography, deities are never shown with just two hands. The figure is surrounded by smaller human figures in animated poses.</p>

<p>Ganesha is one of the most widely worshipped Hindu gods, known as the remover of obstacles and the patron of beginnings, arts, and sciences. The dancing pose connects him to the cosmic dance of creation and destruction. This piece dates to the 17th-18th century and stands about 35 inches tall. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'Why is Ganesha dancing?', answer: 'The dancing form (Nritya Ganapati) represents the joy of spiritual realization and the cosmic rhythm of creation and destruction. It balances both vigorous masculine energy (Tandava) and graceful feminine energy (Lasya).' },
      { question: 'What do eight arms signify?', answer: 'Superhuman capacity for simultaneous purposeful action. Each hand typically holds a specific attribute or forms a gesture (mudra) with doctrinal meaning. Hindu deities are never depicted with only two hands.' },
      { question: 'Why is Ganesha so widely worshipped?', answer: 'He\'s the <strong>remover of obstacles</strong> and patron of beginnings, arts, and sciences. Hindus invoke him before starting new endeavors: journeys, business ventures, exams, or religious ceremonies.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 35 inches tall, carved from wood. A gift from Marilynn B. Alsdorf.' }
    ]
  },

  'portrait-of-the-great-fifth-dalai-lama': {
    description: `<p>This 18th-century gilt bronze portrait depicts <strong>Ngawang Lobsang Gyatso</strong> (1617-1682), the Fifth Dalai Lama, known simply as "the Great Fifth." He was the first Dalai Lama to assume both spiritual and secular leadership, unifying Central Tibet in 1642 for the first time since the 9th century. He commissioned construction of the Potala Palace in Lhasa and produced more literary output than all other Dalai Lamas combined.</p>

<p>Portrait sculptures of important lamas are central to Tibetan Buddhist practice, serving as focal points for devotion and meditation. This piece captures the seated meditation posture and monastic robes of a high-ranking teacher. At about 5.5 inches, it was likely made for a private shrine. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, acquired through the Kate S. Buckingham Fund.</p>`,
    faqs: [
      { question: 'Why is the Fifth Dalai Lama called "the Great"?', answer: 'He unified Central Tibet in 1642, the first unification since the 9th century. He assumed both spiritual and secular power, commissioned the <strong>Potala Palace</strong>, and produced more literary output than all other Dalai Lamas combined.' },
      { question: 'What was the Potala Palace?', answer: 'The winter residence of the Dalai Lamas in Lhasa, Tibet. The Great Fifth commissioned its construction. It sits on a hilltop overlooking the city and served as both the spiritual and administrative center of Tibet for centuries.' },
      { question: 'How were lama portraits used?', answer: 'As focal points for devotion and meditation in Tibetan Buddhist practice. Devotees made offerings before these portraits to receive blessings and accumulate spiritual merit. They also preserved the lineage of important teachers.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 5.5 inches tall in gilt bronze.' }
    ]
  },

  'chunda-goddess-of-wisdom': {
    description: `<p>This 9th-century bronze from Central Java depicts <strong>Chunda</strong>, a Buddhist goddess of eternal wisdom. She appears with sixteen arms holding symbolic implements: an axe, discus, conch, water vessel, palm-leaf book, rosary, lotus, and sword, among others. Two hands make the dharmachakra mudra (turning the wheel of Buddhist teaching). The multiple arms indicate the popularity of esoteric Buddhism in Indonesia from the late 800s.</p>

<p>Each implement carries specific meaning: the lotus represents purity, the book references the Cundadharini text, the sword represents wisdom cutting through ignorance. Central Java experienced a Buddhist flowering from the late 700s to early 900s, the same era that produced Borobudur. Chunda worship also became popular in north India during the Pala Empire. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who is Chunda?', answer: 'A Buddhist goddess of eternal wisdom, associated with esoteric (Tantric) Buddhism. Her worship became popular in both Indonesia and north India during the Pala Empire (8th-12th centuries). Her multiple arms hold implements representing different aspects of <strong>wisdom</strong> and spiritual power.' },
      { question: 'What do the sixteen arms hold?', answer: 'Symbolic implements including an axe, discus, conch, water vessel, book, rosary, lotus (purity), and sword (wisdom cutting ignorance). Two hands form the teaching gesture. Each item carries specific doctrinal meaning.' },
      { question: 'What was 9th-century Java like for Buddhism?', answer: 'Central Java experienced a Buddhist flowering from the late 700s to early 900s, producing monuments like Borobudur (completed c. 825 CE). Esoteric (Tantric) Buddhism became particularly popular, reflected in multi-armed deities like Chunda.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. A 9th-century bronze from Central Java.' }
    ]
  },

  'buddhist-god-mahakala': {
    description: `<p>This small stone sculpture with pigment from 15th-century Tibet depicts <strong>Mahakala</strong>, one of Buddhism's most powerful protector deities. His name means "beyond time" or "beyond death." In Buddhist theology, Mahakala originated when Avalokiteshvara (the Bodhisattva of Compassion) witnessed endless suffering and his compassion transformed into wrathful protective energy. The black color symbolizes how all names and forms dissolve into ultimate reality.</p>

<p>Mahakala wears a crown of five skulls, representing the transmutation of five negative afflictions (anger, desire, ignorance, jealousy, pride) into five wisdoms. As a dharmapala (dharma protector), his fierce appearance serves to remove obstacles on the path to enlightenment. At about 3 inches, this was a personal meditation object. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'What does Mahakala mean?', answer: '"Beyond time" or "beyond death" (maha = great, kala = time/death). He\'s one of Buddhism\'s most powerful protector deities, guarding practitioners and removing obstacles on the path to <strong>enlightenment</strong>.' },
      { question: 'Why is he so fearsome?', answer: 'His wrathful form originated when Avalokiteshvara\'s compassion transformed into fierce protective energy after witnessing endless suffering. The terrifying appearance frightens away obstacles and negative forces, not practitioners.' },
      { question: 'What do the five skulls mean?', answer: 'They represent the transmutation of five negative afflictions (anger, desire, ignorance, jealousy, pride) into five wisdoms. The skulls show that Mahakala has conquered these poisons and transformed them into spiritual power.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 3 inches tall in stone with pigment. A gift from Marilynn B. Alsdorf.' }
    ]
  },

  'the-sage-agastya-seated-in-meditation-on-his-water-pot-kumbha': {
    description: `<p>This 15th-century gilt bronze from the Kathmandu Valley depicts <strong>Agastya</strong>, one of the seven great sages (Saptarishis) in Hindu tradition. He's shown seated on his characteristic attribute: a water pot (kumbha). According to legend, Agastya was born from a kumbha containing the seed of the gods Mitra and Varuna, earning the name Kumbhayoni ("he whose womb was a mud pot"). He authored hymns in the Rigveda.</p>

<p>Agastya was regarded as a manas-putra (mind-born son) of the divine, created by the gods to produce powerful beings capable of countering demonic forces. The gilt bronze technique gives the figure a golden luminosity appropriate for depicting a divine sage. At about 5 inches, this was likely for a private shrine or personal devotion. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who was Agastya?', answer: 'One of the seven great sages (Saptarishis) in Hindu tradition. He authored hymns in the <strong>Rigveda</strong> and was believed to be born from a water pot containing divine seed. He was created by the gods to counter demonic forces.' },
      { question: 'Why is he sitting on a water pot?', answer: 'The kumbha (water pot) is his birth symbol. Legend says he was born from a pot containing the seed of gods Mitra and Varuna, giving him the name Kumbhayoni ("he whose womb was a mud pot"). It\'s his identifying attribute.' },
      { question: 'What are the Saptarishis?', answer: 'The seven great seers of Hindu tradition, regarded as the patriarchs of the Vedic religion. They authored portions of the Vedas and are considered the spiritual forefathers of Hinduism. Agastya is one of the most revered.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 5 inches tall in gilt bronze from the Kathmandu Valley.' }
    ]
  },

  'head-of-an-adorant': {
    description: `<p>This stucco head from the 3rd-5th century CE depicts an <strong>adorant</strong> (worshipper or devotee) from the Gandhara region. Wealthy donors to Buddhist temples had their likenesses incorporated into temple decorations as expressions of gratitude and devotion. Stucco widely replaced the earlier gray schist as the preferred material for Gandharan sculpture, adorning the walls of stupa courts and monasteries throughout the region.</p>

<p>The 3rd to mid-5th centuries saw a surge in patronage of Buddhist sacred areas at sites like Taxila and Takht-i-Bahi. Gandhara merged Greek and Buddhist visual cultures following Alexander the Great's conquest in 327 BCE, and this blending remained visible centuries later in the naturalistic modeling of faces like this one. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'What is an adorant?', answer: 'A worshipper or devotee. Wealthy donors to Buddhist temples had their likenesses incorporated into temple decorations. This recorded their patronage and demonstrated <strong>devotion</strong> to the Buddhist community.' },
      { question: 'Why stucco instead of stone?', answer: 'Stucco replaced the earlier gray schist as the preferred material for Gandharan sculpture from roughly the 3rd century CE onward. It was cheaper, faster to work with, and allowed for detailed surface modeling when applied to walls of stupas and monasteries.' },
      { question: 'What is Gandharan art?', answer: 'A fusion of Greek and Buddhist visual cultures from the region of modern Pakistan/Afghanistan. It emerged after Alexander the Great\'s conquest (327 BCE) and produced art blending Greco-Roman naturalism with Buddhist subject matter.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 9.5 by 6.5 inches in stucco. A gift from Marilynn B. Alsdorf.' }
    ]
  },

  'jaina-tirthankara-parshvanatha-with-serpent-hood-seated-in-meditation-dhyanamudr': {
    description: `<p>This 12th-century chlorite sculpture from Karnataka, South India, shows <strong>Parshvanatha</strong>, the 23rd Jain tirthankara, seated in meditation beneath a serpent hood. It's a larger version (about 34 by 28 inches) of the same iconographic type found in the museum's 6th-century sandstone example. The seven-headed serpent hood is Parshvanatha's distinctive attribute, distinguishing him from other tirthankaras who are otherwise visually identical.</p>

<p>According to Jain legend, during meditation a serpent god named Dharanendra held a canopy of hoods over Parshvanatha while goddess Padmavati coiled around his body, protecting him from rain sent by the demon Kamath. The serpent had been saved by Parshvanatha in a previous life. Chlorite, a green-black metamorphic stone, was commonly used for Jain sculpture in Karnataka. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why the serpent hood?', answer: 'It represents divine protection. A serpent Parshvanatha saved in a previous life was reborn as <strong>Dharanendra</strong>, lord of the nagas, and returned the favor by sheltering the tirthankara from a demon\'s storm during meditation.' },
      { question: 'How do you identify different tirthankaras?', answer: 'Tirthankaras are visually identical in seated meditation. Each is distinguished by specific symbols: Parshvanatha always has the serpent hood, Rishabha (the first) has a bull, Mahavira (the 24th) has a lion, and so on.' },
      { question: 'What is chlorite?', answer: 'A green-black metamorphic stone commonly used for sculpture in Karnataka, South India. Its workability and durability made it ideal for detailed religious carvings. Jain sculptors in this region developed refined techniques for working it.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 34 by 28 inches in chlorite, from Karnataka.' }
    ]
  },

  'kneeling-monk': {
    description: `<p>This 19th-century gilt bronze from Myanmar shows a Buddhist monk kneeling in devotion. At about 30 inches tall, it's a substantial piece of Southeast Asian Buddhist art. The kneeling pose represents reverence and humility, core values in Buddhist monastic practice. Myanmar (Burma) has one of the longest unbroken traditions of Theravada Buddhism, and temples commissioned gilt bronze sculptures for devotional display.</p>

<p>The gilding (gold over bronze) reflects the importance of the commission. In Southeast Asian Buddhism, monks occupy the highest social position as bearers of the dharma, and images of monks in prayer served as reminders of the monastic ideal. Myanmar's Buddhist artistic traditions remained active through the 19th century, producing work that maintained classical forms while reflecting local artistic sensibilities. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why is the monk kneeling?', answer: 'The kneeling pose represents reverence, humility, and devotion, core values in Buddhist monastic practice. It shows the monk in active worship or meditation, embodying the ideal of surrender to the <strong>dharma</strong>.' },
      { question: 'What is Myanmar\'s Buddhist tradition?', answer: 'Myanmar has one of the longest unbroken traditions of Theravada Buddhism in the world. Monks occupy the highest social position as bearers of the dharma. Buddhist art production remained active through the 19th century and beyond.' },
      { question: 'Why gilt bronze?', answer: 'Gilding (gold over bronze) reflects the importance and sacredness of the commission. Gold represents enlightenment and spiritual radiance in Buddhist art. The combination provided durability for temple display with the luminosity of gold.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 30 inches tall, a gift from Mr. and Mrs. Bud Berman.' }
    ]
  },

  'carved-panel-with-mythical-birds': {
    description: `<p>This late 16th-century wooden panel from India's Deccan region or Portuguese Goa features mythical birds in carved relief. The panel represents the unique artistic fusion that occurred when Portuguese colonizers established themselves in Goa to dominate the spice trade and promote Christianity. While European architects designed the churches, Indian masons, carvers, and painters created the decorative elements, resulting in carvings that look more Indian or Mughal than European.</p>

<p>Mythical bird imagery appears across Hindu, Buddhist, and Islamic Indian traditions, and local craftsmen brought these motifs into whatever architectural commissions they received. The panel measures about 15 by 24 inches and shows the technical skill of Deccan wood carvers working in the Indo-Portuguese tradition. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is Indo-Portuguese art?', answer: 'Art created when Portuguese colonizers in Goa hired Indian craftsmen for their building projects. European architects designed structures, but local carvers and painters created decorations that blended <strong>Indian</strong> and Portuguese elements, often looking more Indian than European.' },
      { question: 'Why mythical birds?', answer: 'Birds carry symbolic significance across Hindu, Buddhist, and Islamic traditions in India. Indian craftsmen brought familiar motifs from their own traditions into whatever commissions they received, including Portuguese church decoration.' },
      { question: 'When did the Portuguese arrive in Goa?', answer: 'The Portuguese established themselves in Goa in the early 16th century to control the spice trade and spread Christianity. The resulting cultural exchange produced a distinctive hybrid artistic tradition.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 15 by 24 inches, carved from wood.' }
    ]
  },

  'crocodile-headed-female-buddhist-deity-makaravaktra-dakini': {
    description: `<p>This 18th-century gilt bronze from Tibet depicts <strong>Makaravaktra Dakini</strong>, a female Buddhist deity with a human body and the head of a makara (a mythical creature that's half crocodile, half elephant). She serves as a constant companion to Palden Lhamo, one of the most important protector deities in Tibetan Buddhism. While her counterpart Simhavaktra (lion-headed) protects from upper world dangers, Makaravaktra protects from underworld threats.</p>

<p>She adopts a dancing pose with one foot trampling a figure, wears a crown of five skulls, and can confer supernatural powers on devotees. Her role in leading Palden Lhamo's mount makes her an essential figure in protective rituals. At about 3.3 inches tall, this was for personal meditation or shrine use. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'What is a makara?', answer: 'A mythical creature that\'s half crocodile, half elephant in Buddhist and Hindu iconography. It represents the power of the <strong>underworld</strong> and water. The makara head on this deity connects her to underworld protection.' },
      { question: 'Who does she serve?', answer: 'She\'s a companion to Palden Lhamo, one of Tibetan Buddhism\'s most important protector deities. She leads Palden Lhamo\'s mount and specifically guards against underworld dangers, while her lion-headed counterpart guards against upper world threats.' },
      { question: 'What is a dakini?', answer: 'A female spiritual being in Tibetan Buddhism associated with energy, transformation, and the transmission of sacred teachings. Dakinis can be wrathful or peaceful and play important roles in tantric practice and protective rituals.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 3.3 inches tall in gilt bronze.' }
    ]
  },

  'bodhisattva-amoghapasha-lokeshvara': {
    description: `<p>This 15th-century painted wooden sculpture from the Kathmandu Valley stands over five feet tall, depicting <strong>Amoghapasha Lokeshvara</strong>, one of 108 forms of Avalokiteshvara (the Bodhisattva of Compassion). His name means "Unfailing Noose Lord of the World." The noose represents compassion that pulls sentient beings out of suffering toward enlightenment. He's one of the eight tutelary deities of the Kathmandu Valley and among the most important figures in Newar Buddhism.</p>

<p>Devotees worship him through the Ashtami Vrata ritual, performed on the eighth day of the bright half of each lunar month. The painted wood medium and large scale suggest this was a major temple commission. At 60 inches tall, it dominates a gallery space. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'What does the name mean?', answer: '"Unfailing Noose Lord of the World." The noose represents <strong>compassion</strong> that pulls sentient beings out of suffering toward enlightenment. He\'s one of 108 forms of Avalokiteshvara, the Bodhisattva of Compassion.' },
      { question: 'Why is he important in Nepal?', answer: 'He\'s one of the eight tutelary deities of the Kathmandu Valley and a central figure in Newar Buddhism. Devotees worship him through the Ashtami Vrata ritual on the eighth day of the bright half of each lunar month.' },
      { question: 'Why painted wood?', answer: 'Wood allowed for large-scale sculptures (this one is over 5 feet tall) that would be impractical in bronze or stone. Paint added color and detail to the surface. The Kathmandu Valley had strong traditions of both wood carving and polychrome sculpture.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. Over 5 feet tall. A gift from Marilynn B. Alsdorf.' }
    ]
  },

  'goddess-of-abundance-enthroned-on-lion-and-lustrated-by-elephants': {
    description: `<p>This 7th-8th century chlorite sculpture depicts <strong>Gajalakshmi</strong> (Elephant Lakshmi), the Hindu goddess of wealth, fortune, and abundance being bathed (lustrated) by elephants. The elephants grasp upside-down vessels of sacred water, pouring it over the goddess. In Indian thought, elephants are harbingers of rain, linking them to fertility and abundance. The flow of water symbolizes the prosperity Lakshmi bestows.</p>

<p>Gajalakshmi imagery first appeared in Indian art around the 1st century BCE at the Buddhist site of Bharhut and was adopted across Hindu, Buddhist, and Jain contexts. The goddess is enthroned on a lion, combining symbols of royal power with abundance. The piece measures about 10 by 6 inches in chlorite. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'Who is Gajalakshmi?', answer: '<strong>Lakshmi</strong> (goddess of wealth and abundance) being lustrated (bathed) by elephants. "Gaja" means elephant. The elephants pour sacred water from upside-down vessels, symbolizing the prosperity and fertility Lakshmi bestows.' },
      { question: 'Why elephants?', answer: 'In Indian thought, elephants are harbingers of rain, linking them to fertility, abundance, and royal power. Their bathing of Lakshmi symbolizes the flow of prosperity. The combination appears across Hindu, Buddhist, and Jain art traditions.' },
      { question: 'How old is this imagery?', answer: 'Gajalakshmi imagery first appeared in Indian art around the 1st century BCE at the Buddhist site of Bharhut (125-100 BCE). It\'s been used across Hindu, Buddhist, and Jain contexts for over two thousand years.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 10 by 6 inches in chlorite.' }
    ]
  },

  'god-shiva-as-lord-who-is-half-male-half-female-ardhanarishvara': {
    description: `<p>This 14th-century granite sculpture from Tamil Nadu depicts <strong>Ardhanarishvara</strong>, meaning "the Lord who is half woman." Shiva and Parvati are merged into a single form split vertically down the middle. The right side is male Shiva (matted locks, third eye, tiger skin, serpent ornaments), and the left side is female Parvati (combed hair, tilak, breast, silk garment, henna-tinted foot). At about 49 inches tall, it's a major temple sculpture.</p>

<p>The form represents the synthesis of masculine and feminine energies (Purusha and Prakriti), illustrating that Shiva and Shakti are inseparable. It teaches that the inner union of masculine and feminine transcends gender to reach the Brahman (ultimate reality). The Chola/Vijayanagara style shows the refinement of South Indian Hindu sculpture in this period. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What does Ardhanarishvara mean?', answer: '"The Lord who is half woman" (Ardha = half, Nari = woman, Ishwara = lord). <strong>Shiva and Parvati</strong> are merged into one form, split vertically. Right side is male Shiva; left side is female Parvati.' },
      { question: 'What does this form teach?', answer: 'That masculine and feminine energies (Purusha and Prakriti) are inseparable. Their union drives creation and maintains cosmic order. The form transcends gender to point toward Brahman (ultimate reality), realization of which means liberation.' },
      { question: 'How do you tell the two halves apart?', answer: 'Right (Shiva): matted locks, third eye, tiger skin, serpent ornaments. Left (Parvati): combed hair, tilak mark, breast, silk garment, henna-tinted foot. Each detail follows established iconographic conventions.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 49 inches tall in granite, from Tamil Nadu.' }
    ]
  },

  'ceremonial-mace-club-head-bird-male-curassow': {
    description: `<p>This stone mace head from around 300 BCE depicts what may be a male curassow, a large tropical bird valued for its colorful plumage. It comes from Peru's Chavin culture, which flourished from about 1000-300 BCE in the central Andes. Ceremonial maces were mounted on wooden shafts and served as symbols of chiefly authority, group insignia, or ritual weapons. They were carved from hard stone with considerable skill and eventually placed in elite graves.</p>

<p>Birds carried deep significance in pre-Columbian Andean cultures, representing souls flying to the otherworld to communicate with the supernatural. Chavin iconography typically combined human, avian, feline, and serpentine elements in complex symbolic images. This piece is at the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> in Ohio.</p>`,
    faqs: [
      { question: 'What was the Chavin culture?', answer: 'An ancient civilization that flourished 1000-300 BCE in Peru\'s central Andes. It was one of the earliest complex societies in South America. Chavin art typically combines human, avian, feline, and serpentine elements in complex <strong>symbolic images</strong>.' },
      { question: 'Was this used in battle?', answer: 'Probably not. Ceremonial maces served as symbols of chiefly authority, group identity, or ritual weapons rather than practical combat tools. They were eventually placed in elite graves as prestige objects.' },
      { question: 'Why a bird?', answer: 'Birds represented souls flying to the otherworld in Andean cultures, serving as messengers between the earthly and supernatural realms. Curassows were valued for their colorful plumage, used in complex featherwork.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/cleveland-museum-of-art"><strong>Cleveland Museum of Art</strong></a> in Ohio. Admission is always free.' }
    ]
  },

  'goddess-tara-with-hand-in-gesture-of-reassurance-abhayamudra': {
    description: `<p>This large painted wooden sculpture from the 15th-century Kathmandu Valley stands over four feet tall, depicting <strong>Tara</strong> with her right hand raised in the abhayamudra (gesture of fearlessness and reassurance). The palm faces outward with fingers pointing upward. Tara is known as the "mother of liberation" in Mahayana and Vajrayana Buddhism, helping to remove obstacles from both the physical world and the mind.</p>

<p>According to Buddhist tradition, this gesture was first used by the Buddha himself to calm a charging elephant sent by his jealous cousin Devadatta. Nepalese Buddhist sculptures from this period often featured elaborate polychrome (multi-color) decoration, and traces of pigment remain on this figure. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is the abhayamudra?', answer: 'The gesture of fearlessness and reassurance: right hand raised to shoulder height, palm facing outward, fingers pointing up. It symbolizes <strong>protection</strong>, peace, and the dispelling of fear. It was first used by the Buddha to calm a charging elephant.' },
      { question: 'Who is Tara?', answer: 'The "mother of liberation" in Mahayana and Vajrayana Buddhism. She removes obstacles from the physical world and the mind. She\'s one of the most beloved Buddhist deities, especially in Tibetan and Nepalese traditions.' },
      { question: 'Why painted wood?', answer: 'Wood allowed for large sculptures (this is over 4 feet tall) that would be difficult in bronze. The Kathmandu Valley had strong polychrome traditions, and traces of original pigment remain on the surface, showing it was once brightly colored.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. Over 4 feet tall in painted wood.' }
    ]
  },

  'tantric-goddess-kamakala-and-spouse-in-ritual-embrace-yab-yum': {
    description: `<p>This 14th-century bronze from Nepal depicts a <strong>tantric goddess and her spouse in yab-yum</strong> (father-mother) embrace. This imagery represents the primordial union of wisdom and compassion necessary to overcome false duality and achieve enlightenment. The male figure embodies compassion and skillful means (upaya), while the female represents transcendent wisdom (prajna). Together they symbolize non-duality: the dissolution of opposites.</p>

<p>These images were created for practitioners who had received proper tantric initiation and instruction. The yab-yum form belongs to Anuttarayoga tantra, the highest level of tantric practice in Tibetan Buddhism. At about 6 by 4 inches, this was used in personal meditation. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What does yab-yum symbolize?', answer: 'The union of <strong>wisdom and compassion</strong> necessary for enlightenment. The male embodies compassion and skillful means; the female embodies transcendent wisdom. Together they represent non-duality and the dissolution of false opposites.' },
      { question: 'Is this erotic art?', answer: 'No. In Vajrayana Buddhism, yab-yum imagery is deeply symbolic. It represents the understanding that enlightenment requires complete balance between wisdom and compassion. These images were restricted to initiated practitioners who understood the esoteric meaning.' },
      { question: 'What level of practice is this?', answer: 'Anuttarayoga tantra, the highest level of tantric practice in Tibetan Buddhism. These images were only for practitioners who had received proper initiation and instruction in their meaning and meditation use.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 6 by 4 inches in bronze, from Nepal.' }
    ]
  },

  'model-of-a-temple-with-guardians': {
    description: `<p>This 14th-century tuff stone model depicts a miniature temple flanked by guardian figures. Tuff is volcanic stone commonly used in temple construction across Southeast Asia. Temple guardians (known as dvarapalas or yakshas) protected sacred spaces from evil spirits and unworthy visitors. They appear at the entrances to temples throughout the Hindu-Buddhist world.</p>

<p>Miniature temple models served multiple purposes: votive offerings to temples, architectural references for construction, or devotional objects for personal shrines. This piece preserves details of building techniques and decorative schemes that help scholars understand the architecture of lost or damaged full-scale temples. At about 15 by 9 inches in tuff stone, it's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What were temple guardians?', answer: 'Known as dvarapalas or yakshas, they protected sacred spaces from evil spirits and unworthy visitors. <strong>Guardian figures</strong> flanked temple entrances throughout the Hindu-Buddhist world, from India to Java to Cambodia.' },
      { question: 'Why make a miniature temple?', answer: 'Miniature models served as votive offerings, architectural references for construction, or devotional objects for personal shrines. They also preserve details of building techniques and decoration that help scholars understand full-scale temples.' },
      { question: 'What is tuff stone?', answer: 'Volcanic stone formed from consolidated volcanic ash. It was commonly used for temple construction in Southeast Asia because it was relatively light, easy to carve, and available near volcanic sites. It holds detail well despite being softer than granite.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 15 by 9 inches in tuff stone.' }
    ]
  },

  'mahasiddha-manibhadra-under-a-mango-tree-with-an-evicerated-dog': {
    description: `<p>This 13th-century terracotta from Nepal depicts <strong>Manibhadra</strong>, one of the eighty-four Mahasiddhas (great adepts) in Vajrayana Buddhism. The Mahasiddhas were tantric masters who flourished in India between the 8th and 12th centuries, known for unconventional methods and rejecting orthodox religious practices. The disturbing imagery of the eviscerated dog reflects tantric practices that deliberately confronted taboos to break through conventional thinking.</p>

<p>According to tradition, Manibhadra achieved sudden realization after twelve years of practice when a clay water pot shattered. Her teacher was Kukkuripa, famous for a story about compassion toward a starving dog that turned out to be a dakini in disguise. The scene under a mango tree connects to Buddhist symbolism of enlightenment in nature. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is a Mahasiddha?', answer: 'One of eighty-four "great adepts" in Vajrayana Buddhism who flourished in India between the 8th-12th centuries. They were <strong>tantric masters</strong> known for unconventional methods and rejecting orthodox religious practices. They came from all social classes.' },
      { question: 'Why the disturbing imagery?', answer: 'Tantric practice deliberately confronts taboos and conventional thinking. The eviscerated dog reflects practices designed to break through comfortable assumptions and achieve direct insight into the nature of reality. It\'s not gratuitous but purposeful.' },
      { question: 'How did Manibhadra achieve enlightenment?', answer: 'After twelve years of practice, she achieved sudden realization when a clay water pot shattered. The sudden breaking represented the breakthrough of habitual mind patterns. Her teacher Kukkuripa was known for compassion toward a starving dog that was a dakini in disguise.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 12 by 8 inches in terracotta.' }
    ]
  },

  'head-from-a-figurine-of-a-chinese-dignitary': {
    description: `<p>This terracotta head from the Yuan dynasty (1279-1368) depicts a Chinese dignitary or court official. The Yuan dynasty was established by Mongol ruler Kublai Khan after conquering the Song dynasty, creating a period of intense cultural exchange between Chinese and Central Asian traditions. Terracotta figurines depicting various social classes served as tomb furnishings, placed alongside the deceased to provide companionship and service in the afterlife.</p>

<p>Chinese tomb figurines ranged from dignitaries and officials to servants, entertainers, and soldiers. This head shows individualized facial features rather than generic idealization, reflecting Yuan-era artistic preferences. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What was the Yuan dynasty?', answer: 'The dynasty established by Mongol ruler <strong>Kublai Khan</strong> after conquering Song dynasty China (1279-1368). It marked a period of intense cultural exchange between Chinese and Central Asian/Mongolian traditions.' },
      { question: 'Why tomb figurines?', answer: 'Chinese burial practices included placing figurines alongside the deceased to provide companionship and service in the afterlife. Figurines depicted all social classes: officials, servants, entertainers, soldiers, and animals.' },
      { question: 'What makes this Yuan dynasty in style?', answer: 'The individualized facial features reflect Yuan-era preferences over the more idealized forms of earlier Song dynasty work. Mongol rule brought new artistic influences that affected Chinese ceramic and sculptural traditions.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. Terracotta, from the Yuan dynasty (1279-1368).' }
    ]
  },

  'head-of-emaciated-siddhartha': {
    description: `<p>This gray schist head from the 1st-3rd century CE depicts <strong>Siddhartha Gautama</strong> during his six years of extreme fasting before achieving enlightenment. The sunken cheeks, prominent bones, and gaunt features show a man surviving on a single grain of rice per day, reducing his body to skin and bones. Representations of the fasting Buddha are extremely rare in Gandharan art. Only three schist images of fasting Buddhas have been recovered through excavation in the Gandhara region.</p>

<p>The image depicts both an accomplishment (mastery of ascetic discipline) and a turning point: Siddhartha realized extreme deprivation wouldn't lead to enlightenment, leading him to the <strong>Middle Way</strong>, the path of moderation between luxury and self-denial. This insight became foundational to Buddhist philosophy. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'Why is the Buddha emaciated?', answer: 'It shows Siddhartha during six years of extreme fasting before enlightenment, surviving on a single grain of rice daily. He reduced his body to skin and bones as an ascetic practice. Only three such <strong>schist images</strong> have been excavated in Gandhara.' },
      { question: 'What did this experience teach?', answer: 'That extreme self-denial doesn\'t lead to enlightenment. This realization led Siddhartha to the Middle Way: moderation between luxury and deprivation. It became a foundational principle of Buddhist philosophy.' },
      { question: 'Why is this image so rare?', answer: 'Buddhist art overwhelmingly shows the Buddha in his enlightened, serene form. The emaciated depiction, showing suffering and the "failure" of asceticism, was far less popular. Only three schist versions are known from Gandharan excavations.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 6 by 3.5 inches in gray schist.' }
    ]
  },

  'fragment-of-an-architectural-model': {
    description: `<p>This 14th-century terracotta fragment preserves a portion of an architectural model, likely representing part of a temple or sacred building. Miniature architectural models served multiple functions in Asian art: votive offerings to temples, construction references for builders, or devotional objects for private shrines. The fragment preserves details of building techniques and decorative schemes that help scholars reconstruct the appearance of lost or damaged full-scale structures.</p>

<p>Terracotta was the preferred material for architectural decoration across South and Southeast Asia during the medieval period, offering a balance of workability, durability, and affordability. This piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What was this a model of?', answer: 'Likely part of a temple or sacred building. Miniature architectural models served as <strong>votive offerings</strong>, construction references, or devotional objects. They preserve details about building techniques of structures that may no longer exist.' },
      { question: 'Why terracotta?', answer: 'It offered a balance of workability, durability, and affordability. Terracotta was the preferred material for architectural decoration across South and Southeast Asia during the medieval period. It could be molded and fired to create detailed decorative elements.' },
      { question: 'What can scholars learn from fragments?', answer: 'Architectural fragments preserve details of building techniques, decorative schemes, and structural designs that help reconstruct the appearance of lost or damaged temples. They provide evidence for how buildings looked before decay or destruction.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 4 inches, terracotta.' }
    ]
  },

  'stamped-tile-with-crouching-ascetics': {
    description: `<p>This terracotta tile from the 4th-7th century CE comes from <strong>Harwan</strong> in Kashmir, a Buddhist temple site accidentally discovered in 1895. The central band shows crouching ascetics, with a row of geese below and a railing with figures above. These stamped tiles decorated the courtyard walls of the Buddhist temple. Excavated by R.C. Kak in 1920-21, the Harwan tiles show both Indian and foreign ethnic types, which is unique in Indian sculptural tradition.</p>

<p>The presence of emaciated nude ascetics at a Buddhist site is puzzling and may indicate earlier Hindu Shaivite or Ajivika occupation. Kharoshthi script numerals are incised into some tiles to aid placement during construction, suggesting careful planning. The piece measures about 21 by 12 inches. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is Harwan?', answer: 'A Buddhist temple site in Kashmir, accidentally discovered in 1895 and excavated in 1920-21. It flourished from the 4th-7th centuries CE. The stamped tiles that decorated its courtyard walls show both <strong>Indian and foreign</strong> ethnic types, unique in Indian art.' },
      { question: 'Why are there ascetics at a Buddhist site?', answer: 'The presence of emaciated nude ascetics at a Buddhist temple is puzzling. They may represent earlier Hindu Shaivite or Ajivika sect occupation of the site, or reflect Kashmir\'s religious diversity during this period.' },
      { question: 'What do the Kharoshthi numerals mean?', answer: 'Numbers in the Kharoshthi script are incised into some tiles to guide their placement during construction. This shows careful planning and indicates that the tile program was designed as a coherent composition, not randomly arranged.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 21 by 12 inches in stamped terracotta.' }
    ]
  },

  'architectural-panel-with-parrots': {
    description: `<p>This 9th-10th century terracotta panel from Central Java features parrots in relief. It was used as temple ornamentation during the peak period of classical Javanese temple construction, the same era that produced Borobudur and Prambanan. Parrots symbolized divine messengers, prosperity, and the connection between earthly and celestial realms in Hindu-Buddhist Javanese iconography.</p>

<p>These panels decorated exterior walls, gates, or interior chambers of Hindu-Buddhist temples. The sophisticated relief carving shows the technical skill of Javanese terracotta workers. The piece measures about 9 by 19 inches. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why parrots?', answer: 'Parrots symbolized divine messengers, <strong>prosperity</strong>, and the connection between earthly and celestial realms in Hindu-Buddhist Javanese art. Birds frequently appeared as decorative and symbolic elements on temple architecture.' },
      { question: 'When was this made?', answer: 'During the 9th-10th centuries, the peak of classical Javanese temple construction. This was the same era that produced Borobudur (completed c. 825 CE) and the Hindu temple complex at Prambanan.' },
      { question: 'How were these panels used?', answer: 'They decorated exterior walls, gates, or interior chambers of Hindu-Buddhist temples. Terracotta panels added decorative detail to stone temple structures, enriching the visual experience of worship spaces.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 9 by 19 inches in terracotta.' }
    ]
  },

  'tantric-deities-hevajra-and-nairatmya-in-ritual-embrace-yab-yum': {
    description: `<p>This large gilt bronze with pigments from the late 16th-century Kathmandu Valley depicts <strong>Hevajra and Nairatmya</strong> in yab-yum (father-mother) embrace. Hevajra is the principal tantric deity of the Sakya school of Tibetan Buddhism. He appears with eight faces, sixteen arms, and four legs. His sixteen arms hold skull cups containing eight animals (right) and eight worldly gods (left), representing sixteen types of emptiness.</p>

<p>His four legs trample the four maras (obstacles to enlightenment), depicted as Hindu gods Brahma, Vishnu, Shiva, and Indra, representing Buddhism's supersession of Hindu theology. His consort Nairatmya means "Lady of Emptiness," embodying transcendent wisdom. At about 20 by 13 inches, this is a substantial piece of Nepalese tantric art. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who is Hevajra?', answer: 'The principal tantric deity of the Sakya school of Tibetan Buddhism, depicted with eight faces, sixteen arms, and four legs. His sixteen skull cups represent sixteen types of <strong>emptiness</strong>. His name is associated with "Supreme Joy."' },
      { question: 'Who does he trample?', answer: 'His four legs trample the four maras (obstacles to enlightenment), depicted as Hindu gods Brahma, Vishnu, Shiva, and Indra. This symbolizes Buddhism\'s claim to supersede Hindu theology on the path to liberation.' },
      { question: 'Who is Nairatmya?', answer: '"Lady of Emptiness." She embodies transcendent wisdom (prajna) and represents the understanding of shunyata (emptiness of inherent existence). Her union with Hevajra symbolizes the complete integration of wisdom and compassion.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 20 by 13 inches in gilt bronze with pigments.' }
    ]
  },

  'goddess-shridevi-consort-of-vishnu': {
    description: `<p>This granite sculpture from 11th-century Madurai, Tamil Nadu, depicts <strong>Shridevi</strong> (Lakshmi), the Hindu goddess of wealth, fortune, and prosperity, in her role as Vishnu's consort. The Chola period (9th-13th centuries) produced some of the finest Hindu sculpture ever created, and this piece demonstrates the refined proportions and detailed carving typical of that tradition. Shridevi typically holds lotus flowers symbolizing purity and spiritual power.</p>

<p>In temple architecture, she would have been part of a triad alongside Vishnu and Bhudevi (the Earth goddess). Granite sculptures like this filled deep niches in Chola temple walls and gates, complementing the more famous bronze processional images. The Chola sculptural canon set the standard for South Indian Hindu iconography still followed today. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who is Shridevi?', answer: '<strong>Lakshmi</strong>, the Hindu goddess of wealth, fortune, and prosperity. She\'s Vishnu\'s primary consort and one of the most widely worshipped goddesses in Hinduism. She typically holds lotus flowers symbolizing purity and spiritual power.' },
      { question: 'What was the Chola period?', answer: 'A South Indian dynasty (9th-13th centuries) that produced some of the finest Hindu sculpture ever made. Chola bronzes and granite carvings set the standard for South Indian iconography still followed today. Both technical skill and spiritual expression reached extraordinary heights.' },
      { question: 'How was this displayed?', answer: 'In a deep niche in a Chola temple wall or gate, likely as part of a triad with Vishnu and Bhudevi (Earth goddess). Granite sculptures like this complemented the more famous bronze processional images used in temple festivals.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 35 by 20 inches in granite, from Madurai.' }
    ]
  }
};

async function main() {
  const slugs = Object.keys(enrichments);
  console.log(`Enriching ${slugs.length} sculptures...`);
  let updated = 0, notFound = 0, failed = 0;

  for (const slug of slugs) {
    const artwork = await prisma.artwork.findFirst({ where: { slug } });
    if (!artwork) {
      console.log(`NOT FOUND: ${slug}`);
      notFound++;
      continue;
    }

    try {
      const data = { updatedAt: new Date() };
      const e = enrichments[slug];
      if (e.description) data.description = e.description;
      if (e.faqs) data.faqs = e.faqs;

      await prisma.artwork.update({ where: { id: artwork.id }, data });
      updated++;
      if (updated % 5 === 0) console.log(`  Updated ${updated}...`);
    } catch (err) {
      console.error(`FAILED ${slug}: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Not found: ${notFound}`);
  console.log(`Failed: ${failed}`);

  await prisma.$disconnect();
}

main().catch(err => { console.error(err); process.exit(1); });
