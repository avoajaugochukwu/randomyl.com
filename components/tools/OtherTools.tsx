import Link from 'next/link';
import { tools, ToolKey } from '@/app/config/tools';

interface OtherToolsProps {
  current: ToolKey;
}

function shortLabel(label: string): string {
  return label.replace(/ Generator$/, '').replace(/^Random /, '');
}

export default function OtherTools({ current }: OtherToolsProps) {
  const others = tools.filter((t) => t.key !== current && !t.comingSoon);

  return (
    <section className="other-tools">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 18 }}>
          <h2 className="h2">More generators</h2>
          <Link className="link-arrow" href="/tools">
            All tools →
          </Link>
        </div>
        <div className="ot-row">
          {others.map((tool, i) => (
            <Link key={tool.key} className="ot" href={`/tools/${tool.route}`}>
              <span className="n">{String(i + 1).padStart(2, '0')}</span>
              <span className="t">{shortLabel(tool.label)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
