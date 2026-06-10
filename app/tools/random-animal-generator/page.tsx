import { Metadata } from 'next';
import AnimalGenerator from './AnimalGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Animal Generator',
  description: 'Free random animal generator. Get random animals from around the world — mammals, birds, reptiles, sea life, and more. Great for kids, games, and writing prompts.',
  openGraph: { title: 'Random Animal Generator | Randomyl', description: 'Generate random animals for kids, games, and writing prompts. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-animal-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-animal-generator`, 'x-default': `${baseUrl}/tools/random-animal-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Animal Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-animal-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function AnimalGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Animal Generator"
        description="Generate random animals from around the world — mammals, birds, reptiles, sea life, and more. Free, instant, and kid-friendly."
        tag="Generator · Fun & Learning"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Animal Generator' }]}
      />
      <section className="wrap" id="app">
        <AnimalGenerator />
      </section>
      <ToolDescription toolKey="animal" />
      <FAQList type="animal" />
      <OtherTools current="animal" />
    </>
  );
}
