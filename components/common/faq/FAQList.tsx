import { getFAQs, FAQType } from './faqData';
import { FAQItem } from './FAQItem';

interface FAQListProps {
  type: FAQType;
}

export function FAQList({ type }: FAQListProps) {
  const faqs = getFAQs(type);
  
  return (
    <div className="mt-12 space-y-6 max-w-xl mx-auto p-4 w-full">
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