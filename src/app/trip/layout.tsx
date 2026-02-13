import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan Your Museum Trip | Art Travel Itinerary Builder",
  description:
    "Build your art museum itinerary. Add museums to your trip, organize by city, and plan the perfect art-focused vacation.",
  robots: { index: false, follow: true },
};

export default function TripLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
