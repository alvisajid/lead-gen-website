import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallForm from '@/components/BookCallForm';
import agencyConfig from '@/content';

export const metadata: Metadata = {
  title: `Book a Strategy Call with ${agencyConfig.agency.name}`,
  description: `Schedule your free discovery call. We'll discuss your lead-gen challenges and share how we can help fill your calendar with qualified leads.`,
};

export default function ContactPage() {
  const { agency, contact } = agencyConfig;

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-600)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Strategy Call</h1>
          <p className="text-lg md:text-xl opacity-90">
            Let's discuss your lead-gen goals, analyze your current approach, and map out exactly how we can help.
          </p>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            {contact.email && (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-4xl mb-4">✉️</div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[color:var(--color-primary)] font-semibold hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            )}

            {/* Phone Card */}
            {contact.phone && (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <a
                  href={`tel:${contact.phone}`}
                  className="text-[color:var(--color-primary)] font-semibold hover:underline"
                >
                  {contact.phone}
                </a>
              </div>
            )}

            {/* Calendly Card */}
            {contact.calendlyUrl && (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-lg font-semibold mb-2">Calendly</h3>
                <a
                  href={contact.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--color-primary)] font-semibold hover:underline"
                >
                  Book Directly
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Book Call Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Tell Us About Your Practice</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll schedule a 20-minute discovery call at a time that works for you. This is a no-pressure conversation — we're just here to listen and advise.
            </p>
            <BookCallForm />
          </div>

          {/* Right: Info / What to Expect */}
          <div className="space-y-8">
            {/* What to Expect Card */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="text-[color:var(--color-primary)] font-bold">1.</span>
                  <p>
                    <strong>Quick screening:</strong> We ask about your practice, current marketing spend, and biggest challenge.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[color:var(--color-primary)] font-bold">2.</span>
                  <p>
                    <strong>Deep dive:</strong> We discuss your lead-gen bottlenecks and what competitors are doing.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[color:var(--color-primary)] font-bold">3.</span>
                  <p>
                    <strong>Game plan:</strong> We share a clear roadmap of how to fill your calendar with qualified leads.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[color:var(--color-primary)] font-bold">4.</span>
                  <p>
                    <strong>Next steps:</strong> If there's a fit, we discuss packages and timeline. No pressure either way.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Us Card */}
            <div className="bg-[color:var(--color-primary)] text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Why Work With Us?</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Specialized expertise in your niche</li>
                <li>✓ Transparent, data-driven approach</li>
                <li>✓ Proven track record (15,000+ leads generated)</li>
                <li>✓ Predictable, scalable results</li>
                <li>✓ Dedicated account team</li>
              </ul>
            </div>

            {/* FAQ Quick Link */}
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Have questions?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Check out our <Link href="/" className="text-[color:var(--color-primary)] font-semibold hover:underline">case studies</Link> and <Link href="/services" className="text-[color:var(--color-primary)] font-semibold hover:underline">services</Link> to learn more about how we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Embed (Optional - if you want a full calendar view) */}
      {contact.calendlyUrl && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Or Book Directly</h2>
            <p className="text-center text-gray-600 mb-8">
              Use Calendly below to view availability and select a time that works for you.
            </p>
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ minHeight: '600px' }}>
              <iframe
                src={`${contact.calendlyUrl}?hide_event_type_details=1`}
                width="100%"
                height="600"
                frameBorder="0"
                title="Schedule a discovery call"
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900 hover:text-[color:var(--color-primary)]">
                How long does a strategy call take?
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                About 20–30 minutes. We respect your time and keep it focused and actionable.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900 hover:text-[color:var(--color-primary)]">
                Is there a cost for the strategy call?
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                No. It's completely free. We just want to understand your needs and see if we're a good fit.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900 hover:text-[color:var(--color-primary)]">
                What if I'm not ready to hire an agency yet?
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                That's fine! We'll still share actionable advice you can implement on your own. No pressure to hire us.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900 hover:text-[color:var(--color-primary)]">
                How quickly can we get started?
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                If there's a fit and you want to move forward, we can start campaigns within 1–2 weeks. Timeline varies based on your scope.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-4 cursor-pointer">
              <summary className="font-semibold text-gray-900 hover:text-[color:var(--color-primary)]">
                Do you work with practices outside my region?
              </summary>
              <p className="mt-3 text-gray-600 text-sm">
                Yes. We work with practices nationwide and internationally. Local SEO and paid ads can target specific regions regardless of where you're physically located.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Talk About Your Practice</h2>
          <p className="text-lg mb-8 opacity-90">
            20 minutes on a call could change how you think about lead generation forever.
          </p>
          <Link
            href="#top"
            className="inline-block bg-[color:var(--color-accent)] text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Back to Form
          </Link>
        </div>
      </section>
    </main>
  );
}
