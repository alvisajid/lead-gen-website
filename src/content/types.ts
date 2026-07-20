// Typed content schema for B2B lead-gen agency targeting service-provider verticals (hair transplant, dental, roofing, solar, etc.)

export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[]; // what's included
  icon?: string; // emoji or icon identifier
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  industry: string; // 'hair-transplant', 'dental', 'roofing', 'solar' — for filtering by industry page
  clientName: string; // e.g. "Clinic XYZ, Texas" (anonymized if needed)
  problem: string;
  approach: string;
  results: {
    leadsGenerated?: number;
    costPerLead?: number; // in dollars
    conversionRate?: string; // e.g. "3.2%"
    roiMultiplier?: number; // e.g. 4.5x
    timeframe?: string; // e.g. "6 months"
    otherMetric?: string; // flexible for different industry metrics
  };
  testimonialQuote?: string;
  testimonialAttribution?: string;
  images?: string[]; // screenshots, case study imagery
};

export type Testimonial = {
  id: string;
  name: string;
  title?: string; // e.g. "Clinic Owner"
  company?: string;
  industry?: string; // tag for industry-specific pages
  quote: string;
  photo?: string; // path in /public
  rating?: number; // 1-5
};

export type Industry = {
  id: string;
  slug: string; // 'hair-transplant', 'dental', etc.
  name: string; // "Hair Transplant Clinics", "Dental Practices"
  headline: string; // niche-specific positioning
  painPoints: string[]; // top 3-4 problems clinics face
  description?: string;
  icon?: string; // emoji
};

export type AgencyMetrics = {
  leadsGenerated?: number;
  clientsServed?: number;
  adSpendManaged?: string; // e.g. "$5M+"
  avgCostPerLead?: string; // e.g. "$45"
  avgRoi?: string; // e.g. "3.8x"
};

export type AgencyConfig = {
  agency: {
    name: string;
    tagline?: string;
    logo?: string; // path under /public
    description?: string; // about section
  };
  metrics?: AgencyMetrics; // headline stats for home page
  contact: {
    email?: string;
    phone?: string;
    whatsapp?: string;
    calendlyUrl?: string; // for embed
  };
  services: Service[];
  testimonials: Testimonial[];
  caseStudies: CaseStudy[];
  industries: Industry[];
};

