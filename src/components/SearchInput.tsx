"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const HISTORY_KEY = "search-history";
const MAX_HISTORY = 5;

interface SearchInputProps {
  defaultValue?: string;
}

export default function SearchInput({ defaultValue = "" }: SearchInputProps) {
  const [query, setQuery] = useState(defaultValue);
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const saveSearch = (term: string) => {
    if (!term.trim()) return;
    const updated = [term, ...history.filter((h) => h !== term)].slice(0, MAX_HISTORY);
    setHistory(updated);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      saveSearch(query.trim());
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const selectHistory = (term: string) => {
    setQuery(term);
    setShowHistory(false);
    saveSearch(term);
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem(HISTORY_KEY);
    setShowHistory(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => history.length > 0 && setShowHistory(true)}
          onBlur={() => setTimeout(() => setShowHistory(false), 200)}
          placeholder="Try 'Mona Lisa', 'Van Gogh', or 'Louvre'..."
          className="w-full px-5 py-3 pr-12 rounded-lg bg-white text-black focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-neutral-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Search History Dropdown */}
      {showHistory && history.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden z-50">
          <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-100">
            <span className="text-xs text-neutral-500">Recent searches</span>
            <button
              type="button"
              onClick={clearHistory}
              className="text-xs text-neutral-400 hover:text-neutral-600"
            >
              Clear
            </button>
          </div>
          {history.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => selectHistory(term)}
              className="w-full px-4 py-2 text-left text-neutral-700 hover:bg-neutral-50 flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {term}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}
