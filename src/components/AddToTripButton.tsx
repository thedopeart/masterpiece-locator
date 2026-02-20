"use client";

import { useTripPlanner } from "@/contexts/TripPlannerContext";
import { useToast } from "@/contexts/ToastContext";

interface AddToTripButtonProps {
  museum: {
    id: string;
    slug: string;
    name: string;
    city: string;
    country: string;
    imageUrl?: string | null;
    artworkCount?: number;
  };
  variant?: "button" | "icon";
  className?: string;
}

export default function AddToTripButton({ museum, variant = "button", className = "" }: AddToTripButtonProps) {
  const { isInTrip, toggleMuseum } = useTripPlanner();
  const { showToast } = useToast();
  const inTrip = isInTrip(museum.slug);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const wasInTrip = inTrip;
    toggleMuseum({
      id: museum.id,
      slug: museum.slug,
      name: museum.name,
      city: museum.city,
      country: museum.country,
      imageUrl: museum.imageUrl || undefined,
      artworkCount: museum.artworkCount,
    });
    if (wasInTrip) {
      showToast("Removed from trip");
    } else {
      showToast(`${museum.name} added to trip`);
    }
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
          inTrip
            ? "bg-[#C9A84C] text-white shadow-lg"
            : "bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
        } ${className}`}
        aria-label={inTrip ? "Remove from trip" : "Add to trip"}
        title={inTrip ? "Remove from trip" : "Add to trip"}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {inTrip ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          )}
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        inTrip
          ? "bg-[#C9A84C] text-black hover:bg-[#b8973f]"
          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
      } ${className}`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {inTrip ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        )}
      </svg>
      {inTrip ? "In Your Trip" : "Add to Trip"}
    </button>
  );
}
