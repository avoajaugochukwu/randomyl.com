import { Metadata } from 'next';
import Link from 'next/link';
import TriviaGenerator from './TriviaGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Trivia Questions Generator',
  description: 'Free trivia questions generator with answers. Random trivia across general knowledge, history, science, movies, sports, and more. Instant, no sign-up.',
  openGraph: { title: 'Trivia Questions Generator | Randomyl', description: 'Random trivia questions with answers, by category. Free and instant — perfect for quiz night.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/trivia-questions-generator`,
    languages: { 'en-US': `${baseUrl}/tools/trivia-questions-generator`, 'x-default': `${baseUrl}/tools/trivia-questions-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Trivia Questions Generator',
  applicationCategory: 'GameApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/trivia-questions-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function TriviaGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Trivia Questions Generator"
        description="Get random trivia questions with answers — general knowledge, history, science, movies, music, sports, and animals. Free, instant, perfect for quiz night and the classroom."
        tag="Generator · Fun & Social"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Trivia Questions Generator' }]}
      />
      <section className="wrap" id="app">
        <TriviaGenerator />
      </section>
      <section className="wrap">
        <p className="prose-intro">
          Hosting a full quiz night? Mix in some{' '}
          <Link href="/tools/would-you-rather-generator">would you rather</Link> rounds, or warm the
          group up with{' '}
          <Link href="/blog/icebreaker-questions">icebreaker questions</Link>.
        </p>
      </section>
      <ToolDescription toolKey="trivia" />
      <FAQList type="trivia" />
      <OtherTools current="trivia" />
    </>
  );
}
