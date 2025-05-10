import { Metadata } from 'next';
import Hero from '@/components/common/Hero';
import ToolsList from '@/components/tools/ToolsList';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Generator Tools | RandomAnything.io',
  description: 'Explore our collection of random generators. Generate phone numbers, nouns, text, and more with our AI-powered tools.',
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
  },
  alternates: {
    canonical: `${baseUrl}/tools`,
    languages: {
      'en-US': `${baseUrl}/tools`,
      'x-default': `${baseUrl}/tools`,
    },
  },
};

export default function ToolsPage() {
  return (
    <div className="">
      <Hero
        title="Random Generator Tools"
        description="Explore our collection of random generators. Generate phone numbers, nouns, text, and more with our AI-powered tools." />
      <ToolsList />
    </div>
  );
} 