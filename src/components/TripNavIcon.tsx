"use client";

import Link from "next/link";
import { useTripPlanner } from "@/contexts/TripPlannerContext";

export default function TripNavIcon() {
  const { museumCount } = useTripPlanner();

  return (
    <Link
      href="/trip"
      className="hidden sm:inline-flex items-center gap-1.5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all px-3 py-2 rounded-lg text-sm"
      aria-label="Plan your visit"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="font-medium">Trip</span>
      {museumCount > 0 && (
        <span className="bg-[#C9A84C] text-black text-[10px] font-bold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
          {museumCount}
        </span>
      )}
    </Link>
  );
}
