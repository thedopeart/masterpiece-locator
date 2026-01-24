import { prisma } from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ERAS, getEraForYear, getEraSolidColorClass } from "@/lib/eras";

export const metadata: Metadata = {
  title: "Discover Art | Browse by Subject, Color & Era",
  description:
    "Explore famous artworks by subject, color palette, art movement, or era. Find portraits, landscapes, religious art, and more from museums worldwide.",
};

export const dynamic = "force-dynamic";

// Subject categories with their styleTags
const SUBJECTS = [
  { name: "Portraits", tag: "portrait", icon: "👤", color: "bg-rose-100 text-rose-800" },
  { name: "Landscapes", tag: "landscape", icon: "🏔️", color: "bg-emerald-100 text-emerald-800" },
  { name: "Religious", tag: "religious", icon: "✝️", color: "bg-amber-100 text-amber-800" },
  { name: "Mythology", tag: "mythology", icon: "⚡", color: "bg-purple-100 text-purple-800" },
  { name: "Still Life", tag: "still life", icon: "🍎", color: "bg-orange-100 text-orange-800" },
  { name: "History", tag: "history", icon: "⚔️", color: "bg-red-100 text-red-800" },
  { name: "Genre Scenes", tag: "genre", icon: "🎭", color: "bg-blue-100 text-blue-800" },
  { name: "Nude", tag: "nude", icon: "🎨", color: "bg-pink-100 text-pink-800" },
];

// Color categories
const COLORS = [
  { name: "Blue", color: "#1e40af", bgClass: "bg-blue-700" },
  { name: "Red", color: "#b91c1c", bgClass: "bg-red-700" },
  { name: "Green", color: "#15803d", bgClass: "bg-green-700" },
  { name: "Gold", color: "#ca8a04", bgClass: "bg-yellow-600" },
  { name: "Brown", color: "#78350f", bgClass: "bg-amber-900" },
  { name: "Black", color: "#171717", bgClass: "bg-neutral-900" },
  { name: "White", color: "#f5f5f5", bgClass: "bg-neutral-100 border border-neutral-300" },
  { name: "Pink", color: "#db2777", bgClass: "bg-pink-600" },
];

