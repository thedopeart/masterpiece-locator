"use client";

import { useState } from "react";
import { MuseumPracticalData } from "@/types/museum-hours";
import { generatePracticalFAQs } from "@/lib/museum-hours";
import { FAQSchema } from "@/components/FAQ";

interface MuseumPracticalFAQProps {
  data: MuseumPracticalData;
}

// Interactive FAQ component with dropdowns - wide layout for museum pages
export default function MuseumPracticalFAQ({ data }: MuseumPracticalFAQProps) {
  const faqs = generatePracticalFAQs(data);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema items={faqs} />
      <section className="my-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
          Planning Your Visit to {data.shortName}
        </h2>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-medium text-neutral-900 pr-4">{item.question}</span>
                <span className="flex-shrink-0 text-neutral-400">
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <div
                  className="p-4 pt-0 text-neutral-600 leading-relaxed [&_strong]:font-semibold [&_a]:text-[#C9A84C] [&_a]:hover:opacity-80"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

// Static version - also wide, uses dropdown style for consistency
export function MuseumPracticalFAQStatic({ data }: MuseumPracticalFAQProps) {
  const faqs = generatePracticalFAQs(data);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <FAQSchema items={faqs} />
      <section className="my-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
          Planning Your Visit to {data.shortName}
        </h2>
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-medium text-neutral-900 pr-4">{item.question}</span>
                <span className="flex-shrink-0 text-neutral-400">
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-[600px]" : "max-h-0"
                }`}
              >
                <div
                  className="p-4 pt-0 text-neutral-600 leading-relaxed [&_strong]:font-semibold [&_a]:text-[#C9A84C] [&_a]:hover:opacity-80"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
