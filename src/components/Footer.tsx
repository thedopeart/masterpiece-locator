import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Browse</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/artists"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Artists
                </Link>
              </li>
              <li>
                <Link
                  href="/museums"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Museums
                </Link>
              </li>
              <li>
                <Link
                  href="/cities"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cities
                </Link>
              </li>
              <li>
                <Link
                  href="/movements"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Movements
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Popular</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/art/the-starry-night"
                  className="text-gray-600 hover:text-gray-900"
                >
                  The Starry Night
                </Link>
              </li>
              <li>
                <Link
                  href="/art/mona-lisa"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Mona Lisa
                </Link>
              </li>
              <li>
                <Link
                  href="/art/the-scream"
                  className="text-gray-600 hover:text-gray-900"
                >
                  The Scream
                </Link>
              </li>
              <li>
                <Link
                  href="/art/girl-with-a-pearl-earring"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Girl with a Pearl Earring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Top Museums</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/museum/louvre"
                  className="text-gray-600 hover:text-gray-900"
                >
                  The Louvre
                </Link>
              </li>
              <li>
                <Link
                  href="/museum/moma"
                  className="text-gray-600 hover:text-gray-900"
                >
                  MoMA
                </Link>
              </li>
              <li>
                <Link
                  href="/museum/met"
                  className="text-gray-600 hover:text-gray-900"
                >
                  The Met
                </Link>
              </li>
              <li>
                <Link
                  href="/museum/uffizi"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Uffizi Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Luxury Wall Art
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Inspired by the masters? Explore museum-quality canvas art for
              your home.
            </p>
            <Link
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
            >
              Shop Collection
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            Masterpiece Locator by{" "}
            <Link
              href="https://luxurywallart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              LuxuryWallArt.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
