const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Batch 52: tier 3 index 590-609 (20 artworks)
const newFaqs = {
  'theodore-chasseriau-forge-du-creusot': [
    { question: "What is Le Creusot?", answer: "<strong>Le Creusot</strong> was a major French industrial town with iron forges. <strong>Théodore Chassériau</strong> painted this industrial subject with the <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> drama he typically reserved for historical and mythological scenes." }
  ],
  'sandro-botticelli-fortitude': [
    { question: "What was this painting commissioned for?", answer: "<a href=\"/apps/masterpieces/artist/sandro-botticelli\"><strong>Botticelli's</strong></a> Fortitude was part of a series of <strong>Seven Virtues</strong> for the Florentine Merchants' Tribunal. It was his first documented public commission and shows the influence of his teacher Filippo Lippi." }
  ],
  'george-bellows-fortytwo-kids': [
    { question: "What does this painting show?", answer: "<a href=\"/apps/masterpieces/artist/george-bellows\"><strong>Bellows</strong></a> painted <strong>boys swimming off a New York City dock</strong>, capturing the raw energy of urban youth. This Ashcan School work celebrates working-class life with bold brushwork and dynamic composition." }
  ],
  'rembrandt-four-illustrations-to-a-spanish-book': [
    { question: "Did Rembrandt illustrate books?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt</strong></a> created illustrations for a book by the rabbi <strong>Menasseh ben Israel</strong>. These etchings show his connection to Amsterdam's Jewish community and his skill as a printmaker." }
  ],
  'edgar-degas-four-jockeys': [
    { question: "Why did Degas paint horse racing?", answer: "<a href=\"/apps/masterpieces/artist/edgar-degas\"><strong>Degas</strong></a> was fascinated by <strong>horses in motion</strong> and the social spectacle of the racetrack. He painted jockeys repeatedly, studying their poses and the play of color in their silks." }
  ],
  'correggio-four-saints-from-left-st-peter-st-martha-st-mary-m': [
    { question: "What defines Correggio's religious paintings?", answer: "<strong>Correggio</strong> painted saints with <strong>soft modeling, warm light, and gentle expressions</strong>. His tender, approachable style influenced <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> painters and anticipated the sweetness of later Rococo religious art." }
  ],
  'john-singer-sargent-franko39meara': [
    { question: "Who was Frank O'Meara?", answer: "<strong>Frank O'Meara</strong> was an Irish painter who worked in the artists' colony at Grez-sur-Loing, France. <a href=\"/apps/masterpieces/artist/john-singer-sargent\"><strong>Sargent</strong></a> painted this portrait of his fellow artist with characteristic informal elegance." }
  ],
  'ernst-ludwig-kirchner-frauenkirche': [
    { question: "What building is depicted?", answer: "The <strong>Frauenkirche</strong> (Church of Our Lady) is a landmark in Dresden. <a href=\"/apps/masterpieces/artist/ernst-ludwig-kirchner\"><strong>Kirchner</strong></a> painted it with angular <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> distortion, transforming familiar architecture into vibrant, emotionally charged imagery." }
  ],
  'juan-de-valdes-leal-fray-pedro-fern225ndez-pecha': [
    { question: "What religious orders did Valdés Leal paint for?", answer: "<strong>Valdés Leal</strong> worked extensively for Seville's religious communities. His portraits of <strong>monks and friars</strong> combine intense psychological observation with the spiritual fervor of Spanish <a href=\"/apps/masterpieces/movement/baroque\"><strong>Baroque</strong></a> art." }
  ],
  'pierre-auguste-renoir-frederic-bazille-painting-the-heron-frederic-bazil': [
    { question: "What makes this portrait significant?", answer: "<a href=\"/apps/masterpieces/artist/pierre-auguste-renoir\"><strong>Renoir</strong></a> painted his friend <strong>Bazille at work</strong>, capturing the intimate atmosphere of the early <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> circle. Bazille died in the Franco-Prussian War just a few years later at age 28." }
  ],
  'max-liebermann-free-hour-at-the-amsterdam-orphanage': [
    { question: "What subjects attracted Liebermann?", answer: "<strong>Max Liebermann</strong> painted <strong>orphanages, schools, and working people</strong> with social realism influenced by Dutch art. He became Germany's leading <a href=\"/apps/masterpieces/movement/impressionism\"><strong>Impressionist</strong></a> and later president of the Berlin Academy." }
  ],
  'frida-kahlo-frida-and-the-miscarriage': [
    { question: "What personal event does this depict?", answer: "<a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Frida Kahlo</strong></a> suffered a <strong>miscarriage in Detroit in 1932</strong>. She transformed her grief into art, creating one of her most raw and personal works about the pain of losing a pregnancy." }
  ],
  'frida-kahlo-frieda-and-diego-rivera': [
    { question: "When did Kahlo paint this?", answer: "<a href=\"/apps/masterpieces/artist/frida-kahlo\"><strong>Kahlo</strong></a> painted this <strong>wedding portrait</strong> shortly after marrying Diego Rivera in 1929. She appears small beside the large Rivera, hinting at the power dynamics of their famously turbulent relationship." }
  ],
  'george-stubbs-frontal-view-of-the-skeleton-of-a-horse-study-no-1': [
    { question: "What was Stubbs's anatomical project?", answer: "<a href=\"/apps/masterpieces/artist/george-stubbs\"><strong>Stubbs</strong></a> spent 18 months dissecting horses to produce <strong>The Anatomy of the Horse</strong> (1766). These precise skeletal studies gave him unmatched knowledge of equine form, visible in all his paintings." }
  ],
  'rembrandt-full-length-portrait-of-a-standing-man': [
    { question: "How did Rembrandt handle full-length portraits?", answer: "<a href=\"/apps/masterpieces/artist/rembrandt\"><strong>Rembrandt's</strong></a> full-length portraits use <strong>dramatic lighting</strong> to draw attention to the face and hands while the dark clothing merges with the background. This technique focuses the viewer on character and expression." }
  ],
  'caspar-david-friedrich-funeral-scene-at-the-beach': [
    { question: "What themes recur in Friedrich's coastal scenes?", answer: "<a href=\"/apps/masterpieces/artist/caspar-david-friedrich\"><strong>Friedrich</strong></a> often placed <strong>death and mourning</strong> against the vast sea and sky. His Baltic coast scenes use the ocean's immensity to reflect on human mortality, a core <a href=\"/apps/masterpieces/movement/romanticism\"><strong>Romantic</strong></a> preoccupation." }
  ],
  'otto-mueller-f252nf-akte-am-wasser': [
    { question: "What does this title mean?", answer: "\"<strong>Fünf Akte Am Wasser</strong>\" means \"Five Nudes at the Water.\" <a href=\"/apps/masterpieces/artist/otto-mueller\"><strong>Mueller's</strong></a> characteristic theme of nude figures in nature reflects the <a href=\"/apps/masterpieces/movement/expressionism\"><strong>Expressionist</strong></a> desire to reconnect with primal, unspoiled life." }
  ],
  'maurice-quentin-de-la-tour-gabriel-bernard-de-rieux': [
    { question: "What medium did de La Tour specialize in?", answer: "<strong>Maurice Quentin de La Tour</strong> was the greatest <strong>pastel portraitist</strong> of 18th-century France. His large-scale pastel portraits captured the elegance and personality of French aristocracy with vivid immediacy." }
  ],
  'wassily-kandinsky-gabriele-munter-painting': [
    { question: "Who was Gabriele Münter?", answer: "<strong>Gabriele Münter</strong> was <a href=\"/apps/masterpieces/artist/wassily-kandinsky\"><strong>Kandinsky's</strong></a> partner and a significant painter in her own right. She co-founded the Blue Rider group and later preserved many of Kandinsky's early works during the Nazi era." }
  ],
  'bronzino-galatea-and-pygmalion': [
    { question: "What myth is depicted?", answer: "<strong>Pygmalion</strong> was a sculptor who fell in love with his own statue, which Venus brought to life as Galatea. <strong>Bronzino</strong> painted this Ovidian tale with the cool elegance and polished surfaces of <a href=\"/apps/masterpieces/movement/mannerism\"><strong>Mannerism</strong></a>." }
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
