interface FAQItemProps {
  question: string;
  answer: string | string[];
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="faq-item">
      <p className="q">{question}</p>
      <div className="a">
        {Array.isArray(answer) ? (
          <ul>
            {answer.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          answer
        )}
      </div>
    </div>
  );
}
