import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Browse our collection of famous artworks and museums.",
};

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        {/* Large 404 */}
        <div className="text-8xl md:text-9xl font-bold text-neutral-200 mb-4">
          404
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
          This Masterpiece Is Missing
        </h1>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved,
          or perhaps the artwork traveled to another museum.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/search"
            className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b8973f] transition-colors"
          >
            Search Artworks
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500 mb-4">Or try one of these:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/artists"
              className="text-neutral-700 hover:text-[#C9A84C] transition-colors"
            >
              Browse Artists
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              href="/museums"
              className="text-neutral-700 hover:text-[#C9A84C] transition-colors"
            >
              Browse Museums
            </Link>
            <span className="text-neutral-300">|</span>
            <Link
              href="/movements"
              className="text-neutral-700 hover:text-[#C9A84C] transition-colors"
            >
              Art Movements
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