export default async function DiscoverPage() {
  // Get counts for each subject
  const subjectCounts = await Promise.all(
    SUBJECTS.map(async (subject) => {
      const count = await prisma.artwork.count({
        where: {
          styleTags: { has: subject.tag },
          imageUrl: { not: null },
        },
      });
      return { ...subject, count };
    })
  );

  // Get random featured artwork for each subject (merge with counts)
  const subjectPreviews = await Promise.all(
    subjectCounts.slice(0, 4).map(async (subject) => {
      const artworks = await prisma.artwork.findMany({
        where: {
          styleTags: { has: subject.tag },
          imageUrl: { not: null },
        },
        select: {
          id: true,
          slug: true,
          title: true,
          imageUrl: true,
          Artist: { select: { name: true } },
        },
        orderBy: { searchVolumeTier: "asc" },
        take: 4,
      });
      return { ...subject, artworks };
    })
  );

  // Get era counts
  const eraCounts = await Promise.all(
    ERAS.map(async (era) => {
      const count = await prisma.artwork.count({
        where: {
          year: { gte: era.startYear, lt: era.endYear },
          imageUrl: { not: null },
        },
      });
      return { ...era, count };
    })
  );

  // Get color counts (rough estimate based on primaryColors field)
  const colorCounts = await Promise.all(
    COLORS.map(async (color) => {
      const count = await prisma.artwork.count({
        where: {
          primaryColors: { has: color.name.toLowerCase() },
          imageUrl: { not: null },
        },
      });
      return { ...color, count };
    })
  );

  // Get a random "Surprise Me" artwork
  const totalArtworks = await prisma.artwork.count({
    where: { imageUrl: { not: null } },
  });
  const randomOffset = Math.floor(Math.random() * Math.max(0, totalArtworks - 1));
  const randomArtwork = await prisma.artwork.findFirst({
    where: { imageUrl: { not: null } },
    include: {
      Artist: { select: { name: true, slug: true } },
      Museum: { select: { name: true, city: true } },
    },
    skip: randomOffset,
    take: 1,
  });

  // Get top movements by artwork count
  const topMovements = await prisma.movement.findMany({
    include: {
      _count: { select: { Artist: true } },
    },
    orderBy: { Artist: { _count: "desc" } },
    take: 8,
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-neutral-600 mb-6">
          <Link href="/" className="hover:text-neutral-900">
            Home
          </Link>
          <span className="mx-2 text-neutral-400">/</span>
          <span className="font-medium text-neutral-900">Discover</span>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Discover Art
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore masterpieces by subject, color, era, or movement. Or let us surprise you.
          </p>
        </div>

        {/* Surprise Me */}
        {randomArtwork && (
          <section className="mb-12">
            <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={randomArtwork.imageUrl!}
                    alt={randomArtwork.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-flex items-center gap-2 bg-[#C9A84C]/20 text-[#C9A84C] px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Surprise Discovery
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {randomArtwork.title}
                  </h2>
                  {randomArtwork.Artist && (
                    <p className="text-neutral-300 mb-4">
                      by {randomArtwork.Artist.name}
                    </p>
                  )}
                  {randomArtwork.Museum && (
                    <p className="text-neutral-400 text-sm mb-6">
                      {randomArtwork.Museum.name}, {randomArtwork.Museum.city}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Link
                      href={`/artwork/${randomArtwork.slug}`}
                      className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8973f] transition-colors"
                    >
                      View This Artwork
                    </Link>
                    <Link
                      href="/discover"
                      className="inline-block border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                    >
                      Surprise Me Again
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Browse by Subject */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Browse by Subject</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {subjectPreviews.map((subject) => (
              <Link
                key={subject.tag}
                href={`/search?q=${encodeURIComponent(subject.tag)}`}
                className="group relative bg-neutral-100 rounded-xl overflow-hidden aspect-[4/3] hover:shadow-lg transition-all"
              >
                {/* Preview grid */}
                <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
                  {subject.artworks.slice(0, 4).map((artwork, i) => (
                    <div key={artwork.id} className="relative">
                      {artwork.imageUrl && (
                        <Image
                          src={artwork.imageUrl}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 25vw, 12vw"
                          unoptimized
                        />
                      )}
                    </div>
                  ))}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-2xl mb-1 block">{subject.icon}</span>
                    <h3 className="text-white font-semibold">{subject.name}</h3>
                    <p className="text-white/70 text-sm">{subject.count} artworks</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* More subjects */}
          <div className="flex flex-wrap gap-2 mt-4">
            {subjectCounts.slice(4).map((subject) => (
              <Link
                key={subject.tag}
                href={`/search?q=${encodeURIComponent(subject.tag)}`}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${subject.color} hover:opacity-80 transition-opacity`}
              >
                <span>{subject.icon}</span>
                {subject.name}
                <span className="opacity-70">({subject.count})</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Era */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-neutral-900">Browse by Era</h2>
            <Link href="/movements" className="text-sm text-[#C9A84C] hover:underline">
              View timeline →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {eraCounts.map((era) => (
              <Link
                key={era.slug}
                href={`/era/${era.slug}`}
                className="group bg-neutral-50 rounded-xl p-4 border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all text-center"
              >
                <div className={`w-10 h-10 ${getEraSolidColorClass(era)} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm`}>
                  {era.count > 999 ? "1k+" : era.count}
                </div>
                <h3 className="font-medium text-neutral-900 text-sm group-hover:text-[#C9A84C] transition-colors">
                  {era.shortName}
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  {era.slug === "medieval" ? "Before 1400" : era.slug === "contemporary" ? "1970+" : `${era.startYear}–${era.endYear}`}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Color */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-900 mb-6">Browse by Color</h2>
          <div className="flex flex-wrap gap-3">
            {colorCounts.map((color) => (
              <Link
                key={color.name}
                href={`/search?q=${encodeURIComponent(color.name.toLowerCase())}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all"
              >
                <div className={`w-8 h-8 rounded-full ${color.bgClass}`} />
                <div>
                  <p className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors">
                    {color.name}
                  </p>
                  <p className="text-xs text-neutral-500">{color.count} artworks</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Movement */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-neutral-900">Popular Movements</h2>
            <Link href="/movements" className="text-sm text-[#C9A84C] hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {topMovements.map((movement) => {
              const era = movement.startYear ? getEraForYear(movement.startYear) : null;
              return (
                <Link
                  key={movement.id}
                  href={`/movement/${movement.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all"
                >
                  {era && (
                    <div className={`w-3 h-3 rounded-full ${getEraSolidColorClass(era)} flex-shrink-0`} />
                  )}
                  <div className="min-w-0">
                    <p className="font-medium text-neutral-900 group-hover:text-[#C9A84C] transition-colors truncate">
                      {movement.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {movement.startYear}{movement.endYear ? `–${movement.endYear}` : "+"}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Search */}
        <section className="bg-neutral-50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Looking for something specific?
          </h2>
          <p className="text-neutral-600 mb-6">
            Search by artwork title, artist name, museum, or city
          </p>
          <form action="/search" method="GET" className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                name="q"
                placeholder="Try 'Mona Lisa', 'Van Gogh', or 'Paris'..."
                className="w-full px-5 py-4 pr-12 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-neutral-500 hover:text-neutral-700"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
