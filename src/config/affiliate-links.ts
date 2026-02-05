// Central config for museum ticket affiliate links
// Priority: Musement (highest commission) → GetYourGuide → Tiqets → direct ticketUrl → null

type AffiliateProvider = "getyourguide" | "tiqets" | "musement";

interface TicketUrlResult {
  url: string;
  isAffiliate: boolean;
  provider: AffiliateProvider | "direct";
}

// Maps museum slugs to GetYourGuide activity URLs (base URL without query params)
// Uses GYG attraction landing pages (reliable, always valid).
// To link to a specific ticket activity instead, replace with the full activity URL
// (e.g., https://www.getyourguide.com/paris-l16/louvre-museum-timed-entrance-ticket-t395828/)
const GYG_MUSEUM_MAP: Record<string, string> = {
  // France
  "louvre-paris-france": "https://www.getyourguide.com/louvre-museum-l3224/",
  "musee-dorsay": "https://www.getyourguide.com/musee-d-orsay-l2976/",
  "musee-de-lorangerie": "https://www.getyourguide.com/musee-de-l-orangerie-l3222/",
  "ch226teau-de-versailles-versailles-france": "https://www.getyourguide.com/palace-of-versailles-l317/",
  "georges-pompidou-center-paris-france": "https://www.getyourguide.com/centre-pompidou-l2977/",
  "mus233e-picasso-paris-france": "https://www.getyourguide.com/picasso-museum-paris-l4785/",

  // Italy
  "uffizi-gallery-florence-italy": "https://www.getyourguide.com/uffizi-gallery-l3953/",
  "vatican-museums": "https://www.getyourguide.com/vatican-museums-l2738/",
  "borghese-gallery-rome-italy": "https://www.getyourguide.com/borghese-gallery-l3271/",
  "galleria-dell39accademia-di-firenze-florence-italy": "https://www.getyourguide.com/accademia-gallery-l4746/",
  "palazzo-pitti": "https://www.getyourguide.com/pitti-palace-l3957/",
  "pinacoteca-di-brera": "https://www.getyourguide.com/pinacoteca-di-brera-art-gallery-l3585/",
  "gallerie-dell-accademia-venice": "https://www.getyourguide.com/gallerie-dell-accademia-l3529/",
  "capitoline-museums-rome-italy": "https://www.getyourguide.com/capitoline-museums-l3299/",
  "galleria-doria-pamphilj": "https://www.getyourguide.com/doria-pamphili-gallery-l3281/",
  "barberini": "https://www.getyourguide.com/palazzo-barberini-l7912/",
  "pinacoteca-vaticana-vatican": "https://www.getyourguide.com/vatican-museums-l2738/",

  // Spain
  "museo-del-prado-madrid-spain": "https://www.getyourguide.com/museo-del-prado-l2773/",
  "reina-sofia": "https://www.getyourguide.com/museo-nacional-centro-de-arte-reina-sofia-l3450/",
  "thyssenbornemisza-museum-madrid-spain": "https://www.getyourguide.com/museo-nacional-thyssen-bornemisza-l3612/",

  // Netherlands
  "rijksmuseum": "https://www.getyourguide.com/rijksmuseum-l2696/",
  "van-gogh-museum": "https://www.getyourguide.com/van-gogh-museum-l2695/",
  "mauritshuis": "https://www.getyourguide.com/mauritshuis-l33032/",

  // UK
  "national-gallery": "https://www.getyourguide.com/national-gallery-london-l3188/",
  "tate-modern-london-uk": "https://www.getyourguide.com/tate-modern-l4345/",
  "british-museum": "https://www.getyourguide.com/british-museum-l3190/",
  "courtauld-gallery-london": "https://www.getyourguide.com/the-courtauld-gallery-l3189/",
  "national-portrait-gallery-london-uk": "https://www.getyourguide.com/national-portrait-gallery-london-l2712/",
  "tate-britain": "https://www.getyourguide.com/tate-modern-l4345/", // GYG groups Tate tours together

  // Austria
  "kunsthistorisches-museum": "https://www.getyourguide.com/kunsthistorisches-museum-l3532/",
  "albertina-vienna-austria": "https://www.getyourguide.com/albertina-museum-vienna-l3946/",
  "belvedere": "https://www.getyourguide.com/belvedere-palace-l6596/",
  "leopold-museum-vienna-austria": "https://www.getyourguide.com/leopold-museum-l4620/",

  // Germany
  "alte-pinakothek": "https://www.getyourguide.com/alte-pinakothek-l5980/",

  // USA
  "met": "https://www.getyourguide.com/metropolitan-museum-of-art-l2609/",
  "moma": "https://www.getyourguide.com/museum-of-modern-art-moma-l2610/",
  "guggenheim": "https://www.getyourguide.com/guggenheim-museum-new-york-city-l4793/",
  "art-institute-of-chicago": "https://www.getyourguide.com/art-institute-of-chicago-l3899/",
  "national-gallery-of-art": "https://www.getyourguide.com/national-gallery-of-art-washington-l3656/",
  "getty-center": "https://www.getyourguide.com/getty-center-l3466/",
  "lacma": "https://www.getyourguide.com/los-angeles-county-museum-of-art-l7340/",
  "frick-collection": "https://www.getyourguide.com/frick-collection-l3356/",

  // Russia
  "hermitage": "https://www.getyourguide.com/eremitaget-l3773/",

  // Norway
  "munch-museum": "https://www.getyourguide.com/munch-museum-l4241/",
};

