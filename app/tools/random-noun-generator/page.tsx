import { Metadata } from 'next';
import NounGenerator from './NounGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Noun Generator | RandomAnything.io',
  description: 'Generate random nouns with our AI-powered noun generator. Create lists of concrete, abstract, proper, or collective nouns for your writing, learning, or testing needs.',
  openGraph: {
    title: 'Random Noun Generator | RandomAnything.io',
    description: 'Generate random nouns with our AI-powered noun generator. Perfect for writers, teachers, and developers.',
    type: 'website',
  },
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: `${baseUrl}/tools/random-noun-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-noun-generator`,
      'x-default': `${baseUrl}/tools/random-noun-generator`,
    },
  },
};

export default function NounGeneratorPage() {
  return (
    <>
      <Hero 
        title="Random Noun Generator" 
        description="Generate random nouns for your creative writing, educational materials, or testing needs." 
      />
      <NounGenerator />
      <ToolDescription toolKey="noun" />
      <FAQList type="noun" />
    </>
  );
} 