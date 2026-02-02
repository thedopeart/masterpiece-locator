// Central config for museum ticket affiliate links
// Priority: GetYourGuide affiliate → direct ticketUrl → null
// Designed to swap in other providers (Musement, Tiqets) later

type AffiliateProvider = "getyourguide";

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

function buildGygUrl(baseUrl: string): string {
  const partnerId = process.env.NEXT_PUBLIC_GYG_PARTNER_ID;
  if (!partnerId) return baseUrl;

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}partner_id=${partnerId}&utm_medium=online_publisher&utm_campaign=masterpiece-locator`;
}

export function getTicketUrl(
  museumSlug: string,
  directTicketUrl?: string | null
): TicketUrlResult | null {
  // Check GYG mapping first
  const gygUrl = GYG_MUSEUM_MAP[museumSlug];
  if (gygUrl) {
    return {
      url: buildGygUrl(gygUrl),
      isAffiliate: true,
      provider: "getyourguide",
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
  return museumSlug in GYG_MUSEUM_MAP;
}
