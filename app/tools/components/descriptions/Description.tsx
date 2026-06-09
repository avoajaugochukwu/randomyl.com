import { ToolKey } from '@/app/config/tools';
import { getToolDescription } from './descriptions';

interface ToolDescriptionProps {
  toolKey: ToolKey;
}

export default function ToolDescription({ toolKey }: ToolDescriptionProps) {
  const { about, features, useCases } = getToolDescription(toolKey);

  return (
    <section className="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <h2 className="h2">About our {about.title}</h2>
            <p style={{ marginTop: 18 }}>{about.description}</p>

            {features.length > 0 && (
              <>
                <h3
                  className="mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-3)',
                    margin: '28px 0 16px',
                    fontWeight: 400,
                  }}
                >
                  Features
                </h3>
                <ul className="feature-list">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div>
            <h3
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--ink-3)',
                margin: '0 0 4px',
                fontWeight: 400,
              }}
            >
              Use cases
            </h3>
            <div className="usecards">
              {useCases.map((useCase, index) => (
                <div className="usecard" key={index}>
                  <span className="uc-n">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p>{useCase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
