import Link from 'next/link';
import { getHub } from '@/app/config/toolVariants';

interface ToolVariantsProps {
  hubRoute: string;
  currentSlug?: string; // when rendered on a variant page, link back to the hub too
}

// Renders an internal-link grid to every variant of a tool (and back to the hub).
// Used on both the hub page and each variant page so nothing is orphaned.
export default function ToolVariants({ hubRoute, currentSlug }: ToolVariantsProps) {
  const hub = getHub(hubRoute);
  if (!hub || hub.variants.length === 0) return null;

  return (
    <section className="other-tools">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 18 }}>
          <h2 className="h2">{hub.variantsHeading}</h2>
          {currentSlug && (
            <Link className="link-arrow" href={`/tools/${hub.hubRoute}`}>
              {hub.hubLabel} →
            </Link>
          )}
        </div>
        <div className="ot-row">
          {currentSlug && (
            <Link className="ot" href={`/tools/${hub.hubRoute}`}>
              <span className="n">00</span>
              <span className="t">{hub.hubLabel}</span>
            </Link>
          )}
          {hub.variants
            .filter((v) => v.slug !== currentSlug)
            .map((v, i) => (
              <Link key={v.slug} className="ot" href={`/tools/${hub.hubRoute}/${v.slug}`}>
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span className="t">{v.h1}</span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
