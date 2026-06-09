'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home', match: (p: string) => p === '/' },
  { href: '/tools', label: 'Tools', match: (p: string) => p.startsWith('/tools') },
  { href: '/blog', label: 'Blog', match: (p: string) => p.startsWith('/blog') },
];

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <div className="wrap nav-in">
        <Link className="brand" href="/">
          <span className="mk">R</span>
          <span className="nm">Randomyl</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`lk${link.match(pathname) ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link className="btn btn-accent btn-sm nav-cta" href="/tools">
            Open a tool <span className="arr">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
