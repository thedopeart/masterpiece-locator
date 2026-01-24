import { MuseumPracticalData } from "@/types/museum-hours";
import { generatePracticalFAQs } from "@/lib/museum-hours";
import FAQ, { FAQSchema } from "@/components/FAQ";

interface MuseumPracticalFAQProps {
  data: MuseumPracticalData;
}

// Server component that generates FAQs from practical museum data
export default function MuseumPracticalFAQ({ data }: MuseumPracticalFAQProps) {
  const faqs = generatePracticalFAQs(data);

  return (
    <>
      <FAQSchema items={faqs} />
      <FAQ items={faqs} title={`Planning Your Visit to ${data.shortName}`} />
    </>
  );
}

// Static version for better initial render (no client interactivity)
export function MuseumPracticalFAQStatic({ data }: MuseumPracticalFAQProps) {
  const faqs = generatePracticalFAQs(data);

  return (
    <>
      <FAQSchema items={faqs} />
      <section className="my-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
          Planning Your Visit to {data.shortName}
        </h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
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
                className="text-neutral-600 leading-relaxed pl-9 [&_strong]:font-semibold [&_a]:text-[#C9A84C] [&_a]:hover:underline"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
