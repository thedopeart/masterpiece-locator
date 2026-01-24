import { MuseumPracticalData } from "@/types/museum-hours";
import { capitalize } from "@/lib/museum-hours";

interface MuseumSchemaProps {
  data: MuseumPracticalData;
  imageUrl?: string;
}

// Generate Museum schema.org structured data for rich results
export default function MuseumSchema({ data, imageUrl }: MuseumSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: data.name,
    alternateName: data.shortName !== data.name ? data.shortName : undefined,
    image: imageUrl || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.location.address,
      addressLocality: data.location.city,
      addressRegion: data.location.state || undefined,
      postalCode: data.location.postalCode,
      addressCountry: data.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.location.coordinates.lat,
      longitude: data.location.coordinates.lng,
    },
    url: data.contact.website,
    telephone: data.contact.phone,
    openingHoursSpecification: Object.entries(data.hours.regular)
      .filter(([_, hours]) => !hours.closed && hours.open && hours.close)
      .map(([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: capitalize(day),
        opens: hours.open,
        closes: hours.close,
      })),
    priceRange: data.admission.adult === 0
      ? "Free"
      : `${data.admission.currency} ${data.admission.child}-${data.admission.adult}`,
    isAccessibleForFree: data.admission.adult === 0,
    publicAccess: true,
    // Additional useful properties
    ...(data.accessibility.wheelchairAccessible && {
      accessibilityFeature: [
        "wheelchairAccessible",
        ...(data.accessibility.audioGuide ? ["audioDescription"] : []),
        ...(data.accessibility.brailleGuides ? ["brailleSignage"] : []),
        ...(data.accessibility.signLanguageTours ? ["signLanguageInterpretation"] : []),
      ],
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Generate LocalBusiness schema for additional visibility
export function MuseumLocalBusinessSchema({ data, imageUrl }: MuseumSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: data.name,
    image: imageUrl || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.location.address,
      addressLocality: data.location.city,
      addressRegion: data.location.state || undefined,
      postalCode: data.location.postalCode,
      addressCountry: data.location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.location.coordinates.lat,
      longitude: data.location.coordinates.lng,
    },
    url: data.contact.website,
    telephone: data.contact.phone,
    openingHours: Object.entries(data.hours.regular)
      .filter(([_, hours]) => !hours.closed && hours.open && hours.close)
      .map(([day, hours]) => `${day.substring(0, 2).toUpperCase()} ${hours.open}-${hours.close}`)
      .join(", "),
    priceRange: data.admission.adult === 0
      ? "Free"
      : data.admission.currency === "USD"
        ? "$".repeat(Math.min(4, Math.ceil(data.admission.adult / 15)))
        : data.admission.currency === "GBP"
          ? "£".repeat(Math.min(4, Math.ceil(data.admission.adult / 12)))
          : "€".repeat(Math.min(4, Math.ceil(data.admission.adult / 10))),
    touristType: ["Art Lovers", "Culture Enthusiasts", "Families"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
