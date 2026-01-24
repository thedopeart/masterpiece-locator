"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MuseumPracticalData } from "@/types/museum-hours";
import {
  formatHours,
  formatPrice,
  capitalize,
  formatDate,
  getCurrentDay,
  isMuseumOpen,
} from "@/lib/museum-hours";

interface Artist {
  id: string;
  slug: string;
  name: string;
  _count: { artworks: number };
}

interface MuseumPracticalInfoProps {
  data: MuseumPracticalData;
  artists?: Artist[];
}

// Chevron icon component for collapsible sections
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-neutral-500 transition-transform duration-200 ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function MuseumPracticalInfo({ data, artists = [] }: MuseumPracticalInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<string>("monday");

  // Collapsible section states - Hours and Admission collapsed by default
  const [hoursExpanded, setHoursExpanded] = useState(false);
  const [admissionExpanded, setAdmissionExpanded] = useState(false);
  const [bestTimeExpanded, setBestTimeExpanded] = useState(false);
  const [tipsExpanded, setTipsExpanded] = useState(false);
  const [artistsExpanded, setArtistsExpanded] = useState(false);

  useEffect(() => {
    setCurrentDay(getCurrentDay());
    setIsOpen(isMuseumOpen(data.hours));

    // Update every minute
    const interval = setInterval(() => {
      setIsOpen(isMuseumOpen(data.hours));
    }, 60000);

    return () => clearInterval(interval);
  }, [data.hours]);

  const todayHours = data.hours.regular[currentDay as keyof typeof data.hours.regular];

  // Get upcoming closures
  const upcomingClosures = data.hours.exceptions
    .filter((e) => new Date(e.date) > new Date())
    .slice(0, 3);

  return (
    <div className="space-y-4">
      {/* Buy Tickets Button - Green, Sticky on Desktop */}
      <div className="lg:sticky lg:top-4 z-20">
        <a
          href={data.tickets.onlineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#028161] text-white font-bold py-5 px-4 rounded-xl hover:bg-[#026b51] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
        >
          <span className="text-xl">Buy Tickets</span>
          {data.tickets.skipTheLine && (
            <span className="block text-sm font-normal mt-1.5 opacity-90">Skip the line with online tickets</span>
          )}
        </a>
      </div>

      {/* Hours Section - Combined with Open/Closed Status */}
      <section className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setHoursExpanded(!hoursExpanded)}
          className="w-full p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                  isOpen
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOpen ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                {isOpen ? "Open Now" : "Closed"}
              </span>
            </div>
            <span className="text-neutral-600 text-sm">
              {todayHours && !todayHours.closed ? (
                <>Today: <strong>{formatHours(todayHours)}</strong></>
              ) : (
                <span className="text-neutral-500">Closed today</span>
              )}
            </span>
          </div>
          <ChevronIcon isOpen={hoursExpanded} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            hoursExpanded ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4">
            <table className="w-full text-sm">
              <tbody>
                {(Object.entries(data.hours.regular) as [string, typeof todayHours][]).map(
                  ([day, hours]) => (
                    <tr
                      key={day}
                      className={`border-b border-neutral-100 last:border-0 ${
                        day === currentDay ? "bg-amber-50" : ""
                      }`}
                    >
                      <td className="py-2 font-medium text-neutral-700">
                        {capitalize(day)}
                        {day === currentDay && (
                          <span className="ml-2 text-xs text-amber-600 font-normal">
                            Today
                          </span>
                        )}
                      </td>
                      <td className="py-2 text-right text-neutral-600">
                        {formatHours(hours)}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>

            {data.hours.notes && (
              <p className="mt-3 text-sm text-neutral-500 bg-neutral-50 p-3 rounded-lg">
                {data.hours.notes}
              </p>
            )}

            {/* Holiday Closures */}
            {upcomingClosures.length > 0 && (
              <div className="mt-3 pt-3 border-t border-neutral-100">
                <h4 className="text-sm font-medium text-neutral-700 mb-2">
                  Upcoming Closures
                </h4>
                <ul className="text-sm text-neutral-600 space-y-1">
                  {upcomingClosures.map((exception) => (
                    <li key={exception.date} className="flex justify-between">
                      <span>{formatDate(exception.date)}</span>
                      <span className="text-neutral-500">{exception.reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Admission Section - Collapsible, default collapsed */}
      <section className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setAdmissionExpanded(!admissionExpanded)}
          className="w-full p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
        >
          <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            Admission
            <span className="text-sm font-normal text-neutral-500 ml-1">
              ({formatPrice(data.admission.adult, data.admission.currency)})
            </span>
          </h3>
          <ChevronIcon isOpen={admissionExpanded} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            admissionExpanded ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4">
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between py-1.5 border-b border-neutral-100">
                <span className="text-neutral-700">Adults</span>
                <span className="font-medium">
                  {formatPrice(data.admission.adult, data.admission.currency)}
                </span>
              </li>
              {data.admission.senior !== data.admission.adult && (
                <li className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-700">
                    Seniors{data.admission.seniorAge && ` (${data.admission.seniorAge}+)`}
                  </span>
                  <span className="font-medium">
                    {formatPrice(data.admission.senior, data.admission.currency)}
                  </span>
                </li>
              )}
              {data.admission.student !== data.admission.adult && (
                <li className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-700">Students</span>
                  <span className="font-medium">
                    {formatPrice(data.admission.student, data.admission.currency)}
                  </span>
                </li>
              )}
              <li className="flex justify-between py-1.5">
                <span className="text-neutral-700">
                  Children (under {data.admission.childMaxAge})
                </span>
                <span className="font-medium">
                  {formatPrice(data.admission.child, data.admission.currency)}
                </span>
              </li>
            </ul>

            {data.admission.notes && (
              <p className="mt-3 text-sm text-neutral-500 bg-amber-50 p-2 rounded-lg">
                {data.admission.notes}
              </p>
            )}

            {/* Free admission info */}
            {data.admission.freeDay && (
              <div className="mt-3 p-2 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Free admission:</strong> {data.admission.freeDay}
                  {data.admission.freeHours && ` (${data.admission.freeHours})`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Artists - Prominent section above Best Time to Visit */}
      {artists.length > 0 && (
        <section className="bg-gradient-to-br from-[#C9A84C]/10 via-amber-50 to-[#C9A84C]/5 rounded-xl p-5 border-2 border-[#C9A84C]/30 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C9A84C] to-amber-600 rounded-full flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-neutral-900">
                Featured Artists
              </h2>
              <p className="text-sm text-[#C9A84C] font-medium">
                {artists.length} artists on display
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {(artistsExpanded ? artists : artists.slice(0, 5)).map((artist, index) => (
              <Link
                key={artist.id}
                href={`/artist/${artist.slug}`}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-white/70 hover:bg-white transition-all hover:shadow-sm group border border-transparent hover:border-[#C9A84C]/20"
              >
                <span className="w-7 h-7 bg-gradient-to-br from-[#C9A84C] to-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  {index + 1}
                </span>
                <span className="flex-1 truncate text-sm font-semibold text-neutral-800 group-hover:text-[#C9A84C] transition-colors">
                  {artist.name}
                </span>
                <span className="text-xs text-white bg-[#C9A84C] px-2.5 py-1 rounded-full font-medium shadow-sm">
                  {artist._count.artworks} {artist._count.artworks === 1 ? 'work' : 'works'}
                </span>
              </Link>
            ))}
          </div>
          {artists.length > 5 && (
            <div className="mt-3 pt-3 border-t border-[#C9A84C]/20">
              <button
                onClick={() => setArtistsExpanded(!artistsExpanded)}
                className="w-full text-sm text-[#C9A84C] text-center font-medium hover:text-amber-600 transition-colors cursor-pointer flex items-center justify-center gap-1"
              >
                {artistsExpanded ? (
                  <>
                    <span>Show less</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>+ {artists.length - 5} more artists</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </section>
      )}

      {/* Best Time to Visit - Collapsible, default collapsed */}
      <section className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setBestTimeExpanded(!bestTimeExpanded)}
          className="w-full p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
        >
          <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Best Time to Visit
          </h3>
          <ChevronIcon isOpen={bestTimeExpanded} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            bestTimeExpanded ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-2 bg-green-50 rounded-lg">
                <p className="font-medium text-green-800 mb-1 text-xs">Best Days</p>
                <p className="text-green-700 text-sm">
                  {data.crowdData.bestDays.map(capitalize).join(", ")}
                </p>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <p className="font-medium text-red-800 mb-1 text-xs">Busiest Days</p>
                <p className="text-red-700 text-sm">
                  {data.crowdData.worstDays.map(capitalize).join(", ")}
                </p>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <p className="font-medium text-green-800 mb-1 text-xs">Best Times</p>
                <p className="text-green-700 text-sm">
                  {data.crowdData.bestTimes.join(" or ")}
                </p>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <p className="font-medium text-red-800 mb-1 text-xs">Busiest Times</p>
                <p className="text-red-700 text-sm">
                  {data.crowdData.worstTimes.join(" or ")}
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm text-neutral-600">{data.crowdData.seasonalNotes}</p>

            <div className="mt-3 pt-3 border-t border-neutral-100">
              <p className="text-sm text-neutral-600">
                <strong>Average visit:</strong> {data.crowdData.avgVisitDuration}
              </p>
              <p className="text-sm text-neutral-600">
                <strong>Recommended:</strong> {data.crowdData.recommendedDuration}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insider Tips - Collapsible, default collapsed */}
      <section className="bg-white border border-neutral-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setTipsExpanded(!tipsExpanded)}
          className="w-full p-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
        >
          <h3 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Insider Tips ({data.tips.length})
          </h3>
          <ChevronIcon isOpen={tipsExpanded} />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            tipsExpanded ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-4 pb-4">
            <ul className="space-y-2">
              {data.tips.map((tip, index) => (
                <li key={index} className="flex gap-2 text-sm text-neutral-600">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-medium">
                    {index + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Location - Always visible */}
      <section className="bg-white border border-neutral-200 rounded-xl p-4">
        <h3 className="text-base font-semibold text-neutral-900 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Location
        </h3>

        {/* Google Maps Embed */}
        <div className="mb-3 rounded-lg overflow-hidden border border-neutral-200">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(`${data.name}, ${data.location.city}, ${data.location.country}`)}&zoom=15`}
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${data.name}`}
          />
        </div>

        <address className="not-italic text-sm text-neutral-600 mb-3">
          {data.location.address}
          <br />
          {data.location.city}
          {data.location.state && `, ${data.location.state}`}{" "}
          {data.location.postalCode}
          <br />
          {data.location.country}
        </address>

        <a
          href={`https://maps.google.com/?q=${data.location.coordinates.lat},${data.location.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:opacity-80 transition-opacity"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Get Directions
        </a>

        {data.amenities.nearbyParking && (
          <p className="mt-2 text-sm text-neutral-500">
            <strong>Parking:</strong> {data.amenities.nearbyParking}
          </p>
        )}
      </section>
    </div>
  );
}
