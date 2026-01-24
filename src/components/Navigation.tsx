"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  {
    href: "/artists",
    label: "Artists",
    icon: "🎨",
    subItems: [
      { href: "/artists", label: "All Artists" },
      { href: "/artist/vincent-van-gogh", label: "Van Gogh" },
      { href: "/artist/claude-monet", label: "Monet" },
      { href: "/artist/pablo-picasso", label: "Picasso" },
      { href: "/artist/leonardo-da-vinci", label: "Da Vinci" },
      { href: "/artist/rembrandt", label: "Rembrandt" },
    ]
  },
  {
    href: "/museums",
    label: "Museums",
    icon: "🏛️",
    subItems: [
      { href: "/museums", label: "All Museums" },
      { href: "/museum/louvre", label: "The Louvre" },
      { href: "/museum/moma", label: "MoMA" },
      { href: "/museum/met", label: "The Met" },
      { href: "/museum/uffizi", label: "Uffizi Gallery" },
      { href: "/museum/rijksmuseum", label: "Rijksmuseum" },
    ]
  },
  {
    href: "/cities",
    label: "Cities",
    icon: "🌍",
    subItems: [
      { href: "/cities", label: "All Cities" },
      { href: "/city/paris", label: "Paris" },
      { href: "/city/new-york", label: "New York" },
      { href: "/city/london", label: "London" },
      { href: "/city/amsterdam", label: "Amsterdam" },
      { href: "/city/florence", label: "Florence" },
    ]
  },
  {
    href: "/movements",
    label: "Movements",
    icon: "🖼️",
    subItems: [
      { href: "/movements", label: "All Movements" },
      { href: "/movement/impressionism", label: "Impressionism" },
      { href: "/movement/renaissance", label: "Renaissance" },
      { href: "/movement/baroque", label: "Baroque" },
      { href: "/movement/post-impressionism", label: "Post-Impressionism" },
      { href: "/movement/surrealism", label: "Surrealism" },
    ]
  },
  {
    href: "/era/renaissance",
    label: "Eras",
    icon: "📜",
    subItems: [
      { href: "/era/renaissance", label: "Renaissance (1400-1600)" },
      { href: "/era/baroque", label: "Baroque (1600-1750)" },
      { href: "/era/19th-century", label: "19th Century" },
      { href: "/era/modern", label: "Modern (1900+)" },
    ]
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setClickedDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (!clickedDropdown) {
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!clickedDropdown) {
      setOpenDropdown(null);
    }
  };

  const handleClick = (label: string) => {
    if (clickedDropdown === label) {
      setClickedDropdown(null);
      setOpenDropdown(null);
    } else {
      setClickedDropdown(label);
      setOpenDropdown(label);
    }
  };

  const isActive = (href: string) => {
    if (href === "/era/renaissance") {
      return pathname.startsWith("/era/");
    }
    const basePath = href.replace(/s$/, "");
    return pathname === href || pathname.startsWith(basePath + "/");
  };

  return (
    <header className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 sticky top-0 z-50 shadow-lg">
      <nav className="max-w-[1400px] mx-auto px-4 py-3">
        <div className="flex items-center">
          {/* Logo */}
          <div className="md:w-56">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#C9A84C] to-[#a8893d] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-[#C9A84C]/30 transition-shadow">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="font-bold text-lg text-white tracking-tight block leading-tight">
                  Masterpiece
                </span>
                <span className="text-[#C9A84C] text-xs font-medium tracking-wider uppercase">
                  Locator
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-1 flex-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleClick(link.label)}
                  className={`relative px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive(link.href)
                      ? "bg-[#C9A84C]/20 text-[#C9A84C]"
                      : "text-neutral-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#C9A84C] rounded-full" />
                  )}
                </button>

                {/* Dropdown Menu */}
                {openDropdown === link.label && link.subItems && (
                  <div className="absolute top-full left-0 pt-2 z-[9999]">
                    <div className="min-w-[220px] bg-neutral-800 rounded-lg shadow-xl border border-neutral-700 py-2">
                      {link.subItems.map((subItem) => {
                        const isSubActive = pathname === subItem.href || pathname.startsWith(subItem.href + "/");
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            data-nav-link="true"
                            onClick={() => { setOpenDropdown(null); setClickedDropdown(null); }}
                            className={`block px-4 py-2.5 text-base font-medium transition-colors ${
                              isSubActive
                                ? "text-white bg-white/10"
                                : "text-neutral-300 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center justify-end gap-2 md:w-56 ml-auto">
            <Link
              href="/search"
              className="text-neutral-400 hover:text-white hover:bg-white/10 transition-all p-2.5 rounded-lg"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>

            <Link
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm bg-white text-neutral-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-neutral-100 transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Wall Art
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-700">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`w-full px-4 py-3 rounded-lg text-base font-medium transition-all flex items-center justify-between ${
                      isActive(link.href)
                        ? "bg-[#C9A84C]/20 text-[#C9A84C]"
                        : "text-neutral-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-lg">{link.icon}</span>
                      {link.label}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && link.subItems && (
                    <div className="ml-10 mt-1 mb-2 flex flex-col gap-1">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          data-nav-link="true"
                          onClick={() => { setIsOpen(false); setOpenDropdown(null); }}
                          className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="https://luxurywallart.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 px-4 py-3 bg-gradient-to-r from-[#C9A84C] to-[#b8973f] text-black rounded-lg text-base font-semibold text-center flex items-center justify-center gap-2 hover:from-[#d4b45a] hover:to-[#C9A84C] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Wall Art
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
