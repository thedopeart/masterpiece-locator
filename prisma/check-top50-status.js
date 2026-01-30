const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const slugs = [
  'johannes-vermeer-the-concert','johannes-vermeer-the-geographer','johannes-vermeer-study-of-a-young-woman',
  'leonardo-da-vinci-the-baptism-of-christ','leonardo-da-vinci-madonna-with-a-flower-madonna-benois',
  'leonardo-da-vinci-study-of-the-madonna-and-child-with-a-cat','leonardo-da-vinci-landscape-drawing-for-santa-maria-della-neve',
  'caravaggio-martha-and-mary-magdalene','caravaggio-saint-francis-of-assisi-in-ecstasy','caravaggio-sacrifice-of-isaac',
  'william-blake-isaac-newton',
  'frida-kahlo-selfportrait-along-the-border-line-between-mexico-','frida-kahlo-the-bus','frida-kahlo-portrait-of-virginia-little-girl',
  'gustav-klimt-portrait-of-a-lady','gustav-klimt-sappho','gustav-klimt-klara-klimt',
  'edvard-munch-self-portrait','edvard-munch-sister-inger','edvard-munch-spring',
  'edvard-munch-summer-night-inger-on-the-shore','edvard-munch-portrait-of-the-painter-jensen-hjell',
  'ivan-tsarevich-riding-grey-wolf','demon-seated',
  'artemisia-gentileschi-jael-and-sisera','artemisia-gentileschi-selfportrait-as-a-female-martyr',
  'the-bookworm-spitzweg','the-charging-chasseur','gustave-courbet-the-desperate-man-selfportrait','franz-von-stuck-lucifer',
  'cimabue-madonna-and-child-enthroned-maesta','duccio-madonna-rucellai',
  'giotto-st-francis-giving-his-mantle-to-a-poor-man','masaccio-madonna-casini',
  'fra-angelico-predella-of-the-san-domenico-altarpiece','piero-della-francesca-sigismondo-malatesta',
  'giotto-the-dream-of-innocent-iii','fra-angelico-madonna-of-the-star',
  'hyacinthe-rigaud-louis-xiv-roi-de-france','maurice-quentin-de-la-tour-madame-de-pompadour',
  'elisabeth-vigee-le-brun-marie-antoinette-in-a-muslin-dress',
  'sandro-botticelli-the-discovery-of-the-body-of-holofernes','sandro-botticelli-madonna-and-child',
  'giorgione-the-three-ages-of-man','giorgione-the-holy-family-madonna-benson','giorgione-the-adoration-of-the-kings',
  'joachim-patinir-landscape-with-charon-crossing-the-styx','pontormo-leda-and-the-swan',
  'bronzino-lucrezia-panciatichi','george-stubbs-lion-attacking-a-horse'
];

async function check() {
  let needs = [];
  let done = [];
  for (const slug of slugs) {
    const a = await prisma.artwork.findUnique({ where: { slug }, select: { slug: true, title: true, Artist: { select: { name: true } }, description: true, faqs: true, Museum: { select: { name: true } } } });
    if (!a) { console.log('NOT FOUND:', slug); continue; }
    const hasDesc = a.description && a.description.length > 50;
    const faqCount = (a.faqs && Array.isArray(a.faqs)) ? a.faqs.length : 0;
    if (!hasDesc) {
      needs.push({ slug: a.slug, title: a.title, artist: a.Artist?.name, museum: a.Museum?.name, faqCount });
    } else {
      done.push({ slug: a.slug, title: a.title, descLen: a.description.length, faqCount });
    }
  }
  console.log('\nNEED ENRICHMENT:', needs.length);
  needs.forEach(a => console.log('  ' + a.slug + ' | ' + a.artist + ' | ' + a.title + ' | ' + (a.museum || 'no museum') + ' | ' + a.faqCount + ' FAQs'));
  console.log('\nALREADY DONE:', done.length);
  done.forEach(a => console.log('  ' + a.slug + ' | ' + a.descLen + ' chars | ' + a.faqCount + ' FAQs'));
  await prisma.$disconnect();
}
check();
