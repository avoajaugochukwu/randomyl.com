import { Metadata } from 'next';
import PictionaryGenerator from './PictionaryGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Pictionary Word Generator',
  description: 'Free Pictionary and charades word generator. Get random words by difficulty (easy, medium, hard) for kids and adults. No sign-up — perfect for game night.',
  openGraph: {
    title: 'Pictionary & Charades Word Generator | Randomyl',
    description: 'Random Pictionary and charades words by difficulty. Free, instant, great for game night.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/pictionary-word-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/pictionary-word-generator`,
      'x-default': `${baseUrl}/tools/pictionary-word-generator`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Pictionary Word Generator',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Any',
  url: `${baseUrl}/tools/pictionary-word-generator`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function PictionaryGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Pictionary Word Generator"
        description="Random words for Pictionary and charades, by difficulty — easy for kids, hard for adults. Free, instant, and ready for game night."
        tag="Generator · Games & Fun"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Pictionary Generator' }]}
      />
      <section className="wrap" id="app">
        <PictionaryGenerator />
      </section>
      <ToolDescription toolKey="pictionary" />
      <FAQList type="pictionary" />
      <OtherTools current="pictionary" />
    </>
  );
}
