"use client";

import { FavoritesProvider } from "@/contexts/FavoritesContext";
import { TripPlannerProvider } from "@/contexts/TripPlannerContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <FavoritesProvider>
        <TripPlannerProvider>
          {children}
        </TripPlannerProvider>
      </FavoritesProvider>
    </ToastProvider>
  );
}
