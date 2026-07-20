import Link from 'next/link';
import agencyConfig from '@/content';

export default function StickyMobileCTA() {
  const { contact } = agencyConfig;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
      <div className="bg-white shadow-lg rounded-full px-3 py-2">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--color-primary)] text-white text-sm font-medium hover:bg-[color:var(--color-primary-600)] transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Book a Call
        </Link>
      </div>
    </div>
  );
}
