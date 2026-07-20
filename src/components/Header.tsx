import Link from 'next/link';
import agencyConfig from '@/content';

export default function Header() {
  const { agency, contact } = agencyConfig;

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            {agency.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={agency.logo} alt={`${agency.name} logo`} className="h-10 w-auto" />
            ) : (
              <div className="text-xl font-semibold">{agency.name}</div>
            )}
            <span className="hidden sm:inline text-xs text-gray-500 font-medium">{agency.tagline}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</Link>
            <Link href="/industries" className="text-gray-700 hover:text-gray-900 font-medium">Industries</Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-gray-900 font-medium">Case Studies</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</Link>
            <Link 
              href="/contact" 
              className="font-semibold text-white bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-600)] px-4 py-2 rounded-md"
            >
              Book a Call
            </Link>
          </nav>

          <div className="md:hidden">
            <Link 
              href="/contact" 
              className="inline-flex items-center rounded-md bg-[color:var(--color-primary)] px-3 py-2 text-white text-sm font-medium"
            >
              Book Call
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
