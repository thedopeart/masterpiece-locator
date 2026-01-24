"use client";

import { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function SubmissionForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      website: formData.get("website") as string,
      instagram: formData.get("instagram") as string,
      artStyle: formData.get("artStyle") as string,
      bio: formData.get("bio") as string,
      sampleUrls: (formData.get("sampleUrls") as string)
        .split("\n")
        .map((url) => url.trim())
        .filter((url) => url.length > 0),
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to submit");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-4xl mb-3">✓</div>
        <h3 className="text-lg font-semibold text-green-900 mb-2">
          Submission Received
        </h3>
        <p className="text-green-700">
          Thanks for your interest. We'll review your submission and reach out
          if your work is a good fit.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 hover:text-green-800 underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
          placeholder="Full name or artist name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-1">
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
            placeholder="https://yoursite.com"
          />
        </div>
        <div>
          <label htmlFor="instagram" className="block text-sm font-medium text-neutral-700 mb-1">
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
            placeholder="@yourusername"
          />
        </div>
      </div>

      <div>
        <label htmlFor="artStyle" className="block text-sm font-medium text-neutral-700 mb-1">
          Art Style / Medium *
        </label>
        <input
          type="text"
          id="artStyle"
          name="artStyle"
          required
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent"
          placeholder="e.g., Digital art, Pop Surrealism, Oil painting, Photography"
        />
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-neutral-700 mb-1">
          Short Bio *
        </label>
        <textarea
          id="bio"
          name="bio"
          required
          rows={3}
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent resize-none"
          placeholder="Tell us about yourself and your work (2-4 sentences)"
        />
      </div>

      <div>
        <label htmlFor="sampleUrls" className="block text-sm font-medium text-neutral-700 mb-1">
          Sample Work URLs *
        </label>
        <textarea
          id="sampleUrls"
          name="sampleUrls"
          required
          rows={4}
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent resize-none font-mono text-sm"
          placeholder="Paste links to 3-5 pieces (one per line)&#10;https://example.com/artwork1&#10;https://example.com/artwork2"
        />
        <p className="mt-1 text-xs text-neutral-500">
          Direct links to images or product pages. One URL per line.
        </p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent resize-none"
          placeholder="Anything else you'd like us to know (optional)"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-[#C9A84C] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#b8993f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Submit for Review"}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        By submitting, you confirm you own the rights to the work shown.
      </p>
    </form>
  );
}
