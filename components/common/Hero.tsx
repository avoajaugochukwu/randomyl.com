import Link from 'next/link';

interface Crumb {
  label: string;
  href?: string;
}

interface HeroProps {
  title: string;
  description: string;
  tag?: string;
  crumb?: Crumb[];
}

export default function Hero({ title, description, tag, crumb }: HeroProps) {
  return (
    <header className="tool-head">
      <div className="wrap">
        {crumb && crumb.length > 0 && (
          <div className="crumb">
            {crumb.map((c, i) => (
              <span key={c.label}>
                {i > 0 && <span className="sep">/</span>}
                {c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
              </span>
            ))}
          </div>
        )}
        {tag && <span className="tag">{tag}</span>}
        <h1 className="display">{title}</h1>
        <p className="lede">{description}</p>
      </div>
    </header>
  );
}
