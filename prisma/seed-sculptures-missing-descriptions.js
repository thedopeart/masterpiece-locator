const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Adding Missing Sculpture Descriptions ===\n');

  const updates = [
    {
      slug: 'large-two-forms-moore',
      description: `<p><a href="/apps/masterpieces/artist/henry-moore"><strong>Henry Moore</strong></a> created <strong>Large Two Forms</strong> in 1966, one of his most monumental works exploring the dialogue between two abstract organic shapes. The bronze sculpture features two massive biomorphic forms facing each other, their curves suggesting both confrontation and embrace. Moore described such pairings as representing fundamental human relationships.</p>

<p>The sculpture exists in several locations worldwide, including the Art Gallery of Ontario in Toronto and outdoor sites in Germany and the UK. Moore intended his large bronzes for outdoor display, where changing light and weather become part of the viewing experience. The two forms create a negative space between them that becomes as important as the forms themselves.</p>

<p>Moore's two-piece sculptures evolved from his earlier reclining figures, breaking the human form into separate elements that maintain tension across the gap. At 20 feet long, Large Two Forms invites viewers to walk between its massive curves, experiencing the work from multiple perspectives and becoming part of its spatial dialogue.</p>`,
      faqs: [
        {
          question: "Where can I see Large Two Forms?",
          answer: "Casts exist at the <strong>Art Gallery of Ontario</strong> in Toronto, the Yorkshire Sculpture Park in England, and various outdoor locations. <a href=\"/apps/masterpieces/artist/henry-moore\"><strong>Moore</strong></a> created multiple authorized bronze casts."
        },
        {
          question: "How big is Large Two Forms?",
          answer: "The sculpture measures approximately <strong>610 centimeters long</strong> (20 feet). The two separate forms face each other, creating an implied space between them that viewers can enter."
        },
        {
          question: "What do the two forms represent?",
          answer: "<a href=\"/apps/masterpieces/artist/henry-moore\"><strong>Moore</strong></a> saw his two-piece sculptures as representing <strong>fundamental relationships</strong>, whether mother and child, lovers, or abstract dialogue. The space between the forms is as important as the forms themselves."
        },
        {
          question: "Why did Moore make sculptures in pieces?",
          answer: "Moore evolved from single reclining figures to <strong>multi-part compositions</strong> that create tension across empty space. Breaking forms apart allowed him to explore relationship dynamics and invite viewers into the sculpture's space."
        }
      ]
    },
    {
      slug: 'la-grande-vitesse-calder',
      description: `<p><a href="/apps/masterpieces/artist/alexander-calder"><strong>Alexander Calder</strong></a> created <strong>La Grande Vitesse</strong> (The Great Speed) in 1969, the first public sculpture funded by the National Endowment for the Arts. The 43-foot-tall <a href="https://luxurywallart.com/collections/red-wall-art" target="_blank" rel="noopener"><strong>vermillion red</strong></a> stabile dominates Calder Plaza in Grand Rapids, Michigan, becoming the city's unofficial symbol and appearing on its logo.</p>

<p>Calder's stabiles, as he called his stationary sculptures, evolved from his famous mobiles. La Grande Vitesse uses curved and angled steel plates bolted together to create dynamic forms that seem to move despite being motionless. The title, French for "high speed" or "rapidity," captures this sense of frozen motion.</p>

<p>The sculpture was dedicated with a three-day festival that drew 100,000 people to Grand Rapids. It transformed public art in America, demonstrating that contemporary abstract sculpture could become a source of civic pride. The work can be walked through and around, its arching forms creating varied perspectives from every angle.</p>`,
      faqs: [
        {
          question: "Where is La Grande Vitesse?",
          answer: "The sculpture stands in <strong>Calder Plaza</strong> in downtown Grand Rapids, Michigan. It was the first public artwork funded by the National Endowment for the Arts and has become the city's symbol."
        },
        {
          question: "How big is La Grande Vitesse?",
          answer: "The stabile stands <strong>13 meters tall</strong> (43 feet) and weighs 42 tons. <a href=\"/apps/masterpieces/artist/alexander-calder\"><strong>Calder</strong></a> designed it so visitors can walk beneath and through its arching forms."
        },
        {
          question: "What does La Grande Vitesse mean?",
          answer: "The title is French for <strong>\"the great speed\"</strong> or \"high velocity.\" Despite being stationary, the sculpture's dynamic curves suggest motion, capturing the energy Calder achieved in his famous mobiles."
        },
        {
          question: "Why is it called a stabile?",
          answer: "Calder coined <strong>\"stabile\"</strong> for his stationary abstract sculptures, contrasting with his moving \"mobiles.\" Both terms were suggested by artist Marcel Duchamp. Stabiles use the same organic forms as mobiles but remain fixed."
        }
      ]
    },
    {
      slug: 'clothespin-oldenburg',
      description: `<p><a href="/apps/masterpieces/artist/claes-oldenburg"><strong>Claes Oldenburg</strong></a> created <strong>Clothespin</strong> in 1976, a 45-foot steel sculpture standing in Centre Square, Philadelphia. The work transforms a mundane household object into monumental public art, its two prongs suggesting an embracing couple. Oldenburg noted the formal similarity to <a href="/apps/masterpieces/artwork/the-kiss-brancusi"><strong>Brâncuși's The Kiss</strong></a>.</p>

<p>Oldenburg pioneered Pop Art sculpture, making oversized versions of everyday objects since the 1960s. Clothespin represents his transition from soft sculptures to hard public monuments. The design maintains the functional appearance of a spring clothespin while scaling it to architectural dimensions.</p>

<p>Philadelphia embraced the work, which faces City Hall across the plaza. The sculpture joins <a href="/apps/masterpieces/artwork/love-sculpture-indiana"><strong>Robert Indiana's LOVE</strong></a> as one of the city's most photographed public artworks. Oldenburg's approach influenced generations of artists who transform the ordinary into the extraordinary through changes in scale and context.</p>`,
      faqs: [
        {
          question: "Where is Clothespin?",
          answer: "The sculpture stands in <strong>Centre Square, Philadelphia</strong>, facing City Hall. It's freely accessible in the public plaza at 15th Street and JFK Boulevard."
        },
        {
          question: "How tall is Clothespin?",
          answer: "The sculpture stands <strong>13.7 meters tall</strong> (45 feet). <a href=\"/apps/masterpieces/artist/claes-oldenburg\"><strong>Oldenburg</strong></a> scaled a common household object to architectural dimensions, transforming the mundane into the monumental."
        },
        {
          question: "What does Clothespin represent?",
          answer: "Oldenburg noted that the two prongs pressing together resemble <strong>an embracing couple</strong>, similar to Brâncuși's The Kiss. The work transforms a humble household object into a symbol of connection and intimacy."
        },
        {
          question: "Why did Oldenburg make giant everyday objects?",
          answer: "<a href=\"/apps/masterpieces/artist/claes-oldenburg\"><strong>Oldenburg</strong></a> believed that <strong>changing scale transforms meaning</strong>. Making ordinary objects monumental forces viewers to see them fresh, questioning assumptions about what deserves artistic attention."
        }
      ]
    },
    {
      slug: 'tilted-arc-serra',
      description: `<p><a href="/apps/masterpieces/artist/richard-serra"><strong>Richard Serra</strong></a> created <strong>Tilted Arc</strong> in 1981, a 120-foot-long, 12-foot-high wall of rusted Cor-Ten steel that curved across Federal Plaza in Manhattan. The sculpture became the most controversial public artwork in American history, destroyed by the government in 1989 after years of debate about art, public space, and community consent.</p>

<p>Serra designed the sculpture specifically for its site, tilting the wall one foot off vertical to create an imposing presence that bisected the plaza. Office workers complained it blocked their path and created a hostile environment. Supporters argued that removing site-specific art would destroy the work itself, since it had no meaning elsewhere.</p>

<p>A public hearing in 1985 attracted hundreds of speakers on both sides. The government voted to remove the sculpture despite artistic protests. In 1989, Tilted Arc was cut into three pieces and placed in a government parking lot in Brooklyn. Serra refused to reinstall it elsewhere, maintaining that to remove it was to destroy it. The controversy permanently changed how public art commissions are managed in America.</p>`,
      faqs: [
        {
          question: "Where is Tilted Arc now?",
          answer: "The sculpture was <strong>destroyed in 1989</strong>, cut into three pieces and stored in a government lot. <a href=\"/apps/masterpieces/artist/richard-serra\"><strong>Serra</strong></a> refused relocation, arguing site-specific art cannot exist apart from its intended location."
        },
        {
          question: "Why was Tilted Arc controversial?",
          answer: "Office workers complained the <strong>120-foot steel wall blocked their path</strong> across Federal Plaza. A 1985 hearing drew hundreds of speakers. The government voted for removal despite artistic protest, destroying it in 1989."
        },
        {
          question: "How big was Tilted Arc?",
          answer: "The sculpture measured <strong>3.7 meters tall by 36.6 meters long</strong> (12 × 120 feet), a curving wall of Cor-Ten steel tilted one foot off vertical. It bisected the entire Federal Plaza in lower Manhattan."
        },
        {
          question: "What happened after Tilted Arc was removed?",
          answer: "The controversy <strong>transformed public art policy</strong> in America. Cities now typically require community input before commissioning permanent works. Serra's battle established precedents about artistic rights and public consent."
        }
      ]
    },
    {
      slug: 'matter-of-time-serra',
      description: `<p><a href="/apps/masterpieces/artist/richard-serra"><strong>Richard Serra</strong></a> created <strong>The Matter of Time</strong> between 1994 and 2005, a permanent installation of eight massive weathering steel sculptures at the <strong>Guggenheim Museum Bilbao</strong>. The works range from simple torqued ellipses to complex double-curved forms that visitors walk through, experiencing disorientation and shifting perspectives.</p>

<p>Serra's sculptures use mathematical formulas to generate their curves, yet the experience is purely physical. Walking between the leaning walls creates vertigo and uncertainty about one's position in space. The artist describes the works as "drawings in space" that unfold over time as viewers move through them.</p>

<p>The installation occupies an entire gallery measuring 130 meters long, the largest gallery in any museum. Frank Gehry designed the Bilbao museum with this space specifically for Serra's work. The sculptures' rusted surface continues to develop patina, changing slowly over decades. This is considered Serra's masterpiece, a defining work of late 20th-century sculpture.</p>`,
      faqs: [
        {
          question: "Where is The Matter of Time?",
          answer: "The installation permanently occupies a 130-meter gallery at the <strong>Guggenheim Museum Bilbao</strong> in Spain. Frank Gehry designed the space specifically for <a href=\"/apps/masterpieces/artist/richard-serra\"><strong>Serra's</strong></a> work."
        },
        {
          question: "How many sculptures are in The Matter of Time?",
          answer: "The installation comprises <strong>eight massive steel sculptures</strong> created between 1994 and 2005. They range from simple torqued ellipses to complex forms with double-curved walls."
        },
        {
          question: "Can you walk through Serra's sculptures?",
          answer: "Yes. <a href=\"/apps/masterpieces/artist/richard-serra\"><strong>Serra</strong></a> designed the works to be <strong>experienced from inside</strong>. Walking between the leaning, curving walls creates disorientation and shifting perspectives that unfold over time."
        },
        {
          question: "What is weathering steel?",
          answer: "Weathering steel (Cor-Ten) develops a <strong>protective rust patina</strong> that stabilizes without deteriorating. Serra favors it because the surface continues changing slowly over decades, making time visible in the material."
        }
      ]
    },
    {
      slug: 'another-place-gormley',
      description: `<p><a href="/apps/masterpieces/artist/antony-gormley"><strong>Antony Gormley</strong></a> created <strong>Another Place</strong> in 1997, an installation of 100 cast iron figures spread across three kilometers of Crosby Beach near Liverpool, England. Each figure is a cast of the artist's own body, standing in the surf and sand facing the sea. The tides alternately reveal and submerge them.</p>

<p>The figures stand at various depths, some on dry sand, others submerged to their chests at high tide. Over the years, barnacles and seaweed have colonized the iron bodies, making each unique. Gormley describes them as "looking expectantly to the horizon," a meditation on migration, time, and humanity's relationship with nature.</p>

<p>Originally planned as a temporary installation, public demand led to its permanence in 2007. The figures now attract hundreds of thousands of visitors yearly. The changing tides, light, and weather transform the experience constantly. At low tide, visitors can walk among the entire field of figures; at high tide, only the most distant remain visible.</p>`,
      faqs: [
        {
          question: "Where is Another Place?",
          answer: "The 100 figures stand along <strong>Crosby Beach</strong> near Liverpool, England, spread across 3 kilometers of coastline. The site is freely accessible. Figures extend from the shore into the sea."
        },
        {
          question: "How many figures are in Another Place?",
          answer: "The installation comprises <strong>100 cast iron figures</strong>, each made from a mold of <a href=\"/apps/masterpieces/artist/antony-gormley\"><strong>Gormley's</strong></a> own body. They weigh 650 kg each and stand at varying depths along the beach."
        },
        {
          question: "What happens to the figures at high tide?",
          answer: "The tides <strong>submerge many figures</strong> twice daily. Some stand on dry sand; others are chest-deep at high tide. The constant submersion has covered them in barnacles and seaweed, making each unique."
        },
        {
          question: "Was Another Place meant to be permanent?",
          answer: "Originally planned as temporary, <strong>public demand made it permanent</strong> in 2007. The figures were initially installed in Germany, Belgium, and Norway before finding their permanent home at Crosby Beach."
        }
      ]
    },
    {
      slug: 'forever-bicycles-ai-weiwei',
      description: `<p><a href="/apps/masterpieces/artist/ai-weiwei"><strong>Ai Weiwei</strong></a> created <strong>Forever Bicycles</strong> beginning in 2011, massive installations using thousands of interconnected Chinese bicycles. The sculptures form architectural structures, sometimes as large as three stories tall, transforming a symbol of Chinese daily life into monumental abstract art. The largest versions use over 3,000 bicycles.</p>

<p>The "Forever" brand bicycle has been manufactured in Shanghai since 1940, once symbolizing Chinese modernization and the aspiration for personal mobility. Ai strips the bicycles of their function, locking them together into patterns that recall both traditional Chinese lattice work and contemporary mass production. Individual bicycles lose identity in the collective structure.</p>

<p>Various versions have been installed at museums and public spaces worldwide, including the Taipei Fine Arts Museum, Toronto's Nathan Phillips Square, and numerous European locations. Each installation adapts to its specific site while using the same basic elements. The work comments on China's rapid transformation, individual versus collective identity, and the fate of traditional culture in the modern era.</p>`,
      faqs: [
        {
          question: "Where can I see Forever Bicycles?",
          answer: "<a href=\"/apps/masterpieces/artist/ai-weiwei\"><strong>Ai Weiwei</strong></a> has created multiple installations worldwide, including at the <strong>Taipei Fine Arts Museum</strong>, Toronto's Nathan Phillips Square, and various European venues. Each adapts to its specific location."
        },
        {
          question: "How many bicycles does Ai Weiwei use?",
          answer: "The installations range from hundreds to <strong>over 3,000 bicycles</strong>. The largest versions form structures up to three stories tall. Each bicycle is a genuine Forever brand, manufactured in Shanghai."
        },
        {
          question: "Why does Ai Weiwei use Forever bicycles?",
          answer: "The \"Forever\" brand has been made in Shanghai since 1940, symbolizing <strong>Chinese modernization and mobility</strong>. Ai transforms this everyday object into monumental art, commenting on mass production and collective identity."
        },
        {
          question: "Can the bicycles still be ridden?",
          answer: "No. Ai <strong>locks the bicycles together</strong> into rigid structures, removing their function. This transformation of useful objects into non-functional art comments on China's rapid change and the loss of traditional ways of life."
        }
      ]
    },
    {
      slug: 'walking-man-rodin',
      description: `<p><a href="/apps/masterpieces/artist/auguste-rodin"><strong>Auguste Rodin</strong></a> created <strong>The Walking Man</strong> around 1877-1907, a headless, armless bronze torso captured in mid-stride. The figure represents Rodin's revolutionary approach to sculpture: rather than depicting complete idealized bodies, he presented fragments that carry their own expressive power. The missing parts are not damage but deliberate artistic choice.</p>

<p>Rodin developed the figure from studies for his monumental <strong>Saint John the Baptist Preaching</strong>. He recognized that the torso and legs alone, stripped of head and arms, communicated motion and energy more powerfully than any complete figure. The Walking Man became influential in modern sculpture's embrace of the fragment.</p>

<p>Bronze casts exist in the <strong>Musée Rodin</strong> in Paris and other major museums. The sculpture influenced <a href="/apps/masterpieces/artist/alberto-giacometti"><strong>Giacometti</strong></a> and other 20th-century sculptors who found expressive power in incomplete forms. Rodin proved that sculpture need not be whole to be complete, that the fragment could achieve its own formal and emotional perfection.</p>`,
      faqs: [
        {
          question: "Where can I see The Walking Man?",
          answer: "Bronze casts are at the <strong>Musée Rodin</strong> in Paris and other major museums. <a href=\"/apps/masterpieces/artist/auguste-rodin\"><strong>Rodin</strong></a> made multiple versions; the largest stands over 2 meters tall."
        },
        {
          question: "Why is The Walking Man missing its head and arms?",
          answer: "The missing parts are <strong>Rodin's deliberate choice</strong>, not damage. He found that the torso and legs alone expressed motion more powerfully than a complete figure. This revolutionary approach influenced all modern sculpture."
        },
        {
          question: "How tall is The Walking Man?",
          answer: "The largest version stands <strong>213 centimeters tall</strong> (about 7 feet). Rodin created it from studies for his Saint John the Baptist, recognizing the fragment's independent expressive power."
        },
        {
          question: "How did The Walking Man influence modern art?",
          answer: "Rodin proved that <strong>fragments could be complete artworks</strong>. <a href=\"/apps/masterpieces/artist/alberto-giacometti\"><strong>Giacometti</strong></a> and other modern sculptors followed his example, finding expressive power in incomplete forms that suggest rather than describe."
        }
      ]
    }
  ];

  let updated = 0;

  for (const artwork of updates) {
    const result = await prisma.artwork.updateMany({
      where: { slug: artwork.slug },
      data: {
        description: artwork.description,
        faqs: artwork.faqs,
        updatedAt: new Date(),
      }
    });

    if (result.count > 0) {
      console.log(`Updated: ${artwork.slug}`);
      updated++;
    } else {
      console.log(`Not found: ${artwork.slug}`);
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Updated: ${updated} sculptures with descriptions and FAQs`);

  // Show stats
  const totalSculptures = await prisma.artwork.count({ where: { artworkType: 'sculpture' } });
  const sculpturesWithDesc = await prisma.artwork.count({
    where: { artworkType: 'sculpture', description: { not: null } }
  });
  console.log(`\nTotal sculptures: ${totalSculptures}`);
  console.log(`With descriptions: ${sculpturesWithDesc}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
