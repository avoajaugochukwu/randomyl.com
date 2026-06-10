import { Metadata } from 'next';
import SentenceGenerator from './SentenceGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Sentence Generator',
  description: 'Free random sentence generator. Generate complete random sentences for writing prompts, brainstorming, typing practice, and language learning.',
  openGraph: { title: 'Random Sentence Generator | Randomyl', description: 'Generate complete random sentences for writing prompts and practice. Free and instant.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-sentence-generator`,
    languages: { 'en-US': `${baseUrl}/tools/random-sentence-generator`, 'x-default': `${baseUrl}/tools/random-sentence-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Random Sentence Generator',
  applicationCategory: 'UtilitiesApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-sentence-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function SentenceGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Sentence Generator"
        description="Generate complete, varied random sentences for writing prompts, brainstorming, and language practice — fresh every time. Free, instant, no sign-up."
        tag="Generator · Words & Language"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Sentence Generator' }]}
      />
      <section className="wrap" id="app">
        <SentenceGenerator />
      </section>
      <ToolDescription toolKey="sentence" />
      <FAQList type="sentence" />
      <OtherTools current="sentence" />
    </>
  );
}
