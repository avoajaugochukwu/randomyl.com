import { getFAQs, FAQType } from './faqData';
import { FAQItem } from './FAQItem';

interface FAQListProps {
  type: FAQType;
}

export function FAQList({ type }: FAQListProps) {
  const faqs = getFAQs(type);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: Array.isArray(faq.answer) ? faq.answer.join(' ') : faq.answer,
      },
    })),
  };

  if (faqs.length === 0) return null;

  return (
    <section className="about" style={{ paddingTop: 'clamp(40px,5vw,64px)' }}>
      <div className="wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="section-head" style={{ marginBottom: 8 }}>
          <span className="tag">FAQ</span>
        </div>
        <h2 className="h2" style={{ marginBottom: 18 }}>
          Frequently asked questions
        </h2>
        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
