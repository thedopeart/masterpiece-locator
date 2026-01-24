import { MuseumPracticalData, DayHours } from "@/types/museum-hours";

// Import museum data files using relative paths from src/lib/
import louvreData from "../../data/museums/louvre.json";
import metData from "../../data/museums/met.json";
import orsayData from "../../data/museums/orsay.json";
import nationalGalleryData from "../../data/museums/national-gallery-london.json";
import uffizi from "../../data/museums/uffizi.json";

// Map of database slugs to practical data
// Slugs must match exactly what's in the database
const museumDataMap: Record<string, MuseumPracticalData> = {
  "louvre-paris-france": louvreData as MuseumPracticalData,
  "met": metData as MuseumPracticalData,
  "musee-dorsay": orsayData as MuseumPracticalData,
  "national-gallery": nationalGalleryData as MuseumPracticalData,
  "uffizi-gallery-florence-italy": uffizi as MuseumPracticalData,
};

// Get practical data for a museum by its database slug
export function getMuseumPracticalData(dbSlug: string): MuseumPracticalData | null {
  // Try direct match first
  if (museumDataMap[dbSlug]) {
    return museumDataMap[dbSlug];
  }

  // Try matching by normalizing the slug
  const normalizedSlug = dbSlug.toLowerCase().replace(/[^a-z0-9]/g, "-");

  for (const [key, data] of Object.entries(museumDataMap)) {
    const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, "-");
    if (normalizedKey === normalizedSlug || data.slug === dbSlug) {
      return data;
    }
  }

  return null;
}

// Get current day of week
export function getCurrentDay(): keyof MuseumPracticalData["hours"]["regular"] {
  const days: (keyof MuseumPracticalData["hours"]["regular"])[] = [
    "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
  ];
  return days[new Date().getDay()];
}

// Check if museum is currently open
export function isMuseumOpen(hours: MuseumPracticalData["hours"], timezone?: string): boolean {
  const now = new Date();
  const day = getCurrentDay();
  const dayHours = hours.regular[day];

  if (dayHours.closed || !dayHours.open || !dayHours.close) {
    return false;
  }

  // Parse times
  const currentTime = now.getHours() * 60 + now.getMinutes();
  const [openHour, openMin] = dayHours.open.split(":").map(Number);
  const [closeHour, closeMin] = dayHours.close.split(":").map(Number);

  const openTime = openHour * 60 + openMin;
  const closeTime = closeHour * 60 + closeMin;

  return currentTime >= openTime && currentTime < closeTime;
}

// Format hours for display (e.g., "9:00 AM - 6:00 PM")
export function formatHours(hours: DayHours): string {
  if (hours.closed || !hours.open || !hours.close) {
    return "Closed";
  }

  return `${formatTime(hours.open)} - ${formatTime(hours.close)}`;
}

// Format time from 24h to 12h format
export function formatTime(time: string): string {
  const [hour, minute] = time.split(":").map(Number);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`;
}

// Capitalize first letter
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Format date for display
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

// Get a summary of hours for meta description
export function getHoursSummary(hours: MuseumPracticalData["hours"]): string {
  const days = Object.entries(hours.regular);
  const openDays = days.filter(([_, h]) => !h.closed);

  if (openDays.length === 0) return "Hours vary";

  // Find most common hours
  const hourStrings = openDays.map(([_, h]) => `${h.open}-${h.close}`);
  const mostCommon = hourStrings.sort((a, b) =>
    hourStrings.filter(v => v === b).length - hourStrings.filter(v => v === a).length
  )[0];

  const [open, close] = mostCommon.split("-");
  return `Open ${formatTime(open)} - ${formatTime(close)}`;
}

// Get closed days as a string
export function getClosedDays(hours: MuseumPracticalData["hours"]): string {
  const closedDays = Object.entries(hours.regular)
    .filter(([_, h]) => h.closed)
    .map(([day]) => capitalize(day));

  if (closedDays.length === 0) return "Open daily";
  if (closedDays.length === 1) return closedDays[0];
  return closedDays.join(" and ");
}

// Format price with currency
export function formatPrice(amount: number, currency: string): string {
  if (amount === 0) return "Free";

  const symbols: Record<string, string> = {
    USD: "$",
    EUR: "€",
    GBP: "£",
  };

  const symbol = symbols[currency] || currency + " ";
  return `${symbol}${amount}`;
}

// Generate FAQs from practical data
// Uses custom FAQs if provided in the JSON, otherwise generates basic FAQs
export function generatePracticalFAQs(data: MuseumPracticalData): { question: string; answer: string }[] {
  // If custom FAQs are provided in the JSON, use those instead
  if (data.faqs && data.faqs.length > 0) {
    return data.faqs;
  }

  // Otherwise generate basic FAQs from the data
  const faqs = [];

  // FAQ 1: Hours
  const closedDays = getClosedDays(data.hours);
  faqs.push({
    question: `What are ${data.shortName}'s hours?`,
    answer: `<strong>${data.shortName}</strong> is open ${getHoursSummary(data.hours)}. The museum is closed on <strong>${closedDays}</strong>.${data.hours.notes ? ` ${data.hours.notes}` : ""}`,
  });

  // FAQ 2: Admission
  faqs.push({
    question: `How much does ${data.shortName} cost?`,
    answer: `Admission is <strong>${formatPrice(data.admission.adult, data.admission.currency)}</strong> for adults${data.admission.senior !== data.admission.adult ? `, ${formatPrice(data.admission.senior, data.admission.currency)} for seniors` : ""}${data.admission.child === 0 ? `, and free for children under ${data.admission.childMaxAge}` : ""}. ${data.admission.notes}`,
  });

  // FAQ 3: Best time to visit
  faqs.push({
    question: `What is the best time to visit ${data.shortName}?`,
    answer: `The best days to visit are <strong>${data.crowdData.bestDays.map(capitalize).join(", ")}</strong>, ideally arriving at <strong>${data.crowdData.bestTimes[0]}</strong>. Avoid ${data.crowdData.worstDays.map(capitalize).join(" and ")} when crowds are heaviest. ${data.crowdData.seasonalNotes}`,
  });

  // FAQ 4: How long to spend
  faqs.push({
    question: `How long should I spend at ${data.shortName}?`,
    answer: `Plan for <strong>${data.crowdData.recommendedDuration}</strong>. Most visitors spend ${data.crowdData.avgVisitDuration} exploring the collection.`,
  });

  // FAQ 5: Tickets
  if (data.tickets.advanceRecommended) {
    faqs.push({
      question: `Do I need to book ${data.shortName} tickets in advance?`,
      answer: `Advance booking is <strong>${data.tickets.advanceRequired ? "required" : "recommended"}</strong>. You can book up to ${data.tickets.advanceWindow} ahead at <a href="${data.tickets.onlineUrl}" target="_blank" rel="noopener noreferrer">the official website</a>. ${data.tickets.skipTheLine ? "Online tickets include skip-the-line access." : ""}`,
    });
  }

  return faqs;
}
