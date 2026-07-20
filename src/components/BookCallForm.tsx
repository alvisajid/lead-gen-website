"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BookCallFormSchema,
  type BookCallFormInput,
} from "@/lib/leadFormSchema";

export default function BookCallForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookCallFormInput>({
    resolver: zodResolver(BookCallFormSchema),
  });

  const onSubmit = async (data: BookCallFormInput) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      // Fire analytics event (stub — wire up GA4/Meta/LinkedIn Pixel later)
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "discovery_call_booked", {
          event_category: "engagement",
          event_label: data.adBudgetRange,
        });
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-900">Thank you!</h3>
        <p className="mt-2 text-green-700">
          We've received your inquiry. You'll get a calendar invite within 1
          business day. We look forward to chatting!
        </p>
      </div>
    );
  }

  const adBudgetOptions = [
    { value: "under-1k", label: "Under $1,000/month" },
    { value: "1k-5k", label: "$1,000 - $5,000/month" },
    { value: "5k-10k", label: "$5,000 - $10,000/month" },
    { value: "10k-25k", label: "$10,000 - $25,000/month" },
    { value: "over-25k", label: "$25,000+/month" },
    { value: "not-spending", label: "Not currently spending on ads" },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Your Name *
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          placeholder="Your full name"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="businessName"
          className="block text-sm font-medium text-gray-700"
        >
          Business / Clinic Name *
        </label>
        <input
          {...register("businessName")}
          type="text"
          id="businessName"
          placeholder="Your clinic or practice name"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.businessName && (
          <p className="mt-1 text-xs text-red-600">
            {errors.businessName.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          placeholder="you@example.com"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone *
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          placeholder="+1 555 555 0100"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="adBudgetRange"
          className="block text-sm font-medium text-gray-700"
        >
          Current Monthly Ad Budget *
        </label>
        <select
          {...register("adBudgetRange")}
          id="adBudgetRange"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        >
          <option value="">Select your budget range</option>
          {adBudgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.adBudgetRange && (
          <p className="mt-1 text-xs text-red-600">
            {errors.adBudgetRange.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="currentChallenge"
          className="block text-sm font-medium text-gray-700"
        >
          What's Your Biggest Lead-Gen Challenge Right Now? *
        </label>
        <textarea
          {...register("currentChallenge")}
          id="currentChallenge"
          placeholder="E.g. Lead volume is inconsistent, cost per lead is too high, hard to find qualified prospects..."
          rows={3}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.currentChallenge && (
          <p className="mt-1 text-xs text-red-600">
            {errors.currentChallenge.message}
          </p>
        )}
      </div>

      <div className="flex items-start">
        <input
          {...register("consent")}
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />
        <label htmlFor="consent" className="ml-2 text-xs text-gray-600">
          I agree to be contacted via email or phone to discuss how we can help
          my practice grow.
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600">{errors.consent.message}</p>
      )}

      {error && (
        <p className="rounded bg-red-50 px-3 py-2 text-xs text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-[color:var(--color-primary)] px-4 py-2 text-white font-medium hover:bg-[color:var(--color-primary-600)] disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Schedule My Free Discovery Call"}
      </button>

      <p className="text-xs text-gray-500 text-center">
        No pressure. We'll follow up with a calendar invite within 1 business
        day.
      </p>
    </form>
  );
}
