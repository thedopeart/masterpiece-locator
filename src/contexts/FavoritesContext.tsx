"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface FavoriteItem {
  id: string;
  slug: string;
  title: string;
  artistName?: string;
  imageUrl?: string;
  museumName?: string;
  addedAt: number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  isLoaded: boolean;
  isFavorite: (slug: string) => boolean;
  addFavorite: (item: Omit<FavoriteItem, "addedAt">) => void;
  removeFavorite: (slug: string) => void;
  toggleFavorite: (item: Omit<FavoriteItem, "addedAt">) => void;
  clearFavorites: () => void;
  favoritesCount: number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

const STORAGE_KEY = "masterpiece-favorites";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (e) {
      console.error("Error loading favorites:", e);
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch (e) {
        console.error("Error saving favorites:", e);
      }
    }
  }, [favorites, isLoaded]);

  const isFavorite = useCallback((slug: string) => {
    return favorites.some(f => f.slug === slug);
  }, [favorites]);

  const addFavorite = useCallback((item: Omit<FavoriteItem, "addedAt">) => {
    setFavorites(prev => {
      if (prev.some(f => f.slug === item.slug)) return prev;
      return [...prev, { ...item, addedAt: Date.now() }];
    });
  }, []);

  const removeFavorite = useCallback((slug: string) => {
    setFavorites(prev => prev.filter(f => f.slug !== slug));
  }, []);

  const toggleFavorite = useCallback((item: Omit<FavoriteItem, "addedAt">) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.slug === item.slug);
      if (exists) {
        return prev.filter(f => f.slug !== item.slug);
      }
      return [...prev, { ...item, addedAt: Date.now() }];
    });
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoaded,
        isFavorite,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        clearFavorites,
        favoritesCount: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
