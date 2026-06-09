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

  return (
    <div className="mt-12 space-y-6 max-w-xl mx-auto p-4 w-full">
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="max-w-[764px] px-6">
        <h2 className="text-center text-3xl font-bold mb-8">
          Frequently asked questions
        </h2>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
} 