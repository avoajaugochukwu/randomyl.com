import { Metadata } from 'next';
import Hero from '@/components/common/Hero';
import ToolsList from '@/components/tools/ToolsList';
import ToolSearch from '@/components/tools/ToolSearch';
import { baseUrl } from '@/app/metadata';
import { tools } from '@/app/config/tools';
import { buildSearchIndex } from '@/lib/search';

const liveCount = tools.filter((t) => !t.comingSoon).length;

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
  const searchIndex = buildSearchIndex();
  return (
    <>
      <Hero
        title="The Generators"
        description="Every Randomyl tool in one place — pick one, tune it, and roll. Free, instant, and no sign-up required."
        tag={`Tools · ${liveCount} live`}
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools' }]}
      />
      <ToolSearch index={searchIndex}>
        <ToolsList />
      </ToolSearch>
    </>
  );
}
