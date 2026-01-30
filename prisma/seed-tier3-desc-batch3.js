const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const faqs = {
  'adriaen-van-ostade-the-schoolmaster': [
    { question: "Where is The Schoolmaster displayed?", answer: "This painting is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. It's one of several Van Ostade works in the Met's Dutch paintings galleries." },
    { question: "What does The Schoolmaster depict?", answer: "The scene shows a <strong>village schoolmaster teaching children</strong>. Education scenes were a recognized sub-genre in Dutch art, often carrying moral messages about the value of learning and discipline." },
    { question: "Who painted The Schoolmaster?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> created this work. Beyond tavern scenes, he painted many aspects of <strong>Dutch village life</strong> during the <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Golden Age</strong></a>, including schools, markets, and homes." }
  ],
  'adriaen-van-ostade-the-violinist': [
    { question: "What does The Violinist depict?", answer: "The painting shows a <strong>peasant playing a violin</strong>. Music was a constant presence in Van Ostade's work. He painted fiddlers, hurdy-gurdy players, and flutists throughout his long career." },
    { question: "Who painted The Violinist?", answer: "<a href=\"/apps/masterpieces/artist/adriaen-van-ostade\"><strong>Adriaen van Ostade</strong></a> painted this scene. He produced over <strong>800 works</strong> during his career, nearly all focused on <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> peasant life." },
    { question: "What style is this painting?", answer: "It's a Dutch genre painting in the tradition of <strong>peasant character studies</strong>. Van Ostade's warm palette and soft lighting give his musicians a gentle dignity that sets his work apart from cruder peasant caricatures." }
  ],
  'aelbert-cuyp-ubbergen-castle': [
    { question: "Where is Ubbergen Castle displayed?", answer: "This painting hangs at the <a href=\"/apps/masterpieces/museum/national-gallery\"><strong>National Gallery</strong></a> in London. The museum holds a strong selection of <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> landscapes." },
    { question: "Who painted Ubbergen Castle?", answer: "<a href=\"/apps/masterpieces/artist/aelbert-cuyp\"><strong>Aelbert Cuyp</strong></a> painted this landscape. He was Dordrecht's leading painter, famous for bathing Dutch scenery in <strong>warm, golden light</strong> influenced by Italian landscapes." },
    { question: "What makes Cuyp's landscapes distinctive?", answer: "Cuyp is known for his <strong>golden atmospheric light</strong>, sometimes called the \"Dutch Claude\" after Claude Lorrain. He painted rivers, cattle, and castles under luminous skies that gave ordinary Dutch scenery a Mediterranean warmth." }
  ],
  'aelbert-cuyp-view-of-the-groote-kerk-in-dordrecht-from-the-rive': [
    { question: "Where is this painting displayed?", answer: "This view of Dordrecht is at <a href=\"/apps/masterpieces/museum/met\"><strong>The Metropolitan Museum of Art</strong></a> in New York. Cuyp's river scenes are among the Met's most admired Dutch landscapes." },
    { question: "What does this painting show?", answer: "The scene captures the <strong>Groote Kerk (Great Church) in Dordrecht</strong> seen from across the River Maas. Cuyp painted his hometown repeatedly, always with that signature golden light reflecting off the water." },
    { question: "Who was Aelbert Cuyp?", answer: "<a href=\"/apps/masterpieces/artist/aelbert-cuyp\"><strong>Aelbert Cuyp</strong></a> (1620-1691) was a <a href=\"/apps/masterpieces/movement/dutch-golden-age\"><strong>Dutch Golden Age</strong></a> landscape painter based in Dordrecht. British collectors especially prized his work, and he influenced <strong>J.M.W. Turner</strong> and John Constable." }
  ],
  'aelbert-cuyp-the-passage-boat': [
    { question: "Where is The Passage Boat displayed?", answer: "This painting belongs to the <a href=\"/apps/masterpieces/museum/royal-collection-uk\"><strong>Royal Collection</strong></a> in the United Kingdom. British royalty and aristocrats were among Cuyp's most enthusiastic collectors." },
    { question: "What does The Passage Boat depict?", answer: "The painting shows a <strong>ferry boat on a Dutch river</strong>, bathed in Cuyp's characteristic golden light. Passage boats were the main public transport between Dutch towns in the 17th century." },
    { question: "Who painted The Passage Boat?", answer: "<a href=\"/apps/masterpieces/artist/aelbert-cuyp\"><strong>Aelbert Cuyp</strong></a> painted this scene. His <strong>luminous river landscapes</strong> were more popular in England than in the Netherlands, and many of his best works ended up in British collections." }
  ],
  'akseli-gallen-kallela-the-defense-of-the-sampo': [
    { question: "Where is The Defense of the Sampo displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/turku-art-museum-turku-finland\"><strong>Turku Art Museum</strong></a> in Finland. It's one of the museum's most important works of Finnish national art." },
    { question: "What does The Defense of the Sampo depict?", answer: "The painting illustrates a scene from the <strong>Kalevala</strong>, Finland's national epic. The hero Väinämöinen battles the witch Louhi for the Sampo, a magical device that brings prosperity." },
    { question: "Who painted The Defense of the Sampo?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> painted this around 1896. He's Finland's most celebrated painter, known for bringing the <strong>Kalevala mythology</strong> to life in bold, dramatic compositions." }
  ],
  'akseli-gallen-kallela-the-fratricide': [
    { question: "Where is The Fratricide displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/finnish-national-gallery-helsinki-finland\"><strong>Finnish National Gallery</strong></a> in Helsinki. The museum holds the most complete collection of Gallen-Kallela's work." },
    { question: "What does The Fratricide depict?", answer: "The scene comes from the <strong>Kalevala epic</strong>. It shows the moment of brother killing brother, painted with raw violence. Gallen-Kallela didn't soften the mythology's dark themes." },
    { question: "Who was Akseli Gallen-Kallela?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> (1865-1931) was Finland's leading painter. He devoted much of his career to illustrating the <strong>Kalevala</strong>, helping forge a distinct Finnish national identity through art." }
  ],
  'akseli-gallen-kallela-the-great-black-woodpecker': [
    { question: "Where is The Great Black Woodpecker displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/finnish-national-gallery-helsinki-finland\"><strong>Finnish National Gallery</strong></a> in Helsinki. It's one of Gallen-Kallela's most recognized nature paintings." },
    { question: "What does this painting show?", answer: "The work depicts a <strong>great black woodpecker</strong> in the Finnish wilderness. Gallen-Kallela painted wildlife and forest scenes with the same intensity he brought to his Kalevala mythology paintings." },
    { question: "Who painted The Great Black Woodpecker?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> created this work. Beyond his famous Kalevala cycle, he was a skilled <strong>nature painter</strong> who captured the Finnish landscape with deep personal connection." }
  ],
  'akseli-gallen-kallela-rustic-life': [
    { question: "Where is Rustic Life displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/g246sta-serlachius-fine-arts-foundation-m228ntt228\"><strong>Gösta Serlachius Fine Arts Foundation</strong></a> in Mänttä, Finland. The foundation holds a significant collection of Finnish art." },
    { question: "What does Rustic Life depict?", answer: "The painting shows <strong>Finnish rural life</strong>. Gallen-Kallela painted both mythological epics and scenes of everyday country existence, drawing on his deep connection to the Finnish countryside." },
    { question: "Who painted Rustic Life?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> painted this work. He spent long periods living in the <strong>Finnish wilderness</strong>, which shaped both his art and his role as a symbol of Finnish national identity." }
  ],
  'akseli-gallen-kallela-marie-gall233n-at-the-kuhmoniemibridge': [
    { question: "What does this painting depict?", answer: "The painting shows <strong>Marie Gallén, the artist's wife</strong>, at a bridge in Kuhmoniemi. It's a personal, intimate work capturing a quiet moment during the couple's time in the Finnish countryside." },
    { question: "Who painted this portrait?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> painted his wife Marie. Beyond his famous <strong>Kalevala mythological scenes</strong>, he created tender portraits of family and friends." },
    { question: "Who was Akseli Gallen-Kallela?", answer: "Gallen-Kallela (1865-1931) is <strong>Finland's most celebrated painter</strong>. He built his reputation on dramatic Kalevala illustrations but also painted landscapes, portraits, and nature studies throughout his career." }
  ],
  'akseli-gallen-kallela-shepherd-boy-from-paanaj228rvi': [
    { question: "What does Shepherd Boy from Paanajärvi depict?", answer: "The painting shows a <strong>young shepherd in the Paanajärvi region</strong> of Finnish Lapland. Gallen-Kallela traveled extensively through northern Finland, documenting its people and landscapes." },
    { question: "Who painted this work?", answer: "<a href=\"/apps/masterpieces/artist/akseli-gallen-kallela\"><strong>Akseli Gallen-Kallela</strong></a> created this painting. His interest in <strong>remote Finnish communities</strong> reflected the broader Nordic national romantic movement of the late 19th century." },
    { question: "What movement does this painting represent?", answer: "The work fits within <strong>Nordic National Romanticism</strong>, a movement that used folk culture and landscape to build national identity. Gallen-Kallela was its leading Finnish figure, alongside Sweden's Carl Larsson and Norway's Edvard Munch." }
  ],
  'albert-bierstadt-the-matterhorn': [
    { question: "What does The Matterhorn depict?", answer: "The painting captures the <strong>Matterhorn peak in the Swiss Alps</strong>, one of Europe's most iconic mountains. Bierstadt painted it during his European travels, applying the same dramatic light he used for American landscapes." },
    { question: "Who painted The Matterhorn?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Albert Bierstadt</strong></a> painted this landscape. Born in Germany, he became America's foremost painter of the <strong>Western frontier</strong>, known for monumental canvases of Yosemite, the Rockies, and the Sierra Nevada." },
    { question: "What style is this painting?", answer: "Bierstadt worked in the <strong>Hudson River School</strong> tradition, emphasizing dramatic light, vast scale, and sublime nature. His European mountain scenes share the same luminous quality as his famous American <a href=\"https://luxurywallart.com/collections/mountain-art\" target=\"_blank\" rel=\"noopener\"><strong>mountain landscapes</strong></a>." }
  ],
  'albert-bierstadt-sunlight-and-shadow-study': [
    { question: "Where is Sunlight and Shadow Study displayed?", answer: "This painting is at the <a href=\"/apps/masterpieces/museum/newark-museum-newark-nj-us\"><strong>Newark Museum</strong></a> in Newark, New Jersey. The museum holds a notable collection of American art." },
    { question: "Who painted this study?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Albert Bierstadt</strong></a> created this light study. He often painted smaller studies outdoors before completing his famous <strong>large-scale landscapes</strong> in the studio." },
    { question: "What is the Hudson River School?", answer: "It's a 19th-century American art movement focused on <strong>romantic landscape painting</strong>. Bierstadt, along with Thomas Cole and Frederic Edwin Church, painted the American wilderness as a place of beauty and spiritual power." }
  ],
  'albert-bierstadt-westphalian-landscape': [
    { question: "What does Westphalian Landscape depict?", answer: "The painting shows the <strong>countryside of Westphalia</strong>, the German region where Bierstadt was born. He painted European landscapes during his training years before turning to the American West." },
    { question: "Who painted Westphalian Landscape?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Albert Bierstadt</strong></a> painted this early landscape. Born in Solingen, Germany in 1830, he emigrated to America as a child but returned to study at the <strong>Düsseldorf Academy</strong> in the 1850s." },
    { question: "What style is this painting?", answer: "The work reflects the <strong>Düsseldorf school</strong> of landscape painting, where Bierstadt trained. The precise detail and atmospheric effects he learned there became the foundation for his later <a href=\"https://luxurywallart.com/collections/landscapes\" target=\"_blank\" rel=\"noopener\"><strong>American landscapes</strong></a>." }
  ],
  'albert-bierstadt-staubbach-falls-near-lauterbrunnen-switzerland': [
    { question: "What does this painting depict?", answer: "The painting shows <strong>Staubbach Falls in Lauterbrunnen, Switzerland</strong>, a 297-meter waterfall that inspired poets and painters alike. Bierstadt captured its misty plunge with the dramatic light effects he's known for." },
    { question: "Who painted Staubbach Falls?", answer: "<a href=\"/apps/masterpieces/artist/albert-bierstadt\"><strong>Albert Bierstadt</strong></a> painted this Swiss landscape. His European waterfall and mountain scenes proved he could handle <strong>sublime Alpine scenery</strong> with the same power he brought to Yosemite and the Rockies." },
    { question: "What movement does Bierstadt belong to?", answer: "Bierstadt is a key figure in the <strong>Hudson River School</strong>, America's first major art movement. These painters celebrated the grandeur of nature, using dramatic light and vast scale to convey awe and spiritual wonder." }
  ]
};

async function seed() {
  let ok = 0, fail = 0;
  for (const [slug, faqData] of Object.entries(faqs)) {
    try {
      await prisma.artwork.update({
        where: { slug },
        data: { faqs: faqData, updatedAt: new Date() }
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
