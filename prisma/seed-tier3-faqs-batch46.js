const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 46: tier 3 index 470-489 (20 artworks)
const newFaqs = {
  'otto-mueller-drei-akte-unter-einem-baum': [
    { question: "What does the title mean?", answer: "\"<strong>Drei Akte Unter Einem Baum</strong>\" means \"Three Nudes Under a Tree.\" <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> figures blend into nature with matte, earthy tones typical of his <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> pastoral scenes." }
  ],
  'otto-mueller-drei-badende-im-teich': [
    { question: "What setting does Mueller prefer for bathers?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> consistently placed <strong>nudes in natural settings</strong>: ponds, rivers, and forests. His vision of humans at one with nature reflected a German <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> longing for primal authenticity." }
  ],
  'otto-mueller-drei-badende-im-wasser': [
    { question: "How does Mueller's palette differ from other Expressionists?", answer: "<a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller</strong></a> used <strong>muted greens, browns, and ochres</strong> rather than the vivid reds and blues favored by other Die Brücke members. His subdued palette creates a sense of quiet harmony between figure and landscape." }
  ],
  'gerard-ter-borch-drink': [
    { question: "What social rituals does ter Borch show?", answer: "<a href=\"/apps/masterpieces/artist/gerard-ter-borch\"><strong>Ter Borch</strong></a> documented the <strong>polite social rituals</strong> of the Dutch upper middle class: drinking, letter-reading, music-making, and conversation. His paintings serve as windows into 17th-century Dutch domestic culture." }
  ],
  'adriaen-brouwer-drinkers-in-the-yard': [
    { question: "What influenced Brouwer's tavern scenes?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> studied with Frans Hals and painted <strong>peasant tavern scenes</strong> with raw, unsentimental honesty. His small, vivid panels influenced Rubens (who collected them) and later genre painters." }
  ],
  'adriaen-van-ostade-drinking-peasant-in-an-inn': [
    { question: "How did Van Ostade's style evolve?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Van Ostade's</strong></a> early tavern scenes were rough and dark, influenced by Brouwer. Over time, his interiors became <strong>warmer and more refined</strong>, with golden light replacing the earlier crudeness." }
  ],
  'van-gogh-driveway': [
    { question: "What everyday subjects attracted Van Gogh?", answer: "<a href=\"/apps/masterpieces/artist/vincent-van-gogh\"><strong>Van Gogh</strong></a> found beauty in <strong>ordinary paths, roads, and driveways</strong>. He transformed mundane scenes into expressive compositions through bold color and energetic brushwork." }
  ],
  'anthony-van-dyck-drunken-silenus-supported-by-two-bacchantes': [
    { question: "Who was Silenus?", answer: "<strong>Silenus</strong> was the elderly companion of Dionysus (Bacchus), always depicted drunk. <a href=\"/apps/masterpieces/artist/anthony-van-dyck\"><strong>Van Dyck</strong></a> painted this mythological subject with the fleshy <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> vitality he learned from Rubens's workshop." }
  ],
  'david-teniers-younger-dulle-griet-mad-meg': [
    { question: "What is Dulle Griet about?", answer: "\"<strong>Dulle Griet</strong>\" (Mad Meg) is a Flemish folklore character who storms Hell. While Bruegel's version is most famous, <strong>David Teniers the Younger</strong> also painted this chaotic subject with his characteristic lighter, more refined touch." }
  ],
  'henri-toulouse-lautrec-dog-car': [
    { question: "What was Toulouse-Lautrec's relationship with animals?", answer: "<a href=\"/apps/masterpieces/artist/henri-de-toulouse-lautrec\"><strong>Toulouse-Lautrec</strong></a> loved <strong>horses and dogs</strong> from childhood on his family's estates. Animals appear throughout his work, from early naturalistic studies to later Parisian circus scenes." }
  ],
  'adriaen-brouwer-dune-landscape-by-moonlight': [
    { question: "Did Brouwer paint landscapes?", answer: "Though known for tavern scenes, <a href=\"/apps/masterpieces/artist/adriaen-brouwer\"><strong>Brouwer</strong></a> also painted <strong>atmospheric landscapes</strong>. His moonlit dune scenes show remarkable sensitivity to mood and light, anticipating later Dutch landscape painters." }
  ],
  'jacob-van-ruisdael-dune-landscape-near-haarlem': [
    { question: "Why did Ruisdael paint dunes?", answer: "<a href=\"/apps/masterpieces/artist/jacob-van-ruisdael\"><strong>Ruisdael</strong></a> painted the <strong>sandy dunes near Haarlem</strong> with dramatic skies that dwarf the flat terrain. His ability to find grandeur in modest Dutch geography defined the Golden Age landscape tradition." }
  ],
  'mary-cassatt-during-carnival': [
    { question: "Did Cassatt paint scenes of public life?", answer: "<a href=\"/apps/masterpieces/artist/mary-cassatt\"><strong>Cassatt</strong></a> occasionally painted <strong>public outings and social events</strong> beyond her typical mother-and-child subjects. Carnival scenes let her explore costume, gesture, and the excitement of festive gatherings." }
  ],
  'pierre-bonnard-dusk-or-a-round-of-croquet': [
    { question: "How did Bonnard paint twilight?", answer: "<a href=\"/apps/masterpieces/artist/pierre-bonnard\"><strong>Bonnard</strong></a> captured <strong>dusk with soft purples and fading warm tones</strong>. His garden croquet scenes evoke the gentle pleasure of summer evenings, painted from memory rather than direct observation." }
  ],
  'konstantin-korovin-early-spring': [
    { question: "Who was Konstantin Korovin?", answer: "<strong>Konstantin Korovin</strong> was Russia's first <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> painter. His <strong>early spring landscapes</strong> capture the moment when snow melts and new growth appears, rendered with loose, colorful brushwork." }
  ],
  'john-constable-east-bergholt-rectory': [
    { question: "What was East Bergholt to Constable?", answer: "<strong>East Bergholt</strong> in Suffolk was <a href=\"/apps/masterpieces/artist/john-constable\"><strong>Constable's</strong></a> birthplace and lifelong inspiration. He painted its rectory, church, and surrounding fields repeatedly, believing that familiar landscape held the deepest artistic truth." }
  ],
  'maurice-denis-easter-morning-or-easter-mystery': [
    { question: "How did Denis approach religious subjects?", answer: "<a href=\"/apps/masterpieces/artist/maurice-denis\"><strong>Maurice Denis</strong></a> was deeply Catholic and painted religious subjects with <strong>flat, decorative Post-Impressionist style</strong>. His Easter scenes glow with spiritual light filtered through Nabis aesthetics." }
  ],
  'dante-gabriel-rossetti-ecce-ancilla-domini-study': [
    { question: "What does Ecce Ancilla Domini mean?", answer: "\"<strong>Behold the Handmaid of the Lord</strong>\" are Mary's words at the Annunciation. <a href=\"/apps/masterpieces/artist/dante-gabriel-rossetti\"><strong>Rossetti's</strong></a> radical <a href=\"/apps/masterpieces/movement/pre-raphaelite\"><strong>Pre-Raphaelite</strong></a> version shows a startled, realistic young woman rather than an idealized Madonna." }
  ],
  'rembrandt-ecce-homo': [
    { question: "What does Ecce Homo mean?", answer: "\"<strong>Behold the Man</strong>\" are Pilate's words presenting Christ to the crowd. <a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created several versions of this dramatic moment, exploring the tension between political power and innocent suffering." }
  ],
  'juan-de-juanes-ecce-homo': [
    { question: "Who was Juan de Juanes?", answer: "<strong>Juan de Juanes</strong> was one of the most popular Spanish <a href=\"/apps/masterpieces/movement/renaissance\"><strong>Renaissance</strong></a> painters. His <strong>devotional works</strong> were widely reproduced and influenced Spanish religious painting for generations after his death." }
  ],
};

async function seed() {
  for (const [slug, addFaqs] of Object.entries(newFaqs)) {
    try {
      const artwork = await prisma.artwork.findUnique({ where: { slug }, select: { faqs: true } });
      if (!artwork) { console.error(`✗ Not found: ${slug}`); continue; }
      const existing = (artwork.faqs && Array.isArray(artwork.faqs)) ? artwork.faqs : [];
      const merged = [...existing, ...addFaqs];
      await prisma.artwork.update({ where: { slug }, data: { faqs: merged, updatedAt: new Date() } });
      console.log(`✓ ${slug}: ${existing.length} → ${merged.length} FAQs`);
    } catch (err) { console.error(`✗ Failed: ${slug} - ${err.message}`); }
  }
  await prisma.$disconnect();
}
seed();
