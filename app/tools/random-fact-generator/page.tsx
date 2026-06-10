import { Metadata } from 'next';
import FactGenerator from './FactGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Fact Generator',
  description: 'Free random fact generator. Discover fascinating, verified true facts across science, space, animals, history, and more. Family-friendly and instant.',
  openGraph: { title: 'Random Fact Generator | Randomyl', description: 'Discover random verified true facts across science, space, animals, history, and more. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-fact-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-fact-generator`, 'x-default': `${baseUrl}/tools/random-fact-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Fact Generator',
  applicationCategory: 'EducationApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-fact-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function FactGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Fact Generator"
        description="Discover fascinating, verified true facts across science, space, animals, history, and more. Free, instant, and family-friendly."
        tag="Generator · Fun & Learning"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Fact Generator' }]}
      />
      <section className="wrap" id="app">
        <FactGenerator />
      </section>
      <ToolDescription toolKey="fact" />
      <FAQList type="fact" />
      <OtherTools current="fact" />
    </>
  );
}
