import { tools, Tool } from '@/app/config/tools';
import Link from 'next/link';

const footerLinks = {
  tools: [
    { href: '/tools', label: 'View all tools' },
    ...tools
      .filter((tool: Tool) => !tool.comingSoon)
      .map((tool) => ({
        href: `/tools/${tool.route}`,
        label: tool.label.replace(/ Generator$/, '').replace(/^Random /, ''),
      })),
  ],
  company: [
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ],
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="nm">Randomyl</div>
            <p>
              Your go-to platform for generating random data of any type — fast,
              free, and no account required.
            </p>
          </div>

          <div className="foot-col">
            <h4>Tools</h4>
            <ul>
              {footerLinks.tools.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Legal</h4>
            <ul>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            © {currentYear} RANDOMYL <span className="accent-dot">●</span> ALL
            RIGHTS RESERVED
          </span>
          <span>BUILT FOR BUSINESSES, FREELANCERS &amp; PROFESSIONALS</span>
        </div>
      </div>
    </footer>
  );
}
