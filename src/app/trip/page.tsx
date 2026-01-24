"use client";

import { useTripPlanner } from "@/contexts/TripPlannerContext";
import Link from "next/link";
import Image from "next/image";

export default function TripPlannerPage() {
  const { museums, removeMuseum, clearTrip, reorderMuseums } = useTripPlanner();

  // Group museums by city
  const museumsByCity = museums.reduce((acc, museum) => {
    const key = `${museum.city}, ${museum.country}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(museum);
    return acc;
  }, {} as Record<string, typeof museums>);

  const cities = Object.keys(museumsByCity);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white py-12">
        <div className="max-w-[1400px] mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-neutral-400 hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-neutral-600">/</span>
            <span className="text-white">Plan Your Visit</span>
          </nav>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Plan Your Visit</h1>
              <p className="text-neutral-400">
                {museums.length === 0
                  ? "Add museums to plan your art trip"
                  : `${museums.length} museum${museums.length !== 1 ? "s" : ""} in ${cities.length} ${cities.length !== 1 ? "cities" : "city"}`}
              </p>
            </div>
            {museums.length > 0 && (
              <button
                onClick={() => {
                  if (confirm("Clear your trip itinerary?")) {
                    clearTrip();
                  }
                }}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {museums.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
              <svg className="w-10 h-10 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">No museums in your trip yet</h2>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
              Browse museums and click "Add to Trip" to start planning. Your itinerary is stored locally on this device.
            </p>
            <Link
              href="/museums"
              className="inline-block bg-[#C9A84C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#b8973f] transition-colors"
            >
              Browse Museums
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Museum List */}
            <div className="lg:col-span-2">
              {cities.map((city, cityIndex) => (
                <div key={city} className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#C9A84C] text-white flex items-center justify-center font-semibold text-sm">
                      {cityIndex + 1}
                    </div>
                    <h2 className="text-xl font-semibold text-neutral-900">{city}</h2>
                    <span className="text-sm text-neutral-500">
                      {museumsByCity[city].length} museum{museumsByCity[city].length !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="space-y-4 ml-11">
                    {museumsByCity[city].map((museum, index) => (
                      <div
                        key={museum.slug}
                        className="flex gap-4 p-4 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors"
                      >
                        <Link href={`/museum/${museum.slug}`} className="shrink-0">
                          <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-neutral-100">
                            {museum.imageUrl ? (
                              <Image
                                src={museum.imageUrl}
                                alt={museum.name}
                                fill
                                className="object-cover"
                                sizes="96px"
                                unoptimized
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-300">
                                <span className="text-2xl font-light text-neutral-400">{museum.name.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                        </Link>
                        <div className="flex-1 min-w-0">
                          <Link href={`/museum/${museum.slug}`}>
                            <h3 className="font-semibold text-neutral-900 hover:text-[#C9A84C] transition-colors">
                              {museum.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-neutral-500 mt-1">
                            {museum.city}, {museum.country}
                          </p>
                          {museum.artworkCount && (
                            <p className="text-xs text-neutral-400 mt-2">
                              {museum.artworkCount} artwork{museum.artworkCount !== 1 ? "s" : ""} in our database
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          <button
                            onClick={() => removeMuseum(museum.slug)}
                            className="p-2 text-neutral-400 hover:text-red-500 transition-colors"
                            title="Remove from trip"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Trip Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Summary Card */}
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-4">Trip Summary</h3>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-neutral-500">Museums</dt>
                      <dd className="font-medium text-neutral-900">{museums.length}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-neutral-500">Cities</dt>
                      <dd className="font-medium text-neutral-900">{cities.length}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-neutral-500">Total Artworks</dt>
                      <dd className="font-medium text-neutral-900">
                        {museums.reduce((sum, m) => sum + (m.artworkCount || 0), 0)}+
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Tips */}
                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200/50">
                  <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Trip Tips
                  </h3>
                  <ul className="text-sm text-neutral-700 space-y-2">
                    <li>• Book tickets in advance for popular museums</li>
                    <li>• Check opening hours before you go</li>
                    <li>• Allow 2-3 hours per major museum</li>
                    <li>• Consider museum passes for multiple visits</li>
                  </ul>
                </div>

                {/* Export Options */}
                <div className="text-center">
                  <p className="text-xs text-neutral-500 mb-2">
                    Your trip is saved locally in your browser
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
