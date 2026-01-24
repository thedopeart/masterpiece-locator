import { Metadata } from "next";
import SubmissionForm from "./SubmissionForm";

export const metadata: Metadata = {
  title: "Submit Your Art | Masterpiece Locator",
  description:
    "Apply to have your artwork featured on Masterpiece Locator. We welcome submissions from living artists working in all styles and mediums.",
};

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">
            Artist Submission
          </h1>
          <p className="text-neutral-600 leading-relaxed">
            Masterpiece Locator features art from across history, and we're now
            welcoming submissions from living artists. If you'd like your work
            considered for inclusion, fill out the form below.
          </p>
          <p className="text-neutral-600 leading-relaxed mt-3">
            We review all submissions personally. Selected artists will be
            contacted via email.
          </p>
        </div>

        <SubmissionForm />

        <div className="mt-8 pt-8 border-t border-neutral-200">
          <h2 className="text-lg font-semibold text-neutral-900 mb-3">
            What we look for
          </h2>
          <ul className="text-neutral-600 space-y-2 text-sm">
            <li>• Original artwork with a distinctive style or voice</li>
            <li>• Professional presentation and high-quality images</li>
            <li>• Artists actively creating and selling their work</li>
            <li>• Work that fits our audience (art collectors and enthusiasts)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
