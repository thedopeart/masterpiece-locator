"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { href: "/artists", label: "Artists", icon: "🎨" },
  { href: "/museums", label: "Museums", icon: "🏛️" },
  { href: "/cities", label: "Cities", icon: "🌍" },
  { href: "/movements", label: "Movements", icon: "🖼️" },
  { href: "/era/renaissance", label: "Eras", icon: "📜" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
          <div className="hidden md:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-[#C9A84C]/20 text-[#C9A84C]"
                    : "text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                </span>
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#C9A84C] rounded-full" />
                )}
              </Link>
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
              className="hidden sm:inline-flex items-center gap-2 text-sm bg-gradient-to-r from-[#C9A84C] to-[#b8973f] text-black font-semibold px-5 py-2.5 rounded-lg hover:from-[#d4b45a] hover:to-[#C9A84C] transition-all shadow-md hover:shadow-lg hover:shadow-[#C9A84C]/20"
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all flex items-center gap-3 ${
                    isActive(link.href)
                      ? "bg-[#C9A84C]/20 text-[#C9A84C]"
                      : "text-neutral-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-lg">{link.icon}</span>
                  {link.label}
                </Link>
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
