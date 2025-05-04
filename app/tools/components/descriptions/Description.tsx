import { ToolKey } from '@/app/config/tools';
import { getToolDescription } from './descriptions';

interface ToolDescriptionProps {
  toolKey: ToolKey;
}

export default function ToolDescription({ toolKey }: ToolDescriptionProps) {
  const { about, features, useCases } = getToolDescription(toolKey);

  return (
    <div className="mt-12 space-y-6 max-w-xl mx-auto p-4 w-full">
      <section>
        <h2 className="text-2xl font-semibold mb-3">About Our {about.title}</h2>
        <p className="text-gray-600">{about.description}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Use Cases</h2>
        <ul className="list-disc list-inside text-gray-600">
          {useCases.map((useCase, index) => (
            <li key={index}>{useCase}</li>
          ))}
        </ul>
      </section>
    </div>
  );
} 