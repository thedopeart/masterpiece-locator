// Types for museum practical information (hours, admission, etc.)

export interface DayHours {
  open: string | null;
  close: string | null;
  closed?: boolean;
}

export interface HolidayException {
  date: string;
  closed: boolean;
  reason: string;
}

export interface MuseumHours {
  regular: {
    sunday: DayHours;
    monday: DayHours;
    tuesday: DayHours;
    wednesday: DayHours;
    thursday: DayHours;
    friday: DayHours;
    saturday: DayHours;
  };
  exceptions: HolidayException[];
  notes: string;
  lastUpdated: string;
}

export interface MuseumAdmission {
  adult: number;
  senior: number;
  seniorAge: number | null;
  student: number;
  child: number;
  childMaxAge: number;
  currency: string;
  notes: string;
  freeDay: string | null;
  freeHours: string | null;
  memberFree: boolean;
}

export interface MuseumTickets {
  onlineUrl: string;
  advanceRequired: boolean;
  advanceRecommended: boolean;
  advanceWindow: string;
  sameDayAvailable: boolean;
  skipTheLine: boolean;
  affiliateUrl: string | null;
}

export interface CrowdData {
  overall: string;
  bestDays: string[];
  worstDays: string[];
  bestTimes: string[];
  worstTimes: string[];
  bestMonths: string[];
  worstMonths: string[];
  seasonalNotes: string;
  avgVisitDuration: string;
  recommendedDuration: string;
}

export interface AccessibilityInfo {
  wheelchairAccessible: boolean;
  wheelchairsAvailable: boolean;
  wheelchairReservation: boolean;
  audioGuide: boolean;
  audioGuideLanguages: string[];
  signLanguageTours: boolean;
  brailleGuides: boolean;
  serviceAnimals: boolean;
}

export interface MuseumAmenities {
  restaurant: boolean;
  cafe: boolean;
  giftShop: boolean;
  coatCheck: boolean;
  lockers: boolean;
  wifi: boolean;
  parking: boolean;
  nearbyParking: string;
}

export interface MustSeeItem {
  artwork: string;
  name: string;
  artist?: string;
  location: string;
  note?: string;
}

export interface MuseumLocation {
  address: string;
  city: string;
  state: string | null;
  postalCode: string;
  country: string;
  neighborhood: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface MuseumContact {
  phone: string;
  website: string;
  email: string | null;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface CollectionStats {
  totalArtworks: number;
  onDisplay: number;
  source?: string;
}

export interface MuseumPracticalData {
  slug: string;
  name: string;
  shortName: string;
  location: MuseumLocation;
  contact: MuseumContact;
  hours: MuseumHours;
  admission: MuseumAdmission;
  tickets: MuseumTickets;
  crowdData: CrowdData;
  tips: string[];
  accessibility: AccessibilityInfo;
  amenities: MuseumAmenities;
  mustSee: MustSeeItem[];
  faqs?: FAQItem[];
  gallery?: GalleryImage[];
  collectionStats?: CollectionStats;
}