// Maps museum slugs to Tiqets venue URLs
// Used as fallback when GYG doesn't have coverage
const TIQETS_MUSEUM_MAP: Record<string, string> = {
  // Italy - museums not well covered by GYG
  "brancacci-chapel": "https://www.tiqets.com/en/brancacci-chapel-tickets-l145947/",
  "museo-correr-venice-italy": "https://www.tiqets.com/en/museo-correr-tickets-l145672/",
  "ca39-rezzonico-museo-del-settecento-venice-italy": "https://www.tiqets.com/en/ca-rezzonico-museum-tickets-l150760/",

  // Germany - museums not in GYG
  "gem228ldegalerie-berlin-germany": "https://www.tiqets.com/en/gemaldegalerie-tickets-l164851/",
  "hamburger-kunsthalle": "https://www.tiqets.com/en/hamburger-kunsthalle-tickets-l147334/",

  // Netherlands
  "kroeller-mueller-museum": "https://www.tiqets.com/en/houtkampweg-6-tickets-l236585/",

  // USA - museums not in GYG
  "mfa-boston": "https://www.tiqets.com/en/museum-of-fine-arts-boston-tickets-l141969/",

  // France - additional museums
  "muse-marmottan-monet-paris": "https://www.tiqets.com/en/musee-marmottan-monet-tickets-l175907/",

  // Czech Republic
  "national-gallery-prague": "https://www.tiqets.com/en/national-gallery-prague-tickets-l245733/",

  // France - Paris (additional museums)
  "musee-rodin-paris": "https://www.tiqets.com/en/musee-rodin-tickets-l148619/",
  "musee-armee-invalides-paris": "https://www.tiqets.com/en/musee-de-larmee-tickets-l145823/",
  "musee-jacquemart-andre-paris": "https://www.tiqets.com/en/musee-jacquemart-andre-tickets-l146475/",
};

