import { Metadata } from 'next';
import CountryGenerator from './CountryGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Country Generator',
  description: 'Free random country generator with flags and capital cities. Pick random countries from around the world for geography, games, and travel ideas.',
  openGraph: { title: 'Random Country Generator | Randomyl', description: 'Generate random countries with flags and capitals. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-country-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-country-generator`, 'x-default': `${baseUrl}/tools/random-country-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Country Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-country-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function CountryGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Country Generator"
        description="Pick random countries from around the world, complete with flags and capital cities. Free, instant, great for geography and travel ideas."
        tag="Generator · Geography & Travel"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Country Generator' }]}
      />
      <section className="wrap" id="app">
        <CountryGenerator />
      </section>
      <ToolDescription toolKey="country" />
      <FAQList type="country" />
      <OtherTools current="country" />
    </>
  );
}
