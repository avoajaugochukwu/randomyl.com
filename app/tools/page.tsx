import { Metadata } from 'next';
import Hero from '@/components/common/Hero';
import ToolsList from '@/components/tools/ToolsList';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Generator Tools',
  description: 'Explore our collection of random generators. Generate phone numbers, nouns, text, and more with our AI-powered tools.',
  robots: {
    index: true,
    follow: true,
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
    <>
      <Hero
        title="The Generators"
        description="Every Randomyl tool in one place — pick one, tune it, and roll. Free, instant, and no sign-up required."
        tag="Tools · 5 live"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools' }]}
      />
      <ToolsList />
    </>
  );
}
