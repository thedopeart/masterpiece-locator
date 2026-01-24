"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface TripMuseum {
  id: string;
  slug: string;
  name: string;
  city: string;
  country: string;
  imageUrl?: string;
  artworkCount?: number;
  addedAt: number;
}

interface TripPlannerContextType {
  museums: TripMuseum[];
  isInTrip: (slug: string) => boolean;
  addMuseum: (museum: Omit<TripMuseum, "addedAt">) => void;
  removeMuseum: (slug: string) => void;
  toggleMuseum: (museum: Omit<TripMuseum, "addedAt">) => void;
  clearTrip: () => void;
  reorderMuseums: (startIndex: number, endIndex: number) => void;
  museumCount: number;
}

const TripPlannerContext = createContext<TripPlannerContextType | undefined>(undefined);

const STORAGE_KEY = "masterpiece-trip";

export function TripPlannerProvider({ children }: { children: ReactNode }) {
  const [museums, setMuseums] = useState<TripMuseum[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setMuseums(parsed);
        }
      }
    } catch (e) {
      console.error("Error loading trip:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever museums change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(museums));
      } catch (e) {
        console.error("Error saving trip:", e);
      }
    }
  }, [museums, isLoaded]);

  const isInTrip = useCallback((slug: string) => {
    return museums.some(m => m.slug === slug);
  }, [museums]);

  const addMuseum = useCallback((museum: Omit<TripMuseum, "addedAt">) => {
    setMuseums(prev => {
      if (prev.some(m => m.slug === museum.slug)) return prev;
      return [...prev, { ...museum, addedAt: Date.now() }];
    });
  }, []);

  const removeMuseum = useCallback((slug: string) => {
    setMuseums(prev => prev.filter(m => m.slug !== slug));
  }, []);

  const toggleMuseum = useCallback((museum: Omit<TripMuseum, "addedAt">) => {
    setMuseums(prev => {
      const exists = prev.some(m => m.slug === museum.slug);
      if (exists) {
        return prev.filter(m => m.slug !== museum.slug);
      }
      return [...prev, { ...museum, addedAt: Date.now() }];
    });
  }, []);

  const clearTrip = useCallback(() => {
    setMuseums([]);
  }, []);

  const reorderMuseums = useCallback((startIndex: number, endIndex: number) => {
    setMuseums(prev => {
      const result = Array.from(prev);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    });
  }, []);

  return (
    <TripPlannerContext.Provider
      value={{
        museums,
        isInTrip,
        addMuseum,
        removeMuseum,
        toggleMuseum,
        clearTrip,
        reorderMuseums,
        museumCount: museums.length,
      }}
    >
      {children}
    </TripPlannerContext.Provider>
  );
}

export function useTripPlanner() {
  const context = useContext(TripPlannerContext);
  if (context === undefined) {
    throw new Error("useTripPlanner must be used within a TripPlannerProvider");
  }
  return context;
}
