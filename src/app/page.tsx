import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallForm from '@/components/BookCallForm';
import agencyConfig from '@/content';

export const metadata: Metadata = {
  title: `${agencyConfig.agency.name} — Lead Generation for Service Providers`,
  description:
    'Proven lead generation strategy for hair transplant clinics, dental practices, and more. Book a free strategy call.',
};

export default function HomePage() {
  const { agency, metrics, services, testimonials, caseStudies, industries, contact } = agencyConfig;
  const hairTransplant = industries.find((ind) => ind.slug === 'hair-transplant');
  const featuredCase = caseStudies[0];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[color:var(--color-primary)] to-[color:var(--color-primary-600)] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Predictable Lead Flow for Service Providers
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            We help hair transplant clinics, dental practices, and other high-ticket service providers fill their calendar with qualified, ready-to-buy leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contact.calendlyUrl || '/contact'}
              target={contact.calendlyUrl ? '_blank' : undefined}
              rel={contact.calendlyUrl ? 'noreferrer' : undefined}
              className="inline-block bg-[color:var(--color-accent)] text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition text-lg"
            >
              Book Free Strategy Call
            </a>
            <Link
              href="#how-it-works"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[color:var(--color-primary)] transition text-lg"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Band */}
      {metrics && (
        <section className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold">{metrics.leadsGenerated?.toLocaleString()}</div>
                <p className="text-gray-300 text-sm mt-1">Leads Generated</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">{metrics.clientsServed}</div>
                <p className="text-gray-300 text-sm mt-1">Clinics Served</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">{metrics.adSpendManaged}</div>
                <p className="text-gray-300 text-sm mt-1">Ad Spend Managed</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">${metrics.avgCostPerLead}</div>
                <p className="text-gray-300 text-sm mt-1">Avg. CPL</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">{metrics.avgRoi}</div>
                <p className="text-gray-300 text-sm mt-1">Avg. ROI</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Client Logo Strip (Placeholder) */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 text-sm font-medium mb-8">Trusted by leading clinics</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <div className="text-gray-400 font-semibold">Elite Hair Restoration</div>
            <div className="text-gray-400 font-semibold">Bright Smile Dental</div>
            <div className="text-gray-400 font-semibold">+ {(metrics?.clientsServed || 0) - 2} more clinics</div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How We Fill Your Calendar</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-[color:var(--color-primary)] mb-4">1</div>
              <h3 className="text-lg font-semibold mb-3">Strategy Audit</h3>
              <p className="text-gray-600 text-sm">
                We analyze your current marketing, ad spend, and lead quality to find gaps and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[color:var(--color-primary)] mb-4">2</div>
              <h3 className="text-lg font-semibold mb-3">Campaign Build</h3>
              <p className="text-gray-600 text-sm">
                We launch targeted ads, landing pages, and automation workflows tuned for your niche.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[color:var(--color-primary)] mb-4">3</div>
              <h3 className="text-lg font-semibold mb-3">Optimize & Scale</h3>
              <p className="text-gray-600 text-sm">
                Continuous testing and optimization to lower cost per lead and increase conversion rate.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[color:var(--color-primary)] mb-4">4</div>
              <h3 className="text-lg font-semibold mb-3">Predictable Growth</h3>
              <p className="text-gray-600 text-sm">
                Consistent lead volume, happy calendar, and clear ROI every month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Proven Results</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{featuredCase.title}</h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase">Problem</p>
                      <p className="text-base">{featuredCase.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 uppercase">Approach</p>
                      <p className="text-base">{featuredCase.approach}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[color:var(--color-primary)] text-white rounded-lg p-8 flex flex-col justify-center">
                  <h4 className="text-sm font-medium uppercase mb-6 opacity-80">Results</h4>
                  <div className="space-y-6">
                    {featuredCase.results.leadsGenerated && (
                      <div>
                        <div className="text-4xl font-bold">{featuredCase.results.leadsGenerated}</div>
                        <p className="text-sm opacity-80">Leads Generated</p>
                      </div>
                    )}
                    {featuredCase.results.costPerLead && (
                      <div>
                        <div className="text-4xl font-bold">${featuredCase.results.costPerLead}</div>
                        <p className="text-sm opacity-80">Cost Per Lead</p>
                      </div>
                    )}
                    {featuredCase.results.roiMultiplier && (
                      <div>
                        <div className="text-4xl font-bold">{featuredCase.results.roiMultiplier}x</div>
                        <p className="text-sm opacity-80">ROI</p>
                      </div>
                    )}
                    {featuredCase.results.timeframe && (
                      <p className="text-sm italic opacity-80">in {featuredCase.results.timeframe}</p>
                    )}
                  </div>
                </div>
              </div>
              {featuredCase.testimonialQuote && (
                <div className="mt-8 border-t pt-8">
                  <p className="text-lg italic text-gray-700 mb-3">"{featuredCase.testimonialQuote}"</p>
                  <p className="text-sm font-medium text-gray-600">— {featuredCase.testimonialAttribution}</p>
                </div>
              )}
              <Link
                href="/case-studies"
                className="inline-block mt-8 text-[color:var(--color-primary)] font-semibold hover:underline"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Clinic Owners Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                  {testimonial.rating && (
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  )}
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    {testimonial.photo && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={testimonial.photo} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      {testimonial.title && <div className="text-xs text-gray-500">{testimonial.title}</div>}
                      {testimonial.company && <div className="text-xs text-gray-500">{testimonial.company}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Overview */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow p-6">
                {service.icon && <div className="text-4xl mb-3">{service.icon}</div>}
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-[color:var(--color-primary)] font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries / Verticals */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized by Industry</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries/${industry.slug}`}
                className="border-2 border-gray-200 rounded-lg p-8 hover:border-[color:var(--color-primary)] transition hover:shadow-lg"
              >
                {industry.icon && <div className="text-5xl mb-4">{industry.icon}</div>}
                <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4">{industry.headline}</p>
                <span className="text-[color:var(--color-primary)] font-semibold">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Book a Call */}
      <section className="bg-[color:var(--color-primary)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Ready to Fill Your Calendar With Qualified Leads?
          </h2>
          <p className="text-lg text-center mb-8 opacity-90">
            Book a free 20-minute strategy call. We'll discuss your goals, analyze your current approach, and share exactly how we can help.
          </p>
          <div className="max-w-xl mx-auto">
            <BookCallForm />
          </div>
        </div>
      </section>
    </main>
  );
}

