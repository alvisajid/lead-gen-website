import Link from 'next/link';
import agencyConfig from '@/content';

export default function Footer() {
  const { agency, contact } = agencyConfig;

  return (
    <footer className="bg-surface border-t mt-12 bg-[color:var(--color-surface)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Agency Info */}
          <div>
            {agency.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={agency.logo} alt={`${agency.name} logo`} className="h-10 w-auto mb-3" />
            ) : (
              <div className="text-lg font-semibold mb-3">{agency.name}</div>
            )}
            <p className="text-sm text-[color:var(--color-muted)]">{agency.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="text-sm">
            <div className="font-medium mb-3">Navigation</div>
            <div className="space-y-2">
              <div><Link href="/" className="text-[color:var(--color-muted)] hover:underline">Home</Link></div>
              <div><Link href="/services" className="text-[color:var(--color-muted)] hover:underline">Services</Link></div>
              <div><Link href="/case-studies" className="text-[color:var(--color-muted)] hover:underline">Case Studies</Link></div>
              <div><Link href="/about" className="text-[color:var(--color-muted)] hover:underline">About</Link></div>
              <div><Link href="/contact" className="text-[color:var(--color-muted)] hover:underline">Contact</Link></div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-[color:var(--color-muted)]">
            <div className="font-medium text-gray-900 mb-3">Get In Touch</div>
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="block hover:underline">
                {contact.email}
              </a>
            )}
            {contact.phone && (
              <a href={`tel:${contact.phone}`} className="block hover:underline mt-1">
                {contact.phone}
              </a>
            )}
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-[color:var(--color-muted)]">
          © {new Date().getFullYear()} {agency.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
