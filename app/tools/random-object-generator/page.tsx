import { Metadata } from 'next';
import ObjectGenerator from './ObjectGenerator';
import Hero from '@/components/common/Hero';
import ToolDescription from '../components/descriptions/Description';
import { FAQList } from '@/components/common/faq/FAQList';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Object Generator | RandomAnything.io',
  description: 'Generate random JavaScript objects with custom properties and types. Perfect for testing APIs, mock data, and development.',
  openGraph: {
    title: 'Random Object Generator | RandomAnything.io',
    description: 'Generate random JavaScript objects with custom properties and types.',
    type: 'website',
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: `${baseUrl}/tools/random-object-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-object-generator`,
      'x-default': `${baseUrl}/tools/random-object-generator`,
    },
  },
};

export default function ObjectGeneratorPage() {
  return (
    <>
      <Hero
        title="Random Object Generator"
        description="Generate random JavaScript objects with custom properties and types. Perfect for testing APIs, creating mock data, and development purposes."
      />
      <ObjectGenerator />
      <ToolDescription toolKey="object" />
      <FAQList type="object" />
    </>
  );
} 