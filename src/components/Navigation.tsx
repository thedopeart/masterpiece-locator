"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/artists", label: "Artists" },
  { href: "/museums", label: "Museums" },
  { href: "/cities", label: "Cities" },
  { href: "/movements", label: "Movements" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Handle both /artists and /artist/[slug]
    const basePath = href.replace(/s$/, ""); // /artists -> /artist
    return pathname === href || pathname.startsWith(basePath + "/");
  };

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center">
          {/* Logo - fixed width on desktop for centering */}
          <div className="md:w-48">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-[#C9A84C]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-semibold text-lg text-neutral-900 tracking-tight hidden sm:inline">
                Masterpiece Locator
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-neutral-900 border-b-2 border-[#C9A84C] pb-1"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - fixed width on desktop for centering */}
          <div className="flex items-center justify-end gap-3 md:w-48 ml-auto">
            <Link
              href="/search"
              className="text-neutral-500 hover:text-neutral-900 transition-colors p-2"
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
              className="hidden sm:inline-block text-sm bg-black text-white px-4 py-2 rounded hover:bg-neutral-800 transition-colors"
            >
              Shop Wall Art
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
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
          <div className="md:hidden mt-4 pt-4 border-t border-neutral-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-neutral-100 text-neutral-900 border-l-4 border-[#C9A84C]"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://luxurywallart.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-3 py-3 bg-black text-white rounded-lg text-base font-medium text-center hover:bg-neutral-800 transition-colors"
              >
                Shop Wall Art
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
