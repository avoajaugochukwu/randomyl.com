import { Metadata } from 'next';
import Link from 'next/link';
import NeverHaveIEverGenerator from './NeverHaveIEverGenerator';
import Hero from '@/components/common/Hero';
import { FAQList } from '@/components/common/faq/FAQList';
import ToolDescription from '../components/descriptions/Description';
import OtherTools from '@/components/tools/OtherTools';
import { baseUrl } from '@/app/metadata';

export const metadata: Metadata = {
  title: 'Never Have I Ever Generator',
  description: 'Free Never Have I Ever generator. Random prompts by category — classic, funny, party, couples, and kid-friendly. Instant, no sign-up.',
  openGraph: { title: 'Never Have I Ever Generator | Randomyl', description: 'Random Never Have I Ever questions by category. Free and instant — perfect for game night.', type: 'website' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/tools/never-have-i-ever-generator`,
    languages: { 'en-US': `${baseUrl}/tools/never-have-i-ever-generator`, 'x-default': `${baseUrl}/tools/never-have-i-ever-generator` },
  },
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Never Have I Ever Generator',
  applicationCategory: 'GameApplication', operatingSystem: 'Any',
  url: `${baseUrl}/tools/never-have-i-ever-generator`, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function NeverHaveIEverGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero
        title="Never Have I Ever Generator"
        description="Get random Never Have I Ever prompts by category — classic, funny, party, couples, and kid-friendly. Free, instant, perfect for parties and game night."
        tag="Generator · Fun & Social"
        crumb={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Never Have I Ever Generator' }]}
      />
      <section className="wrap" id="app">
        <NeverHaveIEverGenerator />
      </section>
      <section className="wrap">
        <p className="prose-intro">
          Keep the games going with{' '}
          <Link href="/tools/truth-or-dare-generator">truth or dare</Link>,{' '}
          <Link href="/tools/would-you-rather-generator">would you rather</Link>, or a round of{' '}
          <Link href="/tools/trivia-questions-generator">trivia</Link>.
        </p>
      </section>
      <ToolDescription toolKey="neverhaveiever" />
      <FAQList type="neverhaveiever" />
      <OtherTools current="neverhaveiever" />
    </>
  );
}
