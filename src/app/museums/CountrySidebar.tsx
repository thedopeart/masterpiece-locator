"use client";

import { useEffect, useState } from "react";

interface CountryData {
  name: string;
  slug: string;
  totalArtworks: number;
  museumCount: number;
}

interface CountrySidebarProps {
  countries: CountryData[];
}

export default function CountrySidebar({ countries }: CountrySidebarProps) {
  const [activeCountry, setActiveCountry] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = countries.map((c) => ({
        slug: c.slug,
        element: document.getElementById(c.slug),
      }));

      // Find the section currently in view
      const scrollPosition = window.scrollY + 100; // offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveCountry(section.slug);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [countries]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      const offsetTop = element.offsetTop - 16; // small offset from top
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveCountry(slug);
    }
  };

  return (
    <aside className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-4">
        <h3 className="font-semibold text-neutral-900 mb-3 text-sm uppercase tracking-wide">
          Browse by Country
        </h3>
        <nav className="space-y-0.5 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin">
          {countries.map((country) => (
            <a
              key={country.slug}
              href={`#${country.slug}`}
              onClick={(e) => handleClick(e, country.slug)}
              className={`block px-3 py-1.5 rounded text-sm transition-colors ${
                activeCountry === country.slug
                  ? "bg-neutral-900 text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
              }`}
            >
              <span className="flex items-center justify-between">
                <span className="truncate">{country.name}</span>
                <span
                  className={`text-xs ml-2 ${
                    activeCountry === country.slug
                      ? "text-neutral-400"
                      : "text-neutral-400"
                  }`}
                >
                  {country.museumCount}
                </span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
