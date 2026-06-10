import { Metadata } from 'next';
import PartOfSpeechGenerator from './PartOfSpeechGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import ToolVariants from '@/components/tools/ToolVariants';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Random Adjective Generator',
  description: 'Free random adjective, verb, noun, and adverb generator. Pick a part of speech and generate random words instantly. Great for writing, grammar practice, and games.',
  openGraph: {
    title: 'Random Adjective & Verb Generator | Randomyl',
    description: 'Generate random adjectives, verbs, nouns, and adverbs by part of speech. Free and instant.',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/random-adjective-generator`,
    languages: {
      'en-US': `${baseUrl}/tools/random-adjective-generator`,
      'x-default': `${baseUrl}/tools/random-adjective-generator`,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Random Adjective Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  url: `${baseUrl}/tools/random-adjective-generator`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function PartOfSpeechGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Random Adjective Generator"
        description="Generate random adjectives, verbs, nouns, and adverbs — just pick a part of speech and roll. Free and instant, for writing prompts, grammar practice, and games."
        tag="Generator · Words & Language"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Adjective Generator' }]}
      />
      <section className="wrap" id="app">
        <PartOfSpeechGenerator initial="adjective" />
      </section>
      <ToolVariants hubRoute="random-adjective-generator" />
      <ToolDescription toolKey="pos" />
      <FAQList type="pos" />
      <OtherTools current="pos" />
    </>
  );
}
