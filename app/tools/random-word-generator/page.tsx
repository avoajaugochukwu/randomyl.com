import { Metadata } from 'next';
import WordGenerator from './WordGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Word Generator',
  description: 'Free random word generator. Generate random English words by length or starting letter, one or many at a time. Great for games, brainstorming, writing prompts, and passwords.',
  openGraph: {
    title: 'Random Word Generator | Randomyl',
    description: 'Generate random words filtered by length and starting letter. Instant, free, and no sign-up.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-word-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-word-generator`,
      'x-default': `${baseUrl}/tools/random-word-generator`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Random Word Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-word-generator`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function WordGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Word Generator"
        description="Generate random English words — filter by length or starting letter, single or in bulk. Perfect for word games, brainstorming, and writing prompts."
        tag="Generator · Words & Language"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Word Generator' }]}
      />
      <section className="wrap" id="app">
        <WordGenerator />
      </section>
      <ToolDescription toolKey="word" />
      <FAQList type="word" />
      <OtherTools current="word" />
    </>
  );
}