// Maps museum slugs to Musement venue URLs
// Used as fallback when GYG and Tiqets don't have coverage
const MUSEMENT_MUSEUM_MAP: Record<string, string> = {
  // Italy - Rome
  "santa-maria-delle-grazie": "https://www.musement.com/us/milan/leonardo-s-last-supper-v/",
  "museo-nazionale-romano": "https://www.musement.com/us/rome/tickets-for-the-national-roman-museum-with-audio-guide-for-palazzo-altemps-47077/",
  "galleria-spada-rome": "https://www.musement.com/us/rome/galleria-spada-entrance-tickets-7986/",
  "villa-farnesina-rome": "https://www.musement.com/uk/rome/villa-farnesina-private-tour-11159/",
  "maxxi-rome": "https://www.musement.com/us/rome/maxxi-national-museum-of-xxi-century-arts-ticket-3856/",
  "galleria-nazionale-arte-moderna-rome": "https://www.musement.com/us/rome/biglietti-per-la-galleria-nazionale-d-arte-moderna-73582/",
  "galleria-colonna": "https://www.musement.com/us/rome/colonna-gallery-entrance-tickets-7958/",

  // Italy - Milan
  "biblioteca-ambrosiana-milan-italy": "https://www.musement.com/us/milan/pinacoteca-ambrosiana-v/",
  "museo-del-novecento-milan": "https://www.musement.com/us/milan/milan-museo-del-novecento-entry-ticket-with-audio-guide-452748/",
  "triennale-milano": "https://www.musement.com/us/milan/triennale-v/",
  "palazzo-reale-milan": "https://www.musement.com/us/milan/royal-palace-of-milan-v/",

  // Italy - Turin
  "museo-egizio-turin": "https://www.musement.com/us/turin/the-egyptian-museum-of-turin-v/",
  "palazzo-madama-turin": "https://www.musement.com/us/turin/palazzo-madama-of-turin-v/",
  "royal-museums-turin": "https://www.musement.com/us/turin/royal-museums-of-turin-v/",

  // Italy - Naples
  "museo-capodimonte-naples": "https://www.musement.com/us/naples/tickets-for-museum-and-royal-wood-of-capodimonte-3757/",
  "museo-archeologico-nazionale-naples": "https://www.musement.com/uk/naples/museo-archeologico-nazionale-di-napoli-entrance-ticket-3730/",

  // Italy - Venice
  "ca39-pesaro-international-gallery-of-modern-art-ve": "https://www.musement.com/us/venice/import-647-323424/",
  "peggy-guggenheim-collection-venice": "https://www.musement.com/us/venice/peggy-guggenheim-collection-tickets-1-155385/",
  "palazzo-ducale-venice": "https://www.musement.com/us/venice/doge-s-palace-v/",

  // Italy - Florence
  "bargello-palazzo-del-popolo-florence-italy": "https://www.musement.com/us/florence/bargello-national-museum-v/",
  "palazzo-vecchio-florence": "https://www.musement.com/us/florence/palazzo-vecchio-v/",

  // Germany - Berlin
  "alte-nationalgalerie": "https://www.musement.com/us/berlin/alte-nationalgalerie-skip-the-line-ticket-7850/",
  "alte-nationalgalerie-berlin-germany": "https://www.musement.com/us/berlin/alte-nationalgalerie-skip-the-line-ticket-7850/",
  "pergamon-museum-berlin": "https://www.musement.com/us/berlin/pergamon-museum-v/",
  "neues-museum-berlin": "https://www.musement.com/us/berlin/neues-museum-1-v/",
  "bode-museum-berlin": "https://www.musement.com/us/berlin/bode-museum-skip-the-line-tickets-10545/",

  // Portugal
  "calouste-gulbenkian-museum-lisbon-portugal": "https://www.musement.com/us/lisbon/calouste-gulbenkian-museum-and-centro-de-arte-moderna-tickets-248532/",
};

function buildGygUrl(baseUrl: string): string {
  const partnerId = process.env.NEXT_PUBLIC_GYG_PARTNER_ID;
  if (!partnerId) return baseUrl;

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}partner_id=${partnerId}&utm_medium=online_publisher&utm_campaign=masterpiece-locator`;
}

function buildTiqetsUrl(baseUrl: string): string {
  const partnerId = process.env.NEXT_PUBLIC_TIQETS_PARTNER_ID;
  if (!partnerId) return baseUrl;

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}partner=${partnerId}`;
}

function buildMusementUrl(baseUrl: string): string {
  const partnerId = process.env.NEXT_PUBLIC_MUSEMENT_PARTNER_ID;
  if (!partnerId) return baseUrl;

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}aid=${partnerId}`;
}

export function getTicketUrl(
  museumSlug: string,
  directTicketUrl?: string | null
): TicketUrlResult | null {
  // Check Musement first (highest commission)
  const musementUrl = MUSEMENT_MUSEUM_MAP[museumSlug];
  if (musementUrl) {
    return {
      url: buildMusementUrl(musementUrl),
      isAffiliate: true,
      provider: "musement",
    };
  }

  // Check GYG mapping second
  const gygUrl = GYG_MUSEUM_MAP[museumSlug];
  if (gygUrl) {
    return {
      url: buildGygUrl(gygUrl),
      isAffiliate: true,
      provider: "getyourguide",
    };
  }

  // Check Tiqets mapping third
  const tiqetsUrl = TIQETS_MUSEUM_MAP[museumSlug];
  if (tiqetsUrl) {
    return {
      url: buildTiqetsUrl(tiqetsUrl),
      isAffiliate: true,
      provider: "tiqets",
    };
  }

  // Fall back to direct ticket URL
  if (directTicketUrl) {
    return {
      url: directTicketUrl,
      isAffiliate: false,
      provider: "direct",
    };
  }

  return null;
}

export function hasAffiliateLink(museumSlug: string): boolean {
  return (
    museumSlug in GYG_MUSEUM_MAP ||
    museumSlug in TIQETS_MUSEUM_MAP ||
    museumSlug in MUSEMENT_MUSEUM_MAP
  );
}
