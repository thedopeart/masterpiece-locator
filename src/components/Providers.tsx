"use client";

import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { TripPlannerProvider } from "@/contexts/TripPlannerContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <FavoritesProvider>
      <TripPlannerProvider>
        {children}
      </TripPlannerProvider>
    </FavoritesProvider>
  );
}
