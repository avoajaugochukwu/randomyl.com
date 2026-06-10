import { Metadata } from 'next';
import NumberGenerator from './NumberGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Number Generator',
  description: 'Free random number generator. Pick numbers between any range, generate multiple at once, with no repeats and sorting. Instant, no sign-up — for raffles, games, lotteries, and testing.',
  openGraph: {
    title: 'Random Number Generator | Randomyl',
    description: 'Generate random numbers in any range — single picks or bulk, with no-repeat and sorting options. Free and instant.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-number-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-number-generator`,
      'x-default': `${baseUrl}/tools/random-number-generator`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Random Number Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-number-generator`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function NumberGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Number Generator"
        description="Pick a random number in any range — one at a time or in bulk, with no-repeat and sorting options. Free, instant, and no sign-up required."
        tag="Generator · Numbers & Utility"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Number Generator' }]}
      />
      <section className="wrap" id="app">
        <NumberGenerator />
      </section>
      <ToolDescription toolKey="number" />
      <FAQList type="number" />
      <OtherTools current="number" />
    </>
  );
}
