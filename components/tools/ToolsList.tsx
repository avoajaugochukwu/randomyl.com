import Link from 'next/link';
import { tools } from '@/app/config/tools';

export default function ToolsList() {
  const liveCount = tools.filter((t) => !t.comingSoon).length;

  return (
    <section className="tools-a">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 18 }}>
          <span className="tag">The Generators</span>
          <span className="mono" style={{ fontSize: 12, color: 'var(--ink-3)' }}>
            {String(liveCount).padStart(2, '0')} LIVE · MORE SHIPPING
          </span>
        </div>

        {tools.map((tool, i) => {
          const idx = String(i + 1).padStart(2, '0');
          const body = (
            <>
              <span className="idx">{idx}</span>
              <span className="tname">{tool.label}</span>
              <span className="tdesc">{tool.description}</span>
              {tool.comingSoon ? (
                <span className="soon">Soon</span>
              ) : (
                <span className="tgo">→</span>
              )}
            </>
          );

          return tool.comingSoon ? (
            <div key={tool.key} className="tool-row" aria-disabled>
              {body}
            </div>
          ) : (
            <Link key={tool.key} className="tool-row" href={`/tools/${tool.route}`}>
              {body}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
