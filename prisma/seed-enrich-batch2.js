const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enrichments = {
  'temple-strut-fragment-with-boar-god-varaha': {
    description: `<p>This carved wooden temple strut from 15th-century Nepal depicts <strong>Varaha</strong>, the boar incarnation of the Hindu god Vishnu. According to Hindu mythology, when the demon Hiranyaksha dragged the earth to the bottom of the cosmic ocean, Vishnu took the form of a boar, dove beneath the waters, defeated the demon, and lifted the earth goddess on his tusks. Temple struts like this served dual purposes: structural support for temple roofs and religious imagery that transformed functional architecture into sacred narrative.</p>

<p>Wood carving was the primary medium for Nepalese temple architecture. The country's forests provided abundant timber, and hereditary artisan guilds developed sophisticated techniques for creating detailed religious imagery. Very few 15th-century wooden temple carvings have survived intact, making this piece valuable. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who is Varaha?', answer: 'The third of Vishnu\'s ten avatars. When a demon dragged the earth into the cosmic ocean, Vishnu became a boar, dove beneath the waters, defeated the demon, and lifted the earth goddess on his tusks. He symbolizes the restoration of cosmic order.' },
      { question: 'What was a temple strut used for?', answer: 'Temple struts provided structural support for temple roofs while displaying religious imagery. They turned functional architecture into sacred narrative art, depicting deities and mythological scenes for worshippers to contemplate.' },
      { question: 'Why is wood carving important in Nepal?', answer: 'Wood was the primary medium for Nepalese temple architecture. Hereditary artisan guilds developed sophisticated carving techniques over centuries. Few 15th-century wooden temple carvings survive, making intact examples genuinely rare.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It measures about 29 by 8 inches.' }
    ]
  },

  'veneration-of-the-bodhi-tree': {
    description: `<p>This limestone relief from around 201-300 CE shows devotees worshipping the Bodhi Tree, the sacred fig tree under which Siddhartha Gautama achieved enlightenment and became the Buddha. The Buddha himself doesn't appear in the scene. In early Buddhist art, the Buddha was represented through symbols rather than human form: the Bodhi Tree, footprints, the dharma wheel, or a stupa. This <strong>aniconic</strong> tradition persisted until roughly the 1st century CE.</p>

<p>The relief comes from Nagarjunakonda in South India, a major Buddhist center during the Satavahana and Ikshvaku periods. The site represents one of three principal styles of ancient Indian Buddhist art, alongside Gandharan and Mathura traditions. The presence of kneeling devotees suggests that pilgrimage and worship at sites associated with the Buddha's life were important practices even before iconic images became standard. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why isn\'t the Buddha shown?', answer: 'Early Buddhist art (before roughly the 1st century CE) depicted the Buddha through symbols rather than human form. The Bodhi Tree, footprints, dharma wheel, and stupas indicated his presence. This aniconic tradition eventually gave way to figural representations.' },
      { question: 'What is the Bodhi Tree?', answer: 'A sacred fig tree (Ficus religiosa) in Bodh Gaya, India, under which Siddhartha Gautama achieved <strong>enlightenment</strong> and became the Buddha. Buddhist tradition considers it the spiritual center of the world.' },
      { question: 'Where was this made?', answer: 'At Nagarjunakonda in South India, a major Buddhist center that produced one of the three principal styles of ancient Indian Buddhist sculpture alongside the Gandharan and Mathura traditions.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It measures about 16 by 29 inches in limestone.' }
    ]
  },

  'buffalo-headed-vajrabhairava-a-wrathful-form-of-bodhisattva-manjushri': {
    description: `<p>This small bronze from 15th-century southern Tibet depicts <strong>Vajrabhairava</strong> (also called Yamantaka, "Destroyer of Death"), the terrifying manifestation of Manjushri, the Bodhisattva of Wisdom. The buffalo head specifically represents Yama, the Lord of Death. By appearing in this form, the wisdom deity demonstrates power to conquer death itself. The ferocious appearance shows that wisdom can be fierce when defeating spiritual enemies.</p>

<p>In his full form, Vajrabhairava has nine heads (the central one a buffalo), thirty-four hands with symbolic weapons, and sixteen legs. Each element carries doctrinal meaning: the thirty-four arms plus body, speech, and mind equal the thirty-seven limbs of enlightenment. At about 3.5 inches tall, this piece was likely used for personal meditation practice. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why is a wisdom deity so terrifying?', answer: 'Vajrabhairava represents wisdom transformed into wrathful energy to destroy obstacles to enlightenment, particularly anger, hatred, and death. The appearance demonstrates that compassionate wisdom can manifest in whatever form is needed to overcome spiritual enemies.' },
      { question: 'What does the buffalo head mean?', answer: 'It represents Yama, the Lord of Death in Buddhist cosmology. By wearing Yama\'s form, Vajrabhairava shows his power to conquer death itself. He is literally the "Destroyer of Death."' },
      { question: 'How does this relate to Manjushri?', answer: 'Vajrabhairava is Manjushri (the gentle Bodhisattva of Wisdom) in his most powerful and terrible form. This demonstrates the Buddhist teaching that the same compassionate energy can appear in radically different ways depending on what beings need.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s about 3.5 inches tall, cast in bronze.' }
    ]
  },

  'serpent-king-nagaraja-emerging-from-a-lotus': {
    description: `<p>This gray schist relief from the 1st-2nd century CE shows a <strong>nagaraja</strong> (serpent king) emerging from a lotus flower. Nagarajas are kings of the nagas, divine serpent beings in both Hindu and Buddhist mythology who live in the underworld and are associated with water, fertility, and protection. Major nagarajas include Shesha (Vishnu's serpent bed), Vasuki, and Mucalinda (who sheltered the Buddha during meditation).</p>

<p>The lotus represents purity and spiritual awakening, so combining it with a serpent unites the chthonic power of the underworld with celestial enlightenment. This piece comes from the Gandhara region (modern Pakistan), where Silk Road trade created a unique fusion of Greco-Roman, Persian, and Indian artistic traditions. The fine-grained gray schist was the signature material of Gandharan workshops, allowing the detailed carving this tradition is known for. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is a nagaraja?', answer: 'A king of the nagas, divine serpent beings in Hindu and Buddhist mythology. They live in the underworld (Patala), can take human or part-human form, and are associated with water, fertility, and protection. Major nagarajas include Shesha, Vasuki, and Mucalinda.' },
      { question: 'Why is the serpent emerging from a lotus?', answer: 'The lotus represents purity and spiritual awakening, while the serpent represents underworld power. Their combination unites earthly and spiritual realms, a common theme in both Hindu and Buddhist art of the Gandharan period.' },
      { question: 'What makes Gandharan art distinctive?', answer: 'It\'s a unique fusion of Greco-Roman artistic techniques with Indian Buddhist and Hindu content, created in a region (modern Pakistan) where Silk Road trade brought multiple cultures together from the 1st-5th centuries CE.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It measures about 9 by 10 inches in gray schist.' }
    ]
  },

  'jeweled-and-crowned-buddha-jambupati': {
    description: `<p>This 17th-century bronze from Burma (Myanmar) shows the Buddha adorned in royal regalia: crown, jewels, and elaborate robes. Most Buddha images wear simple monastic robes, so this type stands out. It illustrates the <strong>Jambupati</strong> legend, a Southeast Asian Buddhist story not found in the Indian Pali canon. In it, an arrogant king named Jambupati refused to bow to anyone. The Buddha manifested in a magically created palace wearing finery that outshone the king's, then taught him about the emptiness of riches.</p>

<p>The crowned Buddha tradition originated with the Pyu people of Burma and became popular across Myanmar and Thailand from the 17th century onward. The royal imagery doesn't contradict the Buddha's renunciation. Instead it presents the Buddha as a universal conqueror who conquers through dharma rather than force. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, standing about 15 inches tall.</p>`,
    faqs: [
      { question: 'Why is the Buddha wearing a crown?', answer: 'It illustrates the Jambupati legend: the Buddha manifested in royal finery to humble an arrogant king who refused to bow to anyone. The crown represents spiritual sovereignty, showing the Buddha as a conqueror through dharma rather than force.' },
      { question: 'Is this story in standard Buddhist texts?', answer: 'No. The Jambupati narrative belongs to extra-canonical Southeast Asian Buddhist literature. It doesn\'t appear in the Indian Pali canon, showing how Buddhism adapted to local cultures by developing new stories and iconographic types.' },
      { question: 'Where did crowned Buddha images originate?', answer: 'With the Pyu people of Burma, where Indian Buddhist art influence was strong. The iconographic type became especially popular in Myanmar and Thailand from the 17th century onward.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s about 15 inches tall, cast in bronze.' }
    ]
  },

  'buddhist-tower-in-form-of-a-pagoda-hokyointo': {
    description: `<p>This granite pagoda from the Kamakura period (1185-1333) is a <strong>hokyointo</strong>, a distinctively Japanese Buddhist monument that evolved from Indian stupas. The name comes from the Hokyoin dharani sutra it was designed to contain. As Buddhism spread from India through China to Japan, the memorial mound form transformed into increasingly elaborate stone and wooden towers. Japanese hokyointo began taking their present stone form during the Kamakura period.</p>

<p>The structure is divided into five sections representing the five elements of Japanese Buddhist cosmology: earth, water, fire, wind, and void. From the Kamakura period onward, these pagodas served primarily as funerary markers for important figures. Early Kamakura examples show straight petal-like projections, Sanskrit characters on the base, and curved window frames derived from wooden architecture. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'How did Indian stupas become Japanese pagodas?', answer: 'Buddhist memorial mounds (stupas) evolved as Buddhism spread through China to Japan. In Japan, the form developed into increasingly elaborate stone and wooden towers. Hokyointo began taking their present stone form during the Kamakura period (1185-1333).' },
      { question: 'What do the five sections represent?', answer: 'The five elements of Japanese Buddhist cosmology: <strong>earth, water, fire, wind, and void</strong>. This structure embodies the Buddhist understanding of the fundamental composition of the universe.' },
      { question: 'What was its purpose?', answer: 'These pagodas contained the Hokyoin dharani sutra, which records the pious deeds of a Buddha. From the Kamakura period onward, they served primarily as funerary markers for important figures. Praying before them was believed to bring spiritual benefits.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s carved from granite and dates to the Kamakura period.' }
    ]
  },

  'boar-incarnation-the-of-god-vishnu-lifting-the-earth-goddess-bhuvaraha': {
    description: `<p>This 11th-century brass sculpture from Himachal Pradesh, India, shows <strong>Varaha</strong> (Vishnu's boar avatar) in the act of lifting Bhudevi, the earth goddess, from the primeval ocean. The demon Hiranyaksha had hidden the earth beneath cosmic waters, so Vishnu transformed into a boar, dove into the depths, fought the demon, and emerged victorious with the earth balanced on his tusk. The composition captures that triumphant moment of rescue.</p>

<p>Brass casting had reached high sophistication in north and central India by this period. The alloy's golden color and durability made it a favored medium for devotional images in temples and private shrines. The warm patina that developed over time enhanced the sacred quality. This piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What story does this depict?', answer: 'Vishnu\'s rescue of the earth. When the demon Hiranyaksha hid the earth in the cosmic ocean, Vishnu became a boar, dove beneath the waters, defeated the demon in battle, and lifted the earth goddess on his tusk, restoring her to her proper place.' },
      { question: 'Why is Varaha important?', answer: 'He\'s the third of Vishnu\'s ten avatars, representing strength and the restoration of <strong>dharma</strong> (cosmic order). The rescue narrative demonstrates that the divine will intervene when the balance of the universe is threatened.' },
      { question: 'Why was brass used?', answer: 'Brass (copper and zinc alloy) was valued for its golden color, durability, and lower cost compared to pure bronze. It was widely used for devotional images in north and central India. The warm patina it develops over time was considered to enhance sacred quality.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s from Himachal Pradesh, India, dating to the 11th century.' }
    ]
  },

  'god-vishnus-mount-garuda-kneeling-with-hands-in-gesture-of-adoration-anjalimudra': {
    description: `<p>This 14th-century schist sculpture from the Kathmandu Valley shows <strong>Garuda</strong>, the divine eagle and mount of Vishnu, kneeling with hands pressed together in the anjali mudra (gesture of devotion). Garuda is the king of birds in Hindu mythology, born from an egg and possessing incredible strength and speed. He's depicted here in anthropomorphic form, with human body and bird features, demonstrating his eternal devotion to Vishnu.</p>

<p>The anjali mudra represents reverence, respect, and the ideal relationship between devotee and deity. Garuda also serves as the eternal enemy of nagas (serpents), representing the power that conquers poison, pride, and earthly attachments. The sculpture was carved from schist, a metamorphic stone that allows detailed work. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, measuring about 19 by 15 inches.</p>`,
    faqs: [
      { question: 'Who is Garuda?', answer: 'The king of birds and sacred mount of Vishnu in Hindu mythology. He\'s the son of sage Kashyapa and Vinata, born from an egg. He serves as Vishnu\'s vehicle and is the eternal enemy of nagas (serpents), representing power over poison and earthly attachments.' },
      { question: 'What is the anjali mudra?', answer: 'Hands pressed together in a prayer position, the traditional gesture of greeting, respect, and devotion in Hindu and Buddhist cultures. For Garuda, it represents his eternal devotion and service to Lord Vishnu.' },
      { question: 'Why is Garuda shown in human form?', answer: 'Hindu iconography depicts Garuda either as a giant eagle or in anthropomorphic form (human body with wings and bird features). The human form emphasizes his role as a conscious, devoted servant of Vishnu rather than simply a vehicle.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s from the Kathmandu Valley, Nepal, about 19 by 15 inches in schist.' }
    ]
  },

  'goddess-white-tara-with-kneeling-donor-at-base': {
    description: `<p>This small phyllite sculpture from 12th-century eastern India shows <strong>White Tara</strong>, a beloved Buddhist goddess of compassion and longevity, with a kneeling donor figure at the base. White Tara has seven eyes: one on her forehead (wisdom), two regular eyes, and one on each palm and sole. These represent her all-seeing awareness of suffering throughout the universe. She specifically embodies maternal compassion, healing, and long life.</p>

<p>The piece dates to the Pala period (8th-12th centuries CE), the last great Buddhist dynasty in the Indian subcontinent. Pala art represents a refined classical style that heavily influenced Tibetan and Nepalese Buddhist art. The donor figure at the base records the patron who commissioned the work, ensuring their merit-making act was permanently preserved. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why does White Tara have seven eyes?', answer: 'They represent all-seeing <strong>compassion</strong>. One on her forehead (wisdom), two regular eyes, and one on each palm and sole. These allow her to see and respond to the suffering of all beings throughout the universe.' },
      { question: 'How does White Tara differ from Green Tara?', answer: 'Green Tara represents active compassion and swift intervention. White Tara specifically embodies maternal compassion, healing, and longevity. Tibetans pray to her especially for health and long life.' },
      { question: 'Who is the kneeling figure?', answer: 'The donor who commissioned the sculpture. Including patron figures was common in Buddhist art. It permanently recorded their merit-making act, which in Buddhist belief generates good karma and spiritual benefit.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It dates to the Pala period in eastern India.' }
    ]
  },

  'god-triton': {
    description: `<p>This schist relief from the 1st-3rd century CE shows <strong>Triton</strong>, the Greek sea-god, carved in the Gandhara region of ancient Pakistan. A Greek deity appearing in Buddhist temple art sounds strange, but it captures exactly what made Gandharan art unique: the region sat at the crossroads of the Silk Road, and Alexander the Great's conquests had left a lasting Hellenistic influence. Greek mythological creatures were among the most popular decorative elements in Gandharan Buddhist temples.</p>

<p>Tritons, ichthyo-centaurs, and sea monsters often appeared in triangular friezes on temple staircases or altars. They were believed to safely carry souls across the waters to paradise. In Greek mythology, Triton is the son of Poseidon and Amphitrite, a merman who calms or raises waves with his conch shell trumpet. These Greco-Buddhist motifs later influenced Indian art, including the depiction of the water monster makara. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why is a Greek god in Buddhist art?', answer: 'The Gandhara region (modern Pakistan) had a Hellenistic heritage from Alexander the Great\'s conquests and sat on the Silk Road. Greek mythological creatures became popular decorative elements in Buddhist temples, blending with Buddhist iconography in ways found nowhere else.' },
      { question: 'What role did Triton play in Buddhist contexts?', answer: 'Sea creatures like tritons were believed to safely carry the souls of the dead to paradise across the waters. They appeared on temple staircases and altar friezes as protective, transitional figures.' },
      { question: 'Who is Triton in Greek mythology?', answer: 'Son of Poseidon and Amphitrite. A merman (human upper body, fish lower body) who serves as his father\'s herald, carrying a conch shell trumpet to calm or raise ocean waves.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s about 7 by 6 inches in gray schist.' }
    ]
  },

  'jaina-tirthankara-parshvanatha-seated-in-meditation-dhyanamudra-under-a-snake-ho': {
    description: `<p>This sandstone sculpture from 6th-century Uttar Pradesh shows <strong>Parshvanatha</strong>, the 23rd of twenty-four Jain tirthankaras, seated in meditation with a multi-headed serpent hood protecting him from above. Parshvanatha is the earliest tirthankara historians believe was probably a real person, living between the 8th and 6th centuries BCE. He's always identifiable by the serpent canopy, which comes from a specific story in Jain scripture.</p>

<p>According to the Kalpa-sutra, Parshvanatha once saved a serpent trapped inside a log in an ascetic's fire. The snake, later reborn as Dharanendra (lord of the underworld nagas), returned the favor by sheltering Parshvanatha from a storm sent by a demon during deep meditation. The 6th-century date places this sculpture in the later Gupta period, when Jain sculpture reached classical refinement in North India. At about 30 by 17 inches, it's a substantial piece of devotional art. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who was Parshvanatha?', answer: 'The 23rd of twenty-four Jain tirthankaras and the earliest one historians believe was probably historical, living around the 8th-6th century BCE. He\'s always depicted with a serpent canopy over his head, his identifying attribute.' },
      { question: 'Why the snake hood?', answer: 'Parshvanatha once rescued a serpent from a fire. The snake was later reborn as <strong>Dharanendra</strong>, lord of the underworld nagas, and returned the favor by sheltering Parshvanatha from a demon\'s storm during meditation. The hood represents divine protection.' },
      { question: 'What is a tirthankara?', answer: 'Literally "ford-maker," an enlightened spiritual teacher in Jainism who has conquered the cycle of death and rebirth. The current cosmic age has twenty-four tirthankaras, each identifiable by specific symbols and attributes.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 30 by 17 inches in sandstone, from Uttar Pradesh, India.' }
    ]
  },

  'revanta-son-of-sun-god-surya': {
    description: `<p>This 10th-century bronze from Bangladesh depicts <strong>Revanta</strong>, a minor but fascinating Hindu deity who is the youngest son of Surya (the sun god). Revanta serves as the guardian deity of warriors and horses, protector from forest dangers, and patron god of hunting. He's chief of the Guhyakas, supernatural forest-dwelling beings. Unlike most Hindu deities depicted barefoot, Revanta wears boots reaching to his calves, a detail he shares only with his father Surya.</p>

<p>The boots may reflect Central Asian associations or origins. Worship of Revanta was especially common in medieval eastern India during the Pala period (8th-12th centuries), with archaeological evidence showing a dedicated cult beginning in the 6th century CE. He was typically shown as a huntsman on horseback, often with a hunting dog. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, measuring about 9 by 7 inches.</p>`,
    faqs: [
      { question: 'Who is Revanta?', answer: 'The youngest son of Surya, the sun god. He\'s the guardian deity of warriors and horses, protector from forest dangers, and patron of hunting. He\'s chief of the Guhyakas, supernatural forest-dwelling beings who live in the Himalayas.' },
      { question: 'Why does he wear boots?', answer: 'Unlike most Hindu deities depicted barefoot, only Revanta and his father Surya wear boots reaching to the calves. This may reflect Central Asian origins or associations. He\'s typically shown as a horseback huntsman.' },
      { question: 'Where was Revanta worshipped?', answer: 'Primarily in medieval eastern India (Bihar and Bengal) during the <strong>Pala period</strong> (8th-12th centuries). Archaeological evidence shows a dedicated cult beginning in the 6th century CE, with numerous stone and bronze images from Bihar.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 9 by 7 inches, cast in bronze.' }
    ]
  },

  'celestial-beauty-apsara': {
    description: `<p>This 12th-century sandstone sculpture from Madhya Pradesh, central India, depicts an <strong>apsara</strong>, a celestial nymph from Hindu mythology. Apsaras inhabit Indra's heaven, serving as divine dancers, musicians, and entertainers of the gods. They're known for extraordinary beauty and are sometimes sent to seduce ascetics whose meditation threatens the gods' power. Hindu temple exteriors, especially in Madhya Pradesh (including the famous Khajuraho temples), are covered with apsaras in graceful poses.</p>

<p>At about 20 inches tall, this figure likely stood in the tribhanga (three-bend) pose on a temple exterior. The stepped, towering temple walls evoked the mountains of Indra's heaven, and carved apsaras populated them as inhabitants of paradise. These sculptures represented divine beauty, fertility, and the pleasures of heaven. They were integral to sacred architecture, not separate from it. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What are apsaras?', answer: 'Celestial nymphs who inhabit Indra\'s heaven in Hindu mythology. They serve as divine dancers, musicians, and entertainers of the gods. They represent beauty, fertility, and the sensual pleasures of paradise.' },
      { question: 'Why are they on temple walls?', answer: 'Hindu temple exteriors evoked the mountains of Indra\'s heaven. Apsaras populated them as inhabitants of paradise, celebrating divine beauty and demonstrating the sculptor\'s skill. They were integral to sacred architecture, not decorative additions.' },
      { question: 'What is the tribhanga pose?', answer: 'A graceful S-shaped stance with three bends in the body at neck, waist, and knee. It emphasizes the curves of the figure and creates dynamic visual movement. It became the standard pose for depicting feminine beauty in classical Indian sculpture.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 20 inches tall in sandstone, from Madhya Pradesh.' }
    ]
  },

  'buddha-triumphing-over-mara': {
    description: `<p>This gold Buddha from 18th-century Thailand shows the moment of <strong>enlightenment</strong>: Siddhartha Gautama touching the earth to witness his triumph over Mara, the demon of illusion. This gesture (bhumisparsha mudra) is the most commonly depicted moment in Buddhist art. As Siddhartha meditated under the Bodhi tree, Mara appeared with an army of demons to claim the throne of enlightenment. Siddhartha simply touched the ground, calling the earth as his witness, and Mara was defeated.</p>

<p>The piece comes from either the Rattanakosin period (post-1782, Bangkok) or late Ayutthaya period (1350-1767). Gold was reserved for the most important Buddha images, reflecting both the sacred nature of the subject and the devotion of the patron who commissioned it. Thai Buddhist sculpture from this era features refined gilding techniques and elegant proportions. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What does the earth-touching gesture mean?', answer: 'The <strong>bhumisparsha mudra</strong> shows the right hand reaching downward to touch the earth. It represents the moment Siddhartha called the earth to witness his triumph over Mara (illusion). It symbolizes unshakeability and spiritual liberation.' },
      { question: 'Who was Mara?', answer: 'The demon of illusion, desire, and death in Buddhist cosmology. He tried to prevent Siddhartha from achieving enlightenment by sending armies of demons, temptresses, and storms. Siddhartha\'s calm earth-touching gesture defeated all of it.' },
      { question: 'Why is it made of gold?', answer: 'Gold was reserved for the most important Buddha images, reflecting both the sacred nature of the subject and the patron\'s deep devotion. In Buddhist symbolism, gold represents enlightenment and the radiance of awakened consciousness.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It dates to 18th-century Thailand.' }
    ]
  },

  'bull-possibly-god-shivas-mount-nandi': {
    description: `<p>This 9th-century andesite sculpture from Central Java likely depicts <strong>Nandi</strong>, the sacred bull mount of the Hindu god Shiva. Nandi's name means "joy" or "bliss," and he symbolizes purity, devotion, truth, and righteousness. In almost all Shiva temples, a stone Nandi faces the main shrine, perpetually gazing on the god. This positioning teaches that the soul should always be focused on the divine.</p>

<p>The sculpture is carved from andesite, a volcanic rock that was the primary material for Central Javanese temple construction during the 9th century. The famous Borobudur temple used approximately 55,000 cubic meters of andesite. Java's volcanic geology made this material readily available from neighboring quarries and riverbeds. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'Who is Nandi?', answer: 'The sacred bull mount of the Hindu god Shiva. His name means "joy" or "bliss." He symbolizes purity, devotion, truth, and righteousness. In temples, a stone Nandi always faces the main shrine, perpetually gazing on Shiva.' },
      { question: 'Why andesite?', answer: 'Andesite is a volcanic rock abundant in Java. It was the primary material for 9th-century Javanese temple construction. Borobudur alone used approximately 55,000 cubic meters of it. The stone was readily available from quarries and riverbeds near volcanic sites.' },
      { question: 'What does Nandi symbolize?', answer: 'The seated Nandi represents the individual soul (jiva), and his gaze toward Shiva\'s shrine teaches that the soul should always focus on the <strong>divine</strong>. He also represents the four pillars of spiritual life: purity, devotion, truth, and righteousness.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. A gift from Marilynn B. Alsdorf. About 13 by 24 inches in andesite.' }
    ]
  },

  'shaiva-saint-appar-holding-a-spade': {
    description: `<p>This 14th-century Chola bronze from Tamil Nadu depicts <strong>Appar</strong> (c. 570-650 CE), one of the sixty-three Nayanar saints of Tamil Shaivism. He holds his distinctive attribute: a spade (ulavarapadai). Appar earned this symbol by physically cleaning dilapidated Shiva temples with a farmer's hoe, restoring neglected shrines across South India. Born Marunikkiyar, he converted to Jainism and became head of a Jain monastery before returning to Shaivism after a painful illness.</p>

<p>He composed 4,900 devotional hymns to Shiva, of which 313 survive in the Tirumurai. This bronze was created as a processional sculpture, carried outside the temple during festivals celebrating the saint's birth and anniversaries. <strong>Chola bronzes</strong> were cast using the lost-wax technique in panchaloha (five-metal alloy: copper, zinc, tin, plus traces of gold and silver). Each mold produces only one piece, making every Chola bronze unique. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who was Appar?', answer: 'A 7th-century Tamil saint who composed 4,900 devotional hymns to Shiva (313 survive). Born Marunikkiyar, he led a Jain monastery before returning to Shaivism. He\'s famous for physically cleaning neglected Shiva temples with a spade.' },
      { question: 'What are Chola bronzes?', answer: 'Bronze images created in South India during the Chola dynasty (c. 850-1250) using the lost-wax technique in <strong>panchaloha</strong> (five-metal alloy). Each mold produces only one piece. They\'re considered among the finest examples of Indian art in any medium.' },
      { question: 'How was this used?', answer: 'As a processional idol carried outside the temple during festivals celebrating Appar\'s birth and anniversaries. Devotees could have an audience with the saint during these celebrations. The bronze is about 23.5 inches tall.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. From Thanjavur, Tamil Nadu, dating to the 14th century.' }
    ]
  },

  'mahavairochana': {
    description: `<p>This 9th-century bronze depicts <strong>Mahavairochana</strong> (the "Great Sun Buddha"), the cosmic Buddha who sits at the center of esoteric Buddhist theology. In Japanese Shingon Buddhism, he's called Dainichi Nyorai, and the entire universe is understood as his body. He unifies all emanations of Buddhism and represents universal truth. Vairochana typically displays the dharmachakra mudra (wheel-turning gesture) with both hands in front of the chest.</p>

<p>The piece dates to the period when esoteric Buddhism was reaching its peak in both Japan and Java. A famous contemporary example is the three-meter-tall stone Vairochana at the 9th-century Mendut temple near Borobudur in Java. Small portable bronzes like this allowed practitioners to maintain private devotional practice focused on the most important deity in the esoteric Buddhist cosmos. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Who is Mahavairochana?', answer: 'The cosmic Buddha at the center of esoteric Buddhist theology. In Japanese Shingon Buddhism, called Dainichi Nyorai ("Great Sun Buddha"). The entire universe is understood as his body. He\'s the source of all Buddhas and represents <strong>universal truth</strong>.' },
      { question: 'What is the wheel-turning gesture?', answer: 'The dharmachakra mudra: both hands in front of the chest, thumbs and index fingers meeting to form wheels. It represents the turning of the dharma wheel (teaching) and is Vairochana\'s characteristic gesture.' },
      { question: 'Is this Japanese or Javanese?', answer: 'Possibly either. Both 9th-century Japan and Java were centers of esoteric Buddhism. Java produced the famous stone Vairochana at Mendut temple near Borobudur, while Japanese Shingon Buddhism placed Vairochana at the center of its practice.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. A small bronze dating to the 9th century.' }
    ]
  },

  'deities-chakrasamvara-and-vajravarahi-in-ritual-embrace-yab-yum': {
    description: `<p>This 16th-century bronze from Nepal shows <strong>Chakrasamvara</strong> and <strong>Vajravarahi</strong> in yab-yum ("father-mother") embrace, a central image in Tibetan Tantric Buddhism. This isn't erotic imagery: it represents the primordial union of wisdom and compassion essential for achieving enlightenment. The male figure (yab) embodies compassion and skillful means, while the female partner (yum) embodies insight and wisdom. Without both, enlightenment is impossible.</p>

<p>Chakrasamvara ("Wheel of Supreme Bliss") is one of the principal meditation deities in Highest Yoga Tantra. He typically has a blue body, four faces, and twelve arms representing the twelve stages of liberation. Vajravarahi is the "queen of dakinis" with a distinguishing sow head behind her ear, symbolizing victory over ignorance. These images were meant only for practitioners who had received proper instruction. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What does yab-yum mean?', answer: '"Father-mother" in Tibetan. It represents the <strong>union of wisdom and compassion</strong> essential for enlightenment. The male figure embodies compassion and skillful means; the female embodies wisdom. Without both, enlightenment can\'t be achieved.' },
      { question: 'Is this erotic imagery?', answer: 'No. In Vajrayana Buddhism, yab-yum imagery is deeply symbolic, not literal. It shows that enlightenment requires complete balance between compassion and wisdom. Without compassion, wisdom is sterile. Without wisdom, compassion can be misled.' },
      { question: 'Who are these deities?', answer: 'Chakrasamvara ("Wheel of Supreme Bliss") is a principal meditation deity in Highest Yoga Tantra. Vajravarahi is the "queen of dakinis." Her sow head (behind her ear) symbolizes victory over ignorance.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. From Nepal, about 5 by 4 inches in bronze.' }
    ]
  },

  'simian-mother-and-child': {
    description: `<p>This 13th-century andesite sculpture from Central Java shows a monkey mother tenderly holding her infant. Javanese sculptors demonstrated equal skill with sacred and secular subjects, and animal themes appeared frequently in temple contexts. Monkeys held particular significance in both Hindu and Buddhist traditions: in the Hindu Ramayana epic, the monkey god Hanuman plays a heroic role, and monkey imagery carried associations with loyalty, devotion, and cleverness.</p>

<p>The piece was carved from andesite, the volcanic rock that Java's geology made abundant and that served as the primary material for temple construction throughout the island. At about 10 by 9 inches, the sculpture's intimate scale captures the maternal bond with naturalistic observation. It likely served as architectural decoration on a temple complex. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, a gift from Marilynn B. Alsdorf.</p>`,
    faqs: [
      { question: 'Why carve monkeys for a temple?', answer: 'Animals held both symbolic and decorative significance in Javanese temple art. Monkeys appear in the Ramayana epic (the heroic Hanuman) and carried associations with <strong>loyalty</strong>, devotion, and cleverness. Naturalistic animal carvings also demonstrated the sculptor\'s observational skill.' },
      { question: 'What was 13th-century Java like?', answer: 'Central Java continued its Hindu-Buddhist artistic traditions with sophisticated temple complexes. Sculptors created works depicting deities, mythological scenes, and naturalistic subjects in andesite, the volcanic stone abundant across the island.' },
      { question: 'What is andesite?', answer: 'A fine-grained volcanic rock abundant in Java due to the island\'s volcanic geology. It was durable enough for outdoor temple installations yet workable enough for detailed carving. The famous Borobudur temple is built entirely of andesite.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 10 by 9 inches, a gift from Marilynn B. Alsdorf.' }
    ]
  },

  'god-shiva-seated-in-loving-embrace-with-goddess-uma-on-the-bull-nandi': {
    description: `<p>This 9th-century sandstone sculpture from Madhya Pradesh shows <strong>Shiva and Parvati (Uma)</strong> seated together on the bull Nandi in their Uma-Maheshvara form. This image represents the divine union of masculine and feminine principles (Purusha and Prakriti), which in Hindu cosmology drives creation and maintains the cosmic cycle. The composition shows Shiva as both ascetic yogi and loving husband, embodying renunciation and worldly engagement simultaneously.</p>

<p>At about 31 by 21 inches, this is a substantial piece of 9th-century temple sculpture. Madhya Pradesh was a center of flourishing Hindu temple construction during this period, and sandstone was the preferred medium for the detailed carving of divine figures and mythological scenes. The intimate embrace between the deities teaches about divine love and the complementary nature of masculine and feminine energy. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is the Uma-Maheshvara form?', answer: 'Shiva (Maheshvara) and his consort Parvati (Uma) in loving embrace. It represents the union of masculine and feminine principles that drives <strong>creation</strong> and maintains cosmic order. It shows Shiva as both ascetic and loving husband.' },
      { question: 'Why are they on a bull?', answer: 'Nandi is Shiva\'s sacred bull mount. His presence emphasizes that deity and mount are inseparable in Hindu cosmology. The bull symbolizes dharma (righteousness) and devotion, serving as the throne for the divine couple.' },
      { question: 'What does this teach?', answer: 'That divine love involves the complementary union of masculine and feminine energies. Shiva, though a renunciant yogi, is also a householder and partner. Both aspects are necessary for cosmic balance.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 31 by 21 inches in sandstone, from Madhya Pradesh.' }
    ]
  },

  'buddha-shakyamuni-meditating-in-the-indrashala-cave-top-and-buddha-dipankara-bot': {
    description: `<p>This Gandharan schist relief from the 1st-3rd century CE tells two stories stacked in registers. The top panel shows <strong>Buddha Shakyamuni</strong> meditating in the Indrashala Cave, where Indra (king of the gods) visited and the Buddha delivered a sermon answering forty-two questions, converting Indra to Buddhism. The bottom panel shows an earlier story: a wealthy Brahmin named Sumati laid his matted hair across a puddle so that <strong>Buddha Dipankara</strong> wouldn't soil his feet. Dipankara then prophesied Sumati would be reborn as the future Buddha Shakyamuni.</p>

<p>The two-register format connects the prophecy (bottom) with its fulfillment (top). Gandharan sculptors carved these narrative panels in gray-blue schist from the Swat valley, blending Greco-Roman artistic elements with Buddhist stories. The naturalistic drapery, vine scrolls, and realistic anatomy show Hellenistic influence. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>, measuring about 24 by 15 inches.</p>`,
    faqs: [
      { question: 'What are the two stories?', answer: 'Top: Buddha Shakyamuni meditating in the Indrashala Cave, where he converted Indra by answering 42 questions. Bottom: a Brahmin named Sumati laid his hair over a puddle for <strong>Buddha Dipankara</strong>, who prophesied Sumati would become the future Buddha.' },
      { question: 'How do the two panels connect?', answer: 'The bottom panel shows the prophecy: Dipankara predicting Sumati\'s rebirth as the Buddha. The top panel shows its fulfillment: Shakyamuni fully enlightened, teaching even the king of the gods. Together they span the Buddha\'s cosmic story.' },
      { question: 'What is Gandharan style?', answer: 'A fusion of Greco-Roman artistic techniques with Buddhist content from the 1st-5th centuries CE. It created the first large stone Buddha images. The gray-blue schist from the Swat valley was its signature material.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 24 by 15 inches in gray schist.' }
    ]
  },

  'buddha-triumphing-over-mara-maravijaya': {
    description: `<p>This 16th-century gilt bronze shows the <strong>Maravijaya</strong> (Victory over Mara) scene in miniature: the Buddha touching the earth at the moment of enlightenment. At under 4 inches tall, this was a personal devotional object for meditation, a travel shrine for merchants or pilgrims, or an offering at a temple. The gilt surface (gold over bronze) combines bronze's durability with gold's sacred luminosity.</p>

<p>The Maravijaya is the most frequently depicted scene in Buddhist art across all traditions because it represents Buddhism's central moment: the achievement of enlightenment and triumph over the forces of delusion, desire, and fear. The small size and precious material made it ideal for private practice. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What does Maravijaya mean?', answer: '"Victory over Mara." It shows the moment Siddhartha achieved <strong>enlightenment</strong> by touching the earth to witness his triumph over Mara, the demon of illusion. It\'s the most commonly depicted scene in Buddhist art across all traditions.' },
      { question: 'What is gilt bronze?', answer: 'Bronze covered with a thin layer of gold through fire-gilding (mercury gilding). This combines bronze\'s durability and castability with gold\'s luminous, sacred appearance. It was the preferred technique for important Buddhist devotional sculptures.' },
      { question: 'How was this used?', answer: 'At under 4 inches tall, it was a personal devotional object. Practitioners used it for meditation at home altars, as a portable travel shrine, or as an offering at temples. Its small size and precious material suited private Buddhist practice.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. It\'s about 4 inches tall in gilt bronze.' }
    ]
  },

  'bodhisattva-with-hands-in-gesture-of-teaching-vitarkamudra': {
    description: `<p>This 9th-century bronze shows a bodhisattva performing the <strong>vitarkamudra</strong>, the teaching or discussion gesture. The right hand is raised with thumb and index finger touching to form a circle while other fingers remain extended. This gesture symbolizes the transmission of the Buddha's teachings and the moment a bodhisattva explains the dharma. A bodhisattva is an enlightened being who postpones final nirvana to help others achieve liberation.</p>

<p>The princely appearance, with jewelry and crown, distinguishes bodhisattvas from the simpler robed Buddha. The vitarkamudra is especially associated with Avalokiteshvara (compassion) and other teaching bodhisattvas. Small bronze figures like this served as three-dimensional teaching tools, preserving iconographic meaning through hand gestures, body positions, and attributes. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What is the vitarkamudra?', answer: 'The teaching or discussion gesture: right hand raised, thumb and index finger touching to form a circle, other fingers extended. It symbolizes the <strong>transmission of dharma</strong> (Buddhist teachings) and is the classic teaching gesture in Buddhist iconography.' },
      { question: 'What is a bodhisattva?', answer: 'An enlightened being who postpones final nirvana to help all sentient beings achieve liberation. Bodhisattvas embody compassion and are depicted wearing jewelry and crowns, unlike the simply robed Buddha. They\'re central to Mahayana Buddhism.' },
      { question: 'How do hand gestures identify Buddhist figures?', answer: 'Hand gestures (mudras) function as a visual language in Buddhist art. Each gesture carries specific doctrinal meaning. The vitarkamudra indicates a teaching figure, while bhumisparsha (earth-touching) indicates the moment of enlightenment.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. A 9th-century bronze.' }
    ]
  },

  'four-armed-bodhisattva': {
    description: `<p>This 9th-10th century bronze from Central Java shows a <strong>four-armed bodhisattva</strong>. Multiple arms represent superhuman powers and the ability to perform multiple compassionate actions simultaneously. Each hand typically holds different attributes or forms mudras that symbolize specific powers, teachings, or protective qualities. The small size (about 4 inches) indicates this was a personal devotional object or votive offering at a Buddhist shrine.</p>

<p>The piece dates to the height of Central Javanese Buddhist culture, the same era that produced Borobudur, the world's largest Buddhist monument. Javanese bronzes from this period show distinctive local characteristics while maintaining Indian iconographic principles: rounder faces, fuller bodies, and more naturalistic proportions than Indian models. The lost-wax casting technique at this miniature scale required exceptional skill. It's at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'Why four arms?', answer: 'Multiple arms represent superhuman powers and the ability to perform multiple compassionate actions simultaneously. Each hand holds attributes or forms gestures (mudras) symbolizing specific powers, teachings, or protective qualities.' },
      { question: 'Where was this made?', answer: 'Central Java, during the 9th-10th centuries. This was the height of Javanese Buddhist culture, the era that produced <strong>Borobudur</strong>, the world\'s largest Buddhist monument (completed c. 825 CE).' },
      { question: 'How does Javanese style differ from Indian?', answer: 'Javanese Buddhist bronzes have rounder faces, fuller bodies, and more naturalistic proportions compared to the elongated forms of Indian models. They maintain Indian iconographic principles while developing a distinctive local character.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. About 4 inches tall, a gift from Michael and Juliana Phillips.' }
    ]
  },

  'yaksha-general-holding-a-mongoose': {
    description: `<p>This 18th-century gilt copper figure from Tibet depicts one of the twelve <strong>Yaksha generals</strong> from the Medicine Buddha's retinue. He holds a mongoose in his left hand, the creature spitting jewels. In Buddhist mythology, the mongoose is a predator of nagas (serpent beings who guard treasures), and its jewel-spewing represents "subduing the karma of stinginess" and the dispensing of wealth. All twelve Yaksha generals carry a mongoose.</p>

<p>This connects to the broader cult of Jambhala (Kubera in Hinduism), the Buddhist deity of fortune and wealth who also holds a jewel-producing mongoose. In Tibetan Buddhism, wealth deities aren't about personal enrichment. They emphasize that prosperity should support generosity, dharma practice, and charitable activity. The mongoose teaches that wealth must be shared, not hoarded. The piece is at the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>.</p>`,
    faqs: [
      { question: 'What does the mongoose mean?', answer: 'In Buddhist mythology, the mongoose preys on nagas (serpent guardians of treasure). Its jewel-spewing represents "subduing the karma of stinginess" and the ability to access and dispense wealth. It\'s the defining attribute of <strong>wealth deities</strong>.' },
      { question: 'Who are the Yaksha generals?', answer: 'Twelve heavenly protectors in the Medicine Buddha\'s retinue. All twelve hold a mongoose and another attribute. They wear princely jewelry and bare chests with silk dhoti, representing their status as divine warriors and protectors.' },
      { question: 'Do Buddhist wealth deities encourage greed?', answer: 'No. In Tibetan Buddhism, wealth deities emphasize that prosperity should support generosity, dharma practice, and charitable activity. The mongoose "subduing stinginess" teaches that wealth must be shared, not hoarded.' },
      { question: 'Where can I see it?', answer: 'At the <a href="/apps/masterpieces/museum/art-institute-of-chicago"><strong>Art Institute of Chicago</strong></a>. 18th-century gilt copper from Tibet.' }
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
