import type { AgencyConfig } from './types';

// Example B2B agency config — edit or replace with agency-specific data.
export const agencyConfig: AgencyConfig = {
  agency: {
    name: 'Provenli Solutions',
    tagline: 'Predictable lead generation for service providers',
    logo: '/logo.svg',
    description:
      'We specialize in filling schedules for hair transplant clinics, dental practices, and other high-ticket service providers through proven paid ads and SEO strategies.',
  },
  metrics: {
    leadsGenerated: 15000,
    clientsServed: 24,
    adSpendManaged: '$2.4M+',
    avgCostPerLead: '$48',
    avgRoi: '3.8x',
  },
  contact: {
    email: 'contact@provenli.com',
    phone: '+91 91838 99188',
    calendlyUrl: '', // TODO: Add your Calendly link when ready
  },
  services: [
    {
      id: 'paid-ads',
      title: 'Paid Ads Management',
      description: 'Strategic Google Ads and Meta ads campaigns built to convert.',
      features: [
        'Campaign strategy & setup',
        'Daily optimization & bid management',
        'Conversion tracking & analytics',
        'Monthly performance reports',
      ],
      icon: '📊',
    },
    {
      id: 'seo',
      title: 'Local SEO & Organic Growth',
      description: 'Rank for high-intent keywords in your local area.',
      features: [
        'Local keyword research & mapping',
        'On-page & technical SEO',
        'Local citation building',
        'Monthly ranking & traffic reports',
      ],
      icon: '🔍',
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages & Funnels',
      description: 'High-converting landing pages built for lead capture.',
      features: [
        'Custom landing page design',
        'A/B testing setup',
        'Lead form integration',
        'Performance optimization',
      ],
      icon: '📄',
    },
    {
      id: 'automation',
      title: 'CRM & Follow-up Automation',
      description: 'Nurture leads 24/7 with automated email & SMS.',
      features: [
        'CRM platform setup (HubSpot, Zoho, etc.)',
        'Email & SMS sequence design',
        'Lead scoring & segmentation',
        'Integration with your existing tools',
      ],
      icon: '⚙️',
    },
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Dr. Ahmed Hassan',
      title: 'Clinic Owner',
      company: 'Elite Hair Restoration',
      industry: 'hair-transplant',
      quote:
        'Lead Growth increased my monthly consultations by 40% in the first 3 months. The campaigns are strategic, not just volume-based. Highly recommend.',
      rating: 5,
    },
    {
      id: 't2',
      name: 'Sarah Mitchell',
      title: 'Practice Manager',
      company: 'Bright Smile Dental',
      industry: 'dental',
      quote:
        'We cut our cost per lead in half while doubling volume. Their team understands dental practice operations. Great partner.',
      rating: 5,
    },
  ],
  caseStudies: [
    {
      id: 'cs1',
      slug: 'elite-hair-restoration',
      title: 'Elite Hair Restoration: 40% Patient Growth in 90 Days',
      industry: 'hair-transplant',
      clientName: 'Elite Hair Restoration, Texas',
      problem:
        'Consistent lead flow was unpredictable. Ad spend was high, but quality was low and cost per lead was creeping up.',
      approach:
        'Rebuilt paid ads strategy from scratch. Segmented audiences by procedure type (FUE vs FUT). Created procedure-specific landing pages. Implemented lead-scoring automation.',
      results: {
        leadsGenerated: 287,
        costPerLead: 45,
        conversionRate: '12.5%',
        roiMultiplier: 4.2,
        timeframe: '3 months',
      },
      testimonialQuote:
        'Lead Growth took our clinic from inconsistent growth to a predictable, scalable lead machine. I recommend them to every clinic owner I meet.',
      testimonialAttribution: 'Dr. Ahmed Hassan, Elite Hair Restoration',
      images: ['/images/case-studies/elite-ads.png', '/images/case-studies/elite-results.png'],
    },
    {
      id: 'cs2',
      slug: 'bright-smile-dental',
      title: 'Bright Smile Dental: CPL Cut 50%, Leads Doubled',
      industry: 'dental',
      clientName: 'Bright Smile Dental, California',
      problem: 'Running ads in-house with limited results. Cost per lead was $120. Needed strategic expertise.',
      approach:
        'Comprehensive audit of existing campaigns. Launched Google Local Services Ads + refined Meta campaigns. Built custom dental-focused landing pages.',
      results: {
        leadsGenerated: 156,
        costPerLead: 60,
        conversionRate: '8.8%',
        roiMultiplier: 5.1,
        timeframe: '4 months',
      },
      testimonialQuote: 'Within months, our appointment book is fuller than ever. Best decision we made.',
      testimonialAttribution: 'Sarah Mitchell, Bright Smile Dental',
    },
  ],
  industries: [
    {
      id: 'hair-transplant',
      slug: 'hair-transplant',
      name: 'Hair Transplant Clinics',
      headline: 'Fill Your Calendar With Qualified Patient Leads',
      painPoints: [
        'Unpredictable patient flow — ads are hit-or-miss',
        'Cost per lead keeps climbing (now $80–150+)',
        "Can't distinguish qualified leads from curiosity shoppers",
        'Existing ads leave money on the table — no segmentation by procedure type',
      ],
      description:
        'Hair transplant clinics face unique lead-gen challenges: high ticket value, long sales cycle, and picky audiences. We specialize in qualifying, nurturing, and converting hair loss prospects into paying patients.',
    },
    {
      id: 'dental',
      slug: 'dental',
      name: 'Dental Practices',
      headline: 'Grow Your Practice With Predictable New Patient Flow',
      painPoints: [
        "In-house ad management isn't working — high ad spend, low ROI",
        'Not appearing in local search for key procedures',
        "Appointment no-show rate is high — leads aren't qualified",
        'Seasonal slumps in new patient volume',
      ],
      description:
        'Dental practices need a multi-channel approach: Google Ads, local SEO, and Facebook/Instagram to reach nearby patients at the moment they need care. We own the full funnel.',
    },
  ],
};

export default agencyConfig;

