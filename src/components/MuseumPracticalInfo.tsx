"use client";

import { useState, useEffect } from "react";
import { MuseumPracticalData } from "@/types/museum-hours";
import {
  formatHours,
  formatPrice,
  capitalize,
  formatDate,
  getCurrentDay,
  isMuseumOpen,
} from "@/lib/museum-hours";

interface MuseumPracticalInfoProps {
  data: MuseumPracticalData;
}

export default function MuseumPracticalInfo({ data }: MuseumPracticalInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState<string>("monday");

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
    <div className="space-y-6">
      {/* Open/Closed Status Banner */}
      <div className="bg-white border border-neutral-200 rounded-xl p-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                isOpen
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpen ? "bg-green-500" : "bg-red-500"
                }`}
              />
              {isOpen ? "Open Now" : "Currently Closed"}
            </span>
          </div>
          {todayHours && !todayHours.closed && (
            <span className="text-neutral-600 text-sm">
              Today: <strong>{formatHours(todayHours)}</strong>
            </span>
          )}
          {todayHours?.closed && (
            <span className="text-neutral-500 text-sm">Closed today</span>
          )}
        </div>
      </div>

      {/* Hours Section */}
      <section className="bg-white border border-neutral-200 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Hours
        </h3>

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
          <p className="mt-4 text-sm text-neutral-500 bg-neutral-50 p-3 rounded-lg">
            {data.hours.notes}
          </p>
        )}

        {/* Holiday Closures */}
        {upcomingClosures.length > 0 && (
          <div className="mt-4 pt-4 border-t border-neutral-100">
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
      </section>

      {/* Admission Section */}
      <section className="bg-white border border-neutral-200 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          Admission
        </h3>

        <ul className="space-y-2 text-sm">
          <li className="flex justify-between py-2 border-b border-neutral-100">
            <span className="text-neutral-700">Adults</span>
            <span className="font-medium">
              {formatPrice(data.admission.adult, data.admission.currency)}
            </span>
          </li>
          {data.admission.senior !== data.admission.adult && (
            <li className="flex justify-between py-2 border-b border-neutral-100">
              <span className="text-neutral-700">
                Seniors{data.admission.seniorAge && ` (${data.admission.seniorAge}+)`}
              </span>
              <span className="font-medium">
                {formatPrice(data.admission.senior, data.admission.currency)}
              </span>
            </li>
          )}
          {data.admission.student !== data.admission.adult && (
            <li className="flex justify-between py-2 border-b border-neutral-100">
              <span className="text-neutral-700">Students</span>
              <span className="font-medium">
                {formatPrice(data.admission.student, data.admission.currency)}
              </span>
            </li>
          )}
          <li className="flex justify-between py-2">
            <span className="text-neutral-700">
              Children (under {data.admission.childMaxAge})
            </span>
            <span className="font-medium">
              {formatPrice(data.admission.child, data.admission.currency)}
            </span>
          </li>
        </ul>

        {data.admission.notes && (
          <p className="mt-4 text-sm text-neutral-500 bg-amber-50 p-3 rounded-lg">
            {data.admission.notes}
          </p>
        )}

        {/* Free admission info */}
        {data.admission.freeDay && (
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Free admission:</strong> {data.admission.freeDay}
              {data.admission.freeHours && ` (${data.admission.freeHours})`}
            </p>
          </div>
        )}

        {/* Buy Tickets Button */}
        <a
          href={data.tickets.onlineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full text-center bg-[#C9A84C] text-black font-semibold py-3 px-4 rounded-lg hover:bg-[#b8973f] transition-colors"
        >
          Buy Tickets
        </a>

        {data.tickets.advanceRecommended && (
          <p className="mt-2 text-xs text-center text-neutral-500">
            Advance booking recommended to skip the line
          </p>
        )}
      </section>

      {/* Best Time to Visit */}
      <section className="bg-white border border-neutral-200 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Best Time to Visit
        </h3>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="font-medium text-green-800 mb-1">Best Days</p>
            <p className="text-green-700">
              {data.crowdData.bestDays.map(capitalize).join(", ")}
            </p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg">
            <p className="font-medium text-red-800 mb-1">Busiest Days</p>
            <p className="text-red-700">
              {data.crowdData.worstDays.map(capitalize).join(", ")}
            </p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <p className="font-medium text-green-800 mb-1">Best Times</p>
            <p className="text-green-700">
              {data.crowdData.bestTimes.join(" or ")}
            </p>
          </div>
          <div className="p-3 bg-red-50 rounded-lg">
            <p className="font-medium text-red-800 mb-1">Busiest Times</p>
            <p className="text-red-700">
              {data.crowdData.worstTimes.join(" or ")}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-neutral-600">{data.crowdData.seasonalNotes}</p>

        <div className="mt-4 pt-4 border-t border-neutral-100">
          <h4 className="text-sm font-medium text-neutral-700 mb-2">
            How Long to Spend
          </h4>
          <p className="text-sm text-neutral-600">
            <strong>Average visit:</strong> {data.crowdData.avgVisitDuration}
          </p>
          <p className="text-sm text-neutral-600">
            <strong>Recommended:</strong> {data.crowdData.recommendedDuration}
          </p>
        </div>
      </section>

      {/* Insider Tips */}
      <section className="bg-white border border-neutral-200 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Insider Tips
        </h3>

        <ul className="space-y-3">
          {data.tips.map((tip, index) => (
            <li key={index} className="flex gap-3 text-sm text-neutral-600">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-medium">
                {index + 1}
              </span>
              {tip}
            </li>
          ))}
        </ul>
      </section>

      {/* Location */}
      <section className="bg-white border border-neutral-200 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Location
        </h3>

        <address className="not-italic text-sm text-neutral-600 mb-4">
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
          className="inline-flex items-center gap-2 text-sm text-[#C9A84C] hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Get Directions
        </a>

        {data.amenities.nearbyParking && (
          <p className="mt-3 text-sm text-neutral-500">
            <strong>Parking:</strong> {data.amenities.nearbyParking}
          </p>
        )}
      </section>
    </div>
  );
}
