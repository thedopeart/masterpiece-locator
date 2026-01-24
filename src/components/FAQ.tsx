"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  defaultOpen?: boolean;
  wide?: boolean;
}

export default function FAQ({ items, title = "Frequently Asked Questions", defaultOpen = false, wide = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ? 0 : null);

  return (
    <section className={`my-12 mx-auto ${wide ? "max-w-5xl" : "max-w-2xl"}`}>
      <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
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
                className="p-4 pt-0 text-neutral-600 leading-relaxed faq-content"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Static FAQ for pages that don't need interactivity (better for SEO)
export function FAQStatic({ items, title = "Frequently Asked Questions", wide = false }: Omit<FAQProps, "defaultOpen">) {
  return (
    <section className={`my-12 mx-auto ${wide ? "max-w-5xl" : "max-w-2xl"}`}>
      <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="pb-6 border-b border-neutral-200 last:border-0 last:pb-0"
          >
            <h3 className="font-semibold text-neutral-900 mb-3 flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">
                Q
              </span>
              {item.question}
            </h3>
            <p
              className="text-neutral-600 leading-relaxed pl-9 faq-content"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// Strip HTML tags for clean JSON-LD schema
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

// JSON-LD FAQ Schema for SEO
export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(item.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
