const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('=== Fixing Broken Internal Links ===\n');

  // Define slug replacements
  const museumReplacements = {
    // Louvre variants
    'louvre': 'louvre-paris-france',
    'louvre-museum': 'louvre-paris-france',
    'musee-du-louvre': 'louvre-paris-france',
    'the-louvre': 'louvre-paris-france',

    // Prado variants
    'prado': 'museo-del-prado-madrid-spain',
    'museo-del-prado': 'museo-del-prado-madrid-spain',

    // Uffizi variants
    'uffizi': 'uffizi-gallery-florence-italy',
    'uffizi-gallery': 'uffizi-gallery-florence-italy',

    // National Gallery London
    'national-gallery-london': 'national-gallery',
    'national-gallery-london-uk': 'national-gallery',

    // Hermitage
    'hermitage-museum-saint-petersburg-russia': 'hermitage',
    'hermitage-museum': 'hermitage',

    // Met variants
    'metropolitan-museum-of-art-met-new-york-city-ny-us': 'met',
    'metropolitan-museum': 'met',
    'metropolitan-museum-of-art': 'met',
    'the-metropolitan-museum-of-art': 'met',

    // Orsay
    'mus233e-d39orsay-paris-france': 'musee-dorsay',
    'musee-dorsay-paris-france': 'musee-dorsay',

    // Other major museums
    'kunsthistorisches-museum-vienna-austria': 'kunsthistorisches-museum',
    'rijksmuseum-amsterdam-netherlands': 'rijksmuseum',
    'tretyakov-gallery-moscow-russia': 'tretyakov-gallery',
    'museum-of-modern-art-moma': 'moma',
    'art-institute-of-chicago': 'art-institute-chicago',
    'art-institute-of-chicago-chicago-il-us-national-ga': 'art-institute-chicago',
    'borghese-gallery-rome': 'borghese-gallery-rome-italy',
    'alte-pinakothek-munich-germany': 'alte-pinakothek',
    'philadelphia-museum-of-art-philadelphia-pa-us': 'philadelphia-museum-of-art',
    'national-gallery-of-art-washington-dc-us': 'national-gallery-of-art',
    'kunstmuseum-basel-basel-switzerland': 'kunstmuseum-basel',
    'vatican-museums-rome': 'vatican-museums',
    'vatican-museums-vatican-city': 'vatican-museums',

    // Tate
    'tate-modern-london': 'tate-modern-london-uk',
    'tate-modern': 'tate-modern-london-uk',
    'tate-britain-london-uk': 'tate-britain',

    // Courtauld
    'courtauld-gallery': 'courtauld-gallery-london',

    // Boston MFA
    'museum-of-fine-arts-boston': 'mfa-boston',
    'museum-of-fine-arts-mfa-boston-ma-us': 'mfa-boston',

    // British Museum
    'british-museum-london-uk': 'british-museum',
    'british-museum-london': 'british-museum',

    // Berlin museums
    'staatliche-museen-zu-berlin-berlin-germany': 'gem228ldegalerie-berlin-germany',

    // Wallace Collection
    'wallace-collection-london-uk': 'wallace-collection',
    'wallace-collection-london': 'wallace-collection',

    // Wadsworth
    'wadsworth-atheneum-hartford-ct-us': 'wadsworth-atheneum',

    // Rembrandt House - doesn't exist, remove links
    'rembrandt-house-museum': '',
    'his-house-this-is-now-recreated-in-the-original-ro': '',

    // Brooklyn Museum
    'brooklyn-museum-new-york-city-ny-us': 'brooklyn-museum',

    // Kröller-Müller
    'kr246llerm252ller-museum-otterlo-netherlands': 'kroeller-mueller-museum',
    'kroller-muller-museum': 'kroeller-mueller-museum',

    // MoMA variant
    'museum-of-modern-art-moma-new-york-city-ny-us': 'moma',

    // Kunsthaus Zurich
    'kunsthaus-z252rich-z252rich-switzerland': 'kunsthaus-zurich',
    'kunsthaus-zurich-switzerland': 'kunsthaus-zurich',

    // Van Gogh Museum
    'van-gogh-museum-amsterdam-netherlands': 'van-gogh-museum',
    'van-gogh-museum-amsterdam': 'van-gogh-museum',

    // Thyssen
    'thyssen-bornemisza-museum': 'thyssenbornemisza-museum-madrid-spain',
    'thyssen-bornemisza-museum-madrid': 'thyssenbornemisza-museum-madrid-spain',

    // Frick
    'frick-collection-new-york-city-ny-us': 'frick-collection',
    'frick-collection-new-york': 'frick-collection',

    // Brera
    'palazzo-brera-milan-italy': 'pinacoteca-di-brera',
    'pinacoteca-brera': 'pinacoteca-di-brera',
    'brera-milan': 'pinacoteca-di-brera',

    // Belgium Royal Museums
    'royal-museums-of-fine-arts-of-belgium-brussels-bel': 'royal-museums-belgium',
    'royal-museums-of-fine-arts-of-belgium': 'royal-museums-belgium',

    // Dulwich
    'dulwich-picture-gallery-london-uk': 'dulwich-picture-gallery',
    'dulwich-picture-gallery-london': 'dulwich-picture-gallery',

    // Neue Pinakothek
    'neue-pinakothek-munich-germany': 'neue-pinakothek',
    'neue-pinakothek-munich': 'neue-pinakothek',

    // Groeningemuseum
    'groeningemuseum-bruges-belgium': 'groeningemuseum',
    'groeningemuseum-bruges': 'groeningemuseum',

    // State Hermitage
    'state-hermitage-museum': 'hermitage',
    'state-hermitage-museum-st-petersburg': 'hermitage',

    // Accademia Venice
    'gallerie-dellaccademia-venice': 'gallerie-dell-accademia-venice',
    'accademia-gallery-venice': 'gallerie-dell-accademia-venice',

    // Munch Museum
    'munch-museum-oslo-norway': 'munch-museum',
    'munch-museum-oslo': 'munch-museum',

    // Palazzo Pitti
    'palazzo-pitti-florence160italy': 'palazzo-pitti',
    'palazzo-pitti-florence-italy': 'palazzo-pitti',
    'palazzo-pitti-florence': 'palazzo-pitti',

    // Gardner Museum - invalid description, remove
    'isabella-stewart-gardner-museum-in-boston-until-it': 'isabella-stewart-gardner',
    'isabella-stewart-gardner-museum-boston': 'isabella-stewart-gardner',

    // Scottish National Gallery
    'scottish-national-gallery-edinburgh-uk': 'scottish-national-gallery',
    'scottish-national-gallery-edinburgh': 'scottish-national-gallery',

    // Clark Art Institute
    'clark-art-institute-williamstown-ma-us': 'clark-art-institute',
    'clark-art-institute-williamstown': 'clark-art-institute',

    // Gemäldegalerie Berlin
    'gemaldegalerie-berlin': 'gem228ldegalerie-berlin-germany',
    'gemaldegalerie-berlin-germany': 'gem228ldegalerie-berlin-germany',

    // Alte Nationalgalerie Berlin
    'alte-nationalgalerie-berlin': 'alte-nationalgalerie-berlin-germany',

    // National Portrait Gallery
    'national-portrait-gallery-london': 'national-portrait-gallery-london-uk',
    'national-portrait-gallery': 'national-portrait-gallery-london-uk',

    // Musée de l'Orangerie
    'musee-de-lorangerie': 'musee-de-lorangerie',
    'orangerie-paris': 'musee-de-lorangerie',
    'musee-orangerie': 'musee-de-lorangerie',
    'mus233e-de-l39orangerie-paris-france': 'musee-de-lorangerie',

    // Boijmans
    'boijmans-van-beuningen': 'museum-boijmans-van-beuningen-rotterdam-netherland',
    'museum-boijmans': 'museum-boijmans-van-beuningen-rotterdam-netherland',

    // Getty
    'j-paul-getty-museum-los-angeles-usa': 'j-paul-getty-museum-los-angeles-ca-us',
    'getty': 'j-paul-getty-museum-los-angeles-ca-us',
    'getty-museum': 'j-paul-getty-museum-los-angeles-ca-us',

    // Versailles
    'versailles': 'ch226teau-de-versailles-versailles-france',

    // National Gallery Victoria
    'national-gallery-of-victoria': 'national-gallery-victoria',
    'national-gallery-of-victoria-ngv-melbourne-austral': 'national-gallery-victoria',

    // Fitzwilliam
    'fitzwilliam-museum': 'fitzwilliam-museum-university-of-cambridge-cambrid',
    'fitzwilliam': 'fitzwilliam-museum-university-of-cambridge-cambrid',

    // Royal Collection
    'royal-collection-buckingham-palace-london-uk': 'royal-collection-uk',
    'royal-collection': 'royal-collection-uk',

    // Saint Bavo Cathedral
    'saint-bavos-cathedral': 'saint-bavo-cathedral',
    'st-bavos-cathedral': 'saint-bavo-cathedral',

    // The Met variant
    'the-met': 'met',

    // Detroit
    'detroit-institute-of-arts-detroit-mi-us': 'detroit-institute-of-arts',

    // Scuola Grande di San Rocco
    'scuola-grande-di-san-rocco': 'scuola-grande-di-san-rocco-venice-italy',

    // Walker Art Gallery
    'walker-art-gallery-liverpool-uk': 'walker-art-gallery',

    // Residenzgalerie
    'residenzgalerie': 'residenzgalerie-salzburg-austria',
    'residenzgalerie-salzburg': 'residenzgalerie-salzburg-austria',

    // Yale Center for British Art
    'yale-center-for-british-art': 'yale-centre-for-british-art-yale-university-new-ha',
    'yale-british-art': 'yale-centre-for-british-art-yale-university-new-ha',

    // Norton Simon
    'norton-simon-museum': 'norton-simon-museum-pasadena-ca-us',

    // Kimbell
    'kimbell-art-museum-fort-worth-tx-us': 'kimbell-art-museum',

    // Phillips Collection
    'philips-collection-washington-dc-us': 'phillips-collection',
    'phillips-collection-washington-dc-us': 'phillips-collection',

    // National Museum Stockholm
    'national-museum-stockholm': 'nationalmuseum-stockholm-sweden',
    'nationalmuseum-stockholm': 'nationalmuseum-stockholm-sweden',

    // Musee Conde
    'musee-conde': 'mus233e-cond233-chantilly-france',

    // National Gallery Oslo
    'national-gallery-oslo-norway': 'national-gallery-oslo',
    'national-gallery-of-norway': 'national-gallery-oslo',

    // Pushkin
    'pushkin-museum-moscow-russia': 'pushkin-museum',

    // Kunsthalle Hamburg
    'kunsthalle-hamburg-hamburg-germany': 'hamburger-kunsthalle',
    'kunsthalle-hamburg': 'hamburger-kunsthalle',
    'hamburger-kunsthalle-hamburg-germany': 'hamburger-kunsthalle',

    // Stedelijk
    'stedelijk-museum': 'stedelijk-museum-amsterdam-netherlands',

    // Royal Academy
    'royal-academy': 'royal-academy-of-arts-ra-london-uk',

    // Lenbachhaus
    'lenbachhaus-munich-germany': 'lenbachhaus',

    // National Museum Warsaw
    'national-museum-warsaw-poland': 'national-museum-pozna-poland',

    // SFMOMA
    'sfmoma': 'san-francisco-museum-of-modern-art-sfmoma-san-fran',

    // Assisi Basilica variants
    'assisi-basilica': 'basilica-of-saint-francis-of-assisi-assisi-italy',
    'basilica-of-st-francis-assisi': 'basilica-of-saint-francis-of-assisi-assisi-italy',

    // Gallerie Accademia Venice
    'gallerie-accademia-venice': 'gallerie-dell-accademia-venice',
    'galleria-dell39accademia-venice-italy': 'gallerie-dell-accademia-venice',
    'gallerie-dellaccademia': 'gallerie-dell-accademia-venice',

    // Kunstmuseum Den Haag
    'kunstmuseum-den-haag': 'gemeentemuseum-den-haag-hague-netherlands',

    // Ateneum
    'ateneum-helsinki-finland': 'ateneum',
    'finnish-national-gallery-helsinki-finland-ateneum-': 'ateneum',

    // State Russian Museum
    'state-russian-museum': 'russian-museum',

    // SAAM
    'saam': 'smithsonian-american-art',
    'smithsonian-american-art-museum-washington-dc-us': 'smithsonian-american-art',

    // Dallas Museum
    'dallas-museum-of-art-dallas-tx-us': 'dallas-museum-of-art',

    // Stadel
    'stadel': 'st228del-frankfurt-am-main-germany',
    'stadel-museum': 'st228del-frankfurt-am-main-germany',
    'st228delsches-kunstinstitut-und-st228dtische-galer': 'st228del-frankfurt-am-main-germany',

    // Cleveland
    'cleveland-museum-of-art-cma-cleveland-oh-us': 'cleveland-museum-of-art',

    // Musee Bonnat
    'mus233e-bonnat-bayonne-france': 'musee-bonnat',
    'musee-bonnat-helleu': 'musee-bonnat',

    // Museo de Arte Moderno
    'museo-de-arte-moderno': 'museo-arte-moderno',

    // Buffalo/Albright Knox
    'buffalo-akg': 'albright-knox',
    'albright-knox-art-gallery': 'albright-knox',

    // Budapest
    'budapest-fine-arts': 'budapest-museum-of-fine-arts-budapest-hungary',
    'budapest-museum-of-fine-arts': 'budapest-museum-of-fine-arts-budapest-hungary',

    // Whitney
    'whitney': 'whitney-museum',

    // Mauritshuis
    'mauritshuis-hague-netherlands': 'mauritshuis',

    // Noordbrabants
    'noordbrabants-museum': 'noordbrabants-museum-39shertogenbosch-netherlands',

    // Gulbenkian
    'calouste-gulbenkian-museum': 'calouste-gulbenkian-museum-lisbon-portugal',
    'calouste-gulbenkian-museum-in-lisbon-paris': 'calouste-gulbenkian-museum-lisbon-portugal',
    'gulbenkian': 'calouste-gulbenkian-museum-lisbon-portugal',

    // Museo Nacional Prado
    'museo-nacional-del-prado-madrid-spain': 'museo-del-prado-madrid-spain',

    // Neue Galerie
    'neue-galerie-new-york-usa': 'neue-galerie',

    // National Galleries Scotland
    'national-galleries-of-scotland': 'national-galleries-scotland',

    // Belvedere
    'belvedere-vienna-austria': 'belvedere',
    'belvedere-museum': 'belvedere',

    // Musee Fabre
    'musee-fabre': 'mus233e-fabre-montpellier-france',

    // Birmingham
    'birmingham-museum-art-gallery': 'birmingham-museum-and-art-gallery-birmingham-uk',
    'birmingham-museum': 'birmingham-museum-and-art-gallery-birmingham-uk',
    'birmingham-museum-and-art-gallery': 'birmingham-museum-and-art-gallery-birmingham-uk',

    // Musee Marmottan Monet
    'musee-marmottan-monet': 'muse-marmottan-monet-paris',
    'mus233e-marmottan-monet-paris-france': 'muse-marmottan-monet-paris',

    // Hecht Museum
    'hecht-museum': 'hecht-museum-university-of-haifa-haifa-israel',

    // Yale University Art Gallery
    'yale-university-art-gallery': 'yale-art-gallery',
    'yale-university-art-gallery-yale-university-new-ha': 'yale-art-gallery',

    // Doria Pamphilj
    'galleria-doria-pamphilj-rome-italy': 'galleria-doria-pamphilj',

    // Gemäldegalerie Alte Meister Dresden
    'gemldegalerie-alte-meister-dresden': 'gem228ldegalerie-alte-meister-dresden-germany',
    'gemaldegalerie-alte-meister-dresden': 'gem228ldegalerie-alte-meister-dresden-germany',
    'gemaldegalerie-alte-meister': 'gem228ldegalerie-alte-meister-dresden-germany',

    // National Gallery Denmark
    'national-gallery-of-denmark': 'national-gallery-of-denmark-statens-museum-for-kun',
    'statens-museum-for-kunst': 'national-gallery-of-denmark-statens-museum-for-kun',

    // National Museum Gdansk
    'national-museum-gdask-poland': 'national-museum-gdansk',

    // San Luigi dei Francesi
    'san-luigi-dei-francesi': 'capitoline-museums-rome-italy',

    // Palazzo Barberini
    'palazzo-barberini': 'barberini',
    'palazzo-barberini-rome-italy': 'barberini',

    // Guggenheim
    'solomon-r-guggenheim-museum-new-york-city-ny-us': 'guggenheim',

    // National Gallery Ireland
    'national-gallery-of-ireland': 'national-gallery-ireland',

    // Basilica of San Francesco Arezzo
    'basilica-of-san-francesco-arezzo': 'basilica-of-san-francesco-arezzo-italy',

    // Gemäldegalerie Berlin
    'gemldegalerie-berlin': 'gem228ldegalerie-berlin-germany',
    'gem228ldegalerie-berlin-germany-staatliche-museen-': 'gem228ldegalerie-berlin-germany',
    'staatliche-museen-zu-berlin': 'gem228ldegalerie-berlin-germany',
    'staatliche-museen-zu-berlin-berlin-germany-gem228l': 'gem228ldegalerie-berlin-germany',

    // Oskar Reinhart
    'oskar-reinhart-foundation': 'oskar-reinhart-foundation-winterthur-switzerland',

    // Gothenburg
    'gothenburg-museum-of-art': 'gothenburg-museum',

    // Museo Thyssen
    'museo-thyssen-bornemisza': 'thyssenbornemisza-museum-madrid-spain',
    'thyssen-bornemisza': 'thyssenbornemisza-museum-madrid-spain',

    // Musee des Beaux-Arts Lyon
    'musee-des-beaux-arts-de-lyon': 'mus233e-des-beauxarts-de-lyon-lyon-france',

    // Museu de Belles Arts Valencia
    'museu-de-belles-arts-de-valencia': 'museu-de-belles-arts-de-val232ncia-valencia-spain',

    // Bredius
    'bredius-museum': 'bredius-museum-hague-netherlands',

    // NY Carlsberg
    'ny-carlsberg-glyptotek-copenhagen-denmark': 'ny-carlsberg-glyptotek',

    // Palazzo Brera
    'palazzo-brera-milan': 'pinacoteca-di-brera',

    // Musee Gustave Moreau
    'musee-gustave-moreau': 'mus233e-national-gustave-moreau-paris-france',

    // RISD
    'risd-museum': 'rhode-island-school-of-design-museum-risd-museum-p',

    // Hampton Court
    'hampton-court-palace': 'hampton-court-palace-london-uk',

    // Galleria Borghese
    'galleria-borghese': 'borghese-gallery-rome-italy',
    'borghese-gallery': 'borghese-gallery-rome-italy',

    // Casino Aurora
    'casino-aurora': 'casino-rospigliosi',

    // Bargello
    'bargello': 'bargello-palazzo-del-popolo-florence-italy',

    // National Gallery Canada
    'national-gallery-of-canada': 'national-gallery-of-canada-ottawa-canada',

    // Toulouse Lautrec
    'musee-toulouselautrec-albi-france': 'musee-toulouse-lautrec',

    // Art Gallery NSW
    'art-gallery-of-new-south-wales': 'art-gallery-of-new-south-wales-agnsw-sydney-austra',

    // Kroller Muller
    'kroller-muller': 'kroeller-mueller-museum',

    // Huntington
    'huntington': 'huntington-library',

    // Basilica Frari
    'basilica-frari': 'basilica-dei-frari',

    // Courtauld
    'courtauld-institute-of-art-london-uk': 'courtauld-gallery-london',

    // Musee Guimet
    'musee-guimet': 'guimet-museum-paris-france',

    // NMWA
    'nmwa': 'national-museum-of-women-in-the-arts-nmwa-washingt',
    'nmwa-tokyo': 'national-museum-of-western-art-tokyo-japan',
    'national-museum-of-western-art': 'national-museum-of-western-art-tokyo-japan',

    // Brücke Museum
    'brucke-museum': 'br252cke-museum-berlin-germany',

    // Harris Museum
    'harris-museum': 'harris-museum-preston-uk',

    // Musee Picasso
    'musee-picasso-paris': 'mus233e-picasso-paris-france',

    // National Museum Fine Arts Algiers
    'national-museum-of-fine-arts-of-algiers': 'national-museum-of-fine-arts-of-algiers-algiers-al',

    // Hermitage variant
    'hermitage-museum-st-petersburg-russia': 'hermitage',

    // Auckland
    'auckland-art-gallery': 'auckland-art-gallery-auckland-new-zealand',

    // Villa Stuck - doesn't exist
    'villa-stuck': '',

    // Leopold Museum
    'leopold-museum': 'leopold-museum-vienna-austria',

    // AGO
    'ago': 'art-gallery-of-ontario-ago-toronto-canada',

    // Kunsthistorisches variants
    'kunsthistorisches': 'kunsthistorisches-museum',
    'kunsthistorisches-museum-vienna': 'kunsthistorisches-museum',
    'kunsthistorisches-museum-in-vienna': 'kunsthistorisches-museum',

    // Staatliche Kunsthalle Karlsruhe
    'staatliche-kunsthalle-karlsruhe': 'staatliche-kunsthalle-karlsruhe-karlsruhe-germany',

    // Tretyakov
    'tretyakov': 'tretyakov-gallery',

    // Cooper Hewitt
    'cooper-hewitt': 'cooper-hewitt-smithsonian-design-museum-new-york-c',

    // Ecole des Beaux Arts
    'ecole-des-beaux-arts': '201cole-nationale-sup233rieure-des-beauxarts-ensba',

    // Ashmolean
    'ashmolean': 'ashmolean-museum-oxford-uk',
    'ashmolean-museum': 'ashmolean-museum-oxford-uk',

    // Tyrolean State Museum
    'tyrolean-state-museum': 'tyrolean-state-museum-innsbruck-austria',

    // Hospital Caridad
    'hospital-de-la-caridad': 'hospital-caridad-seville',

    // Kelvingrove
    'kelvingrove-art-gallery': 'kelvingrove-art-gallery-and-museum-glasgow-uk',

    // Basilica della Santa Casa
    'basilica-della-santa-casa': 'basilica-della-santa-casa-loreto-italy',

    // Palazzo Bianco
    'palazzo-bianco': 'palazzo-bianco-genoa-italy',

    // Musee Ingres
    'musee-ingres': 'mus233e-ingres-montauban-france',

    // Butler Institute
    'butler-institute': 'butler-institute-of-american-art-youngstown-oh-us',

    // Paula Modersohn Becker Museum - doesn't exist
    'paula-modersohn-becker-museum': '',

    // Cranach Hofe
    'cranach-hofe': 'cranachh246fe-wittenberg-germany',

    // Museum Folkwang
    'museum-folkwang': 'folkwang-museum-essen-germany',

    // Museu Nacional Arte Antiga
    'museu-nacional-arte-antiga': 'national-museum-of-ancient-art-mnaa-lisbon-portuga',

    // Biblioteca Ambrosiana
    'biblioteca-ambrosiana': 'biblioteca-ambrosiana-milan-italy',

    // Albertina
    'albertina': 'albertina-museum',

    // Museum of Russian Art Kyiv
    'museum-of-russian-art-kyiv': 'museum-of-russian-art-tereshchenko-museum-kyiv-ukr',

    // Kunsthalle Mannheim
    'kunsthalle-mannheim': 'kunsthalle-mannheim-mannheim-germany',

    // Kenwood House
    'kenwood-house-london-uk': 'kenwood-house',

    // Minneapolis Institute
    'minneapolis-institute-of-art-minneapolis-mn-us': 'minneapolis-institute-of-art',
    'collection-of-the-minneapolis-institute-of-art': 'minneapolis-institute-of-art',

    // Museo de Bellas Artes Seville
    'museo-de-bellas-artes-de-sevilla': 'museum-of-fine-arts-of-seville-seville-spain',
    'museo-bellas-artes-seville': 'museum-of-fine-arts-of-seville-seville-spain',
    'museum-of-fine-arts-seville': 'museum-of-fine-arts-of-seville-seville-spain',

    // Isabella Stewart Gardner
    'isabella-stewart-gardner-museum': 'isabella-stewart-gardner',

    // Victoria and Albert
    'victoria-and-albert-museum': 'victoria-and-albert-museum-vampa-london-uk',

    // Von der Heydt
    'von-der-heydt-museum': 'von-der-heydt-museum-wuppertal-germany',

    // Museo Correr
    'museo-correr': 'museo-correr-venice-italy',

    // Royal Museum Fine Arts Antwerp
    'royal-museum-of-fine-arts-antwerp': 'royal-museum-of-fine-arts-antwerp-dutch-koninklijk',
    'musee-royal-beaux-arts-antwerp': 'royal-museum-of-fine-arts-antwerp-dutch-koninklijk',

    // Musee des Beaux-Arts Angers
    'musee-des-beaux-arts-angers': 'mus233e-des-beauxarts-d39angers-angers-france',

    // Accademia Carrara
    'accademia-carrara': 'accademia-carrara-bergamo-italy',
    'accademia-carrara-bergamo': 'accademia-carrara-bergamo-italy',

    // Dordrechts Museum
    'dordrechts-museum': 'dordrechts-museum-dordrecht-netherlands',

    // Fries Museum
    'fries-museum': 'fries-museum-leeuwarden-netherlands',

    // Vienna Museum
    'vienna-museum': 'vienna-museum-vienna-austria',

    // Palais Beaux-Arts Lille
    'palais-beaux-arts-lille': 'palais-des-beauxarts-de-lille-lille-france',

    // Petit Palais
    'petit-palais': 'petit-palais-paris-france',

    // York Art Gallery
    'york-art-gallery': 'york-art-gallery-york-uk',

    // Kunsthalle Bremen
    'kunsthalle-bremen-bremen-germany': 'kunsthalle-bremen',

    // Dolores Olmedo
    'dolores-olmedo-collection': 'dolores-olmedo-collection-mexico-city-mexico',

    // Dumbarton Oaks
    'dumbarton-oaks-research-library-and-collection-washington-dc': 'dumbarton-oaks-research-library-and-collection-was',

    // Final remaining fixes
    'orangerie': 'musee-de-lorangerie',
    'basilica-of-san-domenico': 'basilica-of-san-domenico-arezzo-italy',
    'kunstmuseum-gelsenkirchen': 'kunstmuseum-gelsenkirchen-gelsenkirchenbuer-german',
    'biblioteca-museu-victor-balaguer': 'biblioteca-museu-v237ctor-balaguer-vilanova-i-la-g',
    'pinacoteca-tosio-martinengo': 'pinacoteca-tosio-martinengo-brescia-italy',
    'helsinki-city-museum': 'helsinki-city-museum-helsinki-finland',
    'basilica-of-saint-francis-of-assisi': 'basilica-of-saint-francis-of-assisi-assisi-italy',

    // Invalid/garbage slugs - remove links
    'gallery-oldham': '',
    'private-collection-tate-britain-london-uk': '',
    'attractions-include-its-historic-canals-the-rijksm': '',
    'contemplation-by-the-museum-paris': '',
    'addition-to-its-permanent-collection-new-york': '',
    'private-collection-museum-catharijneconvent-utrech': '',
    'frick-collection-in-new-york-city': 'frick-collection',
    'national-gallery-london-uk-fondazione-roberto-long': 'national-gallery',
    'tate-modern-london-uk-tate-britain-london-uk': 'tate-britain',
    'uffizi-gallery-florence-italy-louvre-paris-france': 'uffizi-gallery-florence-italy',
    'museo-del-prado-madrid-spain-museu-nacional-d39art': 'museo-del-prado-madrid-spain',
    'isabella-stewart-gardner-museum-fenway-court-bosto': 'isabella-stewart-gardner',
    'national-gallery-of-art-in-washington-paris': 'national-gallery-of-art',
    'national-museum-of-capodimonte-naples-italy-uffizi': 'uffizi-gallery-florence-italy',
    'academy-of-fine-arts-vienna-vienna-austria-chiesa-': 'academy-of-fine-arts-vienna-vienna-austria',
    'bode-museum-berlin-germany-destroyed': '',
    'its-collection-one-of-the-earliest-impressions-of-': '',
    'collection-of-the-rijksmuseum-amsterdam': 'rijksmuseum',
    'world-and-houses-a-significant-collection-of-old-m': '',
    'grounds-of-the-museum': '',
    'permanent-collection-of-the-national-gallery-of-ar': 'national-gallery-of-art',
  };

  const artistReplacements = {
    'vincent-van-gogh': 'van-gogh',
    'rembrandt-van-rijn': 'rembrandt',
    'henri-de-toulouse-lautrec': 'henri-toulouse-lautrec',
    'pieter-bruegel-the-elder': 'pieter-bruegel-elder',
    'lucas-cranach-the-elder': 'lucas-cranach-elder',
    'jan-van-eyck': 'jan-van-eyck',
    'giotto-di-bondone': 'giotto',
    'michelangelo-buonarroti': 'michelangelo',
    'willem-van-de-velde-the-younger': 'willem-van-de-velde-younger',
    'hans-holbein-the-younger': 'hans-holbein-younger',
    'sir-lawrence-alma-tadema': 'lawrence-alma-tadema',
    'sappho': '', // Not an artist, remove link
  };

  const movementReplacements = {
    'realism': 'american-realism',
    'early-renaissance': 'renaissance',
    'high-renaissance': 'renaissance',
    'italian-renaissance': 'renaissance',
    'pre-raphaelites': 'pre-raphaelite',
    'pre-raphaelite-brotherhood': 'pre-raphaelite',
    'pre-raphaelitism': 'pre-raphaelite',
    'venetian-renaissance': 'venetian-school',
    'proto-renaissance': 'renaissance',
    'minimalism': '', // Not in DB
    'gothic': '', // Not in DB
    'orphism': '', // Not in DB
    'art-nouveau': '', // Not in DB
    'naive-art': '', // Not in DB
    'naive-art-primitivism': '', // Not in DB
    'aesthetic-movement': '', // Not in DB
    'classicism': 'neoclassicism',
    'ashcan-school': '', // Not in DB
    'academicism': 'academic-art',
    'abstract-art': 'abstract-expressionism',
    'divisionism': 'post-impressionism',
    'dada': 'surrealism',
    'classical-greek-roman-sculpture': '', // Not in DB
    'les-nabis': 'post-impressionism',
  };

  // Get all artworks with descriptions and FAQs
  const artworks = await prisma.artwork.findMany({
    where: {
      OR: [
        { description: { not: null } },
        { faqs: { not: null } }
      ]
    },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
      faqs: true,
    }
  });

  console.log(`Processing ${artworks.length} artworks...\n`);

  let totalFixed = 0;
  let artworksUpdated = 0;

  for (const artwork of artworks) {
    let description = artwork.description || '';
    let faqs = artwork.faqs || [];
    let changed = false;

    // Fix museum links
    for (const [wrong, correct] of Object.entries(museumReplacements)) {
      const pattern = new RegExp(`/apps/masterpieces/museum/${wrong}(?="|')`, 'g');

      if (correct === '') {
        // Remove the entire link if replacement is empty
        const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/museum/${wrong}"[^>]*>.*?</a>`, 'gi');
        if (linkPattern.test(description)) {
          description = description.replace(linkPattern, (match) => {
            // Extract the text content
            const textMatch = match.match(/>([^<]+)</);
            totalFixed++;
            changed = true;
            return textMatch ? textMatch[1] : '';
          });
        }
      } else if (pattern.test(description)) {
        description = description.replace(pattern, `/apps/masterpieces/museum/${correct}`);
        totalFixed++;
        changed = true;
      }

      // Fix in FAQs
      if (Array.isArray(faqs)) {
        faqs = faqs.map(faq => {
          if (faq.answer) {
            if (correct === '') {
              const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/museum/${wrong}"[^>]*>.*?</a>`, 'gi');
              if (linkPattern.test(faq.answer)) {
                const newAnswer = faq.answer.replace(linkPattern, (match) => {
                  const textMatch = match.match(/>([^<]+)</);
                  totalFixed++;
                  changed = true;
                  return textMatch ? textMatch[1] : '';
                });
                return { ...faq, answer: newAnswer };
              }
            } else if (pattern.test(faq.answer)) {
              totalFixed++;
              changed = true;
              return { ...faq, answer: faq.answer.replace(pattern, `/apps/masterpieces/museum/${correct}`) };
            }
          }
          return faq;
        });
      }
    }

    // Fix artist links
    for (const [wrong, correct] of Object.entries(artistReplacements)) {
      const pattern = new RegExp(`/apps/masterpieces/artist/${wrong}(?="|')`, 'g');

      if (correct === '') {
        // Remove the entire link if replacement is empty
        const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/artist/${wrong}"[^>]*>.*?</a>`, 'gi');
        if (linkPattern.test(description)) {
          description = description.replace(linkPattern, (match) => {
            const textMatch = match.match(/>([^<]+)</);
            totalFixed++;
            changed = true;
            return textMatch ? textMatch[1] : '';
          });
        }
      } else if (pattern.test(description)) {
        description = description.replace(pattern, `/apps/masterpieces/artist/${correct}`);
        totalFixed++;
        changed = true;
      }

      if (Array.isArray(faqs)) {
        faqs = faqs.map(faq => {
          if (faq.answer) {
            if (correct === '') {
              const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/artist/${wrong}"[^>]*>.*?</a>`, 'gi');
              if (linkPattern.test(faq.answer)) {
                const newAnswer = faq.answer.replace(linkPattern, (match) => {
                  const textMatch = match.match(/>([^<]+)</);
                  totalFixed++;
                  changed = true;
                  return textMatch ? textMatch[1] : '';
                });
                return { ...faq, answer: newAnswer };
              }
            } else if (pattern.test(faq.answer)) {
              totalFixed++;
              changed = true;
              return { ...faq, answer: faq.answer.replace(pattern, `/apps/masterpieces/artist/${correct}`) };
            }
          }
          return faq;
        });
      }
    }

    // Fix movement links
    for (const [wrong, correct] of Object.entries(movementReplacements)) {
      const pattern = new RegExp(`/apps/masterpieces/movement/${wrong}(?="|')`, 'g');

      if (correct === '') {
        // Remove the entire link if replacement is empty
        const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/movement/${wrong}"[^>]*>.*?</a>`, 'gi');
        if (linkPattern.test(description)) {
          description = description.replace(linkPattern, (match) => {
            const textMatch = match.match(/>([^<]+)</);
            totalFixed++;
            changed = true;
            return textMatch ? textMatch[1] : '';
          });
        }
      } else if (pattern.test(description)) {
        description = description.replace(pattern, `/apps/masterpieces/movement/${correct}`);
        totalFixed++;
        changed = true;
      }

      if (Array.isArray(faqs)) {
        faqs = faqs.map(faq => {
          if (faq.answer) {
            if (correct === '') {
              const linkPattern = new RegExp(`<a[^>]*href="/apps/masterpieces/movement/${wrong}"[^>]*>.*?</a>`, 'gi');
              if (linkPattern.test(faq.answer)) {
                const newAnswer = faq.answer.replace(linkPattern, (match) => {
                  const textMatch = match.match(/>([^<]+)</);
                  totalFixed++;
                  changed = true;
                  return textMatch ? textMatch[1] : '';
                });
                return { ...faq, answer: newAnswer };
              }
            } else if (pattern.test(faq.answer)) {
              totalFixed++;
              changed = true;
              return { ...faq, answer: faq.answer.replace(pattern, `/apps/masterpieces/movement/${correct}`) };
            }
          }
          return faq;
        });
      }
    }

    // Update if changed
    if (changed) {
      await prisma.artwork.update({
        where: { id: artwork.id },
        data: {
          description,
          faqs,
          updatedAt: new Date()
        }
      });
      artworksUpdated++;

      if (artworksUpdated % 100 === 0) {
        console.log(`Updated ${artworksUpdated} artworks...`);
      }
    }
  }

  console.log(`\n=== Complete ===`);
  console.log(`Total link fixes: ${totalFixed}`);
  console.log(`Artworks updated: ${artworksUpdated}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
