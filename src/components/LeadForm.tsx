'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LeadFormSchema, type LeadFormInput } from '@/lib/leadFormSchema';
import clinicConfig from '@/content';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormInput>({
    resolver: zodResolver(LeadFormSchema),
  });

  const onSubmit = async (data: LeadFormInput) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Fire analytics event (stub — wire up GA4/Meta Pixel later)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_submission', {
          event_category: 'engagement',
          event_label: data.procedure,
        });
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
        <h3 className="text-lg font-semibold text-green-900">Thank you!</h3>
        <p className="mt-2 text-green-700">
          We've received your inquiry. Our team will contact you shortly via phone or email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder="Your full name"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone *
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="+1 555 555 0123"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="you@example.com"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
          City *
        </label>
        <input
          {...register('city')}
          type="text"
          id="city"
          placeholder="Your city"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
        {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city.message}</p>}
      </div>

      <div>
        <label htmlFor="procedure" className="block text-sm font-medium text-gray-700">
          Interested in *
        </label>
        <select
          {...register('procedure')}
          id="procedure"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        >
          <option value="">Select a procedure</option>
          {clinicConfig.services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.procedure && <p className="mt-1 text-xs text-red-600">{errors.procedure.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message (optional)
        </label>
        <textarea
          {...register('message')}
          id="message"
          placeholder="Tell us more about your interest"
          rows={3}
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-[color:var(--color-primary)] focus:outline-none"
        />
      </div>

      <div className="flex items-start">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />
        <label htmlFor="consent" className="ml-2 text-xs text-gray-600">
          I agree to be contacted via phone, SMS, email, or WhatsApp for consultation purposes.
        </label>
      </div>
      {errors.consent && <p className="text-xs text-red-600">{errors.consent.message}</p>}

      {error && <p className="rounded bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-[color:var(--color-primary)] px-4 py-2 text-white font-medium hover:bg-[color:var(--color-primary-600)] disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Get Your Free Consultation'}
      </button>
    </form>
  );
}
