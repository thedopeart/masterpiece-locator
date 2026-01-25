import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-black mt-16">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/masterpiece-logo.png"
                alt="Masterpiece Locator"
                width={488}
                height={316}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-neutral-400 text-sm mb-6 max-w-xs leading-relaxed">
              Find where famous paintings are displayed. Search 4,000+ masterpieces across 700+ museums worldwide.
            </p>
            <Link
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-neutral-900 px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-neutral-100 transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop Luxury Wall Art
            </Link>
          </div>

          {/* Browse Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Browse</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/artists" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  All Artists
                </Link>
              </li>
              <li>
                <Link href="/museums" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  All Museums
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/movements" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Art Movements
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Search Artworks
                </Link>
              </li>
              <li>
                <Link href="/discover" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Discover Art
                </Link>
              </li>
              <li>
                <Link href="/auction-records/most-expensive" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Auction Records
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-[#C9A84C] hover:text-[#d4b45a] transition-colors text-sm font-medium">
                  Submit Your Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Artworks Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Popular</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/art/mona-lisa" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Mona Lisa
                </Link>
              </li>
              <li>
                <Link href="/art/the-starry-night" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  The Starry Night
                </Link>
              </li>
              <li>
                <Link href="/art/the-scream" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  The Scream
                </Link>
              </li>
              <li>
                <Link href="/art/girl-with-a-pearl-earring" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Girl with a Pearl Earring
                </Link>
              </li>
              <li>
                <Link href="/art/the-birth-of-venus" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  The Birth of Venus
                </Link>
              </li>
              <li>
                <Link href="/art/the-last-supper" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  The Last Supper
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Museums Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Museums</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/museum/louvre-paris-france" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  The Louvre
                </Link>
              </li>
              <li>
                <Link href="/museum/moma" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  MoMA
                </Link>
              </li>
              <li>
                <Link href="/museum/met" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  The Met
                </Link>
              </li>
              <li>
                <Link href="/museum/uffizi-gallery-florence-italy" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Uffizi Gallery
                </Link>
              </li>
              <li>
                <Link href="/museum/rijksmuseum" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Rijksmuseum
                </Link>
              </li>
              <li>
                <Link href="/museum/national-gallery" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  National Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Artists Column */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Artists</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/artist/van-gogh" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Van Gogh
                </Link>
              </li>
              <li>
                <Link href="/artist/leonardo-da-vinci" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Da Vinci
                </Link>
              </li>
              <li>
                <Link href="/artist/claude-monet" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Monet
                </Link>
              </li>
              <li>
                <Link href="/artist/pablo-picasso" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Picasso
                </Link>
              </li>
              <li>
                <Link href="/artist/rembrandt" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Rembrandt
                </Link>
              </li>
              <li>
                <Link href="/artist/michelangelo" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
                  Michelangelo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Movements Row */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Art Movements</h4>
          <div className="flex flex-wrap gap-3">
            <Link href="/movement/impressionism" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Impressionism
            </Link>
            <Link href="/movement/renaissance" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Renaissance
            </Link>
            <Link href="/movement/baroque" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Baroque
            </Link>
            <Link href="/movement/post-impressionism" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Post-Impressionism
            </Link>
            <Link href="/movement/surrealism" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Surrealism
            </Link>
            <Link href="/movement/abstract-expressionism" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Abstract Expressionism
            </Link>
            <Link href="/movement/cubism" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Cubism
            </Link>
            <Link href="/movement/romanticism" className="px-4 py-2 bg-neutral-700 border border-neutral-600 hover:bg-neutral-600 hover:border-neutral-500 text-white rounded-lg text-sm font-medium transition-all">
              Romanticism
            </Link>
          </div>
        </div>

        {/* Cities Row */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Top Art Cities</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/city/paris" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Paris
            </Link>
            <Link href="/city/new-york" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              New York
            </Link>
            <Link href="/city/london" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              London
            </Link>
            <Link href="/city/amsterdam" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Amsterdam
            </Link>
            <Link href="/city/florence" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Florence
            </Link>
            <Link href="/city/madrid" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Madrid
            </Link>
            <Link href="/city/rome" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Rome
            </Link>
            <Link href="/city/berlin" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Berlin
            </Link>
            <Link href="/city/chicago" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Chicago
            </Link>
            <Link href="/city/vienna" className="text-neutral-300 hover:text-white transition-colors text-sm font-medium">
              Vienna
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()} Masterpiece Locator. A project by{" "}
              <Link
                href="https://luxurywallart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C] hover:text-[#d4b45a] transition-colors"
              >
                LuxuryWallArt.com
              </Link>
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://luxurywallart.com/pages/about-us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="https://luxurywallart.com/pages/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="https://luxurywallart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
              >
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
